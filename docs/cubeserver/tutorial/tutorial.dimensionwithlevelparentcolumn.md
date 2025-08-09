---
title: Minimal_Parent_Child_Hierarchy
group: Unstrutured
kind: other
number: z0
---




## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ParentChildHierarchy id="Hierarchy1" name="Hierarchy1" primaryKey="Hier_One_Top_Member_KEY" query="Hier_One_Top_MemberQuery" parentColumn="Hier_One_Top_Member_PARENT_KEY" level="Level"/>
  <roma:Catalog description="Schema of a minimal cube with parent child hierarchy" name="Minimal_Parent_Child_Hierarchy" cubes="CubeParentChildOneTopMember" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_DIM_KEY" name="DIM_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Hier_One_Top_Member" name="Hier_One_Top_Member">
      <columns xsi:type="roma:PhysicalColumn" id="Hier_One_Top_Member_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Hier_One_Top_Member_NAME" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="Hier_One_Top_Member_PARENT_KEY" name="PARENT_KEY" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:TableQuery id="Hier_One_Top_MemberQuery" table="Hier_One_Top_Member"/>
  <roma:Level id="Level" name="Level" column="Hier_One_Top_Member_KEY" nameColumn="Hier_One_Top_Member_NAME" uniqueMembers="true"/>
  <roma:StandardDimension id="Dimension1" name="Dimension1" hierarchies="Hierarchy1"/>
  <roma:PhysicalCube id="CubeParentChildOneTopMember" name="CubeParentChildOneTopMember" query="FactQuery">
    <dimensionConnectors foreignKey="Fact_DIM_KEY" dimension="Dimension1" overrideDimensionName="Dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimensionwithlevelparentcolumn.zip" download>Download Zip File</a>
