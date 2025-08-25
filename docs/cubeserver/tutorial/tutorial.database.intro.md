---
title: Database Intro
group: Database
kind: TUTORIAL
number: 1.1
---
# Daanse Tutorial - Database Intro

The foundation of all data analysis is the data to be analyzed.
In this case, it is stored in a relational database.


## Catalog

The catalog is the primary object in a Daanse server. It serves as a logical grouping to separate different topics in the context of data storage and analysis. The catalog references a single databaseSchema.


```xml
<roma:Catalog  id="_catalog_databaseIntro" description="Basic introduction to database schema configuration" name="Daanse Tutorial - Database Intro" dbschemas="_databaseSchema_intro"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Schema

A catalog can be structured into databaseSchemas to logically group tables. The same table name can exist in multiple schemas.

In Daanse, we represent the database schema, where the data is stored, as a DatabaseSchema element.


```xml
<roma:DatabaseSchema  id="_databaseSchema_intro"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Table

A schema contains the tables within a database. There are multiple types of tables, which we will explain in further tutorials.

The most common type we use is the physical table. The tables defined in a schema do not have to match all tables in the actual database — only those that should be visible for the server. This provides an additional layer of security.


```xml
<roma:PhysicalTable  id="_table_tableOne" name="TableOne"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Column

A table consists of columns, each with a name and a data type.

The columns defined in a table do not have to match all columns in the actual database — only those that should be visible for the server. This provides an additional layer of security.


```xml
<roma:PhysicalColumn  id="_column_tableOne_columnOne" name="ColumnOne"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_databaseIntro" description="Basic introduction to database schema configuration" name="Daanse Tutorial - Database Intro" dbschemas="_databaseSchema_intro"/>
  <roma:DatabaseSchema id="_databaseSchema_intro">
    <tables xsi:type="roma:PhysicalTable" id="_table_tableOne" name="TableOne">
      <columns xsi:type="roma:PhysicalColumn" id="_column_tableOne_columnOne" name="ColumnOne"/>
    </tables>
  </roma:DatabaseSchema>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.intro.zip" download>Download Zip File</a>
