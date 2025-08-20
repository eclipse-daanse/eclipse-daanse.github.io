---
title: Minimal Cube with ParentChildHierarchy with ParentChildLink
group: Parent Child
kind: TUTORIAL
number: 2.17.2
---



# Catalog with Cube with Parent Child Hierarchy with ParentChildLink

Catalog with Minimal Cube with Parent Child Hierarchy
Parent Child Hierarchy is self-referencing hierarchy where members can have parent-child relationships within the same table,
creating variable-depth structures.
Hierarchy has nullParentValue attribute.
nullParentValue attribute is string value in the parent column that indicates root-level members (those without parents).
Common values include '0', 'NULL', or empty string. This value identifies which members serve as the top-level roots of the hierarchy tree structure.
Our example uses 'All'
Also hierarchy has ParentChildLink attribute.
ParentChildLink is table configuration for performance optimization of parent-child queries.
The closure table pre-computes all ancestor-descendant relationships, enabling efficient recursive queries and aggregations.
When specified, provides significant performance benefits for deep hierarchies with complex drill-down operations.


## Database Schema

The Database Schema contains the Parent table with 3 columns: NAME, PARENT and VALUE.
The NAME column is used as the discriminator in the Hierarchy definitions.
The Database Schema also contains the Closure  table with 3 columns: NAME, PARENT and DISTANCE.


```xml
<roma:DatabaseSchema   id="_databaseSchema_link">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_fact_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_fact_parent" name="PARENT"/>
    <columns xsi:type="roma:PhysicalColumn" id="_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_closure" name="Closure">
    <columns xsi:type="roma:PhysicalColumn" id="_closure_name" name="NAME" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_closure_parent" name="PARENT"/>
    <columns xsi:type="roma:PhysicalColumn" id="_closure_distance" name="DISTANCE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Fact Query

The Query is a simple TableQuery that selects all columns from the Parent table to use in the measures.


```xml
<roma:TableQuery  id="_table_factQuery" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Closure Query

The ClosureQuery is a simple TableQuery that selects all columns from the Parent table to use in the parent child link.


```xml
<roma:TableQuery  id="_query_closure" table="_table_closure"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

This Example uses 'Name' level bases on the NAME column as key and name column NAME of table Parent.


```xml
<roma:Level  id="_level_name" name="Name" column="_fact_name" nameColumn="_fact_name" uniqueMembers="true"/>

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
Also Hierarchy1 defined the nullParentValue attribute with '0'.
Elements items with PARENT = '0' are root elements in the tree
Also Hierarchy1 defined the ParentChildLink with reference to Closure table.


```xml
<roma:ParentChildHierarchy  id="_hierarchy" name="Hierarchy" primaryKey="_fact_name" query="_table_factQuery" nullParentValue="0" parentColumn="roma:PhysicalColumn _fact_parent" level="_level_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Diml1

The time dimension is defined with the one hierarchy.


```xml
<roma:StandardDimension  id="_dimension" name="Dimension" hierarchies="roma:ParentChildHierarchy _hierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

The cube with with Parent Child Hierarchy.


```xml
<roma:PhysicalCube   id="_cube" name="Cube" query="_table_factQuery">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _fact_name" dimension="roma:StandardDimension _dimension" overrideDimensionName="Dimension" id="_dc_dimension"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_value" name="Value" column="_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ParentChildHierarchy id="_hierarchy" name="Hierarchy" primaryKey="_fact_name" query="_table_factQuery" nullParentValue="0" parentColumn="_fact_parent" level="_level_name">
    <parentChildLink childColumn="_closure_name" parentColumn="_closure_parent">
      <table id="_query_closure" table="_table_closure"/>
    </parentChildLink>
  </roma:ParentChildHierarchy>
  <roma:Catalog description="Schema of a minimal cube with ParentChildHierarchy with ParentChildLink" name="Minimal Cube with ParentChildHierarchy with ParentChildLink" cubes="_cube" dbschemas="_databaseSchema_link"/>
  <roma:DatabaseSchema id="_databaseSchema_link">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_fact_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_fact_parent" name="PARENT"/>
      <columns xsi:type="roma:PhysicalColumn" id="_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_closure" name="Closure">
      <columns xsi:type="roma:PhysicalColumn" id="_closure_name" name="NAME" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_closure_parent" name="PARENT"/>
      <columns xsi:type="roma:PhysicalColumn" id="_closure_distance" name="DISTANCE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_table_factQuery" table="_table_fact"/>
  <roma:Level id="_level_name" name="Name" column="_fact_name" nameColumn="_fact_name" uniqueMembers="true"/>
  <roma:StandardDimension id="_dimension" name="Dimension" hierarchies="_hierarchy"/>
  <roma:PhysicalCube id="_cube" name="Cube" query="_table_factQuery">
    <dimensionConnectors foreignKey="_fact_name" dimension="_dimension" overrideDimensionName="Dimension" id="_dc_dimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_value" name="Value" column="_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.parentchild.link.zip" download>Download Zip File</a>
