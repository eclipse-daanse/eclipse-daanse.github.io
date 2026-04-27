---
title: Database Column
group: Database
kind: TUTORIAL
number: 1.02.01
---
# Daanse Tutorial - Database Column

The data of a table are seperated into columns. Each column that should be used, must be explicitly defined. Columns that are not relevant for the analysis can be left out.


## Common column fields

A Column has the fields `id,` `name`, `description` and `nullable`. Id is used to reference the column. Name is the name of the Column in the Database-table. Description is a human-readable textual description of the column. Nullable is an boolean flag, that indicates if the column can contain null values.


```xml
<relational:Column xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_column_columnwithdescription" name="ColumnWithDescription"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Types of Columns

In database tables, columns can have various data types to store data efficiently. These types come with additional attributes that provide more detailed descriptions and constraints.

### Varchar

The ColumnSize field in represents the maximum width or precision of a column, depending on its data type. It provides essential information about how much data a column can store


```xml
<relational:Column xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_column_columnvarchar" name="ColumnVarchar"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Decimal

DECIMAL type represents Fixed-point number with exact precision (p) and scale (s), used for precise calculations (e.g., financial data).

relevant attributes are:

The DecimalDigits field represents the number of digits to the right of the decimal point for numeric columns in a database. It is typically used for DECIMAL, NUMERIC, FLOAT, REAL, and DOUBLE data types.

The NumPrecRadix field represents the numeric precision radix (or base) used for numeric data types. It indicates whether the precision (COLUMN_SIZE) of a column is based on base 10 (decimal) or base 2 (binary).


```xml
<relational:Column xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_column_columndecimal" name="ColumnDecimal"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Numeric

Numeric are the same as DECIMAL, but some databases treat it as stricter in enforcing precision.

```xml
<relational:Column xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_column_columnnumeric" name="ColumnNumeric"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Float

Float Approximate floating-point number, implementation-dependent precision, can introduce rounding errors

```xml
<relational:Column xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_column_columnfloat" name="ColumnFloat"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Real

REAL are Single-precision (32-bit) floating-point number, less precise than DOUBLE.

```xml
<relational:Column xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_column_columnreal" name="ColumnReal"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Double

DOUBLE (or DOUBLE PRECISION) – Double-precision (64-bit) floating-point number, more accurate than REAL.

```xml
<relational:Column xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_column_columndouble" name="ColumnDouble"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Integer

INTEGER are the whole number type, typically 32-bit, used for exact, non-decimal values.

```xml
<relational:Column xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_column_columninteger" name="ColumnInteger"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_tablewithcolumntypes_columnwithdescription _column_tablewithcolumntypes_columnvarchar" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_float" name="FLOAT" structuralFeature="_column_tablewithcolumntypes_columnfloat" typeNumber="6" numericPrecisionRadix="2"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_real" name="REAL" structuralFeature="_column_tablewithcolumntypes_columnreal" typeNumber="7" numericPrecisionRadix="2"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_tablewithcolumntypes_columninteger" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_decimal" name="DECIMAL" structuralFeature="_column_tablewithcolumntypes_columndecimal" typeNumber="3" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_numeric" name="NUMERIC" structuralFeature="_column_tablewithcolumntypes_columnnumeric" typeNumber="2" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_double_precision" name="DOUBLE PRECISION" structuralFeature="_column_tablewithcolumntypes_columndouble" typeNumber="8" numericPrecisionRadix="2"/>
  <rolapcat:Catalog xmi:id="_catalog_databasecolumntypes" id="_catalog_databaseColumnTypes" description="Database column types and configuration" name="Daanse Tutorial - Database Column" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_tablewithcolumntypes" name="TableWithColumnTypes">
      <feature xsi:type="relational:Column" xmi:id="_column_tablewithcolumntypes_columnwithdescription" name="ColumnWithDescription" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_tablewithcolumntypes_columnvarchar" name="ColumnVarchar" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_tablewithcolumntypes_columndecimal" name="ColumnDecimal" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_tablewithcolumntypes_columnnumeric" name="ColumnNumeric" type="_sqlsimpletype_numeric"/>
      <feature xsi:type="relational:Column" xmi:id="_column_tablewithcolumntypes_columnfloat" name="ColumnFloat" type="_sqlsimpletype_float"/>
      <feature xsi:type="relational:Column" xmi:id="_column_tablewithcolumntypes_columnreal" name="ColumnReal" type="_sqlsimpletype_real"/>
      <feature xsi:type="relational:Column" xmi:id="_column_tablewithcolumntypes_columndouble" name="ColumnDouble" type="_sqlsimpletype_double_precision"/>
      <feature xsi:type="relational:Column" xmi:id="_column_tablewithcolumntypes_columninteger" name="ColumnInteger" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.column.zip" download>Download Zip File</a>
