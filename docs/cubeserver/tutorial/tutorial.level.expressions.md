---
title: Daanse Tutorial - Level Expressions
group: Level
kind: TUTORIAL
number: 2.14.1
---
A basic OLAP catalog with a level with expressions


# Minimal Cube with level with expressions

Minimal Cube with levels with SQL expressions as column
Cube have two levels Level1, Level2 with NameColumn, CaptionColumn, OrdinalColumn as SQL expression


## Database Schema

DatabaseSchema includes physical table `Fact`.
Table, named `Fact`, contains 3 columns: `KEY`, `KEY1` and `VALUE`.


```xml
<roma:DatabaseSchema   id="_databaseSchema_LevelExpressions">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key1" name="KEY1"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:SQLExpressionColumn" id="_nameExpression" name="nameExpression">
      <sqls sql="&quot;KEY&quot; || ' ' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </columns>
    <columns xsi:type="roma:SQLExpressionColumn" id="_keyExpression" name="keyExpression">
      <sqls sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls sql="&quot;KEY1&quot; || ' ' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </columns>
    <columns xsi:type="roma:SQLExpressionColumn" id="_captionExpression" name="captionExpression">
      <sqls sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls sql="&quot;KEY1&quot; || '___' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </columns>
    <columns xsi:type="roma:SQLExpressionColumn" id="_ordinalExpression" name="ordinalExpression">
      <sqls sql="&quot;KEY&quot; || '___' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </columns>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

This example uses a TableQuery, as it directly references the table `Fact`.


```xml
<roma:TableQuery  id="_table_factQuery" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

The Level1 uses the column attribute to specify the primary key column. Additionally,
it defines the nameColumn attribute to specify the column that contains the name of the level as SQL expression.


```xml
<roma:Level  id="_level1" name="Level1" column="_column_fact_key" nameColumn="roma:SQLExpressionColumn _nameExpression"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level2

The Level2 uses the primary key column as SQL expression. Additionally,
it defines the nameColumn attribute to specify the column that contains the name of the level as SQL expression.
Also it defines the OrdinalColumn attribute to specify the column that contains the ordinal parameter of the level as SQL expression.


```xml
<roma:Level  id="_level2" name="Level2" captionColumn="roma:SQLExpressionColumn _captionExpression" column="roma:SQLExpressionColumn _keyExpression" ordinalColumn="roma:SQLExpressionColumn _ordinalExpression"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists of two levels: Level1 and Level2.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the queryHierarchy Join-query used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_fact_key" query="_table_factQuery" levels="_level1 _level2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dimension" name="Dimension" hierarchies="roma:ExplicitHierarchy _hierarchywithhasall"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure

        Measure use fact table column with sum aggregation.


```xml
<roma:SumMeasure  id="_measure" name="Measure" column="_column_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

In this example uses cube with levels with SQL expressions as column.


```xml
<roma:PhysicalCube   id="_cube" name="Cube" query="_table_factQuery">
  <dimensionConnectors dimension="roma:StandardDimension _dimension" overrideDimensionName="Dimension" id="_dc_dimension"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure" name="Measure" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_fact_key" query="_table_factQuery" levels="_level1 _level2"/>
  <roma:Catalog description="Level with expression-based definitions" name="Daanse Tutorial - Level Expressions" cubes="_cube" dbschemas="_databaseSchema_LevelExpressions"/>
  <roma:DatabaseSchema id="_databaseSchema_LevelExpressions">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key1" name="KEY1"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:SQLExpressionColumn" id="_nameExpression" name="nameExpression">
        <sqls sql="&quot;KEY&quot; || ' ' || &quot;KEY1&quot;">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </columns>
      <columns xsi:type="roma:SQLExpressionColumn" id="_keyExpression" name="keyExpression">
        <sqls sql="KEY">
          <dialects>generic</dialects>
        </sqls>
        <sqls sql="&quot;KEY1&quot; || ' ' || &quot;KEY&quot;">
          <dialects>h2</dialects>
        </sqls>
      </columns>
      <columns xsi:type="roma:SQLExpressionColumn" id="_captionExpression" name="captionExpression">
        <sqls sql="KEY">
          <dialects>generic</dialects>
        </sqls>
        <sqls sql="&quot;KEY1&quot; || '___' || &quot;KEY&quot;">
          <dialects>h2</dialects>
        </sqls>
      </columns>
      <columns xsi:type="roma:SQLExpressionColumn" id="_ordinalExpression" name="ordinalExpression">
        <sqls sql="&quot;KEY&quot; || '___' || &quot;KEY1&quot;">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </columns>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_table_factQuery" table="_table_fact"/>
  <roma:Level id="_level2" name="Level2" captionColumn="_captionExpression" column="_keyExpression" ordinalColumn="_ordinalExpression"/>
  <roma:Level id="_level1" name="Level1" column="_column_fact_key" nameColumn="_nameExpression"/>
  <roma:StandardDimension id="_dimension" name="Dimension" hierarchies="_hierarchywithhasall"/>
  <roma:PhysicalCube id="_cube" name="Cube" query="_table_factQuery">
    <dimensionConnectors dimension="_dimension" overrideDimensionName="Dimension" id="_dc_dimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure" name="Measure" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.level.expressions.zip" download>Download Zip File</a>
