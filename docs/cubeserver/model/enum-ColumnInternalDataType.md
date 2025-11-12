---
title: ColumnInternalDataType
group: Enum
---

# ColumnInternalDataType<a name="enum-columninternaldatatype"></a>

Enumeration that defines the internal data type classifications used throughout the OLAP framework for consistent data handling, SQL generation, comparison operations, formatting, and type validation across different database systems and analytical contexts. ColumnInternalDataType provides a unified type system that abstracts database-specific data type variations while maintaining the semantic information necessary for proper analytical processing, measure aggregation, dimensional sorting, and user interface presentation.
## Enumeration Literals

### UNDEFINED - (0)

<em>Enum Item that expresses, that the ColumnInternalDataType is not defines explicitly and should be derived from other sources like the type of the Column.</em>

### STRING - (0)

<em>Text data type for character strings, names, descriptions, and categorical values in dimensions and member properties.</em>

### NUMERIC - (1)

<em>Decimal numeric data type for measure values, calculated metrics, and precise numerical data requiring decimal precision.</em>

### INTEGER - (2)

<em>Whole number data type for counts, ordinal values, and integer-based measures and dimension keys.</em>

### BOOLEAN - (3)

<em>Boolean data type for true/false flags, binary indicators, and yes/no categorical data in dimensional attributes.</em>

### DATE - (4)

<em>Date data type for calendar dates without time components, used in time dimensions and date-based analytical operations.</em>

### TIME - (5)

<em>Time data type for time-of-day values without date components, used for intraday analysis and time-based dimensions.</em>

### TIMESTAMP - (6)

<em>Timestamp data type combining date and time components for precise temporal data, event tracking, and time-series analysis.</em>

