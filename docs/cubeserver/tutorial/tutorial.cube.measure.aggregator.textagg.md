---
title: Measure Aggregator Text Agg
group: Measure
kind: TUTORIAL
number: 2.02.08
---
# Daanse Tutorial - Measure Aggregator Text Agg

Data cubes have multiple measures when different aggregations are required for a column.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`. The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_continent" name="CONTINENT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_year" name="YEAR"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month" name="MONTH"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_name" name="MONTH_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_user" name="USER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

This example uses a TableQuery, as it directly references the physical table `Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_continent" name="CONTINENT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_year" name="YEAR"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month" name="MONTH"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_name" name="MONTH_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_user" name="USER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Ordered Column

Represents a column with specific ordering information used in queries and result sets.
OrderedColumn is typically used in OLAP contexts where explicit column ordering is required for query processing or result presentation.
OrderedColumn uses ascending by default.


```xml
<rolaprel:OrderedColumn xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_orderedcolumn_comment">
  <column href="_column_fact_comment"/>
</rolaprel:OrderedColumn>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_country _column_fact_user _column_fact_comment _column_fact_key _column_fact_continent _column_fact_month_name" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_year _column_fact_value _column_fact_month" typeNumber="4"/>
  <rolaprel:OrderedColumn xmi:id="_orderedcolumn_comment" column="_column_fact_comment"/>
  <rolapcat:Catalog xmi:id="_catalog_measure_aggregator_text_agg" description="Text aggregation functions" name="Daanse Tutorial - Measure Aggregator Text Agg" cubes="_physicalcube_measurestextaggregatorscube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_country" name="COUNTRY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_continent" name="CONTINENT" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_year" name="YEAR" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_month" name="MONTH" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_month_name" name="MONTH_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_user" name="USER" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_comment" name="COMMENT" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolaprel:ExpressionColumn xmi:id="_expressioncolumn_sql_expression" name="sql_expression">
    <sqls xmi:id="_sqlstatement" sql="CONCAT(&quot;Fact&quot;.&quot;USER&quot;, ' : ',  &quot;Fact&quot;.&quot;COMMENT&quot;)">
      <dialects>generic</dialects>
      <dialects>h2</dialects>
    </sqls>
  </rolaprel:ExpressionColumn>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_continent" name="Continent" column="_column_fact_continent"/>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_fact_key"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_fact_country"/>
  <rolaplev:Level xmi:id="_level_month" name="Month" column="_column_fact_month" type="TimeMonths" nameColumn="_column_fact_month_name"/>
  <rolaplev:Level xmi:id="_level_year" name="Year" column="_column_fact_year" type="TimeYears"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_timehierarchy" name="TimeHierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_year _level_month"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_continent _level_country _level_town"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_town" name="Town" hierarchies="_explicithierarchy_townhierarchy"/>
  <rolapdim:TimeDimension xmi:id="_timedimension_time" name="Time" hierarchies="_explicithierarchy_timehierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_measurestextaggregatorscube" name="MeasuresTextAggregatorsCube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_town" foreignKey="_column_fact_country" dimension="_standarddimension_town"/>
    <dimensionConnectors xmi:id="_dimensionconnector_time" foreignKey="_column_fact_year" dimension="_timedimension_time"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sum_of_value" name="Sum of Value" column="_column_fact_value"/>
      <measures xsi:type="rolapmeas:TextAggMeasure" xmi:id="_textaggmeasure_comment" name="Comment" column="_expressioncolumn_sql_expression" orderByColumns="_orderedcolumn_comment" separator=", "/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.aggregator.textagg.zip" download>Download Zip File</a>
