---
title: KPI Intro
group: Kpi
kind: TUTORIAL
number: 2.7.1
---
# Daanse Tutorial - KPI Intro

This tutorial is an introduction to the concept of KPIs in data cubes.

A KPI has four important properties: value, goal, status, and trend. The most crucial (and mandatory) property is value. All four properties are defined as MDX expressions, which allows you to create an expression within the cube, give it a name, and associate a value with it.

To keep things simple in this example, we will use an existing measure in our expression.


## Database Schema

A table `Fact` with a Column `VALUE` to have a reference for the Measure.


```xml
<roma:DatabaseSchema   id="_databaseSchema_KpiIntro">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - value only

This KPI is defined solely by its value expression, which in this example references the following measure: `[Measures].[Measure1-Sum]`


```xml
<roma:Kpi  id="_kpi_Kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - DisplayFolder

This KPI is additionally using a `ParentKpiID`.


```xml
<roma:Kpi  id="_kpi_Kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - Parent

In addition to its value, this KPI has a display folder defined, which includes a folder hierarchy with folder and subfolder.


```xml
<roma:Kpi  id="_kpi_Kpi3" name="Kpi3" displayFolder="theDisplayFolder\otherDisplayFolder" value="[Measures].[Measure1-Sum]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

This cube holds references to the KPI, and does not use any dimensions.


```xml
<roma:PhysicalCube   id="_cube_CubeKpi" name="Cube Kpi" query="_query_factQuery">
  <kpis id="_kpi_Kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]"/>
  <kpis id="_kpi_Kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi1"/>
  <kpis id="_kpi_Kpi3" name="Kpi3" displayFolder="theDisplayFolder\otherDisplayFolder" value="[Measures].[Measure1-Sum]"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_Measure1Sum" name="Measure1-Sum" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Introduction to Key Performance Indicators" name="Daanse Tutorial - KPI Intro" cubes="_cube_CubeKpi" dbschemas="_databaseSchema_KpiIntro"/>
  <roma:DatabaseSchema id="_databaseSchema_KpiIntro">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_factQuery" table="_table_fact"/>
  <roma:PhysicalCube id="_cube_CubeKpi" name="Cube Kpi" query="_query_factQuery">
    <kpis id="_kpi_Kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]"/>
    <kpis id="_kpi_Kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi1"/>
    <kpis id="_kpi_Kpi3" name="Kpi3" displayFolder="theDisplayFolder\otherDisplayFolder" value="[Measures].[Measure1-Sum]"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Measure1Sum" name="Measure1-Sum" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.kpi.intro.zip" download>Download Zip File</a>
