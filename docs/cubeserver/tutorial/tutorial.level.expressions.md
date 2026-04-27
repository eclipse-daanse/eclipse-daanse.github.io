---
title: Level Expressions
group: Level
kind: TUTORIAL
number: 2.14.01
---
# Daanse Tutorial - Level Expressions

Minimal Cube with levels with SQL expressions as column
Cube have two levels Level1, Level2 with NameColumn, CaptionColumn, OrdinalColumn as SQL expression


## Database Schema

Schema includes physical table `Fact`.
Table, named `Fact`, contains 3 columns: `KEY`, `KEY1` and `VALUE`.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_nameexpression" name="nameExpression">
      <sqls xmi:id="_sqlstatement" sql="&quot;KEY&quot; || ' ' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_keyexpression" name="keyExpression">
      <sqls xmi:id="_sqlstatement_1" sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls xmi:id="_sqlstatement_2" sql="&quot;KEY1&quot; || ' ' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_captionexpression" name="captionExpression">
      <sqls xmi:id="_sqlstatement_3" sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls xmi:id="_sqlstatement_4" sql="&quot;KEY1&quot; || '___' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_ordinalexpression" name="ordinalExpression">
      <sqls xmi:id="_sqlstatement_5" sql="&quot;KEY&quot; || '___' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

This example uses a TableQuery, as it directly references the table `Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_nameexpression" name="nameExpression">
      <sqls xmi:id="_sqlstatement" sql="&quot;KEY&quot; || ' ' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_keyexpression" name="keyExpression">
      <sqls xmi:id="_sqlstatement_1" sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls xmi:id="_sqlstatement_2" sql="&quot;KEY1&quot; || ' ' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_captionexpression" name="captionExpression">
      <sqls xmi:id="_sqlstatement_3" sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls xmi:id="_sqlstatement_4" sql="&quot;KEY1&quot; || '___' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_ordinalexpression" name="ordinalExpression">
      <sqls xmi:id="_sqlstatement_5" sql="&quot;KEY&quot; || '___' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

The Level1 uses the column attribute to specify the primary key column. Additionally,
it defines the nameColumn attribute to specify the column that contains the name of the level as SQL expression.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_level1" name="Level1">
  <column href="_column_fact_key"/>
  <nameColumn href="_expressioncolumn_nameexpression"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level2

The Level2 uses the primary key column as SQL expression. Additionally,
it defines the nameColumn attribute to specify the column that contains the name of the level as SQL expression.
Also it defines the OrdinalColumn attribute to specify the column that contains the ordinal parameter of the level as SQL expression.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_level2" name="Level2">
  <captionColumn href="_expressioncolumn_captionexpression"/>
  <column href="_expressioncolumn_keyexpression"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists of two levels: Level1 and Level2.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the queryHierarchy Join-query used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1 _level_level2"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key" nameColumn="_expressioncolumn_nameexpression"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" captionColumn="_expressioncolumn_captionexpression" column="_expressioncolumn_keyexpression">
    <ordinalColumns xmi:id="_orderedcolumn_ordinalexpression" column="_expressioncolumn_ordinalexpression"/>
  </rolaplev:Level>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_nameexpression" name="nameExpression">
      <sqls xmi:id="_sqlstatement" sql="&quot;KEY&quot; || ' ' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_keyexpression" name="keyExpression">
      <sqls xmi:id="_sqlstatement_1" sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls xmi:id="_sqlstatement_2" sql="&quot;KEY1&quot; || ' ' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_captionexpression" name="captionExpression">
      <sqls xmi:id="_sqlstatement_3" sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls xmi:id="_sqlstatement_4" sql="&quot;KEY1&quot; || '___' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_ordinalexpression" name="ordinalExpression">
      <sqls xmi:id="_sqlstatement_5" sql="&quot;KEY&quot; || '___' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchywithhasall"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1 _level_level2"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key" nameColumn="_expressioncolumn_nameexpression"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" captionColumn="_expressioncolumn_captionexpression" column="_expressioncolumn_keyexpression">
    <ordinalColumns xmi:id="_orderedcolumn_ordinalexpression" column="_expressioncolumn_ordinalexpression"/>
  </rolaplev:Level>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_nameexpression" name="nameExpression">
      <sqls xmi:id="_sqlstatement" sql="&quot;KEY&quot; || ' ' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_keyexpression" name="keyExpression">
      <sqls xmi:id="_sqlstatement_1" sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls xmi:id="_sqlstatement_2" sql="&quot;KEY1&quot; || ' ' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_captionexpression" name="captionExpression">
      <sqls xmi:id="_sqlstatement_3" sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls xmi:id="_sqlstatement_4" sql="&quot;KEY1&quot; || '___' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_ordinalexpression" name="ordinalExpression">
      <sqls xmi:id="_sqlstatement_5" sql="&quot;KEY&quot; || '___' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure

        Measure use fact table column with sum aggregation.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_measure" name="Measure">
  <column href="_column_fact_value"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

In this example uses cube with levels with SQL expressions as column.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension" dimension="_standarddimension_dimension" overrideDimensionName="Dimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure" name="Measure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1 _level_level2"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key" nameColumn="_expressioncolumn_nameexpression"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" captionColumn="_expressioncolumn_captionexpression" column="_expressioncolumn_keyexpression">
    <ordinalColumns xmi:id="_orderedcolumn_ordinalexpression" column="_expressioncolumn_ordinalexpression"/>
  </rolaplev:Level>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_nameexpression" name="nameExpression">
      <sqls xmi:id="_sqlstatement" sql="&quot;KEY&quot; || ' ' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_keyexpression" name="keyExpression">
      <sqls xmi:id="_sqlstatement_1" sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls xmi:id="_sqlstatement_2" sql="&quot;KEY1&quot; || ' ' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_captionexpression" name="captionExpression">
      <sqls xmi:id="_sqlstatement_3" sql="KEY">
        <dialects>generic</dialects>
      </sqls>
      <sqls xmi:id="_sqlstatement_4" sql="&quot;KEY1&quot; || '___' || &quot;KEY&quot;">
        <dialects>h2</dialects>
      </sqls>
    </feature>
    <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_ordinalexpression" name="ordinalExpression">
      <sqls xmi:id="_sqlstatement_5" sql="&quot;KEY&quot; || '___' || &quot;KEY1&quot;">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </sqls>
    </feature>
  </relational:Table>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchywithhasall"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key _column_fact_key1" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_level_expressions" description="Level with expression-based definitions" name="Daanse Tutorial - Level Expressions" cubes="_physicalcube_cube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key1" name="KEY1" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_nameexpression" name="nameExpression">
        <sqls xmi:id="_sqlstatement_5" sql="&quot;KEY&quot; || ' ' || &quot;KEY1&quot;">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </feature>
      <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_keyexpression" name="keyExpression">
        <sqls xmi:id="_sqlstatement_4" sql="KEY">
          <dialects>generic</dialects>
        </sqls>
        <sqls xmi:id="_sqlstatement" sql="&quot;KEY1&quot; || ' ' || &quot;KEY&quot;">
          <dialects>h2</dialects>
        </sqls>
      </feature>
      <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_captionexpression" name="captionExpression">
        <sqls xmi:id="_sqlstatement_2" sql="KEY">
          <dialects>generic</dialects>
        </sqls>
        <sqls xmi:id="_sqlstatement_1" sql="&quot;KEY1&quot; || '___' || &quot;KEY&quot;">
          <dialects>h2</dialects>
        </sqls>
      </feature>
      <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_ordinalexpression" name="ordinalExpression">
        <sqls xmi:id="_sqlstatement_3" sql="&quot;KEY&quot; || '___' || &quot;KEY1&quot;">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </feature>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key" nameColumn="_expressioncolumn_nameexpression"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" captionColumn="_expressioncolumn_captionexpression" column="_expressioncolumn_keyexpression">
    <ordinalColumns xmi:id="_orderedcolumn_ordinalexpression" column="_expressioncolumn_ordinalexpression"/>
  </rolaplev:Level>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1 _level_level2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchywithhasall"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension" dimension="_standarddimension_dimension" overrideDimensionName="Dimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure" name="Measure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.level.expressions.zip" download>Download Zip File</a>
