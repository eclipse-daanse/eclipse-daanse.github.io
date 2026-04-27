---
title: Database Schema
group: Database
kind: TUTORIAL
number: 1.03
---
# Daanse Tutorial - Database Schema

The purpose of database schemas is to organize tables into logical groups.

In the Daanse server, schemas can be referenced in the catalog. None or only a subset of the existing database schemas may be referenced. This reference is only required if the Daanse server needs to expose the schemas and their tables via an API, such as XMLA.


## Schema without name

The name of a database schema is optional and can be left empty. In such cases, the server will query the default schema of the underlying database.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Schema and attrebutes

It is more secure to explicitly define the schema using the `name` attribute. To provide a clearer description of the schema's contents, you can use the `description` attribute.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema_foo" name="foo"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
Schema can be refernced in the catalog. You can see this by checking the `dbSchema attribute` in the catalog.

```xml
<rolapcat:Catalog xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmi:id="_catalog_databaseschema" id="_catalog_databaseSchema" description="Database schema configuration and organization" name="Daanse Tutorial - Database Schema">
  <dbschemas href="_schema"/>
  <dbschemas href="_schema_foo"/>
</rolapcat:Catalog>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_thetable_thecolumn _column_foo_thetable_thecolumn" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_databaseschema" id="_catalog_databaseSchema" description="Database schema configuration and organization" name="Daanse Tutorial - Database Schema" dbschemas="_schema _schema_foo"/>
  <relational:Schema xmi:id="_schema_foo" name="foo">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_thetable_1" name="theTable">
      <feature xsi:type="relational:Column" xmi:id="_column_foo_thetable_thecolumn" name="theColumn" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_thetable" name="theTable">
      <feature xsi:type="relational:Column" xmi:id="_column_thetable_thecolumn" name="theColumn" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.schema.zip" download>Download Zip File</a>
