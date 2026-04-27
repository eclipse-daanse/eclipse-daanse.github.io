---
title: Access Database Schema Grant
group: Access
kind: TUTORIAL
number: 2.04.01
---
# Daanse Tutorial - Access Database Schema Grant

This tutorial discusses roles with DatabaseSchemaGrant.

- `roleAll` role : use DatabaseSchemaGrant access `all`; (access all database)
- `roleNone` role: use CatalogGrant access `none`; (no access to database)


## Database Schema

The Database Schema contains the `Fact` table with two columns: `KEY` and `VALUE`. The `KEY` column is used as the discriminator in the Level and Hierarchy definitions.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableSource that selects all columns from the Fact table to use in the hierarchy and in the cube for the measures.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1 with access all

The cube1 is defined by the DimensionConnector1 and the DimensionConnector2  and the MeasureGroup with measure with aggregation sum.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleAll

The `roleAll` use DatabaseSchemaGrant access `all`; (access all database)


```xml
<rolapcacc:AccessRole xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmi:id="_accessrole_roleall" name="roleAll">
  <accessCatalogGrants xmi:id="_accesscataloggrant" catalogAccess="all">
    <cubeGrants xmi:id="_accesscubegrant_cube1" cubeAccess="all">
      <cube xsi:type="rolapcube:PhysicalCube" href="_physicalcube_cube1"/>
    </cubeGrants>
    <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant" databaseSchemaAccess="all">
      <databaseSchema href="_schema"/>
    </databaseSchemaGrants>
  </accessCatalogGrants>
</rolapcacc:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleNone

The `roleNone` use DatabaseSchemaGrant access `none`; (no access to database)


```xml
<rolapcacc:AccessRole xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmi:id="_accessrole_rolenone" name="roleNone">
  <accessCatalogGrants xmi:id="_accesscataloggrant" catalogAccess="all">
    <cubeGrants xmi:id="_accesscubegrant_cube1" cubeAccess="all">
      <cube xsi:type="rolapcube:PhysicalCube" href="_physicalcube_cube1"/>
    </cubeGrants>
    <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant">
      <databaseSchema href="_schema"/>
    </databaseSchemaGrants>
  </accessCatalogGrants>
</rolapcacc:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_access_database_schema_grant" description="Access control with database schema grants" name="Daanse Tutorial - Access Database Schema Grant" cubes="_physicalcube_cube1" accessRoles="_accessrole_roleall _accessrole_rolenone" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcacc:AccessRole xmi:id="_accessrole_roleall" name="roleAll">
    <accessCatalogGrants xmi:id="_accesscataloggrant" catalogAccess="all">
      <cubeGrants xmi:id="_accesscubegrant_cube1" cubeAccess="all" cube="_physicalcube_cube1"/>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant_1" databaseSchemaAccess="all" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <rolapcacc:AccessRole xmi:id="_accessrole_rolenone" name="roleNone">
    <accessCatalogGrants xmi:id="_accesscataloggrant_1" catalogAccess="all">
      <cubeGrants xmi:id="_accesscubegrant_cube1_1" cubeAccess="all" cube="_physicalcube_cube1"/>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.access.databaseschemagrand.zip" download>Download Zip File</a>
