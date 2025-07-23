---
title: Minimal_Single_Hierarchy_Hidden_Members_with_IfParentsName
group: Unstrutured
kind: other
number: z0
---



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="Hierarchy1" name="Hierarchy1" hasAll="true" primaryKey="Level_2_KEY" query="queryJoin1" levels="h1Level1 h1Level2"/>
  <roma:Catalog description="Schema of a minimal cube with single Hierarchy Hidden Members with IfParentsName" name="Minimal_Single_Hierarchy_Hidden_Members_with_IfParentsName" cubes="HiddenMembersIfParentName" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_DIM_KEY" name="DIM_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Level_1" name="Level_1">
      <columns xsi:type="roma:PhysicalColumn" id="Level_1_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Level_1_NAME" name="NAME"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Level_2" name="Level_2">
      <columns xsi:type="roma:PhysicalColumn" id="Level_2_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Level_2_NAME" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="Level_2_L1_KEY" name="L1_KEY" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="queryLevel1" table="Level_1"/>
  <roma:TableQuery id="queryLevel2" table="Level_2"/>
  <roma:TableQuery id="queryFact" table="Fact"/>
  <roma:JoinQuery id="queryJoin1">
    <left key="Level_2_L1_KEY" query="queryLevel2"/>
    <right key="Level_1_KEY" query="queryLevel1"/>
  </roma:JoinQuery>
  <roma:Level id="h1Level2" name="Level2" column="Level_2_KEY" hideMemberIf="IfParentsName" nameColumn="Level_2_NAME"/>
  <roma:Level id="h1Level1" name="Level1" column="Level_1_KEY" nameColumn="Level_1_NAME"/>
  <roma:StandardDimension id="DimensionMembersHiddenIfParentsName" name="DimensionMembersHiddenIfParentsName" hierarchies="Hierarchy1"/>
  <roma:PhysicalCube id="HiddenMembersIfParentName" name="HiddenMembersIfParentName" query="queryFact">
    <dimensionConnectors foreignKey="Fact_DIM_KEY" dimension="DimensionMembersHiddenIfParentsName" overrideDimensionName="DimensionMembersHiddenIfBlankName"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.levelifparentsname.zip" download>Download Zip File</a>
