---
title: Minimal Cube With SQLExpressionColumn
group: Measure
kind: TUTORIAL
number: 2.12.1
---
A mininmal cube with a simple measure with SQLExpressionColumn.


# Minimal Cube With SQLExpressionColumn

Data cube with measure Expression.


## Database Schema

The cube defined in this example is based on a single table that stores all the data.
The table, named `Fact`, contains two columns: `KEY` and `VALUE`.
The table, named `MEASURE_TABLE`, contains 3 columns: `ID`, `VALUE` and 'FLAG'.


```xml
<roma:DatabaseSchema   id="_databaseSchema_expression">
  <tables xsi:type="roma:PhysicalTable" id="_fact" name="FACT">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value_numeric" name="VALUE_NUMERIC" type="Numeric"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_measure_table" name="MEASURE_TABLE">
    <columns xsi:type="roma:PhysicalColumn" id="_measure_table_id" name="ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_measure_table_value" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_measure_table_flag" name="FLAG" type="Integer"/>
    <columns xsi:type="roma:SQLExpressionColumn" id="_measureExpression1" name="measureExpression1">
      <sqls sql="(select sum(&quot;MEASURE_TABLE&quot;.&quot;VALUE&quot;) from &quot;MEASURE_TABLE&quot; where &quot;MEASURE_TABLE&quot;.&quot;FLAG&quot; = 1)">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </columns>
    <columns xsi:type="roma:SQLExpressionColumn" id="_measureExpression2" name="measureExpression2">
      <sqls sql="(CASE WHEN &quot;FACT&quot;.&quot;VALUE&quot; > 21 THEN 50 ELSE &quot;FACT&quot;.&quot;VALUE&quot; END)">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </columns>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

This example uses a TableQuery, as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_table_factQuery" table="_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## MeasureExpression1

        Specialized formatter for controlling the presentation of cell values in analytical grids.
        Cell formatter use reference to class formatter mondrian.rolap.format.CellFormatterImpl implemented CellFormatter interface


```xml
<roma:SQLExpressionColumn  id="_measureExpression1" name="measureExpression1">
  <sqls sql="(select sum(&quot;MEASURE_TABLE&quot;.&quot;VALUE&quot;) from &quot;MEASURE_TABLE&quot; where &quot;MEASURE_TABLE&quot;.&quot;FLAG&quot; = 1)">
    <dialects>generic</dialects>
    <dialects>h2</dialects>
  </sqls>
</roma:SQLExpressionColumn>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## MeasureExpression2

        Specialized formatter for controlling the presentation of cell values in analytical grids.
        Cell formatter use reference to class formatter mondrian.rolap.format.CellFormatterImpl implemented CellFormatter interface


```xml
<roma:SQLExpressionColumn  id="_measureExpression2" name="measureExpression2">
  <sqls sql="(CASE WHEN &quot;FACT&quot;.&quot;VALUE&quot; > 21 THEN 50 ELSE &quot;FACT&quot;.&quot;VALUE&quot; END)">
    <dialects>generic</dialects>
    <dialects>h2</dialects>
  </sqls>
</roma:SQLExpressionColumn>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure1

        Measure with SQLExpressionColumn as column. measure use SQL expression to MEASURE_TABL table.


```xml
<roma:SumMeasure  id="_measure1-sum" name="Measure1-Sum" column="roma:SQLExpressionColumn _measureExpression1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure1

        Measure with SQLExpressionColumn as column. measure use SQL expression to FACT table.


```xml
<roma:SumMeasure  id="_measure1-sum" name="Measure1-Sum" column="roma:SQLExpressionColumn _measureExpression1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Measures CellFormatter

In this example, measure with SQLExpressionColumn. Measures use SQL expression as column.


```xml
<roma:PhysicalCube   id="_cube" name="Cube With MeasureExpression" query="_table_factQuery">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure1-sum" name="Measure1-Sum" column="roma:SQLExpressionColumn _measureExpression1"/>
    <measures xsi:type="roma:SumMeasure" id="_measure2-sum" name="Measure2-Sum" column="roma:SQLExpressionColumn _measureExpression2"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Minimal Cube With SQLExpressionColumn" name="Minimal Cube With SQLExpressionColumn" cubes="_cube" dbschemas="_databaseSchema_expression"/>
  <roma:DatabaseSchema id="_databaseSchema_expression">
    <tables xsi:type="roma:PhysicalTable" id="_fact" name="FACT">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value_numeric" name="VALUE_NUMERIC" type="Numeric"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_measure_table" name="MEASURE_TABLE">
      <columns xsi:type="roma:PhysicalColumn" id="_measure_table_id" name="ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_measure_table_value" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_measure_table_flag" name="FLAG" type="Integer"/>
      <columns xsi:type="roma:SQLExpressionColumn" id="_measureExpression1" name="measureExpression1">
        <sqls sql="(select sum(&quot;MEASURE_TABLE&quot;.&quot;VALUE&quot;) from &quot;MEASURE_TABLE&quot; where &quot;MEASURE_TABLE&quot;.&quot;FLAG&quot; = 1)">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </columns>
      <columns xsi:type="roma:SQLExpressionColumn" id="_measureExpression2" name="measureExpression2">
        <sqls sql="(CASE WHEN &quot;FACT&quot;.&quot;VALUE&quot; > 21 THEN 50 ELSE &quot;FACT&quot;.&quot;VALUE&quot; END)">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </columns>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_table_factQuery" table="_fact"/>
  <roma:PhysicalCube id="_cube" name="Cube With MeasureExpression" query="_table_factQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure1-sum" name="Measure1-Sum" column="_measureExpression1"/>
      <measures xsi:type="roma:SumMeasure" id="_measure2-sum" name="Measure2-Sum" column="_measureExpression2"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.measure.expression.zip" download>Download Zip File</a>
