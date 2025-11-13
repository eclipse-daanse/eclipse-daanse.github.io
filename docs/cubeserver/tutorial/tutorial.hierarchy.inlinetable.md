---
title: Inline Table
group: Hierarchy
kind: TUTORIAL
number: 2.16.1
---
# Daanse Tutorial - Inline Table

Cube with hierarchy which use inner table. This example shows combine phisical table as fact and Inline table for hierarchy
Inline table represents a table with data embedded directly in the schema


## Database Schema

The cube defined in this example is based on a two tables that stores all the data.

- The phisical table is named `Fact` uses for Cube1 and contains two columns: `DIM_KEY` and `VALUE`. The `DIM_KEY` column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.
- The InlineTable is named `HT` uses for Hierarchy and contains 3 columns: `KEY`, `VALUE`,`NAME` .

InlineTable represents a table with data embedded directly in the schema.
InlineTable uses for hierarchy.


```xml
<roma:DatabaseSchema   id="_databaseSchema_inlinetable">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dim_key" name="DIM_KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:InlineTable" name="HT">
    <columns xsi:type="roma:PhysicalColumn" id="_ht_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_ht_value" name="VALUE" type="Numeric"/>
    <columns xsi:type="roma:PhysicalColumn" id="_ht_name" name="NAME"/>
    <rows>
      <rowValues column="_ht_key" value="1"/>
      <rowValues column="_ht_value" value="100.5"/>
      <rowValues column="_ht_name" value="name1"/>
    </rows>
    <rows>
      <rowValues column="_ht_key" value="2"/>
      <rowValues column="_ht_value" value="100.2"/>
      <rowValues column="_ht_name" value="name2"/>
    </rows>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_query" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## InlineTableQuery

The bridge between the cube and InlineTable `HT`.


```xml
<roma:InlineTableQuery  id="_inlineTableQuery" alias="HT" table="/2/@tables.1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension1

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dimension1" name="Dimension1" hierarchies="roma:ExplicitHierarchy _hierarchy1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists level Level1.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the query used to retrieve the data for the hierarchy.
Query uses Inline table as data sourse.


```xml
<roma:ExplicitHierarchy  id="_hierarchy1" name="Hierarchy1" primaryKey="_ht_key" query="roma:InlineTableQuery _inlineTableQuery" levels="_level1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

The Level uses the column attribute to specify the primary key `KEY` from Inline table `HT`.
Additionally, it defines the nameColumn `NAME` from Inline table `HT` attribute  to specify
the column that contains the name of the level.


```xml
<roma:Level  id="_level1" name="Level1" column="_ht_key" nameColumn="_ht_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure1

Measure1 use Fact table VALUE column with sum aggregation in Cube.


```xml
<roma:SumMeasure  id="_measure1" name="Measure1" column="_column_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

In this example uses cube with fact table Fact as data. This example shows combine phisical table as fact and Inline table for hierarchy


```xml
<roma:PhysicalCube   id="_cube" name="Cube" query="_query">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_dim_key" dimension="roma:StandardDimension _dimension1" overrideDimensionName="Dimension1" id="_dc_dimension1"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure1" name="Measure1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:InlineTableQuery id="_inlineTableQuery" alias="HT" table="/2/@tables.1"/>
  <roma:Catalog description="Hierarchy with inline table data" name="Daanse Tutorial - Inline Table" cubes="_cube" dbschemas="_databaseSchema_inlinetable"/>
  <roma:DatabaseSchema id="_databaseSchema_inlinetable">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dim_key" name="DIM_KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:InlineTable" name="HT">
      <columns xsi:type="roma:PhysicalColumn" id="_ht_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_ht_value" name="VALUE" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="_ht_name" name="NAME"/>
      <rows>
        <rowValues column="_ht_key" value="1"/>
        <rowValues column="_ht_value" value="100.5"/>
        <rowValues column="_ht_name" value="name1"/>
      </rows>
      <rows>
        <rowValues column="_ht_key" value="2"/>
        <rowValues column="_ht_value" value="100.2"/>
        <rowValues column="_ht_name" value="name2"/>
      </rows>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query" table="_table_fact"/>
  <roma:Level id="_level1" name="Level1" column="_ht_key" nameColumn="_ht_name"/>
  <roma:ExplicitHierarchy id="_hierarchy1" name="Hierarchy1" primaryKey="_ht_key" query="_inlineTableQuery" levels="_level1"/>
  <roma:StandardDimension id="_dimension1" name="Dimension1" hierarchies="_hierarchy1"/>
  <roma:PhysicalCube id="_cube" name="Cube" query="_query">
    <dimensionConnectors foreignKey="_column_fact_dim_key" dimension="_dimension1" overrideDimensionName="Dimension1" id="_dc_dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.hierarchy.inlinetable.zip" download>Download Zip File</a>
