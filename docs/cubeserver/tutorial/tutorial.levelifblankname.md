---
title: Minimal_Single_Hierarchy_Hidden_Members_with_IfBlankName
group: Unstrutured
kind: other
number: z0
---
A basic OLAP schema with a level with property




## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema of a minimal cube with single Hierarchy Hidden Members with IfBlankName" name="Minimal_Single_Hierarchy_Hidden_Members_with_IfBlankName" cubes="HiddenMembersIfBlankName HiddenMembersIfBlankName" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_DIM_KEY" name="DIM_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Fact_Multiple" name="Fact_Multiple">
      <columns xsi:type="roma:PhysicalColumn" id="FactMultiple_DIM_KEY" name="DIM_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Level_1_Multiple" name="Level_1_Multiple">
      <columns xsi:type="roma:PhysicalColumn" id="Level_1_Multiple_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Level_1_Multiple_NAME" name="NAME"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Level_2_NULL" name="Level_2_NULL">
      <columns xsi:type="roma:PhysicalColumn" id="Level_2_NULL_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Level_2_NULL_NAME" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="Level_2_NULL_L1_KEY" name="L1_KEY" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Level_1" name="Level_1">
      <columns xsi:type="roma:PhysicalColumn" id="Level_1_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Level_1_NAME" name="NAME"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Level_2_Multiple" name="Level_2_Multiple">
      <columns xsi:type="roma:PhysicalColumn" id="Level_2_Multiple_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Level_2_Multiple_NAME" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="Level_2_Multiple_L1_KEY" name="L1_KEY" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Level_3_Multiple" name="Level_3_Multiple">
      <columns xsi:type="roma:PhysicalColumn" id="Level_3_Multiple_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Level_3_Multiple_NAME" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="Level_3_Multiple_L2_KEY" name="L2_KEY" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="queryLevel2Null" table="Level_2_NULL"/>
  <roma:TableQuery id="queryLevel2Multiple" table="Level_2_Multiple"/>
  <roma:TableQuery id="queryFact" table="Fact"/>
  <roma:TableQuery id="queryLevel1Multiple" table="Level_1_Multiple"/>
  <roma:TableQuery id="queryLevel3Multiple" table="Level_3_Multiple"/>
  <roma:TableQuery id="queryLevel1" table="Level_1"/>
  <roma:JoinQuery id="queryJoin1">
    <left key="Level_2_NULL_L1_KEY" query="queryLevel2Null"/>
    <right key="Level_1_KEY" query="queryLevel1"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="queryJoin2">
    <left key="Level_3_Multiple_L2_KEY" query="queryLevel3Multiple"/>
    <right key="Level_1_Multiple_KEY" query="queryJoin2Right"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="queryJoin2Right">
    <left key="Level_2_Multiple_L1_KEY" query="queryLevel2Multiple"/>
    <right key="Level_1_Multiple_KEY" query="queryLevel1Multiple"/>
  </roma:JoinQuery>
  <roma:Level id="h1Level2" name="Level2" column="Level_2_NULL_KEY" hideMemberIf="IfBlankName" nameColumn="Level_2_NULL_NAME"/>
  <roma:Level id="h2Level3" name="Level3" column="Level_3_Multiple_KEY" hideMemberIf="IfBlankName" nameColumn="Level_3_Multiple_NAME"/>
  <roma:Level id="h1Level1" name="Level1" column="Level_1_KEY" nameColumn="Level_1_NAME"/>
  <roma:Level id="h2Level2" name="Level2" column="Level_2_Multiple_KEY" hideMemberIf="IfBlankName" nameColumn="Level_2_Multiple_NAME"/>
  <roma:Level id="h2Level1" name="Level1" column="Level_1_Multiple_KEY" nameColumn="Level_1_Multiple_NAME"/>
  <roma:Hierarchy id="Hierarchy1_1" name="Hierarchy1" levels="h1Level1 h1Level2" hasAll="true" primaryKey="Level_2_NULL_KEY" query="queryJoin1"/>
  <roma:Hierarchy id="Hierarchy1_2" name="Hierarchy1" levels="h2Level1 h2Level2 h2Level3" hasAll="true" primaryKey="Level_3_Multiple_KEY" query="queryJoin2"/>
  <roma:StandardDimension id="DimensionMembersHiddenMultipleLevels" name="DimensionMembersHiddenMultipleLevels" hierarchies="Hierarchy1_2"/>
  <roma:StandardDimension id="DimensionMembersHiddenIfBlankName" name="DimensionMembersHiddenIfBlankName" hierarchies="Hierarchy1_1"/>
  <roma:PhysicalCube id="HiddenMembersIfBlankName" name="HiddenMembersIfBlankName" query="queryFact">
    <dimensionConnectors foreignKey="Fact_DIM_KEY" dimension="DimensionMembersHiddenMultipleLevels" overrideDimensionName="DimensionMembersHiddenMultipleLevels"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="HiddenMembersIfBlankName" name="HiddenMembersIfBlankName" query="queryFact">
    <dimensionConnectors foreignKey="Fact_DIM_KEY" dimension="DimensionMembersHiddenIfBlankName" overrideDimensionName="DimensionMembersHiddenIfBlankName"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.levelifblankname.zip" download>Download Zip File</a>
