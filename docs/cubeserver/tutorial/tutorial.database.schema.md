---
title: Database Schema
group: Database
kind: TUTORIAL
number: 1.3
---
# Daanse Tutorial - Database Schema

The purpose of database schemas is to organize tables into logical groups.

In the Daanse server, schemas can be referenced in the catalog. None or only a subset of the existing database schemas may be referenced. This reference is only required if the Daanse server needs to expose the schemas and their tables via an API, such as XMLA.


## Schema without name

The name of a database schema is optional and can be left empty. In such cases, the server will query the default schema of the underlying database.


```xml
<roma:DatabaseSchema  id="_databaseSchema_default"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Schema and attrebutes

It is more secure to explicitly define the schema using the `name` attribute. To provide a clearer description of the schema's contents, you can use the `description` attribute.


```xml
<roma:DatabaseSchema  id="_databaseSchema_foo" description="theDescription" name="foo"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
Schema can be refernced in the catalog. You can see this by checking the `dbSchema attribute` in the catalog.

```xml
<roma:Catalog  id="_catalog_databaseSchema" description="Database schema configuration and organization" name="Daanse Tutorial - Database Schema" dbschemas="_databaseSchema_default _databaseSchema_foo"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_databaseSchema" description="Database schema configuration and organization" name="Daanse Tutorial - Database Schema" dbschemas="_databaseSchema_default _databaseSchema_foo"/>
  <roma:DatabaseSchema id="_databaseSchema_default">
    <tables xsi:type="roma:PhysicalTable" id="_table_theTableDefault" name="theTable">
      <columns xsi:type="roma:PhysicalColumn" id="_column_theTableDefault_theColumn" name="theColumn"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:DatabaseSchema id="_databaseSchema_foo" description="theDescription" name="foo">
    <tables xsi:type="roma:PhysicalTable" id="_table_theTable" name="theTable">
      <columns xsi:type="roma:PhysicalColumn" id="_column_theTable_theColumn" name="theColumn"/>
    </tables>
  </roma:DatabaseSchema>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.schema.zip" download>Download Zip File</a>
