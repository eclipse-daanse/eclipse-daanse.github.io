---
title: Cube - Measures and Datatypes
group: Measure
kind: TUTORIAL
number: 2.2.3
---
# Measures Formats

Measures are based on the Columns that store the date of the measurements. The datatype of the column in the database must not match the datatype that schould be used for calculating the Measures value.


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

## Defining the Data Type of a Measure

When changing the data type of a measure, the optional `datatype` attribute of the `Measure` element can be used.

The following data types are supported:

- `String` – Represents textual data.
- `Numeric` – Represents floating-point numbers.
- `Integer` – Represents whole numbers.
- `Boolean` – Represents `true` or `false` values.
- `Date` – Represents a calendar date.
- `Time` – Represents a time of day.
- `Timestamp` – Represents a combination of date and time.

If the `datatype` attribute is not explicitly defined, the data type is determined based on the aggregation method used:

- If the `count` or `distinct-count` aggregator is used, the data type defaults to `Integer`.
- If any other aggregator is used, the data type defaults to `Numeric`.


```xml
<roma:PhysicalCube   id="_cube" name="MeasuresDatatypeCube" query="roma:TableQuery _query">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure1" name="Measure - Datatype Integer" dataType="Integer" column="roma:PhysicalColumn _col"/>
    <measures xsi:type="roma:SumMeasure" id="_measure2" name="Measure - Datatype Numeric" dataType="Numeric" column="roma:PhysicalColumn _col"/>
  </measureGroups>
</roma:PhysicalCube>

```


## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog name="Cube - Measures and Datatypes" cubes="_cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query" table="_tab"/>
  <roma:PhysicalCube id="_cube" name="MeasuresDatatypeCube" query="_query">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure1" name="Measure - Datatype Integer" dataType="Integer" column="_col"/>
      <measures xsi:type="roma:SumMeasure" id="_measure2" name="Measure - Datatype Numeric" dataType="Numeric" column="_col"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.datatype.zip" download>Download Zip File</a>
