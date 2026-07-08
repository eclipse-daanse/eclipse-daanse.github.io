---
title: Writeback Decimal + Comment
group: Writeback
kind: TUTORIAL
number: 2.05.07
---
# Daanse Tutorial - Writeback Decimal + Comment

**Daanse Tutorial — Writeback with a DECIMAL amount and a text comment.**

The minimal writeback example that uses a fixed-precision
**decimal** numeric type (not integer) for the writeable amount
column, paired with a free-text comment column. One single-level
dimension (`Product`) supplies the slicing key.

This is the simplest realistic shape for a planning/forecasting
cube where users type currency amounts (which require decimal
precision) along with explanatory notes.

The cube exposes:
- **`Amount`** — `SumMeasure` over a `DECIMAL(18,2)` `AMOUNT`
  column. Currency-formatted.
- **`Comments`** — `TextAggMeasure` over a `VARCHAR` `COMMENT`
  column with separator `" | "`.

Both measures are writeable via the `FACTWB` writeback table.
The runtime detects the text bind type for the `Comments`
measure from its `ListAggAggregator`; the numeric `Amount`
measure follows the standard allocation path.


## Database Schema

Three tables:

- **`FACT`** — `PRODUCT` (VARCHAR), `AMOUNT` (DECIMAL),
  `COMMENT` (VARCHAR). One row per posting.
- **`PRODUCT`** — `KEY` (VARCHAR), `NAME` (VARCHAR). The single
  dimension table; the fact joins on
  `FACT.PRODUCT = PRODUCT.KEY`.
- **`FACTWB`** — same dimensional + measure columns as `FACT`,
  plus `ID` (VARCHAR, UUID written by the engine) and `USER`
  (VARCHAR, session user).


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_product" name="PRODUCT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_product" name="PRODUCT">
    <feature xsi:type="relational:Column" xmi:id="_column_product_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_name" name="NAME"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_product" name="PRODUCT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_amount" name="AMOUNT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_comment" name="COMMENT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_user" name="USER"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Fact Query

Plain TableSource over FACT.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_product" name="PRODUCT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product dimension

Single dimension `Product` with one `ExplicitHierarchy` and a
single level. The level keys on `PRODUCT.KEY` and shows
`PRODUCT.NAME` as the displayed member name.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_product"/>
  <rolaplev:Level xmi:id="_level_product" name="Product" column="_column_product_key" nameColumn="_column_product_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product" name="Product" allMemberName="All Products" primaryKey="_column_product_key" source="_tablesource_product" levels="_level_product"/>
  <relational:Table xmi:id="_table_product" name="PRODUCT">
    <feature xsi:type="relational:Column" xmi:id="_column_product_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measures (decimal Amount + text Comments)

- **`Amount`** — `SumMeasure(FACT.AMOUNT)`. Note that the
  underlying column is declared `DECIMAL(18, 2)` rather than
  `INTEGER`, so the writeback binding preserves fractional
  precision (e.g. tax amounts, currency).
- **`Comments`** — `TextAggMeasure(FACT.COMMENT, separator = " | ")`.
  On read the aggregator concatenates every matching comment;
  on write the runtime takes the text short-path and inserts a
  single row with the typed string.


## Writeback (FACTWB)

```
WritebackTable("FACTWB")                     [database.writeback]
  ├── WritebackAttribute(Product) → PRODUCT  [database.writeback]
  ├── WritebackMeasure("Amount")  → AMOUNT   [olap.cube.measure]
  └── WritebackMeasure("Comments") → COMMENT [olap.cube.measure]
```

*Numeric write.* `Cell.setValue([Measures].[Amount], 19.95, EQUAL_ALLOCATION, ...)`
→ the runtime spreads `19.95` across the cell's leaves per the
allocation policy and emits the resulting rows with
`AMOUNT` populated as a decimal.

*Text write.* `Cell.setValue([Measures].[Comments], "promo Q3", ...)`
→ the runtime recognises the `TextAggMeasure` target, bypasses
allocation, and emits exactly one row with `COMMENT = "promo Q3"`
and `AMOUNT = NULL`. Every writeback row gets `ID = UUID()`
and `USER = sessionUser`.


```xml
<rolapwb:WritebackTable xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapwb="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/writeback" xmi:id="_writebacktable_factwb" name="FACTWB">
  <writebackAttribute xmi:id="_writebackattribute_product">
    <column href="_column_factwb_product"/>
    <dimensionConnector href="_dimensionconnector_product"/>
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

One physical cube `C` over `FACT` with one `DimensionConnector`
on `Product`, one `MeasureGroup` holding `Amount` and
`Comments`, and the `FACTWB` writeback table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" source="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_product" foreignKey="_column_fact_product" dimension="_standarddimension_product" overrideDimensionName="Product"/>
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackAttribute xmi:id="_writebackattribute_product" dimensionConnector="_dimensionconnector_product">
        <column href="_column_factwb_product"/>
      </writebackAttribute>
      <writebackMeasure xmi:id="_writebackmeasure_amount" name="Amount">
        <column href="_column_factwb_amount"/>
      </writebackMeasure>
      <writebackMeasure xmi:id="_writebackmeasure_comments" name="Comments">
        <column href="_column_factwb_comment"/>
      </writebackMeasure>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_amount" name="Amount" formatString=",##0.00" column="_column_fact_amount"/>
      <measures xsi:type="rolapmeas:TextAggMeasure" xmi:id="_textaggmeasure_comments" name="Comments" column="_column_fact_comment" separator=" | "/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_product" name="Product" column="_column_product_key" nameColumn="_column_product_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product" name="Product" allMemberName="All Products" primaryKey="_column_product_key" source="_tablesource_product" levels="_level_product"/>
  <relational:Table xmi:id="_table_product" name="PRODUCT">
    <feature xsi:type="relational:Column" xmi:id="_column_product_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <relational:Table xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_product" name="PRODUCT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT"/>
  </relational:Table>
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_product"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_factwb_product _column_fact_comment _column_factwb_comment _column_factwb_id _column_product_key _column_product_name _column_fact_product _column_factwb_user" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_decimal" name="DECIMAL" structuralFeature="_column_fact_amount _column_factwb_amount" typeNumber="3" numericPrecision="18" numericPrecisionRadix="10" numericScale="2"/>
  <rolapcat:Catalog xmi:id="_catalog_writeback_decimal_comment" description="Minimal writeback example with a DECIMAL amount and a text comment." name="Daanse Tutorial - Writeback Decimal + Comment" cubes="_physicalcube_c" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_product" name="PRODUCT" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_product" name="PRODUCT">
      <feature xsi:type="relational:Column" xmi:id="_column_product_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_product" name="PRODUCT" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_amount" name="AMOUNT" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_comment" name="COMMENT" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_id" name="ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_user" name="USER" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <rolaplev:Level xmi:id="_level_product" name="Product" column="_column_product_key" nameColumn="_column_product_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product" name="Product" allMemberName="All Products" primaryKey="_column_product_key" source="_tablesource_product" levels="_level_product"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_product"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" source="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_product" foreignKey="_column_fact_product" dimension="_standarddimension_product" overrideDimensionName="Product"/>
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackAttribute xmi:id="_writebackattribute_product" column="_column_factwb_product" dimensionConnector="_dimensionconnector_product"/>
      <writebackMeasure xmi:id="_writebackmeasure_amount" column="_column_factwb_amount" name="Amount"/>
      <writebackMeasure xmi:id="_writebackmeasure_comments" column="_column_factwb_comment" name="Comments"/>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_amount" name="Amount" formatString="#,##0.00" column="_column_fact_amount"/>
      <measures xsi:type="rolapmeas:TextAggMeasure" xmi:id="_textaggmeasure_comments" name="Comments" column="_column_fact_comment" separator=" | "/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.writeback.decimalandcomment.zip" download>Download Zip File</a>
