---
title: Daanse Tutorial - Hierarchy View
group: Hierarchy
kind: TUTORIAL
number: 2.16.2
---
Catalog of a minimal cube with hierarchy with SQL view reference.


# Catalog of a minimal cube with hierarchy with SQL view reference

Cube with hierarchy which use SQL query. This example shows combine phisical table as fact and SqlView for hierarchy
SqlView represents a virtual table defined by SQL query expressions rather than physical database tables.


## Database Schema

The cube defined in this example is based on a two tables and and SqlView that stores all the data.
The phisical table is named `Fact` uses for Cube1 and contains two columns: `DIM_KEY` and `VALUE`.
The KEY column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.
The phisical table is named `HT` uses for Hierarchy and contains 3 columns: `KEY`, `VALUE`,`NAME` .
SqlView represents a virtual table defined by SQL query expressions rather than physical database tables.


```xml
<roma:DatabaseSchema   id="_databaseSchema_view">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dimKey" name="DIM_KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_ht" name="HT">
    <columns xsi:type="roma:PhysicalColumn" id="_column_ht_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_ht_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_ht_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## HT_VIEW

The bridge between the cube and SqlView HT_VIEW.


```xml
<roma:SqlSelectQuery   id="_query_htViewSelect" alias="HT_VIEW">
  <sql id="_sqlView_htView" name="HT_VIEW">
    <columns xsi:type="roma:PhysicalColumn" id="_column_view_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_view_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_view_value" name="VALUE" type="Integer"/>
    <sqlStatements sql="select * from HT">
      <dialects>generic</dialects>
      <dialects>h2</dialects>
    </sqlStatements>
  </sql>
</roma:SqlSelectQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dimension_dimension" name="Dimension" hierarchies="roma:ExplicitHierarchy _hierarchy_hierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists level Level1.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the query used to retrieve the data for the hierarchy.
Query uses SqlView `HT_VIEW` as data sourse.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_hierarchy" name="Hierarchy" primaryKey="_column_view_key" query="roma:SqlSelectQuery _query_htViewSelect" levels="_level_level1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

The Level uses the column attribute to specify the primary key `KEY` from SqlView `HT_VIEW`.
Additionally, it defines the nameColumn `NAME` from SqlView `HT_VIEW` attribute  to specify
the column that contains the name of the level.


```xml
<roma:Level  id="_level_level1" name="Level1" column="_column_view_key" nameColumn="_column_view_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure1

Measure1 use Fact table VALUE column with sum aggregation in Cube.


```xml
<roma:SumMeasure  id="_measure_measure1" name="Measure1" column="_column_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

In this example uses cube with fact table Fact as data. This example shows combine phisical table as fact and SqlView for hierarchy


```xml
<roma:PhysicalCube   id="_cube_cube" name="Cube" query="_query_fact">
  <dimensionConnectors dimension="roma:StandardDimension _dimension_dimension" overrideDimensionName="Dimension" id="_dimensionConnector_dimension"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_measure1" name="Measure1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy_hierarchy" name="Hierarchy" primaryKey="_column_view_key" query="_query_htViewSelect" levels="_level_level1"/>
  <roma:Catalog description="Hierarchy with SQL view references" name="Daanse Tutorial - Hierarchy View" cubes="_cube_cube" dbschemas="_databaseSchema_view"/>
  <roma:DatabaseSchema id="_databaseSchema_view">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dimKey" name="DIM_KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_ht" name="HT">
      <columns xsi:type="roma:PhysicalColumn" id="_column_ht_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_ht_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_ht_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:SqlSelectQuery id="_query_htViewSelect" alias="HT_VIEW">
    <sql id="_sqlView_htView" name="HT_VIEW">
      <columns xsi:type="roma:PhysicalColumn" id="_column_view_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_view_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_view_value" name="VALUE" type="Integer"/>
      <sqlStatements sql="select * from HT">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqlStatements>
    </sql>
  </roma:SqlSelectQuery>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:Level id="_level_level1" name="Level1" column="_column_view_key" nameColumn="_column_view_name"/>
  <roma:StandardDimension id="_dimension_dimension" name="Dimension" hierarchies="_hierarchy_hierarchy"/>
  <roma:PhysicalCube id="_cube_cube" name="Cube" query="_query_fact">
    <dimensionConnectors dimension="_dimension_dimension" overrideDimensionName="Dimension" id="_dimensionConnector_dimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.hierarchy.view.zip" download>Download Zip File</a>
