---
title: Cube - Measures Multiple
group: Measure
kind: TUTORIAL
number: 2.2.2
---
# Multiple Measures

Data cubes can have multiple measures to provide different data related to the cube's topic. This is particularly useful when aggregating different data columns within the same cube.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named Fact, contains four columns: KEY, VALUE1, VALUE2, and VALUE3. The KEY column acts as a discriminator, while the VALUE1, VALUE2, and VALUE3 columns contain the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_value1" name="VALUE1" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_value2" name="VALUE2" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_value3" name="VALUE3" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```

## Query

This example uses a TableQuery, as it directly references the physical table Fact.


```xml
<roma:TableQuery  id="_query" table="roma:PhysicalTable _tab"/>

```

## Measures

In this example, multiple measures are defined:
- The first measure references the `VALUE1` column.
- The second measure references the `VALUE2` column.
- The third measure references the `VALUE3` column.
All measures use sum aggregation.


```xml
<roma:PhysicalCube   id="_cube" name="MultipleMeasuresCube" defaultMeasure="roma:SumMeasure _measure3" query="roma:TableQuery _query">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure1" name="Sum of Value1" column="roma:PhysicalColumn _col_value1"/>
    <measures xsi:type="roma:SumMeasure" id="_measure2" name="Sum of Value2" column="roma:PhysicalColumn _col_value2"/>
    <measures xsi:type="roma:SumMeasure" id="_measure3" name="Sum of Value3" column="roma:PhysicalColumn _col_value3"/>
  </measureGroups>
</roma:PhysicalCube>

```

## DefaultMeasure

Specifying `defaultMeasure` in the `Cube` element allows users to explicitly set a base measure as the default. If `defaultMeasure` is not specified, the first measure in the list is automatically considered the default measure.



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog name="Cube - Measures Multiple" cubes="_cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_value1" name="VALUE1" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_value2" name="VALUE2" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_value3" name="VALUE3" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query" table="_tab"/>
  <roma:PhysicalCube id="_cube" name="MultipleMeasuresCube" defaultMeasure="_measure3" query="_query">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure1" name="Sum of Value1" column="_col_value1"/>
      <measures xsi:type="roma:SumMeasure" id="_measure2" name="Sum of Value2" column="_col_value2"/>
      <measures xsi:type="roma:SumMeasure" id="_measure3" name="Sum of Value3" column="_col_value3"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.multiple.zip" download>Download Zip File</a>
