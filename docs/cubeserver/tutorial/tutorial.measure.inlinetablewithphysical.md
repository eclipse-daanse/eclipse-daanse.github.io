---
title: Measure Inline Table With Physical
group: Measure
kind: TUTORIAL
number: 2.12.3
---
# Daanse Tutorial - Measure Inline Table With Physical

Data cube combines Physical and InlineTable.
InlineTable represents a table with data embedded directly in the schema definition rather than referencing external database tables.
InlineTable allows small lookup tables, dimension data, or test data to be included directly in the OLAP schema,
eliminating the need for separate database tables for static reference data.


## Database Schema

DatabaseSchema includes InlineTable with data embedded directly in the schema definition and Physical table from database.
Physical table TOWN contains 3 columns: `KEY`, `KEY_COUNTRY` and `NAME`.
InlineTable, named `COUNTRY`, contains two columns: `KEY` and `NAME`.
InlineTable, named `Fact`, contains two columns: `KEY` and `VALUE`.


```xml
<roma:DatabaseSchema   id="_databaseSchema_inlinetablewithphysical">
  <tables xsi:type="roma:PhysicalTable" id="_tab_TOWN_Physical" name="TOWN">
    <columns xsi:type="roma:PhysicalColumn" id="_col_town_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_town_country_key" name="KEY_COUNTRY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_level_name" name="NAME"/>
  </tables>
  <tables xsi:type="roma:InlineTable" id="_tab_COUNTRY" name="COUNTRY">
    <columns xsi:type="roma:PhysicalColumn" id="_col_country_KEY" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_country_NAME" name="NAME"/>
    <rows>
      <rowValues column="_col_country_KEY" value="1"/>
      <rowValues column="_col_country_NAME" value="Germany"/>
    </rows>
    <rows>
      <rowValues column="_col_country_KEY" value="2"/>
      <rowValues column="_col_country_NAME" value="France"/>
    </rows>
  </tables>
  <tables xsi:type="roma:InlineTable" id="_tab_FACT" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_Fact_KEY" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_Fact_VALUE" name="VALUE" type="Double"/>
    <rows>
      <rowValues column="_col_Fact_KEY" value="1"/>
      <rowValues column="_col_Fact_VALUE" value="100.5"/>
    </rows>
    <rows>
      <rowValues column="_col_Fact_KEY" value="2"/>
      <rowValues column="_col_Fact_VALUE" value="200.5"/>
    </rows>
    <rows>
      <rowValues column="_col_Fact_KEY" value="3"/>
      <rowValues column="_col_Fact_VALUE" value="300.5"/>
    </rows>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

This example uses a InlineTableQuery, as it directly references the InlineTable table `Fact`.


```xml
<roma:InlineTableQuery  id="_query_fact" alias="Fact" table="_tab_FACT"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Town

This example uses a TableQuery, as it directly references the Physical table `TOWN`.


```xml
<roma:TableQuery  id="_query_town" table="_tab_TOWN_Physical"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Country

This example uses a InlineTableQuery, as it directly references the InlineTable table `COUNTRY`.


```xml
<roma:InlineTableQuery  id="_query_country" alias="COUNTRY" table="_tab_COUNTRY"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Join Query

The JoinQuery specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (TOWN - Physical table), the join uses the foreign key.
- In the upper-level table (COUNTRY - InlineTable), the join uses the primary key.
This JoinQuery combins combines Physical and InlineTable


```xml
<roma:JoinQuery  id="_query_hierarchy">
  <left key="_col_town_country_key" query="_query_town"/>
  <right key="_col_country_KEY" query="roma:InlineTableQuery _query_country"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level - Town

The Level uses the column attribute to specify the primary key column. Additionally, it defines the nameColumn attribute to specify the column that contains the name of the level.


```xml
<roma:Level  id="_level_town" name="Town" column="_col_town_key" nameColumn="_col_level_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level - Country

The Country level follows the same pattern as the Town level.


```xml
<roma:Level  id="_level_country" name="Country" column="_col_country_KEY" nameColumn="_col_country_NAME"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists of two levels: Town and Country.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the queryHierarchy Join-query used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchy" name="Hierarchy" primaryKey="_col_town_key" query="_query_hierarchy" levels="_level_country _level_town"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dim_town" name="Dimension" hierarchies="roma:ExplicitHierarchy _hierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure-Sum

        Measure use InlineTable column with sum aggregation.


```xml
<roma:SumMeasure  id="_measure-Sum" name="Measure-Sum" column="_col_Fact_VALUE"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Phisical and Inline Tables

In this example uses cube with InlineTable as data.


```xml
<roma:PhysicalCube   id="_cube" name="CubeTwoLevelsInlineAndPhysicalTable" query="roma:InlineTableQuery _query_fact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _col_Fact_KEY" dimension="roma:StandardDimension _dim_town" id="_dc_town"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure-Sum" name="Measure-Sum" column="_col_Fact_VALUE"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:InlineTableQuery id="_query_country" alias="COUNTRY" table="_tab_COUNTRY"/>
  <roma:ExplicitHierarchy id="_hierarchy" name="Hierarchy" primaryKey="_col_town_key" query="_query_hierarchy" levels="_level_country _level_town"/>
  <roma:InlineTableQuery id="_query_fact" alias="Fact" table="_tab_FACT"/>
  <roma:Catalog description="Measure with inline table and physical table" name="Daanse Tutorial - Measure Inline Table With Physical" cubes="_cube" dbschemas="_databaseSchema_inlinetablewithphysical"/>
  <roma:DatabaseSchema id="_databaseSchema_inlinetablewithphysical">
    <tables xsi:type="roma:PhysicalTable" id="_tab_TOWN_Physical" name="TOWN">
      <columns xsi:type="roma:PhysicalColumn" id="_col_town_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_town_country_key" name="KEY_COUNTRY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_level_name" name="NAME"/>
    </tables>
    <tables xsi:type="roma:InlineTable" id="_tab_COUNTRY" name="COUNTRY">
      <columns xsi:type="roma:PhysicalColumn" id="_col_country_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_country_NAME" name="NAME"/>
      <rows>
        <rowValues column="_col_country_KEY" value="1"/>
        <rowValues column="_col_country_NAME" value="Germany"/>
      </rows>
      <rows>
        <rowValues column="_col_country_KEY" value="2"/>
        <rowValues column="_col_country_NAME" value="France"/>
      </rows>
    </tables>
    <tables xsi:type="roma:InlineTable" id="_tab_FACT" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_Fact_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_Fact_VALUE" name="VALUE" type="Double"/>
      <rows>
        <rowValues column="_col_Fact_KEY" value="1"/>
        <rowValues column="_col_Fact_VALUE" value="100.5"/>
      </rows>
      <rows>
        <rowValues column="_col_Fact_KEY" value="2"/>
        <rowValues column="_col_Fact_VALUE" value="200.5"/>
      </rows>
      <rows>
        <rowValues column="_col_Fact_KEY" value="3"/>
        <rowValues column="_col_Fact_VALUE" value="300.5"/>
      </rows>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_town" table="_tab_TOWN_Physical"/>
  <roma:JoinQuery id="_query_hierarchy">
    <left key="_col_town_country_key" query="_query_town"/>
    <right key="_col_country_KEY" query="_query_country"/>
  </roma:JoinQuery>
  <roma:Level id="_level_country" name="Country" column="_col_country_KEY" nameColumn="_col_country_NAME"/>
  <roma:Level id="_level_town" name="Town" column="_col_town_key" nameColumn="_col_level_name"/>
  <roma:StandardDimension id="_dim_town" name="Dimension" hierarchies="_hierarchy"/>
  <roma:PhysicalCube id="_cube" name="CubeTwoLevelsInlineAndPhysicalTable" query="_query_fact">
    <dimensionConnectors foreignKey="_col_Fact_KEY" dimension="_dim_town" id="_dc_town"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure-Sum" name="Measure-Sum" column="_col_Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.measure.inlinetablewithphysical.zip" download>Download Zip File</a>
