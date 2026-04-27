---
title: KPI Virtual Cube
group: Kpi
kind: TUTORIAL
number: 2.07.04
---
# Daanse Tutorial - KPI Virtual Cube

This tutorial is an introduction to the concept of KPIs in data cubes.

A KPI has four important properties: value, goal, status, and trend. The most crucial (and mandatory) property is value. All four properties are defined as MDX expressions, which allows you to create an expression within the cube, give it a name, and associate a value with it.

To keep things simple in this example, we will use an existing measure in our expression.


## Database Schema

A table `Fact` with a Column `VALUE` to have a reference for the Measure.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value_numeric" name="VALUE_NUMERIC"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Kpi with parameters

This KPI is defined
- value             expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedValue]`
- trend             expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedTrend]`
- weight            expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedValue]`
- currentTimeMember expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedValue]`
- DisplayFolder     Kpi1Folder1\Kpi1Folder3 - folder tree of kpi item


```xml
<rolapcube:Kpi xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmi:id="_kpi_kpi1" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder3" associatedMeasureGroupID="Kpi2MeasureGroupID" value="[Measures].[CalculatedValue]" trend="[Measures].[CalculatedTrend]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1

This cube holds references to measure1 and DimensionConnector Cube1Dimension1


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_cube1dimension1" dimension="_standarddimension_dimension1" overrideDimensionName="Cube1Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measurecube1" name="MeasureCube1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithouthasall" name="HierarchyWithoutHasAll" hasAll="false" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchywithouthasall"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value_numeric" name="VALUE_NUMERIC"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_fact_key"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube2

This cube holds references to measure2 and DimensionConnector Cube2Dimension1


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube2" name="Cube2" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_cube2dimension1" dimension="_standarddimension_dimension1" overrideDimensionName="Cube2Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measurecube2" name="MeasureCube2" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithouthasall" name="HierarchyWithoutHasAll" hasAll="false" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchywithouthasall"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value_numeric" name="VALUE_NUMERIC"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_fact_key"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## vCube

This cube holds references to the dimensions and mesures from Cube1 and Cube2.
Cube have two CalculatedMembers (CalculatedValue, CalculatedTrend).
CalculatedMembers uses measures from Cube1 and Cube2.
Cube have KPI which use CalculatedMembers for parameters Value, Trend.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:VirtualCube xmi:id="_virtualcube_cube1cube2kpi" name="Cube1Cube2Kpi">
    <calculatedMembers xmi:id="_calculatedmember_calculatedvalue" name="CalculatedValue" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="_explicithierarchy_hierarchywithouthasall"/>
    <calculatedMembers xmi:id="_calculatedmember_calculatedtrend" name="CalculatedTrend" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="_explicithierarchy_hierarchywithouthasall"/>
    <kpis xmi:id="_kpi_kpi1" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder3" associatedMeasureGroupID="Kpi2MeasureGroupID" value="[Measures].[CalculatedValue]" trend="[Measures].[CalculatedTrend]"/>
    <defaultMeasure xsi:type="rolapmeas:SumMeasure" href="_summeasure_measurecube1"/>
    <dimensionConnectors href="_dimensionconnector_cube1dimension1"/>
    <dimensionConnectors href="_dimensionconnector_cube2dimension1"/>
    <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_measurecube1"/>
    <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_measurecube2"/>
  </rolapcube:VirtualCube>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithouthasall" name="HierarchyWithoutHasAll" hasAll="false" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level2"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value_numeric" name="VALUE_NUMERIC"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_fact_key"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value_numeric _column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_kpi_virtual_cube" description="KPI implementation in virtual cubes" name="Daanse Tutorial - KPI Virtual Cube" cubes="_physicalcube_cube1 _physicalcube_cube2 _virtualcube_cube1cube2kpi" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value_numeric" name="VALUE_NUMERIC" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_fact_key"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithouthasall" name="HierarchyWithoutHasAll" hasAll="false" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchywithouthasall"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_cube1dimension1" dimension="_standarddimension_dimension1" overrideDimensionName="Cube1Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measurecube1" name="MeasureCube1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube2" name="Cube2" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_cube2dimension1" dimension="_standarddimension_dimension1" overrideDimensionName="Cube2Dimension1"/>
    <measureGroups xmi:id="_measuregroup_1">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measurecube2" name="MeasureCube2" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:VirtualCube xmi:id="_virtualcube_cube1cube2kpi" name="Cube1Cube2Kpi" defaultMeasure="_summeasure_measurecube1" dimensionConnectors="_dimensionconnector_cube1dimension1 _dimensionconnector_cube2dimension1" referencedMeasures="_summeasure_measurecube1 _summeasure_measurecube2">
    <calculatedMembers xmi:id="_calculatedmember_calculatedvalue" name="CalculatedValue" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="_explicithierarchy_hierarchywithouthasall"/>
    <calculatedMembers xmi:id="_calculatedmember_calculatedtrend" name="CalculatedTrend" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="_explicithierarchy_hierarchywithouthasall"/>
    <kpis xmi:id="_kpi_kpi1" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder3" associatedMeasureGroupID="Kpi2MeasureGroupID" value="[Measures].[CalculatedValue]" trend="[Measures].[CalculatedTrend]"/>
  </rolapcube:VirtualCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.kpi.virtualcube.zip" download>Download Zip File</a>
