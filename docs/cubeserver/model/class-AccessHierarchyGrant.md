---
title: AccessHierarchyGrant
group: Class
---

# AccessHierarchyGrant<a name="class-accesshierarchygrant"></a>


## Extends

## Attributes

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Id</th>
      <th>Typ</th>
      <th>Lower</th>
      <th>Upper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>hierarchyAccess</strong></td>
      <td>false</td>
      <td><em>HierarchyAccess<a href="./enum-HierarchyAccess">🔗</a></em></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>rollupPolicy</strong></td>
      <td>false</td>
      <td><em>RollupPolicy<a href="./enum-RollupPolicy">🔗</a></em></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
  </tbody>
</table>

## References

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Typ</th>
      <th>Lower</th>
      <th>Upper</th>
      <th>Containment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>memberGrants</strong></td>
      <td>AccessMemberGrant<a href="./class-AccessMemberGrant">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>hierarchy</strong></td>
      <td>Hierarchy<a href="./class-Hierarchy">🔗</a></td>
      <td>1</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>bottomLevel</strong></td>
      <td>Level<a href="./class-Level">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>topLevel</strong></td>
      <td>Level<a href="./class-Level">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- AccessCubeGrant[🔗](./class-AccessCubeGrant) → hierarchyGrants

## ClassDiagramm

```mermaid
classDiagram
  class AccessHierarchyGrant {
    + hierarchyAccess : HierarchyAccess
    + rollupPolicy : RollupPolicy
  }


  AccessHierarchyGrant --> AccessMemberGrant : memberGrants
  AccessHierarchyGrant --> Hierarchy : hierarchy
  AccessHierarchyGrant --> Level : bottomLevel
  AccessHierarchyGrant --> Level : topLevel

```
