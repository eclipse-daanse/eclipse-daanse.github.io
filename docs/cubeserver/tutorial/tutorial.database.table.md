---
title: Database Table
group: Database
kind: TUTORIAL
number: 1.03.01
---
# Daanse Tutorial - Database Table

There are several Tables Types. The most common are `PhysicalTable`, `ViewTable`, and `SystemTable`. All of this, and thre upcoming table typed can be used to build cubes on.


## Physical Table

Physical Tables are the most common Tables.  They are used to store data in the Database.


```xml
<relational:Table xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_table_tableone" name="TableOne"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## View Table

View Tables ate Database views. Virtual tables that are the result of a query inside the underlaying Database. They are used to simplify complex queries and to hide the complexity.


```xml
<relational:View xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_view_viewone" name="ViewOne"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## System Table

Sytsem Tables are are used and managed by the underlaying Database Management System. They are used to store metadata and other information about the Database itsselfe. Please be carefill when using System Tables, this may cause secutiry issues.


```xml
<relational:Table xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_table_tableone" name="TableOne"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_viewone_columnone _column_tableone_columnone _column_tableone_columnone_1" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_databasetable" id="_catalog_databaseTable" description="Physical table definitions and types" name="Daanse Tutorial - Database Table" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_tableone" name="TableOne">
      <feature xsi:type="relational:Column" xmi:id="_column_tableone_columnone_1" name="ColumnOne" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:View" xmi:id="_view_viewone" name="ViewOne">
      <feature xsi:type="relational:Column" xmi:id="_column_viewone_columnone" name="ColumnOne" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_tableone_1" name="TableOne">
      <feature xsi:type="relational:Column" xmi:id="_column_tableone_columnone" name="ColumnOne" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.table.zip" download>Download Zip File</a>
