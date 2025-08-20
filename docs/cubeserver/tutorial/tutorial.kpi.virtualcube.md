---
title: KPI Virtual Cube
group: Kpi
kind: TUTORIAL
number: 2.7.4
---
A basic OLAP schema with virtual cube which have reference to Cube1, Cube2 and with KPI



# Cube with virtual cube with kpi

This tutorial is an introduction to the concept of KPIs in data cubes.

A KPI has four important properties: value, goal, status, and trend. The most crucial (and mandatory) property is value. All four properties are defined as MDX expressions, which allows you to create an expression within the cube, give it a name, and associate a value with it.

To keep things simple in this example, we will use an existing measure in our expression.


## Database Schema

A table `Fact` with a Column `VALUE` to have a reference for the Measure.


```xml
<roma:DatabaseSchema   id="_databaseSchema_virtualcube">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value_numeric" name="VALUE_NUMERIC" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Kpi with parameters

This KPI is defined
value             expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedValue]`
trend             expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedTrend]`
weight            expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedValue]`
currentTimeMember expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedValue]`
DisplayFolder     Kpi1Folder1\Kpi1Folder3 - folder tree of kpi item


```xml
<roma:Kpi  id="_kpi1" description="Kpi with all parameters" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder3" associatedMeasureGroupID="Kpi2MeasureGroupID" value="[Measures].[CalculatedValue]" trend="[Measures].[CalculatedTrend]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1

This cube holds references to measure1 and DimensionConnector Cube1Dimension1


```xml
<roma:PhysicalCube   id="_cube1" name="Cube1" query="_table_factQuery">
  <dimensionConnectors dimension="roma:StandardDimension _dimension1" overrideDimensionName="Cube1Dimension1" id="_dc_cube1Dimension1"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measurecube1" name="MeasureCube1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube2

This cube holds references to measure2 and DimensionConnector Cube2Dimension1


```xml
<roma:PhysicalCube   id="_cube2" name="Cube2" query="_table_factQuery">
  <dimensionConnectors dimension="roma:StandardDimension _dimension1" overrideDimensionName="Cube2Dimension1" id="_dc_cube2Dimension1"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measurecube2" name="MeasureCube2" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## vCube

This cube holds references to the dimensions and mesures from Cube1 and Cube2.
Cube have two CalculatedMembers (CalculatedValue, CalculatedTrend).
CalculatedMembers uses measures from Cube1 and Cube2.
Cube have KPI which use CalculatedMembers for parameters Value, Trend.


```xml
<roma:VirtualCube  id="_cube1cube2kpi" name="Cube1Cube2Kpi" defaultMeasure="roma:SumMeasure _measurecube1" dimensionConnectors="_dc_cube1Dimension1 _dc_cube2Dimension1" referencedMeasures="roma:SumMeasure _measurecube1 roma:SumMeasure _measurecube2">
  <calculatedMembers id="_calculatedvalue" name="CalculatedValue" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="roma:ExplicitHierarchy _hierarchywithouthasall"/>
  <calculatedMembers id="_calculatedtrend" name="CalculatedTrend" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="roma:ExplicitHierarchy _hierarchywithouthasall"/>
  <kpis id="_kpi1" description="Kpi with all parameters" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder3" associatedMeasureGroupID="Kpi2MeasureGroupID" value="[Measures].[CalculatedValue]" trend="[Measures].[CalculatedTrend]"/>
</roma:VirtualCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchywithouthasall" name="HierarchyWithoutHasAll" hasAll="false" primaryKey="_column_fact_key" query="_table_factQuery" levels="_level2"/>
  <roma:Catalog description="KPI implementation in virtual cubes" name="Daanse Tutorial - KPI Virtual Cube" cubes="_cube1 _cube2 _cube1cube2kpi" dbschemas="_databaseSchema_virtualcube"/>
  <roma:DatabaseSchema id="_databaseSchema_virtualcube">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value_numeric" name="VALUE_NUMERIC" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_table_factQuery" table="_table_fact"/>
  <roma:Level id="_level2" name="Level2" column="_column_fact_key"/>
  <roma:StandardDimension id="_dimension1" name="Dimension1" hierarchies="_hierarchywithouthasall"/>
  <roma:PhysicalCube id="_cube1" name="Cube1" query="_table_factQuery">
    <dimensionConnectors dimension="_dimension1" overrideDimensionName="Cube1Dimension1" id="_dc_cube1Dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measurecube1" name="MeasureCube1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube2" name="Cube2" query="_table_factQuery">
    <dimensionConnectors dimension="_dimension1" overrideDimensionName="Cube2Dimension1" id="_dc_cube2Dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measurecube2" name="MeasureCube2" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:VirtualCube id="_cube1cube2kpi" name="Cube1Cube2Kpi" defaultMeasure="_measurecube1" dimensionConnectors="_dc_cube1Dimension1 _dc_cube2Dimension1" referencedMeasures="_measurecube1 _measurecube2">
    <calculatedMembers id="_calculatedvalue" name="CalculatedValue" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="_hierarchywithouthasall"/>
    <calculatedMembers id="_calculatedtrend" name="CalculatedTrend" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="_hierarchywithouthasall"/>
    <kpis id="_kpi1" description="Kpi with all parameters" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder3" associatedMeasureGroupID="Kpi2MeasureGroupID" value="[Measures].[CalculatedValue]" trend="[Measures].[CalculatedTrend]"/>
  </roma:VirtualCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.kpi.virtualcube.zip" download>Download Zip File</a>
