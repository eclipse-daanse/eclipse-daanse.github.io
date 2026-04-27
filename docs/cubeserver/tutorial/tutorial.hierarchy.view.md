---
title: Hierarchy View
group: Hierarchy
kind: TUTORIAL
number: 2.16.02
---
# Daanse Tutorial - Hierarchy View

Cube with hierarchy which use SQL query. This example shows combine phisical table as fact and DialectSqlView for hierarchy
DialectSqlView represents a virtual table defined by SQL query expressions rather than physical database tables.


## Database Schema

The cube defined in this example is based on a two tables and and DialectSqlView that stores all the data.

- The phisical table is named `Fact` uses for Cube1 and contains two columns: `DIM_KEY` and `VALUE`.
    The `KEY` column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.
- The phisical table is named `HT` uses for Hierarchy and contains 3 columns: `KEY`, `VALUE`,`NAME` .
- DialectSqlView represents a virtual table defined by SQL query expressions rather than physical database tables.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_ht" name="HT">
    <feature xsi:type="relational:Column" xmi:id="_column_ht_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_value" name="VALUE"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

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
## HT_VIEW

The bridge between the cube and SqlView `HT_VIEW`.


```xml
<rolapsrc:SqlSelectSource xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source" xmi:id="_sqlselectsource" alias="HT_VIEW">
  <sql xmi:id="_dialectsqlview_ht_view" name="HT_VIEW">
    <feature xsi:type="relational:Column" xmi:id="_column_ht_view_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_view_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_view_value" name="VALUE"/>
    <dialectStatements xmi:id="_sqlstatement" sql="select * from HT">
      <dialects>generic</dialects>
      <dialects>h2</dialects>
    </dialectStatements>
  </sql>
</rolapsrc:SqlSelectSource>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchy"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_ht_view_key" query="_sqlselectsource" levels="_level_level1"/>
  <rolapsrc:SqlSelectSource xmi:id="_sqlselectsource" alias="HT_VIEW">
    <sql xmi:id="_dialectsqlview_ht_view" name="HT_VIEW">
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_key" name="KEY"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_name" name="NAME"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_value" name="VALUE"/>
      <dialectStatements xmi:id="_sqlstatement" sql="select * from HT">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </dialectStatements>
    </sql>
  </rolapsrc:SqlSelectSource>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_ht_view_key" nameColumn="_column_ht_view_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists level Level1.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the query used to retrieve the data for the hierarchy.
Query uses SqlView `HT_VIEW` as data sourse.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_ht_view_key" query="_sqlselectsource" levels="_level_level1"/>
  <rolapsrc:SqlSelectSource xmi:id="_sqlselectsource" alias="HT_VIEW">
    <sql xmi:id="_dialectsqlview_ht_view" name="HT_VIEW">
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_key" name="KEY"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_name" name="NAME"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_value" name="VALUE"/>
      <dialectStatements xmi:id="_sqlstatement" sql="select * from HT">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </dialectStatements>
    </sql>
  </rolapsrc:SqlSelectSource>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_ht_view_key" nameColumn="_column_ht_view_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

The Level uses the column attribute to specify the primary key `KEY` from SqlView `HT_VIEW`.
Additionally, it defines the nameColumn `NAME` from SqlView `HT_VIEW` attribute  to specify
the column that contains the name of the level.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_level1" name="Level1">
  <column href="_column_ht_view_key"/>
  <nameColumn href="_column_ht_view_name"/>
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

In this example uses cube with fact table Fact as data. This example shows combine phisical table as fact and DialectSqlView for hierarchy


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension" foreignKey="_column_fact_dim_key" dimension="_standarddimension_dimension" overrideDimensionName="Dimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_ht_view_key" query="_sqlselectsource" levels="_level_level1"/>
  <rolapsrc:SqlSelectSource xmi:id="_sqlselectsource" alias="HT_VIEW">
    <sql xmi:id="_dialectsqlview_ht_view" name="HT_VIEW">
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_key" name="KEY"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_name" name="NAME"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_value" name="VALUE"/>
      <dialectStatements xmi:id="_sqlstatement" sql="select * from HT">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </dialectStatements>
    </sql>
  </rolapsrc:SqlSelectSource>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchy"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_ht_view_key" nameColumn="_column_ht_view_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_ht_view_value _column_ht_value _column_ht_key _column_ht_view_key _column_fact_value" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_ht_name _column_fact_dim_key _column_ht_view_name" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_hierarchy_view" description="Hierarchy with SQL view references" name="Daanse Tutorial - Hierarchy View" cubes="_physicalcube_cube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_ht" name="HT">
      <feature xsi:type="relational:Column" xmi:id="_column_ht_key" name="KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:SqlSelectSource xmi:id="_sqlselectsource" alias="HT_VIEW">
    <sql xmi:id="_dialectsqlview_ht_view" name="HT_VIEW">
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_key" name="KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_view_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <dialectStatements xmi:id="_sqlstatement" sql="select * from HT">
        <dialects>generic</dialects>
        <dialects>h2</dialects>
      </dialectStatements>
    </sql>
  </rolapsrc:SqlSelectSource>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_ht_view_key" nameColumn="_column_ht_view_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_ht_view_key" query="_sqlselectsource" levels="_level_level1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension" foreignKey="_column_fact_dim_key" dimension="_standarddimension_dimension" overrideDimensionName="Dimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.hierarchy.view.zip" download>Download Zip File</a>
