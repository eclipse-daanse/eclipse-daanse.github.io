---
title: Level If Blank Name Multiple
group: Level
kind: TUTORIAL
number: 2.14.4
---
A basic OLAP schema with a level with property Level has attribute HideMemberIf.IF_BLANK_NAME
Catalog has two cubes with one level with HideMemberIf atribut and with multiple levels


# Minimal Cube with Hidden Members with IfBlankName multiple levels

A basic OLAP schema with a level with property Level has attribute HideMemberIf.IF_BLANK_NAME
Catalog has two cubes with one level with HideMemberIf atribut and with multiple levels.
Attribute HideMemberIf.IF_BLANK_NAME uses for multiple levels


## Database Schema

The cube defined in this example is based on a 4 tables that stores all the data.
The phisical table is named `Fact_Multiple` uses for Cube1 and contains two columns: `DIM_KEY` and `VALUE`.
The DIM_KEY column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.
The phisical table is named `Level_1_Multiple` uses for Level1 and contains 2 columns: `KEY`, `NAME` .
The phisical table is named `Level_2_Multiple` uses for Level2 and contains 3 columns: `KEY`, `NAME`, `L1_KEY`.
The phisical table is named `Level_3_Multiple` uses for Level2 and contains 3 columns: `KEY`, `NAME`, `L2_KEY`.


```xml
<roma:DatabaseSchema   id="_databaseSchema_ifblanknamemultiple">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact_Multiple" name="Fact_Multiple">
    <columns xsi:type="roma:PhysicalColumn" id="_column_factmultiple_dim_key" name="DIM_KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_level_1_multiple" name="Level_1_Multiple">
    <columns xsi:type="roma:PhysicalColumn" id="_level_1_multiple_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_level_1_multiple_name" name="NAME"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_level_2_multiple" name="Level_2_Multiple">
    <columns xsi:type="roma:PhysicalColumn" id="_level_2_multiple_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_level_2_multiple_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_level_2_multiple_l1_key" name="L1_KEY" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_level_3_multiple" name="Level_3_Multiple">
    <columns xsi:type="roma:PhysicalColumn" id="_level_3_multiple_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_level_3_multiple_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_level_3_multiple_l2_key" name="L2_KEY" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Fact_Multiple`.


```xml
<roma:TableQuery  id="_queryFact" table="_table_fact_Multiple"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Level2

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Level_2_Multiple`.


```xml
<roma:TableQuery  id="_queryLevel2Multiple" table="_level_2_multiple"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Level1

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Level_1_Multiple`.


```xml
<roma:TableQuery  id="_queryLevel1Multiple" table="_level_1_multiple"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Level3

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Level_3_Multiple`.


```xml
<roma:TableQuery  id="_queryLevel3Multiple" table="_level_3_multiple"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Join Right

The JoinQuery specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (Level_2_Multiple), the join uses the foreign key L1_KEY.
- In the upper-level table (Level_1_Multiple), the join uses the primary key KEY.


```xml
<roma:JoinQuery  id="_queryJoinRight">
  <left key="_level_2_multiple_l1_key" query="_queryLevel2Multiple"/>
  <right key="_level_1_multiple_key" query="_queryLevel1Multiple"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Join

The JoinQuery specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (Level_3_Multiple), the join uses the foreign key L2_KEY.
- In the upper-level queryJoinRight, the join uses the primary key KEY from Level_2_Multiple.


```xml
<roma:JoinQuery  id="_queryJoin2">
  <left key="_level_3_multiple_l2_key" query="_queryLevel3Multiple"/>
  <right key="_level_2_multiple_key" query="_queryJoinRight"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## DimensionMembersHiddenMultipleLevels

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dimensionmembershiddenmultiplelevels" name="DimensionMembersHiddenMultipleLevels" hierarchies="roma:ExplicitHierarchy _hierarchy1_2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1

This hierarchy consists two levels Level1 and Level2.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the query used to retrieve the data for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchy1_2" name="Hierarchy1" primaryKey="_level_3_multiple_key" query="_queryJoin2" levels="_h2Level1 _h2Level2 _h2Level3"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

The Level uses the column attribute to specify the primary key `KEY` from `Level_1_Multiple`.
Additionally, it defines the nameColumn `NAME` from `Level_1_Multiple` attribute  to specify
the column that contains the name of the level.


```xml
<roma:Level  id="_h2Level1" name="Level1" column="_level_1_multiple_key" nameColumn="_level_1_multiple_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level3

The Level uses the column attribute to specify the primary key `KEY` from `Level_3_Multiple`.
Additionally, it defines the nameColumn `NAME` from `Level_3_Multiple` attribute  to specify
the column that contains the name of the level.
Level has  attribute HideMemberIf.IF_PARENTS_NAME
Hide members whose name matches their parent member's name.
Eliminates redundant display where child members have identical names to their parents in the hierarchy.


```xml
<roma:Level  id="_h2Level3" name="Level3" column="_level_3_multiple_key" hideMemberIf="IfBlankName" nameColumn="_level_3_multiple_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level2

The Level uses the column attribute to specify the primary key `KEY` from `Level_2_Multiple`.
Additionally, it defines the nameColumn `NAME` from `Level_2_Multiple` attribute  to specify
the column that contains the name of the level.
Level has  attribute HideMemberIf.IF_PARENTS_NAME
Hide members whose name matches their parent member's name.
Eliminates redundant display where child members have identical names to their parents in the hierarchy.


```xml
<roma:Level  id="_h2Level2" name="Level2" column="_level_2_multiple_key" hideMemberIf="IfBlankName" nameColumn="_level_2_multiple_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure1

        Measure1 use Fact table VALUE column with sum aggregation in Cube.


```xml
<roma:SumMeasure  id="_measure" name="Measure" column="_column_fact_value"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

In this example uses cube with fact table Fact as data.


```xml
<roma:PhysicalCube   id="_hiddenmembersmultiplelevels" name="HiddenMembersMultipleLevels" query="_queryFact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_factmultiple_dim_key" dimension="roma:StandardDimension _dimensionmembershiddenmultiplelevels" overrideDimensionName="DimensionMembersHiddenMultipleLevels" id="_dc_dimensionMembersHiddenMultipleLevels"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure" name="Measure" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy1_2" name="Hierarchy1" primaryKey="_level_3_multiple_key" query="_queryJoin2" levels="_h2Level1 _h2Level2 _h2Level3"/>
  <roma:Catalog description="Multiple levels handling blank names" name="Daanse Tutorial - Level If Blank Name Multiple" cubes="_hiddenmembersmultiplelevels" dbschemas="_databaseSchema_ifblanknamemultiple"/>
  <roma:DatabaseSchema id="_databaseSchema_ifblanknamemultiple">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact_Multiple" name="Fact_Multiple">
      <columns xsi:type="roma:PhysicalColumn" id="_column_factmultiple_dim_key" name="DIM_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_level_1_multiple" name="Level_1_Multiple">
      <columns xsi:type="roma:PhysicalColumn" id="_level_1_multiple_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_level_1_multiple_name" name="NAME"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_level_2_multiple" name="Level_2_Multiple">
      <columns xsi:type="roma:PhysicalColumn" id="_level_2_multiple_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_level_2_multiple_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_level_2_multiple_l1_key" name="L1_KEY" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_level_3_multiple" name="Level_3_Multiple">
      <columns xsi:type="roma:PhysicalColumn" id="_level_3_multiple_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_level_3_multiple_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_level_3_multiple_l2_key" name="L2_KEY" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_queryFact" table="_table_fact_Multiple"/>
  <roma:TableQuery id="_queryLevel2Multiple" table="_level_2_multiple"/>
  <roma:TableQuery id="_queryLevel1Multiple" table="_level_1_multiple"/>
  <roma:TableQuery id="_queryLevel3Multiple" table="_level_3_multiple"/>
  <roma:JoinQuery id="_queryJoinRight">
    <left key="_level_2_multiple_l1_key" query="_queryLevel2Multiple"/>
    <right key="_level_1_multiple_key" query="_queryLevel1Multiple"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_queryJoin2">
    <left key="_level_3_multiple_l2_key" query="_queryLevel3Multiple"/>
    <right key="_level_2_multiple_key" query="_queryJoinRight"/>
  </roma:JoinQuery>
  <roma:Level id="_h2Level1" name="Level1" column="_level_1_multiple_key" nameColumn="_level_1_multiple_name"/>
  <roma:Level id="_h2Level3" name="Level3" column="_level_3_multiple_key" hideMemberIf="IfBlankName" nameColumn="_level_3_multiple_name"/>
  <roma:Level id="_h2Level2" name="Level2" column="_level_2_multiple_key" hideMemberIf="IfBlankName" nameColumn="_level_2_multiple_name"/>
  <roma:StandardDimension id="_dimensionmembershiddenmultiplelevels" name="DimensionMembersHiddenMultipleLevels" hierarchies="_hierarchy1_2"/>
  <roma:PhysicalCube id="_hiddenmembersmultiplelevels" name="HiddenMembersMultipleLevels" query="_queryFact">
    <dimensionConnectors foreignKey="_column_factmultiple_dim_key" dimension="_dimensionmembershiddenmultiplelevels" overrideDimensionName="DimensionMembersHiddenMultipleLevels" id="_dc_dimensionMembersHiddenMultipleLevels"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure" name="Measure" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.level.ifblanknamemultiple.zip" download>Download Zip File</a>
