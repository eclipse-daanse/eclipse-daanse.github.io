---
title: Table
group: Database
kind: TUTORIAL
number: 1.3.1
---
# Tables and TableTypes

There are several Tables Types. The most common are PhysicalTable, ViewTable, and SystemTable. All of this, and thre upcoming table typed can be used to build cubes on.


## Physical Table

Physical Tables are the most common Tables.  They are used to store data in the Database.


```xml
<roma:PhysicalTable  id="_tab" name="TableOne"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## View Table

View Tables ate Database views. Virtual tables that are the result of a query inside the underlaying Database. They are used to simplify complex queries and to hide the complexity.


```xml
<roma:ViewTable  id="_tab" name="ViewOne"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## System Table

Sytsem Tables are are used and managed by the underlaying Database Management System. They are used to store metadata and other information about the Database itsselfe. Please be carefill when using System Tables, this may cause secutiry issues.


```xml
<roma:SystemTable  id="_tab" name="TableOne"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_cat" name="Database - Table" dbschemas="_dbschema"/>
  <roma:DatabaseSchema id="_dbschema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="TableOne">
      <columns xsi:type="roma:PhysicalColumn" id="_col" name="ColumnOne"/>
    </tables>
    <tables xsi:type="roma:ViewTable" id="_tab" name="ViewOne">
      <columns xsi:type="roma:PhysicalColumn" id="_col" name="ColumnOne"/>
    </tables>
    <tables xsi:type="roma:SystemTable" id="_tab" name="TableOne">
      <columns xsi:type="roma:PhysicalColumn" id="_col" name="ColumnOne"/>
    </tables>
  </roma:DatabaseSchema>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.table.zip" download>Download Zip File</a>
