---
title: Member Identifier
group: Member
kind: TUTORIAL
number: 2.6.1
---
# Catalog with cube with different member identifiers

In some cases, all data are stored in one table, the fact as well as multiple levels. This Tutorial shows how to handle this case with diferent casses of data.


## Database Schema

The cube defined in this example is based on only one tables with diferent casses of data
space, space first, space last, separate line, long with over 100 12345678....   , äüö, some russian latter, some french letters, @€


```xml
<roma:DatabaseSchema   id="_databaseSchema_main">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key1" name="KEY1"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key2" name="KEY2"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The TableQuery for the Levels and the Measure.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

The level of the level1 used the `column` attribute to define the column that holds the name, wich is also the key Column.


```xml
<roma:Level  id="_level_level1" name="level1" column="_column_fact_key1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level2

The level  of the level2 used the `column` attribute to define the column that holds the name, wich is also the key Column.


```xml
<roma:Level  id="_level_level2" name="level2" column="_column_fact_key2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This Hierarchy contains both defined levels. The `primaryKey` attribute defines the column that contains the primary key of the hierarchy. The `query` attribute references to the query that will be used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_hierarchy" name="Hierarchy" primaryKey="_column_fact_key1" query="_query_fact" levels="_level_level1 _level_level2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dimension_dimension" name="Dimension" hierarchies="roma:ExplicitHierarchy _hierarchy_hierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with different member identifiers

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.

To connect the dimension to the cube, a DimensionConnector is used.


```xml
<roma:PhysicalCube   id="_cube_cube" name="Cube" query="_query_fact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_key1" dimension="roma:StandardDimension _dimension_dimension" id="_dimensionConnector_dimension"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_theMeasure" name="theMeasure" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy_hierarchy" name="Hierarchy" primaryKey="_column_fact_key1" query="_query_fact" levels="_level_level1 _level_level2"/>
  <roma:Catalog description="Member identifier configurations" name="Daanse Tutorial - Member Identifier" cubes="_cube_cube" dbschemas="_databaseSchema_main"/>
  <roma:DatabaseSchema id="_databaseSchema_main">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key1" name="KEY1"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key2" name="KEY2"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:Level id="_level_level1" name="level1" column="_column_fact_key1"/>
  <roma:Level id="_level_level2" name="level2" column="_column_fact_key2"/>
  <roma:StandardDimension id="_dimension_dimension" name="Dimension" hierarchies="_hierarchy_hierarchy"/>
  <roma:PhysicalCube id="_cube_cube" name="Cube" query="_query_fact">
    <dimensionConnectors foreignKey="_column_fact_key1" dimension="_dimension_dimension" id="_dimensionConnector_dimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_theMeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.member.identifier.zip" download>Download Zip File</a>
