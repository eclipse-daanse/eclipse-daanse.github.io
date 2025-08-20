---
title: Cube with one measure with inline table
group: Measure
kind: TUTORIAL
number: 2.12.2
---
A minimal cube based on an inline table


# Minimal Cube With Inline Table

Data cube with InlineTable.
InlineTable represents a table with data embedded directly in the schema definition rather than referencing external database tables.
InlineTable allows small lookup tables, dimension data, or test data to be included directly in the OLAP schema,
eliminating the need for separate database tables for static reference data.


## Database Schema

DatabaseSchema includes InlineTable with data embedded directly in the schema definition.
InlineTable, named `Fact`, contains two columns: `KEY` and `VALUE`.


```xml
<roma:DatabaseSchema   id="_databaseSchema_inlinetable">
  <tables xsi:type="roma:InlineTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    <rows>
      <rowValues column="_column_fact_key" value="A"/>
      <rowValues column="_column_fact_value" value="100.5"/>
    </rows>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

This example uses a InlineTableQuery, as it directly references the InlineTable table `Fact`.


```xml
<roma:InlineTableQuery  id="_query_fact" alias="Fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure-Sum

        Measure use InlineTable column with sum aggregation.


```xml
<roma:SumMeasure  id="_measure-sum" name="Measure-Sum" column="_column_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Inline Table

In this example uses cube with InlineTable as data.


```xml
<roma:PhysicalCube   id="_cube" name="Cube" query="roma:InlineTableQuery _query_fact">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure-sum" name="Measure-Sum" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:InlineTableQuery id="_query_fact" alias="Fact" table="_table_fact"/>
  <roma:Catalog description="Schema of a minimal cube consisting of one measurement and based on an virtual inline table" name="Cube with one measure with inline table" cubes="_cube" dbschemas="_databaseSchema_inlinetable"/>
  <roma:DatabaseSchema id="_databaseSchema_inlinetable">
    <tables xsi:type="roma:InlineTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
      <rows>
        <rowValues column="_column_fact_key" value="A"/>
        <rowValues column="_column_fact_value" value="100.5"/>
      </rows>
    </tables>
  </roma:DatabaseSchema>
  <roma:PhysicalCube id="_cube" name="Cube" query="_query_fact">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure-sum" name="Measure-Sum" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.measure.inlinetable.zip" download>Download Zip File</a>
