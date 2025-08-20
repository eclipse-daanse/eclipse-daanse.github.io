---
title: Cube Measure Aggregator Base
group: Measure
kind: TUTORIAL
number: 2.2.1
---
# Multiple Measures and Aggragators

Data cubes can also have multiple measures when different aggregations are required for a column.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`. The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema_measureAggregatorBase">
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
## Cube, MeasureGroup and Measure

In this example, multiple measures are defined. All measures reference the `VALUE` column and use the following aggregation functions:
- SUM – Calculates the sum of the values.
- MIN – Retrieves the minimum value.
- MAX – Retrieves the maximum value.
- AVG – Computes the average of the values.


```xml
<roma:PhysicalCube   id="_cube_measuresAggregatorsCube" name="MeasuresAggregatorsCube" query="_query_fact">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_sumOfValue" name="Sum of Value" column="_column_fact_value"/>
    <measures xsi:type="roma:MaxMeasure" id="_measure_maxOfValue" name="Max of Value" column="_column_fact_value"/>
    <measures xsi:type="roma:MinMeasure" id="_measure_minOfValue" name="Min of Value" column="_column_fact_value"/>
    <measures xsi:type="roma:AvgMeasure" id="_measure_avgOfValue" name="Avg of Value" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_measureBasicAggregators" description="Basic measure aggregation functions" name="Daanse Tutorial - Cube Measure Aggregator Base" cubes="_cube_measuresAggregatorsCube" dbschemas="_databaseSchema_measureAggregatorBase"/>
  <roma:DatabaseSchema id="_databaseSchema_measureAggregatorBase">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:PhysicalCube id="_cube_measuresAggregatorsCube" name="MeasuresAggregatorsCube" query="_query_fact">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_sumOfValue" name="Sum of Value" column="_column_fact_value"/>
      <measures xsi:type="roma:MaxMeasure" id="_measure_maxOfValue" name="Max of Value" column="_column_fact_value"/>
      <measures xsi:type="roma:MinMeasure" id="_measure_minOfValue" name="Min of Value" column="_column_fact_value"/>
      <measures xsi:type="roma:AvgMeasure" id="_measure_avgOfValue" name="Avg of Value" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.aggregator.base.zip" download>Download Zip File</a>
