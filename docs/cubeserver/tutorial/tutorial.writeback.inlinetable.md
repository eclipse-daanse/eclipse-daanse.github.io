---
title: Writeback Inline Table
group: Writeback
kind: TUTORIAL
number: 2.5.1
---
# Daanse Tutorial - Writeback Inline Table

This tutorial discusses writeback with fact as InlineTable.


## Database Schema

The Database Schema contains the
- InlineTable `FACT` with 3 columns `VAL`, `VAL1`, `L2`. The `L2` column is used as the discriminator in the the Level and Hierarchy definitions
- `L1` table with two columns: `L1` and `L2`.
- `L2` table with one column: `L2`.
- `FACTWB` table with 4 columns: `VAL`, `VAL1`, `ID`, `USER`.


```xml
<roma:DatabaseSchema   id="_databaseSchema_WritebackInlineTable">
  <tables xsi:type="roma:InlineTable" id="_fact" name="FACT">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val" name="VAL" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val1" name="VAL1" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_table_fact_L2" name="L2" columnSize="100"/>
    <rows>
      <rowValues column="_column_fact_val" value="42"/>
      <rowValues column="_column_fact_val1" value="21"/>
      <rowValues column="_table_fact_L2" value="Level11"/>
    </rows>
    <rows>
      <rowValues column="_column_fact_val" value="62"/>
      <rowValues column="_column_fact_val1" value="31"/>
      <rowValues column="_table_fact_L2" value="Level22"/>
    </rows>
    <rows>
      <rowValues column="_column_fact_val" value="20"/>
      <rowValues column="_column_fact_val1" value="10"/>
      <rowValues column="_table_fact_L2" value="Level33"/>
    </rows>
    <rows>
      <rowValues column="_column_fact_val" value="40"/>
      <rowValues column="_column_fact_val1" value="20"/>
      <rowValues column="_table_fact_L2" value="Level44"/>
    </rows>
    <rows>
      <rowValues column="_column_fact_val" value="60"/>
      <rowValues column="_column_fact_val1" value="30"/>
      <rowValues column="_table_fact_L2" value="Level55"/>
    </rows>
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
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_l2" name="L2" columnSize="100"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_id" name="ID" columnSize="100"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_user" name="USER" columnSize="100"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## FactQuery

The FactQuery is a simple InlineTableQuery that selects all columns from the `Fact` inline table to use in the cube for the measures. InlineTableQuery have description and data in catalog


```xml
<roma:InlineTableQuery  id="_table_factQuery" alias="FACT" table="_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## l1TableQuery

The l1TableQuery is a simple TableQuery that selects all columns from the `L1` table to use in the cube for the `L1` level.


```xml
<roma:TableQuery  id="_l1TableQuery" table="_l1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## l21TableQuery

The l2TableQuery is a simple TableQuery that selects all columns from the `L2` table to use in the cube for the `L2` level.


```xml
<roma:TableQuery  id="_l2TableQuery" table="_l2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## join

The join is a simple JoinedQuery that unites l1TableQuery and l2TableQuery by `L2` column.


```xml
<roma:JoinQuery  id="_join">
  <left key="_l1_l2" query="_l1TableQuery"/>
  <right key="_l2_l2" query="_l2TableQuery"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## L1

This Example uses one simple `L1` level bases on the `L1` column. `L2` column to use for connection to level `L2`


```xml
<roma:Level  id="_l1level" name="L1" column="_l1_l1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## L2

This Example uses one simple `L2` level bases on the `L2` column. `L2` column to use for connection to level `L1`


```xml
<roma:Level  id="_level_L2Level" name="L2" column="_l2_l2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## HierarchyWithHasAll

The Hierarchy is defined with the hasAll property set to truefalse and the two levels.


```xml
<roma:ExplicitHierarchy  id="_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_l1_l2" query="_join" levels="_l1level _level_L2Level"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The dimension is defined with the one hierarchy.


```xml
<roma:StandardDimension  id="_dimension" name="Dimension" hierarchies="roma:ExplicitHierarchy _hierarchywithhasall"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cubec C 

Cube C is defined by DimensionConnector D1 and a MeasureGroup containing two measures using SUM aggregation.
The cube also contains a FACTWB WritebackTable configuration with a WritebackAttribute mapped to the VAL column from the fact table, along with two WritebackMeasures: Measure1 and Measure2.


```xml
<roma:PhysicalCube   id="_c" name="C" query="roma:InlineTableQuery _table_factQuery">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _table_fact_L2" dimension="roma:StandardDimension _dimension" overrideDimensionName="D1" id="_d1"/>
  <writebackTable name="FACTWB">
    <writebackAttribute column="_table_fact_L2" dimensionConnector="_d1"/>
    <writebackMeasure column="_column_fact_val" name="Measure1"/>
    <writebackMeasure column="_column_fact_val1" name="Measure2"/>
  </writebackTable>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" column="_column_fact_val"/>
    <measures xsi:type="roma:SumMeasure" id="_measure2" name="Measure2" column="_column_fact_val1"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:InlineTableQuery id="_table_factQuery" alias="FACT" table="_fact"/>
  <roma:Catalog description="Inline table writeback functionality" name="Daanse Tutorial - Writeback Inline Table" cubes="_c" dbschemas="_databaseSchema_WritebackInlineTable"/>
  <roma:DatabaseSchema id="_databaseSchema_WritebackInlineTable">
    <tables xsi:type="roma:InlineTable" id="_fact" name="FACT">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val" name="VAL" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val1" name="VAL1" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_table_fact_L2" name="L2" columnSize="100"/>
      <rows>
        <rowValues column="_column_fact_val" value="42"/>
        <rowValues column="_column_fact_val1" value="21"/>
        <rowValues column="_table_fact_L2" value="Level11"/>
      </rows>
      <rows>
        <rowValues column="_column_fact_val" value="62"/>
        <rowValues column="_column_fact_val1" value="31"/>
        <rowValues column="_table_fact_L2" value="Level22"/>
      </rows>
      <rows>
        <rowValues column="_column_fact_val" value="20"/>
        <rowValues column="_column_fact_val1" value="10"/>
        <rowValues column="_table_fact_L2" value="Level33"/>
      </rows>
      <rows>
        <rowValues column="_column_fact_val" value="40"/>
        <rowValues column="_column_fact_val1" value="20"/>
        <rowValues column="_table_fact_L2" value="Level44"/>
      </rows>
      <rows>
        <rowValues column="_column_fact_val" value="60"/>
        <rowValues column="_column_fact_val1" value="30"/>
        <rowValues column="_table_fact_L2" value="Level55"/>
      </rows>
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
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_l2" name="L2" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_id" name="ID" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_user" name="USER" columnSize="100"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_l1TableQuery" table="_l1"/>
  <roma:TableQuery id="_l2TableQuery" table="_l2"/>
  <roma:JoinQuery id="_join">
    <left key="_l1_l2" query="_l1TableQuery"/>
    <right key="_l2_l2" query="_l2TableQuery"/>
  </roma:JoinQuery>
  <roma:Level id="_l1level" name="L1" column="_l1_l1"/>
  <roma:Level id="_level_L2Level" name="L2" column="_l2_l2"/>
  <roma:ExplicitHierarchy id="_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_l1_l2" query="_join" levels="_l1level _level_L2Level"/>
  <roma:StandardDimension id="_dimension" name="Dimension" hierarchies="_hierarchywithhasall"/>
  <roma:PhysicalCube id="_c" name="C" query="_table_factQuery">
    <dimensionConnectors foreignKey="_table_fact_L2" dimension="_dimension" overrideDimensionName="D1" id="_d1"/>
    <writebackTable name="FACTWB">
      <writebackAttribute column="_table_fact_L2" dimensionConnector="_d1"/>
      <writebackMeasure column="_column_fact_val" name="Measure1"/>
      <writebackMeasure column="_column_fact_val1" name="Measure2"/>
    </writebackTable>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" column="_column_fact_val"/>
      <measures xsi:type="roma:SumMeasure" id="_measure2" name="Measure2" column="_column_fact_val1"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.writeback.inlinetable.zip" download>Download Zip File</a>
