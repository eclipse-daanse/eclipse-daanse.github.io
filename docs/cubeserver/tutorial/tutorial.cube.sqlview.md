---
title: Database SQL View Cube
group: Cube
kind: TUTORIAL
number: 2.01.02
---
# Daanse Tutorial - Database SQL View Cube

The `SqlView` Table is a special Table that is used to reference columns of an SQL Query. The differenxe to the View is that the `SqlView` Table is not a view in the Database, but it holds the SQLStatement inside the mapping.


## SqlView and SqlStatement

The DialectSqlView must contain a SqlStatement that is used to get the data from the Database. The SqlStatement is a simple SQL Query. The DialectSqlView can have multiple SqlStatements for different Dialects. The SqlStatement can alsobe used for multiple dialects. The DialectSqlView must also have the columns defined in the SQL Query.


```xml
<rolaprel:DialectSqlView xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_dialectsqlview_sqlview" name="sqlview">
  <feature xsi:type="relational:Column" xmi:id="_column_sqlview_key" name="Key"/>
  <feature xsi:type="relational:Column" xmi:id="_column_sqlview_value" name="Value"/>
  <dialectStatements xmi:id="_sqlstatement" sql="select &quot;FACT&quot;.&quot;KEY&quot; as &quot;Key&quot;, &quot;FACT&quot;.&quot;VALUE&quot; as &quot;Value&quot; from FACT">
    <dialects>h2</dialects>
  </dialectStatements>
</rolaprel:DialectSqlView>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## TableSource

The bridge between the cube and the database is the query element. In this case, it is a TableSource, as it directly references the sql view `sqlview`. The table source element is not visible to users accessing the cube through the XMLA API, such as Daanse Dashboard, Power BI, or Excel.


```xml
<rolapsrc:SqlSelectSource xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source" xmi:id="_sqlselectsource" alias="sqlview">
  <sql xmi:id="_dialectsqlview_sqlview" name="sqlview">
    <feature xsi:type="relational:Column" xmi:id="_column_sqlview_key" name="Key"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sqlview_value" name="Value"/>
    <dialectStatements xmi:id="_sqlstatement" sql="select &quot;FACT&quot;.&quot;KEY&quot; as &quot;Key&quot;, &quot;FACT&quot;.&quot;VALUE&quot; as &quot;Value&quot; from FACT">
      <dialects>h2</dialects>
    </dialectStatements>
  </sql>
</rolapsrc:SqlSelectSource>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_sqlview_key _column_fact_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_sqlview_value _column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_database_sql_view_cube" description="SQL view definitions and usage in cube" name="Daanse Tutorial - Database SQL View Cube" cubes="_physicalcube_minimalcubesqlview" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:SqlSelectSource xmi:id="_sqlselectsource" alias="sqlview">
    <sql xmi:id="_dialectsqlview_sqlview" name="sqlview">
      <feature xsi:type="relational:Column" xmi:id="_column_sqlview_key" name="Key" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_sqlview_value" name="Value" type="_sqlsimpletype_integer"/>
      <dialectStatements xmi:id="_sqlstatement" sql="select &quot;FACT&quot;.&quot;KEY&quot; as &quot;Key&quot;, &quot;FACT&quot;.&quot;VALUE&quot; as &quot;Value&quot; from FACT">
        <dialects>h2</dialects>
      </dialectStatements>
    </sql>
  </rolapsrc:SqlSelectSource>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_minimalcubesqlview" name="MinimalCubeSqlView" source="_sqlselectsource">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure_sum" name="Measure-Sum" column="_column_sqlview_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.sqlview.zip" download>Download Zip File</a>
