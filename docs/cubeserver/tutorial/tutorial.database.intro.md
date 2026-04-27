---
title: Database Intro
group: Database
kind: TUTORIAL
number: 1.01
---
# Daanse Tutorial - Database Intro

The foundation of all data analysis is the data to be analyzed.
In this case, it is stored in a relational database.


## Catalog

The catalog is the primary object in a Daanse server. It serves as a logical grouping to separate different topics in the context of data storage and analysis. The catalog references a single databaseSchema.


```xml
<rolapcat:Catalog xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmi:id="_catalog_databaseintro" id="_catalog_databaseIntro" description="Basic introduction to database schema configuration" name="Daanse Tutorial - Database Intro">
  <dbschemas href="_schema_intro"/>
</rolapcat:Catalog>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Schema

A catalog can be structured into databaseSchemas to logically group tables. The same table name can exist in multiple schemas.

In Daanse, we represent an existing database schema, where the data is stored, as a DatabaseSchema element.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema_intro" name="intro"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Table

A schema contains the tables within a database. There are multiple types of tables, which we will explain in further tutorials.

The most common type we use is the physical table. The tables defined in a schema do not have to match all tables in the actual database — only those that should be visible for the server. This provides an additional layer of security.


```xml
<relational:Table xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_table_tableone" name="TableOne"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Column

A table consists of columns, each with a name and a data type.

The columns defined in a table do not have to match all columns in the actual database — only those that should be visible for the server. This provides an additional layer of security.


```xml
<relational:Column xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_column_columnone" name="ColumnOne"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_intro_tableone_columnone" typeNumber="12" characterMaximumLength="255"/>
  <rolapcat:Catalog xmi:id="_catalog_databaseintro" id="_catalog_databaseIntro" description="Basic introduction to database schema configuration" name="Daanse Tutorial - Database Intro" dbschemas="_schema_intro"/>
  <relational:Schema xmi:id="_schema_intro" name="intro">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_tableone" name="TableOne">
      <feature xsi:type="relational:Column" xmi:id="_column_intro_tableone_columnone" name="ColumnOne" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.intro.zip" download>Download Zip File</a>
