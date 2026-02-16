---
title: Parent Child Minimal
group: Parent Child
kind: TUTORIAL
number: 2.17.1
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
<roma:DatabaseSchema   id="_databaseSchema_parentChildMinimal">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dimKey" name="DIM_KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_member" name="Hier_One_Top_Member">
    <columns xsi:type="roma:PhysicalColumn" id="_column_member_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_member_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_member_parentKey" name="PARENT_KEY" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Fact Query

The Query is a simple TableQuery that selects all columns from the Fact table to use in the measures.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the `Hier_One_Top_Member` table.


```xml
<roma:TableQuery  id="_query_member" table="_table_member"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

This Example uses Level1 level based on the KEY column and name column `NAME` of table `Hier_One_Top_Member`.


```xml
<roma:Level  id="_level_parentChild" name="Level" column="_column_member_key" nameColumn="_column_member_name" uniqueMembers="true"/>

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
<roma:ParentChildHierarchy  id="_hierarchy_parentChild" name="Hierarchy1" primaryKey="_column_member_key" query="_query_member" parentColumn="roma:PhysicalColumn _column_member_parentKey" level="_level_parentChild"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Diml1

The time dimension is defined with the one hierarchy.


```xml
<roma:StandardDimension  id="_dimension_parentChild" name="Dimension1" hierarchies="roma:ParentChildHierarchy _hierarchy_parentChild"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

The cube with Parent Child Hierarchy.


```xml
<roma:PhysicalCube   id="_cube_parentChildMinimal" name="Cube" query="_query_fact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_dimKey" dimension="roma:StandardDimension _dimension_parentChild" overrideDimensionName="Dimension1" id="_dimensionConnector_parentChild"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Minimal parent-child hierarchy" name="Daanse Tutorial - Parent Child Minimal" cubes="_cube_parentChildMinimal" dbschemas="_databaseSchema_parentChildMinimal"/>
  <roma:DatabaseSchema id="_databaseSchema_parentChildMinimal">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_dimKey" name="DIM_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_member" name="Hier_One_Top_Member">
      <columns xsi:type="roma:PhysicalColumn" id="_column_member_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_member_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_member_parentKey" name="PARENT_KEY" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:TableQuery id="_query_member" table="_table_member"/>
  <roma:Level id="_level_parentChild" name="Level" column="_column_member_key" nameColumn="_column_member_name" uniqueMembers="true"/>
  <roma:ParentChildHierarchy id="_hierarchy_parentChild" name="Hierarchy1" primaryKey="_column_member_key" query="_query_member" parentColumn="_column_member_parentKey" level="_level_parentChild"/>
  <roma:StandardDimension id="_dimension_parentChild" name="Dimension1" hierarchies="_hierarchy_parentChild"/>
  <roma:PhysicalCube id="_cube_parentChildMinimal" name="Cube" query="_query_fact">
    <dimensionConnectors foreignKey="_column_fact_dimKey" dimension="_dimension_parentChild" overrideDimensionName="Dimension1" id="_dimensionConnector_parentChild"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.parentchild.minimal.zip" download>Download Zip File</a>
