---
title: AccessMemberGrant
group: Class
---

# AccessMemberGrant<a name="class-accessmembergrant"></a>

Package: [model.access.olap](./package-model.access.olap.md)

Implements the most granular level of OLAP security control by defining access permissions for individual members within dimensional hierarchies, enabling precise business-driven security policies that reflect real-world organizational boundaries, customer relationships, geographic territories, product ownership, and regulatory restrictions.

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
    <tr>
      <td><strong>memberAccess</strong></td>
      <td>false</td>
      <td><em>MemberAccess<a href="./enum-MemberAccess">🔗</a></em></td>
      <td>1</td>
      <td>1</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="6"><em>Specifies the access level for the member using MemberAccess enumeration values, providing the most granular control over individual member visibility.</em></td>
    </tr>
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
      <td><strong>member</strong></td>
      <td>MdxExpression<a href="./class-MdxExpression">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em>Identifies the specific member within the hierarchy as an MDX unique-name expression (body carries the member path), establishing the exact target of this granular access control.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- AccessHierarchyGrant[🔗](./class-AccessHierarchyGrant) → memberGrants

## ClassDiagramm

```mermaid
classDiagram
  class AccessMemberGrant {
    + memberAccess : MemberAccess
  }


  AccessMemberGrant --> MdxExpression : member

```
