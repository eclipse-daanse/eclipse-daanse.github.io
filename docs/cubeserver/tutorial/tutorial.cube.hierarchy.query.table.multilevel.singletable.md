---
title: Query based on all in one Table
group: Hierarchy
kind: TUTORIAL
number: 2.3.2.3
---
# Hierarchy - Query based on all in one Table

In some cases, all data are stored in one table, the fact as well as multiple levels. This Tutorial shows how to handle this case.


## Database Schema

The cube defined in this example is based on only one tables. The Fact table contains a measures the name of the Town and the Country.


```xml
<roma:DatabaseSchema   id="_dbschema">
  <tables xsi:type="roma:PhysicalTable" id="_tab_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_country" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```

## Query Fact

The TableQuery for the Levels and the Measure.


```xml
<roma:TableQuery  id="_query" table="roma:PhysicalTable _tab_fact"/>

```

## Level

The level of the Town used the `column` attribute to define the column that holds the name, wich is also the key Column.


```xml
<roma:Level  id="_level_town" name="Town" column="roma:PhysicalColumn _col_fact_key"/>

```

## Level

The level  of the Country used the `column` attribute to define the column that holds the name, wich is also the key Column.


```xml
<roma:Level  id="_level_country" name="Country" column="roma:PhysicalColumn _col_fact_country"/>

```

## Hierarchy

This Hierarchy contains both defined levels. The `primaryKey` attribute defines the column that contains the primary key of the hierarchy. The `query` attribute references to the query that will be used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<roma:Hierarchy  id="_hierarchy_town" name="TownHierarchy" levels="_level_country _level_town" primaryKey="roma:PhysicalColumn _col_fact_key" query="roma:TableQuery _query"/>

```

## Dimension

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dim_town" name="Town" hierarchies="_hierarchy_town"/>

```

## Cube and DimensionConnector and Measure

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.

To connect the dimension to the cube, a DimensionConnector is used. The dimension has set the attribute `foreignKey` to define the column that contains the foreign key of the dimension in the fact table.


```xml
<roma:PhysicalCube   id="_cube" name="Cube Query linked Tables" query="roma:TableQuery _query">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _col_fact_country" dimension="roma:StandardDimension _dim_town"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure" name="theMeasure" column="roma:PhysicalColumn _col_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```


## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog name="Hierarchy - Query based on all in one Table" cubes="_cube" dbschemas="_dbschema"/>
  <roma:DatabaseSchema id="_dbschema">
    <tables xsi:type="roma:PhysicalTable" id="_tab_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_country" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:PhysicalColumn id="_col_fact_key" name="KEY"/>
  <roma:TableQuery id="_query" table="_tab_fact"/>
  <roma:Level id="_level_town" name="Town" column="_col_fact_key"/>
  <roma:Level id="_level_country" name="Country" column="_col_fact_country"/>
  <roma:Hierarchy id="_hierarchy_town" name="TownHierarchy" levels="_level_country _level_town" primaryKey="_col_fact_key" query="_query"/>
  <roma:StandardDimension id="_dim_town" name="Town" hierarchies="_hierarchy_town"/>
  <roma:PhysicalCube id="_cube" name="Cube Query linked Tables" query="_query">
    <dimensionConnectors foreignKey="_col_fact_country" dimension="_dim_town"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure" name="theMeasure" column="_col_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.hierarchy.query.table.multilevel.singletable.zip" download>Download Zip File</a>
