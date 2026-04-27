---
title: KPI All
group: Kpi
kind: TUTORIAL
number: 2.07.02
---
# Daanse Tutorial - KPI All

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
## Kpi with all parameters

This KPI is defined
value             expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedValue]`
goal              expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedGoal]`
status            expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedStatus]`
trend             expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedTrend]`
weight            expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedValue]`
currentTimeMember expression, which in this example references the following CalculatedMember: `[Measures].[CalculatedValue]`
DisplayFolder     Kpi1Folder1\Kpi1Folder2 - folder tree of kpi item
StatusGraphic     'Cylinder' - grafic icone type for status
TrendGraphic      'Smiley Face' - grafic icone type for trend



```xml
<rolapcube:Kpi xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmi:id="_kpi_kpi1" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder2" associatedMeasureGroupID="Kpi1MeasureGroupID" value="[Measures].[CalculatedValue]" goal="[Measures].[CalculatedGoal]" status="[Measures].[CalculatedStatus]" trend="[Measures].[CalculatedTrend]" weight="[Measures].[CalculatedValue]" trendGraphic="Smiley Face" statusGraphic="Cylinder" currentTimeMember="[Measures].[CalculatedValue]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with KPI with all properties

This cube holds references to the KPI, and does not use any dimensions.
Cube have two measures (Measure1-Sum, Measure2-Count) and 4 CalculatedMembers (CalculatedValue, CalculatedGoal, CalculatedStatus, CalculatedTrend)


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cubekpi" name="CubeKPI" query="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_calculatedvalue" name="CalculatedValue" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers xmi:id="_calculatedmember_calculatedgoal" name="CalculatedGoal" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers xmi:id="_calculatedmember_calculatedstatus" name="CalculatedStatus" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers xmi:id="_calculatedmember_calculatedtrend" name="CalculatedTrend" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <kpis xmi:id="_kpi_kpi1" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder2" associatedMeasureGroupID="Kpi1MeasureGroupID" value="[Measures].[CalculatedValue]" goal="[Measures].[CalculatedGoal]" status="[Measures].[CalculatedStatus]" trend="[Measures].[CalculatedTrend]" weight="[Measures].[CalculatedValue]" trendGraphic="Smiley Face" statusGraphic="Cylinder" currentTimeMember="[Measures].[CalculatedValue]"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum" column="_column_fact_value"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_measure2_count" name="Measure2-Count" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value_numeric" name="VALUE_NUMERIC"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value _column_fact_value_numeric" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_kpi_all" description="Complete KPI implementation examples" name="Daanse Tutorial - KPI All" cubes="_physicalcube_cubekpi" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value_numeric" name="VALUE_NUMERIC" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cubekpi" name="CubeKPI" query="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_calculatedvalue" name="CalculatedValue" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers xmi:id="_calculatedmember_calculatedgoal" name="CalculatedGoal" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers xmi:id="_calculatedmember_calculatedstatus" name="CalculatedStatus" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers xmi:id="_calculatedmember_calculatedtrend" name="CalculatedTrend" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <kpis xmi:id="_kpi_kpi1" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder2" associatedMeasureGroupID="Kpi1MeasureGroupID" value="[Measures].[CalculatedValue]" goal="[Measures].[CalculatedGoal]" status="[Measures].[CalculatedStatus]" trend="[Measures].[CalculatedTrend]" weight="[Measures].[CalculatedValue]" trendGraphic="Smiley Face" statusGraphic="Cylinder" currentTimeMember="[Measures].[CalculatedValue]"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum" column="_column_fact_value"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_measure2_count" name="Measure2-Count" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.kpi.all.zip" download>Download Zip File</a>
