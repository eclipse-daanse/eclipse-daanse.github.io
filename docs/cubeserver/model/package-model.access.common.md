## Package: model.access.common
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common`
Prefix: `rolapcacc`

Shared access-control core (AccessRole, AccessCatalogGrant, CatalogAccess).

Parent package: [model.access](./package-model.access.md)



## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class AccessRole {
  }
    AccessRole --> AccessCatalogGrant : accessCatalogGrants
    AccessRole --> AccessRole : referencedAccessRoles

    AccessRole <|-- AbstractElement : inherit


  class AccessCatalogGrant {
      + catalogAccess : CatalogAccess
  }
    AccessCatalogGrant --> AccessCubeGrant : cubeGrants
    AccessCatalogGrant --> AccessDatabaseSchemaGrant : databaseSchemaGrants




```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class AccessRole](./class-AccessRole.md)
- [Class AccessCatalogGrant](./class-AccessCatalogGrant.md)


- [Enum CatalogAccess](./enum-CatalogAccess.md)


