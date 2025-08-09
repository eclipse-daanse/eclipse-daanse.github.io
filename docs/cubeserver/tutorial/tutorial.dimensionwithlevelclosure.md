---
title: Minimal_Parent_Child_With_Closure
group: Unstrutured
kind: other
number: z0
---



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ParentChildHierarchy id="Hierarchy1" name="Hierarchy1" primaryKey="Hierarchy_KEY" query="HierarchyQuery" parentColumn="Hierarchy_PARENT_KEY" level="Level">
    <parentChildLink childColumn="Closure_CHILD_KEY" parentColumn="Closure_PARENT_KEY">
      <table id="ClosureQuery" table="Closure"/>
    </parentChildLink>
  </roma:ParentChildHierarchy>
  <roma:Catalog description="Schema of a minimal cube with level parent child with closure" name="Minimal_Parent_Child_With_Closure" cubes="CubeMultipleHierarchy" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_DIM_KEY" name="DIM_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Closure" name="Closure">
      <columns xsi:type="roma:PhysicalColumn" id="Closure_PARENT_KEY" name="PARENT_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Closure_CHILD_KEY" name="CHILD_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Closure_DIST" name="DIST" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Hierarchy" name="Hierarchy">
      <columns xsi:type="roma:PhysicalColumn" id="Hierarchy_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Hierarchy_NAME" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Hierarchy_PARENT_KEY" name="PARENT_KEY" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:TableQuery id="HierarchyQuery" table="Hierarchy"/>
  <roma:Level id="Level" name="Level" column="Hierarchy_KEY" nameColumn="Hierarchy_NAME" uniqueMembers="true"/>
  <roma:StandardDimension id="Dimension1" name="Dimension1" hierarchies="Hierarchy1"/>
  <roma:PhysicalCube id="CubeMultipleHierarchy" name="CubeMultipleHierarchy" query="FactQuery">
    <dimensionConnectors foreignKey="Fact_DIM_KEY" dimension="Dimension1" overrideDimensionName="Dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure" name="Measure" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimensionwithlevelclosure.zip" download>Download Zip File</a>
