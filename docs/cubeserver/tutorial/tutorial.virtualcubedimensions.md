---
title: Cube_with_virtual_cube
group: Unstrutured
kind: other
number: z0
---
A basic OLAP schema with virtual cube which have reference to Cube1, Cube2



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema with virtual cube" name="Cube_with_virtual_cube" cubes="Cube1 Cube2 Cube1Cube2" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:Level id="Level2" name="Level2" column="Fact_KEY"/>
  <roma:Hierarchy id="HierarchyWithoutHasAll" name="HierarchyWithoutHasAll" levels="Level2" primaryKey="Fact_KEY" query="FactQuery"/>
  <roma:StandardDimension id="Dimension1" name="Dimension1" hierarchies="HierarchyWithoutHasAll"/>
  <roma:PhysicalCube id="Cube2" name="Cube2" query="FactQuery">
    <dimensionConnectors foreignKey="Fact_KEY" dimension="Dimension1" overrideDimensionName="Cube2Dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="MeasureCube2" name="MeasureCube2" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="Cube1" name="Cube1" query="FactQuery">
    <dimensionConnectors foreignKey="Fact_KEY" dimension="Dimension1" overrideDimensionName="Cube1Dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="MeasureCube1" name="MeasureCube1" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:VirtualCube id="Cube1Cube2" name="Cube1Cube2" dimensionConnectors="/7/@dimensionConnectors.0 /6/@dimensionConnectors.0" referencedMeasures="MeasureCube1 MeasureCube2"/>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.virtualcubedimensions.zip" download>Download Zip File</a>
