---
title: Cube - Measures and Aggregators
group: Measure
kind: TUTORIAL
number: 2.2.6
---
# Multiple Measures and Aggragators

Data cubes can also have multiple measures when different aggregations are required for a column.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`. The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```

## Query

This example uses a TableQuery, as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_query" table="roma:PhysicalTable catalog.xmi#_tab"/>

```

## Cube, MeasureGroup and Measure

In this example, multiple measures are defined. All measures reference the `VALUE` column and use the following aggregation functions:
- BIT AGG AND – bit aggregation 'and'.
- BIT AGG OR  – bit aggregation 'or'.
- BIT AGG XOR  – bit aggregation 'xor'.
- BIT AGG NAND – bit aggregation 'nand'.
- BIT AGG NOR  – bit aggregation 'nor'.
- BIT AGG NXOR  – bit aggregation 'nxor'.


```xml
<roma:PhysicalCube   id="_cube" name="MeasuresAggregatorsCube" query="roma:TableQuery catalog.xmi#_query">
  <measureGroups>
    <measures xsi:type="roma:BitAggMeasure" id="_measure1" name="BitAgg AND" column="roma:PhysicalColumn catalog.xmi#_col"/>
    <measures xsi:type="roma:BitAggMeasure" id="_measure2" name="BitAgg OR" column="roma:PhysicalColumn catalog.xmi#_col" aggType="or"/>
    <measures xsi:type="roma:BitAggMeasure" id="_measure3" name="BitAgg XOR" column="roma:PhysicalColumn catalog.xmi#_col" aggType="xor"/>
    <measures xsi:type="roma:BitAggMeasure" id="_measure4" name="BitAgg NAND" column="roma:PhysicalColumn catalog.xmi#_col" not="true"/>
    <measures xsi:type="roma:BitAggMeasure" id="_measure2" name="BitAgg NOR" column="roma:PhysicalColumn catalog.xmi#_col" aggType="or" not="true"/>
    <measures xsi:type="roma:BitAggMeasure" id="_measure3" name="BitAgg NXOR" column="roma:PhysicalColumn catalog.xmi#_col" aggType="xor" not="true"/>
  </measureGroups>
</roma:PhysicalCube>

```


## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog name="Cube - Measures and Aggregators" cubes="_cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query" table="_tab"/>
  <roma:PhysicalCube id="_cube" name="MeasuresAggregatorsCube" query="_query">
    <measureGroups>
      <measures xsi:type="roma:BitAggMeasure" id="_measure1" name="BitAgg AND" column="_col"/>
      <measures xsi:type="roma:BitAggMeasure" id="_measure2" name="BitAgg OR" column="_col" aggType="or"/>
      <measures xsi:type="roma:BitAggMeasure" id="_measure3" name="BitAgg XOR" column="_col" aggType="xor"/>
      <measures xsi:type="roma:BitAggMeasure" id="_measure4" name="BitAgg NAND" column="_col" not="true"/>
      <measures xsi:type="roma:BitAggMeasure" id="_measure2" name="BitAgg NOR" column="_col" aggType="or" not="true"/>
      <measures xsi:type="roma:BitAggMeasure" id="_measure3" name="BitAgg NXOR" column="_col" aggType="xor" not="true"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.aggregator.bit.zip" download>Download Zip File</a>
