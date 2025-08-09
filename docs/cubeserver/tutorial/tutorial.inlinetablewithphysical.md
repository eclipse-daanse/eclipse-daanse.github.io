---
title: CubeOneMeasureInlineTableLevelPhysicalAndInlineTables
group: Unstrutured
kind: other
number: z0
---
A minimal cube based on an inline table
with levels with phisical and inline tables




## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:InlineTableQuery id="_query_country" alias="COUNTRY" table="_tab_COUNTRY"/>
  <roma:InlineTableQuery id="_query_fact" alias="Fact" table="_tab_FACT"/>
  <roma:ExplicitHierarchy id="_hierarchy" name="Hierarchy" primaryKey="_col_town_key" query="_query_hierarchy" levels="_level_country _level_town"/>
  <roma:Catalog description="Schema of a minimal cube consisting of one measurement and based on an virtual inline fact table and physical table town and country inline table" name="CubeOneMeasureInlineTableLevelPhysicalAndInlineTables" cubes="_cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_tab_TOWN_Physical" name="TOWN">
      <columns xsi:type="roma:PhysicalColumn" id="_col_town_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_town_country_key" name="KEY_COUNTRY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_level_name" name="NAME"/>
    </tables>
    <tables xsi:type="roma:InlineTable" id="_tab_COUNTRY" name="COUNTRY">
      <columns xsi:type="roma:PhysicalColumn" id="_col_country_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_country_NAME" name="NAME"/>
      <rows>
        <rowValues column="_col_country_KEY" value="1"/>
        <rowValues column="_col_country_NAME" value="Germany"/>
      </rows>
      <rows>
        <rowValues column="_col_country_KEY" value="2"/>
        <rowValues column="_col_country_NAME" value="France"/>
      </rows>
    </tables>
    <tables xsi:type="roma:InlineTable" id="_tab_FACT" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_Fact_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_Fact_VALUE" name="VALUE" type="Double"/>
      <rows>
        <rowValues column="_col_Fact_KEY" value="1"/>
        <rowValues column="_col_Fact_VALUE" value="100.5"/>
      </rows>
      <rows>
        <rowValues column="_col_Fact_KEY" value="2"/>
        <rowValues column="_col_Fact_VALUE" value="200.5"/>
      </rows>
      <rows>
        <rowValues column="_col_Fact_KEY" value="3"/>
        <rowValues column="_col_Fact_VALUE" value="300.5"/>
      </rows>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_town" table="_tab_TOWN_Physical"/>
  <roma:JoinQuery id="_query_hierarchy">
    <left key="_col_town_country_key" query="_query_town"/>
    <right key="_col_country_KEY" query="_query_country"/>
  </roma:JoinQuery>
  <roma:Level id="_level_country" name="Country" column="_col_country_KEY" nameColumn="_col_country_NAME"/>
  <roma:Level id="_level_town" name="Town" column="_col_town_key" nameColumn="_col_level_name"/>
  <roma:StandardDimension id="_dim_town" name="Dimension" hierarchies="_hierarchy"/>
  <roma:PhysicalCube id="_cube" name="CubeTwoLevelsInlineAndPhysicalTable" query="_query_fact">
    <dimensionConnectors foreignKey="_col_Fact_KEY" dimension="_dim_town"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure-Sum" name="Measure-Sum" column="_col_Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.inlinetablewithphysical.zip" download>Download Zip File</a>
