---
title: SqlView
group: Database
kind: TUTORIAL
number: 1.3.2
---
# Special Table -  SqlView

The SqlView Table is a special Table that is used to reference columns of an SQL Query. The differenxe to the ViewTable is that the SqlView Table is not a view in the Database, but it holds the SQLStatement inside the mapping.


## SqlView and SqlStatement

The SqlView must contain a SqlStatement that is used to get the data from the Database. The SqlStatement is a simple SQL Query. The SqlView can have multiple SqlStatements for different Dialects. The SqlStatement can alsobe used for multiple dialects. The SqlView must also have the columns defined in the SQL Query.


```xml
<roma:SqlView   id="_tab" name="sqlview">
  <columns xsi:type="roma:PhysicalColumn" id="_col" name="ColumnOne"/>
  <sqlStatements sql="select t.c as ColumnOne from table t">
    <dialects>h2</dialects>
  </sqlStatements>
</roma:SqlView>

```


## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_cat" name="Database - SqlView" dbschemas="_dbschema"/>
  <roma:DatabaseSchema id="_dbschema">
    <tables xsi:type="roma:SqlView" id="_tab" name="sqlview">
      <columns xsi:type="roma:PhysicalColumn" id="_col" name="ColumnOne"/>
      <sqlStatements sql="select t.c as ColumnOne from table t">
        <dialects>h2</dialects>
      </sqlStatements>
    </tables>
  </roma:DatabaseSchema>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.sqlview.zip" download>Download Zip File</a>
