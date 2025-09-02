---
title: Namedset All
group: Namedset
kind: TUTORIAL
number: 2.8.1
---
NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube. NamedSet have folder

NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube.

NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1. NamedSet have folder

NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1.

# Daanse Tutorial - Namedset All

This tutorial discusses NamedSets.

- NsWithFolderDimension1    : NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel. NamedSet have folder
- NsWithoutFolderDimension1 : NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel.
- NSInCubeWithFolder        : NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube on excel. NamedSet have folder
- NSInCubeWithoutFolder     : NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube.


## Database Schema

The Database Schema contains the Fact table with two columns: KEY and VALUE. The KEY column is used as the discriminator in the the Level and Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="_databaseSchema_namedSet">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the Fact table to use in in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

This Example uses one simple Level1 bases on the KEY column.


```xml
<roma:Level  id="_level_dimension" name="Level2" column="_column_fact_key"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1 without hasAll Level1

The Hierarchy1 is defined with the hasAll property set to false and the one level2.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_dimension" name="Hierarchy" primaryKey="_column_fact_key" query="_query_fact" levels="_level_dimension"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension1

The dimension1 is defined with the one hierarchy.


```xml
<roma:StandardDimension  id="_dimension_first" name="Dimension1" hierarchies="roma:ExplicitHierarchy _hierarchy_dimension"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## NamedSet1

NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel. NamedSet have folder


```xml
<roma:NamedSet  id="_namedSet_withFolderDimension1" name="NsWithFolderDimension1" displayFolder="Folder1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## NamedSet1

NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel.


```xml
<roma:NamedSet  id="_namedSet_withoutFolderDimension1" name="NsWithoutFolderDimension1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## NamedSet1

NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube on excel. NamedSet have folder


```xml
<roma:NamedSet  id="_namedSet_inCubeWithFolder" name="NSInCubeWithFolder" displayFolder="Folder2" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## NamedSet1

NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube.


```xml
<roma:NamedSet  id="_namedSet_inCubeWithoutFolder" name="NSInCubeWithoutFolder" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with NamedSets

The cube1 is defines by the DimensionConnector  and the MeasureGroup with measure with aggregation sum.


```xml
<roma:PhysicalCube   id="_cube_namedSet" name="Cube" query="_query_fact">
  <namedSets id="_namedSet_withFolderDimension1" name="NsWithFolderDimension1" displayFolder="Folder1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>
  <namedSets id="_namedSet_withoutFolderDimension1" name="NsWithoutFolderDimension1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>
  <namedSets id="_namedSet_inCubeWithFolder" name="NSInCubeWithFolder" displayFolder="Folder2" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>
  <namedSets id="_namedSet_inCubeWithoutFolder" name="NSInCubeWithoutFolder" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>
  <dimensionConnectors dimension="roma:StandardDimension _dimension_first" overrideDimensionName="Dimension1" id="_dimensionConnector_first"/>
  <dimensionConnectors dimension="roma:StandardDimension _dimension_first" overrideDimensionName="Dimension2" id="_dimensionConnector_second"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Named set configurations" name="Daanse Tutorial - Namedset All" cubes="_cube_namedSet" dbschemas="_databaseSchema_namedSet"/>
  <roma:DatabaseSchema id="_databaseSchema_namedSet">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:Level id="_level_dimension" name="Level2" column="_column_fact_key"/>
  <roma:ExplicitHierarchy id="_hierarchy_dimension" name="Hierarchy" primaryKey="_column_fact_key" query="_query_fact" levels="_level_dimension"/>
  <roma:StandardDimension id="_dimension_first" name="Dimension1" hierarchies="_hierarchy_dimension"/>
  <roma:PhysicalCube id="_cube_namedSet" name="Cube" query="_query_fact">
    <namedSets id="_namedSet_withFolderDimension1" name="NsWithFolderDimension1" displayFolder="Folder1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>
    <namedSets id="_namedSet_withoutFolderDimension1" name="NsWithoutFolderDimension1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>
    <namedSets id="_namedSet_inCubeWithFolder" name="NSInCubeWithFolder" displayFolder="Folder2" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>
    <namedSets id="_namedSet_inCubeWithoutFolder" name="NSInCubeWithoutFolder" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>
    <dimensionConnectors dimension="_dimension_first" overrideDimensionName="Dimension1" id="_dimensionConnector_first"/>
    <dimensionConnectors dimension="_dimension_first" overrideDimensionName="Dimension2" id="_dimensionConnector_second"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.namedset.zip" download>Download Zip File</a>
