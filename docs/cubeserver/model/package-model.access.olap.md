## Package: model.access.olap
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/olap`
Prefix: `rolapoacc`

OLAP-side access grants (cube, dimension, hierarchy, member).

Parent package: [model.access](./package-model.access.md)



## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class AccessCubeGrant {
      + cubeAccess : CubeAccess
  }
    AccessCubeGrant --> AccessDimensionGrant : dimensionGrants
    AccessCubeGrant --> AccessHierarchyGrant : hierarchyGrants
    AccessCubeGrant --> Cube : cube



  class AccessDimensionGrant {
      + dimensionAccess : DimensionAccess
  }
    AccessDimensionGrant --> Dimension : dimension



  class AccessHierarchyGrant {
      + hierarchyAccess : HierarchyAccess
      + rollupPolicy : RollupPolicy
  }
    AccessHierarchyGrant --> AccessMemberGrant : memberGrants
    AccessHierarchyGrant --> Hierarchy : hierarchy
    AccessHierarchyGrant --> Level : bottomLevel
    AccessHierarchyGrant --> Level : topLevel



  class AccessMemberGrant {
      + memberAccess : MemberAccess
  }
    AccessMemberGrant --> MdxExpression : member







```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class AccessCubeGrant](./class-AccessCubeGrant.md)
- [Class AccessDimensionGrant](./class-AccessDimensionGrant.md)
- [Class AccessHierarchyGrant](./class-AccessHierarchyGrant.md)
- [Class AccessMemberGrant](./class-AccessMemberGrant.md)


- [Enum CubeAccess](./enum-CubeAccess.md)
- [Enum DimensionAccess](./enum-DimensionAccess.md)
- [Enum HierarchyAccess](./enum-HierarchyAccess.md)
- [Enum MemberAccess](./enum-MemberAccess.md)


