---
title: Database Inline Table
group: Database
kind: TUTORIAL
number: 1.03.03
---
# Daanse Tutorial - Database Inline Table

The Inline Table is a special Table that is used to hold the data in the mapping. The Inline Table is not a table in the Database, but because it holds the data it can act as a Table. The Server must create at runtime Inline Statements of this Table.


## InlineTable, Row and RowValue

The InlineTable is a virtual table. The table and data does not exist in the database and will not be inserted. The inlinetable stores the data in the Row and RowValue elements completely in its definition. The RowValue elements are used to store the values of the columns. The Row element is used to store the values. the RowValue can store the atomic data and the reference to the columns. The InlineTable can have multiple Rows and columns. Inline tables should only be used exceptionally.


```xml
<roma:InlineTable   id="_table_fact" name="FACT">
  <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
  <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  <rows>
    <rowValues column="_column_fact_key" value="A"/>
    <rowValues column="_column_fact_value" value="100"/>
  </rows>
  <rows>
    <rowValues column="_column_fact_key" value="B"/>
    <rowValues column="_column_fact_value" value="42"/>
  </rows>
</roma:InlineTable>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_databaseInlineTable" description="Inline table definitions with row data" name="Daanse Tutorial - Database Inline Table" dbschemas="_databaseSchema_inlineTable"/>
  <roma:DatabaseSchema id="_databaseSchema_inlineTable">
    <tables xsi:type="roma:InlineTable" id="_table_fact" name="FACT">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
      <rows>
        <rowValues column="_column_fact_key" value="A"/>
        <rowValues column="_column_fact_value" value="100"/>
      </rows>
      <rows>
        <rowValues column="_column_fact_key" value="B"/>
        <rowValues column="_column_fact_value" value="42"/>
      </rows>
    </tables>
  </roma:DatabaseSchema>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.inlinetable.zip" download>Download Zip File</a>
