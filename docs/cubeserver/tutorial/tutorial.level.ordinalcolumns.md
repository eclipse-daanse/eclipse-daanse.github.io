---
title: Levels with ordinal columns
group: Level
kind: TUTORIAL
number: 2.14.06
---
# Daanse Tutorial - Levels with ordinal columns

This Tutorial shows how to use Ordinal columns in levels. This Tutorial shows `Country` with sorting ascending and `Town` with sorting descending
Ordinal columns parameter can to use with multiple columns. in this case, sorting occurs by several columns
OrderedColumn is typically used in OLAP contexts where explicit column ordering is required for query processing or result presentation.


## Database Schema

The cube defined in this example is based on one table. The `Fact` table contains a columns the name of the `Town` and the `Country`.


```xml
<roma:DatabaseSchema   id="_databaseSchema_main">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_country" name="COUNTRY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The TableQuery for the Levels and the Measure.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level town

The level of the `Town` used the `column` attribute to define the column that holds the name, which is also the key Column.


```xml
<roma:Level  id="_level_town" name="Town" column="_column_fact_key"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level country

The level  of the `Country` used the `column` attribute to define the column that holds the name, which is also the key Column.


```xml
<roma:Level  id="_level_country" name="Country" column="_column_fact_country"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Ordered Column Country

OrderedColumn for level country. OrderedColumn use ascending sorting by country name


```xml
<roma:OrderedColumn  id="_ordered_column_country" column="_column_fact_country"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Ordered Column Town

OrderedColumn for level town. OrderedColumn use ascending sorting by town name


```xml
<roma:OrderedColumn  id="_ordered_column_town" column="_column_fact_key" direction="Desc"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This Hierarchy contains both defined levels. The `primaryKey` attribute defines the column that contains the primary key of the hierarchy. The `query` attribute references to the query that will be used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_countryHierarchy" name="CountryHierarchy" primaryKey="_column_fact_key" query="_query_fact" levels="_level_country _level_town"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dimension_country" name="Country" hierarchies="roma:ExplicitHierarchy _hierarchy_countryHierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.

To connect the dimension to the cube, a DimensionConnector is used.


```xml
<roma:PhysicalCube   id="_cube_with_ordinal_columns" name="Cube with ordinal columns" query="_query_fact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_country" dimension="roma:StandardDimension _dimension_country" id="_dimensionConnector_country"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_theMeasure" name="theMeasure" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Levels with ordinal columns" name="Daanse Tutorial - Levels with ordinal columns" cubes="_cube_with_ordinal_columns" dbschemas="_databaseSchema_main"/>
  <roma:DatabaseSchema id="_databaseSchema_main">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_country" name="COUNTRY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:Level id="_level_country" name="Country" column="_column_fact_country">
    <ordinalColumns id="_ordered_column_country" column="_column_fact_country"/>
  </roma:Level>
  <roma:Level id="_level_town" name="Town" column="_column_fact_key">
    <ordinalColumns id="_ordered_column_town" column="_column_fact_key" direction="Desc"/>
  </roma:Level>
  <roma:ExplicitHierarchy id="_hierarchy_countryHierarchy" name="CountryHierarchy" primaryKey="_column_fact_key" query="_query_fact" levels="_level_country _level_town"/>
  <roma:StandardDimension id="_dimension_country" name="Country" hierarchies="_hierarchy_countryHierarchy"/>
  <roma:PhysicalCube id="_cube_with_ordinal_columns" name="Cube with ordinal columns" query="_query_fact">
    <dimensionConnectors foreignKey="_column_fact_country" dimension="_dimension_country" id="_dimensionConnector_country"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_theMeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.level.ordinalcolumns.zip" download>Download Zip File</a>
