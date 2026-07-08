---
title: Writeback Text Aggregation
group: Writeback
kind: TUTORIAL
number: 2.05.05
---
# Daanse Tutorial - Writeback Text Aggregation

**Daanse Tutorial — Writeback with text aggregation.**

This is the minimal example demonstrating *two-kind* writeback in one
cube:

- a numeric `Amount` measure backed by `SumMeasure` over an `AMOUNT`
  column, with the usual allocation-policy semantics on write-back;
- a text `Comments` measure backed by `TextAggMeasure` over a
  `COMMENT` column. On read it concatenates every matching cell's
  `COMMENT` value using the configured separator; on **write** the
  daanse runtime appends a single row to the writeback table with
  the typed string for the cell's exact coordinates.

The writeback table `FACTWB` carries one `WritebackAttribute` for the
dimension and two `WritebackMeasure`s — one numeric, one text. The
runtime detects the text target from its aggregator type
(`ListAggAggregator` ⇒ `Datatype.VARCHAR`) and short-circuits the
allocation flow for that path, so text values land verbatim instead
of being split numerically across descendants.


## Database Schema

The database schema contains two tables:

- **`FACT`** — `CATEGORY`, `AMOUNT`, `COMMENT`. One row per posting.
- **`CATEGORY`** — `CATEGORY`, `NAME`. The single dimension table.
- **`FACTWB`** — `CATEGORY`, `AMOUNT`, `COMMENT`, `ID`, `USER`. The
  writeback target. `ID` is filled by the engine with a UUID,
  `USER` with the session user.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_category" name="CATEGORY">
    <feature xsi:type="relational:Column" xmi:id="_column_category_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_category_name" name="NAME"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_amount" name="AMOUNT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_comment" name="COMMENT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_user" name="USER"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Fact Query

Plain TableSource over the FACT table.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Category dimension

Single dimension `Category` with one explicit hierarchy and one level
keyed on `CATEGORY`. The fact joins on `FACT.CATEGORY = CATEGORY.CATEGORY`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_category" name="Category" hierarchies="_explicithierarchy_category"/>
  <relational:Table xmi:id="_table_category" name="CATEGORY">
    <feature xsi:type="relational:Column" xmi:id="_column_category_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_category_name" name="NAME"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_category" name="Category" column="_column_category_category" nameColumn="_column_category_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_category" table="_table_category"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_category" name="Category" allMemberName="All Categories" primaryKey="_column_category_category" source="_tablesource_category" levels="_level_category"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measures (numeric + text)

Two stored measures share the same fact source:

- `Amount` — `SumMeasure(AMOUNT)`. Numeric, currency-formatted.
- `Comments` — `TextAggMeasure(COMMENT, separator = " | ")`. The
  read-side aggregator concatenates all matching comments at every
  level the slice rolls up to.


## Writeback (FACTWB)

The cube wires both measures into the same `FACTWB` writeback table:

```
WritebackTable("FACTWB")                                     [database.writeback]
  ├── WritebackAttribute(Category connector) → CATEGORY     [database.writeback]
  ├── WritebackMeasure("Amount")             → AMOUNT       [olap.cube.measure]
  └── WritebackMeasure("Comments")           → COMMENT      [olap.cube.measure]
```

**Where these classes live in the ecore.** `WritebackMeasure` is
no longer a sibling of the writeback *infrastructure*
(`WritebackTable`, `WritebackAttribute`). It now sits in the
`olap/cube/measure/` ecore package next to `SumMeasure`,
`TextAggMeasure` and the other base measures, because a writeback
measure is conceptually a measure — it names a cube measure by
its logical name and just happens to be paired with a database
column for persistence. Concretely:

- Java package:
  `org.eclipse.daanse.rolap.mapping.model.olap.cube.measure.WritebackMeasure`
  (was `…database.writeback.WritebackMeasure`).
- Factory call:
  `MeasureFactory.eINSTANCE.createWritebackMeasure()`
  (was `WritebackFactory.eINSTANCE.createWritebackMeasure()`).
- XMI namespace prefix: `rolapmeas:WritebackMeasure`
  (was `rolapdwriteback:WritebackMeasure`).

**Runtime behaviour.** When the client calls
`Cell.setValue([Measures].[Amount], 42.0, ...)` the runtime
allocates the numeric value across the cell's leaves (per
`AllocationPolicy`) and emits one or more rows with `AMOUNT`
populated. When the client calls
`Cell.setValue([Measures].[Comments], "on track", ...)` the
runtime recognises the `TextAggMeasure` target by its aggregator
(`ListAggAggregator` ⇒ `Datatype.VARCHAR`), **bypasses
allocation**, and emits exactly one row keyed by the cell's
coordinates with `COMMENT` set and `AMOUNT` left `NULL`. The
engine appends `ID = UUID()` and `USER = sessionUser`.

Re-running an MDX query for either measure folds the new
writeback row in via the normal aggregation path — `SUM` for
`Amount`, `TextAgg` (string concat) for `Comments`.


```xml
<rolapwb:WritebackTable xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapwb="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/writeback" xmi:id="_writebacktable_factwb" name="FACTWB">
  <writebackAttribute xmi:id="_writebackattribute_category">
    <column href="_column_factwb_category"/>
    <dimensionConnector href="_dimensionconnector_category"/>
  </writebackAttribute>
  <writebackMeasure xmi:id="_writebackmeasure_amount" name="Amount">
    <column href="_column_factwb_amount"/>
  </writebackMeasure>
  <writebackMeasure xmi:id="_writebackmeasure_comments" name="Comments">
    <column href="_column_factwb_comment"/>
  </writebackMeasure>
</rolapwb:WritebackTable>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube C

One physical cube `C` over the `FACT` table with one
`DimensionConnector` and one `MeasureGroup` holding both measures,
referencing the `FACTWB` writeback table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" source="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_category" foreignKey="_column_fact_category" dimension="_standarddimension_category" overrideDimensionName="Category"/>
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackAttribute xmi:id="_writebackattribute_category" dimensionConnector="_dimensionconnector_category">
        <column href="_column_factwb_category"/>
      </writebackAttribute>
      <writebackMeasure xmi:id="_writebackmeasure_amount" name="Amount">
        <column href="_column_factwb_amount"/>
      </writebackMeasure>
      <writebackMeasure xmi:id="_writebackmeasure_comments" name="Comments">
        <column href="_column_factwb_comment"/>
      </writebackMeasure>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_amount" name="Amount" formatString=",##0" column="_column_fact_amount"/>
      <measures xsi:type="rolapmeas:TextAggMeasure" xmi:id="_textaggmeasure_comments" name="Comments" column="_column_fact_comment" separator=" | ">
        <orderByColumns href="_orderedcolumn_comment"/>
      </measures>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_category" name="Category" allMemberName="All Categories" primaryKey="_column_category_category" source="_tablesource_category" levels="_level_category"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_category" name="CATEGORY">
    <feature xsi:type="relational:Column" xmi:id="_column_category_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_category_name" name="NAME"/>
  </relational:Table>
  <relational:Table xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_category" table="_table_category"/>
  <rolaplev:Level xmi:id="_level_category" name="Category" column="_column_category_category" nameColumn="_column_category_name" uniqueMembers="true"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_category" name="Category" hierarchies="_explicithierarchy_category"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaprel:OrderedColumn xmi:id="_orderedcolumn_comment" column="_column_fact_comment"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_comment _column_fact_category _column_category_category _column_factwb_category _column_factwb_comment _column_factwb_id _column_category_name _column_factwb_user" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_factwb_amount _column_fact_amount" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_writeback_text_aggregation" description="Minimal writeback example: numeric SumMeasure + text TextAggMeasure in the same writeback table." name="Daanse Tutorial - Writeback Text Aggregation" cubes="_physicalcube_c" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_category" name="CATEGORY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_category" name="CATEGORY">
      <feature xsi:type="relational:Column" xmi:id="_column_category_category" name="CATEGORY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_category_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_category" name="CATEGORY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_amount" name="AMOUNT" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_comment" name="COMMENT" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_id" name="ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_user" name="USER" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_category" table="_table_category"/>
  <rolaplev:Level xmi:id="_level_category" name="Category" column="_column_category_category" nameColumn="_column_category_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_category" name="Category" allMemberName="All Categories" primaryKey="_column_category_category" source="_tablesource_category" levels="_level_category"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_category" name="Category" hierarchies="_explicithierarchy_category"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" source="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_category" foreignKey="_column_fact_category" dimension="_standarddimension_category" overrideDimensionName="Category"/>
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackAttribute xmi:id="_writebackattribute_category" column="_column_factwb_category" dimensionConnector="_dimensionconnector_category"/>
      <writebackMeasure xmi:id="_writebackmeasure_amount" column="_column_factwb_amount" name="Amount"/>
      <writebackMeasure xmi:id="_writebackmeasure_comments" column="_column_factwb_comment" name="Comments"/>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_amount" name="Amount" formatString="#,##0" column="_column_fact_amount"/>
      <measures xsi:type="rolapmeas:TextAggMeasure" xmi:id="_textaggmeasure_comments" name="Comments" column="_column_fact_comment" orderByColumns="_orderedcolumn_comment" separator=" | "/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.writeback.textagg.zip" download>Download Zip File</a>
