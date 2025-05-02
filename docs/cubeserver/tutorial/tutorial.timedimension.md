---
title: Minimal_Cube_with_Time_Dimension
group: Unstrutured
kind: other
number: z0
---
Time dimensions based on year/month/week/day are coded differently in the Mondrian schema due to the MDX time related functions such as:

ParallelPeriod([level[, index[, member]]])
PeriodsToDate([level[, member]])
WTD([member])
MTD([member])
QTD([member])
YTD([member])
LastPeriod(index[, member])

Time dimensions have type="TimeDimension". The role of a level in a time dimension is indicated by the level's levelType attribute, whose allowable values are as follows:

TimeYears   Level is a year
TimeQuarters    Level is a quarter
TimeMonths  Level is a month
TimeWeeks   Level is a week
TimeDays    Level represents days



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema with cube with Time Dimension" name="Minimal_Cube_with_Time_Dimension" cubes="CubeTimeDimension" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_DATE_KEY" name="DATE_KEY" type="Timestamp"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:PhysicalColumn id="Fact_MONTH_ID" name="MONTH_ID"/>
  <roma:PhysicalColumn id="Fact_YEAR_ID" name="YEAR_ID" type="Integer"/>
  <roma:PhysicalColumn id="Fact_WEEK_IN_MONTH" name="WEEK_IN_MONTH" type="Integer"/>
  <roma:PhysicalColumn id="Fact_DAY_IN_MONTH" name="DAY_IN_MONTH" type="Integer"/>
  <roma:PhysicalColumn id="Fact_QTR_ID" name="QTR_ID"/>
  <roma:PhysicalColumn id="Fact_MONTH_NAME" name="MONTH_NAME"/>
  <roma:PhysicalColumn id="Fact_QTR_NAME" name="QTR_NAME"/>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:Level id="Months" name="Months" column="Fact_MONTH_NAME" type="TimeMonths" ordinalColumn="Fact_MONTH_ID"/>
  <roma:Level id="Week" name="Week" column="Fact_WEEK_IN_MONTH" type="TimeWeeks"/>
  <roma:Level id="Years" name="Years" column="Fact_YEAR_ID" type="TimeYears" uniqueMembers="true"/>
  <roma:Level id="Day" name="Day" column="Fact_DAY_IN_MONTH" type="TimeDays"/>
  <roma:Level id="Quarters" name="Quarters" column="Fact_QTR_NAME" type="TimeQuarters" ordinalColumn="Fact_QTR_ID"/>
  <roma:Hierarchy id="hierarchy" levels="Years Quarters Months Week Day" allMemberName="All Years" hasAll="true" primaryKey="Fact_DATE_KEY" query="FactQuery"/>
  <roma:TimeDimension id="Time" name="Time" hierarchies="hierarchy"/>
  <roma:PhysicalCube id="CubeTimeDimension" name="CubeTimeDimension" query="FactQuery">
    <dimensionConnectors dimension="Time" overrideDimensionName="Time"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure-Sum" name="Measure-Sum" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.timedimension.zip" download>Download Zip File</a>
