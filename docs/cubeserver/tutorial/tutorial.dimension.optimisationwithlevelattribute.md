---
title: Dimension Optimisation With Level Attribute
group: Dimension
kind: TUTORIAL
number: 2.09.02
---
# Daanse Tutorial - Dimension Optimisation With Level Attribute

A basic OLAP schema with two Dimension Connectors with level attribute
Level attribute in DimensionConnector uses for optimize sql inner join
Level attribute is name of the level to join to
If not specified joins to the lowest level of the dimension


## Database Schema

The Database Schema contains the Fact table with two columns: DIM_KEY and VALUE.
The DATE_KEY column is used as the discriminator in the Hierarchy definitions.

- `H1_L1` table with two columns: `KEY` and `NAME`
- `HX_L2` table with 3 columns: `KEY`, `NAME`, `H1L1_KEY`, `H2L1_KEY`


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableSource that selects all columns from the Fact table to use in the measures.


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
## H1L1Query

The Query is a simple TableSource that selects all columns from the H1_L1 table to use in the hierarchy join.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <relational:Table xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## HxL2Query

The Query is a simple TableSource that selects all columns from the Hx_L2 table to use in the hierarchy join.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## JoinQuery

The JoinSource specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (`Hx_L2`), the join uses the foreign key `H1L1_KEY`.
- In the upper-level table (`H1_L1`), the join uses the primary key `KEY`.



```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h1l1_key" key="_column_hx_l2_h1l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_h1_l1_key" query="_tablesource_h1_l1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <relational:Table xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </relational:Table>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## H1_Level1

This Example uses `H1_Level1` level based on the `KEY` column and name column `NAME` of table `H1_L1`.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_h1_level1" name="H1_Level1">
  <column href="_column_h1_l1_key"/>
  <nameColumn href="_column_h1_l1_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## H1_Level2

This Example uses `H1_Level2` level based on the `KEY` column and name column `NAME` of table `HX_L2`.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_h1_level2" name="H1_Level2">
  <column href="_column_hx_l2_key"/>
  <nameColumn href="_column_hx_l2_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1

The Hierarchy1 is defined with the hasAll property set to false and the two levels `H1_Level1` and `H1_Level2`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hx_l2_key" query="_joinsource" levels="_level_h1_level1 _level_h1_level2"/>
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <relational:Table xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h1l1_key" key="_column_hx_l2_h1l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_h1_l1_key" query="_tablesource_h1_l1"/>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
  <rolaplev:Level xmi:id="_level_h1_level2" name="H1_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <rolaplev:Level xmi:id="_level_h1_level1" name="H1_Level1" column="_column_h1_l1_key" nameColumn="_column_h1_l1_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Diml1

The time dimension is defined with the one hierarchy.



```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_diml1" name="Diml1" hierarchies="_explicithierarchy_hierarchy1"/>
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <relational:Table xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h1l1_key" key="_column_hx_l2_h1l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_h1_l1_key" query="_tablesource_h1_l1"/>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hx_l2_key" query="_joinsource" levels="_level_h1_level1 _level_h1_level2"/>
  <rolaplev:Level xmi:id="_level_h1_level2" name="H1_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <rolaplev:Level xmi:id="_level_h1_level1" name="H1_Level1" column="_column_h1_l1_key" nameColumn="_column_h1_l1_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

The cube with two DimensionConnectors.
One of them with level attribute to level H1_Level1
Second of them with level attribute to level H1_Level2
Level attribute in DimensionConnector uses for optimize sql inner join
Level attribute is name of the level to join to
If not specified joins to the lowest level of the dimension


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dim1" foreignKey="_column_fact_dim_key" dimension="_standarddimension_diml1" overrideDimensionName="Dim1" level="_level_h1_level2"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dim2" foreignKey="_column_fact_dim_key" dimension="_standarddimension_diml1" overrideDimensionName="Dim2" level="_level_h1_level1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure" name="Measure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <relational:Table xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h1l1_key" query="_tablesource_hx_l2">
      <key href="_column_hx_l2_h1l1_key"/>
    </left>
    <right xmi:id="_joinedqueryelement_key" key="_column_h1_l1_key" query="_tablesource_h1_l1"/>
  </rolapsrc:JoinSource>
  <rolapdim:StandardDimension xmi:id="_standarddimension_diml1" name="Diml1" hierarchies="_explicithierarchy_hierarchy1"/>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hx_l2_key" query="_joinsource" levels="_level_h1_level1 _level_h1_level2"/>
  <rolaplev:Level xmi:id="_level_h1_level2" name="H1_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <rolaplev:Level xmi:id="_level_h1_level1" name="H1_Level1" column="_column_h1_l1_key" nameColumn="_column_h1_l1_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_hx_l2_key _column_hx_l2_h2l1_key _column_hx_l2_h1l1_key _column_fact_dim_key _column_h1_l1_key _column_fact_value" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_h1_l1_name _column_hx_l2_name" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_dimension_optimisation_with_level_attribute" description="Dimension optimization with level attributes" name="Daanse Tutorial - Dimension Optimisation With Level Attribute" cubes="_physicalcube_cube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_h1_l1" name="H1_L1">
      <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_hx_l2" name="HX_L2">
      <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h1l1_key" key="_column_hx_l2_h1l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_h1_l1_key" query="_tablesource_h1_l1"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_h1_level2" name="H1_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <rolaplev:Level xmi:id="_level_h1_level1" name="H1_Level1" column="_column_h1_l1_key" nameColumn="_column_h1_l1_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hx_l2_key" query="_joinsource" levels="_level_h1_level1 _level_h1_level2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_diml1" name="Diml1" hierarchies="_explicithierarchy_hierarchy1"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dim1" foreignKey="_column_fact_dim_key" dimension="_standarddimension_diml1" overrideDimensionName="Dim1" level="_level_h1_level2"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dim2" foreignKey="_column_fact_dim_key" dimension="_standarddimension_diml1" overrideDimensionName="Dim2" level="_level_h1_level1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure" name="Measure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimension.optimisationwithlevelattribute.zip" download>Download Zip File</a>
