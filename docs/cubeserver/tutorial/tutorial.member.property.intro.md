---
title: Level Member Property Intro
group: Member
kind: TUTORIAL
number: 2.06.02.01
---
# Daanse Tutorial -Level Member Property Intro

This Tutorial is about MemberProperties. MemberProperties are attributes of a hierarchy level’s members. They provide additional details about each member, such as a description or any other related value. The only requirement for defining a MemberProperty is that a corresponding column exists to store the property’s value.


## Database Schema

The cube defined in this example is based on two tables. `Fact` and `Town`. The Fact table contains a measures and a reference to the `Town` table. The `Fact` table is linked with its `ID` column to the `Town` table by the `TOWN_ID` column. The `Town` Table also contains the `Name` and the value of the MemberPropery, in this case the `CAPITAL` flag.


```xml
<roma:DatabaseSchema   id="_databaseSchema_main">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_townId" name="TOWN_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_town" name="Town">
    <columns xsi:type="roma:PhysicalColumn" id="_column_town_id" name="ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_town_name" name="NAME"/>
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
## MemberProperty

The MemberProperty with a name `Capital`, the `propertyType` attribute `String`, and the reference to the `column` thats holds the values of the MemberProperty.


```xml
<roma:MemberProperty  id="_memberProperty_capital" name="Capital" column="_column_town_capital" propertyType="String"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

The level used the `column` attribute to define the primary key column. It also defines the `nameColumn` attribute to define the column that contains the name of the level. The `nameColumn` attribute is optional, if it is not defined, the server will use the column defined in the `column` attribute as name column.
The `memberProperties` attribute is also set, to the before defines Capital-MemberProperty.


```xml
<roma:Level  id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This Hierarchy contains only one level. The `primaryKey` attribute defines the column that contains the primary key of the hierarchy. The `query` attribute references to the query that will be used to retrieve the data for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_townHierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_query_town" levels="_level_town"/>

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

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Introduction to member properties" name="Daanse Tutorial - Level Member Property Intro" cubes="_cube_queryLinkedTables" dbschemas="_databaseSchema_main"/>
  <roma:DatabaseSchema id="_databaseSchema_main">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_townId" name="TOWN_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_town" name="Town">
      <columns xsi:type="roma:PhysicalColumn" id="_column_town_id" name="ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_town_name" name="NAME"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:PhysicalColumn id="_column_town_capital" name="CAPITAL" columnSize="100"/>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:TableQuery id="_query_town" table="_table_town"/>
  <roma:Level id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name">
    <memberProperties id="_memberProperty_capital" name="Capital" column="_column_town_capital" propertyType="String"/>
  </roma:Level>
  <roma:ExplicitHierarchy id="_hierarchy_townHierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_query_town" levels="_level_town"/>
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
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.member.property.intro.zip" download>Download Zip File</a>
