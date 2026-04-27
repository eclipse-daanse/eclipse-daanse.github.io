---
title: Member Identifier
group: Member
kind: TUTORIAL
number: 2.06.01
---
# Daanse Tutorial - Member Identifier

In some cases, all data are stored in one table, the fact as well as multiple levels. This Tutorial shows how to handle this case with different cases of data.


## Database Schema

The cube defined in this example is based on only one tables with different cases of data
space, space first, space last, separate line, long with over 100 12345678....   , äüö, some russian latter, some french letters, @€


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key2" name="KEY2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The TableSource for the Levels and the Measure.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key2" name="KEY2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

The level of the level1 used the `column` attribute to define the column that holds the name, which is also the key Column.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_level1" name="level1">
  <column href="_column_fact_key1"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level2

The level  of the level2 used the `column` attribute to define the column that holds the name, which is also the key Column.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_level2" name="level2">
  <column href="_column_fact_key2"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This Hierarchy contains both defined levels. The `primaryKey` attribute defines the column that contains the primary key of the hierarchy. The `query` attribute references to the query that will be used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_fact_key1" query="_tablesource_fact" levels="_level_level1 _level_level2"/>
  <rolaplev:Level xmi:id="_level_level1" name="level1" column="_column_fact_key1"/>
  <rolaplev:Level xmi:id="_level_level2" name="level2" column="_column_fact_key2"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key2" name="KEY2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchy"/>
  <rolaplev:Level xmi:id="_level_level1" name="level1" column="_column_fact_key1"/>
  <rolaplev:Level xmi:id="_level_level2" name="level2" column="_column_fact_key2"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_fact_key1" query="_tablesource_fact" levels="_level_level1 _level_level2"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key2" name="KEY2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with different member identifiers

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.

To connect the dimension to the cube, a DimensionConnector is used.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension" foreignKey="_column_fact_key1" dimension="_standarddimension_dimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_themeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaplev:Level xmi:id="_level_level1" name="level1" column="_column_fact_key1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchy"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_fact_key1" query="_tablesource_fact" levels="_level_level1 _level_level2"/>
  <rolaplev:Level xmi:id="_level_level2" name="level2" column="_column_fact_key2"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key2" name="KEY2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key2 _column_fact_key1" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_member_identifier" description="Member identifier configurations" name="Daanse Tutorial - Member Identifier" cubes="_physicalcube_cube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key2" name="KEY2" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level1" name="level1" column="_column_fact_key1"/>
  <rolaplev:Level xmi:id="_level_level2" name="level2" column="_column_fact_key2"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_fact_key1" query="_tablesource_fact" levels="_level_level1 _level_level2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension" foreignKey="_column_fact_key1" dimension="_standarddimension_dimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_themeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.member.identifier.zip" download>Download Zip File</a>
