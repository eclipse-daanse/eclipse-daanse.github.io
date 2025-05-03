---
title: Cube - Measures and Formats
group: Measure
kind: TUTORIAL
number: 2.2.4
---
# Measures Formats

Depending on the measure, it may be necessary to format its values appropriately.


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

## Formats on Measures

In this example, multiple measures are defined. All measures reference the `VALUE` column and use the following Formats functions:
- `#,##0.00` – value with two decimal places and includes a comma as the thousands separator.
- `#,##0` – value without decimal places and includes a comma as the thousands separator.
- `#,##0.` – value with one decimal place and includes a comma as the thousands separator.


```xml
<roma:PhysicalCube   id="_cube" name="MeasuresFormatCube" query="roma:TableQuery _query">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure1" name="Format ,##0.00" formatString=",##0.00" column="roma:PhysicalColumn _col"/>
    <measures xsi:type="roma:SumMeasure" id="_measure2" name="Format ,##0" formatString=",##0" column="roma:PhysicalColumn _col"/>
    <measures xsi:type="roma:SumMeasure" id="_measure3" name="Format ,##0." formatString=",##0." column="roma:PhysicalColumn _col"/>
  </measureGroups>
</roma:PhysicalCube>

```

## Further Formats

General Number Formats
- `#,##0` – Displays numbers with thousand separators (e.g., `1,234`).
- `#,##0.00` – Displays numbers with two decimal places and thousand separators (e.g., `1,234.56`).
- `0` – Displays whole numbers without decimal places (e.g., `1234`).
- `0.00` – Displays numbers with exactly two decimal places (e.g., `1234.56`).

Currency Formats
- `$#,##0.00` – Displays numbers as currency with two decimal places (e.g., `$1,234.56`).
- `€#,##0.00` – Displays numbers as Euro currency with two decimal places (e.g., `€1,234.56`).
- `¤#,##0.00` – Uses the system's default currency symbol (e.g., `£1,234.56` or `¥1,234.56`).

Percentage Formats
- `0%` – Displays whole-number percentages (e.g., `75%` instead of `0.75`).
- `0.00%` – Displays percentages with two decimal places (e.g., `75.50%`).
- `#,##0.00%` – Displays percentages with thousand separators and two decimal places (e.g., `1,234.50%`).

Scientific Notation
- `0.00E+00` – Displays numbers in scientific notation (e.g., `1.23E+03` for `1230`).
- `##0.###E+0` – Displays scientific notation without unnecessary zeros (e.g., `1.23E3`).

Date & Time Formats
- `yyyy-MM-dd` – Formats as a standard date (e.g., `2025-03-14`).
- `MM/dd/yyyy` – Formats as a U.S. date (e.g., `03/14/2025`).
- `dd.MM.yyyy` – Formats as a European date (e.g., `14.03.2025`).
- `hh:mm:ss` – Displays time in hours, minutes, and seconds (e.g., `14:30:15`).
- `yyyy-MM-dd hh:mm:ss` – Displays full date and time (e.g., `2025-03-14 14:30:15`).

Custom Text & Symbol Formats
- `"Value: " #,##0` – Adds custom text before a number (e.g., `Value: 1,234`).
- `#,##0 "units"` – Adds a text suffix (e.g., `1,234 units`).
- `[Red]#,##0;[Blue]-#,##0` – Colors positive numbers red and negative numbers blue.



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog name="Cube - Measures and Formats" cubes="_cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query" table="_tab"/>
  <roma:PhysicalCube id="_cube" name="MeasuresFormatCube" query="_query">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure1" name="Format #,##0.00" formatString="#,##0.00" column="_col"/>
      <measures xsi:type="roma:SumMeasure" id="_measure2" name="Format #,##0" formatString="#,##0" column="_col"/>
      <measures xsi:type="roma:SumMeasure" id="_measure3" name="Format #,##0." formatString="#,##0." column="_col"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.format.zip" download>Download Zip File</a>
