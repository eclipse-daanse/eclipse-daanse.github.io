---
title: Aggregation Agg Exclude
group: Aggregation
kind: TUTORIAL
number: 2.8.1
---


# Cube with table reference with AggExclude

This tutorial discusses TableQuery with AggregationExclude.
AggregationExclude defines exclusion rules that prevent specific tables from being used as aggregation tables,
even if they would otherwise match aggregation patterns or be considered suitable for aggregation optimization.
AggregationExclude is essential for maintaining aggregation accuracy and system reliability by providing explicit
control over which tables should be avoided during aggregation table discovery and selection.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table is named `Fact` and contains two columns: `KEY` and `VALUE`.
The KEY column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema_AggExclude">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_agg_01_Fact" name="agg_01_Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_agg_01_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_agg_01_Fact_VALUE_count" name="KEY"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery, as it directly references the physical table `Fact`.
The query element is not visible to users accessing the cube through the XMLA API, such as Daanse Dashboard, Power BI, or Excel.


```xml
<roma:TableQuery  id="_query_factQuery" table="_table_fact">
  <aggregationExcludes name="agg_01_Fact" id="_aggregationExclude_agg_01_Fact"/>
</roma:TableQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube, MeasureGroup and Measure

The cube is the element visible to users in analysis tools. A cube is based on elements such as measures, dimensions, hierarchies, KPIs, and named sets.
In this case, we only define measures, which are the minimal required elements. The other elements are optional. To link a measure to the cube, we use the `MeasureGroup` element.
The `MeasureGroup` is useful for organizing multiple measures into logical groups. Measures are used to define the data that should be aggregated.
In this example, the measure is named Measure-Sum and references the `VALUE` column in the Fact table. The measure is aggregated using summation.


```xml
<roma:PhysicalCube   id="_cube_Cube" name="Cube" query="_query_factQuery">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_Measure" name="Measure" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Aggregate exclusion patterns" name="Daanse Tutorial - Aggregation Agg Exclude" cubes="_cube_Cube" dbschemas="_databaseSchema_AggExclude"/>
  <roma:DatabaseSchema id="_databaseSchema_AggExclude">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_agg_01_Fact" name="agg_01_Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_01_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_01_Fact_VALUE_count" name="KEY"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_factQuery" table="_table_fact">
    <aggregationExcludes name="agg_01_Fact" id="_aggregationExclude_agg_01_Fact"/>
  </roma:TableQuery>
  <roma:PhysicalCube id="_cube_Cube" name="Cube" query="_query_factQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Measure" name="Measure" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.aggregation.aggexclude.zip" download>Download Zip File</a>
