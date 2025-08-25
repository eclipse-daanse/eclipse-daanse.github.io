---
title: Formatter Cell
group: Formatter
kind: TUTORIAL
number: 2.11.1
---
# Daanse Tutorial - Formatter Cell

Data cube with measures CellFormatter.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`.
The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema_cell">
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
## CellFormatter

        Specialized formatter for controlling the presentation of cell values in analytical grids.
        Cell formatter use reference to class formatter mondrian.rolap.format.CellFormatterImpl implemented CellFormatter interface


```xml
<roma:CellFormatter  id="_cellFormatter" ref="mondrian.rolap.format.CellFormatterImpl"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure1

        Measure with CellFormatter. measure reference the `VALUE` column and use the following `SUM` aggregation function.


```xml
<roma:SumMeasure  id="_measure_Measure1" name="Measure1" cellFormatter="_cellFormatter" formatString="Standard" column="_column_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Measures CellFormatter

In this example, measure with CellFormatter. measure reference the `VALUE` column and use the following `SUM` aggregation function.


```xml
<roma:PhysicalCube   id="_cube_cellFormatter" name="CubeOneNumericMeasureDifferentDataTypes" query="_query_fact">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" cellFormatter="_cellFormatter" formatString="Standard" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Cell formatter configurations" name="Daanse Tutorial - Formatter Cell" cubes="_cube_cellFormatter" dbschemas="_databaseSchema_cell"/>
  <roma:DatabaseSchema id="_databaseSchema_cell">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:PhysicalCube id="_cube_cellFormatter" name="CubeOneNumericMeasureDifferentDataTypes" query="_query_fact">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" cellFormatter="_cellFormatter" formatString="Standard" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:CellFormatter id="_cellFormatter" ref="mondrian.rolap.format.CellFormatterImpl"/>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.formatter.cell.zip" download>Download Zip File</a>
