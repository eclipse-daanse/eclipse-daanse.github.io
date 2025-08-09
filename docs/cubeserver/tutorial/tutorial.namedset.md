---
title: Cube with NamedSets
group: Namedset
kind: TUTORIAL
number: 2.8.1
---
Cube with NamedSet.


NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1. NamedSet have folder

NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1.

NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube. NamedSet have folder

NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube.

# catalog with Cube with NamedSets

This tutorial discusses NamedSets.

NsWithFolderDimension1    : NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel. NamedSet have folder
NsWithoutFolderDimension1 : NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel.
NSInCubeWithFolder        : NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube on excel. NamedSet have folder
NSInCubeWithoutFolder     : NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube.




## Cube with NamedSets

The Database Schema contains the Fact table with two columns: KEY and VALUE. The KEY column is used as the discriminator in the the Level and Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_Fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_KEY" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the Fact table to use in in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_FactQuery" table="_Fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

This Example uses one simple Level1 bases on the KEY column.


```xml
<roma:Level  id="_Level2" name="Level2" column="_Fact_KEY"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1 without hasAll Level1

The Hierarchy1 is defined with the hasAll property set to false and the one level2.


```xml
<roma:ExplicitHierarchy  id="_Hierarchy" name="Hierarchy" primaryKey="_Fact_KEY" query="_FactQuery" levels="_Level2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension1

The dimension1 is defined with the one hierarchy.


```xml
<roma:StandardDimension  id="_Dimension1" name="Dimension1" hierarchies="roma:ExplicitHierarchy _Hierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## NamedSet1

NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel. NamedSet have folder


```xml
<roma:NamedSet  id="_NsWithFolderDimension1" name="NsWithFolderDimension1" displayFolder="Folder1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## NamedSet1

NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel.


```xml
<roma:NamedSet  id="_NsWithoutFolderDimension1" name="NsWithoutFolderDimension1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## NamedSet1

NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube on excel. NamedSet have folder


```xml
<roma:NamedSet  id="_NSInCubeWithFolder" name="NSInCubeWithFolder" displayFolder="Folder2" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## NamedSet1

NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube.


```xml
<roma:NamedSet  id="_NSInCubeWithoutFolder" name="NSInCubeWithoutFolder" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with NamedSets

The cube1 is defines by the DimensionConnector  and the MeasureGroup with measure with aggregation sum.


```xml
<roma:PhysicalCube   id="_Cube" name="Cube" query="_FactQuery">
  <namedSets id="_NsWithFolderDimension1" name="NsWithFolderDimension1" displayFolder="Folder1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>
  <namedSets id="_NsWithoutFolderDimension1" name="NsWithoutFolderDimension1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>
  <namedSets id="_NSInCubeWithFolder" name="NSInCubeWithFolder" displayFolder="Folder2" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>
  <namedSets id="_NSInCubeWithoutFolder" name="NSInCubeWithoutFolder" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>
  <dimensionConnectors dimension="roma:StandardDimension _Dimension1" overrideDimensionName="Dimension1"/>
  <dimensionConnectors dimension="roma:StandardDimension _Dimension1" overrideDimensionName="Dimension2"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_Measure1" name="Measure1" column="_Fact_VALUE"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_Hierarchy" name="Hierarchy" primaryKey="_Fact_KEY" query="_FactQuery" levels="_Level2"/>
  <roma:Catalog description="Schema of a minimal cube with namedSet" name="Cube with NamedSets" cubes="_Cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_FactQuery" table="_Fact"/>
  <roma:Level id="_Level2" name="Level2" column="_Fact_KEY"/>
  <roma:StandardDimension id="_Dimension1" name="Dimension1" hierarchies="_Hierarchy"/>
  <roma:PhysicalCube id="_Cube" name="Cube" query="_FactQuery">
    <namedSets id="_NsWithFolderDimension1" name="NsWithFolderDimension1" displayFolder="Folder1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>
    <namedSets id="_NsWithoutFolderDimension1" name="NsWithoutFolderDimension1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>
    <namedSets id="_NSInCubeWithFolder" name="NSInCubeWithFolder" displayFolder="Folder2" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>
    <namedSets id="_NSInCubeWithoutFolder" name="NSInCubeWithoutFolder" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>
    <dimensionConnectors dimension="_Dimension1" overrideDimensionName="Dimension1"/>
    <dimensionConnectors dimension="_Dimension1" overrideDimensionName="Dimension2"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_Measure1" name="Measure1" column="_Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.namedset.zip" download>Download Zip File</a>
