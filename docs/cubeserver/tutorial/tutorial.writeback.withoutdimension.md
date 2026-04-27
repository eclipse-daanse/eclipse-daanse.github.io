---
title: Writeback Without Dimension
group: Writeback
kind: TUTORIAL
number: 2.05.04
---
# Daanse Tutorial - Writeback Without Dimension

This tutorial discusses writeback with fact as InlineTable.


## Database Schema

The Database Schema contains the
- `FACT` table with 3 columns `VAL`, `VAL1`, `VALUE`.
- `FACTWB` table with 5 columns: `VAL`, `VAL1`, `VALUE`, `ID`, `USER`.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val" name="VAL"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val1" name="VAL1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_val" name="VAL"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_val1" name="VAL1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_user" name="USER"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## FactQuery

The FactQuery is a simple InlineTableSource that selects all columns from the Fact inline table to use in the cube for the measures. InlineTableSource have description and data in catalog


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val" name="VAL"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val1" name="VAL1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cubec C

Cube `C` is defined a `FACTWB` WritebackTable configuration with two WritebackMeasures: WbMeasure1 and WbMeasure2.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" query="_tablesource_fact">
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackMeasure xmi:id="_writebackmeasure_measure1" column="_column_fact_val" name="Measure1"/>
      <writebackMeasure xmi:id="_writebackmeasure_measure2" column="_column_fact_val1" name="Measure2"/>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_val"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure2" name="Measure2" column="_column_fact_val1"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <relational:Table xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val" name="VAL"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val1" name="VAL1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_factwb_val _column_fact_val1 _column_factwb_val1 _column_fact_val" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_factwb_value _column_fact_value _column_factwb_id _column_factwb_user" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_writeback_without_dimension" description="Writeback without dimension constraints" name="Daanse Tutorial - Writeback Without Dimension" cubes="_physicalcube_c" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_val" name="VAL" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_val1" name="VAL1" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_val" name="VAL" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_val1" name="VAL1" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_value" name="VALUE" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_id" name="ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_user" name="USER" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" query="_tablesource_fact">
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackMeasure xmi:id="_writebackmeasure_measure1" column="_column_fact_val" name="Measure1"/>
      <writebackMeasure xmi:id="_writebackmeasure_measure2" column="_column_fact_val1" name="Measure2"/>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_val"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure2" name="Measure2" column="_column_fact_val1"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.writeback.withoutdimension.zip" download>Download Zip File</a>
