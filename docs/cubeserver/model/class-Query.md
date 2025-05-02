---
title: Query
group: Class
---

# Query<a name="class-query"></a>


## Extends
- DocumentedElement [🔗](./class-DocumentedElement)
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
      <td><strong>id</strong></td>
      <td>true</td>
      <td><em>EString</em></td>
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
      <td><strong>documentation</strong></td>
      <td>Documentation<a href="./class-Documentation">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- PhysicalCube[🔗](./class-PhysicalCube) → query
- Hierarchy[🔗](./class-Hierarchy) → query
- JoinedQueryElement[🔗](./class-JoinedQueryElement) → query

## ClassDiagramm

```mermaid
classDiagram
  class Query {
    + id : EString
  }

  DocumentedElement <|-- Query
  Query --> Documentation : documentation

```
