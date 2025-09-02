---
title: Cube Hierarchy Query Table Multilevel Singletable
group: Hierarchy
kind: TUTORIAL
number: 2.3.2.3
---
# Daanse Tutorial - Cube Hierarchy Query Table Multilevel Singletable

In some cases, all data are stored in one table, the fact as well as multiple levels. This Tutorial shows how to handle this case.


## Database Schema

The cube defined in this example is based on only one tables. The `Fact` table contains a measures the name of the `Town` and the `Country`.


```xml
<roma:DatabaseSchema   id="_databaseSchema_main">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_country" name="KEY"/>
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
## Level

The level of the `Town` used the `column` attribute to define the column that holds the name, wich is also the key Column.


```xml
<roma:Level  id="_level_town" name="Town" column="_column_fact_key"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

The level  of the `Country` used the `column` attribute to define the column that holds the name, wich is also the key Column.


```xml
<roma:Level  id="_level_country" name="Country" column="_column_fact_country"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This Hierarchy contains both defined levels. The `primaryKey` attribute defines the column that contains the primary key of the hierarchy. The `query` attribute references to the query that will be used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_townHierarchy" name="TownHierarchy" primaryKey="_column_fact_key" query="_query_fact" levels="_level_country _level_town"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dimension_town" name="Town" hierarchies="roma:ExplicitHierarchy _hierarchy_townHierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.

To connect the dimension to the cube, a DimensionConnector is used. The dimension has set the attribute `foreignKey` to define the column that contains the foreign key of the dimension in the fact table.


```xml
<roma:PhysicalCube   id="_cube_queryLinkedTables" name="Cube Query linked Tables" query="_query_fact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_country" dimension="roma:StandardDimension _dimension_town" id="_dimensionConnector_town"/>
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
  <roma:Catalog description="Multi-level hierarchy in single table" name="Daanse Tutorial - Cube Hierarchy Query Table Multilevel Singletable" cubes="_cube_queryLinkedTables" dbschemas="_databaseSchema_main"/>
  <roma:DatabaseSchema id="_databaseSchema_main">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_country" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:Level id="_level_country" name="Country" column="_column_fact_country"/>
  <roma:Level id="_level_town" name="Town" column="_column_fact_key"/>
  <roma:ExplicitHierarchy id="_hierarchy_townHierarchy" name="TownHierarchy" primaryKey="_column_fact_key" query="_query_fact" levels="_level_country _level_town"/>
  <roma:StandardDimension id="_dimension_town" name="Town" hierarchies="_hierarchy_townHierarchy"/>
  <roma:PhysicalCube id="_cube_queryLinkedTables" name="Cube Query linked Tables" query="_query_fact">
    <dimensionConnectors foreignKey="_column_fact_country" dimension="_dimension_town" id="_dimensionConnector_town"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_theMeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.hierarchy.query.table.multilevel.singletable.zip" download>Download Zip File</a>
