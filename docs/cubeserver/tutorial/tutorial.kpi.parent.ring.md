---
title: KPI Parent Ring
group: Kpi
kind: TUTORIAL
number: 2.07.03
---
# Daanse Tutorial - KPI Parent Ring

This tutorial is an introduction to the concept of KPIs in data cubes with parent KPI.


Kpi1 is parent for Kpi2. Kpi2 is parent for Kpi3. Kpi3 is again parent for Kpi1.

Be carefull to not do that. Excel not able to find parent and show empty KPI tree


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
This KPI is additionally using a Kpi3 as parent. We have cyrcle link here"


```xml
<rolapcube:Kpi xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmi:id="_kpi_kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]">
  <parentKpi href="_kpi_kpi3"/>
</rolapcube:Kpi>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - DisplayFolder

This KPI is additionally using a Kpi1 as parent.


```xml
<rolapcube:Kpi xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmi:id="_kpi_kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]">
  <parentKpi href="_kpi_kpi1"/>
</rolapcube:Kpi>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## KPI - Parent

This KPI is additionally using a Kpi2 as parent. And this KPI is parent for Kpi1.


```xml
<rolapcube:Kpi xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmi:id="_kpi_kpi3" name="Kpi3" value="[Measures].[Measure1-Sum]">
  <parentKpi href="_kpi_kpi1"/>
</rolapcube:Kpi>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and Measure and KPI parent ring

This cube holds references to the KPI, and does not use any dimensions.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_kpi" name="Cube Kpi" query="_tablesource_fact">
    <kpis xmi:id="_kpi_kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_kpi3"/>
    <kpis xmi:id="_kpi_kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_kpi1"/>
    <kpis xmi:id="_kpi_kpi3" name="Kpi3" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_kpi1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <relational:Table xmi:id="_table_fact" name="Fact">
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
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_kpi_parent_ring" description="KPI parent-child ring relationships" name="Daanse Tutorial - KPI Parent Ring" cubes="_physicalcube_cube_kpi" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_kpi" name="Cube Kpi" query="_tablesource_fact">
    <kpis xmi:id="_kpi_kpi1" name="Kpi1" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_kpi3"/>
    <kpis xmi:id="_kpi_kpi2" name="Kpi2" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_kpi1"/>
    <kpis xmi:id="_kpi_kpi3" name="Kpi3" value="[Measures].[Measure1-Sum]" parentKpi="_kpi_kpi1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.kpi.parent.ring.zip" download>Download Zip File</a>
