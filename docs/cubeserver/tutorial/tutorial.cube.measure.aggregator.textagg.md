---
title: Text Aggregator
group: Measure
kind: TUTORIAL
number: 2.2.8
---
# Measure with Text Aggregator

Data cubes have multiple measures when different aggregations are required for a column.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`. The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_country" name="COUNTRY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_cntinent" name="CONTINENT"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_year" name="YEAR" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_month" name="MONTH" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_month_name" name="MONTH_NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_user" name="USER"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_comment" name="COMMENT"/>
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
## Cube, MeasureGroup and Measure with Text Aggregator

In this example, multiple measures are defined. All measures reference the `VALUE` column and use the following aggregation functions:
- SUM – Calculates the sum of the values.
- TextAgg – Text aggregation


```xml
<roma:PhysicalCube   id="_cube" name="MeasuresTextAggregatorsCube" query="_query">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _col_fact_country" dimension="roma:StandardDimension _dim_town"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _col_fact_year" dimension="roma:TimeDimension _dim_time"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure1" name="Sum of Value" column="_col"/>
    <measures xsi:type="roma:TextAggMeasure" id="_measure6" name="Comment" column="roma:SQLExpressionColumn _sql_expression" orderByColumns="orderedColumn" separator=", "/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:OrderedColumn id="orderedColumn" column="_col_fact_comment"/>
  <roma:Catalog name="Measure - Text Aggregator" cubes="_cube" dbschemas="_databaseSchema"/>
  <roma:DatabaseSchema id="_databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_country" name="COUNTRY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_cntinent" name="CONTINENT"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_year" name="YEAR" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_month" name="MONTH" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_month_name" name="MONTH_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_user" name="USER"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_comment" name="COMMENT"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:SQLExpressionColumn id="_sql_expression" name="sql_expression">
    <sqls sql="CONCAT(&quot;Fact&quot;.&quot;USER&quot;, ' : ',  &quot;Fact&quot;.&quot;COMMENT&quot;)">
      <dialects>generic</dialects>
      <dialects>h2</dialects>
    </sqls>
  </roma:SQLExpressionColumn>
  <roma:TableQuery id="_query" table="_tab"/>
  <roma:Level id="_level_town" name="Town" column="_col_key"/>
  <roma:Level id="_level_month" name="Month" column="_col_fact_month" type="TimeMonths" nameColumn="_col_fact_month_name"/>
  <roma:Level id="_level_country" name="Country" column="_col_fact_country"/>
  <roma:Level id="_level_continent" name="Continent" column="_col_fact_cntinent"/>
  <roma:Level id="_level_year" name="Year" column="_col_fact_year" type="TimeYears"/>
  <roma:Hierarchy id="_hierarchy_town" name="TownHierarchy" levels="_level_continent _level_country _level_town" primaryKey="_col_key" query="_query"/>
  <roma:Hierarchy id="_hierarchy_time" name="TimeHierarchy" levels="_level_year _level_month" primaryKey="_col_key" query="_query"/>
  <roma:StandardDimension id="_dim_town" name="Town" hierarchies="_hierarchy_town"/>
  <roma:TimeDimension id="_dim_time" name="Time" hierarchies="_hierarchy_time"/>
  <roma:PhysicalCube id="_cube" name="MeasuresTextAggregatorsCube" query="_query">
    <dimensionConnectors foreignKey="_col_fact_country" dimension="_dim_town"/>
    <dimensionConnectors foreignKey="_col_fact_year" dimension="_dim_time"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure1" name="Sum of Value" column="_col"/>
      <measures xsi:type="roma:TextAggMeasure" id="_measure6" name="Comment" column="_sql_expression" orderByColumns="orderedColumn" separator=", "/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.aggregator.textagg.zip" download>Download Zip File</a>
