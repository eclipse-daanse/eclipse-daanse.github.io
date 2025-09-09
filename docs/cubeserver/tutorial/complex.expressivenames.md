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
<roma:PhysicalCube  description="Test Cube" name="Cube1" query="/9"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="ExpressiveNames Sample Database - EMF Version" name="ExpressiveNames" cubes="/35" dbschemas="/1"/>
  <roma:DatabaseSchema name="ExpressiveNames">
    <tables xsi:type="roma:PhysicalTable" name="Cube1Fact">
      <columns xsi:type="roma:PhysicalColumn" name="D1"/>
      <columns xsi:type="roma:PhysicalColumn" name="D2"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3"/>
      <columns xsi:type="roma:PhysicalColumn" name="M1" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="D1H1L1Table">
      <columns xsi:type="roma:PhysicalColumn" name="D1H1L1"/>
      <columns xsi:type="roma:PhysicalColumn" name="D1H1L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" name="D1H1L1_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="D2H1L1Table">
      <columns xsi:type="roma:PhysicalColumn" name="D2H1L1"/>
      <columns xsi:type="roma:PhysicalColumn" name="D2H1L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" name="D2H1L1_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="D2H2L2Table">
      <columns xsi:type="roma:PhysicalColumn" name="D2H2L2"/>
      <columns xsi:type="roma:PhysicalColumn" name="D2H2L2_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" name="D2H2L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" name="D2H2L2_Ordinal"/>
      <columns xsi:type="roma:PhysicalColumn" name="D2H2L1_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="D3H1L1Table">
      <columns xsi:type="roma:PhysicalColumn" name="D3H1L1"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H1L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H1L1_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="D3H2L2Table">
      <columns xsi:type="roma:PhysicalColumn" name="D3H2L2"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H2L2_id"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H2L1_id"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H2L2_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H2L2_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="D3H2L1Table">
      <columns xsi:type="roma:PhysicalColumn" name="D3H2L1"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H2L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H2L1_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="D3H3L3Table">
      <columns xsi:type="roma:PhysicalColumn" name="D3H3L3"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H3L2_id"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H3L3_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H3L3_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="D3H3L2Table">
      <columns xsi:type="roma:PhysicalColumn" name="D3H3L2"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H3L1_id"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H3L2_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H3L2_Ordinal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="D3H3L1Table">
      <columns xsi:type="roma:PhysicalColumn" name="D3H3L1"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H3L1_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" name="D3H3L1_Ordinal"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:PhysicalColumn name="D2H2L1"/>
  <roma:TableQuery table="/1/@tables.3"/>
  <roma:TableQuery table="/1/@tables.2"/>
  <roma:TableQuery table="/1/@tables.9"/>
  <roma:TableQuery table="/1/@tables.7"/>
  <roma:TableQuery table="/1/@tables.6"/>
  <roma:TableQuery table="/1/@tables.8"/>
  <roma:TableQuery table="/1/@tables.0"/>
  <roma:TableQuery table="/1/@tables.4"/>
  <roma:TableQuery table="/1/@tables.5"/>
  <roma:TableQuery table="/1/@tables.1"/>
  <roma:JoinQuery>
    <left key="/1/@tables.7/@columns.1" query="/6"/>
    <right key="/1/@tables.8/@columns.0" query="/14"/>
  </roma:JoinQuery>
  <roma:JoinQuery>
    <left key="/1/@tables.8/@columns.1" query="/8"/>
    <right key="/1/@tables.9/@columns.0" query="/5"/>
  </roma:JoinQuery>
  <roma:JoinQuery>
    <left key="/1/@tables.5/@columns.2" query="/11"/>
    <right key="/1/@tables.6/@columns.0" query="/7"/>
  </roma:JoinQuery>
  <roma:Level description="Level 1 Hierarchy 1 Dimension 2" name="D2H1L1" column="/1/@tables.2/@columns.0" nameColumn="/1/@tables.2/@columns.1" ordinalColumn="/1/@tables.2/@columns.2"/>
  <roma:Level description="Level 3 Hierarchy3 Dimension 3" name="D3H3L3" column="/1/@tables.7/@columns.0" nameColumn="/1/@tables.7/@columns.2" ordinalColumn="/1/@tables.7/@columns.3"/>
  <roma:Level description="Level 2 Hierarchy2 Dimension 3" name="D3H2L2" column="/1/@tables.5/@columns.0" nameColumn="/1/@tables.5/@columns.3" ordinalColumn="/1/@tables.5/@columns.4"/>
  <roma:Level description="Level 2 Dimension 3" name="D2H2L2" column="/1/@tables.3/@columns.0" nameColumn="/1/@tables.3/@columns.1" ordinalColumn="/1/@tables.3/@columns.3"/>
  <roma:Level description="Level 1 Hierarchy2 Dimension 3" name="D3H2L1" column="/1/@tables.6/@columns.0" nameColumn="/1/@tables.6/@columns.1" ordinalColumn="/1/@tables.6/@columns.2"/>
  <roma:Level description="Level 2 Hierarchy3 Dimension 3" name="D3H3L2" column="/1/@tables.8/@columns.0" nameColumn="/1/@tables.8/@columns.2" ordinalColumn="/1/@tables.8/@columns.3"/>
  <roma:Level description="Level 1 Hierarchy1 Dimension 3" name="D3H1L1" column="/1/@tables.4/@columns.0" nameColumn="/1/@tables.4/@columns.1" ordinalColumn="/1/@tables.4/@columns.2"/>
  <roma:Level description="Level 1 Dimension 1 Hierarchy1" name="D1H1L1" column="/1/@tables.1/@columns.0" nameColumn="/1/@tables.1/@columns.1" ordinalColumn="/1/@tables.1/@columns.2"/>
  <roma:Level description="Level 2 Hierarchy 2 Dimension 2" name="D2H2L1" column="/2" nameColumn="/1/@tables.3/@columns.2" ordinalColumn="/1/@tables.3/@columns.4"/>
  <roma:Level description="Level 1 Hierarchy3 Dimension 3" name="D3H3L1" column="/1/@tables.9/@columns.0" nameColumn="/1/@tables.9/@columns.1" ordinalColumn="/1/@tables.9/@columns.2"/>
  <roma:ExplicitHierarchy description="Hierarchy 1 Dimension 2" name="D2H1" primaryKey="/1/@tables.2/@columns.0" query="/4" levels="/16"/>
  <roma:ExplicitHierarchy description="Hierarchy 2 Dimension 2" name="D2H2" primaryKey="/1/@tables.3/@columns.0" query="/3" levels="/24 /19"/>
  <roma:ExplicitHierarchy description="Hierarchy 1 Dimension 1" name="D1H1" primaryKey="/1/@tables.1/@columns.0" query="/12" levels="/23"/>
  <roma:ExplicitHierarchy description="Hierarchy 1 Dimension 3" name="D3H3" primaryKey="/1/@tables.7/@columns.0" query="/13" levels="/25 /21 /17"/>
  <roma:ExplicitHierarchy description="Hierarchy 1 Dimension 3" name="D3H1" primaryKey="/1/@tables.4/@columns.0" query="/10" levels="/22"/>
  <roma:ExplicitHierarchy description="Hierarchy 2 Dimension 3" name="D3H2" primaryKey="/1/@tables.5/@columns.0" query="/15" levels="/20 /18"/>
  <roma:StandardDimension name="Dimension3" hierarchies="/30 /31 /29"/>
  <roma:StandardDimension name="Dimension2" hierarchies="/26 /27"/>
  <roma:StandardDimension description="Hierarchy 1 Dimension 1" name="Dimension1" hierarchies="/28"/>
  <roma:PhysicalCube description="Test Cube" name="Cube1" query="/9">
    <dimensionConnectors foreignKey="/1/@tables.0/@columns.0" dimension="/34" overrideDimensionName="Dimension1"/>
    <dimensionConnectors foreignKey="/1/@tables.0/@columns.1" dimension="/33" overrideDimensionName="Dimension2"/>
    <dimensionConnectors foreignKey="/1/@tables.0/@columns.2" dimension="/32" overrideDimensionName="Dimension3"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" name="Measure1" formatString="Standard" column="/1/@tables.0/@columns.3"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.expressivenames.zip" download>Download Zip File</a>
