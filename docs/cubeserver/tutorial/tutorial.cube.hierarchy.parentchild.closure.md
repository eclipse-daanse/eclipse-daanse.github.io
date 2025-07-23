---
title: Minimal_Cube_with_cube_dimension_level_with_parent_child_with_closure
group: Unstrutured
kind: other
number: z0
---




## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ParentChildHierarchy id="hierarchy" primaryKey="_fact_name" query="FactQuery" nullParentValue="0" parentColumn="_fact_parent" level="_level_name">
    <parentChildLink childColumn="_closure_name" parentColumn="_closure_parent">
      <table id="_closureQuery" table="_table_closure"/>
    </parentChildLink>
  </roma:ParentChildHierarchy>
  <roma:Catalog description="Schema of a minimal cube with cube dimension level with closure table" name="Minimal_Cube_with_cube_dimension_level_with_parent_child_with_closure" cubes="Cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_fact_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_fact_parent" name="PARENT"/>
      <columns xsi:type="roma:PhysicalColumn" id="_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_closure" name="Closure">
      <columns xsi:type="roma:PhysicalColumn" id="_closure_name" name="NAME" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_closure_parent" name="PARENT"/>
      <columns xsi:type="roma:PhysicalColumn" id="_closure_distance" name="DISTANCE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="_table_fact"/>
  <roma:Level id="_level_name" name="Name" column="_fact_name" nameColumn="_fact_name" uniqueMembers="true"/>
  <roma:StandardDimension id="_dimension" name="Dimension" hierarchies="hierarchy"/>
  <roma:PhysicalCube id="Cube" name="Cube" query="FactQuery">
    <dimensionConnectors foreignKey="_fact_name" dimension="_dimension" overrideDimensionName="Dimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_value" name="Value" column="_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.hierarchy.parentchild.closure.zip" download>Download Zip File</a>
