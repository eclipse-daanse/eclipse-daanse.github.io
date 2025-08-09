---
title: Minimal_Cube_with_DrillThroughAction
group: Unstrutured
kind: other
number: z0
---




## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="Hierarchy1" name="Hierarchy1" primaryKey="HX_L2_KEY" query="join1" levels="H1_Level1 H1_Level2"/>
  <roma:Catalog description="Schema of a minimal cube with DrillThroughAction" name="Minimal_Cube_with_DrillThroughAction" cubes="Cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="H1_L1" name="H1_L1">
      <columns xsi:type="roma:PhysicalColumn" id="H1_L1_VALUE" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="H1_L1_NAME" name="NAME"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="H2_L1" name="H2_L1">
      <columns xsi:type="roma:PhysicalColumn" id="H2_L1_VALUE" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="H2_L1_NAME" name="NAME"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="HX_L2" name="HX_L2">
      <columns xsi:type="roma:PhysicalColumn" id="HX_L2_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="HX_L2_NAME" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="HX_L2_H1L1_KEY" name="H1L1_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="HX_L2_H2L1_KEY" name="H2L1_KEY" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:TableQuery id="H1L1Query" table="H1_L1"/>
  <roma:TableQuery id="HxL2Query" table="HX_L2"/>
  <roma:JoinQuery id="join1">
    <left key="HX_L2_H1L1_KEY" query="HxL2Query"/>
    <right key="H1_L1_VALUE" query="H1L1Query"/>
  </roma:JoinQuery>
  <roma:Level id="H1_Level1" name="H1_Level1" column="H1_L1_VALUE" nameColumn="H1_L1_NAME"/>
  <roma:Level id="H1_Level2" name="H1_Level2" column="HX_L2_KEY" nameColumn="HX_L2_NAME"/>
  <roma:StandardDimension id="Dimension1" name="Dimension1" hierarchies="Hierarchy1"/>
  <roma:PhysicalCube id="Cube" name="Cube" query="FactQuery">
    <dimensionConnectors foreignKey="Fact_KEY" dimension="Dimension1" overrideDimensionName="Dimension1"/>
    <action xsi:type="roma:DrillThroughAction" id="DrillthroughH1L1" name="DrillthroughH1L1" drillThroughMeasure="Measure1" default="true"/>
    <action xsi:type="roma:DrillThroughAction" id="DrillthroughH2L1" name="DrillthroughH2L1" drillThroughMeasure="Measure1">
      <drillThroughAttribute dimension="Dimension1" hierarchy="Hierarchy1" level="H1_Level1"/>
    </action>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.drillthroughaction.zip" download>Download Zip File</a>
