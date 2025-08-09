---
title: Minimal_Cube_with_cube_dimension_level_with_parent_child
group: Unstrutured
kind: other
number: z0
---




## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ParentChildHierarchy id="hierarchy" allMemberName="All" primaryKey="_parent_name" query="FactQuery" parentColumn="_parent_parent" level="_level_name"/>
  <roma:Catalog description="Schema of a minimal cube with cube dimension level with parent child" name="Minimal_Cube_with_cube_dimension_level_with_parent_child" cubes="Cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_table_parent" name="Parent">
      <columns xsi:type="roma:PhysicalColumn" id="_parent_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_parent_parent" name="PARENT"/>
      <columns xsi:type="roma:PhysicalColumn" id="_parent_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="_table_parent"/>
  <roma:Level id="_level_name" name="Name" column="_parent_name" nameColumn="_parent_name" uniqueMembers="true"/>
  <roma:StandardDimension id="_dimension" name="Dimension" hierarchies="hierarchy"/>
  <roma:PhysicalCube id="Cube" name="Cube" query="FactQuery">
    <dimensionConnectors foreignKey="_parent_name" dimension="_dimension" overrideDimensionName="Dimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_value" name="Value" column="_parent_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.hierarchy.parentchild.base.zip" download>Download Zip File</a>
