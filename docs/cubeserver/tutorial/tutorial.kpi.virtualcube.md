---
title: Cube with virtual cube with kpi
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
<roma:DatabaseSchema   id="databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_Fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_KEY" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE_NUMERIC" name="VALUE_NUMERIC" type="Integer"/>
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
<roma:Kpi  id="_Kpi1" description="Kpi with all parameters" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder3" associatedMeasureGroupID="Kpi2MeasureGroupID" value="[Measures].[CalculatedValue]" trend="[Measures].[CalculatedTrend]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1

This cube holds references to measure1 and DimensionConnector Cube1Dimension1


```xml
<roma:PhysicalCube   id="_Cube1" name="Cube1" query="_FactQuery">
  <dimensionConnectors dimension="roma:StandardDimension _Dimension1" overrideDimensionName="Cube1Dimension1"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_MeasureCube1" name="MeasureCube1" column="_Fact_VALUE"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube2

This cube holds references to measure2 and DimensionConnector Cube2Dimension1


```xml
<roma:PhysicalCube   id="_Cube2" name="Cube2" query="_FactQuery">
  <dimensionConnectors dimension="roma:StandardDimension _Dimension1" overrideDimensionName="Cube2Dimension1"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_MeasureCube2" name="MeasureCube2" column="_Fact_VALUE"/>
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
<roma:VirtualCube  id="_Cube1Cube2Kpi" name="Cube1Cube2Kpi" defaultMeasure="roma:SumMeasure _MeasureCube1" dimensionConnectors="/6/@dimensionConnectors.0 /7/@dimensionConnectors.0" referencedMeasures="roma:SumMeasure _MeasureCube1 roma:SumMeasure _MeasureCube2">
  <calculatedMembers id="_CalculatedValue" name="CalculatedValue" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="roma:ExplicitHierarchy _HierarchyWithoutHasAll"/>
  <calculatedMembers id="_CalculatedTrend" name="CalculatedTrend" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="roma:ExplicitHierarchy _HierarchyWithoutHasAll"/>
  <kpis id="_Kpi1" description="Kpi with all parameters" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder3" associatedMeasureGroupID="Kpi2MeasureGroupID" value="[Measures].[CalculatedValue]" trend="[Measures].[CalculatedTrend]"/>
</roma:VirtualCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_HierarchyWithoutHasAll" name="HierarchyWithoutHasAll" hasAll="false" primaryKey="_Fact_KEY" query="_FactQuery" levels="_Level2"/>
  <roma:Catalog description="Cube with virtual cube with kpi" name="Cube with virtual cube with kpi" cubes="_Cube1 _Cube2 _Cube1Cube2Kpi" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE_NUMERIC" name="VALUE_NUMERIC" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_FactQuery" table="_Fact"/>
  <roma:Level id="_Level2" name="Level2" column="_Fact_KEY"/>
  <roma:StandardDimension id="_Dimension1" name="Dimension1" hierarchies="_HierarchyWithoutHasAll"/>
  <roma:PhysicalCube id="_Cube1" name="Cube1" query="_FactQuery">
    <dimensionConnectors dimension="_Dimension1" overrideDimensionName="Cube1Dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_MeasureCube1" name="MeasureCube1" column="_Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_Cube2" name="Cube2" query="_FactQuery">
    <dimensionConnectors dimension="_Dimension1" overrideDimensionName="Cube2Dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_MeasureCube2" name="MeasureCube2" column="_Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:VirtualCube id="_Cube1Cube2Kpi" name="Cube1Cube2Kpi" defaultMeasure="_MeasureCube1" dimensionConnectors="/6/@dimensionConnectors.0 /7/@dimensionConnectors.0" referencedMeasures="_MeasureCube1 _MeasureCube2">
    <calculatedMembers id="_CalculatedValue" name="CalculatedValue" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="_HierarchyWithoutHasAll"/>
    <calculatedMembers id="_CalculatedTrend" name="CalculatedTrend" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="_HierarchyWithoutHasAll"/>
    <kpis id="_Kpi1" description="Kpi with all parameters" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder3" associatedMeasureGroupID="Kpi2MeasureGroupID" value="[Measures].[CalculatedValue]" trend="[Measures].[CalculatedTrend]"/>
  </roma:VirtualCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.kpi.virtualcube.zip" download>Download Zip File</a>
