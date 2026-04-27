---
title: Parent Child Parent As Leaf
group: Parent Child
kind: TUTORIAL
number: 2.17.04
---
# Daanse Tutorial - Parent Child Parent As Leaf

Catalog with Minimal Cube with Parent Child Hierarchy
Parent Child Hierarchy is self-referencing hierarchy where members can have parent-child relationships within the same table,
creating variable-depth structures.
Hierarchy has parentAsLeafEnable true value
This is a boolean flag that allows intermediate parent members to also appear as leaf members,
enabling scenarios where the same entity functions both as a container and as a data point.
When true, parents can have their own measures and participate in aggregations at multiple levels.


## Database Schema

The Database Schema contains the `Parent` table with 3 columns: `NAME`, `PARENT` and `VALUE`.
The `NAME` column is used as the discriminator in the Hierarchy definitions.



```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_parent" name="Parent">
    <feature xsi:type="relational:Column" xmi:id="_column_parent_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parent_parent" name="PARENT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parent_value" name="VALUE"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Fact Query

The Query is a simple TableSource that selects all columns from the `Parent` table to use in the measures.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_parent" table="_table_parent"/>
  <relational:Table xmi:id="_table_parent" name="Parent">
    <feature xsi:type="relational:Column" xmi:id="_column_parent_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parent_parent" name="PARENT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parent_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

This Example uses 'Name' level based on the `NAME` column as key and name column `NAME` of table `Parent`.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_name" name="Name" uniqueMembers="true">
  <column href="_column_parent_name"/>
  <nameColumn href="_column_parent_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1

The Hierarchy1 defined parentColumn to `NAME` column of `Parent` table.
`ParentColumn` containing the parent reference for each member, establishing the self-referencing relationship.
This column typically contains the primary key value of the parent member, or the nullParentValue for root members. The column enables the recursive traversal that defines the hierarchy structure.
Also Hierarchy1 defined the level 'Name'.
Level is Single level definition that applies to all members in this parent-child hierarchy.
Unlike explicit hierarchies with multiple levels, parent-child hierarchies use one level
definition that describes the properties and behavior of all members regardless of their position in the tree structure.
Also Hierarchy1 Hierarchy has parentAsLeafEnable true value
When true, parents can have their own measures and participate in aggregations at multiple levels.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_hierarchy" name="Hierarchy" allMemberName="All" primaryKey="_column_parent_name" query="_tablesource_parent" nullParentValue="all" parentColumn="_column_parent_parent" parentAsLeafEnable="true" parentAsLeafNameFormat="parent %s" level="_level_name"/>
  <rolaplev:Level xmi:id="_level_name" name="Name" column="_column_parent_name" nameColumn="_column_parent_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_parent" table="_table_parent"/>
  <relational:Table xmi:id="_table_parent" name="Parent">
    <feature xsi:type="relational:Column" xmi:id="_column_parent_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parent_parent" name="PARENT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parent_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Diml1

The time dimension is defined with the one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_parentchildhierarchy_hierarchy"/>
  <rolaplev:Level xmi:id="_level_name" name="Name" column="_column_parent_name" nameColumn="_column_parent_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_parent" table="_table_parent"/>
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_hierarchy" name="Hierarchy" allMemberName="All" primaryKey="_column_parent_name" query="_tablesource_parent" nullParentValue="all" parentColumn="_column_parent_parent" parentAsLeafEnable="true" parentAsLeafNameFormat="parent %s" level="_level_name"/>
  <relational:Table xmi:id="_table_parent" name="Parent">
    <feature xsi:type="relational:Column" xmi:id="_column_parent_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parent_parent" name="PARENT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parent_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

The cube with Parent Child Hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_parent">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension" foreignKey="_column_parent_name" dimension="_standarddimension_dimension" overrideDimensionName="Dimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_value" name="Value" column="_column_parent_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaplev:Level xmi:id="_level_name" name="Name" column="_column_parent_name" nameColumn="_column_parent_name" uniqueMembers="true"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_parentchildhierarchy_hierarchy"/>
  <rolapsrc:TableSource xmi:id="_tablesource_parent" table="_table_parent"/>
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_hierarchy" name="Hierarchy" allMemberName="All" primaryKey="_column_parent_name" query="_tablesource_parent" nullParentValue="all" parentColumn="_column_parent_parent" parentAsLeafEnable="true" parentAsLeafNameFormat="parent %s" level="_level_name"/>
  <relational:Table xmi:id="_table_parent" name="Parent">
    <feature xsi:type="relational:Column" xmi:id="_column_parent_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parent_parent" name="PARENT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parent_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_parent_name _column_parent_parent" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_parent_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_parent_child_parent_as_leaf" description="Parent-child hierarchy with parent as leaf enabled" name="Daanse Tutorial - Parent Child Parent As Leaf" cubes="_physicalcube_cube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_parent" name="Parent">
      <feature xsi:type="relational:Column" xmi:id="_column_parent_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parent_parent" name="PARENT" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parent_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_parent" table="_table_parent"/>
  <rolaplev:Level xmi:id="_level_name" name="Name" column="_column_parent_name" nameColumn="_column_parent_name" uniqueMembers="true"/>
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_hierarchy" name="Hierarchy" allMemberName="All" primaryKey="_column_parent_name" query="_tablesource_parent" nullParentValue="all" parentColumn="_column_parent_parent" parentAsLeafEnable="true" parentAsLeafNameFormat="parent %s" level="_level_name"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_parentchildhierarchy_hierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_parent">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension" foreignKey="_column_parent_name" dimension="_standarddimension_dimension" overrideDimensionName="Dimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_value" name="Value" column="_column_parent_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.parentchild.parentasleaf.zip" download>Download Zip File</a>
