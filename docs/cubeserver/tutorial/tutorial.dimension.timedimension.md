---
title: Daanse Tutorial - Dimension Time Dimension
group: Dimension
kind: TUTORIAL
number: 2.9.1
---
Time dimensions based on year/month/week/day are coded differently in the catalog due to the MDX time related functions such as:

ParallelPeriod([level[, index[, member]]])
PeriodsToDate([level[, member]])
WTD([member])
MTD([member])
QTD([member])
YTD([member])
LastPeriod(index[, member])

Cube have TimeDimension. The role of a level in a time dimension is indicated by the level's levelType attribute, whose allowable values are as follows:

TimeYears   Level is a year
TimeQuarters    Level is a quarter
TimeMonths  Level is a month
TimeWeeks   Level is a week
TimeDays    Level represents days


# catalog with Cube with Time Dimensions

This tutorial discusses NamedSets.

NsWithFolderDimension1    : NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel. NamedSet have folder
NsWithoutFolderDimension1 : NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel.
NSInCubeWithFolder        : NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube on excel. NamedSet have folder
NSInCubeWithoutFolder     : NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube.


## Database Schema

The Database Schema contains the Fact table with 9 columns: DATE_KEY, YEAR_ID, QTR_ID, QTR_NAME, MONTH_ID, MONTH_NAME, WEEK_IN_MONTH, DAY_IN_MONTH and VALUE.
The DATE_KEY column is used as the discriminator in the Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="_databaseSchema_timeDimension">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dateKey" name="DATE_KEY" type="Timestamp"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_yearId" name="YEAR_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_qtrId" name="QTR_ID"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_qtrName" name="QTR_NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_monthId" name="MONTH_ID"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_monthName" name="MONTH_NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_weekInMonth" name="WEEK_IN_MONTH" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dayInMonth" name="DAY_IN_MONTH" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the Fact table to use in in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelYears

This Example uses Years level bases on the YEAR_ID column and has TIME_YEARS type.


```xml
<roma:Level  id="_level_years" name="Years" column="_column_fact_yearId" type="TimeYears" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelQuarters

This Example uses Quarters level bases on the QTR_ID column and has TIME_QUARTERS type with name column QTR_NAME.


```xml
<roma:Level  id="_level_quarters" name="Quarters" column="_column_fact_qtrName" type="TimeQuarters" ordinalColumn="roma:PhysicalColumn _column_fact_qtrId"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelMonths

This Example uses Months level bases on the MONTH_ID column and has TIME_MONTHS type with name column MONTH_NAME.


```xml
<roma:Level  id="_level_months" name="Months" column="_column_fact_monthName" type="TimeMonths" ordinalColumn="roma:PhysicalColumn _column_fact_monthId"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelWeek

This Example uses Week level bases on the MONTH_ID column and has TIME_WEEKS type.


```xml
<roma:Level  id="_level_week" name="Week" column="_column_fact_weekInMonth" type="TimeWeeks"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelDay

This Example uses Week level bases on the MONTH_ID column and has TIME_DAYS type.


```xml
<roma:Level  id="_level_day" name="Day" column="_column_fact_dayInMonth" type="TimeDays"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

The Hierarchy1 is defined with the hasAll property set to false and the one level2.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_time" allMemberName="All Years" primaryKey="_column_fact_dateKey" query="_query_fact" levels="_level_years _level_quarters _level_months _level_week _level_day"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The time dimension is defined with the one hierarchy.


```xml
<roma:TimeDimension  id="_dimension_time" name="Time" hierarchies="roma:ExplicitHierarchy _hierarchy_time"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Time_Dimension

The cube with TimeDimension
Time cube have TimeDimension. The role of a level in a time dimension is indicated by the level's levelType attribute, whose allowable values are as follows:

TimeYears   Level is a year
TimeQuarters    Level is a quarter
TimeMonths  Level is a month
TimeWeeks   Level is a week
TimeDays    Level represents days


```xml
<roma:PhysicalCube   id="_cube_timeDimension" name="CubeTimeDimension" query="_query_fact">
  <dimensionConnectors dimension="roma:TimeDimension _dimension_time" overrideDimensionName="Time" id="_dimensionConnector_time"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy_time" allMemberName="All Years" primaryKey="_column_fact_dateKey" query="_query_fact" levels="_level_years _level_quarters _level_months _level_week _level_day"/>
  <roma:Catalog description="Time dimension configuration" name="Daanse Tutorial - Dimension Time Dimension" cubes="_cube_timeDimension" dbschemas="_databaseSchema_timeDimension"/>
  <roma:DatabaseSchema id="_databaseSchema_timeDimension">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dateKey" name="DATE_KEY" type="Timestamp"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_yearId" name="YEAR_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_qtrId" name="QTR_ID"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_qtrName" name="QTR_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_monthId" name="MONTH_ID"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_monthName" name="MONTH_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_weekInMonth" name="WEEK_IN_MONTH" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dayInMonth" name="DAY_IN_MONTH" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:Level id="_level_years" name="Years" column="_column_fact_yearId" type="TimeYears" uniqueMembers="true"/>
  <roma:Level id="_level_week" name="Week" column="_column_fact_weekInMonth" type="TimeWeeks"/>
  <roma:Level id="_level_quarters" name="Quarters" column="_column_fact_qtrName" type="TimeQuarters" ordinalColumn="_column_fact_qtrId"/>
  <roma:Level id="_level_day" name="Day" column="_column_fact_dayInMonth" type="TimeDays"/>
  <roma:Level id="_level_months" name="Months" column="_column_fact_monthName" type="TimeMonths" ordinalColumn="_column_fact_monthId"/>
  <roma:TimeDimension id="_dimension_time" name="Time" hierarchies="_hierarchy_time"/>
  <roma:PhysicalCube id="_cube_timeDimension" name="CubeTimeDimension" query="_query_fact">
    <dimensionConnectors dimension="_dimension_time" overrideDimensionName="Time" id="_dimensionConnector_time"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimension.timedimension.zip" download>Download Zip File</a>
