---
title: InlineTable
group: Database
kind: TUTORIAL
number: 1.3.3
---
# Special Table -  Inline Table

The Inline Table is a special Table that is used to hold the data in the mapping. The Inline Table is not a table in the Database, but because it holds the data it can act as a Table. The Server must create at runtime Inline Statements of this Table.


## InlineTable, Row and RowValue

The InlineTable is a virtual table. The table and data does not exist in the datbase and will not be inserted. The inlinetable stores the data in the Row and RowValue elements completely in its definition. The RowValue elements are used to store the values of the columns. The Row element is used to store the values. the RowValue can store the atomic data and the reference to the columns. The InlineTable can have multiple Rows and columns. Inline tables should only be used exceptionally.


```xml
<roma:InlineTable   id="_table" name="FACT">
  <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
  <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
  <rows>
    <rowValues column="Fact_KEY" value="A"/>
    <rowValues column="Fact_VALUE" value="100"/>
  </rows>
  <rows>
    <rowValues column="Fact_KEY" value="B"/>
    <rowValues column="Fact_VALUE" value="42"/>
  </rows>
</roma:InlineTable>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_cat" name="Database - InlineTable" dbschemas="_dbschema"/>
  <roma:DatabaseSchema id="_dbschema">
    <tables xsi:type="roma:InlineTable" id="_table" name="FACT">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
      <rows>
        <rowValues column="Fact_KEY" value="A"/>
        <rowValues column="Fact_VALUE" value="100"/>
      </rows>
      <rows>
        <rowValues column="Fact_KEY" value="B"/>
        <rowValues column="Fact_VALUE" value="42"/>
      </rows>
    </tables>
  </roma:DatabaseSchema>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.inlinetable.zip" download>Download Zip File</a>
