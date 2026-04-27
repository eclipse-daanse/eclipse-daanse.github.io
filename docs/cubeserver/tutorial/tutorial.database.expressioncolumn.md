---
title: Database Expression Column
group: Database
kind: TUTORIAL
number: 1.02.02
---
# Daanse Tutorial - Database Expression Column

A table’s data consists not only of physical columns that store values but also of another type: the SqlExpressionColumn. This type of column is created dynamically using an SQL expression. The SQL expression is a string executed by the database system to generate the column on demand. Unlike physical columns, the SqlExpressionColumn is not stored in the database but is computed in real time whenever it is requested.


## The Column

Since the SqlExpressionColumn is not physically stored in the database, it does not contain any persistent data. Instead, it is dynamically generated based on an SQL expression, which depends on the underlying database management system. Multiple SQL statements can be assigned to a SqlExpressionColumn to support different database systems. This is necessary because databases use different function names and apply varying conventions for quoting column names.

The dialects attribute of an SqlStatement specifies the target database system. This allows the server to select the appropriate SQL statement for the corresponding database. Additionally, multiple dialects can be defined for a single SQL statement, ensuring compatibility across various database systems.


```xml
<rolaprel:ExpressionColumn xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_expressioncolumn_sqlexpressioncolumn" name="SqlExpressionColumn"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational">
  <rolapcat:Catalog xmi:id="_catalog_databasesqlexpressioncolumn" id="_catalog_databaseSqlExpressionColumn" description="SQL expression columns and computed fields" name="Daanse Tutorial - Database Expression Column" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_tablewithexpressioncolumn" name="TableWithExpressionColumn">
      <feature xsi:type="relational:Column" xmi:id="_column_tablewithexpressioncolumn_column1" name="column1"/>
      <feature xsi:type="rolaprel:ExpressionColumn" xmi:id="_expressioncolumn_sqlexpressioncolumn" name="SqlExpressionColumn">
        <sqls xmi:id="_sqlstatement_1" sql="SUBSTRING(column1,1,3)">
          <dialects>generic</dialects>
          <dialects>mysql</dialects>
        </sqls>
        <sqls xmi:id="_sqlstatement_2" sql="SUBSTR(column1,1,3)">
          <dialects>oracle</dialects>
        </sqls>
        <sqls xmi:id="_sqlstatement" sql="substring(column1, 1, 3)">
          <dialects>h2</dialects>
        </sqls>
      </feature>
    </ownedElement>
  </relational:Schema>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.expressioncolumn.zip" download>Download Zip File</a>
