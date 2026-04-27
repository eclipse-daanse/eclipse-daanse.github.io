---
title: Parent Child Minimal
group: Parent Child
kind: TUTORIAL
number: 2.17.01
---
# Daanse Tutorial - Parent Child Minimal

Catalog with Minimal Cube with Parent Child Hierarchy
Parent Child Hierarchy is self-referencing hierarchy where members can have parent-child relationships within the same table,
creating variable-depth structures.


## Database Schema

The Database Schema contains the `Fact` table with two columns: `DIM_KEY` and `VALUE`.
The `DATE_KEY` column is used as the discriminator in the Hierarchy definitions.

`Hier_One_Top_Member` table with 3 columns: `KEY`, `NAME`, `PARENT_KEY`


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_hier_one_top_member" name="Hier_One_Top_Member">
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_parent_key" name="PARENT_KEY"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Fact Query

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
## Query

The Query is a simple TableSource that selects all columns from the `Hier_One_Top_Member` table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_hier_one_top_member" table="_table_hier_one_top_member"/>
  <relational:Table xmi:id="_table_hier_one_top_member" name="Hier_One_Top_Member">
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_parent_key" name="PARENT_KEY"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

This Example uses Level1 level based on the KEY column and name column `NAME` of table `Hier_One_Top_Member`.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_level" name="Level" uniqueMembers="true">
  <column href="_column_hier_one_top_member_key"/>
  <nameColumn href="_column_hier_one_top_member_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1

The Hierarchy1 defined parentColumn to PARENT_KEY column of Hier_One_Top_Member table.
ParentColumn containing the parent reference for each member, establishing the self-referencing relationship.
This column typically contains the primary key value of the parent member, or the nullParentValue for root members. The column enables the recursive traversal that defines the hierarchy structure.
Also Hierarchy1 defined the level Level1.
Level is Single level definition that applies to all members in this parent-child hierarchy.
Unlike explicit hierarchies with multiple levels, parent-child hierarchies use one level
definition that describes the properties and behavior of all members regardless of their position in the tree structure.



```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hier_one_top_member_key" query="_tablesource_hier_one_top_member" parentColumn="_column_hier_one_top_member_parent_key" level="_level_level"/>
  <relational:Table xmi:id="_table_hier_one_top_member" name="Hier_One_Top_Member">
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_parent_key" name="PARENT_KEY"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_level" name="Level" column="_column_hier_one_top_member_key" nameColumn="_column_hier_one_top_member_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_hier_one_top_member" table="_table_hier_one_top_member"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Diml1

The time dimension is defined with the one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_parentchildhierarchy_hierarchy1"/>
  <relational:Table xmi:id="_table_hier_one_top_member" name="Hier_One_Top_Member">
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_parent_key" name="PARENT_KEY"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_level" name="Level" column="_column_hier_one_top_member_key" nameColumn="_column_hier_one_top_member_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_hier_one_top_member" table="_table_hier_one_top_member"/>
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hier_one_top_member_key" query="_tablesource_hier_one_top_member" parentColumn="_column_hier_one_top_member_parent_key" level="_level_level"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

The cube with Parent Child Hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension1" foreignKey="_column_fact_dim_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_parentchildhierarchy_hierarchy1"/>
  <relational:Table xmi:id="_table_hier_one_top_member" name="Hier_One_Top_Member">
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_parent_key" name="PARENT_KEY"/>
  </relational:Table>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level" name="Level" column="_column_hier_one_top_member_key" nameColumn="_column_hier_one_top_member_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_hier_one_top_member" table="_table_hier_one_top_member"/>
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hier_one_top_member_key" query="_tablesource_hier_one_top_member" parentColumn="_column_hier_one_top_member_parent_key" level="_level_level"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_hier_one_top_member_key _column_fact_value _column_fact_dim_key _column_hier_one_top_member_parent_key" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_hier_one_top_member_name" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_parent_child_minimal" description="Minimal parent-child hierarchy" name="Daanse Tutorial - Parent Child Minimal" cubes="_physicalcube_cube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_hier_one_top_member" name="Hier_One_Top_Member">
      <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_key" name="KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_hier_one_top_member_parent_key" name="PARENT_KEY" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_hier_one_top_member" table="_table_hier_one_top_member"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level" name="Level" column="_column_hier_one_top_member_key" nameColumn="_column_hier_one_top_member_name" uniqueMembers="true"/>
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hier_one_top_member_key" query="_tablesource_hier_one_top_member" parentColumn="_column_hier_one_top_member_parent_key" level="_level_level"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_parentchildhierarchy_hierarchy1"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension1" foreignKey="_column_fact_dim_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.parentchild.minimal.zip" download>Download Zip File</a>
