---
title: Writeback Without Dimension
group: Writeback
kind: TUTORIAL
number: 2.5.4
---
# Daanse Tutorial - Writeback Without Dimension

This tutorial discusses writeback with fact as InlineTable.


## Database Schema

The Database Schema contains the
FACT table with 3 columns VAL, VAL1, VALUE.
FACTWB table with 5 columns: VAL, VAL1, VALUE, ID, USER.


```xml
<roma:DatabaseSchema   id="_databaseSchema_writeback_withoutdimension">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="FACT">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val" name="VAL" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val1" name="VAL1" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" columnSize="100"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_factwb" name="FACTWB">
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_val" name="VAL" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_val1" name="VAL1" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_value" name="VALUE" columnSize="100"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_id" name="ID" columnSize="100"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_user" name="USER" columnSize="100"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## FactQuery

The FactQuery is a simple InlineTableQuery that selects all columns from the Fact inline table to use in the cube for the measures. InlineTableQuery have description and data in catalog


```xml
<roma:TableQuery  id="_tableQuery_FactQuery" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cubec C 

Cube C is defined a FACTWB WritebackTable configuration with two WritebackMeasures: WbMeasure1 and WbMeasure2.


```xml
<roma:PhysicalCube   id="_physicalCube_C" name="C" query="_tableQuery_FactQuery">
  <writebackTable name="FACTWB">
    <writebackMeasure column="_column_fact_val" name="WbMeasure1"/>
    <writebackMeasure column="_column_fact_val1" name="WbMeasure2"/>
  </writebackTable>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_sumMeasure_Measure1" name="Measure1" column="_column_fact_val"/>
    <measures xsi:type="roma:SumMeasure" id="_sumMeasure_Measure2" name="Measure2" column="_column_fact_val1"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Writeback without dimension constraints" name="Daanse Tutorial - Writeback Without Dimension" cubes="_physicalCube_C" dbschemas="_databaseSchema_writeback_withoutdimension"/>
  <roma:DatabaseSchema id="_databaseSchema_writeback_withoutdimension">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="FACT">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val" name="VAL" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_val1" name="VAL1" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" columnSize="100"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_factwb" name="FACTWB">
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_val" name="VAL" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_val1" name="VAL1" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_value" name="VALUE" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_id" name="ID" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_factwb_user" name="USER" columnSize="100"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_tableQuery_FactQuery" table="_table_fact"/>
  <roma:PhysicalCube id="_physicalCube_C" name="C" query="_tableQuery_FactQuery">
    <writebackTable name="FACTWB">
      <writebackMeasure column="_column_fact_val" name="WbMeasure1"/>
      <writebackMeasure column="_column_fact_val1" name="WbMeasure2"/>
    </writebackTable>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_sumMeasure_Measure1" name="Measure1" column="_column_fact_val"/>
      <measures xsi:type="roma:SumMeasure" id="_sumMeasure_Measure2" name="Measure2" column="_column_fact_val1"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.writeback.withoutdimension.zip" download>Download Zip File</a>
