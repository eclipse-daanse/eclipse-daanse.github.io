---
title: Cube_with_NamedSet
group: Unstrutured
kind: other
number: z0
---
Cube with NamedSet.
NamedSet as Set in dimension Dimension1


NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1.

NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1. NamedSet have folder

NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube.

NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube. NamedSet have folder


## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema of a minimal cube with namedSet" name="Cube_with_NamedSet" cubes="Cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:Level id="Level2" name="Level2" column="Fact_KEY"/>
  <roma:Hierarchy id="Hierarchy" name="Hierarchy" levels="Level2" hasAll="true" primaryKey="Fact_KEY" query="FactQuery"/>
  <roma:StandardDimension id="Dimension1" name="Dimension1" hierarchies="Hierarchy"/>
  <roma:PhysicalCube id="Cube" name="Cube" query="FactQuery">
    <namedSets id="NsWithFolderDimension1" name="NsWithFolderDimension1" displayFolder="Folder1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>
    <namedSets id="NsWithoutFolderDimension1" name="NsWithoutFolderDimension1" formula="TopCount([Dimension1].[Level2].MEMBERS, 5, [Measures].[Measure1])"/>
    <namedSets id="NSInCubeWithFolder" name="NSInCubeWithFolder" displayFolder="Folder2" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>
    <namedSets id="NSInCubeWithFolder" name="NSInCubeWithoutFolder" formula="{([Dimension1].[Level2].[A], [Dimension2].[Level2].[A]), ([Dimension1].[Level2].[B], [Dimension2].[Level2].[B])}"/>
    <dimensionConnectors dimension="Dimension1" overrideDimensionName="Dimension1"/>
    <dimensionConnectors dimension="Dimension1" overrideDimensionName="Dimension2"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.namedset.zip" download>Download Zip File</a>
