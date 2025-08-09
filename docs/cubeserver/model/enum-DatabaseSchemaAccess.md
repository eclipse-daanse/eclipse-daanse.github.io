---
title: DatabaseSchemaAccess
group: Enum
---

# DatabaseSchemaAccess<a name="enum-databaseschemaaccess"></a>

Enumeration defining access levels for database schemas in OLAP security contexts. Controls whether users can access tables and data within specific database schemas that underlie OLAP cubes and dimensions.
## Enumeration Literals

### NONE - (0)

<em>Denies access to the database schema. Users cannot access any tables or data within this schema.</em>

### ALL - (1)

<em>Grants full access to all tables and data within the database schema.</em>

### CUSTOM - (2)

<em>Enables selective table-level access control within the schema through specific table grants.</em>

