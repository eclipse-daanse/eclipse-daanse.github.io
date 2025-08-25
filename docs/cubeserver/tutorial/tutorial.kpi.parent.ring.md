---
title: KPI Parent Ring
group: Kpi
kind: TUTORIAL
number: 2.7.3
---
# Daanse Tutorial - KPI Parent Ring

This tutorial is an introduction to the concept of KPIs in data cubes with parent KPI.


Kpi1 is parent for Kpi2. Kpi2 is parent for Kpi3. Kpi3 is again parent for Kpi1.

Be carefull to not do that. Excel not able to find parent and show empty KPI tree


## Database Schema

A table `Fact` with a Column `VALUE` to have a reference for the Measure.


```xml
<roma:DatabaseSchema   id="_databaseSchema_KpiParentRing">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - value only

This KPI is defined solely by its value expression, which in this example references the following measure: `[Measures].[Measure1-Sum]`
This KPI is additionally using a Kpi3 as parent. We have cyrcle link here"


```xml
<roma:Kpi  id="_kpi_Kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi3"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - DisplayFolder

This KPI is additionally using a Kpi1 as parent.


```xml
<roma:Kpi  id="_kpi_Kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - Parent

This KPI is additionally using a Kpi2 as parent. And this KPI is parent for Kpi1.


```xml
<roma:Kpi  id="_kpi_Kpi3" name="Kpi3" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and Measure and KPI parent ring

This cube holds references to the KPI, and does not use any dimensions.


```xml
<roma:PhysicalCube   id="_cube_CubeKpi" name="Cube Kpi" query="_query_factQuery">
  <kpis id="_kpi_Kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi3"/>
  <kpis id="_kpi_Kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi1"/>
  <kpis id="_kpi_Kpi3" name="Kpi3" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi1"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_Measure1Sum" name="Measure1-Sum" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="KPI parent-child ring relationships" name="Daanse Tutorial - KPI Parent Ring" cubes="_cube_CubeKpi" dbschemas="_databaseSchema_KpiParentRing"/>
  <roma:DatabaseSchema id="_databaseSchema_KpiParentRing">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_factQuery" table="_table_fact"/>
  <roma:PhysicalCube id="_cube_CubeKpi" name="Cube Kpi" query="_query_factQuery">
    <kpis id="_kpi_Kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi3"/>
    <kpis id="_kpi_Kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi1"/>
    <kpis id="_kpi_Kpi3" name="Kpi3" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_Kpi1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Measure1Sum" name="Measure1-Sum" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.kpi.parent.ring.zip" download>Download Zip File</a>
