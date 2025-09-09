---
title: Member Properties with Geographic Data
group: Member
kind: TUTORIAL
number: 2.6.2.2
---
# Daanse Tutorial - Member Properties with Geographic Data

This tutorial demonstrates how to use member properties with geographic data stored across multiple tables.
Member properties provide additional attributes for hierarchy level members, such as geographic coordinates,
descriptions, and location data in GeoJSON format.

The example shows a single-level Location hierarchy where member details are stored in a separate Member table,
joined with the fact table for OLAP analysis.


## Database Schema

The cube is based on two tables: `Fact` and `Member`.

- The `Fact` table contains measures (VALUES) and references to the `Member` table via MEMBER_ID
- The `Member` table holds the member details including:
  - ID (primary key)
  - NAME (member display name)
  - LOCATION (GeoJSON representation of the geographic area)
  - LATITUDE and LONGITUDE (numeric coordinates)
  - DESCRIPTION (additional member information)

This normalized structure allows rich member properties while maintaining efficient fact table storage.


```xml
<roma:DatabaseSchema   id="_databaseSchema_main">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_memberId" name="MEMBER_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Decimal"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_member" name="Member">
    <columns xsi:type="roma:PhysicalColumn" id="_column_member_id" name="ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_member_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_member_location" name="LOCATION"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_member_latitude" name="LATITUDE" type="Decimal"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_member_longitude" name="LONGITUDE" type="Decimal"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_member_description" name="DESCRIPTION"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Fact Table

Simple table query referencing the Fact table for measure data.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Member Table

Simple table query referencing the Member table for location data and properties.


```xml
<roma:TableQuery  id="_query_member" table="_table_member"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Join Fact to Member

The join query connects the Fact table to the Member table using:
- Fact.MEMBER_ID (foreign key) joined to Member.ID (primary key)

This allows the hierarchy to access member properties while the cube measures reference the fact data.


```xml
<roma:JoinQuery  id="_query_factToMember">
  <left key="_column_fact_memberId" query="_query_fact"/>
  <right key="_column_member_id" query="_query_member"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Member Property - Location (GeoJSON)

The Location member property stores geographic boundary data in GeoJSON format.
This allows complex geographic shapes to be associated with each member for mapping and spatial analysis.


```xml
<roma:MemberProperty  id="_memberProperty_location" name="Location" column="_column_member_location"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Member Property - Latitude

The Latitude member property stores the decimal latitude coordinate as a numeric value for precise positioning.


```xml
<roma:MemberProperty  id="_memberProperty_latitude" name="Latitude" column="_column_member_latitude" propertyType="Numeric"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Member Property - Longitude

The Longitude member property stores the decimal longitude coordinate as a numeric value for precise positioning.


```xml
<roma:MemberProperty  id="_memberProperty_longitude" name="Longitude" column="_column_member_longitude" propertyType="Numeric"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Member Property - Description

The Description member property provides additional contextual information about each location member.


```xml
<roma:MemberProperty  id="_memberProperty_description" name="Description" column="_column_member_description"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level with Member Properties

The Location level uses the Member table's ID as the primary key and NAME as the display name.
Multiple member properties are attached to provide rich geographic information for each location.


```xml
<roma:Level  id="_level_location" name="Location" column="_column_member_id" nameColumn="_column_member_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy with Join Query

This single-level hierarchy demonstrates how member properties work with joined tables.
The query joins the Member table to access both the level data and the member properties.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_location" name="LocationHierarchy" primaryKey="_column_member_id" query="_query_factToMember" levels="_level_location"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Location dimension contains one hierarchy with geographic member properties.


```xml
<roma:StandardDimension  id="_dimension_location" name="Location" hierarchies="roma:ExplicitHierarchy _hierarchy_location"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Geographic Analysis

The cube connects the Fact table (containing measures) with the Member table (containing member properties)
via a join query. The DimensionConnector uses MEMBER_ID as the foreign key to link facts to location members.


```xml
<roma:PhysicalCube   id="_cube_geographic" name="Geographic Analysis" query="_query_fact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_memberId" dimension="roma:StandardDimension _dimension_location" id="_dimensionConnector_location"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_totalValue" name="TotalValue" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Tutorial showing member properties with location data across multiple tables" name="Daanse Tutorial - Member Properties with Geographic Data" cubes="_cube_geographic" dbschemas="_databaseSchema_main"/>
  <roma:DatabaseSchema id="_databaseSchema_main">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_memberId" name="MEMBER_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Decimal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_member" name="Member">
      <columns xsi:type="roma:PhysicalColumn" id="_column_member_id" name="ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_member_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_member_location" name="LOCATION"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_member_latitude" name="LATITUDE" type="Decimal"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_member_longitude" name="LONGITUDE" type="Decimal"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_member_description" name="DESCRIPTION"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:TableQuery id="_query_member" table="_table_member"/>
  <roma:JoinQuery id="_query_factToMember">
    <left key="_column_fact_memberId" query="_query_fact"/>
    <right key="_column_member_id" query="_query_member"/>
  </roma:JoinQuery>
  <roma:Level id="_level_location" name="Location" column="_column_member_id" nameColumn="_column_member_name">
    <memberProperties id="_memberProperty_location" name="Location" column="_column_member_location"/>
    <memberProperties id="_memberProperty_latitude" name="Latitude" column="_column_member_latitude" propertyType="Numeric"/>
    <memberProperties id="_memberProperty_longitude" name="Longitude" column="_column_member_longitude" propertyType="Numeric"/>
    <memberProperties id="_memberProperty_description" name="Description" column="_column_member_description"/>
  </roma:Level>
  <roma:ExplicitHierarchy id="_hierarchy_location" name="LocationHierarchy" primaryKey="_column_member_id" query="_query_factToMember" levels="_level_location"/>
  <roma:StandardDimension id="_dimension_location" name="Location" hierarchies="_hierarchy_location"/>
  <roma:PhysicalCube id="_cube_geographic" name="Geographic Analysis" query="_query_fact">
    <dimensionConnectors foreignKey="_column_fact_memberId" dimension="_dimension_location" id="_dimensionConnector_location"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_totalValue" name="TotalValue" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.member.property.geo.zip" download>Download Zip File</a>
