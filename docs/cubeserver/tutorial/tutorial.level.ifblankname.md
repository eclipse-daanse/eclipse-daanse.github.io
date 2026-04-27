---
title: Level If Blank Name
group: Level
kind: TUTORIAL
number: 2.14.04
---
# Daanse Tutorial - Level If Blank Name

A basic OLAP schema with a level with property Level has attribute HideMemberIf.IF_BLANK_NAME
Catalog has two cubes with one level with HideMemberIf atribut and with multiple levels


## Database Schema

The cube defined in this example is based on a 3 tables that stores all the data.
- The phisical table is named `Fact` uses for Cube1 and contains two columns: `DIM_KEY` and `VALUE`.
The `DIM_KEY` column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.
- The phisical table is named `Level_1` uses for Level1 and contains 2 columns: `KEY`, `NAME` .
- The phisical table is named `Level_2_NULL` uses for Level2 and contains 3 columns: `KEY`, `NAME`, `L1_KEY`.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_level_2_null" name="Level_2_NULL">
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_l1_key" name="L1_KEY"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_level_1" name="Level_1">
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_name" name="NAME"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Level1

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Level_1`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_level_1" table="_table_level_1"/>
  <relational:Table xmi:id="_table_level_1" name="Level_1">
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Level2

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Level_2_NULL`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_level_2_null" table="_table_level_2_null"/>
  <relational:Table xmi:id="_table_level_2_null" name="Level_2_NULL">
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_l1_key" name="L1_KEY"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Join

The JoinSource specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (Level_2_NULL), the join uses the foreign key L1_KEY.
- In the upper-level table (Level_1), the join uses the primary key KEY.



```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_l1_key" key="_column_level_2_null_l1_key" query="_tablesource_level_2_null"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_level_1_key" query="_tablesource_level_1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_level_2_null" table="_table_level_2_null"/>
  <relational:Table xmi:id="_table_level_2_null" name="Level_2_NULL">
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_l1_key" name="L1_KEY"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_level_1" table="_table_level_1"/>
  <relational:Table xmi:id="_table_level_1" name="Level_1">
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## DimensionMembersHiddenIfBlankName

The Dimension has only one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimensionmembershiddenifblankname" name="DimensionMembersHiddenIfBlankName" hierarchies="_explicithierarchy_hierarchy1"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_level_1_key" nameColumn="_column_level_1_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_level_2_null_key" query="_joinsource" levels="_level_level1 _level_level2"/>
  <rolapsrc:TableSource xmi:id="_tablesource_level_2_null" table="_table_level_2_null"/>
  <relational:Table xmi:id="_table_level_2_null" name="Level_2_NULL">
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_l1_key" name="L1_KEY"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_l1_key" key="_column_level_2_null_l1_key" query="_tablesource_level_2_null"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_level_1_key" query="_tablesource_level_1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_level_1" table="_table_level_1"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_level_2_null_key" hideMemberIf="IfBlankName" nameColumn="_column_level_2_null_name"/>
  <relational:Table xmi:id="_table_level_1" name="Level_1">
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1

This hierarchy consists two levels Level1 and Level2.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the query used to retrieve the data for the hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_level_2_null_key" query="_joinsource" levels="_level_level1 _level_level2"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_level_1_key" nameColumn="_column_level_1_name"/>
  <rolapsrc:TableSource xmi:id="_tablesource_level_2_null" table="_table_level_2_null"/>
  <relational:Table xmi:id="_table_level_2_null" name="Level_2_NULL">
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_l1_key" name="L1_KEY"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_l1_key" key="_column_level_2_null_l1_key" query="_tablesource_level_2_null"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_level_1_key" query="_tablesource_level_1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_level_1" table="_table_level_1"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_level_2_null_key" hideMemberIf="IfBlankName" nameColumn="_column_level_2_null_name"/>
  <relational:Table xmi:id="_table_level_1" name="Level_1">
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

The Level uses the column attribute to specify the primary key `KEY` from `Level_1`.
Additionally, it defines the nameColumn `NAME` from `Level_1` attribute  to specify
the column that contains the name of the level.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_level1" name="Level1">
  <column href="_column_level_1_key"/>
  <nameColumn href="_column_level_1_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level2

The Level uses the column attribute to specify the primary key `KEY` from `Level_2_NULL`.
Additionally, it defines the nameColumn `NAME` from `Level_2_NULL` attribute  to specify
the column that contains the name of the level.
Level has  attribute HideMemberIf.IF_BLANK_NAME
Hide members that have blank or null names. Useful for filtering out incomplete data
where member names are missing from the source system.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_level2" name="Level2" hideMemberIf="IfBlankName">
  <column href="_column_level_2_null_key"/>
  <nameColumn href="_column_level_2_null_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure1

        Measure1 use Fact table VALUE column with sum aggregation in Cube.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_measure1" name="Measure1">
  <column href="_column_fact_value"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

In this example uses cube with fact table Fact as data.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_hiddenmembersifblankname" name="HiddenMembersIfBlankName" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimensionmembershiddenifblankname" foreignKey="_column_fact_dim_key" dimension="_standarddimension_dimensionmembershiddenifblankname" overrideDimensionName="DimensionMembersHiddenIfBlankName"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_level_1" name="Level_1">
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_1_name" name="NAME"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_level1" name="Level1">
    <column href="_column_level_1_key"/>
    <nameColumn href="_column_level_1_name"/>
  </rolaplev:Level>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" query="_joinsource" levels="_level_level1 _level_level2">
    <primaryKey href="_column_level_2_null_key"/>
  </rolaphier:ExplicitHierarchy>
  <rolapsrc:TableSource xmi:id="_tablesource_level_2_null" table="_table_level_2_null"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <relational:Table xmi:id="_table_level_2_null" name="Level_2_NULL">
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_l1_key" name="L1_KEY"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_l1_key" key="_column_level_2_null_l1_key" query="_tablesource_level_2_null"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_level_1_key" query="_tablesource_level_1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_level_1" table="_table_level_1"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_level_2_null_key" hideMemberIf="IfBlankName" nameColumn="_column_level_2_null_name"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimensionmembershiddenifblankname" name="DimensionMembersHiddenIfBlankName" hierarchies="_explicithierarchy_hierarchy1"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_level_2_null_l1_key _column_fact_value _column_level_2_null_key _column_level_1_key _column_fact_dim_key" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_level_2_null_name _column_level_1_name" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_level_if_blank_name" description="Level handling blank names" name="Daanse Tutorial - Level If Blank Name" cubes="_physicalcube_hiddenmembersifblankname" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_level_2_null" name="Level_2_NULL">
      <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_key" name="KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_level_2_null_l1_key" name="L1_KEY" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_level_1" name="Level_1">
      <feature xsi:type="relational:Column" xmi:id="_column_level_1_key" name="KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_level_1_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_level_2_null" table="_table_level_2_null"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_level_1" table="_table_level_1"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_l1_key" key="_column_level_2_null_l1_key" query="_tablesource_level_2_null"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_level_1_key" query="_tablesource_level_1"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_level_1_key" nameColumn="_column_level_1_name"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_level_2_null_key" hideMemberIf="IfBlankName" nameColumn="_column_level_2_null_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_level_2_null_key" query="_joinsource" levels="_level_level1 _level_level2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimensionmembershiddenifblankname" name="DimensionMembersHiddenIfBlankName" hierarchies="_explicithierarchy_hierarchy1"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_hiddenmembersifblankname" name="HiddenMembersIfBlankName" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimensionmembershiddenifblankname" foreignKey="_column_fact_dim_key" dimension="_standarddimension_dimensionmembershiddenifblankname" overrideDimensionName="DimensionMembersHiddenIfBlankName"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.level.ifblankname.zip" download>Download Zip File</a>
