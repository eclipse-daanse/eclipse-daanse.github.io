---
title: SQL Expression Column
group: Database
kind: TUTORIAL
number: 1.2.2
---
# Introduction into SqlExpressionColumn

A table’s data consists not only of physical columns that store values but also of another type: the SqlExpressionColumn. This type of column is created dynamically using an SQL expression. The SQL expression is a string executed by the database system to generate the column on demand. Unlike physical columns, the SqlExpressionColumn is not stored in the database but is computed in real time whenever it is requested.


## The Column

Since the SqlExpressionColumn is not physically stored in the database, it does not contain any persistent data. Instead, it is dynamically generated based on an SQL expression, which depends on the underlying database management system. Multiple SQL statements can be assigned to a SqlExpressionColumn to support different database systems. This is necessary because databases use different function names and apply varying conventions for quoting column names.

The dialects attribute of an SqlStatement specifies the target database system. This allows the server to select the appropriate SQL statement for the corresponding database. Additionally, multiple dialects can be defined for a single SQL statement, ensuring compatibility across various database systems.


```xml
<roma:SQLExpressionColumn  id="_col2" name="SqlExpressionColumn"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_cat" name="Database - SQL Expression Column" dbschemas="_dbschema"/>
  <roma:DatabaseSchema id="_dbschema">
    <tables xsi:type="roma:PhysicalTable" id="_tab" name="TableWithExpressionColumn">
      <columns xsi:type="roma:PhysicalColumn" id="_col1" name="column1"/>
      <columns xsi:type="roma:SQLExpressionColumn" id="_col2" name="SqlExpressionColumn">
        <sqls sql="column1 + column1">
          <dialects>generic</dialects>
          <dialects>mysql</dialects>
        </sqls>
        <sqls sql="column1 + column1 + column1">
          <dialects>h2</dialects>
        </sqls>
      </columns>
    </tables>
  </roma:DatabaseSchema>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.expressioncolumn.zip" download>Download Zip File</a>
