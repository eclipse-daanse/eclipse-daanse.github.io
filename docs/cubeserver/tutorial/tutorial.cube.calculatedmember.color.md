---
title: Cube Calculated Member Color
group: Cube
kind: TUTORIAL
number: 2.3.6
---
# Daanse Tutorial - Cube Calculated Member Color

This tutorial discusses Calculated Members and Measures with diferent colors.



## Database Schema

The Database Schema contains the `Fact` table with three columns: `KEY` and `VALUE` and `VALUE_NUMERIC`. The `KEY` column is used as the discriminator in the the Level and Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="_databaseSchema_calculatedMemberColor">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the `Fact` table to use in in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

This Example uses one simple `Level` bases on the `KEY` column.


```xml
<roma:Level  id="_level_theLevel" name="theLevel" column="_column_fact_key"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy without hasAll Level

The Hierarchy is defined with the hasAll property set to true and the one level.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_theHierarchy" name="theHierarchy" primaryKey="_column_fact_key" query="_query_fact" levels="_level_theLevel"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The dimension is defined with the one hierarchy. The hierarchy is used in the cube and in the calculated member.


```xml
<roma:StandardDimension  id="_dimension_theDimension" name="theDimension" hierarchies="roma:ExplicitHierarchy _hierarchy_theHierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Calculated Member in Measure with different colors properties

This calculated member have `BACK_COLOR` in format string. It show posibility to have different colors incal culated member



```xml
<roma:CalculatedMember  id="_calculatedMember_calculatedMember2" name="Calculated Member 2" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Calculated Member in Measure with different colors properties

This calculated member have `BACK_COLOR` in format string. It show posibility to have different colors incal culated member


```xml
<roma:CalculatedMember  id="_calculatedMember_calculatedMember1" name="Calculated Member 1" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]" parent="[theDimension].[theHierarchy].[All theHierarchys]" hierarchy="roma:ExplicitHierarchy _hierarchy_theHierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

The cube is defines by the DimensionConnector and the MeasureGroup and most importantly the calculated members.


```xml
<roma:PhysicalCube   id="_cube_calculatedMemberColorCube" name="Cube CalculatedMember with different colors" query="_query_fact">
  <calculatedMembers id="_calculatedMember_calculatedMember2" name="Calculated Member 2" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]">
    <calculatedMemberProperties id="_calculatedMemberProperty_format2" name="FORMAT_STRING" value="$#,##;BACK_COLOR=255;FORE_COLOR=13369395"/>
  </calculatedMembers>
  <calculatedMembers id="_calculatedMember_calculatedMember1" name="Calculated Member 1" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]" parent="[theDimension].[theHierarchy].[All theHierarchys]" hierarchy="roma:ExplicitHierarchy _hierarchy_theHierarchy">
    <calculatedMemberProperties id="_calculatedMemberProperty_format1" name="FORMAT_STRING" value="$#,##0.00;BACK_COLOR=65535;FORE_COLOR=13369395"/>
  </calculatedMembers>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_key" dimension="roma:StandardDimension _dimension_theDimension" id="_dimensionConnector_theDimension"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_measureSum" name="Measure-Sum" formatString="$#,##0.00;BACK_COLOR=32768;FORE_COLOR=0" column="_column_fact_value"/>
    <measures xsi:type="roma:CountMeasure" id="_measure_measureCount" name="Measure-Count" formatString="$#,##0.00;BACK_COLOR=16711680;FORE_COLOR=0" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy_theHierarchy" name="theHierarchy" primaryKey="_column_fact_key" query="_query_fact" levels="_level_theLevel"/>
  <roma:Catalog description="Color properties for calculated members" name="Daanse Tutorial - Cube Calculated Member Color" cubes="_cube_calculatedMemberColorCube" dbschemas="_databaseSchema_calculatedMemberColor"/>
  <roma:DatabaseSchema id="_databaseSchema_calculatedMemberColor">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:Level id="_level_theLevel" name="theLevel" column="_column_fact_key"/>
  <roma:StandardDimension id="_dimension_theDimension" name="theDimension" hierarchies="_hierarchy_theHierarchy"/>
  <roma:PhysicalCube id="_cube_calculatedMemberColorCube" name="Cube CalculatedMember with different colors" query="_query_fact">
    <calculatedMembers id="_calculatedMember_calculatedMember2" name="Calculated Member 2" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]">
      <calculatedMemberProperties id="_calculatedMemberProperty_format2" name="FORMAT_STRING" value="$#,##;BACK_COLOR=255;FORE_COLOR=13369395"/>
    </calculatedMembers>
    <calculatedMembers id="_calculatedMember_calculatedMember1" name="Calculated Member 1" displayFolder="folder" formula="[Measures].[Measure-Sum] / [Measures].[Measure-Count]" parent="[theDimension].[theHierarchy].[All theHierarchys]" hierarchy="_hierarchy_theHierarchy">
      <calculatedMemberProperties id="_calculatedMemberProperty_format1" name="FORMAT_STRING" value="$#,##0.00;BACK_COLOR=65535;FORE_COLOR=13369395"/>
    </calculatedMembers>
    <dimensionConnectors foreignKey="_column_fact_key" dimension="_dimension_theDimension" id="_dimensionConnector_theDimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_measureSum" name="Measure-Sum" formatString="$#,##0.00;BACK_COLOR=32768;FORE_COLOR=0" column="_column_fact_value"/>
      <measures xsi:type="roma:CountMeasure" id="_measure_measureCount" name="Measure-Count" formatString="$#,##0.00;BACK_COLOR=16711680;FORE_COLOR=0" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.calculatedmember.color.zip" download>Download Zip File</a>
