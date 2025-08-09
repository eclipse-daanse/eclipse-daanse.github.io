---
title: Minimal Cube with Time_Dimension
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


# catalog with Cube with NamedSets

This tutorial discusses NamedSets.

NsWithFolderDimension1    : NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel. NamedSet have folder
NsWithoutFolderDimension1 : NamedSet use only Dimension1 in formula. By this reason it connected to Dimension1 on excel.
NSInCubeWithFolder        : NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube on excel. NamedSet have folder
NSInCubeWithoutFolder     : NamedSet use Dimension1 and Dimension2 in formula. By this reason it connected to Cube.


## Cube with NamedSets

The Database Schema contains the Fact table with 9 columns: DATE_KEY, YEAR_ID, QTR_ID, QTR_NAME, MONTH_ID, MONTH_NAME, WEEK_IN_MONTH, DAY_IN_MONTH and VALUE.
The DATE_KEY column is used as the discriminator in the Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="_databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_Fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_DATE_KEY" name="DATE_KEY" type="Timestamp"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE" name="VALUE" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_YEAR_ID" name="YEAR_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_QTR_ID" name="QTR_ID"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_QTR_NAME" name="QTR_NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_MONTH_ID" name="MONTH_ID"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_MONTH_NAME" name="MONTH_NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_WEEK_IN_MONTH" name="WEEK_IN_MONTH" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_DAY_IN_MONTH" name="DAY_IN_MONTH" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the Fact table to use in in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_FactQuery" table="_Fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelYears

This Example uses Years level bases on the YEAR_ID column and has TIME_YEARS type.


```xml
<roma:Level  id="_Years" name="Years" column="_Fact_YEAR_ID" type="TimeYears" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelQuarters

This Example uses Quarters level bases on the QTR_ID column and has TIME_QUARTERS type with name column QTR_NAME.


```xml
<roma:Level  id="_Quarters" name="Quarters" column="_Fact_QTR_NAME" type="TimeQuarters" ordinalColumn="roma:PhysicalColumn _Fact_QTR_ID"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelMonths

This Example uses Months level bases on the MONTH_ID column and has TIME_MONTHS type with name column MONTH_NAME.


```xml
<roma:Level  id="_Months" name="Months" column="_Fact_MONTH_NAME" type="TimeMonths" ordinalColumn="roma:PhysicalColumn _Fact_MONTH_ID"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelWeek

This Example uses Week level bases on the MONTH_ID column and has TIME_WEEKS type.


```xml
<roma:Level  id="_Week" name="Week" column="_Fact_WEEK_IN_MONTH" type="TimeWeeks"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LevelDay

This Example uses Week level bases on the MONTH_ID column and has TIME_DAYS type.


```xml
<roma:Level  id="_Day" name="Day" column="_Fact_DAY_IN_MONTH" type="TimeDays"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

The Hierarchy1 is defined with the hasAll property set to false and the one level2.


```xml
<roma:ExplicitHierarchy  id="_hierarchy" allMemberName="All Years" primaryKey="_Fact_DATE_KEY" query="_FactQuery" levels="_Years _Quarters _Months _Week _Day"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The time dimension is defined with the one hierarchy.


```xml
<roma:TimeDimension  id="_TimeDimension" name="Time" hierarchies="roma:ExplicitHierarchy _hierarchy"/>

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
<roma:PhysicalCube   id="_CubeTimeDimension" name="CubeTimeDimension" query="_FactQuery">
  <dimensionConnectors dimension="roma:TimeDimension _TimeDimension" overrideDimensionName="Time"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_Measure-Sum" name="Measure-Sum" column="_Fact_VALUE"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy" allMemberName="All Years" primaryKey="_Fact_DATE_KEY" query="_FactQuery" levels="_Years _Quarters _Months _Week _Day"/>
  <roma:Catalog description="Schema with cube with Time Dimension" name="Minimal Cube with Time_Dimension" cubes="_CubeTimeDimension" dbschemas="_databaseSchema"/>
  <roma:DatabaseSchema id="_databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_DATE_KEY" name="DATE_KEY" type="Timestamp"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_YEAR_ID" name="YEAR_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_QTR_ID" name="QTR_ID"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_QTR_NAME" name="QTR_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_MONTH_ID" name="MONTH_ID"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_MONTH_NAME" name="MONTH_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_WEEK_IN_MONTH" name="WEEK_IN_MONTH" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_DAY_IN_MONTH" name="DAY_IN_MONTH" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_FactQuery" table="_Fact"/>
  <roma:Level id="_Day" name="Day" column="_Fact_DAY_IN_MONTH" type="TimeDays"/>
  <roma:Level id="_Months" name="Months" column="_Fact_MONTH_NAME" type="TimeMonths" ordinalColumn="_Fact_MONTH_ID"/>
  <roma:Level id="_Quarters" name="Quarters" column="_Fact_QTR_NAME" type="TimeQuarters" ordinalColumn="_Fact_QTR_ID"/>
  <roma:Level id="_Week" name="Week" column="_Fact_WEEK_IN_MONTH" type="TimeWeeks"/>
  <roma:Level id="_Years" name="Years" column="_Fact_YEAR_ID" type="TimeYears" uniqueMembers="true"/>
  <roma:TimeDimension id="_TimeDimension" name="Time" hierarchies="_hierarchy"/>
  <roma:PhysicalCube id="_CubeTimeDimension" name="CubeTimeDimension" query="_FactQuery">
    <dimensionConnectors dimension="_TimeDimension" overrideDimensionName="Time"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_Measure-Sum" name="Measure-Sum" column="_Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimension.timedimension.zip" download>Download Zip File</a>
