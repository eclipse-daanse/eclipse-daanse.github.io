---
title: Measure Multiple
group: Measure
kind: TUTORIAL
number: 2.02.02
---
# Daanse Tutorial - Measure Multiple

Data cubes can have multiple measures to provide different data related to the cube's topic. This is particularly useful when aggregating different data columns within the same cube.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains four columns: `KEY`, `VALUE1`, `VALUE2`, and `VALUE3`. The `KEY` column acts as a discriminator, while the `VALUE1`, `VALUE2`, and `VALUE3` columns contain the measurements to be aggregated.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value1" name="VALUE1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value2" name="VALUE2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value3" name="VALUE3"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

This example uses a TableQuery, as it directly references the physical table Fact.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value1" name="VALUE1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value2" name="VALUE2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value3" name="VALUE3"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measures

In this example, multiple measures are defined:
- The first measure references the `VALUE1` column.
- The second measure references the `VALUE2` column.
- The third measure references the `VALUE3` column.
All measures use sum aggregation.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_multiplemeasurescube" name="MultipleMeasuresCube" defaultMeasure="_summeasure_sum_of_value3" query="_tablesource_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sum_of_value1" name="Sum of Value1" column="_column_fact_value1"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sum_of_value2" name="Sum of Value2" column="_column_fact_value2"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sum_of_value3" name="Sum of Value3" column="_column_fact_value3"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value1" name="VALUE1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value2" name="VALUE2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value3" name="VALUE3"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## DefaultMeasure

Specifying `defaultMeasure` in the `Cube` element allows users to explicitly set a base measure as the default. If `defaultMeasure` is not specified, the first measure in the list is automatically considered the default measure.



## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value1 _column_fact_value2 _column_fact_value3" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_measuremultiplemeasures" id="_catalog_measureMultipleMeasures" description="Multiple measures in cubes" name="Daanse Tutorial - Measure Multiple" cubes="_physicalcube_multiplemeasurescube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value1" name="VALUE1" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value2" name="VALUE2" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value3" name="VALUE3" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_multiplemeasurescube" name="MultipleMeasuresCube" defaultMeasure="_summeasure_sum_of_value3" query="_tablesource_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sum_of_value1" name="Sum of Value1" column="_column_fact_value1"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sum_of_value2" name="Sum of Value2" column="_column_fact_value2"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sum_of_value3" name="Sum of Value3" column="_column_fact_value3"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.multiple.zip" download>Download Zip File</a>
