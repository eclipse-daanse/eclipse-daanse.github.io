---
title: Parent Child Parent As Leaf
group: Parent Child
kind: TUTORIAL
number: 2.17.4
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

The Database Schema contains the Parent table with 3 columns: NAME, PARENT and VALUE.
The NAME column is used as the discriminator in the Hierarchy definitions.



```xml
<roma:DatabaseSchema   id="_databaseSchema_parentAsLeaf">
  <tables xsi:type="roma:PhysicalTable" id="_table_parent" name="Parent">
    <columns xsi:type="roma:PhysicalColumn" id="_column_parent_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_parent_parent" name="PARENT"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_parent_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Fact Query

The Query is a simple TableQuery that selects all columns from the Parent table to use in the measures.


```xml
<roma:TableQuery  id="_query_parentFact" table="_table_parent"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

This Example uses 'Name' level bases on the NAME column as key and name column NAME of table Parent.


```xml
<roma:Level  id="_level_name" name="Name" column="_column_parent_name" nameColumn="_column_parent_name" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1

The Hierarchy1 defined parentColumn to NAME column of Parent table.
ParentColumn containing the parent reference for each member, establishing the self-referencing relationship.
This column typically contains the primary key value of the parent member, or the nullParentValue for root members. The column enables the recursive traversal that defines the hierarchy structure.
Also Hierarchy1 defined the level 'Name'.
Level is Single level definition that applies to all members in this parent-child hierarchy.
Unlike explicit hierarchies with multiple levels, parent-child hierarchies use one level
definition that describes the properties and behavior of all members regardless of their position in the tree structure.
Also Hierarchy1 Hierarchy has parentAsLeafEnable true value
When true, parents can have their own measures and participate in aggregations at multiple levels.


```xml
<roma:ParentChildHierarchy  id="_hierarchy_parentChild" name="Hierarchy" allMemberName="All" primaryKey="_column_parent_name" query="_query_parentFact" nullParentValue="all" parentColumn="roma:PhysicalColumn _column_parent_parent" parentAsLeafEnable="true" parentAsLeafNameFormat="parent %s" level="_level_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Diml1

The time dimension is defined with the one hierarchy.


```xml
<roma:StandardDimension  id="_dimension_parentChild" name="Dimension" hierarchies="roma:ParentChildHierarchy _hierarchy_parentChild"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

The cube with with Parent Child Hierarchy.


```xml
<roma:PhysicalCube   id="_cube_parentAsLeaf" name="Cube" query="_query_parentFact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_parent_name" dimension="roma:StandardDimension _dimension_parentChild" overrideDimensionName="Dimension" id="_dimensionConnector_parentChild"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_value" name="Value" column="_column_parent_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ParentChildHierarchy id="_hierarchy_parentChild" name="Hierarchy" allMemberName="All" primaryKey="_column_parent_name" query="_query_parentFact" nullParentValue="all" parentColumn="_column_parent_parent" parentAsLeafEnable="true" parentAsLeafNameFormat="parent %s" level="_level_name"/>
  <roma:Catalog description="Parent-child hierarchy with parent as leaf enabled" name="Daanse Tutorial - Parent Child Parent As Leaf" cubes="_cube_parentAsLeaf" dbschemas="_databaseSchema_parentAsLeaf"/>
  <roma:DatabaseSchema id="_databaseSchema_parentAsLeaf">
    <tables xsi:type="roma:PhysicalTable" id="_table_parent" name="Parent">
      <columns xsi:type="roma:PhysicalColumn" id="_column_parent_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parent_parent" name="PARENT"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parent_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_parentFact" table="_table_parent"/>
  <roma:Level id="_level_name" name="Name" column="_column_parent_name" nameColumn="_column_parent_name" uniqueMembers="true"/>
  <roma:StandardDimension id="_dimension_parentChild" name="Dimension" hierarchies="_hierarchy_parentChild"/>
  <roma:PhysicalCube id="_cube_parentAsLeaf" name="Cube" query="_query_parentFact">
    <dimensionConnectors foreignKey="_column_parent_name" dimension="_dimension_parentChild" overrideDimensionName="Dimension" id="_dimensionConnector_parentChild"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_value" name="Value" column="_column_parent_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.parentchild.parentasleaf.zip" download>Download Zip File</a>
