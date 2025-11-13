---
title: Measure Aggregator Text Agg
group: Measure
kind: TUTORIAL
number: 2.2.8
---
# Daanse Tutorial - Measure Aggregator Text Agg

Data cubes have multiple measures when different aggregations are required for a column.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`. The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema_main">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_country" name="COUNTRY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_continent" name="CONTINENT"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_year" name="YEAR" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_month" name="MONTH" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_monthName" name="MONTH_NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_user" name="USER"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_comment" name="COMMENT"/>
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
## Cube, MeasureGroup and Measure with Text Aggregator

In this example, multiple measures are defined. All measures reference the `VALUE` column and use the following aggregation functions:
- SUM – Calculates the sum of the values.
- TextAgg – Text aggregation


```xml
<roma:PhysicalCube   id="_cube_measuresTextAggregators" name="MeasuresTextAggregatorsCube" query="_query_fact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_country" dimension="roma:StandardDimension _dimension_town" id="_dimensionConnector_town"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_year" dimension="roma:TimeDimension _dimension_time" id="_dimensionConnector_time"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_sumValue" name="Sum of Value" column="_column_fact_value"/>
    <measures xsi:type="roma:TextAggMeasure" id="_measure_comment" name="Comment" column="roma:SQLExpressionColumn _sqlExpressionColumn_userComment" orderByColumns="/0" separator=", "/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:OrderedColumn column="_column_fact_comment"/>
  <roma:Catalog description="Text aggregation functions" name="Daanse Tutorial - Measure Aggregator Text Agg" cubes="_cube_measuresTextAggregators" dbschemas="_databaseSchema_main"/>
  <roma:DatabaseSchema id="_databaseSchema_main">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_country" name="COUNTRY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_continent" name="CONTINENT"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_year" name="YEAR" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_month" name="MONTH" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_monthName" name="MONTH_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_user" name="USER"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_comment" name="COMMENT"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:SQLExpressionColumn id="_sqlExpressionColumn_userComment" name="sql_expression">
    <sqls sql="CONCAT(&quot;Fact&quot;.&quot;USER&quot;, ' : ',  &quot;Fact&quot;.&quot;COMMENT&quot;)">
      <dialects>generic</dialects>
      <dialects>h2</dialects>
    </sqls>
  </roma:SQLExpressionColumn>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:Level id="_level_continent" name="Continent" column="_column_fact_continent"/>
  <roma:Level id="_level_country" name="Country" column="_column_fact_country"/>
  <roma:Level id="_level_month" name="Month" column="_column_fact_month" type="TimeMonths" nameColumn="_column_fact_monthName"/>
  <roma:Level id="_level_town" name="Town" column="_column_fact_key"/>
  <roma:Level id="_level_year" name="Year" column="_column_fact_year" type="TimeYears"/>
  <roma:ExplicitHierarchy id="_hierarchy_timeHierarchy" name="TimeHierarchy" primaryKey="_column_fact_key" query="_query_fact" levels="_level_year _level_month"/>
  <roma:ExplicitHierarchy id="_hierarchy_townHierarchy" name="TownHierarchy" primaryKey="_column_fact_key" query="_query_fact" levels="_level_continent _level_country _level_town"/>
  <roma:StandardDimension id="_dimension_town" name="Town" hierarchies="_hierarchy_townHierarchy"/>
  <roma:TimeDimension id="_dimension_time" name="Time" hierarchies="_hierarchy_timeHierarchy"/>
  <roma:PhysicalCube id="_cube_measuresTextAggregators" name="MeasuresTextAggregatorsCube" query="_query_fact">
    <dimensionConnectors foreignKey="_column_fact_country" dimension="_dimension_town" id="_dimensionConnector_town"/>
    <dimensionConnectors foreignKey="_column_fact_year" dimension="_dimension_time" id="_dimensionConnector_time"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_sumValue" name="Sum of Value" column="_column_fact_value"/>
      <measures xsi:type="roma:TextAggMeasure" id="_measure_comment" name="Comment" column="_sqlExpressionColumn_userComment" orderByColumns="/0" separator=", "/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.aggregator.textagg.zip" download>Download Zip File</a>
