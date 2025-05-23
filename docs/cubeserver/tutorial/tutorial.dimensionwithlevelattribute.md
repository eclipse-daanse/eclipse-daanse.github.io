---
title: Minimal_Cube_with_cube_dimension_level_attribute
group: Unstrutured
kind: other
number: z0
---
A basic OLAP schema with DimensionUsage with level attribute
Level attribute in DimensionUsage uses for optimize sql inner join
Level attribute is name of the level to join to
If not specified joins to the lowest level of the dimension



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema of a minimal cube with level attribute" name="Minimal_Cube_with_cube_dimension_level_attribute" cubes="CubeMultipleHierarchy" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_DIM_KEY" name="DIM_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="H1_L1" name="H1_L1">
      <columns xsi:type="roma:PhysicalColumn" id="H1_L1_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="H1_L1_NAME" name="NAME"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="HX_L2" name="HX_L2">
      <columns xsi:type="roma:PhysicalColumn" id="HX_L2_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="HX_L2_NAME" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="HX_L2_H1L1_KEY" name="H1L1_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="HX_L2_H2L1_KEY" name="H2L1_KEY" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="H1L1Query" table="H1_L1"/>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:TableQuery id="HxL2Query" table="HX_L2"/>
  <roma:JoinQuery id="joinQuery">
    <left key="HX_L2_H1L1_KEY" query="HxL2Query"/>
    <right key="H1_L1_KEY" query="H1L1Query"/>
  </roma:JoinQuery>
  <roma:Level id="H1_Level2" name="H1_Level2" column="HX_L2_KEY" nameColumn="HX_L2_NAME"/>
  <roma:Level id="H1_Level1" name="H1_Level1" column="H1_L1_KEY" nameColumn="H1_L1_NAME"/>
  <roma:Hierarchy id="Hierarchy1" name="Hierarchy1" levels="H1_Level1 H1_Level2" hasAll="true" primaryKey="HX_L2_KEY" query="joinQuery"/>
  <roma:StandardDimension id="Diml1" name="Diml1" hierarchies="Hierarchy1"/>
  <roma:PhysicalCube id="CubeMultipleHierarchy" name="CubeMultipleHierarchy" query="FactQuery">
    <dimensionConnectors foreignKey="Fact_DIM_KEY" dimension="Diml1" overrideDimensionName="Dim1" level="H1_Level2"/>
    <dimensionConnectors foreignKey="Fact_DIM_KEY" dimension="Diml1" overrideDimensionName="Dim2" level="H1_Level1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure" name="Measure" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimensionwithlevelattribute.zip" download>Download Zip File</a>
