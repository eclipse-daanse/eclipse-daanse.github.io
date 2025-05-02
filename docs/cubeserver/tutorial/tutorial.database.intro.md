---
title: Intro
group: Database
kind: TUTORIAL
number: 1.1
---
# Introduction into DataBase

The foundation of all data analysis is the data to be analyzed.
In this case, it is stored in a relational database.


## Catalog

The catalog is the primary object in a Daanse server. It serves as a logical grouping to separate different topics in the context of data storage and analysis. The catalog references a single databaseSchema.


```xml
<roma:Catalog  id="_cat" name="Database - Intro" dbschemas="catalog.xmi#_dbschema"/>

```

## Schema

A catalog can be structured into databaseSchemas to logically group tables. The same table name can exist in multiple schemas.

In Daanse, we represent the database schema, where the data is stored, as a DatabaseSchema element.


```xml
<roma:DatabaseSchema  id="_dbschema"/>

```

## Table

A schema contains the tables within a database. There are multiple types of tables, which we will explain in further tutorials.

The most common type we use is the physical table. The tables defined in a schema do not have to match all tables in the actual database — only those that should be visible for the server. This provides an additional layer of security.


```xml
<roma:PhysicalTable  id="_tab" name="TableOne"/>

```

## Column

A table consists of columns, each with a name and a data type.

The columns defined in a table do not have to match all columns in the actual database — only those that should be visible for the server. This provides an additional layer of security.


```xml
<roma:PhysicalColumn  id="_col" name="ColumnOne"/>

```


## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_cat" name="Database - Intro" dbschemas="_dbschema"/>
  <roma:DatabaseSchema id="_dbschema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="TableOne">
      <columns xsi:type="roma:PhysicalColumn" id="_col" name="ColumnOne"/>
    </tables>
  </roma:DatabaseSchema>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.intro.zip" download>Download Zip File</a>
