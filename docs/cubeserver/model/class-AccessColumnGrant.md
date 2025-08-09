---
title: AccessColumnGrant
group: Class
---

# AccessColumnGrant<a name="class-accesscolumngrant"></a>

Provides the most granular level of database security control by defining access permissions for individual database columns, enabling extremely precise data governance policies that can restrict access to specific data elements based on sensitivity, regulatory requirements, privacy concerns, or business confidentiality needs.
## Extends

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
      <td><strong>columnAccess</strong></td>
      <td>false</td>
      <td><em>ColumnAccess<a href="./enum-ColumnAccess">🔗</a></em></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Specifies the access level for the column using ColumnAccess enumeration values, providing the finest-grained control over data access at the individual column level.</em></td>
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
      <td><strong>column</strong></td>
      <td>Column<a href="./class-Column">🔗</a></td>
      <td>1</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em>References the specific column to which this access grant applies, establishing the security boundary at the individual column level.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- AccessTableGrant[🔗](./class-AccessTableGrant) → columnGrants

## ClassDiagramm

```mermaid
classDiagram
  class AccessColumnGrant {
    + columnAccess : ColumnAccess
  }


  AccessColumnGrant --> Column : column

```
