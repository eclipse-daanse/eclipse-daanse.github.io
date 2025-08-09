---
title: ColumnType
group: Enum
---

# ColumnType<a name="enum-columntype"></a>

Enumeration defining database-specific column data types that map to the underlying database system's native data types. ColumnType provides the physical database type specification that complements the internal data type system for complete type management across different database platforms.
## Enumeration Literals

### VARCHAR - (0)

<em>Variable-length character string type for text data, names, and descriptions in dimensional attributes.</em>

### NUMERIC - (1)

<em>Exact numeric type with user-defined precision and scale for precise decimal calculations in measures.</em>

### DECIMAL - (2)

<em>Fixed-point decimal type for financial data and precise numerical measures requiring exact decimal representation.</em>

### FLOAT - (3)

<em>Single-precision floating-point type for approximate numeric data and scientific calculations.</em>

### REAL - (4)

<em>Real number type for floating-point numerical data in measures and calculated values.</em>

### INTEGER - (5)

<em>Whole number type for counts, identifiers, and integer-based dimensional keys.</em>

### SMALLINT - (6)

<em>Small integer type for compact storage of ordinal values and small numeric identifiers.</em>

### DOUBLE - (7)

<em>Double-precision floating-point type for high-precision numerical measures and statistical calculations.</em>

### OTHER - (8)

<em>Fallback type for database-specific or custom data types not covered by standard type definitions.</em>

### BOOLEAN - (10)

<em>Boolean type for true/false values, flags, and binary indicators in dimensional attributes.</em>

### DATE - (11)

<em>Date type for calendar dates used in time dimensions and temporal analysis.</em>

### TIME - (12)

<em>Time type for time-of-day values used in temporal dimensions and time-based analysis.</em>

### TIMESTAMP - (13)

<em>Timestamp type combining date and time for precise temporal data and event tracking.</em>

### BIGINT - (14)

<em>Large integer type for high-volume identifiers and big integer calculations.</em>

