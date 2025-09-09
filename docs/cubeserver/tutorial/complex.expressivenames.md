---
title: ExpressiveNames
group: Full Examples
kind: COMPLEX
number: 99.1.2
---
# ExpressiveNames Database

Sample catalog demonstrating complex hierarchies and naming patterns

## Test Cube

Cube with multiple dimensions and complex hierarchies

```xml
<roma:PhysicalCube  id="_cube_cube1" description="Test Cube" name="Cube1" query="_query_cube1fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_expressivenames" description="ExpressiveNames Sample Database - EMF Version" name="ExpressiveNames" cubes="_cube_cube1" dbschemas="_databaseschema_expressivenames"/>
  <roma:DatabaseSchema id="_databaseschema_expressivenames" name="ExpressiveNames">
    <tables xsi:type="roma:PhysicalTable" id="_table_cube1fact" name="Cube1Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_d1_cube1fact" name="D1"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d2_cube1fact" name="D2"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3_cube1fact" name="D3"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_m1_cube1fact" name="M1" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_d1h1l1table" name="D1H1L1Table">
      <columns xsi:type="roma:PhysicalColumn" id="_column_d1h1l1_d1h1l1table" name="D1H1L1"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d1h1l1_name_d1h1l1table" name="D1H1L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d1h1l1_ordinal_d1h1l1table" name="D1H1L1_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_d2h1l1table" name="D2H1L1Table">
      <columns xsi:type="roma:PhysicalColumn" id="_column_d2h1l1_d2h1l1table" name="D2H1L1"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d2h1l1_name_d2h1l1table" name="D2H1L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d2h1l1_ordinal_d2h1l1table" name="D2H1L1_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_d2h2l2table" name="D2H2L2Table">
      <columns xsi:type="roma:PhysicalColumn" id="_column_d2h2l2_d2h2l2table" name="D2H2L2"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d2h2l2_name_d2h2l2table" name="D2H2L2_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d2h2l1_name_d2h2l2table" name="D2H2L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d2h2l2_ordinal_d2h2l2table" name="D2H2L2_Ordinal"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d2h2l1_ordinal_d2h2l2table" name="D2H2L1_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_d3h1l1table" name="D3H1L1Table">
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h1l1_d3h1l1table" name="D3H1L1"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h1l1_name_d3h1l1table" name="D3H1L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h1l1_ordinal_d3h1l1table" name="D3H1L1_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_d3h2l2table" name="D3H2L2Table">
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h2l2_d3h2l2table" name="D3H2L2"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h2l2_id_d3h2l2table" name="D3H2L2_id"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h2l1_id_d3h2l2table" name="D3H2L1_id"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h2l2_name_d3h2l2table" name="D3H2L2_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h2l2_ordinal_d3h2l2table" name="D3H2L2_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_d3h2l1table" name="D3H2L1Table">
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h2l1_d3h2l1table" name="D3H2L1"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h2l1_name_d3h2l1table" name="D3H2L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h2l1_ordinal_d3h2l1table" name="D3H2L1_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_d3h3l3table" name="D3H3L3Table">
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h3l3_d3h3l3table" name="D3H3L3"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h3l2_id_d3h3l3table" name="D3H3L2_id"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h3l3_name_d3h3l3table" name="D3H3L3_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h3l3_ordinal_d3h3l3table" name="D3H3L3_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_d3h3l2table" name="D3H3L2Table">
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h3l2_d3h3l2table" name="D3H3L2"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h3l1_id_d3h3l2table" name="D3H3L1_id"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h3l2_name_d3h3l2table" name="D3H3L2_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h3l2_ordinal_d3h3l2table" name="D3H3L2_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_d3h3l1table" name="D3H3L1Table">
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h3l1_d3h3l1table" name="D3H3L1"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h3l1_name_d3h3l1table" name="D3H3L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_d3h3l1_ordinal_d3h3l1table" name="D3H3L1_Ordinal"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:PhysicalColumn id="_column_d2h2l1_d2h2l2table" name="D2H2L1"/>
  <roma:TableQuery id="_query_cube1fact" table="_table_cube1fact"/>
  <roma:TableQuery id="_query_d1h1l1table" table="_table_d1h1l1table"/>
  <roma:TableQuery id="_query_d2h1l1table" table="_table_d2h1l1table"/>
  <roma:TableQuery id="_query_d2h2l2table" table="_table_d2h2l2table"/>
  <roma:TableQuery id="_query_d3h1l1table" table="_table_d3h1l1table"/>
  <roma:TableQuery id="_query_d3h2l1table" table="_table_d3h2l1table"/>
  <roma:TableQuery id="_query_d3h2l2table" table="_table_d3h2l2table"/>
  <roma:TableQuery id="_query_d3h3l1table" table="_table_d3h3l1table"/>
  <roma:TableQuery id="_query_d3h3l2table" table="_table_d3h3l2table"/>
  <roma:TableQuery id="_query_d3h3l3table" table="_table_d3h3l3table"/>
  <roma:JoinQuery id="_joinquery_d3h2">
    <left key="_column_d3h2l1_id_d3h2l2table" query="_query_d3h2l2table"/>
    <right key="_column_d3h2l1_d3h2l1table" query="_query_d3h2l1table"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_joinquery_d3h3">
    <left key="_column_d3h3l2_id_d3h3l3table" query="_query_d3h3l3table"/>
    <right key="_column_d3h3l2_d3h3l2table" query="_joinquery_d3h3_inner"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_joinquery_d3h3_inner">
    <left key="_column_d3h3l1_id_d3h3l2table" query="_query_d3h3l2table"/>
    <right key="_column_d3h3l1_d3h3l1table" query="_query_d3h3l1table"/>
  </roma:JoinQuery>
  <roma:Level id="_level_d1h1l1" description="Level 1 Dimension 1 Hierarchy1" name="D1H1L1" column="_column_d1h1l1_d1h1l1table" nameColumn="_column_d1h1l1_name_d1h1l1table" ordinalColumn="_column_d1h1l1_ordinal_d1h1l1table"/>
  <roma:Level id="_level_d2h1l1" description="Level 1 Hierarchy 1 Dimension 2" name="D2H1L1" column="_column_d2h1l1_d2h1l1table" nameColumn="_column_d2h1l1_name_d2h1l1table" ordinalColumn="_column_d2h1l1_ordinal_d2h1l1table"/>
  <roma:Level id="_level_d2h2l1" description="Level 2 Hierarchy 2 Dimension 2" name="D2H2L1" column="_column_d2h2l1_d2h2l2table" nameColumn="_column_d2h2l1_name_d2h2l2table" ordinalColumn="_column_d2h2l1_ordinal_d2h2l2table"/>
  <roma:Level id="_level_d2h2l2" description="Level 2 Dimension 3" name="D2H2L2" column="_column_d2h2l2_d2h2l2table" nameColumn="_column_d2h2l2_name_d2h2l2table" ordinalColumn="_column_d2h2l2_ordinal_d2h2l2table"/>
  <roma:Level id="_level_d3h1l1" description="Level 1 Hierarchy1 Dimension 3" name="D3H1L1" column="_column_d3h1l1_d3h1l1table" nameColumn="_column_d3h1l1_name_d3h1l1table" ordinalColumn="_column_d3h1l1_ordinal_d3h1l1table"/>
  <roma:Level id="_level_d3h2l1" description="Level 1 Hierarchy2 Dimension 3" name="D3H2L1" column="_column_d3h2l1_d3h2l1table" nameColumn="_column_d3h2l1_name_d3h2l1table" ordinalColumn="_column_d3h2l1_ordinal_d3h2l1table"/>
  <roma:Level id="_level_d3h2l2" description="Level 2 Hierarchy2 Dimension 3" name="D3H2L2" column="_column_d3h2l2_d3h2l2table" nameColumn="_column_d3h2l2_name_d3h2l2table" ordinalColumn="_column_d3h2l2_ordinal_d3h2l2table"/>
  <roma:Level id="_level_d3h3l1" description="Level 1 Hierarchy3 Dimension 3" name="D3H3L1" column="_column_d3h3l1_d3h3l1table" nameColumn="_column_d3h3l1_name_d3h3l1table" ordinalColumn="_column_d3h3l1_ordinal_d3h3l1table"/>
  <roma:Level id="_level_d3h3l2" description="Level 2 Hierarchy3 Dimension 3" name="D3H3L2" column="_column_d3h3l2_d3h3l2table" nameColumn="_column_d3h3l2_name_d3h3l2table" ordinalColumn="_column_d3h3l2_ordinal_d3h3l2table"/>
  <roma:Level id="_level_d3h3l3" description="Level 3 Hierarchy3 Dimension 3" name="D3H3L3" column="_column_d3h3l3_d3h3l3table" nameColumn="_column_d3h3l3_name_d3h3l3table" ordinalColumn="_column_d3h3l3_ordinal_d3h3l3table"/>
  <roma:ExplicitHierarchy id="_hierarchy_d1h1" description="Hierarchy 1 Dimension 1" name="D1H1" primaryKey="_column_d1h1l1_d1h1l1table" query="_query_d1h1l1table" levels="_level_d1h1l1"/>
  <roma:ExplicitHierarchy id="_hierarchy_d2h1" description="Hierarchy 1 Dimension 2" name="D2H1" primaryKey="_column_d2h1l1_d2h1l1table" query="_query_d2h1l1table" levels="_level_d2h1l1"/>
  <roma:ExplicitHierarchy id="_hierarchy_d2h2" description="Hierarchy 2 Dimension 2" name="D2H2" primaryKey="_column_d2h2l2_d2h2l2table" query="_query_d2h2l2table" levels="_level_d2h2l1 _level_d2h2l2"/>
  <roma:ExplicitHierarchy id="_hierarchy_d3h1" description="Hierarchy 1 Dimension 3" name="D3H1" primaryKey="_column_d3h1l1_d3h1l1table" query="_query_d3h1l1table" levels="_level_d3h1l1"/>
  <roma:ExplicitHierarchy id="_hierarchy_d3h2" description="Hierarchy 2 Dimension 3" name="D3H2" primaryKey="_column_d3h2l2_d3h2l2table" query="_joinquery_d3h2" levels="_level_d3h2l1 _level_d3h2l2"/>
  <roma:ExplicitHierarchy id="_hierarchy_d3h3" description="Hierarchy 1 Dimension 3" name="D3H3" primaryKey="_column_d3h3l3_d3h3l3table" query="_joinquery_d3h3" levels="_level_d3h3l1 _level_d3h3l2 _level_d3h3l3"/>
  <roma:StandardDimension id="_dimension_dimension1" description="Hierarchy 1 Dimension 1" name="Dimension1" hierarchies="_hierarchy_d1h1"/>
  <roma:StandardDimension id="_dimension_dimension2" name="Dimension2" hierarchies="_hierarchy_d2h1 _hierarchy_d2h2"/>
  <roma:StandardDimension id="_dimension_dimension3" name="Dimension3" hierarchies="_hierarchy_d3h1 _hierarchy_d3h2 _hierarchy_d3h3"/>
  <roma:PhysicalCube id="_cube_cube1" description="Test Cube" name="Cube1" query="_query_cube1fact">
    <dimensionConnectors foreignKey="_column_d1_cube1fact" dimension="_dimension_dimension1" overrideDimensionName="Dimension1" id="_connector_dimension1"/>
    <dimensionConnectors foreignKey="_column_d2_cube1fact" dimension="_dimension_dimension2" overrideDimensionName="Dimension2" id="_connector_dimension2"/>
    <dimensionConnectors foreignKey="_column_d3_cube1fact" dimension="_dimension_dimension3" overrideDimensionName="Dimension3" id="_connector_dimension3"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_measure1" name="Measure1" formatString="Standard" column="_column_m1_cube1fact"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.expressivenames.zip" download>Download Zip File</a>
