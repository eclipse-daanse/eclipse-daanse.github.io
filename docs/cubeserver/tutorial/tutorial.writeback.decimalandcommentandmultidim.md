---
title: Writeback Multi-Dimension
group: Writeback
kind: TUTORIAL
number: 2.05.08
---
# Daanse Tutorial - Writeback Multi-Dimension

**Daanse Tutorial — Writeback with two dimensions, one of them
multi-level.**

Extends the single-dimension `tutorial.writeback.decimal`
example with a second dimension (`Region`) that has **two**
levels (`Country → City`). The point: writeback works the
same way regardless of the slicer's depth — the runtime
always writes the leaf-key value of every connected
dimension into the writeback table, no matter which level
the user typed at in the UI.

The cube exposes:
- **`Amount`** — `SumMeasure` over a `DECIMAL(18,2)` column.
- **`Comments`** — `TextAggMeasure` over a `VARCHAR` column.

Two `DimensionConnector`s (Product, Region) both feed
`WritebackAttribute`s pointing at the matching writeback
columns. The `Region` connector's foreign key is the
leaf-level `CITY` column on the fact — exactly the column
the writeback row will carry.


## Database Schema

Four tables:

- **`FACT`** — `PRODUCT` (VARCHAR), `CITY` (VARCHAR),
  `AMOUNT` (DECIMAL), `COMMENT` (VARCHAR).
- **`PRODUCT`** — `KEY` (VARCHAR), `NAME` (VARCHAR).
- **`REGION`** — `COUNTRY_KEY` (VARCHAR), `COUNTRY_NAME`
  (VARCHAR), `CITY_KEY` (VARCHAR), `CITY_NAME` (VARCHAR).
  Single denormalised table that lists every city with its
  owning country.
- **`FACTWB`** — `PRODUCT` (VARCHAR), `CITY` (VARCHAR),
  `AMOUNT` (DECIMAL), `COMMENT` (VARCHAR), `ID` (VARCHAR,
  UUID written by the engine), `USER` (VARCHAR, session
  user).


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_product" name="PRODUCT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_city" name="CITY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_product" name="PRODUCT">
    <feature xsi:type="relational:Column" xmi:id="_column_product_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_name" name="NAME"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_region" name="REGION">
    <feature xsi:type="relational:Column" xmi:id="_column_region_country_key" name="COUNTRY_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_country_name" name="COUNTRY_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_city_key" name="CITY_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_city_name" name="CITY_NAME"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_product" name="PRODUCT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_city" name="CITY"/>
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
    <feature xsi:type="relational:Column" xmi:id="_column_fact_city" name="CITY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product dimension (1 level)

Same single-level shape as the `tutorial.writeback.decimal`
tutorial — `Product` dim keyed on `PRODUCT.KEY` with the
displayed name from `PRODUCT.NAME`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_product"/>
  <relational:Table xmi:id="_table_product" name="PRODUCT">
    <feature xsi:type="relational:Column" xmi:id="_column_product_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_name" name="NAME"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product" name="Product" allMemberName="All Products" primaryKey="_column_product_key" source="_tablesource_product" levels="_level_product"/>
  <rolaplev:Level xmi:id="_level_product" name="Product" column="_column_product_key" nameColumn="_column_product_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Region dimension (2 levels)

`Region` is a two-level `ExplicitHierarchy` on a single
denormalised `REGION` table (no snowflake join):

- **`Country`** (L1) — keyed on `REGION.COUNTRY_KEY`,
  `uniqueMembers = true`. Each country is unique.
- **`City`** (L2, leaf) — keyed on `REGION.CITY_KEY`,
  `uniqueMembers = false`. Different countries can share a
  city *name*, but the (country, city) pair is unique.

The fact joins on the leaf: `FACT.CITY = REGION.CITY_KEY`.
Aggregations across a country roll up its cities through the
standard SQL `GROUP BY` path.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_region" name="Region" hierarchies="_explicithierarchy_region"/>
  <relational:Table xmi:id="_table_region" name="REGION">
    <feature xsi:type="relational:Column" xmi:id="_column_region_country_key" name="COUNTRY_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_country_name" name="COUNTRY_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_city_key" name="CITY_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_city_name" name="CITY_NAME"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_region_city_key" nameColumn="_column_region_city_name"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_region_country_key" nameColumn="_column_region_country_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_region" name="Region" allMemberName="All Regions" primaryKey="_column_region_city_key" source="_tablesource_region" levels="_level_country _level_city"/>
  <rolapsrc:TableSource xmi:id="_tablesource_region" table="_table_region"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Writeback (FACTWB)

```
WritebackTable("FACTWB")                     [database.writeback]
  ├── WritebackAttribute(Product) → PRODUCT  [database.writeback]
  ├── WritebackAttribute(Region)  → CITY     [database.writeback]
  ├── WritebackMeasure("Amount")  → AMOUNT   [olap.cube.measure]
  └── WritebackMeasure("Comments") → COMMENT [olap.cube.measure]
```

**Two-dimensional cell coordinates.** Every cell in this
cube has a (Product, City) coordinate. A
`Cell.setValue([Measures].[Amount], 99.95, ...)` issued at
an intermediate `Country` member is allocated across the
country's cities (each city gets `99.95 / N`); a write at a
specific city goes directly to that one leaf.

**Text writeback semantics.** The `Comments` measure follows
the text short-path: a single row at the cell's exact
(Product, City-or-Country) coordinate; intermediate-level
writes record the country's `COUNTRY_KEY` as the city
attribute (since `Region`'s writeback attribute targets the
`CITY` column). At read time the `ListAggAggregator`
re-aggregates everything through SQL.

**Both writeable measures share the same writeback table.**
Numeric and text writes interleave freely; each call
produces its own row(s) tagged with a fresh UUID `ID` and
the session `USER`.


```xml
<rolapwb:WritebackTable xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapwb="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/writeback" xmi:id="_writebacktable_factwb" name="FACTWB">
  <writebackAttribute xmi:id="_writebackattribute_product">
    <column href="_column_factwb_product"/>
    <dimensionConnector href="_dimensionconnector_product"/>
  </writebackAttribute>
  <writebackAttribute xmi:id="_writebackattribute_city">
    <column href="_column_factwb_city"/>
    <dimensionConnector href="_dimensionconnector_region"/>
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

One physical cube `C` over `FACT` with two
`DimensionConnector`s (Product, Region), one `MeasureGroup`
holding the decimal `Amount` plus the text `Comments`
measure, and the `FACTWB` writeback table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" source="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_product" foreignKey="_column_fact_product" dimension="_standarddimension_product" overrideDimensionName="Product"/>
    <dimensionConnectors xmi:id="_dimensionconnector_region" foreignKey="_column_fact_city" dimension="_standarddimension_region" overrideDimensionName="Region"/>
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackAttribute xmi:id="_writebackattribute_product" dimensionConnector="_dimensionconnector_product">
        <column href="_column_factwb_product"/>
      </writebackAttribute>
      <writebackAttribute xmi:id="_writebackattribute_city" dimensionConnector="_dimensionconnector_region">
        <column href="_column_factwb_city"/>
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
  <relational:Table xmi:id="_table_product" name="PRODUCT">
    <feature xsi:type="relational:Column" xmi:id="_column_product_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_name" name="NAME"/>
  </relational:Table>
  <relational:Table xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_product" name="PRODUCT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_city" name="CITY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_region" name="Region" allMemberName="All Regions" primaryKey="_column_region_city_key" source="_tablesource_region" levels="_level_country _level_city"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_region" name="Region" hierarchies="_explicithierarchy_region"/>
  <relational:Table xmi:id="_table_region" name="REGION">
    <feature xsi:type="relational:Column" xmi:id="_column_region_country_key" name="COUNTRY_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_country_name" name="COUNTRY_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_city_key" name="CITY_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_region_city_name" name="CITY_NAME"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_region_city_key" nameColumn="_column_region_city_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product" name="Product" allMemberName="All Products" primaryKey="_column_product_key" source="_tablesource_product" levels="_level_product"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_region_country_key" nameColumn="_column_region_country_name" uniqueMembers="true"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_product"/>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <rolaplev:Level xmi:id="_level_product" name="Product" column="_column_product_key" nameColumn="_column_product_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_region" table="_table_region"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_factwb_product _column_fact_city _column_factwb_city _column_region_city_key _column_region_city_name _column_factwb_comment _column_fact_comment _column_region_country_key _column_region_country_name _column_factwb_id _column_product_key _column_product_name _column_fact_product _column_factwb_user" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_decimal" name="DECIMAL" structuralFeature="_column_fact_amount _column_factwb_amount" typeNumber="3" numericPrecision="18" numericPrecisionRadix="10" numericScale="2"/>
  <rolapcat:Catalog xmi:id="_catalog_writeback_multi_dimension" description="Writeback example with two dimensions; the Region dimension has two levels." name="Daanse Tutorial - Writeback Multi-Dimension" cubes="_physicalcube_c" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_product" name="PRODUCT" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_city" name="CITY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_amount" name="AMOUNT" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_product" name="PRODUCT">
      <feature xsi:type="relational:Column" xmi:id="_column_product_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_region" name="REGION">
      <feature xsi:type="relational:Column" xmi:id="_column_region_country_key" name="COUNTRY_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_region_country_name" name="COUNTRY_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_region_city_key" name="CITY_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_region_city_name" name="CITY_NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_product" name="PRODUCT" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_city" name="CITY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_amount" name="AMOUNT" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_comment" name="COMMENT" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_id" name="ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_user" name="USER" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <rolapsrc:TableSource xmi:id="_tablesource_region" table="_table_region"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_region_city_key" nameColumn="_column_region_city_name"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_region_country_key" nameColumn="_column_region_country_name" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_product" name="Product" column="_column_product_key" nameColumn="_column_product_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product" name="Product" allMemberName="All Products" primaryKey="_column_product_key" source="_tablesource_product" levels="_level_product"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_region" name="Region" allMemberName="All Regions" primaryKey="_column_region_city_key" source="_tablesource_region" levels="_level_country _level_city"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_product"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_region" name="Region" hierarchies="_explicithierarchy_region"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" source="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_product" foreignKey="_column_fact_product" dimension="_standarddimension_product" overrideDimensionName="Product"/>
    <dimensionConnectors xmi:id="_dimensionconnector_region" foreignKey="_column_fact_city" dimension="_standarddimension_region" overrideDimensionName="Region"/>
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackAttribute xmi:id="_writebackattribute_product" column="_column_factwb_product" dimensionConnector="_dimensionconnector_product"/>
      <writebackAttribute xmi:id="_writebackattribute_city" column="_column_factwb_city" dimensionConnector="_dimensionconnector_region"/>
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

<a href="./zip/tutorial.writeback.decimalandcommentandmultidim.zip" download>Download Zip File</a>
