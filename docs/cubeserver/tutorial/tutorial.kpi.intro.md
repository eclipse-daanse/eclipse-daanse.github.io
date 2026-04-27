---
title: KPI Intro
group: Kpi
kind: TUTORIAL
number: 2.07.01
---
# Daanse Tutorial - KPI Intro

This tutorial is an introduction to the concept of KPIs in data cubes.

A KPI has four important properties: value, goal, status, and trend. The most crucial (and mandatory) property is value. All four properties are defined as MDX expressions, which allows you to create an expression within the cube, give it a name, and associate a value with it.

To keep things simple in this example, we will use an existing measure in our expression.


## Database Schema

A table `Fact` with a Column `VALUE` to have a reference for the Measure.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - value only

This KPI is defined solely by its value expression, which in this example references the following measure: `[Measures].[Measure1-Sum]`


```xml
<rolapcube:Kpi xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmi:id="_kpi_kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - DisplayFolder

This KPI is additionally using a `ParentKpiID`.


```xml
<rolapcube:Kpi xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmi:id="_kpi_kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]">
  <parentKpi href="_kpi_kpi1"/>
</rolapcube:Kpi>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - Parent

In addition to its value, this KPI has a display folder defined, which includes a folder hierarchy with folder and subfolder.


```xml
<rolapcube:Kpi xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmi:id="_kpi_kpi3" name="Kpi3" displayFolder="theDisplayFolder\otherDisplayFolder" value="[Measures].[Measure1-Sum]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

This cube holds references to the KPI, and does not use any dimensions.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_kpi" name="Cube Kpi" query="_tablesource_fact">
    <kpis xmi:id="_kpi_kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]"/>
    <kpis xmi:id="_kpi_kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_kpi1"/>
    <kpis xmi:id="_kpi_kpi3" name="Kpi3" displayFolder="theDisplayFolder\otherDisplayFolder" value="[Measures].[Measure1-Sum]"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_kpi_intro" description="Introduction to Key Performance Indicators" name="Daanse Tutorial - KPI Intro" cubes="_physicalcube_cube_kpi" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_kpi" name="Cube Kpi" query="_tablesource_fact">
    <kpis xmi:id="_kpi_kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]"/>
    <kpis xmi:id="_kpi_kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_kpi1"/>
    <kpis xmi:id="_kpi_kpi3" name="Kpi3" displayFolder="theDisplayFolder\otherDisplayFolder" value="[Measures].[Measure1-Sum]"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.kpi.intro.zip" download>Download Zip File</a>
