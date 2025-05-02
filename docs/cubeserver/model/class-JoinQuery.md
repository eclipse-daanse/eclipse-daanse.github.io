---
title: JoinQuery
group: Class
---

# JoinQuery<a name="class-joinquery"></a>


## Extends
- Query [🔗](./class-Query)
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
      <td><strong>left</strong></td>
      <td>JoinedQueryElement<a href="./class-JoinedQueryElement">🔗</a></td>
      <td>1</td>
      <td>1</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>right</strong></td>
      <td>JoinedQueryElement<a href="./class-JoinedQueryElement">🔗</a></td>
      <td>1</td>
      <td>1</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
  </tbody>
</table>



## Used by


## ClassDiagramm

```mermaid
classDiagram
  class JoinQuery {
  }

  Query <|-- JoinQuery
  JoinQuery --> JoinedQueryElement : left
  JoinQuery --> JoinedQueryElement : right

```
