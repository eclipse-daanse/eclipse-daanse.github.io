---
title: tutorial_for_writeback
group: Unstrutured
kind: other
number: z0
---
writeback with fact as table



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="HierarchyWithHasAll" name="HierarchyWithHasAll" primaryKey="L1_L2" query="join" levels="L1Level L2Level"/>
  <roma:Catalog description="Schema with writeback" name="tutorial_for_writeback" cubes="C" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="FACT" name="FACT">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VAL" name="VAL" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VAL1" name="VAL1" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_L2" name="L2" columnSize="100"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="L1" name="L1">
      <columns xsi:type="roma:PhysicalColumn" id="L1_L1" name="L1" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="L1_L2" name="L2" columnSize="100"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="L2" name="L2">
      <columns xsi:type="roma:PhysicalColumn" id="L2_L2" name="L2" columnSize="100"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="FACTWB" name="FACTWB">
      <columns xsi:type="roma:PhysicalColumn" id="Factwb_VAL" name="VAL" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Factwb_VAL1" name="VAL1" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="factwb_L2" name="L2" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="factwb_ID" name="ID" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="factwb_USER" name="USER" columnSize="100"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="l1Query" table="L1"/>
  <roma:TableQuery id="FactQuery" table="FACT"/>
  <roma:TableQuery id="l2Query" table="L2"/>
  <roma:JoinQuery id="join">
    <left key="L1_L2" query="l1Query"/>
    <right key="L2_L2" query="l2Query"/>
  </roma:JoinQuery>
  <roma:Level id="L2Level" name="L2" column="L2_L2"/>
  <roma:Level id="L1Level" name="L1" column="L1_L1"/>
  <roma:StandardDimension id="D1" name="D1" hierarchies="HierarchyWithHasAll"/>
  <roma:PhysicalCube id="C" name="C" query="FactQuery">
    <dimensionConnectors foreignKey="L1_L2" dimension="D1" overrideDimensionName="D1" id="D1Connector"/>
    <writebackTable name="FACTWB">
      <writebackAttribute column="Fact_L2" dimensionConnector="D1Connector"/>
      <writebackMeasure column="Fact_VAL" name="Measure1"/>
      <writebackMeasure column="Fact_VAL1" name="Measure2"/>
    </writebackTable>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VAL"/>
      <measures xsi:type="roma:SumMeasure" id="Measure2" name="Measure2" column="Fact_VAL1"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.writebacktable.zip" download>Download Zip File</a>
