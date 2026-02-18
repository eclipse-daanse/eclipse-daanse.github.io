---
title: Level with not unique members
group: Level
kind: TUTORIAL
number: 2.14.05
---
# Daanse Tutorial - Level with not unique members

A basic OLAP schema with a two levels : level building and level rooms.
Catalog has cube with two levels with not unique data in room level


## Database Schema

The cube defined in this example is based on a one table that stores all the data.
- The phisical table is named `Fact` uses for Cube and contains two columns: `KEY`, `BUILDING`, `ROOM` and `VALUE`.
The `KEY` column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema_unique">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_building" name="BUILDING" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_room" name="ROOM" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_queryFact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dimension" name="Dimension" hierarchies="roma:ExplicitHierarchy _hierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists two levels Building and Room.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the query used to retrieve the data for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchy" name="Hierarchy" primaryKey="_column_fact_key" query="_queryFact" levels="_level_building _level_room"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## BuildingLevel

The Level uses the column attribute to specify the primary key `BUILDING` from `Fact`.
`BUILDING` column have unique values


```xml
<roma:Level  id="_level_building" name="Building" column="_column_fact_building" nameColumn="_column_fact_building" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## RoomLevel

The Level uses the column attribute to specify the primary key `ROOM` from `Fact`.
`ROOM` column have not unique values


```xml
<roma:Level  id="_level_room" name="Room" column="_column_fact_room" nameColumn="_column_fact_room"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure

        Measure use Fact table VALUE column with sum aggregation in Cube.


```xml
<roma:SumMeasure  id="_measure" name="Measure" column="_column_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

In this example uses cube with fact table Fact as data.


```xml
<roma:PhysicalCube   id="_cube" name="NotUniqueLevelsMembers" query="_queryFact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_key" dimension="roma:StandardDimension _dimension" overrideDimensionName="Dimension" id="_dc_dimension"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure" name="Measure" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Level handling blank names" name="Daanse Tutorial - Level with not unique members" cubes="_cube" dbschemas="_databaseSchema_unique"/>
  <roma:DatabaseSchema id="_databaseSchema_unique">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_building" name="BUILDING" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_room" name="ROOM" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_queryFact" table="_table_fact"/>
  <roma:Level id="_level_building" name="Building" column="_column_fact_building" nameColumn="_column_fact_building" uniqueMembers="true"/>
  <roma:Level id="_level_room" name="Room" column="_column_fact_room" nameColumn="_column_fact_room"/>
  <roma:ExplicitHierarchy id="_hierarchy" name="Hierarchy" primaryKey="_column_fact_key" query="_queryFact" levels="_level_building _level_room"/>
  <roma:StandardDimension id="_dimension" name="Dimension" hierarchies="_hierarchy"/>
  <roma:PhysicalCube id="_cube" name="NotUniqueLevelsMembers" query="_queryFact">
    <dimensionConnectors foreignKey="_column_fact_key" dimension="_dimension" overrideDimensionName="Dimension" id="_dc_dimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure" name="Measure" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.level.unique.zip" download>Download Zip File</a>
