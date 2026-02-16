---
title: Hierarchy Query Join Base
group: Hierarchy
kind: TUTORIAL
number: 2.3.3.1
---
# Daanse Tutorial - Hierarchy Query Join Base

If the database structure follows the Third Normal Form (3NF), hierarchies in a cube are not stored in a single table but are distributed across multiple tables.

For example, consider a Geographical hierarchy with the levels Town and Country. If each entity is stored in a separate table, with a primary-foreign key relationship linking them, a query must be defined that incorporates both tables and specifies how the levels are joined.

The following example demonstrates how to define such a query.


## Database Schema

The cube defined in this example is based on three tables: `Fact`, `Town`, and `Country`.

- The `Fact` table contains measures and a reference to the `Town` table.
- The `Fact` table is linked to the `Town` table through the TOWN_ID column, which corresponds to the `ID` column in the `Town` table.
- The `Town` table includes a column that references the primary key of the `Country` table.
- The Country table consists of two columns: ID (primary key) and Name.

This structure ensures that the hierarchy is properly normalized, following the Third Normal Form (3NF).


```xml
<roma:DatabaseSchema   id="_databaseSchema_main">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_townId" name="TOWN_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_town" name="Town">
    <columns xsi:type="roma:PhysicalColumn" id="_column_town_id" name="ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_town_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_town_countryId" name="COUNTRY_ID" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_country" name="Country">
    <columns xsi:type="roma:PhysicalColumn" id="_column_country_id" name="ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_country_name" name="NAME"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Level Town

The TableQuery for the Town level directly references the physical Town table.


```xml
<roma:TableQuery  id="_query_town" table="_table_town"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Level Country

The TableQuery for the Country level directly references the physical Country table.


```xml
<roma:TableQuery  id="_query_country" table="_table_country"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Join Town to Country

The JoinQuery specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (Town), the join uses the foreign key.
- In the upper-level table (Country), the join uses the primary key.


```xml
<roma:JoinQuery  id="_query_townToCountry">
  <left key="_column_town_id" query="_query_town"/>
  <right key="_column_country_id" query="_query_country"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The TableQuery for the Level, as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level - Town

The `Town` level uses the column attribute to specify the primary key column. Additionally, it defines the nameColumn attribute to specify the column that contains the name of the level.


```xml
<roma:Level  id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level - Country

The `Country` level follows the same pattern as the `Town` level.


```xml
<roma:Level  id="_level_country" name="County" column="_column_country_id" nameColumn="_column_country_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists of two levels: `Town` and `Country`.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the query used to retrieve the data for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_townHierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_query_townToCountry" levels="_level_town _level_country"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dimension_town" name="Town" hierarchies="roma:ExplicitHierarchy _hierarchy_townHierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.

To connect the dimension to the cube, a DimensionConnector is used. The dimension has set the attribute `foreignKey` to define the column that contains the foreign key of the dimension in the fact table.


```xml
<roma:PhysicalCube   id="_cube_queryLinkedTables" name="Cube Query linked Tables" query="_query_fact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_townId" dimension="roma:StandardDimension _dimension_town" id="_dimensionConnector_town"/>
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
  <roma:Catalog description="Basic hierarchy with joined tables" name="Daanse Tutorial - Hierarchy Query Join Base" cubes="_cube_queryLinkedTables" dbschemas="_databaseSchema_main"/>
  <roma:DatabaseSchema id="_databaseSchema_main">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_townId" name="TOWN_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_town" name="Town">
      <columns xsi:type="roma:PhysicalColumn" id="_column_town_id" name="ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_town_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_town_countryId" name="COUNTRY_ID" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_country" name="Country">
      <columns xsi:type="roma:PhysicalColumn" id="_column_country_id" name="ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_country_name" name="NAME"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_country" table="_table_country"/>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:TableQuery id="_query_town" table="_table_town"/>
  <roma:JoinQuery id="_query_townToCountry">
    <left key="_column_town_id" query="_query_town"/>
    <right key="_column_country_id" query="_query_country"/>
  </roma:JoinQuery>
  <roma:Level id="_level_country" name="County" column="_column_country_id" nameColumn="_column_country_name"/>
  <roma:Level id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_townHierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_query_townToCountry" levels="_level_town _level_country"/>
  <roma:StandardDimension id="_dimension_town" name="Town" hierarchies="_hierarchy_townHierarchy"/>
  <roma:PhysicalCube id="_cube_queryLinkedTables" name="Cube Query linked Tables" query="_query_fact">
    <dimensionConnectors foreignKey="_column_fact_townId" dimension="_dimension_town" id="_dimensionConnector_town"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_theMeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.hierarchy.query.join.base.zip" download>Download Zip File</a>
