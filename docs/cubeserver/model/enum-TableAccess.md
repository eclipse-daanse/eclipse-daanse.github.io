---
title: TableAccess
group: Enum
---

# TableAccess<a name="enum-tableaccess"></a>

Enumeration defining access levels for individual database tables in OLAP security. Controls user access to specific fact tables, dimension tables, and other database tables used in OLAP operations.
## Enumeration Literals

### NONE - (0)

<em>Denies access to the table. Users cannot query or access data from this table.</em>

### ALL - (1)

<em>Grants full access to all data within the table.</em>

### CUSTOM - (2)

<em>Enables row-level or column-level access control within the table through specific data filtering rules.</em>

