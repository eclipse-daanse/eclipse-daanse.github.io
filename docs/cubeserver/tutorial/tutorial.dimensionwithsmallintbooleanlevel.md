---
title: Minimal_Cube_with_cube_dimension_smallInt_boolean_level
group: Unstrutured
kind: other
number: z0
---
cube with level which have "boolean" type. But in database we have "smallInt"
In this case both query is work
SELECT NON EMPTY [Dimension].[HierarchyWithHasAll].[Measure].members on COLUMNS FROM [Cube] WHERE [Level].[true]
and
SELECT NON EMPTY [Dimension].[HierarchyWithHasAll].[Measure].members on COLUMNS FROM [Cube] WHERE [Level].[1]



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="HierarchyWithHasAll" name="HierarchyWithHasAll" primaryKey="Fact_KEY" query="FactQuery" levels="Level"/>
  <roma:Catalog description="Schema of a minimal cube with level with smallInt boolan type" name="Minimal_Cube_with_cube_dimension_smallInt_boolean_level" cubes="Cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_FLAG" name="FLAG" type="SmallInt"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:Level id="Level" name="Level" column="Fact_FLAG" columnType="Boolean"/>
  <roma:StandardDimension id="Dimension" name="Dimension" hierarchies="HierarchyWithHasAll"/>
  <roma:PhysicalCube id="Cube" name="Cube" query="FactQuery">
    <dimensionConnectors dimension="Dimension" overrideDimensionName="Dimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure" name="Measure" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimensionwithsmallintbooleanlevel.zip" download>Download Zip File</a>
