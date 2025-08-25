---
title: Cube Measure Multiple
group: Measure
kind: TUTORIAL
number: 2.2.2
---
# Daanse Tutorial - Cube Measure Multiple

Data cubes can have multiple measures to provide different data related to the cube's topic. This is particularly useful when aggregating different data columns within the same cube.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named Fact, contains four columns: KEY, VALUE1, VALUE2, and VALUE3. The KEY column acts as a discriminator, while the VALUE1, VALUE2, and VALUE3 columns contain the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema_measureMultiple">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value1" name="VALUE1" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value2" name="VALUE2" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value3" name="VALUE3" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

This example uses a TableQuery, as it directly references the physical table Fact.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measures

In this example, multiple measures are defined:
- The first measure references the `VALUE1` column.
- The second measure references the `VALUE2` column.
- The third measure references the `VALUE3` column.
All measures use sum aggregation.


```xml
<roma:PhysicalCube   id="_cube_multipleMeasuresCube" name="MultipleMeasuresCube" defaultMeasure="roma:SumMeasure _measure_sumOfValue3" query="_query_fact">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_sumOfValue1" name="Sum of Value1" column="_column_fact_value1"/>
    <measures xsi:type="roma:SumMeasure" id="_measure_sumOfValue2" name="Sum of Value2" column="_column_fact_value2"/>
    <measures xsi:type="roma:SumMeasure" id="_measure_sumOfValue3" name="Sum of Value3" column="_column_fact_value3"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## DefaultMeasure

Specifying `defaultMeasure` in the `Cube` element allows users to explicitly set a base measure as the default. If `defaultMeasure` is not specified, the first measure in the list is automatically considered the default measure.



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_measureMultipleMeasures" description="Multiple measures in cubes" name="Daanse Tutorial - Cube Measure Multiple" cubes="_cube_multipleMeasuresCube" dbschemas="_databaseSchema_measureMultiple"/>
  <roma:DatabaseSchema id="_databaseSchema_measureMultiple">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value1" name="VALUE1" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value2" name="VALUE2" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value3" name="VALUE3" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:PhysicalCube id="_cube_multipleMeasuresCube" name="MultipleMeasuresCube" defaultMeasure="_measure_sumOfValue3" query="_query_fact">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_sumOfValue1" name="Sum of Value1" column="_column_fact_value1"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_sumOfValue2" name="Sum of Value2" column="_column_fact_value2"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_sumOfValue3" name="Sum of Value3" column="_column_fact_value3"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.multiple.zip" download>Download Zip File</a>
