---
title: Level Small Int As Boolean Type
group: Level
kind: TUTORIAL
number: 2.14.2
---
# Daanse Tutorial - Level Small Int As Boolean Type

Minimal Cube with level with smallInt column as boolan type
Cube have level which use smallInt column and have boolean ColumnType


## Database Schema

DatabaseSchema includes physical table `Fact`.
Table, named `Fact`, contains 3 columns: `KEY`, `VALUE` and `FLAG`.


```xml
<roma:DatabaseSchema   id="_databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_flag" name="FLAG" type="SmallInt"/>
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
## Level

The Level uses the column attribute to specify the primary key column.
Column have SMALLINT type but level have ColumnType attribute with boolean type.
This makes it possible to use level as boolean.


```xml
<roma:Level  id="_level_Level" name="_Level" column="_column_fact_flag" columnType="Boolean"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists of level Level.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the queryHierarchy Join-query used to retrieve the data for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_fact_key" query="_table_factQuery" levels="_level_Level"/>

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

In this example uses cube with level which have "boolean" type. But in database we have "smallInt".
This makes it possible to use level as boolean.


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
  <roma:Catalog description="Level using small integer as boolean type" name="Daanse Tutorial - Level Small Int As Boolean Type" cubes="_cube" dbschemas="_databaseSchema"/>
  <roma:DatabaseSchema id="_databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_flag" name="FLAG" type="SmallInt"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_table_factQuery" table="_table_fact"/>
  <roma:Level id="_level_Level" name="_Level" column="_column_fact_flag" columnType="Boolean"/>
  <roma:ExplicitHierarchy id="_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_fact_key" query="_table_factQuery" levels="_level_Level"/>
  <roma:StandardDimension id="_dimension" name="Dimension" hierarchies="_hierarchywithhasall"/>
  <roma:PhysicalCube id="_cube" name="Cube" query="_table_factQuery">
    <dimensionConnectors dimension="_dimension" overrideDimensionName="Dimension" id="_dc_dimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure" name="Measure" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.level.smallintasbooleantype.zip" download>Download Zip File</a>
