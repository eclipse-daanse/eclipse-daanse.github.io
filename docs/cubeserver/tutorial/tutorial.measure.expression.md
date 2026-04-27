---
title: Measure Expression
group: Measure
kind: TUTORIAL
number: 2.12.01
---
# Daanse Tutorial - Measure Expression

Data cube with measure Expression.


## Database Schema

The cube defined in this example is based on a two tables that stores all the data.
- The table, named `Fact`, contains two columns: `KEY` and `VALUE`.
- The table, named `MEASURE_TABLE`, contains 3 columns: `ID`, `VALUE` and 'FLAG'.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value_numeric" name="VALUE_NUMERIC"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_measure_table" name="MEASURE_TABLE">
    <feature xsi:type="relational:Column" xmi:id="_column_measure_table_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_measure_table_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_measure_table_flag" name="FLAG"/>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_measureexpression1" name="measureExpression1">
      <sqls xmi:id="_sqlstatement" sql="(select sum(&quot;MEASURE_TABLE&quot;.&quot;VALUE&quot;) from &quot;MEASURE_TABLE&quot; where &quot;MEASURE_TABLE&quot;.&quot;FLAG&quot; = 1)">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_measureexpression2" name="measureExpression2">
      <sqls xmi:id="_sqlstatement_1" sql="(CASE WHEN &quot;FACT&quot;.&quot;VALUE&quot; > 21 THEN 50 ELSE &quot;FACT&quot;.&quot;VALUE&quot; END)">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

This example uses a TableQuery, as it directly references the physical table `Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value_numeric" name="VALUE_NUMERIC"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## MeasureExpression1

        Specialized formatter for controlling the presentation of cell values in analytical grids.
        Cell formatter use reference to class formatter mondrian.rolap.format.CellFormatterImpl implemented CellFormatter interface


```xml
<rolaprel:ExpressionColumn xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_expressioncolumn_measureexpression1" name="measureExpression1">
  <sqls xmi:id="_sqlstatement" sql="(select sum(&quot;MEASURE_TABLE&quot;.&quot;VALUE&quot;) from &quot;MEASURE_TABLE&quot; where &quot;MEASURE_TABLE&quot;.&quot;FLAG&quot; = 1)">
    <dialects>generic</dialects>
    <dialects>h2</dialects>
  </sqls>
</rolaprel:ExpressionColumn>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## MeasureExpression2

        Specialized formatter for controlling the presentation of cell values in analytical grids.
        Cell formatter use reference to class formatter mondrian.rolap.format.CellFormatterImpl implemented CellFormatter interface


```xml
<rolaprel:ExpressionColumn xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_expressioncolumn_measureexpression2" name="measureExpression2">
  <sqls xmi:id="_sqlstatement" sql="(CASE WHEN &quot;FACT&quot;.&quot;VALUE&quot; > 21 THEN 50 ELSE &quot;FACT&quot;.&quot;VALUE&quot; END)">
    <dialects>generic</dialects>
    <dialects>h2</dialects>
  </sqls>
</rolaprel:ExpressionColumn>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure1

        Measure with ExpressionColumn as column. measure use SQL expression to MEASURE_TABL table.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum">
  <column href="_expressioncolumn_measureexpression1"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure1

        Measure with ExpressionColumn as column. measure use SQL expression to FACT table.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum">
  <column href="_expressioncolumn_measureexpression1"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Measures CellFormatter

In this example, measure with SQLExpressionColumn. Measures use SQL expression as column.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_with_measureexpression" name="Cube With MeasureExpression" query="_tablesource_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum">
        <column href="_expressioncolumn_measureexpression1"/>
      </measures>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure2_sum" name="Measure2-Sum">
        <column href="_expressioncolumn_measureexpression2"/>
      </measures>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value_numeric" name="VALUE_NUMERIC"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_numeric" name="NUMERIC" structuralFeature="_column_fact_value_numeric" typeNumber="2" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_measure_table_value _column_measure_table_flag _column_fact_value _column_measure_table_id" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_measure_expression" description="Measure with expression-based calculations" name="Daanse Tutorial - Measure Expression" cubes="_physicalcube_cube_with_measureexpression" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value_numeric" name="VALUE_NUMERIC" type="_sqlsimpletype_numeric"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_measure_table" name="MEASURE_TABLE">
      <feature xsi:type="relational:Column" xmi:id="_column_measure_table_id" name="ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_measure_table_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_measure_table_flag" name="FLAG" type="_sqlsimpletype_integer"/>
      <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_measureexpression1" name="measureExpression1">
        <sqls xmi:id="_sqlstatement_1" sql="(select sum(&quot;MEASURE_TABLE&quot;.&quot;VALUE&quot;) from &quot;MEASURE_TABLE&quot; where &quot;MEASURE_TABLE&quot;.&quot;FLAG&quot; = 1)">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </feature>
      <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_measureexpression2" name="measureExpression2">
        <sqls xmi:id="_sqlstatement" sql="(CASE WHEN &quot;FACT&quot;.&quot;VALUE&quot; > 21 THEN 50 ELSE &quot;FACT&quot;.&quot;VALUE&quot; END)">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </feature>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_with_measureexpression" name="Cube With MeasureExpression" query="_tablesource_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1_sum" name="Measure1-Sum" column="_expressioncolumn_measureexpression1"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure2_sum" name="Measure2-Sum" column="_expressioncolumn_measureexpression2"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.measure.expression.zip" download>Download Zip File</a>
