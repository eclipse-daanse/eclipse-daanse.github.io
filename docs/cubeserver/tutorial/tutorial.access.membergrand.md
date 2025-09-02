---
title: Access Member Grant
group: Access
kind: TUTORIAL
number: 2.4.8
---
# Daanse Tutorial - Access Member Grant

This tutorial discusses role with MemberGrant

role1 role: with member grants <br />
- [Dimension1].[A] -all;
- [Dimension1].[B] -none;
- [Dimension1].[C] -none;
(Cube1 - access to 'A' only)

Rollup policy: (Full. Partial. Hidden.)<br />
- Full. The total for that member includes all children. This is the default policy if you don't specify the rollupPolicy attribute.
- Partial. The total for that member includes only accessible children.
- Hidden. If any of the children are inaccessible, the total is hidden.


## Database Schema

The Database Schema contains the `Fact` table with two columns: `KEY` and `VALUE`. The `KEY` column is used as the discriminator in the the Level and Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="_databaseSchema_MemberGrand">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the `Fact` table to use in in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_query_factQuery" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

This Example uses one simple Level1 bases on the `KEY` column.


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
<roma:StandardDimension  id="_dimension_Dimension1" name="Dimension1" hierarchies="roma:ExplicitHierarchy _hierarchy_Hierarchy1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1 with access all

The cube1 is defines by the DimensionConnector1 and the DimensionConnector2  and the MeasureGroup with measure with aggregation sum.


```xml
<roma:PhysicalCube   id="_cube_Cube1" name="Cube1" query="_query_factQuery">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_key" dimension="roma:StandardDimension _dimension_Dimension1" overrideDimensionName="Dimension1" id="_dimensionConnector_dimension11"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_key" dimension="roma:StandardDimension _dimension_Dimension1" overrideDimensionName="Dimension2" id="_dimensionConnector_dimension12"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Role1

The `role1` use CatalogGrant access `all`; CubeGrant cube1 access `all`; dimensionGrant dimension1 access `all`;
hierarchyGrant hierarchy1 access custom with member grants<br />
[Dimension1].[A] -all,<br />
[Dimension1].[B] -none,<br />
[Dimension1].[C] -none;<br />
(Cube1 - access to "A" Cube2 - no access)


```xml
<roma:AccessRole  id="_accessRole_role1" name="role1">
  <accessCatalogGrants catalogAccess="custom">
    <cubeGrants cubeAccess="custom" cube="roma:PhysicalCube _cube_Cube1">
      <dimensionGrants dimensionAccess="all" dimension="roma:StandardDimension _dimension_Dimension1"/>
      <hierarchyGrants hierarchyAccess="custom" hierarchy="roma:ExplicitHierarchy _hierarchy_Hierarchy1" bottomLevel="_level_Level1" topLevel="_level_Level1">
        <memberGrants memberAccess="all" member="[Dimension1].[A]"/>
        <memberGrants member="[Dimension1].[B]"/>
        <memberGrants member="[Dimension1].[C]"/>
      </hierarchyGrants>
    </cubeGrants>
    <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="_databaseSchema_MemberGrand"/>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Access control with member-level grants" name="Daanse Tutorial - Access Member Grant" cubes="_cube_Cube1" accessRoles="_accessRole_role1" dbschemas="_databaseSchema_MemberGrand"/>
  <roma:DatabaseSchema id="_databaseSchema_MemberGrand">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_factQuery" table="_table_fact"/>
  <roma:Level id="_level_Level1" name="Level1" column="_column_fact_key"/>
  <roma:ExplicitHierarchy id="_hierarchy_Hierarchy1" name="Hierarchy1" hasAll="false" primaryKey="_column_fact_key" query="_query_factQuery" levels="_level_Level1"/>
  <roma:StandardDimension id="_dimension_Dimension1" name="Dimension1" hierarchies="_hierarchy_Hierarchy1"/>
  <roma:PhysicalCube id="_cube_Cube1" name="Cube1" query="_query_factQuery">
    <dimensionConnectors foreignKey="_column_fact_key" dimension="_dimension_Dimension1" overrideDimensionName="Dimension1" id="_dimensionConnector_dimension11"/>
    <dimensionConnectors foreignKey="_column_fact_key" dimension="_dimension_Dimension1" overrideDimensionName="Dimension2" id="_dimensionConnector_dimension12"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:AccessRole id="_accessRole_role1" name="role1">
    <accessCatalogGrants catalogAccess="custom">
      <cubeGrants cubeAccess="custom" cube="_cube_Cube1">
        <dimensionGrants dimensionAccess="all" dimension="_dimension_Dimension1"/>
        <hierarchyGrants hierarchyAccess="custom" hierarchy="_hierarchy_Hierarchy1" bottomLevel="_level_Level1" topLevel="_level_Level1">
          <memberGrants memberAccess="all" member="[Dimension1].[A]"/>
          <memberGrants member="[Dimension1].[B]"/>
          <memberGrants member="[Dimension1].[C]"/>
        </hierarchyGrants>
      </cubeGrants>
      <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="_databaseSchema_MemberGrand"/>
    </accessCatalogGrants>
  </roma:AccessRole>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.access.membergrand.zip" download>Download Zip File</a>
