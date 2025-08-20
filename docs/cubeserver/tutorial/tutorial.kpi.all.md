---
title: KPI All
group: Kpi
kind: TUTORIAL
number: 2.7.2
---
A minimal cube with Kpi with all kpi properties


# Kpi with all parameters

This tutorial is an introduction to the concept of KPIs in data cubes.

A KPI has four important properties: value, goal, status, and trend. The most crucial (and mandatory) property is value. All four properties are defined as MDX expressions, which allows you to create an expression within the cube, give it a name, and associate a value with it.

To keep things simple in this example, we will use an existing measure in our expression.


## Database Schema

A table `Fact` with a Column `VALUE` to have a reference for the Measure.


```xml
<roma:DatabaseSchema   id="_databaseSchema_KpiAll">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value_numeric" name="VALUE_NUMERIC" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

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
<roma:Kpi  id="_kpi1" description="Kpi with all parameters" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder2" associatedMeasureGroupID="Kpi1MeasureGroupID" value="[Measures].[CalculatedValue]" goal="[Measures].[CalculatedGoal]" status="[Measures].[CalculatedStatus]" trend="[Measures].[CalculatedTrend]" weight="[Measures].[CalculatedValue]" trendGraphic="Smiley Face" statusGraphic="Cylinder" currentTimeMember="[Measures].[CalculatedValue]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with KPI with all properties

This cube holds references to the KPI, and does not use any dimensions.
Cube have two measures (Measure1-Sum, Measure2-Count) and 4 CalculatedMembers (CalculatedValue, CalculatedGoal, CalculatedStatus, CalculatedTrend)


```xml
<roma:PhysicalCube   id="_cubekpi" name="CubeKPI" query="_query_factQuery">
  <calculatedMembers id="_calculatedvalue" name="CalculatedValue" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
  <calculatedMembers id="_calculatedgoal" name="CalculatedGoal" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
  <calculatedMembers id="_calculatedstatus" name="CalculatedStatus" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
  <calculatedMembers id="_calculatedtrend" name="CalculatedTrend" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
  <kpis id="_kpi1" description="Kpi with all parameters" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder2" associatedMeasureGroupID="Kpi1MeasureGroupID" value="[Measures].[CalculatedValue]" goal="[Measures].[CalculatedGoal]" status="[Measures].[CalculatedStatus]" trend="[Measures].[CalculatedTrend]" weight="[Measures].[CalculatedValue]" trendGraphic="Smiley Face" statusGraphic="Cylinder" currentTimeMember="[Measures].[CalculatedValue]"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure1-sum" name="Measure1-Sum" column="_column_fact_value"/>
    <measures xsi:type="roma:CountMeasure" id="_measure2-count" name="Measure2-Count" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Complete KPI implementation examples" name="Daanse Tutorial - KPI All" cubes="_cubekpi" dbschemas="_databaseSchema_KpiAll"/>
  <roma:DatabaseSchema id="_databaseSchema_KpiAll">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value_numeric" name="VALUE_NUMERIC" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_factQuery" table="_table_fact"/>
  <roma:PhysicalCube id="_cubekpi" name="CubeKPI" query="_query_factQuery">
    <calculatedMembers id="_calculatedvalue" name="CalculatedValue" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers id="_calculatedgoal" name="CalculatedGoal" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers id="_calculatedstatus" name="CalculatedStatus" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers id="_calculatedtrend" name="CalculatedTrend" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <kpis id="_kpi1" description="Kpi with all parameters" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder2" associatedMeasureGroupID="Kpi1MeasureGroupID" value="[Measures].[CalculatedValue]" goal="[Measures].[CalculatedGoal]" status="[Measures].[CalculatedStatus]" trend="[Measures].[CalculatedTrend]" weight="[Measures].[CalculatedValue]" trendGraphic="Smiley Face" statusGraphic="Cylinder" currentTimeMember="[Measures].[CalculatedValue]"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure1-sum" name="Measure1-Sum" column="_column_fact_value"/>
      <measures xsi:type="roma:CountMeasure" id="_measure2-count" name="Measure2-Count" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.kpi.all.zip" download>Download Zip File</a>
