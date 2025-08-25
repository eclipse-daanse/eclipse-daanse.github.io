---
title: Cube Measure Aggregator Nth
group: Measure
kind: TUTORIAL
number: 2.2.7
---
# Daanse Tutorial - Cube Measure Aggregator Nth

Data cubes have NTH measures.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`. The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_id" name="ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_value" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_name" name="NAME"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

This example uses a TableQuery, as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_query" table="_tab"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube, MeasureGroup and NTH Aggragator Measures

In this example, multiple measures are defined. All measures reference the `VALUE` column and use the following aggregation functions:
- NTH1 – NTH1 .
- NTH2 – NTH2 .
- NTH3 – NTH3 .
- NTH4 – NTH4 .
- NTH5 – NTH5 .
- NTH6 – NTH6 .
- NTH7 – NTH7 .


```xml
<roma:PhysicalCube   id="_cube" name="MeasuresAggregatorsCube" query="_query">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _col_id" dimension="roma:StandardDimension _diml" overrideDimensionName="Dim" id="_dc_dim"/>
  <measureGroups>
    <measures xsi:type="roma:NthAggMeasure" id="_measure1" name="NthAgg1" column="_col_value" orderByColumns="/0" n="1"/>
    <measures xsi:type="roma:NthAggMeasure" id="_measure2" name="NthAgg2" column="_col_value" orderByColumns="/0" n="2"/>
    <measures xsi:type="roma:NthAggMeasure" id="_measure3" name="NthAgg3" column="_col_value" orderByColumns="/0" n="3"/>
    <measures xsi:type="roma:NthAggMeasure" id="_measure4" name="NthAgg4" column="_col_value" orderByColumns="/0" n="4"/>
    <measures xsi:type="roma:NthAggMeasure" id="_measure5" name="NthAgg5" column="_col_value" orderByColumns="/0" n="5"/>
    <measures xsi:type="roma:NthAggMeasure" id="_measure6" name="NthAgg6" column="_col_value" orderByColumns="/0" n="6"/>
    <measures xsi:type="roma:NthAggMeasure" id="_measure7" name="NthAgg7" column="_col_value" orderByColumns="/0" n="7"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:OrderedColumn column="_col_value"/>
  <roma:ExplicitHierarchy id="_hierarchy_Hierarchy" name="Hierarchy" hasAll="false" primaryKey="_col_id" query="_query" levels="_level"/>
  <roma:Catalog description="Nth value aggregation functions" name="Daanse Tutorial - Cube Measure Aggregator Nth" cubes="_cube" dbschemas="_databaseSchema"/>
  <roma:DatabaseSchema id="_databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_id" name="ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_value" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_name" name="NAME"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query" table="_tab"/>
  <roma:Level id="_level" name="Value" column="_col_value"/>
  <roma:StandardDimension id="_diml" name="Diml" hierarchies="_hierarchy_Hierarchy"/>
  <roma:PhysicalCube id="_cube" name="MeasuresAggregatorsCube" query="_query">
    <dimensionConnectors foreignKey="_col_id" dimension="_diml" overrideDimensionName="Dim" id="_dc_dim"/>
    <measureGroups>
      <measures xsi:type="roma:NthAggMeasure" id="_measure1" name="NthAgg1" column="_col_value" orderByColumns="/0" n="1"/>
      <measures xsi:type="roma:NthAggMeasure" id="_measure2" name="NthAgg2" column="_col_value" orderByColumns="/0" n="2"/>
      <measures xsi:type="roma:NthAggMeasure" id="_measure3" name="NthAgg3" column="_col_value" orderByColumns="/0" n="3"/>
      <measures xsi:type="roma:NthAggMeasure" id="_measure4" name="NthAgg4" column="_col_value" orderByColumns="/0" n="4"/>
      <measures xsi:type="roma:NthAggMeasure" id="_measure5" name="NthAgg5" column="_col_value" orderByColumns="/0" n="5"/>
      <measures xsi:type="roma:NthAggMeasure" id="_measure6" name="NthAgg6" column="_col_value" orderByColumns="/0" n="6"/>
      <measures xsi:type="roma:NthAggMeasure" id="_measure7" name="NthAgg7" column="_col_value" orderByColumns="/0" n="7"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.aggregator.nth.zip" download>Download Zip File</a>
