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
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The TableSource for the Levels and the Measure.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level town

The level of the `Town` used the `column` attribute to define the column that holds the name, which is also the key Column.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_town" name="Town">
  <column href="_column_fact_key"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level country

The level  of the `Country` used the `column` attribute to define the column that holds the name, which is also the key Column.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_country" name="Country">
  <column href="_column_fact_country"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Ordered Column Country

OrderedColumn for level country. OrderedColumn use ascending sorting by country name


```xml
<rolaprel:OrderedColumn xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_orderedcolumn_country">
  <column href="_column_fact_country"/>
</rolaprel:OrderedColumn>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Ordered Column Town

OrderedColumn for level town. OrderedColumn use ascending sorting by town name


```xml
<rolaprel:OrderedColumn xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_orderedcolumn_key" direction="Desc">
  <column href="_column_fact_key"/>
</rolaprel:OrderedColumn>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This Hierarchy contains both defined levels. The `primaryKey` attribute defines the column that contains the primary key of the hierarchy. The `query` attribute references to the query that will be used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_countryhierarchy" name="CountryHierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_country _level_town"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_fact_country">
    <ordinalColumns xmi:id="_orderedcolumn_country" column="_column_fact_country"/>
  </rolaplev:Level>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_fact_key">
    <ordinalColumns xmi:id="_orderedcolumn_key" column="_column_fact_key" direction="Desc"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_country" name="Country" hierarchies="_explicithierarchy_countryhierarchy"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_fact_country">
    <ordinalColumns xmi:id="_orderedcolumn_country" column="_column_fact_country"/>
  </rolaplev:Level>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_countryhierarchy" name="CountryHierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_country _level_town"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_fact_key">
    <ordinalColumns xmi:id="_orderedcolumn_key" column="_column_fact_key" direction="Desc"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.

To connect the dimension to the cube, a DimensionConnector is used.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_with_ordinal_columns" name="Cube with ordinal columns" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_country" foreignKey="_column_fact_country" dimension="_standarddimension_country"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_themeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_fact_country">
    <ordinalColumns xmi:id="_orderedcolumn_country" column="_column_fact_country"/>
  </rolaplev:Level>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_country" name="Country" hierarchies="_explicithierarchy_countryhierarchy"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_countryhierarchy" name="CountryHierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_country _level_town"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_fact_key">
    <ordinalColumns xmi:id="_orderedcolumn_key" column="_column_fact_key" direction="Desc"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_country _column_fact_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_levels_with_ordinal_columns" description="Levels with ordinal columns" name="Daanse Tutorial - Levels with ordinal columns" cubes="_physicalcube_cube_with_ordinal_columns" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_country" name="COUNTRY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_fact_country">
    <ordinalColumns xmi:id="_orderedcolumn_country" column="_column_fact_country"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_fact_key">
    <ordinalColumns xmi:id="_orderedcolumn_key" column="_column_fact_key" direction="Desc"/>
  </rolaplev:Level>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_countryhierarchy" name="CountryHierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_country _level_town"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_country" name="Country" hierarchies="_explicithierarchy_countryhierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_with_ordinal_columns" name="Cube with ordinal columns" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_country" foreignKey="_column_fact_country" dimension="_standarddimension_country"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_themeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.level.ordinalcolumns.zip" download>Download Zip File</a>
