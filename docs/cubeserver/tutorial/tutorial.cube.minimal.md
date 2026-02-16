---
title: Cube Minimal
group: Cube
kind: TUTORIAL
number: 2.1
---
# Daanse Tutorial - Cube Minimal

Data cubes are the most important objects in OLAP. Cubes provide access to data related to a specific topic, which corresponds to the cube's name. Within the catalog, each data cube must have a unique name.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table is named `Fact` and contains two columns: `KEY` and `VALUE`. The KEY column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema_minimal">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery, as it directly references the physical table `Fact`. The query element is not visible to users accessing the cube through the XMLA API, such as Daanse Dashboard, Power BI, or Excel.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube, MeasureGroup and Measure

The cube is the element visible to users in analysis tools. A cube is based on elements such as measures, dimensions, hierarchies, KPIs, and named sets. In this case, we only define measures, which are the minimal required elements. The other elements are optional. To link a measure to the cube, we use the `MeasureGroup` element. The `MeasureGroup` is useful for organizing multiple measures into logical groups. Measures are used to define the data that should be aggregated. In this example, the measure is named Measure-Sum and references the `VALUE` column in the Fact table. The measure is aggregated using summation.


```xml
<roma:PhysicalCube   id="_cube_minimal" name="MinimalCube" query="_query_fact">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_minimal" description="Basic cube structure with measures only" name="Daanse Tutorial - Cube Minimal" cubes="_cube_minimal" dbschemas="_databaseSchema_minimal"/>
  <roma:DatabaseSchema id="_databaseSchema_minimal">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:PhysicalCube id="_cube_minimal" name="MinimalCube" query="_query_fact">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.minimal.zip" download>Download Zip File</a>
