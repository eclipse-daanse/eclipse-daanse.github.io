---
title: Writeback Virtual Cube
group: Writeback
kind: TUTORIAL
number: 2.05.06
---
# Daanse Tutorial - Writeback Virtual Cube

**Daanse Tutorial — Writeback combined through a Virtual Cube.**

Two physical cubes sharing the same dimensions, one read-only and
one writeback, joined through a `VirtualCube`.

- `CN` (Cube-Numeric) — fact `FACT_N`, one `SumMeasure(Amount)`,
  **no writeback table**. Stays read-only.
- `CT` (Cube-Text)    — fact `FACT_T`, one `TextAggMeasure(Comments)`
  **plus a numeric `SumMeasure(Value)`**, **writeback enabled** to
  `FACTWB_T`. Each cell update writes one row carrying either the
  typed string in `COMMENT` or the numeric `VALUE` payload.
- `V`  (VirtualCube)  — references both physical cubes and exposes
  `Amount`, `Value` and `Comments` together. The same `Category`
  and `Region` dimensions show up across both cubes via per-cube
  `DimensionConnector` instances pointing at the same shared
  `StandardDimension`.

Why two cubes? `PhysicalCube.writebackTable` is per-cube in the
ecore. A `VirtualCube` has no writeback field. Mixing a measure
you want to write and one you don't on the same physical cube
entangles their fact-table union behind one writeback table —
cleaner to split into two cubes and combine views above them.


## Database Schema

Five tables in one schema:

- `CATEGORY(CATEGORY, NAME)` — dimension table.
- `REGION(REGION, NAME)`     — dimension table.
- `FACT_N(CATEGORY, REGION, AMOUNT)`         — Cube CN's facts.
- `FACT_T(CATEGORY, REGION, VALUE, COMMENT)` — Cube CT's facts.
- `FACTWB_T(CATEGORY, REGION, VALUE, COMMENT, ID, USER)` —
  writeback target for Cube CT. Both the numeric `VALUE` column
  and the text `COMMENT` column are writeable. `ID` is filled
  with a UUID by the runtime, `USER` with the session user.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact_n" name="FACT_N">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_n_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_n_region" name="REGION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_n_amount" name="AMOUNT"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact_t" name="FACT_T">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_t_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_t_region" name="REGION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_t_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_t_comment" name="COMMENT"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_category" name="CATEGORY">
    <feature xsi:type="relational:Column" xmi:id="_column_category_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_category_name" name="NAME"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_region" name="REGION">
    <feature xsi:type="relational:Column" xmi:id="_column_region_region" name="REGION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_name" name="NAME"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb_t" name="FACTWB_T">
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_region" name="REGION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_comment" name="COMMENT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_user" name="USER"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimensions (shared)

Two `StandardDimension` instances at catalog scope:

- `Category` — explicit hierarchy with one level keyed on
  `CATEGORY.CATEGORY`, name from `CATEGORY.NAME`.
- `Region`   — explicit hierarchy with one level keyed on
  `REGION.REGION`, name from `REGION.NAME`.

Each physical cube gets its own `DimensionConnector` per
dimension. All connectors `setDimension(...)` on the same
shared dimension instance. The `VirtualCube` aggregates all
four connectors so the same hierarchies surface for both
cubes' measures.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_category" name="Category" hierarchies="_explicithierarchy_category"/>
  <relational:Table xmi:id="_table_category" name="CATEGORY">
    <feature xsi:type="relational:Column" xmi:id="_column_category_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_category_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_category" table="_table_category"/>
  <rolaplev:Level xmi:id="_level_category" name="Category" column="_column_category_category" nameColumn="_column_category_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_category" name="Category" allMemberName="All Categories" primaryKey="_column_category_category" source="_tablesource_category" levels="_level_category"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube CN (read-only, numeric)

`CN` is a plain read-only cube:

- `TableSource` over `FACT_N`.
- `DimensionConnector`s for `Category` (FK = `FACT_N.CATEGORY`)
  and `Region` (FK = `FACT_N.REGION`).
- One `MeasureGroup` containing `Amount = SumMeasure(AMOUNT)`.
- No `writebackTable`. Writebacks targeting `[Measures].[Amount]`
  are a no-op on this cube.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cn" name="CN" source="_tablesource_fact_n">
    <dimensionConnectors xmi:id="_dimensionconnector_category" foreignKey="_column_fact_n_category" dimension="_standarddimension_category" overrideDimensionName="Category"/>
    <dimensionConnectors xmi:id="_dimensionconnector_region" foreignKey="_column_fact_n_region" dimension="_standarddimension_region" overrideDimensionName="Region"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_amount" name="Amount" formatString=",##0" column="_column_fact_n_amount"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapdim:StandardDimension xmi:id="_standarddimension_category" name="Category" hierarchies="_explicithierarchy_category"/>
  <relational:Table xmi:id="_table_category" name="CATEGORY">
    <feature xsi:type="relational:Column" xmi:id="_column_category_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_category_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_region" table="_table_region"/>
  <rolapsrc:TableSource xmi:id="_tablesource_category" table="_table_category"/>
  <rolaplev:Level xmi:id="_level_category" name="Category" column="_column_category_category" nameColumn="_column_category_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_category" name="Category" allMemberName="All Categories" primaryKey="_column_category_category" source="_tablesource_category" levels="_level_category"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact_n" table="_table_fact_n"/>
  <relational:Table xmi:id="_table_fact_n" name="FACT_N">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_n_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_n_region" name="REGION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_n_amount" name="AMOUNT"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_region" name="Region" allMemberName="All Regions" primaryKey="_column_region_region" source="_tablesource_region" levels="_level_region"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_region" name="Region" hierarchies="_explicithierarchy_region"/>
  <rolaplev:Level xmi:id="_level_region" name="Region" column="_column_region_region" nameColumn="_column_region_name" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_region" name="REGION">
    <feature xsi:type="relational:Column" xmi:id="_column_region_region" name="REGION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube CT (writeback, text)

`CT` carries the writeback measures — one numeric, one text:

- `TableSource` over `FACT_T`.
- `DimensionConnector`s for `Category` (FK = `FACT_T.CATEGORY`)
  and `Region` (FK = `FACT_T.REGION`).
- One `MeasureGroup` containing
  `Value = SumMeasure(VALUE)` and
  `Comments = TextAggMeasure(COMMENT, separator = " | ")`.
- `WritebackTable("FACTWB_T")` with two
  `WritebackAttribute`s (one per dimension connector) and two
  `WritebackMeasure` entries:
  `Value` → `FACTWB_T.VALUE` and `Comments` → `FACTWB_T.COMMENT`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_ct" name="CT" source="_tablesource_fact_t">
    <dimensionConnectors xmi:id="_dimensionconnector_category" foreignKey="_column_fact_t_category" dimension="_standarddimension_category" overrideDimensionName="Category"/>
    <dimensionConnectors xmi:id="_dimensionconnector_region" foreignKey="_column_fact_t_region" dimension="_standarddimension_region" overrideDimensionName="Region"/>
    <writebackTable xmi:id="_writebacktable_factwb_t" name="FACTWB_T">
      <writebackAttribute xmi:id="_writebackattribute_category" dimensionConnector="_dimensionconnector_category">
        <column href="_column_factwb_t_category"/>
      </writebackAttribute>
      <writebackAttribute xmi:id="_writebackattribute_region" dimensionConnector="_dimensionconnector_region">
        <column href="_column_factwb_t_region"/>
      </writebackAttribute>
      <writebackMeasure xmi:id="_writebackmeasure_value" name="Value">
        <column href="_column_factwb_t_value"/>
      </writebackMeasure>
      <writebackMeasure xmi:id="_writebackmeasure_comments" name="Comments">
        <column href="_column_factwb_t_comment"/>
      </writebackMeasure>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_value" name="Value" formatString=",##0" column="_column_fact_t_value"/>
      <measures xsi:type="rolapmeas:TextAggMeasure" xmi:id="_textaggmeasure_comments" name="Comments" column="_column_fact_t_comment" separator=" | ">
        <orderByColumns href="_orderedcolumn_comment"/>
      </measures>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <relational:Table xmi:id="_table_fact_t" name="FACT_T">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_t_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_t_region" name="REGION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_t_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_t_comment" name="COMMENT"/>
  </relational:Table>
  <rolapdim:StandardDimension xmi:id="_standarddimension_category" name="Category" hierarchies="_explicithierarchy_category"/>
  <relational:Table xmi:id="_table_category" name="CATEGORY">
    <feature xsi:type="relational:Column" xmi:id="_column_category_category" name="CATEGORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_category_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_region" table="_table_region"/>
  <rolapsrc:TableSource xmi:id="_tablesource_category" table="_table_category"/>
  <rolaplev:Level xmi:id="_level_category" name="Category" column="_column_category_category" nameColumn="_column_category_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_category" name="Category" allMemberName="All Categories" primaryKey="_column_category_category" source="_tablesource_category" levels="_level_category"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact_t" table="_table_fact_t"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_region" name="Region" allMemberName="All Regions" primaryKey="_column_region_region" source="_tablesource_region" levels="_level_region"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_region" name="Region" hierarchies="_explicithierarchy_region"/>
  <rolaplev:Level xmi:id="_level_region" name="Region" column="_column_region_region" nameColumn="_column_region_name" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_region" name="REGION">
    <feature xsi:type="relational:Column" xmi:id="_column_region_region" name="REGION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Virtual Cube V

`V` is a `VirtualCube` that references both physical cubes.
Its `dimensionConnectors` are the four connectors above (two
from each cube, pointing at the same shared dimensions). Its
`referencedMeasures` are `Amount`, `Value` and `Comments`,
drawn from their respective underlying cubes.

Clients querying `[V]` see one logical schema combining both
facts. The default measure is `Amount`.


```xml
<rolapcube:VirtualCube xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_virtualcube_v" name="V">
  <defaultMeasure xsi:type="rolapmeas:SumMeasure" href="_summeasure_amount"/>
  <dimensionConnectors href="_dimensionconnector_category_2"/>
  <dimensionConnectors href="_dimensionconnector_region_2"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_amount"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_value"/>
  <referencedMeasures xsi:type="rolapmeas:TextAggMeasure" href="_textaggmeasure_comments"/>
</rolapcube:VirtualCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Writeback flow (FACTWB_T)

When the client writes to `([Category].[A], [Region].[N],
[Measures].[Comments]) = "hello"` through `[V]` (or directly
through `[CT]`), the runtime resolves the target measure to
`Comments` on cube `CT`, detects its
`Datatype.VARCHAR` (because `TextAggMeasure` resolves to
`ListAggAggregator`), and emits exactly one row into
`FACTWB_T` with `CATEGORY='A'`, `REGION='N'`,
`COMMENT='hello'`, the cell-key fields, `ID = UUID()` and
`USER = sessionUser`.

A numeric write to `([Category].[A], [Region].[N],
[Measures].[Value]) = 42` follows the same path: the runtime
resolves `Value` on cube `CT`, detects `Datatype.INTEGER` from
the `SumMeasure`, allocates the delta across matching rows and
emits `VALUE = 42` into `FACTWB_T` with the same cell-key
fields plus `ID` and `USER`.

No row is written for `[Measures].[Amount]` even via `[V]`,
because `Amount`'s owning cube `CN` has no writeback table.


```xml
<rolapwb:WritebackTable xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapwb="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/writeback" xmi:id="_writebacktable_factwb_t" name="FACTWB_T">
  <writebackAttribute xmi:id="_writebackattribute_category">
    <column href="_column_factwb_t_category"/>
    <dimensionConnector href="_dimensionconnector_category"/>
  </writebackAttribute>
  <writebackAttribute xmi:id="_writebackattribute_region">
    <column href="_column_factwb_t_region"/>
    <dimensionConnector href="_dimensionconnector_region"/>
  </writebackAttribute>
  <writebackMeasure xmi:id="_writebackmeasure_value" name="Value">
    <column href="_column_factwb_t_value"/>
  </writebackMeasure>
  <writebackMeasure xmi:id="_writebackmeasure_comments" name="Comments">
    <column href="_column_factwb_t_comment"/>
  </writebackMeasure>
</rolapwb:WritebackTable>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:DimensionConnector xmi:id="_dimensionconnector_region_2" foreignKey="_column_fact_n_region" dimension="_standarddimension_region" overrideDimensionName="Region"/>
  <rolaprel:OrderedColumn xmi:id="_orderedcolumn_comment" column="_column_fact_t_comment"/>
  <rolapdim:DimensionConnector xmi:id="_dimensionconnector_category_2" foreignKey="_column_fact_n_category" dimension="_standarddimension_category" overrideDimensionName="Category"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_factwb_t_category _column_category_category _column_fact_n_category _column_fact_t_category _column_fact_t_comment _column_factwb_t_comment _column_factwb_t_id _column_category_name _column_region_name _column_fact_t_region _column_fact_n_region _column_factwb_t_region _column_region_region _column_factwb_t_user" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_n_amount _column_fact_t_value _column_factwb_t_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_writeback_virtual_cube" description="Two physical cubes sharing Category + Region dimensions — one read-only (SumMeasure 'Amount'), one with text writeback (TextAggMeasure 'Comments') — combined through a VirtualCube. Demonstrates that writeback lives on the underlying PhysicalCube even when queries flow through the VirtualCube." name="Daanse Tutorial - Writeback Virtual Cube" cubes="_physicalcube_cn _physicalcube_ct _virtualcube_v" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact_n" name="FACT_N">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_n_category" name="CATEGORY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_n_region" name="REGION" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_n_amount" name="AMOUNT" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact_t" name="FACT_T">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_t_category" name="CATEGORY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_t_region" name="REGION" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_t_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_t_comment" name="COMMENT" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_category" name="CATEGORY">
      <feature xsi:type="relational:Column" xmi:id="_column_category_category" name="CATEGORY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_category_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_region" name="REGION">
      <feature xsi:type="relational:Column" xmi:id="_column_region_region" name="REGION" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_region_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb_t" name="FACTWB_T">
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_category" name="CATEGORY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_region" name="REGION" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_comment" name="COMMENT" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_id" name="ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_t_user" name="USER" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact_t" table="_table_fact_t"/>
  <rolapsrc:TableSource xmi:id="_tablesource_region" table="_table_region"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact_n" table="_table_fact_n"/>
  <rolapsrc:TableSource xmi:id="_tablesource_category" table="_table_category"/>
  <rolaplev:Level xmi:id="_level_category" name="Category" column="_column_category_category" nameColumn="_column_category_name" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_region" name="Region" column="_column_region_region" nameColumn="_column_region_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_category" name="Category" allMemberName="All Categories" primaryKey="_column_category_category" source="_tablesource_category" levels="_level_category"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_region" name="Region" allMemberName="All Regions" primaryKey="_column_region_region" source="_tablesource_region" levels="_level_region"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_category" name="Category" hierarchies="_explicithierarchy_category"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_region" name="Region" hierarchies="_explicithierarchy_region"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cn" name="CN" source="_tablesource_fact_n">
    <dimensionConnectors xmi:id="_dimensionconnector_category_1" foreignKey="_column_fact_n_category" dimension="_standarddimension_category" overrideDimensionName="Category"/>
    <dimensionConnectors xmi:id="_dimensionconnector_region_1" foreignKey="_column_fact_n_region" dimension="_standarddimension_region" overrideDimensionName="Region"/>
    <measureGroups xmi:id="_measuregroup_1">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_amount" name="Amount" formatString="#,##0" column="_column_fact_n_amount"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_ct" name="CT" source="_tablesource_fact_t">
    <dimensionConnectors xmi:id="_dimensionconnector_category" foreignKey="_column_fact_t_category" dimension="_standarddimension_category" overrideDimensionName="Category"/>
    <dimensionConnectors xmi:id="_dimensionconnector_region" foreignKey="_column_fact_t_region" dimension="_standarddimension_region" overrideDimensionName="Region"/>
    <writebackTable xmi:id="_writebacktable_factwb_t" name="FACTWB_T">
      <writebackAttribute xmi:id="_writebackattribute_category" column="_column_factwb_t_category" dimensionConnector="_dimensionconnector_category"/>
      <writebackAttribute xmi:id="_writebackattribute_region" column="_column_factwb_t_region" dimensionConnector="_dimensionconnector_region"/>
      <writebackMeasure xmi:id="_writebackmeasure_value" column="_column_factwb_t_value" name="Value"/>
      <writebackMeasure xmi:id="_writebackmeasure_comments" column="_column_factwb_t_comment" name="Comments"/>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_value" name="Value" formatString="#,##0" column="_column_fact_t_value"/>
      <measures xsi:type="rolapmeas:TextAggMeasure" xmi:id="_textaggmeasure_comments" name="Comments" column="_column_fact_t_comment" orderByColumns="_orderedcolumn_comment" separator=" | "/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:VirtualCube xmi:id="_virtualcube_v" name="V" defaultMeasure="_summeasure_amount" dimensionConnectors="_dimensionconnector_category_2 _dimensionconnector_region_2" referencedMeasures="_summeasure_amount _summeasure_value _textaggmeasure_comments"/>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.writeback.virtualcube.zip" download>Download Zip File</a>
