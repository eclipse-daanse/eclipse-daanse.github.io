---
title: Dimension Optimisation With Level Attribute
group: Dimension
kind: TUTORIAL
number: 2.9.2
---
# Daanse Tutorial - Dimension Optimisation With Level Attribute

A basic OLAP schema with two Dimension Connectors with level attribute
Level attribute in DimensionConnector uses for optimize sql inner join
Level attribute is name of the level to join to
If not specified joins to the lowest level of the dimension


## Database Schema

The Database Schema contains the Fact table with two columns: DIM_KEY and VALUE.
The DATE_KEY column is used as the discriminator in the Hierarchy definitions.

- `H1_L1` table with two columns: `KEY` and `NAME`
- `HX_L2` table with 3 columns: `KEY`, `NAME`, `H1L1_KEY`, `H2L1_KEY`


```xml
<roma:DatabaseSchema   id="_databaseSchema_optimisationwithlevelattribute">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dim_key" name="DIM_KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_h1_l1" name="H1_L1">
    <columns xsi:type="roma:PhysicalColumn" id="_h1_l1_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_h1_l1_name" name="NAME"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_hx_l2" name="HX_L2">
    <columns xsi:type="roma:PhysicalColumn" id="_hx_l2_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_hx_l2_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_hx_l2_h1l1_key" name="H1L1_KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_hx_l2_h2l1_key" name="H2L1_KEY" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## H1L1Query

The Query is a simple TableQuery that selects all columns from the H1_L1 table to use in the hierarchy join.


```xml
<roma:TableQuery  id="_h1l1query" table="_h1_l1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## HxL2Query

The Query is a simple TableQuery that selects all columns from the Hx_L2 table to use in the hierarchy join.


```xml
<roma:TableQuery  id="_hxl2query" table="_hx_l2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the Fact table to use in the measures.


```xml
<roma:TableQuery  id="_table_factQuery" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## JoinQuery

The JoinQuery specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (`Hx_L2`), the join uses the foreign key `H1L1_KEY`.
- In the upper-level table (`H1_L1`), the join uses the primary key `KEY`.



```xml
<roma:JoinQuery  id="_joinQuery">
  <left key="_hx_l2_h1l1_key" query="_hxl2query"/>
  <right key="_h1_l1_key" query="_h1l1query"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## H1_Level1

This Example uses `H1_Level1` level based on the `KEY` column and name column `NAME` of table `H1_L1`.


```xml
<roma:Level  id="_h1_level1" name="H1_Level1" column="_h1_l1_key" nameColumn="_h1_l1_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## H1_Level2

This Example uses `H1_Level2` level based on the `KEY` column and name column `NAME` of table `HX_L2`.


```xml
<roma:Level  id="_h1_level2" name="H1_Level2" column="_hx_l2_key" nameColumn="_hx_l2_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1

The Hierarchy1 is defined with the hasAll property set to false and the two levels `H1_Level1` and `H1_Level2`.


```xml
<roma:ExplicitHierarchy  id="_hierarchy1" name="Hierarchy1" primaryKey="_hx_l2_key" query="_joinQuery" levels="_h1_level1 _h1_level2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Diml1

The time dimension is defined with the one hierarchy.



```xml
<roma:StandardDimension  id="_diml1" name="Diml1" hierarchies="roma:ExplicitHierarchy _hierarchy1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

The cube with two DimensionConnectors.
One of them with level attribute to level H1_Level1
Second of them with level attribute to level H1_Level2
Level attribute in DimensionConnector uses for optimize sql inner join
Level attribute is name of the level to join to
If not specified joins to the lowest level of the dimension


```xml
<roma:PhysicalCube   id="_cube" name="Cube" query="_table_factQuery">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_dim_key" dimension="roma:StandardDimension _diml1" overrideDimensionName="Dim1" level="_h1_level2" id="_dc_dim1"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_dim_key" dimension="roma:StandardDimension _diml1" overrideDimensionName="Dim2" level="_h1_level1" id="_dc_dim2"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_Measure" name="Measure" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Dimension optimization with level attributes" name="Daanse Tutorial - Dimension Optimisation With Level Attribute" cubes="_cube" dbschemas="_databaseSchema_optimisationwithlevelattribute"/>
  <roma:DatabaseSchema id="_databaseSchema_optimisationwithlevelattribute">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dim_key" name="DIM_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_h1_l1" name="H1_L1">
      <columns xsi:type="roma:PhysicalColumn" id="_h1_l1_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_h1_l1_name" name="NAME"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_hx_l2" name="HX_L2">
      <columns xsi:type="roma:PhysicalColumn" id="_hx_l2_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_hx_l2_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_hx_l2_h1l1_key" name="H1L1_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_hx_l2_h2l1_key" name="H2L1_KEY" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_h1l1query" table="_h1_l1"/>
  <roma:TableQuery id="_hxl2query" table="_hx_l2"/>
  <roma:TableQuery id="_table_factQuery" table="_table_fact"/>
  <roma:JoinQuery id="_joinQuery">
    <left key="_hx_l2_h1l1_key" query="_hxl2query"/>
    <right key="_h1_l1_key" query="_h1l1query"/>
  </roma:JoinQuery>
  <roma:Level id="_h1_level1" name="H1_Level1" column="_h1_l1_key" nameColumn="_h1_l1_name"/>
  <roma:Level id="_h1_level2" name="H1_Level2" column="_hx_l2_key" nameColumn="_hx_l2_name"/>
  <roma:ExplicitHierarchy id="_hierarchy1" name="Hierarchy1" primaryKey="_hx_l2_key" query="_joinQuery" levels="_h1_level1 _h1_level2"/>
  <roma:StandardDimension id="_diml1" name="Diml1" hierarchies="_hierarchy1"/>
  <roma:PhysicalCube id="_cube" name="Cube" query="_table_factQuery">
    <dimensionConnectors foreignKey="_column_fact_dim_key" dimension="_diml1" overrideDimensionName="Dim1" level="_h1_level2" id="_dc_dim1"/>
    <dimensionConnectors foreignKey="_column_fact_dim_key" dimension="_diml1" overrideDimensionName="Dim2" level="_h1_level1" id="_dc_dim2"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Measure" name="Measure" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimension.optimisationwithlevelattribute.zip" download>Download Zip File</a>
