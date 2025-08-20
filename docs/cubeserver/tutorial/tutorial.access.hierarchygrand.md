---
title: Daanse Tutorial - Access Hierarchy Grant
group: Access
kind: TUTORIAL
number: 2.4.7
---
Cube with examples of role use HierarchyGrant hierarchy1 access all hierarchy2 access none;


# Cube with HierarchyGrant

This tutorial discusses role with HierarchyGrant

role1 role:   use HierarchyGrant hierarchy1 access all hierarchy2 access none;


## Database Schema

The Database Schema contains the Fact table with two columns: KEY and VALUE. The KEY column is used as the discriminator in the the Level and Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="_databaseSchema_HierarchyGrand">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the Fact table to use in in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_query_factQuery" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level2

This Example uses one simple Level2 bases on the KEY column.


```xml
<roma:Level  id="_level_Level1" name="Level1" column="_column_fact_key"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1 without hasAll Level1

The Hierarchy1 is defined with the hasAll property set to false and the one level2.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_Hierarchy1" name="Hierarchy1" hasAll="false" primaryKey="_column_fact_key" query="_query_factQuery" levels="_level_Level1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension1

The dimension1 is defined with the one hierarchy1.


```xml
<roma:StandardDimension  id="_dimension_Dimension1" name="Dimension1" hierarchies="roma:ExplicitHierarchy _hierarchy_Hierarchy1 roma:ExplicitHierarchy _hierarchy_Hierarchy2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1 with access all

The cube1 is defines by the DimensionConnector1 and the MeasureGroup with measure with aggregation sum.


```xml
<roma:PhysicalCube   id="_cube_Cube1" name="Cube1" query="_query_factQuery">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_key" dimension="roma:StandardDimension _dimension_Dimension1" overrideDimensionName="Dimension1" id="_dimensionConnector_dimension1"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Role1

The role1 use CatalogGrant access all; CubeGrant cube1 access all; dimensionGrant dimension1 access all;
hierarchyGrant hierarchy1 access custom with member grants [Dimension1].[A] -all, [Dimension1].[B] -none, [Dimension1].[C] -none;
(Cube1 - access to "A" Cube2 - no access)


```xml
<roma:AccessRole  id="_accessRole_role1" name="role1">
  <accessCatalogGrants catalogAccess="custom">
    <cubeGrants cubeAccess="custom" cube="roma:PhysicalCube _cube_Cube1">
      <dimensionGrants dimensionAccess="custom" dimension="roma:StandardDimension _dimension_Dimension1"/>
      <hierarchyGrants hierarchyAccess="all" hierarchy="roma:ExplicitHierarchy _hierarchy_Hierarchy1" bottomLevel="_level_Level1" topLevel="_level_Level1"/>
    </cubeGrants>
    <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="_databaseSchema_HierarchyGrand"/>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy_Hierarchy1" name="Hierarchy1" hasAll="false" primaryKey="_column_fact_key" query="_query_factQuery" levels="_level_Level1"/>
  <roma:ExplicitHierarchy id="_hierarchy_Hierarchy2" name="Hierarchy1" hasAll="false" primaryKey="_column_fact_key" query="_query_factQuery" levels="_level_Level2"/>
  <roma:Catalog description="Access control with hierarchy-level grants" name="Daanse Tutorial - Access Hierarchy Grant" cubes="_cube_Cube1" accessRoles="_accessRole_role1" dbschemas="_databaseSchema_HierarchyGrand"/>
  <roma:DatabaseSchema id="_databaseSchema_HierarchyGrand">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_factQuery" table="_table_fact"/>
  <roma:Level id="_level_Level2" name="Level2" column="_column_fact_key"/>
  <roma:Level id="_level_Level1" name="Level1" column="_column_fact_key"/>
  <roma:StandardDimension id="_dimension_Dimension1" name="Dimension1" hierarchies="_hierarchy_Hierarchy1 _hierarchy_Hierarchy2"/>
  <roma:PhysicalCube id="_cube_Cube1" name="Cube1" query="_query_factQuery">
    <dimensionConnectors foreignKey="_column_fact_key" dimension="_dimension_Dimension1" overrideDimensionName="Dimension1" id="_dimensionConnector_dimension1"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:AccessRole id="_accessRole_role1" name="role1">
    <accessCatalogGrants catalogAccess="custom">
      <cubeGrants cubeAccess="custom" cube="_cube_Cube1">
        <dimensionGrants dimensionAccess="custom" dimension="_dimension_Dimension1"/>
        <hierarchyGrants hierarchyAccess="all" hierarchy="_hierarchy_Hierarchy1" bottomLevel="_level_Level1" topLevel="_level_Level1"/>
      </cubeGrants>
      <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="_databaseSchema_HierarchyGrand"/>
    </accessCatalogGrants>
  </roma:AccessRole>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.access.hierarchygrand.zip" download>Download Zip File</a>
