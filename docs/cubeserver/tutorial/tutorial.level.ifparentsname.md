---
title: Level If Parents Name
group: Level
kind: TUTORIAL
number: 2.14.3
---
# Daanse Tutorial - Level If Parents Name

Cube with hierarchy which use SQL query. This example shows combine phisical table as fact and SqlView for hierarchy
SqlView represents a virtual table defined by SQL query expressions rather than physical database tables.


## Database Schema

The cube defined in this example is based on a 3 tables that stores all the data.
The phisical table is named `Fact` uses for Cube1 and contains two columns: `DIM_KEY` and `VALUE`.
The DIM_KEY column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.
The phisical table is named `Level_1` uses for Level1 and contains 2 columns: `KEY`, `NAME` .
The phisical table is named `Level_2` uses for Level2 and contains 3 columns: `KEY`, `NAME`, `L1_KEY`.


```xml
<roma:DatabaseSchema   id="_databaseSchema_LevelIfParentsName">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dim_key" name="DIM_KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_level_1" name="Level_1">
    <columns xsi:type="roma:PhysicalColumn" id="_column_level_1_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_level_1_name" name="NAME"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_level_2" name="Level_2">
    <columns xsi:type="roma:PhysicalColumn" id="_level_2_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_level_2_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_level_2_l1_key" name="L1_KEY" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_queryFact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Level1

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Level_1`.


```xml
<roma:TableQuery  id="_queryLevel1" table="_level_1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Level1

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Level_2`.


```xml
<roma:TableQuery  id="_queryLevel2" table="_level_2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Join

The JoinQuery specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (Level_2), the join uses the foreign key L1_KEY.
- In the upper-level table (Level_1), the join uses the primary key KEY.



```xml
<roma:JoinQuery  id="_queryJoin1">
  <left key="_level_2_l1_key" query="_queryLevel2"/>
  <right key="_column_level_1_key" query="_queryLevel1"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## DimensionMembersHiddenIfParentsName

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dimensionmembershiddenifparentsname" name="DimensionMembersHiddenIfParentsName" hierarchies="roma:ExplicitHierarchy _hierarchy1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1

This hierarchy consists two levels Level1 and Level2.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the query used to retrieve the data for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchy1" name="Hierarchy1" primaryKey="_level_2_key" query="_queryJoin1" levels="_h1Level1 _h1Level2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

The Level uses the column attribute to specify the primary key `KEY` from `Level_1`.
Additionally, it defines the nameColumn `NAME` from `Level_1` attribute  to specify
the column that contains the name of the level.


```xml
<roma:Level  id="_h1Level1" name="Level1" column="_column_level_1_key" nameColumn="_column_level_1_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level2

The Level uses the column attribute to specify the primary key `KEY` from `Level_2`.
Additionally, it defines the nameColumn `NAME` from `Level_2` attribute  to specify
the column that contains the name of the level.
Level has  attribute HideMemberIf.IF_PARENTS_NAME
Hide members whose name matches their parent member's name.
Eliminates redundant display where child members have identical names to their parents in the hierarchy.


```xml
<roma:Level  id="_h1Level2" name="Level2" column="_level_2_key" hideMemberIf="IfParentsName" nameColumn="_level_2_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure1

Measure1 use Fact table VALUE column with sum aggregation in Cube.


```xml
<roma:SumMeasure  id="_measure1" name="Measure1" column="_column_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

In this example uses cube with fact table Fact as data.


```xml
<roma:PhysicalCube   id="_cube" name="Cube" query="_queryFact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_dim_key" dimension="roma:StandardDimension _dimensionmembershiddenifparentsname" overrideDimensionName="DimensionMembersHiddenIfBlankName" id="_dc_dimensionMembersHiddenIfBlankName"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure1" name="Measure1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy1" name="Hierarchy1" primaryKey="_level_2_key" query="_queryJoin1" levels="_h1Level1 _h1Level2"/>
  <roma:Catalog description="Level handling parent name references" name="Daanse Tutorial - Level If Parents Name" cubes="_cube" dbschemas="_databaseSchema_LevelIfParentsName"/>
  <roma:DatabaseSchema id="_databaseSchema_LevelIfParentsName">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dim_key" name="DIM_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_level_1" name="Level_1">
      <columns xsi:type="roma:PhysicalColumn" id="_column_level_1_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_level_1_name" name="NAME"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_level_2" name="Level_2">
      <columns xsi:type="roma:PhysicalColumn" id="_level_2_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_level_2_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_level_2_l1_key" name="L1_KEY" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_queryFact" table="_table_fact"/>
  <roma:TableQuery id="_queryLevel1" table="_level_1"/>
  <roma:TableQuery id="_queryLevel2" table="_level_2"/>
  <roma:JoinQuery id="_queryJoin1">
    <left key="_level_2_l1_key" query="_queryLevel2"/>
    <right key="_column_level_1_key" query="_queryLevel1"/>
  </roma:JoinQuery>
  <roma:Level id="_h1Level1" name="Level1" column="_column_level_1_key" nameColumn="_column_level_1_name"/>
  <roma:Level id="_h1Level2" name="Level2" column="_level_2_key" hideMemberIf="IfParentsName" nameColumn="_level_2_name"/>
  <roma:StandardDimension id="_dimensionmembershiddenifparentsname" name="DimensionMembersHiddenIfParentsName" hierarchies="_hierarchy1"/>
  <roma:PhysicalCube id="_cube" name="Cube" query="_queryFact">
    <dimensionConnectors foreignKey="_column_fact_dim_key" dimension="_dimensionmembershiddenifparentsname" overrideDimensionName="DimensionMembersHiddenIfBlankName" id="_dc_dimensionMembersHiddenIfBlankName"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.level.ifparentsname.zip" download>Download Zip File</a>
