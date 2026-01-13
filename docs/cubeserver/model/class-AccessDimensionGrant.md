---
title: AccessDimensionGrant
group: Class
---

# AccessDimensionGrant<a name="class-accessdimensiongrant"></a>

Defines dimension-level security permissions that control access to specific dimensions within a cube, providing targeted control over dimensional navigation and member visibility.

## Attributes

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Id</th>
      <th>Type</th>
      <th>Lower</th>
      <th>Upper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>dimensionAccess</strong></td>
      <td>false</td>
      <td><em>DimensionAccess<a href="./enum-DimensionAccess">🔗</a></em></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Specifies the access level for the dimension using DimensionAccess enumeration values, controlling whether role members can view and navigate the dimension.</em></td>
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
      <td><strong>dimension</strong></td>
      <td>Dimension<a href="./class-Dimension">🔗</a></td>
      <td>1</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em>References the specific dimension to which this access grant applies, establishing the security boundary at the dimension level.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- AccessCubeGrant[🔗](./class-AccessCubeGrant) → dimensionGrants

## ClassDiagramm

```mermaid
classDiagram
  class AccessDimensionGrant {
    + dimensionAccess : DimensionAccess
  }


  AccessDimensionGrant --> Dimension : dimension

```
