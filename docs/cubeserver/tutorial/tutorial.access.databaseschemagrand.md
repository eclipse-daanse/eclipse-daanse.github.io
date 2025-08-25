---
title: Access Database Schema Grant
group: Access
kind: TUTORIAL
number: 2.4.1
---
# Daanse Tutorial - Access Database Schema Grant

This tutorial discusses roles with with DatabaseSchemaGrant.

- `roleAll` role : use DatabaseSchemaGrant access `all`; (access all database)
- `roleNone` role: use CatalogGrant access `none`; (no access to database)


## Database Schema

The Database Schema contains the `Fact` table with two columns: `KEY` and `VALUE`. The `KEY` column is used as the discriminator in the the Level and Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="_databaseSchema_DatabaseSchemaGrand">
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
## Cube1 with access all

The cube1 is defines by the DimensionConnector1 and the DimensionConnector2  and the MeasureGroup with measure with aggregation sum.


```xml
<roma:PhysicalCube   id="_cube_Cube1" name="Cube1" query="_query_factQuery">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleAll

The `roleAll` use DatabaseSchemaGrant access `all`; (access all database)


```xml
<roma:AccessRole  id="_accessRole_roleAll" name="roleAll">
  <accessCatalogGrants catalogAccess="all">
    <cubeGrants cubeAccess="all" cube="roma:PhysicalCube _cube_Cube1"/>
    <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="_databaseSchema_DatabaseSchemaGrand"/>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleNone

The `roleNone` use DatabaseSchemaGrant access `none`; (no access to database)


```xml
<roma:AccessRole  id="_accessRole_roleNone" name="roleNone">
  <accessCatalogGrants catalogAccess="all">
    <cubeGrants cubeAccess="all" cube="roma:PhysicalCube _cube_Cube1"/>
    <databaseSchemaGrants databaseSchema="_databaseSchema_DatabaseSchemaGrand"/>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Access control with database schema grants" name="Daanse Tutorial - Access Database Schema Grant" cubes="_cube_Cube1" accessRoles="_accessRole_roleAll _accessRole_roleNone" dbschemas="_databaseSchema_DatabaseSchemaGrand"/>
  <roma:DatabaseSchema id="_databaseSchema_DatabaseSchemaGrand">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_factQuery" table="_table_fact"/>
  <roma:PhysicalCube id="_cube_Cube1" name="Cube1" query="_query_factQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:AccessRole id="_accessRole_roleAll" name="roleAll">
    <accessCatalogGrants catalogAccess="all">
      <cubeGrants cubeAccess="all" cube="_cube_Cube1"/>
      <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="_databaseSchema_DatabaseSchemaGrand"/>
    </accessCatalogGrants>
  </roma:AccessRole>
  <roma:AccessRole id="_accessRole_roleNone" name="roleNone">
    <accessCatalogGrants catalogAccess="all">
      <cubeGrants cubeAccess="all" cube="_cube_Cube1"/>
      <databaseSchemaGrants databaseSchema="_databaseSchema_DatabaseSchemaGrand"/>
    </accessCatalogGrants>
  </roma:AccessRole>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.access.databaseschemagrand.zip" download>Download Zip File</a>
