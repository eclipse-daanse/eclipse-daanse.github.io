---
title: Cube Calculated Member Property
group: Cube
kind: TUTORIAL
number: 2.03.06
---
# Daanse Tutorial - Cube Calculated Member Property

This tutorial discusses Calculated Members with properties `MEMBER_ORDINAL` and `FORMAT_STRING`, which allow you to define members in the measure or dimension area of a cube without storing them directly in the database. Instead, these members are computed on the fly, often based on the values of other members or measures. This is particularly useful for creating derived measures or dimension members that are not present in the underlying data source.



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

The Query is a simple TableSource that selects all columns from the `Fact` table to use in the hierarchy and in the cube for the measures.


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
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_thehierarchy" name="theHierarchy" primaryKey="_column_fact_key" source="_tablesource_fact" levels="_level_thelevel"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_thelevel" name="theLevel" column="_column_fact_key"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The dimension is defined with the one hierarchy. The hierarchy is used in the cube and in the calculated member.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_thedimension" name="theDimension" hierarchies="_explicithierarchy_thehierarchy"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_thehierarchy" name="theHierarchy" primaryKey="_column_fact_key" source="_tablesource_fact" levels="_level_thelevel"/>
  <rolaplev:Level xmi:id="_level_thelevel" name="theLevel" column="_column_fact_key"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Calculated Member in Measure with properties

This calculated member only does a calculation with both of the existing Measures. The Formula holds the calculation instruction. The Formula Expression is a MDX expression. Member had properties MEMBER_ORDINAL = 1 and FORMAT_STRING


```xml
<rolaplev:CalculatedMember xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_calculatedmember_calculated_member_1" name="Calculated Member 1" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Calculated Member in Measure with properties

This calculated member only does a calculation with both of the existing Measures. The Formula holds the calculation instruction. The Formula Expression is a MDX expression. Member had properties MEMBER_ORDINAL = 2 and FORMAT_STRING



```xml
<rolaplev:CalculatedMember xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_calculatedmember_calculated_member_2" name="Calculated Member 2" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

The cube is defined by the DimensionConnector and the MeasureGroup and most importantly the calculated members.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_calculatedmember_with_properties" name="Cube CalculatedMember with properties" source="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_calculated_member_2" name="Calculated Member 2" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal" name="MEMBER_ORDINAL" value="2"/>
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string" name="FORMAT_STRING" value="$#,##"/>
    </calculatedMembers>
    <calculatedMembers xmi:id="_calculatedmember_calculated_member_1" name="Calculated Member 1" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_1" name="MEMBER_ORDINAL" value="1"/>
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string_1" name="FORMAT_STRING" value="$#,##0.00"/>
    </calculatedMembers>
    <dimensionConnectors xmi:id="_dimensionconnector_thedimension" foreignKey="_column_fact_key" dimension="_standarddimension_thedimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure_sum" name="Measure-Sum" column="_column_fact_value">
        <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_2" name="MEMBER_ORDINAL" value="3"/>
      </measures>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_measure_count" name="Measure-Count" column="_column_fact_value">
        <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_3" name="MEMBER_ORDINAL" value="4"/>
      </measures>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_thehierarchy" name="theHierarchy" primaryKey="_column_fact_key" source="_tablesource_fact" levels="_level_thelevel"/>
  <rolaplev:Level xmi:id="_level_thelevel" name="theLevel" column="_column_fact_key"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_thedimension" name="theDimension" hierarchies="_explicithierarchy_thehierarchy"/>
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
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_cube_calculated_member_property" description="Properties for calculated members" name="Daanse Tutorial - Cube Calculated Member Property" cubes="_physicalcube_cube_calculatedmember_with_properties" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_thelevel" name="theLevel" column="_column_fact_key"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_thehierarchy" name="theHierarchy" primaryKey="_column_fact_key" source="_tablesource_fact" levels="_level_thelevel"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_thedimension" name="theDimension" hierarchies="_explicithierarchy_thehierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_calculatedmember_with_properties" name="Cube CalculatedMember with properties" source="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_calculated_member_2" name="Calculated Member 2" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_1" name="MEMBER_ORDINAL" value="2"/>
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string" name="FORMAT_STRING" value="$#,##"/>
    </calculatedMembers>
    <calculatedMembers xmi:id="_calculatedmember_calculated_member_1" name="Calculated Member 1" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_2" name="MEMBER_ORDINAL" value="1"/>
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string_1" name="FORMAT_STRING" value="$#,##0.00"/>
    </calculatedMembers>
    <dimensionConnectors xmi:id="_dimensionconnector_thedimension" foreignKey="_column_fact_key" dimension="_standarddimension_thedimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure_sum" name="Measure-Sum" column="_column_fact_value">
        <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal" name="MEMBER_ORDINAL" value="3"/>
      </measures>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_measure_count" name="Measure-Count" column="_column_fact_value">
        <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_3" name="MEMBER_ORDINAL" value="4"/>
      </measures>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.calculatedmember.property.zip" download>Download Zip File</a>
