---
title: Daanse Tutorial - Cube Measure Aggregator Percentile
group: Measure
kind: TUTORIAL
number: 2.2.7
---
# Multiple Percentile Aggragator Measures

Data cubes have percentile measures.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`. The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col" name="VALUE" type="Integer"/>
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
## Cube, MeasureGroup and Multiple Percentile Aggragator Measures

In this example, multiple measures are defined. All measures reference the `VALUE` column and use the following aggregation functions:
- Percentile disc 0.25 – Percentile 'disc' 0.25.
- Percentile cont 0.25 – Percentile 'cont' 0.25.
- Percentile disc 0.42 – Percentile 'disc' 0.42.
- Percentile cont 0.42 – Percentile 'cont' 0.42.
- Percentile disc 0.5 – Percentile 'disc' 0.5.
- Percentile cont 0.5 – Percentile 'cont' 0.5.
- Percentile disc 0.75 – Percentile 'disc' 0.75.
- Percentile cont 0.75 – Percentile 'cont' 0.75.
- Percentile disc 1.0 – Percentile 'disc' 1.00.
- Percentile cont 1.0 – Percentile 'cont' 1.00.


```xml
<roma:PhysicalCube   id="_cube" name="MeasuresAggregatorsCube" query="_query">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _col_key" dimension="roma:StandardDimension _diml" overrideDimensionName="Dim" id="_dc_dim"/>
  <measureGroups>
    <measures xsi:type="roma:PercentileMeasure" id="_measure1" name="Percentile disc 0.25" column="/1" percentile="0.25"/>
    <measures xsi:type="roma:PercentileMeasure" id="_measure2" name="Percentile cont 0.25" column="/1" percentType="cont" percentile="0.25"/>
    <measures xsi:type="roma:PercentileMeasure" id="_measure3" name="Percentile disc 0.42" column="/1" percentile="0.42"/>
    <measures xsi:type="roma:PercentileMeasure" id="_measure4" name="Percentile cont 0.42" column="/1" percentType="cont" percentile="0.42"/>
    <measures xsi:type="roma:PercentileMeasure" id="_measure5" name="Percentile disc 0.5" column="/1" percentile="0.5"/>
    <measures xsi:type="roma:PercentileMeasure" id="_measure6" name="Percentile cont 0.5" column="/1" percentType="cont" percentile="0.5"/>
    <measures xsi:type="roma:PercentileMeasure" id="_measure7" name="Percentile disc 0.75" column="/1" percentile="0.75"/>
    <measures xsi:type="roma:PercentileMeasure" id="_measure8" name="Percentile cont 0.75" column="/1" percentType="cont" percentile="0.75"/>
    <measures xsi:type="roma:PercentileMeasure" id="_measure9" name="Percentile disc 1.00" column="/1"/>
    <measures xsi:type="roma:PercentileMeasure" id="_measure10" name="Percentile cont 1.00" column="/1" percentType="cont"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy_Hierarchy" name="Hierarchy" primaryKey="_col_key" query="_query" levels="_level"/>
  <roma:OrderedColumn column="_col"/>
  <roma:Catalog description="Percentile aggregation functions" name="Daanse Tutorial - Cube Measure Aggregator Percentile" cubes="_cube" dbschemas="_databaseSchema"/>
  <roma:DatabaseSchema id="_databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query" table="_tab"/>
  <roma:Level id="_level" name="Level" column="_col_key"/>
  <roma:StandardDimension id="_diml" name="Diml" hierarchies="_hierarchy_Hierarchy"/>
  <roma:PhysicalCube id="_cube" name="MeasuresAggregatorsCube" query="_query">
    <dimensionConnectors foreignKey="_col_key" dimension="_diml" overrideDimensionName="Dim" id="_dc_dim"/>
    <measureGroups>
      <measures xsi:type="roma:PercentileMeasure" id="_measure1" name="Percentile disc 0.25" column="/1" percentile="0.25"/>
      <measures xsi:type="roma:PercentileMeasure" id="_measure2" name="Percentile cont 0.25" column="/1" percentType="cont" percentile="0.25"/>
      <measures xsi:type="roma:PercentileMeasure" id="_measure3" name="Percentile disc 0.42" column="/1" percentile="0.42"/>
      <measures xsi:type="roma:PercentileMeasure" id="_measure4" name="Percentile cont 0.42" column="/1" percentType="cont" percentile="0.42"/>
      <measures xsi:type="roma:PercentileMeasure" id="_measure5" name="Percentile disc 0.5" column="/1" percentile="0.5"/>
      <measures xsi:type="roma:PercentileMeasure" id="_measure6" name="Percentile cont 0.5" column="/1" percentType="cont" percentile="0.5"/>
      <measures xsi:type="roma:PercentileMeasure" id="_measure7" name="Percentile disc 0.75" column="/1" percentile="0.75"/>
      <measures xsi:type="roma:PercentileMeasure" id="_measure8" name="Percentile cont 0.75" column="/1" percentType="cont" percentile="0.75"/>
      <measures xsi:type="roma:PercentileMeasure" id="_measure9" name="Percentile disc 1.00" column="/1"/>
      <measures xsi:type="roma:PercentileMeasure" id="_measure10" name="Percentile cont 1.00" column="/1" percentType="cont"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.aggregator.percentile.zip" download>Download Zip File</a>
