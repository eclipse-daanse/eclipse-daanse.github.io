---
title: Function Logic
group: Cube
kind: TUTORIAL
number: 2.3.6
---
# Daanse Tutorial - Function Logic

This tutorial discusses Calculated Members with logic functions.



## Database Schema

The Database Schema contains the Fact table with three columns: KEY and VALUE and VALUE_NUMERIC.


```xml
<roma:DatabaseSchema   id="_databaseschema">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the Fact table to use in in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_query" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Calculated Member with IIF function

This calculated member with IIF function.


```xml
<roma:CalculatedMember  id="_cm1" name="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)" formula="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube - logic functions

The cube is defines the calculated members with logic functions.


```xml
<roma:PhysicalCube   id="_cube" name="Cube logic functions" query="_query">
  <calculatedMembers id="_cm1" name="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)" formula="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)"/>
  <calculatedMembers id="_cm2" name="IIF([Measures].[Measure-Sum]>10,[Measures].[Measure-Sum],Null)" formula="IIF([Measures].[Measure-Sum]>10,[Measures].[Measure-Sum],Null)"/>
  <calculatedMembers id="_cm3" name="IIF([Measures].[Measure-Sum]>10,5,10)" formula="IIF([Measures].[Measure-Sum]>10,5,10)"/>
  <calculatedMembers id="_cm4" name="case when [Measures].[Measure-Sum]>10 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end" formula="case when [Measures].[Measure-Sum]>10 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end"/>
  <calculatedMembers id="_cm5" name="case when [Measures].[Measure-Sum]>100 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end" formula="case when [Measures].[Measure-Sum]>100 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end"/>
  <calculatedMembers id="_cm6" name="[Measures].[Measure-Sum]>10 and [Measures].[Measure-Count]>0" formula="[Measures].[Measure-Sum]>10 and [Measures].[Measure-Count]>0"/>
  <calculatedMembers id="_cm7" name="[Measures].[Measure-Sum]>10 or [Measures].[Measure-Count]>0" formula="[Measures].[Measure-Sum]>10 or [Measures].[Measure-Count]>0"/>
  <calculatedMembers id="_cm8" name="IsEmpty([Measures].[Measure-Sum])" formula="IsEmpty([Measures].[Measure-Sum])"/>
  <calculatedMembers id="_cm9" name="NOT IsEmpty([Measures].[Measure-Sum])" formula="NOT IsEmpty([Measures].[Measure-Sum])"/>
  <calculatedMembers id="_cm10" name="[Measures].[Measure-Sum] IS NULL" formula="[Measures].[Measure-Sum] IS NULL"/>
  <calculatedMembers id="_cm11" name="[Measures].[Measure-Sum]=10" formula="[Measures].[Measure-Sum]=10"/>
  <calculatedMembers id="_cm12" name="[Measures].[Measure-Sum]&lt;>10" formula="[Measures].[Measure-Sum]&lt;>10"/>
  <calculatedMembers id="_cm13" name="[Measures].[Measure-Sum]=10 XOR [Measures].[Measure-Sum]>10" formula="[Measures].[Measure-Sum]=10 XOR [Measures].[Measure-Sum]>10"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_MeasureSum" name="Measure-Sum" column="_col_fact_value"/>
    <measures xsi:type="roma:CountMeasure" id="_measure_MeasureCount" name="Measure-Count" column="_col_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Logic function implementations" name="Daanse Tutorial - Function Logic" cubes="_cube" dbschemas="_databaseschema"/>
  <roma:DatabaseSchema id="_databaseschema">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query" table="_table_fact"/>
  <roma:PhysicalCube id="_cube" name="Cube logic functions" query="_query">
    <calculatedMembers id="_cm1" name="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)" formula="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)"/>
    <calculatedMembers id="_cm2" name="IIF([Measures].[Measure-Sum]>10,[Measures].[Measure-Sum],Null)" formula="IIF([Measures].[Measure-Sum]>10,[Measures].[Measure-Sum],Null)"/>
    <calculatedMembers id="_cm3" name="IIF([Measures].[Measure-Sum]>10,5,10)" formula="IIF([Measures].[Measure-Sum]>10,5,10)"/>
    <calculatedMembers id="_cm4" name="case when [Measures].[Measure-Sum]>10 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end" formula="case when [Measures].[Measure-Sum]>10 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end"/>
    <calculatedMembers id="_cm5" name="case when [Measures].[Measure-Sum]>100 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end" formula="case when [Measures].[Measure-Sum]>100 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end"/>
    <calculatedMembers id="_cm6" name="[Measures].[Measure-Sum]>10 and [Measures].[Measure-Count]>0" formula="[Measures].[Measure-Sum]>10 and [Measures].[Measure-Count]>0"/>
    <calculatedMembers id="_cm7" name="[Measures].[Measure-Sum]>10 or [Measures].[Measure-Count]>0" formula="[Measures].[Measure-Sum]>10 or [Measures].[Measure-Count]>0"/>
    <calculatedMembers id="_cm8" name="IsEmpty([Measures].[Measure-Sum])" formula="IsEmpty([Measures].[Measure-Sum])"/>
    <calculatedMembers id="_cm9" name="NOT IsEmpty([Measures].[Measure-Sum])" formula="NOT IsEmpty([Measures].[Measure-Sum])"/>
    <calculatedMembers id="_cm10" name="[Measures].[Measure-Sum] IS NULL" formula="[Measures].[Measure-Sum] IS NULL"/>
    <calculatedMembers id="_cm11" name="[Measures].[Measure-Sum]=10" formula="[Measures].[Measure-Sum]=10"/>
    <calculatedMembers id="_cm12" name="[Measures].[Measure-Sum]&lt;>10" formula="[Measures].[Measure-Sum]&lt;>10"/>
    <calculatedMembers id="_cm13" name="[Measures].[Measure-Sum]=10 XOR [Measures].[Measure-Sum]>10" formula="[Measures].[Measure-Sum]=10 XOR [Measures].[Measure-Sum]>10"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_MeasureSum" name="Measure-Sum" column="_col_fact_value"/>
      <measures xsi:type="roma:CountMeasure" id="_measure_MeasureCount" name="Measure-Count" column="_col_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.function.logic.zip" download>Download Zip File</a>
