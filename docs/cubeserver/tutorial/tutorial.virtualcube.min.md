---
title: Virtual Cube Minimal
group: VirtualCube
kind: TUTORIAL
number: 2.15.1
---
# Daanse Tutorial - Virtual Cube Minimal

Minimal Virtual Cubes With Measures.
A virtual cube that combines measures and dimensions from multiple physical cubes into a unified analytical view.
Virtual cubes enable cross-cube analysis by creating a logical integration layer over existing physical cubes,
allowing users to analyze related metrics from different business processes in a single query
Catalog have two physical cubes Cube1 and Cube2 and virtual cube VirtualCubeMeasureOnly.


## Database Schema

The cube defined in this example is based on a two tables that stores all the data.
The table is named `C1_Fact` uses for Cube1 and contains two columns: `KEY` and `VALUE`.
The KEY column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.
The table is named `C2_Fact`uses for Cube2 and contains two columns: `KEY` and `VALUE`.
The KEY column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema_min">
  <tables xsi:type="roma:PhysicalTable" id="_c1_fact" name="C1_Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_c1_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_c1_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_c2_fact" name="C2_Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_c2_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_c2_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query1

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `C1_Fact`.


```xml
<roma:TableQuery  id="_c1TableQuery" table="_c1_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query2

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `C2_Fact`.


```xml
<roma:TableQuery  id="_c2TableQuery" table="_c2_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## C1-Measure-Sum

        Measure use C1_Fact table VALUE column with sum aggregation.


```xml
<roma:SumMeasure  id="_c1-measure-sum" name="C1-Measure-Sum" column="_c1_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## C2-Measure-Sum

        Measure use C2_Fact table VALUE column with sum aggregation.


```xml
<roma:SumMeasure  id="_c2-measure-sum" name="C2-Measure-Sum" column="_c2_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1

In this example uses cube with fact table C1_Fact as data.


```xml
<roma:PhysicalCube   id="_cube1" name="Cube1" query="_c1TableQuery">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_c1-measure-sum" name="C1-Measure-Sum" column="_c1_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1

In this example uses cube with fact table C2_Fact as data.


```xml
<roma:PhysicalCube   id="_cube1" name="Cube1" query="_c1TableQuery">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_c1-measure-sum" name="C1-Measure-Sum" column="_c1_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## VirtualCubeMeasureOnly

Virtual cube uses mesures from Cube1 and Cube2. Virtual cube has references for them.
Also virtual cube has calculatedMember which uses measures from Cube1 and Cube2.


```xml
<roma:VirtualCube  id="_virtualcubemeasureonly" name="VirtualCubeMeasureOnly" referencedMeasures="roma:SumMeasure _c1-measure-sum roma:SumMeasure _c2-measure-sum">
  <calculatedMembers id="_calculation1" name="Calculation1" formula="[Measures].[C1-Measure-Sum] + [Measures].[C2-Measure-Sum]"/>
  <cubeUsages cube="roma:PhysicalCube _cube1"/>
  <cubeUsages cube="roma:PhysicalCube _cube2"/>
</roma:VirtualCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Minimal virtual cube configuration" name="Daanse Tutorial - Virtual Cube Minimal" cubes="_cube1 _cube2 _virtualcubemeasureonly" dbschemas="_databaseSchema_min"/>
  <roma:DatabaseSchema id="_databaseSchema_min">
    <tables xsi:type="roma:PhysicalTable" id="_c1_fact" name="C1_Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_c1_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_c1_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_c2_fact" name="C2_Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_c2_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_c2_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_c1TableQuery" table="_c1_fact"/>
  <roma:TableQuery id="_c2TableQuery" table="_c2_fact"/>
  <roma:PhysicalCube id="_cube1" name="Cube1" query="_c1TableQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_c1-measure-sum" name="C1-Measure-Sum" column="_c1_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube2" name="Cube2" query="_c2TableQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_c2-measure-sum" name="C2-Measure-Sum" column="_c2_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:VirtualCube id="_virtualcubemeasureonly" name="VirtualCubeMeasureOnly" referencedMeasures="_c1-measure-sum _c2-measure-sum">
    <calculatedMembers id="_calculation1" name="Calculation1" formula="[Measures].[C1-Measure-Sum] + [Measures].[C2-Measure-Sum]"/>
    <cubeUsages cube="_cube1"/>
    <cubeUsages cube="_cube2"/>
  </roma:VirtualCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.virtualcube.min.zip" download>Download Zip File</a>
