---
title: Function Logic
group: Cube
kind: TUTORIAL
number: 2.03.06
---
# Daanse Tutorial - Function Logic

This tutorial discusses Calculated Members with logic functions.



## Database Schema

The Database Schema contains the `Fact` table with three columns: `KEY` and `VALUE` and `VALUE_NUMERIC`.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableSource that selects all columns from the Fact table to use in the hierarchy and in the cube for the measures.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Calculated Member with IIF function

This calculated member with `IIF` function.


```xml
<rolaplev:CalculatedMember xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_calculatedmember_iif_measures_measure_sum_100_measures_measure_sum_null" name="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)" formula="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube - logic functions

The cube defines the calculated members with logic functions.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_logic_functions" name="Cube logic functions" query="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_iif_measures_measure_sum_100_measures_measure_sum_null" name="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)" formula="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)"/>
    <calculatedMembers xmi:id="_calculatedmember_iif_measures_measure_sum_10_measures_measure_sum_null" name="IIF([Measures].[Measure-Sum]>10,[Measures].[Measure-Sum],Null)" formula="IIF([Measures].[Measure-Sum]>10,[Measures].[Measure-Sum],Null)"/>
    <calculatedMembers xmi:id="_calculatedmember_iif_measures_measure_sum_10_5_10" name="IIF([Measures].[Measure-Sum]>10,5,10)" formula="IIF([Measures].[Measure-Sum]>10,5,10)"/>
    <calculatedMembers xmi:id="_calculatedmember_case_when_measures_measure_sum_10_then_measures_measure_sum_else_measures_measure_count_end" name="case when [Measures].[Measure-Sum]>10 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end" formula="case when [Measures].[Measure-Sum]>10 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end"/>
    <calculatedMembers xmi:id="_calculatedmember_case_when_measures_measure_sum_100_then_measures_measure_sum_else_measures_measure_count_end" name="case when [Measures].[Measure-Sum]>100 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end" formula="case when [Measures].[Measure-Sum]>100 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_10_and_measures_measure_count_0" name="[Measures].[Measure-Sum]>10 and [Measures].[Measure-Count]>0" formula="[Measures].[Measure-Sum]>10 and [Measures].[Measure-Count]>0"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_10_or_measures_measure_count_0" name="[Measures].[Measure-Sum]>10 or [Measures].[Measure-Count]>0" formula="[Measures].[Measure-Sum]>10 or [Measures].[Measure-Count]>0"/>
    <calculatedMembers xmi:id="_calculatedmember_isempty_measures_measure_sum" name="IsEmpty([Measures].[Measure-Sum])" formula="IsEmpty([Measures].[Measure-Sum])"/>
    <calculatedMembers xmi:id="_calculatedmember_not_isempty_measures_measure_sum" name="NOT IsEmpty([Measures].[Measure-Sum])" formula="NOT IsEmpty([Measures].[Measure-Sum])"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_is_null" name="[Measures].[Measure-Sum] IS NULL" formula="[Measures].[Measure-Sum] IS NULL"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_10" name="[Measures].[Measure-Sum]=10" formula="[Measures].[Measure-Sum]=10"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_10_1" name="[Measures].[Measure-Sum]&lt;>10" formula="[Measures].[Measure-Sum]&lt;>10"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_10_xor_measures_measure_sum_10" name="[Measures].[Measure-Sum]=10 XOR [Measures].[Measure-Sum]>10" formula="[Measures].[Measure-Sum]=10 XOR [Measures].[Measure-Sum]>10"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_measure_count" name="Measure-Count" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
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
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_function_logic" description="Logic function implementations" name="Daanse Tutorial - Function Logic" cubes="_physicalcube_cube_logic_functions" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_logic_functions" name="Cube logic functions" query="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_iif_measures_measure_sum_100_measures_measure_sum_null" name="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)" formula="IIF([Measures].[Measure-Sum]>100,[Measures].[Measure-Sum],Null)"/>
    <calculatedMembers xmi:id="_calculatedmember_iif_measures_measure_sum_10_measures_measure_sum_null" name="IIF([Measures].[Measure-Sum]>10,[Measures].[Measure-Sum],Null)" formula="IIF([Measures].[Measure-Sum]>10,[Measures].[Measure-Sum],Null)"/>
    <calculatedMembers xmi:id="_calculatedmember_iif_measures_measure_sum_10_5_10" name="IIF([Measures].[Measure-Sum]>10,5,10)" formula="IIF([Measures].[Measure-Sum]>10,5,10)"/>
    <calculatedMembers xmi:id="_calculatedmember_case_when_measures_measure_sum_10_then_measures_measure_sum_else_measures_measure_count_end" name="case when [Measures].[Measure-Sum]>10 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end" formula="case when [Measures].[Measure-Sum]>10 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end"/>
    <calculatedMembers xmi:id="_calculatedmember_case_when_measures_measure_sum_100_then_measures_measure_sum_else_measures_measure_count_end" name="case when [Measures].[Measure-Sum]>100 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end" formula="case when [Measures].[Measure-Sum]>100 then [Measures].[Measure-Sum] else [Measures].[Measure-Count] end"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_10_and_measures_measure_count_0" name="[Measures].[Measure-Sum]>10 and [Measures].[Measure-Count]>0" formula="[Measures].[Measure-Sum]>10 and [Measures].[Measure-Count]>0"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_10_or_measures_measure_count_0" name="[Measures].[Measure-Sum]>10 or [Measures].[Measure-Count]>0" formula="[Measures].[Measure-Sum]>10 or [Measures].[Measure-Count]>0"/>
    <calculatedMembers xmi:id="_calculatedmember_isempty_measures_measure_sum" name="IsEmpty([Measures].[Measure-Sum])" formula="IsEmpty([Measures].[Measure-Sum])"/>
    <calculatedMembers xmi:id="_calculatedmember_not_isempty_measures_measure_sum" name="NOT IsEmpty([Measures].[Measure-Sum])" formula="NOT IsEmpty([Measures].[Measure-Sum])"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_is_null" name="[Measures].[Measure-Sum] IS NULL" formula="[Measures].[Measure-Sum] IS NULL"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_10_1" name="[Measures].[Measure-Sum]=10" formula="[Measures].[Measure-Sum]=10"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_10" name="[Measures].[Measure-Sum]&lt;>10" formula="[Measures].[Measure-Sum]&lt;>10"/>
    <calculatedMembers xmi:id="_calculatedmember_measures_measure_sum_10_xor_measures_measure_sum_10" name="[Measures].[Measure-Sum]=10 XOR [Measures].[Measure-Sum]>10" formula="[Measures].[Measure-Sum]=10 XOR [Measures].[Measure-Sum]>10"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_measure_count" name="Measure-Count" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.function.logic.zip" download>Download Zip File</a>
