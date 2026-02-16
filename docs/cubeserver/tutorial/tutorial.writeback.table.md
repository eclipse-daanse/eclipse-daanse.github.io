---
title: Writeback Table
group: Writeback
kind: TUTORIAL
number: 2.5.2
---
# Daanse Tutorial - Writeback Table

This tutorial discusses writeback with fact as Table.


## Database Schema

The Database Schema contains the
- `FACT` table with 3 columns `VAL`, `VAL1`, `L2`. The `L2` column is used as the discriminator in the Level and Hierarchy definitions
- `L1` table with two columns: `L1` and `L2`.
- `L2` table with one column: `L2`.
- `FACTWB` table with 4 columns: `VAL`, `VAL1`, `ID`, `USER`.


```xml
<roma:DatabaseSchema   id="_databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_fact" name="FACT">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val" name="VAL" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val1" name="VAL1" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_table_fact_L2" name="L2" columnSize="100"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_l1" name="L1">
    <columns xsi:type="roma:PhysicalColumn" id="_l1_l1" name="L1" columnSize="100"/>
    <columns xsi:type="roma:PhysicalColumn" id="_l1_l2" name="L2" columnSize="100"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_l2" name="L2">
    <columns xsi:type="roma:PhysicalColumn" id="_l2_l2" name="L2" columnSize="100"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_factwb" name="FACTWB">
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_val" name="VAL" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_val1" name="VAL1" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_table_factwb_L2" name="L2" columnSize="100"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_id" name="ID" columnSize="100"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_user" name="USER" columnSize="100"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## FactQuery

The `FactQuery` is a simple TableQuery that selects all columns from the `Fact` table to use in the cube for the measures.


```xml
<roma:TableQuery  id="_table_factQuery" table="_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## l1TableQuery

The `l1TableQuery` is a simple TableQuery that selects all columns from the `L1` table to use in the cube for the `L1` level.


```xml
<roma:TableQuery  id="_l1Query" table="_l1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## l21TableQuery

The `l2TableQuery` is a simple TableQuery that selects all columns from the `L2` table to use in the cube for the `L2` level.


```xml
<roma:TableQuery  id="_l2Query" table="_l2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## join

The join is a simple JoinedQuery that unites `l1TableQuery` and l2TableQuery by `L2` column.


```xml
<roma:JoinQuery  id="_join">
  <left key="_l1_l2" query="_l1Query"/>
  <right key="_l2_l2" query="_l2Query"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## L1

This Example uses one simple `L1` level based on the `L1` column. `L2` column to use for connection to level `L2`


```xml
<roma:Level  id="_l1level" name="L1" column="_l1_l1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## L2

This Example uses one simple `L2` level based on the `L2` column. `L2` column to use for connection to level `L1`


```xml
<roma:Level  id="_l2level" name="L2" column="_l2_l2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## HierarchyWithHasAll

The Hierarchy is defined with the hasAll property set to true and the two levels.


```xml
<roma:ExplicitHierarchy  id="_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_l1_l2" query="_join" levels="_l1level _l2level"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The dimension is defined with the one hierarchy.


```xml
<roma:StandardDimension  id="_d1" name="D1" hierarchies="roma:ExplicitHierarchy _hierarchywithhasall"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cubec C

Cube `C` is defined by DimensionConnector `D1` and a MeasureGroup containing two measures using `SUM` aggregation.
The cube also contains a `FACTWB` WritebackTable configuration with a WritebackAttribute mapped to the `VAL` column from the fact table, along with two WritebackMeasures: Measure1 and Measure2.


```xml
<roma:PhysicalCube   id="_c" name="C" query="_table_factQuery">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _l1_l2" dimension="roma:StandardDimension _d1" overrideDimensionName="D1" id="_d1connector"/>
  <writebackTable name="FACTWB">
    <writebackAttribute column="_table_fact_L2" dimensionConnector="_d1connector"/>
    <writebackMeasure column="_column_fact_val" name="Measure1"/>
    <writebackMeasure column="_column_fact_val1" name="Measure2"/>
  </writebackTable>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure1" name="Measure1" column="_column_fact_val"/>
    <measures xsi:type="roma:SumMeasure" id="_measure2" name="Measure2" column="_column_fact_val1"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Table-based writeback functionality" name="Daanse Tutorial - Writeback Table" cubes="_c" dbschemas="_databaseSchema"/>
  <roma:DatabaseSchema id="_databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_fact" name="FACT">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val" name="VAL" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val1" name="VAL1" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_table_fact_L2" name="L2" columnSize="100"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_l1" name="L1">
      <columns xsi:type="roma:PhysicalColumn" id="_l1_l1" name="L1" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="_l1_l2" name="L2" columnSize="100"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_l2" name="L2">
      <columns xsi:type="roma:PhysicalColumn" id="_l2_l2" name="L2" columnSize="100"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_factwb" name="FACTWB">
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_val" name="VAL" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_val1" name="VAL1" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_table_factwb_L2" name="L2" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_id" name="ID" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_user" name="USER" columnSize="100"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_l1Query" table="_l1"/>
  <roma:TableQuery id="_l2Query" table="_l2"/>
  <roma:TableQuery id="_table_factQuery" table="_fact"/>
  <roma:JoinQuery id="_join">
    <left key="_l1_l2" query="_l1Query"/>
    <right key="_l2_l2" query="_l2Query"/>
  </roma:JoinQuery>
  <roma:Level id="_l1level" name="L1" column="_l1_l1"/>
  <roma:Level id="_l2level" name="L2" column="_l2_l2"/>
  <roma:ExplicitHierarchy id="_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_l1_l2" query="_join" levels="_l1level _l2level"/>
  <roma:StandardDimension id="_d1" name="D1" hierarchies="_hierarchywithhasall"/>
  <roma:PhysicalCube id="_c" name="C" query="_table_factQuery">
    <dimensionConnectors foreignKey="_l1_l2" dimension="_d1" overrideDimensionName="D1" id="_d1connector"/>
    <writebackTable name="FACTWB">
      <writebackAttribute column="_table_fact_L2" dimensionConnector="_d1connector"/>
      <writebackMeasure column="_column_fact_val" name="Measure1"/>
      <writebackMeasure column="_column_fact_val1" name="Measure2"/>
    </writebackTable>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure1" name="Measure1" column="_column_fact_val"/>
      <measures xsi:type="roma:SumMeasure" id="_measure2" name="Measure2" column="_column_fact_val1"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.writeback.table.zip" download>Download Zip File</a>
