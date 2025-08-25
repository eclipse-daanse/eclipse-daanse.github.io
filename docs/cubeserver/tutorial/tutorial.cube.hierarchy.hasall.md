---
title: Cube Hierarchy Has All
group: Hierarchy
kind: TUTORIAL
number: 2.3.4
---
# Daanse Tutorial - Cube Hierarchy Has All

In a hierarchy, the top level can sometimes be a special case. Typically, levels are created using a Level object, along with a reference to a column and a query on the hierarchy. However, there are situations where no dedicated column or table entry exists for the top level. For example if you want to represent a grand total. In such cases, you can generate a generic top level that serves as a final aggregation for all members of the level below.

To manage the creation of this top level, the hierarchy provides specific attributes:

- `hasAll` A Boolean attribute that indicates whether a so-called “HasAll” level is needed. If hasAll is set to true, a top level will be generated.

- `allLevelName` Specifies the name for the top level itself.

- `allMemberName` Specifies the name of the member within this top level. If this attribute is not set, the default name is used in the form: `All <HierarchyName>s`.

By configuring these attributes, you can control whether a top-level aggregation appears, as well as how it is labeled in your hierarchy.



## Database Schema

The cube defined in this example is based on three table: Fact.

- The Fact table contains measures and a reference to the Level.


```xml
<roma:DatabaseSchema   id="_databaseschema">
  <tables xsi:type="roma:PhysicalTable" id="_table" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

This Query references the Fact table and will be udes for the Cube and all Hierarchies in same way.


```xml
<roma:TableQuery  id="_query" table="_table"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level

The Level object uses the column attribute to specify the column names `KEY` that represents the level and its members.
This the only Level that exists in this example and will be used in all hierarchies the same way.


```xml
<roma:Level  id="_level" name="theLevel" column="_col_fact_key"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy with hasAll Level and custom names

tHis hierarchy sets the attribute `hasAll` to true, which means that a top level will be generated. The hierarchy will contain the levels defined in the Level object and an additional top level with the custom Name for the All-Level and the All-Member.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_hasall_complex" name="Hierarchy - with HasAll and Names" allLevelName="theAllLevelName" allMemberName="theAllMemberName" primaryKey="_col_fact_key" query="_query" levels="_level"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy with hasAll Level and defaut names

This hierarchy sets the attribute `hasAll` to true, which means that a top level will be generated. The hierarchy will contain the levels defined in the Level object and an additional top level with the default Name for the All-Level and the All-Member.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_hasall_simple" name="Hierarchy - with HasAll" primaryKey="_col_fact_key" query="_query" levels="_level"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy without hasAll Level

This Hierarchy sets the attribute `hasAll` to false, which means that no top level will be generated. The hierarchy will only contain the levels defined in the Level object.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_hasall_no" name="Hierarchy - Without HasAll" hasAll="false" primaryKey="_col_fact_key" query="_query" levels="_level"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension that containes all the hierarchies.


```xml
<roma:StandardDimension  id="_dimension" name="Dimension1" hierarchies="roma:ExplicitHierarchy _hierarchy_hasall_simple roma:ExplicitHierarchy _hierarchy_hasall_complex roma:ExplicitHierarchy _hierarchy_hasall_no"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.


```xml
<roma:PhysicalCube   id="_cube" name="HasAll Cube" query="_query">
  <dimensionConnectors dimension="roma:StandardDimension _dimension" id="_dc_dimension"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure" name="theMeasure" column="_col_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy_hasall_complex" name="Hierarchy - with HasAll and Names" allLevelName="theAllLevelName" allMemberName="theAllMemberName" primaryKey="_col_fact_key" query="_query" levels="_level"/>
  <roma:ExplicitHierarchy id="_hierarchy_hasall_simple" name="Hierarchy - with HasAll" primaryKey="_col_fact_key" query="_query" levels="_level"/>
  <roma:ExplicitHierarchy id="_hierarchy_hasall_no" name="Hierarchy - Without HasAll" hasAll="false" primaryKey="_col_fact_key" query="_query" levels="_level"/>
  <roma:Catalog description="Hierarchy with all-member configuration" name="Daanse Tutorial - Cube Hierarchy Has All" cubes="_cube" dbschemas="_databaseschema"/>
  <roma:DatabaseSchema id="_databaseschema">
    <tables xsi:type="roma:PhysicalTable" id="_table" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query" table="_table"/>
  <roma:Level id="_level" name="theLevel" column="_col_fact_key"/>
  <roma:StandardDimension id="_dimension" name="Dimension1" hierarchies="_hierarchy_hasall_simple _hierarchy_hasall_complex _hierarchy_hasall_no"/>
  <roma:PhysicalCube id="_cube" name="HasAll Cube" query="_query">
    <dimensionConnectors dimension="_dimension" id="_dc_dimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure" name="theMeasure" column="_col_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.hierarchy.hasall.zip" download>Download Zip File</a>
