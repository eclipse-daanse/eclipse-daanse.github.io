---
title: Minimal_Cubes_With_KPI_all_Properties
group: Unstrutured
kind: other
number: z0
---
A minimal cube with Kpi with all kpi properties





## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Minimal Cubes With KPI with all properties" name="Minimal_Cubes_With_KPI_all_Properties" cubes="CubeKPI" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE_NUMERIC" name="VALUE_NUMERIC" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:PhysicalCube id="CubeKPI" name="CubeKPI" query="FactQuery">
    <calculatedMembers id="CalculatedValue" name="CalculatedValue" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers id="CalculatedGoal" name="CalculatedGoal" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers id="CalculatedStatus" name="CalculatedStatus" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <calculatedMembers id="CalculatedTrend" name="CalculatedTrend" visible="false" formula="[Measures].[Measure1-Sum] / [Measures].[Measure2-Count]"/>
    <kpis id="Kpi1" description="Kpi with all parameters" name="Kpi1" displayFolder="Kpi1Folder1\Kpi1Folder2" associatedMeasureGroupID="Kpi1MeasureGroupID" value="[Measures].[CalculatedValue]" goal="[Measures].[CalculatedGoal]" status="[Measures].[CalculatedStatus]" trend="[Measures].[CalculatedTrend]" weight="[Measures].[CalculatedValue]" trendGraphic="Smiley Face" statusGraphic="Cylinder" currentTimeMember="[Measures].[CalculatedValue]"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1-Sum" name="Measure1-Sum" column="Fact_VALUE"/>
      <measures xsi:type="roma:CountMeasure" id="Measure2-Count" name="Measure2-Count" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.kpiall.zip" download>Download Zip File</a>
