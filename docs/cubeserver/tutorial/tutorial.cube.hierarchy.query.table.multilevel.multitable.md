---
title: Cube Hierarchy Query Table Multilevel Multitable
group: Hierarchy
kind: TUTORIAL
number: 2.3.2.2
---
# Hierarchy - Query - 1 Table, 2 Levels

            In some cases, a table for a lower-level entity also contains additional information for a higher-level entity. This often happens when no dedicated columns exist for the higher-level entity and the database designer decides that fully applying Third Normal Form (3NF) would involve more work than it seems to be worth, or they wish to optimize lookup speed. Although we strongly recommend using 3NF wherever possible, this tutorial demonstrates how to handle a scenario in which two levels share the same table.

In this example, besides storing the town ID and town NAME, our table also includes information about the COUNTRY in a separate column.


## Database Schema

The cube defined in this example is based on two tables. Fact and Town. The Fact table contains a measures and a reference to the Town table. The Fact table is linked with its ID column to the Town table by the TOWN_ID column. The Town table has the ID, NAME and COUNTRY.


```xml
<roma:DatabaseSchema   id="_databaseSchema_main">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_townId" name="TOWN_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_town" name="Town">
    <columns xsi:type="roma:PhysicalColumn" id="_column_town_id" name="ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_town_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_town_country" name="COUNTRY"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Level

The TableQuery for the Level, as it directly references the physical table `Town`.


```xml
<roma:TableQuery  id="_query_town" table="_table_town"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The TableQuery for the Level, as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

The level  of the Town used the `column` attribute to define the primary key column and the `nameColumn` attribute.




```xml
<roma:Level  id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

The level  of the Country used the `column` attribute to define the primary key column on the Country table of the Town table.


```xml
<roma:Level  id="_level_country" name="Country" column="_column_town_country"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This Hierarchy contains both defined levels. The `primaryKey` attribute defines the column that contains the primary key of the hierarchy. The `query` attribute references to the query that will be used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_townHierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_query_town" levels="_level_country _level_town"/>

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
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_townId" dimension="roma:StandardDimension _dimension_town" id="_dimensionConnector_town"/>
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
  <roma:ExplicitHierarchy id="_hierarchy_townHierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_query_town" levels="_level_country _level_town"/>
  <roma:Catalog description="Multi-level hierarchy across multiple tables" name="Daanse Tutorial - Cube Hierarchy Query Table Multilevel Multitable" cubes="_cube_queryLinkedTables" dbschemas="_databaseSchema_main"/>
  <roma:DatabaseSchema id="_databaseSchema_main">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_townId" name="TOWN_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_town" name="Town">
      <columns xsi:type="roma:PhysicalColumn" id="_column_town_id" name="ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_town_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_town_country" name="COUNTRY"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:TableQuery id="_query_town" table="_table_town"/>
  <roma:Level id="_level_country" name="Country" column="_column_town_country"/>
  <roma:Level id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
  <roma:StandardDimension id="_dimension_town" name="Town" hierarchies="_hierarchy_townHierarchy"/>
  <roma:PhysicalCube id="_cube_queryLinkedTables" name="Cube Query linked Tables" query="_query_fact">
    <dimensionConnectors foreignKey="_column_fact_townId" dimension="_dimension_town" id="_dimensionConnector_town"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_theMeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.hierarchy.query.table.multilevel.multitable.zip" download>Download Zip File</a>
