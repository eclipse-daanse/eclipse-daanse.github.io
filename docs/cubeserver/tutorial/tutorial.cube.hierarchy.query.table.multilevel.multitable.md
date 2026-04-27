---
title: Hierarchy Query Table Multilevel Multitable
group: Hierarchy
kind: TUTORIAL
number: 2.03.02.02
---
# Daanse Tutorial - Hierarchy Query Table Multilevel Multitable

    In some cases, a table for a lower-level entity also contains additional information for a higher-level entity.
This often happens when no dedicated columns exist for the higher-level entity and the database designer decides
that fully applying Third Normal Form (3NF) would involve more work than it seems to be worth, or they wish to
optimize lookup speed. Although we strongly recommend using 3NF wherever possible, this tutorial demonstrates
how to handle a scenario in which two levels share the same table.

In this example, besides storing the town `ID` and town `NAME`, our table also includes information about the
`COUNTRY` in a separate column.


## Database Schema

The cube defined in this example is based on two tables. `Fact` and `Town`. The `Fact` table contains a
measures and a reference to the `Town` table. The `Fact` table is linked with its `ID` column to the `Town`
table by the `TOWN_ID` column. The Town table has the `ID`, `NAME` and `COUNTRY`.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_town_id" name="TOWN_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country" name="COUNTRY"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Level

The TableSource for the Level, as it directly references the physical table `Town`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country" name="COUNTRY"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The TableSource for the Level, as it directly references the physical table `Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_town_id" name="TOWN_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

The level  of the `Town` used the `column` attribute to define the primary key column and the `nameColumn`
attribute.



```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_town" name="Town">
  <column href="_column_town_id"/>
  <nameColumn href="_column_town_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

The level  of the `Country` used the `column` attribute to define the primary key column on the `Country`
table of the `Town` table.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_country" name="Country">
  <column href="_column_town_country"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This Hierarchy contains both defined levels. The `primaryKey` attribute defines the column that contains
the primary key of the hierarchy. The `query` attribute references to the query that will be used to
retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_tablesource_town" levels="_level_country _level_town"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_town_country"/>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country" name="COUNTRY"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_town" name="Town" hierarchies="_explicithierarchy_townhierarchy"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_town_country"/>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country" name="COUNTRY"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_tablesource_town" levels="_level_country _level_town"/>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.

To connect the dimension to the cube, a DimensionConnector is used. The dimension has set the attribute
`foreignKey` to define the column that contains the foreign key of the dimension in the fact table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_query_linked_tables" name="Cube Query linked Tables" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_town" foreignKey="_column_fact_town_id" dimension="_standarddimension_town"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_themeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_town_country"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_town_id" name="TOWN_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapdim:StandardDimension xmi:id="_standarddimension_town" name="Town" hierarchies="_explicithierarchy_townhierarchy"/>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country" name="COUNTRY"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_tablesource_town" levels="_level_country _level_town"/>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value _column_fact_town_id _column_town_id" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_town_country _column_town_name" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_hierarchy_query_table_multilevel_multitable" description="Multi-level hierarchy across multiple tables" name="Daanse Tutorial - Hierarchy Query Table Multilevel Multitable" cubes="_physicalcube_cube_query_linked_tables" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_town_id" name="TOWN_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_town" name="Town">
      <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_country" name="COUNTRY" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_town_country"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_tablesource_town" levels="_level_country _level_town"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_town" name="Town" hierarchies="_explicithierarchy_townhierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_query_linked_tables" name="Cube Query linked Tables" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_town" foreignKey="_column_fact_town_id" dimension="_standarddimension_town"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_themeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.hierarchy.query.table.multilevel.multitable.zip" download>Download Zip File</a>
