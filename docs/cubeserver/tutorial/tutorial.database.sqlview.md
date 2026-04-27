---
title: Database SQL View
group: Database
kind: TUTORIAL
number: 1.03.02
---
# Daanse Tutorial - Database SQL View

The `SqlView` Table is a special Table that is used to reference columns of an SQL Query. The differenxe to the View is that the `SqlView` Table is not a view in the Database, but it holds the SQLStatement inside the mapping.


## SqlView and SqlStatement

The DialectSqlView must contain a SqlStatement that is used to get the data from the Database. The SqlStatement is a simple SQL Query. The DialectSqlView can have multiple SqlStatements for different Dialects. The SqlStatement can alsobe used for multiple dialects. The DialectSqlView must also have the columns defined in the SQL Query.


```xml
<rolaprel:DialectSqlView xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_dialectsqlview_sqlview" name="sqlview">
  <feature xsi:type="relational:Column" xmi:id="_column_sqlview_columnone" name="ColumnOne"/>
  <dialectStatements xmi:id="_sqlstatement" sql="select t.c as ColumnOne from table t">
    <dialects>h2</dialects>
  </dialectStatements>
</rolaprel:DialectSqlView>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_sqlview_columnone" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_databasesqlview" id="_catalog_databaseSqlView" description="SQL view definitions and usage" name="Daanse Tutorial - Database SQL View" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="rolaprel:DialectSqlView" xmi:id="_dialectsqlview_sqlview" name="sqlview">
      <feature xsi:type="relational:Column" xmi:id="_column_sqlview_columnone" name="ColumnOne" type="_sqlsimpletype_character_varying"/>
      <dialectStatements xmi:id="_sqlstatement" sql="select t.c as ColumnOne from table t">
        <dialects>h2</dialects>
      </dialectStatements>
    </ownedElement>
  </relational:Schema>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.sqlview.zip" download>Download Zip File</a>
