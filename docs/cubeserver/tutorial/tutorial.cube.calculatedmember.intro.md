---
title: Calculated Member Intro
group: Member
kind: TUTORIAL
number: 2.03.06
---
# Daanse Tutorial - Calculated Member Intro

This tutorial discusses Calculated Members, which allow you to define members in the measure or dimension area of a cube without storing them directly in the database. Instead, these members are computed on the fly, often based on the values of other members or measures. This is particularly useful for creating derived measures or dimension members that are not present in the underlying data source.



## Database Schema

The Database Schema contains the `Fact` table with three columns: `KEY` and `VALUE` and `VALUE_NUMERIC`. The `KEY` column is used as the discriminator in the Level and Hierarchy definitions.


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
## Level

This Example uses one simple Level based on the `KEY` column.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_thelevel" name="theLevel">
  <column href="_column_fact_key"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy without hasAll Level

The Hierarchy is defined with the hasAll property set to true and the one level.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_thehierarchy" name="theHierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_thelevel"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_thelevel" name="theLevel" column="_column_fact_key"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The dimension is defined with the one hierarchy. The hierarchy is used in the cube and in the calculated member.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_thedimension" name="theDimension" hierarchies="_explicithierarchy_thehierarchy"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_thehierarchy" name="theHierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_thelevel"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_thelevel" name="theLevel" column="_column_fact_key"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Calculated Member in Measure

This calculated member only does a calculation with both of the existing Measures. The Formula holds the calculation instruction. The Formula Expression is a MDX expression.


```xml
<rolaplev:CalculatedMember xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_calculatedmember_calculated_member_1" name="Calculated Member 1" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Calculated Member in Dimension

This calculated member has also a Formula. Additionaly it references the Hierarchy where it should be added and a Parent Expression that defines under which Element it should be added. The Parent Expression is a MDX expression.



```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaplev:CalculatedMember xmi:id="_calculatedmember_calculated_member_2" name="Calculated Member 2" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]" parent="[theDimension].[theHierarchy].[All theHierarchys]" hierarchy="_explicithierarchy_thehierarchy"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_thehierarchy" name="theHierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_thelevel"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_thelevel" name="theLevel" column="_column_fact_key"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

The cube is defined by the DimensionConnector and the MeasureGroup and most importantly the calculated members.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_calculatedmember" name="Cube CalculatedMember" query="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_calculated_member_1" name="Calculated Member 1" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers xmi:id="_calculatedmember_calculated_member_2" name="Calculated Member 2" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]" parent="[theDimension].[theHierarchy].[All theHierarchys]" hierarchy="_explicithierarchy_thehierarchy"/>
    <dimensionConnectors xmi:id="_dimensionconnector_thedimension" foreignKey="_column_fact_key" dimension="_standarddimension_thedimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum" column="_column_fact_value"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_measure2_count" name="Measure2-Count" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_thehierarchy" name="theHierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_thelevel"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_thedimension" name="theDimension" hierarchies="_explicithierarchy_thehierarchy"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_thelevel" name="theLevel" column="_column_fact_key"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_calculated_member_intro" description="Introduction to calculated members in cubes" name="Daanse Tutorial - Calculated Member Intro" cubes="_physicalcube_cube_calculatedmember" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_thelevel" name="theLevel" column="_column_fact_key"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_thehierarchy" name="theHierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_thelevel"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_thedimension" name="theDimension" hierarchies="_explicithierarchy_thehierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_calculatedmember" name="Cube CalculatedMember" query="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_calculated_member_1" name="Calculated Member 1" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers xmi:id="_calculatedmember_calculated_member_2" name="Calculated Member 2" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]" parent="[theDimension].[theHierarchy].[All theHierarchys]" hierarchy="_explicithierarchy_thehierarchy"/>
    <dimensionConnectors xmi:id="_dimensionconnector_thedimension" foreignKey="_column_fact_key" dimension="_standarddimension_thedimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum" column="_column_fact_value"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_measure2_count" name="Measure2-Count" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.calculatedmember.intro.zip" download>Download Zip File</a>
