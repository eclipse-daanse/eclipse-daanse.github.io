---
title: Cube with roles access database schema
group: Access
kind: TUTORIAL
number: 2.4.1
---
Cube with examples of roles with SchemaGrant all_dimensions
Cube1 - all access
Cube2 - no access


# Cube with role access database schema

This tutorial discusses roles with with DatabaseSchemaGrant.

roleAll role : use DatabaseSchemaGrant access all; (access all database)
roleNone role: use CatalogGrant access none; (no access to database)


## Database Schema

The Database Schema contains the Fact table with two columns: KEY and VALUE. The KEY column is used as the discriminator in the the Level and Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_Fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_KEY" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the Fact table to use in in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_FactQuery" table="_Fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1 with access all

The cube1 is defines by the DimensionConnector1 and the DimensionConnector2  and the MeasureGroup with measure with aggregation sum.


```xml
<roma:PhysicalCube   id="_Cube1" name="Cube1" query="_FactQuery">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_Measure1" name="Measure1" column="_Fact_VALUE"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleAll

The roleAll use DatabaseSchemaGrant access all; (access all database)


```xml
<roma:AccessRole  id="_roleAll" name="roleAll">
  <accessCatalogGrants catalogAccess="all">
    <cubeGrants cubeAccess="all" cube="roma:PhysicalCube _Cube1"/>
    <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="databaseSchema"/>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleNone

The roleNone use DatabaseSchemaGrant access none; (no access to database)


```xml
<roma:AccessRole  id="_roleNone" name="roleNone">
  <accessCatalogGrants catalogAccess="all">
    <cubeGrants cubeAccess="all" cube="roma:PhysicalCube _Cube1"/>
    <databaseSchemaGrants databaseSchema="databaseSchema"/>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema with roles access database schema" name="Cube with roles access database schema" cubes="_Cube1" accessRoles="_roleAll _roleNone" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_FactQuery" table="_Fact"/>
  <roma:PhysicalCube id="_Cube1" name="Cube1" query="_FactQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_Measure1" name="Measure1" column="_Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:AccessRole id="_roleNone" name="roleNone">
    <accessCatalogGrants catalogAccess="all">
      <cubeGrants cubeAccess="all" cube="_Cube1"/>
      <databaseSchemaGrants databaseSchema="databaseSchema"/>
    </accessCatalogGrants>
  </roma:AccessRole>
  <roma:AccessRole id="_roleAll" name="roleAll">
    <accessCatalogGrants catalogAccess="all">
      <cubeGrants cubeAccess="all" cube="_Cube1"/>
      <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="databaseSchema"/>
    </accessCatalogGrants>
  </roma:AccessRole>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.access.databaseschemagrand.zip" download>Download Zip File</a>
