---
title: Member Properties with Geographic Data
group: Member
kind: TUTORIAL
number: 2.06.02.02
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
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_member_id" name="MEMBER_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_member" name="Member">
    <feature xsi:type="relational:Column" xmi:id="_column_member_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_location" name="LOCATION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_latitude" name="LATITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_longitude" name="LONGITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_description" name="DESCRIPTION"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Fact Table

Simple table query referencing the Fact table for measure data.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_member_id" name="MEMBER_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Member Table

Simple table query referencing the Member table for location data and properties.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_member" table="_table_member"/>
  <relational:Table xmi:id="_table_member" name="Member">
    <feature xsi:type="relational:Column" xmi:id="_column_member_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_location" name="LOCATION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_latitude" name="LATITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_longitude" name="LONGITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_description" name="DESCRIPTION"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Join Fact to Member

The join query connects the Fact table to the Member table using:
- Fact.MEMBER_ID (foreign key) joined to Member.ID (primary key)

This allows the hierarchy to access member properties while the cube measures reference the fact data.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_member_id" key="_column_fact_member_id" query="_tablesource_fact"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_member_id" query="_tablesource_member"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_member" table="_table_member"/>
  <relational:Table xmi:id="_table_member" name="Member">
    <feature xsi:type="relational:Column" xmi:id="_column_member_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_location" name="LOCATION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_latitude" name="LATITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_longitude" name="LONGITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_description" name="DESCRIPTION"/>
  </relational:Table>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_member_id" name="MEMBER_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Member Property - Location (GeoJSON)

The Location member property stores geographic boundary data in GeoJSON format.
This allows complex geographic shapes to be associated with each member for mapping and spatial analysis.


```xml
<rolaplev:MemberProperty xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_memberproperty_location" name="Location" propertyType="String">
  <column href="_column_member_location"/>
</rolaplev:MemberProperty>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Member Property - Latitude

The Latitude member property stores the decimal latitude coordinate as a numeric value for precise positioning.


```xml
<rolaplev:MemberProperty xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_memberproperty_latitude" name="Latitude" propertyType="Numeric">
  <column href="_column_member_latitude"/>
</rolaplev:MemberProperty>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Member Property - Longitude

The Longitude member property stores the decimal longitude coordinate as a numeric value for precise positioning.


```xml
<rolaplev:MemberProperty xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_memberproperty_longitude" name="Longitude" propertyType="Numeric">
  <column href="_column_member_longitude"/>
</rolaplev:MemberProperty>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Member Property - Description

The Description member property provides additional contextual information about each location member.


```xml
<rolaplev:MemberProperty xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_memberproperty_description" name="Description" propertyType="String">
  <column href="_column_member_description"/>
</rolaplev:MemberProperty>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level with Member Properties

The Location level uses the Member table's ID as the primary key and NAME as the display name.
Multiple member properties are attached to provide rich geographic information for each location.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_location" name="Location">
  <column href="_column_member_id"/>
  <nameColumn href="_column_member_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy with Join Query

This single-level hierarchy demonstrates how member properties work with joined tables.
The query joins the Member table to access both the level data and the member properties.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_locationhierarchy" name="LocationHierarchy" primaryKey="_column_member_id" query="_joinsource" levels="_level_location"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_member" table="_table_member"/>
  <relational:Table xmi:id="_table_member" name="Member">
    <feature xsi:type="relational:Column" xmi:id="_column_member_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_location" name="LOCATION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_latitude" name="LATITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_longitude" name="LONGITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_description" name="DESCRIPTION"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_location" name="Location" column="_column_member_id" nameColumn="_column_member_name">
    <memberProperties xmi:id="_memberproperty_location" name="Location" column="_column_member_location" propertyType="String"/>
    <memberProperties xmi:id="_memberproperty_latitude" name="Latitude" column="_column_member_latitude" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_longitude" name="Longitude" column="_column_member_longitude" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_description" name="Description" column="_column_member_description" propertyType="String"/>
  </rolaplev:Level>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_member_id" key="_column_fact_member_id" query="_tablesource_fact"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_member_id" query="_tablesource_member"/>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_member_id" name="MEMBER_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Location dimension contains one hierarchy with geographic member properties.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_location" name="Location" hierarchies="_explicithierarchy_locationhierarchy"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_member" table="_table_member"/>
  <relational:Table xmi:id="_table_member" name="Member">
    <feature xsi:type="relational:Column" xmi:id="_column_member_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_location" name="LOCATION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_latitude" name="LATITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_longitude" name="LONGITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_description" name="DESCRIPTION"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_location" name="Location" column="_column_member_id" nameColumn="_column_member_name">
    <memberProperties xmi:id="_memberproperty_location" name="Location" column="_column_member_location" propertyType="String"/>
    <memberProperties xmi:id="_memberproperty_latitude" name="Latitude" column="_column_member_latitude" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_longitude" name="Longitude" column="_column_member_longitude" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_description" name="Description" column="_column_member_description" propertyType="String"/>
  </rolaplev:Level>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_locationhierarchy" name="LocationHierarchy" primaryKey="_column_member_id" query="_joinsource" levels="_level_location"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_member_id" key="_column_fact_member_id" query="_tablesource_fact"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_member_id" query="_tablesource_member"/>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_member_id" name="MEMBER_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Geographic Analysis

The cube connects the Fact table (containing measures) with the Member table (containing member properties)
via a join query. The DimensionConnector uses MEMBER_ID as the foreign key to link facts to location members.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_geographic_analysis" name="Geographic Analysis" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_location" foreignKey="_column_fact_member_id" dimension="_standarddimension_location"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_totalvalue" name="TotalValue" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_member" table="_table_member"/>
  <rolaplev:Level xmi:id="_level_location" name="Location" column="_column_member_id" nameColumn="_column_member_name">
    <memberProperties xmi:id="_memberproperty_location" name="Location" column="_column_member_location" propertyType="String"/>
    <memberProperties xmi:id="_memberproperty_latitude" name="Latitude" column="_column_member_latitude" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_longitude" name="Longitude" column="_column_member_longitude" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_description" name="Description" column="_column_member_description" propertyType="String"/>
  </rolaplev:Level>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_member_id" name="MEMBER_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapdim:StandardDimension xmi:id="_standarddimension_location" name="Location" hierarchies="_explicithierarchy_locationhierarchy"/>
  <relational:Table xmi:id="_table_member" name="Member">
    <feature xsi:type="relational:Column" xmi:id="_column_member_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_location" name="LOCATION"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_latitude" name="LATITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_longitude" name="LONGITUDE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_member_description" name="DESCRIPTION"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_locationhierarchy" name="LocationHierarchy" primaryKey="_column_member_id" query="_joinsource" levels="_level_location"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_member_id" key="_column_fact_member_id" query="_tablesource_fact"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_member_id" query="_tablesource_member"/>
  </rolapsrc:JoinSource>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_member_id _column_fact_member_id" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_member_description _column_member_name _column_member_location" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_decimal" name="DECIMAL" structuralFeature="_column_member_latitude _column_fact_value _column_member_longitude" typeNumber="3" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <rolapcat:Catalog xmi:id="_catalog_member_properties_with_geographic_data" description="Tutorial showing member properties with location data across multiple tables" name="Daanse Tutorial - Member Properties with Geographic Data" cubes="_physicalcube_geographic_analysis" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_member_id" name="MEMBER_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_decimal"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_member" name="Member">
      <feature xsi:type="relational:Column" xmi:id="_column_member_id" name="ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_member_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_member_location" name="LOCATION" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_member_latitude" name="LATITUDE" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_member_longitude" name="LONGITUDE" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_member_description" name="DESCRIPTION" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_member" table="_table_member"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_member_id" key="_column_fact_member_id" query="_tablesource_fact"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_member_id" query="_tablesource_member"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_location" name="Location" column="_column_member_id" nameColumn="_column_member_name">
    <memberProperties xmi:id="_memberproperty_location" name="Location" column="_column_member_location" propertyType="String"/>
    <memberProperties xmi:id="_memberproperty_latitude" name="Latitude" column="_column_member_latitude" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_longitude" name="Longitude" column="_column_member_longitude" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_description" name="Description" column="_column_member_description" propertyType="String"/>
  </rolaplev:Level>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_locationhierarchy" name="LocationHierarchy" primaryKey="_column_member_id" query="_joinsource" levels="_level_location"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_location" name="Location" hierarchies="_explicithierarchy_locationhierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_geographic_analysis" name="Geographic Analysis" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_location" foreignKey="_column_fact_member_id" dimension="_standarddimension_location"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_totalvalue" name="TotalValue" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.member.property.geo.zip" download>Download Zip File</a>
