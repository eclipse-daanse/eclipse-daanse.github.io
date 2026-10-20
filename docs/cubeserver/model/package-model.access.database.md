## Package: model.access.database
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/database`
Prefix: `rolapdacc`

Physical-schema access grants (table, column, schema).

Parent package: [model.access](./package-model.access.md)



## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class AccessDatabaseSchemaGrant {
      + databaseSchemaAccess : DatabaseSchemaAccess
  }
    AccessDatabaseSchemaGrant --> AccessTableGrant : tableGrants
    AccessDatabaseSchemaGrant --> Schema : databaseSchema



  class AccessTableGrant {
      + tableAccess : TableAccess
  }
    AccessTableGrant --> AccessColumnGrant : columnGrants
    AccessTableGrant --> NamedColumnSet : table



  class AccessColumnGrant {
      + columnAccess : ColumnAccess
  }
    AccessColumnGrant --> Column : column






```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class AccessDatabaseSchemaGrant](./class-AccessDatabaseSchemaGrant.md)
- [Class AccessTableGrant](./class-AccessTableGrant.md)
- [Class AccessColumnGrant](./class-AccessColumnGrant.md)


- [Enum DatabaseSchemaAccess](./enum-DatabaseSchemaAccess.md)
- [Enum TableAccess](./enum-TableAccess.md)
- [Enum ColumnAccess](./enum-ColumnAccess.md)


