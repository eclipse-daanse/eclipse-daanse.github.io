---
title: Dimension Time Dimension
group: Dimension
kind: TUTORIAL
number: 2.09.01
---
# Daanse Tutorial - Dimension Time Dimension

This tutorial discusses NamedSets.

- NsWithFolderDimension1    : NamedSet use only `Dimension1` in formula. By this reason it connected to `Dimension1` on excel. NamedSet have folder
- NsWithoutFolderDimension1 : NamedSet use only `Dimension1` in formula. By this reason it connected to `Dimension1` on excel.
- NSInCubeWithFolder        : NamedSet use `Dimension1` and `Dimension2` in formula. By this reason it connected to Cube on excel. NamedSet have folder
- NSInCubeWithoutFolder     : NamedSet use `Dimension1` and `Dimension2` in formula. By this reason it connected to Cube.


## Database Schema

The Database Schema contains the `Fact` table with 9 columns: `DATE_KEY`, `YEAR_ID`, `QTR_ID`, `QTR_NAME`, `MONTH_ID`, `MONTH_NAME`, `WEEK_IN_MONTH`, `DAY_IN_MONTH` and `VALUE`.
The `DATE_KEY` column is used as the discriminator in the Hierarchy definitions.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_date_key" name="DATE_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_year_id" name="YEAR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_id" name="QTR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_name" name="QTR_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_id" name="MONTH_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_name" name="MONTH_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_week_in_month" name="WEEK_IN_MONTH"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_day_in_month" name="DAY_IN_MONTH"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableSource that selects all columns from the Fact table to use in the hierarchy and in the cube for the measures.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_date_key" name="DATE_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_year_id" name="YEAR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_id" name="QTR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_name" name="QTR_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_id" name="MONTH_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_name" name="MONTH_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_week_in_month" name="WEEK_IN_MONTH"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_day_in_month" name="DAY_IN_MONTH"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelYears

This Example uses Years level based on the YEAR_ID column and has TIME_YEARS type.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_years" name="Years" type="TimeYears" uniqueMembers="true">
  <column href="_column_fact_year_id"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelQuarters

This Example uses Quarters level based on the QTR_ID column and has TIME_QUARTERS type with name column QTR_NAME.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_quarters" name="Quarters" type="TimeQuarters">
  <column href="_column_fact_qtr_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelMonths

This Example uses Months level based on the MONTH_ID column and has TIME_MONTHS type with name column MONTH_NAME.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_months" name="Months" type="TimeMonths">
  <column href="_column_fact_month_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelWeek

This Example uses Week level based on the MONTH_ID column and has TIME_WEEKS type.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_week" name="Week" type="TimeWeeks">
  <column href="_column_fact_week_in_month"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelDay

This Example uses Week level based on the MONTH_ID column and has TIME_DAYS type.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_day" name="Day" type="TimeDays">
  <column href="_column_fact_day_in_month"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

The Hierarchy1 is defined with the hasAll property set to false and the one level2.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_date_key" allMemberName="All Years" primaryKey="_column_fact_date_key" query="_tablesource_fact" levels="_level_years _level_quarters _level_months _level_week _level_day"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_date_key" name="DATE_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_year_id" name="YEAR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_id" name="QTR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_name" name="QTR_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_id" name="MONTH_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_name" name="MONTH_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_week_in_month" name="WEEK_IN_MONTH"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_day_in_month" name="DAY_IN_MONTH"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_day" name="Day" column="_column_fact_day_in_month" type="TimeDays"/>
  <rolaplev:Level xmi:id="_level_months" name="Months" column="_column_fact_month_name" type="TimeMonths">
    <ordinalColumns xmi:id="_orderedcolumn_month_id" column="_column_fact_month_id"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_years" name="Years" column="_column_fact_year_id" type="TimeYears" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_quarters" name="Quarters" column="_column_fact_qtr_name" type="TimeQuarters">
    <ordinalColumns xmi:id="_orderedcolumn_qtr_id" column="_column_fact_qtr_id"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_week" name="Week" column="_column_fact_week_in_month" type="TimeWeeks"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The time dimension is defined with the one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:TimeDimension xmi:id="_timedimension_time" name="Time" hierarchies="_explicithierarchy_date_key"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_date_key" name="DATE_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_year_id" name="YEAR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_id" name="QTR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_name" name="QTR_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_id" name="MONTH_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_name" name="MONTH_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_week_in_month" name="WEEK_IN_MONTH"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_day_in_month" name="DAY_IN_MONTH"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_day" name="Day" column="_column_fact_day_in_month" type="TimeDays"/>
  <rolaplev:Level xmi:id="_level_months" name="Months" column="_column_fact_month_name" type="TimeMonths">
    <ordinalColumns xmi:id="_orderedcolumn_month_id" column="_column_fact_month_id"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_years" name="Years" column="_column_fact_year_id" type="TimeYears" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_quarters" name="Quarters" column="_column_fact_qtr_name" type="TimeQuarters">
    <ordinalColumns xmi:id="_orderedcolumn_qtr_id" column="_column_fact_qtr_id"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_week" name="Week" column="_column_fact_week_in_month" type="TimeWeeks"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_date_key" allMemberName="All Years" primaryKey="_column_fact_date_key" query="_tablesource_fact" levels="_level_years _level_quarters _level_months _level_week _level_day"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Time_Dimension

The cube with TimeDimension
Time cube have TimeDimension. The role of a level in a time dimension is indicated by the level's levelType attribute, whose allowable values are as follows:

- TimeYears   Level is a year
- TimeQuarters    Level is a quarter
- TimeMonths  Level is a month
- TimeWeeks   Level is a week
- TimeDays    Level represents days


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cubetimedimension" name="CubeTimeDimension" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_time" dimension="_timedimension_time" overrideDimensionName="Time"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_date_key" name="DATE_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_year_id" name="YEAR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_id" name="QTR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_name" name="QTR_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_id" name="MONTH_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_month_name" name="MONTH_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_week_in_month" name="WEEK_IN_MONTH"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_day_in_month" name="DAY_IN_MONTH"/>
  </relational:Table>
  <rolapdim:TimeDimension xmi:id="_timedimension_time" name="Time" hierarchies="_explicithierarchy_date_key"/>
  <rolaplev:Level xmi:id="_level_years" name="Years" column="_column_fact_year_id" type="TimeYears" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_months" name="Months" column="_column_fact_month_name" type="TimeMonths">
    <ordinalColumns xmi:id="_orderedcolumn_month_id" column="_column_fact_month_id"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_quarters" name="Quarters" column="_column_fact_qtr_name" type="TimeQuarters">
    <ordinalColumns xmi:id="_orderedcolumn_qtr_id" column="_column_fact_qtr_id"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_week" name="Week" column="_column_fact_week_in_month" type="TimeWeeks"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_date_key" allMemberName="All Years" primaryKey="_column_fact_date_key" query="_tablesource_fact" levels="_level_years _level_quarters _level_months _level_week _level_day"/>
  <rolaplev:Level xmi:id="_level_day" name="Day" column="_column_fact_day_in_month" type="TimeDays"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_year_id _column_fact_week_in_month _column_fact_value _column_fact_day_in_month" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_qtr_name _column_fact_qtr_id _column_fact_month_id _column_fact_month_name" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_timestamp" name="TIMESTAMP" structuralFeature="_column_fact_date_key" typeNumber="93"/>
  <rolapcat:Catalog xmi:id="_catalog_dimension_time_dimension" description="Time dimension configuration" name="Daanse Tutorial - Dimension Time Dimension" cubes="_physicalcube_cubetimedimension" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_date_key" name="DATE_KEY" type="_sqlsimpletype_timestamp"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_year_id" name="YEAR_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_id" name="QTR_ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_qtr_name" name="QTR_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_month_id" name="MONTH_ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_month_name" name="MONTH_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_week_in_month" name="WEEK_IN_MONTH" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_day_in_month" name="DAY_IN_MONTH" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_years" name="Years" column="_column_fact_year_id" type="TimeYears" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_quarters" name="Quarters" column="_column_fact_qtr_name" type="TimeQuarters">
    <ordinalColumns xmi:id="_orderedcolumn_qtr_id" column="_column_fact_qtr_id"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_week" name="Week" column="_column_fact_week_in_month" type="TimeWeeks"/>
  <rolaplev:Level xmi:id="_level_months" name="Months" column="_column_fact_month_name" type="TimeMonths">
    <ordinalColumns xmi:id="_orderedcolumn_month_id" column="_column_fact_month_id"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_day" name="Day" column="_column_fact_day_in_month" type="TimeDays"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_date_key" allMemberName="All Years" primaryKey="_column_fact_date_key" query="_tablesource_fact" levels="_level_years _level_quarters _level_months _level_week _level_day"/>
  <rolapdim:TimeDimension xmi:id="_timedimension_time" name="Time" hierarchies="_explicithierarchy_date_key"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cubetimedimension" name="CubeTimeDimension" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_time" dimension="_timedimension_time" overrideDimensionName="Time"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimension.timedimension.zip" download>Download Zip File</a>
