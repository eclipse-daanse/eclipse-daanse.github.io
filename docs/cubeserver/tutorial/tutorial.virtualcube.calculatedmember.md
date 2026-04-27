---
title: Virtual Cube Calculated Member
group: VirtualCube
kind: TUTORIAL
number: 2.15.03
---
# Daanse Tutorial - Virtual Cube Calculated Member

Cube with virtual cube with dimension references from other cubes and with calculatedMember
A virtual cube that combines measures and dimensions from multiple physical cubes into a unified analytical view.
Virtual cubes enable cross-cube analysis by creating a logical integration layer over existing physical cubes,
allowing users to analyze related metrics from different business processes in a single query
Catalog have two physical cubes Cube1 and Cube2 and virtual cube Cube1Cube2.
CalculatedMember from virtual cube uses MeasureCube1 from Cube1 and MeasureCube2 from Cube2 in formula.


## Database Schema

The cube defined in this example is based on a table that stores all the data.
The table is named `Fact` uses for Cube1 and contains two columns: `KEY` and `VALUE`.
The `KEY` column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## MeasureCube1

Measure uses C1_Fact table VALUE column with sum aggregation in Cube1.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_measurecube1" name="MeasureCube1">
  <column href="_column_fact_value"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## MeasureCube2

Measure uses `Fact` table `VALUE` column with sum aggregation in Cube2.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_measurecube2" name="MeasureCube2">
  <column href="_column_fact_value"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sum_Cub

CalculatedMember uses MeasureCube1 from Cube1 and MeasureCube2 from Cube2 in formula.


```xml
<rolaplev:CalculatedMember xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_calculatedmember_sum_cub1" name="Sum_Cub1" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube1]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1

In this example uses cube with fact table `Fact` as data.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_sum_cub1" name="Sum_Cub1" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube1]"/>
    <dimensionConnectors xmi:id="_dimensionconnector_cube1dimension1" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Cube1Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measurecube1" name="MeasureCube1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithouthasall" name="HierarchyWithoutHasAll" hasAll="false" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level"/>
  <rolaplev:Level xmi:id="_level_level" name="Level" column="_column_fact_key"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchywithouthasall"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1

In this example uses cube with fact table `Fact` as data.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_sum_cub1" name="Sum_Cub1" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube1]"/>
    <dimensionConnectors xmi:id="_dimensionconnector_cube1dimension1" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Cube1Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measurecube1" name="MeasureCube1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithouthasall" name="HierarchyWithoutHasAll" hasAll="false" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level"/>
  <rolaplev:Level xmi:id="_level_level" name="Level" column="_column_fact_key"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchywithouthasall"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## VirtualCubeMeasureOnly

Virtual cube uses mesures from Cube1 and Cube2. Virtual cube has references for them.
Also virtual cube has references to dimensions from Cube1 and Cube2


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:VirtualCube xmi:id="_virtualcube_cube1cube2" name="Cube1Cube2">
    <calculatedMembers xmi:id="_calculatedmember_sum_cub" name="Sum_Cub" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="_explicithierarchy_hierarchywithouthasall"/>
    <dimensionConnectors href="_dimensionconnector_cube1dimension1"/>
    <dimensionConnectors href="_dimensionconnector_cube2dimension1"/>
    <referencedCalculatedMembers href="_calculatedmember_sum_cub1"/>
    <referencedCalculatedMembers href="_calculatedmember_sum_cub2"/>
    <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_measurecube1"/>
    <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_measurecube2"/>
  </rolapcube:VirtualCube>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithouthasall" name="HierarchyWithoutHasAll" hasAll="false" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level"/>
  <rolaplev:Level xmi:id="_level_level" name="Level" column="_column_fact_key"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
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
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_virtual_cube_calculated_member" description="Calculated members in virtual cubes" name="Daanse Tutorial - Virtual Cube Calculated Member" cubes="_physicalcube_cube1 _physicalcube_cube2 _virtualcube_cube1cube2" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level" name="Level" column="_column_fact_key"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithouthasall" name="HierarchyWithoutHasAll" hasAll="false" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchywithouthasall"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_sum_cub1" name="Sum_Cub1" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube1]"/>
    <dimensionConnectors xmi:id="_dimensionconnector_cube1dimension1" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Cube1Dimension1"/>
    <measureGroups xmi:id="_measuregroup_1">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measurecube1" name="MeasureCube1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube2" name="Cube2" query="_tablesource_fact">
    <calculatedMembers xmi:id="_calculatedmember_sum_cub2" name="Sum_Cub2" formula="[Measures].[MeasureCube2] + [Measures].[MeasureCube2]"/>
    <dimensionConnectors xmi:id="_dimensionconnector_cube2dimension1" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Cube2Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measurecube2" name="MeasureCube2" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:VirtualCube xmi:id="_virtualcube_cube1cube2" name="Cube1Cube2" dimensionConnectors="_dimensionconnector_cube1dimension1 _dimensionconnector_cube2dimension1" referencedCalculatedMembers="_calculatedmember_sum_cub1 _calculatedmember_sum_cub2" referencedMeasures="_summeasure_measurecube1 _summeasure_measurecube2">
    <calculatedMembers xmi:id="_calculatedmember_sum_cub" name="Sum_Cub" formula="[Measures].[MeasureCube1] + [Measures].[MeasureCube2]" hierarchy="_explicithierarchy_hierarchywithouthasall"/>
  </rolapcube:VirtualCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.virtualcube.calculatedmember.zip" download>Download Zip File</a>
