---
title: Measure Group
group: Measure
kind: TUTORIAL
number: 2.2.5
---
# Daanse Tutorial - Measure Group

In cases where you need a better overview of all measures, want to provide additional context for a `Measure`, or need to organize a list of measures, you can use a `MeasureGroup`.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`. The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema_measureGroup">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

This example uses a TableQuery, as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Grouping Measures

A `MeasureGroup` is a logical container designed to group related measures. Each `MeasureGroup` can have a  name. Names must be unique within the `Cube`. `Measure` only can be in `Cube`s if they are contained in `MeasureGroup`s. In this example we group all alphabetic measures in one group and all other measures in another group.


```xml
<roma:PhysicalCube   id="_cube_measureGroupCube" name="MeasureGroupCube" query="_query_fact">
  <measureGroups name="Group Alphabetic">
    <measures xsi:type="roma:SumMeasure" id="_measure_measureA" name="Measure A" column="_column_fact_value"/>
    <measures xsi:type="roma:SumMeasure" id="_measure_measureB" name="Measure B" column="_column_fact_value"/>
  </measureGroups>
  <measureGroups name="Group Other">
    <measures xsi:type="roma:SumMeasure" id="_measure_measure1" name="Measure 1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_measureMeasureGroups" description="Measure group organization" name="Daanse Tutorial - Measure Group" cubes="_cube_measureGroupCube" dbschemas="_databaseSchema_measureGroup"/>
  <roma:DatabaseSchema id="_databaseSchema_measureGroup">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:PhysicalCube id="_cube_measureGroupCube" name="MeasureGroupCube" query="_query_fact">
    <measureGroups name="Group Alphabetic">
      <measures xsi:type="roma:SumMeasure" id="_measure_measureA" name="Measure A" column="_column_fact_value"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_measureB" name="Measure B" column="_column_fact_value"/>
    </measureGroups>
    <measureGroups name="Group Other">
      <measures xsi:type="roma:SumMeasure" id="_measure_measure1" name="Measure 1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.group.zip" download>Download Zip File</a>
