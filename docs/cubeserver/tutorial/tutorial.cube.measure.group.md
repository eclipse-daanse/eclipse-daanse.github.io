---
title: Cube - Measures and MeasureGroups
group: Measure
kind: TUTORIAL
number: 2.2.5
---
# Cube - Measures and MeasureGroup

In cases where you need a better overview of all measures, want to provide additional context for a `Measure`, or need to organize a list of measures, you can use a `MeasureGroup`.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`. The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```

## Query

This example uses a TableQuery, as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_query" table="roma:PhysicalTable _tab"/>

```

## Grouping Measures

A `MeasureGroup` is a logical container designed to group related measures. Each `MeasureGroup` can have a  name. Names must be unique within the `Cube`. `Measure` only can be in `Cube`s if they are contained in `MeasureGroup`s. In this example we group all alphabetic measures in one group and all other measures in another group.


```xml
<roma:PhysicalCube   id="_cube" name="MeasureGroupCube" query="roma:TableQuery _query">
  <measureGroups name="Group Alphabetic">
    <measures xsi:type="roma:SumMeasure" id="_measure1" name="Measure A" column="roma:PhysicalColumn _col"/>
    <measures xsi:type="roma:SumMeasure" id="_measure2" name="Measure B" column="roma:PhysicalColumn _col"/>
  </measureGroups>
  <measureGroups name="Group Other">
    <measures xsi:type="roma:SumMeasure" id="_measure3" name="Measure 1" column="roma:PhysicalColumn _col"/>
  </measureGroups>
</roma:PhysicalCube>

```


## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog name="Cube - Measures and MeasureGroups" cubes="_cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query" table="_tab"/>
  <roma:PhysicalCube id="_cube" name="MeasureGroupCube" query="_query">
    <measureGroups name="Group Alphabetic">
      <measures xsi:type="roma:SumMeasure" id="_measure1" name="Measure A" column="_col"/>
      <measures xsi:type="roma:SumMeasure" id="_measure2" name="Measure B" column="_col"/>
    </measureGroups>
    <measureGroups name="Group Other">
      <measures xsi:type="roma:SumMeasure" id="_measure3" name="Measure 1" column="_col"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.group.zip" download>Download Zip File</a>
