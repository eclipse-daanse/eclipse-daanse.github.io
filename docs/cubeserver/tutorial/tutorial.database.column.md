---
title: Database Column
group: Database
kind: TUTORIAL
number: 1.2.1
---
# Introduction into Columns

The data of a table are seperated into columns. Each column that should be used, must explicitly defines. Columns that are not relevant for the analysis can be left out.


## Common column fields

A Column has the fields `id,` `name`, `description` and `nullable`. Id is used to reference the column. Name is the name of the Column in the Database-table. Description is a human-readable textual description of the column. Nullable is an boolean flag, that indicates if the column can contain null values.


```xml
<roma:PhysicalColumn  id="_column_tableWithColumnTypes_columnWithDescription" description="Non nullable Column with description" name="ColumnWithDescription" nullable="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Types of Columns

In database tables, columns can have various data types to store data efficiently. These types come with additional attributes that provide more detailed descriptions and constraints.

### Varchar

The ColumnSize field in represents the maximum width or precision of a column, depending on its data type. It provides essential information about how much data a column can store


```xml
<roma:PhysicalColumn  id="_column_tableWithColumnTypes_columnVarchar" name="ColumnVarchar" columnSize="255"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Decimal

DECIMAL type represents Fixed-point number with exact precision (p) and scale (s), used for precise calculations (e.g., financial data).

relevant attributes are:

The DecimalDigits field represents the number of digits to the right of the decimal point for numeric columns in a database. It is typically used for DECIMAL, NUMERIC, FLOAT, REAL, and DOUBLE data types.

The NumPrecRadix field represents the numeric precision radix (or base) used for numeric data types. It indicates whether the precision (COLUMN_SIZE) of a column is based on base 10 (decimal) or base 2 (binary).


```xml
<roma:PhysicalColumn  id="_column_tableWithColumnTypes_columnDecimal" name="ColumnDecimal" type="Decimal" decimalDigits="2" numPrecRadix="3"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Numeric

Numeric are the same as DECIMAL, but some databases treat it as stricter in enforcing precision.

```xml
<roma:PhysicalColumn  id="_column_tableWithColumnTypes_columnNumeric" name="ColumnNumeric" type="Numeric"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Float

Float Approximate floating-point number, implementation-dependent precision, can introduce rounding errors

```xml
<roma:PhysicalColumn  id="_column_tableWithColumnTypes_columnFloat" name="ColumnFloat" type="Float"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Real

REAL are Single-precision (32-bit) floating-point number, less precise than DOUBLE.

```xml
<roma:PhysicalColumn  id="_column_tableWithColumnTypes_columnReal" name="ColumnReal" type="Real"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Double

DOUBLE (or DOUBLE PRECISION) – Double-precision (64-bit) floating-point number, more accurate than REAL.

```xml
<roma:PhysicalColumn  id="_column_tableWithColumnTypes_columnDouble" name="ColumnDouble" type="Double"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Integer

INTEGER are the whole number type, typically 32-bit, used for exact, non-decimal values.

```xml
<roma:PhysicalColumn  id="_column_tableWithColumnTypes_columnInteger" name="ColumnInteger" type="Integer"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_databaseColumnTypes" description="Database column types and configuration" name="Daanse Tutorial - Database Column" dbschemas="_databaseSchema_columnTypes"/>
  <roma:DatabaseSchema id="_databaseSchema_columnTypes">
    <tables xsi:type="roma:PhysicalTable" id="_table_tableWithColumnTypes" name="TableWithColumnTypes">
      <columns xsi:type="roma:PhysicalColumn" id="_column_tableWithColumnTypes_columnWithDescription" description="Non nullable Column with description" name="ColumnWithDescription" nullable="true"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_tableWithColumnTypes_columnVarchar" name="ColumnVarchar" columnSize="255"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_tableWithColumnTypes_columnDecimal" name="ColumnDecimal" type="Decimal" decimalDigits="2" numPrecRadix="3"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_tableWithColumnTypes_columnNumeric" name="ColumnNumeric" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_tableWithColumnTypes_columnFloat" name="ColumnFloat" type="Float"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_tableWithColumnTypes_columnReal" name="ColumnReal" type="Real"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_tableWithColumnTypes_columnDouble" name="ColumnDouble" type="Double"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_tableWithColumnTypes_columnInteger" name="ColumnInteger" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.column.zip" download>Download Zip File</a>
