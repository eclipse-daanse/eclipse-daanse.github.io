---
title: DatabaseSchema
group: Class
---

# DatabaseSchema<a name="class-databaseschema"></a>

Defines a database schema containing tables and their structural relationships. DatabaseSchema provides the logical grouping of tables that serve as the data foundation for OLAP cube construction and dimensional modeling.
## Extends
- AbstractElement [🔗](./class-AbstractElement)
## Attributes

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Id</th>
      <th>Type</th>
      <th>Lower</th>
      <th>Upper</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>

## References

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Lower</th>
      <th>Upper</th>
      <th>Containment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>tables</strong></td>
      <td>Table<a href="./class-Table">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em>Collection of tables within this database schema. Tables include fact tables, dimension tables, and aggregation tables that provide the physical data structure for OLAP operations.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- Catalog[🔗](./class-Catalog) → dbschemas
- AccessDatabaseSchemaGrant[🔗](./class-AccessDatabaseSchemaGrant) → databaseSchema
- DatabaseCatalog[🔗](./class-DatabaseCatalog) → schemas
- Table[🔗](./class-Table) → schema

## ClassDiagramm

```mermaid
classDiagram
  class DatabaseSchema {
  }

  AbstractElement <|-- DatabaseSchema
  DatabaseSchema --> Table : tables

```
