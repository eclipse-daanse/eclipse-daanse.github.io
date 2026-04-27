---
title: Virtual Cube Minimal
group: VirtualCube
kind: TUTORIAL
number: 2.15.01
---
# Daanse Tutorial - Virtual Cube Minimal

Minimal Virtual Cubes With Measures.
A virtual cube that combines measures and dimensions from multiple physical cubes into a unified analytical view.
Virtual cubes enable cross-cube analysis by creating a logical integration layer over existing physical cubes,
allowing users to analyze related metrics from different business processes in a single query
Catalog have two physical cubes Cube1 and Cube2 and virtual cube VirtualCubeMeasureOnly.


## Database Schema

The cube defined in this example is based on a two tables that stores all the data.
- The table is named `C1_Fact` uses for Cube1 and contains two columns: `KEY` and `VALUE`.
The `KEY` column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.
- The table is named `C2_Fact`uses for Cube2 and contains two columns: `KEY` and `VALUE`.
The `KEY` column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_c1_fact" name="C1_Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_c1_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_c1_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_c2_fact" name="C2_Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_c2_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_c2_fact_value" name="VALUE"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query1

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `C1_Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_c1_fact" table="_table_c1_fact"/>
  <relational:Table xmi:id="_table_c1_fact" name="C1_Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_c1_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_c1_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query2

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `C2_Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_c2_fact" table="_table_c2_fact"/>
  <relational:Table xmi:id="_table_c2_fact" name="C2_Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_c2_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_c2_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## C1-Measure-Sum

        Measure use `C1_Fact` table `VALUE` column with sum aggregation.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_c1_measure_sum" name="C1-Measure-Sum">
  <column href="_column_c1_fact_value"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## C2-Measure-Sum

        Measure use `C2_Fact` table `VALUE` column with sum aggregation.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_c2_measure_sum" name="C2-Measure-Sum">
  <column href="_column_c2_fact_value"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1

In this example uses cube with fact table C1_Fact as data.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_c1_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_c1_measure_sum" name="C1-Measure-Sum" column="_column_c1_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_c1_fact" table="_table_c1_fact"/>
  <relational:Table xmi:id="_table_c1_fact" name="C1_Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_c1_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_c1_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1

In this example uses cube with fact table C2_Fact as data.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_c1_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_c1_measure_sum" name="C1-Measure-Sum" column="_column_c1_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_c1_fact" table="_table_c1_fact"/>
  <relational:Table xmi:id="_table_c1_fact" name="C1_Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_c1_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_c1_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## VirtualCubeMeasureOnly

Virtual cube uses mesures from Cube1 and Cube2. Virtual cube has references for them.
Also virtual cube has calculatedMember which uses measures from Cube1 and Cube2.


```xml
<rolapcube:VirtualCube xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_virtualcube_virtualcubemeasureonly" name="VirtualCubeMeasureOnly">
  <calculatedMembers xmi:id="_calculatedmember_calculation1" name="Calculation1" formula="[Measures].[C1-Measure-Sum] + [Measures].[C2-Measure-Sum]"/>
  <cubeUsages xmi:id="_cubeconnector_cube1">
    <cube xsi:type="rolapcube:PhysicalCube" href="_physicalcube_cube1"/>
  </cubeUsages>
  <cubeUsages xmi:id="_cubeconnector_cube2">
    <cube xsi:type="rolapcube:PhysicalCube" href="_physicalcube_cube2"/>
  </cubeUsages>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_c1_measure_sum"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_c2_measure_sum"/>
</rolapcube:VirtualCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_c1_fact_key _column_c2_fact_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_c2_fact_value _column_c1_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_virtual_cube_minimal" description="Minimal virtual cube configuration" name="Daanse Tutorial - Virtual Cube Minimal" cubes="_physicalcube_cube1 _physicalcube_cube2 _virtualcube_virtualcubemeasureonly" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_c1_fact" name="C1_Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_c1_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_c1_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_c2_fact" name="C2_Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_c2_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_c2_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_c2_fact" table="_table_c2_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_c1_fact" table="_table_c1_fact"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_c1_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_c1_measure_sum" name="C1-Measure-Sum" column="_column_c1_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube2" name="Cube2" query="_tablesource_c2_fact">
    <measureGroups xmi:id="_measuregroup_1">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_c2_measure_sum" name="C2-Measure-Sum" column="_column_c2_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:VirtualCube xmi:id="_virtualcube_virtualcubemeasureonly" name="VirtualCubeMeasureOnly" referencedMeasures="_summeasure_c1_measure_sum _summeasure_c2_measure_sum">
    <calculatedMembers xmi:id="_calculatedmember_calculation1" name="Calculation1" formula="[Measures].[C1-Measure-Sum] + [Measures].[C2-Measure-Sum]"/>
    <cubeUsages xmi:id="_cubeconnector_cube1" cube="_physicalcube_cube1"/>
    <cubeUsages xmi:id="_cubeconnector_cube2" cube="_physicalcube_cube2"/>
  </rolapcube:VirtualCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.virtualcube.min.zip" download>Download Zip File</a>
