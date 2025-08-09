---
title: parent ring
group: Kpi
kind: TUTORIAL
number: 2.7.3
---
# Kpi - Introduction

This tutorial is an introduction to the concept of KPIs in data cubes with parent KPI.


Kpi1 is parent for Kpi2. Kpi2 is parent for Kpi3. Kpi3 is again parent for Kpi1.

Be carefull to not do that. Excel not able to find parent and show empty KPI tree


## Database Schema

A table `Fact` with a Column `VALUE` to have a reference for the Measure.


```xml
<roma:DatabaseSchema   id="_databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - value only

This KPI is defined solely by its value expression, which in this example references the following measure: `[Measures].[Measure1-Sum]`
This KPI is additionally using a Kpi3 as parent. We have cyrcle link here"


```xml
<roma:Kpi  id="_kpi_1" name="Kpi1" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_3"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - DisplayFolder

This KPI is additionally using a Kpi1 as parent.


```xml
<roma:Kpi  id="_kpi_2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - Parent

This KPI is additionally using a Kpi2 as parent. And this KPI is parent for Kpi1.


```xml
<roma:Kpi  id="_kpi_3" name="Kpi3" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and Measure and KPI parent ring

This cube holds references to the KPI, and does not use any dimensions.


```xml
<roma:PhysicalCube   id="_cube" name="Cube Kpi" query="_query">
  <kpis id="_kpi_1" name="Kpi1" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_3"/>
  <kpis id="_kpi_2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_1"/>
  <kpis id="_kpi_3" name="Kpi3" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_1"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="Measure1-Sum" name="Measure1-Sum" column="_col_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog name="Kpi - parent ring" cubes="_cube" dbschemas="_databaseSchema"/>
  <roma:DatabaseSchema id="_databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query" table="_tab"/>
  <roma:PhysicalCube id="_cube" name="Cube Kpi" query="_query">
    <kpis id="_kpi_1" name="Kpi1" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_3"/>
    <kpis id="_kpi_2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_1"/>
    <kpis id="_kpi_3" name="Kpi3" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1-Sum" name="Measure1-Sum" column="_col_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.kpi.parent.ring.zip" download>Download Zip File</a>
