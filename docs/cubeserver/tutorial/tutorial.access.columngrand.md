---
title: Access Column Grant
group: Access
kind: TUTORIAL
number: 2.04.03
---
# Daanse Tutorial - Access Column Grant

This tutorial discusses roles with ColumnGrant.

- `roleAll`    role: use TableGrant access `all`; (access all database all tables all columns)
- `roleNone`   role: use TableGrant access `none`; (no access to database columns)


## Database Schema

The Database Schema contains the `Fact` table with two columns: `KEY` and `VALUE`. The `KEY` column is used as the discriminator in the Level and Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="_databaseSchema_ColumnGrand">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the `Fact` table to use in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1 with access all

The `cube1` is defined by the DimensionConnector1 and the DimensionConnector2  and the MeasureGroup with measure with aggregation sum.


```xml
<roma:PhysicalCube   id="_cube_main" name="Cube1" query="_query_fact">
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleAll

The `roleAll` use TableGrant access `all`; (access all tables columns)


```xml
<roma:AccessRole  id="_accessRole_all" name="roleAll">
  <accessCatalogGrants catalogAccess="all">
    <cubeGrants cubeAccess="all" cube="roma:PhysicalCube _cube_main"/>
    <databaseSchemaGrants databaseSchemaAccess="custom" databaseSchema="_databaseSchema_ColumnGrand">
      <tableGrants tableAccess="custom" table="_table_fact">
        <columnGrants columnAccess="all" column="_column_fact_value"/>
        <columnGrants columnAccess="all" column="_column_fact_key"/>
      </tableGrants>
    </databaseSchemaGrants>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleNone

The `roleNone` use ColumnGrant access `none`; (no access to all tables columns)


```xml
<roma:AccessRole  id="_accessRole_none" name="roleNone">
  <accessCatalogGrants catalogAccess="all">
    <cubeGrants cubeAccess="all" cube="roma:PhysicalCube _cube_main"/>
    <databaseSchemaGrants databaseSchemaAccess="custom" databaseSchema="_databaseSchema_ColumnGrand">
      <tableGrants tableAccess="custom" table="_table_fact">
        <columnGrants column="_column_fact_value"/>
      </tableGrants>
    </databaseSchemaGrants>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Demonstrates access control with column-level grants" name="Daanse Tutorial - Access Column Grant" cubes="_cube_main" accessRoles="_accessRole_all _accessRole_none" dbschemas="_databaseSchema_ColumnGrand"/>
  <roma:DatabaseSchema id="_databaseSchema_ColumnGrand">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:PhysicalCube id="_cube_main" name="Cube1" query="_query_fact">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:AccessRole id="_accessRole_all" name="roleAll">
    <accessCatalogGrants catalogAccess="all">
      <cubeGrants cubeAccess="all" cube="_cube_main"/>
      <databaseSchemaGrants databaseSchemaAccess="custom" databaseSchema="_databaseSchema_ColumnGrand">
        <tableGrants tableAccess="custom" table="_table_fact">
          <columnGrants columnAccess="all" column="_column_fact_value"/>
          <columnGrants columnAccess="all" column="_column_fact_key"/>
        </tableGrants>
      </databaseSchemaGrants>
    </accessCatalogGrants>
  </roma:AccessRole>
  <roma:AccessRole id="_accessRole_none" name="roleNone">
    <accessCatalogGrants catalogAccess="all">
      <cubeGrants cubeAccess="all" cube="_cube_main"/>
      <databaseSchemaGrants databaseSchemaAccess="custom" databaseSchema="_databaseSchema_ColumnGrand">
        <tableGrants tableAccess="custom" table="_table_fact">
          <columnGrants column="_column_fact_value"/>
        </tableGrants>
      </databaseSchemaGrants>
    </accessCatalogGrants>
  </roma:AccessRole>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.access.columngrand.zip" download>Download Zip File</a>
