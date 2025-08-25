---
title: Virtual Cube Dimensions
group: VirtualCube
kind: TUTORIAL
number: 2.15.2
---
# Daanse Tutorial - Virtual Cube Dimensions

Cube with virtual cube with dimension references from other cubes
A virtual cube that combines measures and dimensions from multiple physical cubes into a unified analytical view.
Virtual cubes enable cross-cube analysis by creating a logical integration layer over existing physical cubes,
allowing users to analyze related metrics from different business processes in a single query
Catalog have two physical cubes Cube1 and Cube2 and virtual cube Cube1Cube2.


## Database Schema

The cube defined in this example is based on a table that stores all the data.
The table is named `Fact` uses for Cube1 and contains two columns: `KEY` and `VALUE`.
The KEY column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema_dimensions">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_table_factQuery" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## MeasureCube1

        Measure use C1_Fact table VALUE column with sum aggregation in Cube1.


```xml
<roma:SumMeasure  id="_measurecube1" name="MeasureCube1" column="_column_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## MeasureCube2

        Measure use Fact table VALUE column with sum aggregation in Cube2.


```xml
<roma:SumMeasure  id="_measurecube2" name="MeasureCube2" column="_column_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1

In this example uses cube with fact table Fact as data.


```xml
<roma:PhysicalCube   id="_cube1" name="Cube1" query="_table_factQuery">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_key" dimension="roma:StandardDimension _dimension1" overrideDimensionName="Cube1Dimension1" id="_dc_cube1Dimension1"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measurecube1" name="MeasureCube1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1

In this example uses cube with fact table Fact as data.


```xml
<roma:PhysicalCube   id="_cube1" name="Cube1" query="_table_factQuery">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_key" dimension="roma:StandardDimension _dimension1" overrideDimensionName="Cube1Dimension1" id="_dc_cube1Dimension1"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measurecube1" name="MeasureCube1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## VirtualCubeMeasureOnly

Virtual cube uses mesures from Cube1 and Cube2. Virtual cube has references for them.
Also virtual cube has references to dimensions from Cube1 and Cube2


```xml
<roma:VirtualCube  id="_cube1cube2" name="Cube1Cube2" defaultMeasure="roma:SumMeasure _measurecube1" dimensionConnectors="_dc_cube1Dimension1 _dc_cube2Dimension1" referencedMeasures="roma:SumMeasure _measurecube1 roma:SumMeasure _measurecube2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchywithouthasall" name="HierarchyWithoutHasAll" hasAll="false" primaryKey="_column_fact_key" query="_table_factQuery" levels="_level"/>
  <roma:Catalog description="Dimension configuration in virtual cubes" name="Daanse Tutorial - Virtual Cube Dimensions" cubes="_cube1 _cube2 _cube1cube2" dbschemas="_databaseSchema_dimensions"/>
  <roma:DatabaseSchema id="_databaseSchema_dimensions">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_table_factQuery" table="_table_fact"/>
  <roma:Level id="_level" name="Level" column="_column_fact_key"/>
  <roma:StandardDimension id="_dimension1" name="Dimension1" hierarchies="_hierarchywithouthasall"/>
  <roma:PhysicalCube id="_cube1" name="Cube1" query="_table_factQuery">
    <dimensionConnectors foreignKey="_column_fact_key" dimension="_dimension1" overrideDimensionName="Cube1Dimension1" id="_dc_cube1Dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measurecube1" name="MeasureCube1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube2" name="Cube2" query="_table_factQuery">
    <dimensionConnectors foreignKey="_column_fact_key" dimension="_dimension1" overrideDimensionName="Cube2Dimension1" id="_dc_cube2Dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measurecube2" name="MeasureCube2" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:VirtualCube id="_cube1cube2" name="Cube1Cube2" defaultMeasure="_measurecube1" dimensionConnectors="_dc_cube1Dimension1 _dc_cube2Dimension1" referencedMeasures="_measurecube1 _measurecube2"/>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.virtualcube.dimensions.zip" download>Download Zip File</a>
