---
title: InlineTable
group: Class
---

# InlineTable<a name="class-inlinetable"></a>


## Extends
- Table [🔗](./class-Table)
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
      <td><strong>rows</strong></td>
      <td>Row<a href="./class-Row">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- InlineTableQuery[🔗](./class-InlineTableQuery) → table

## ClassDiagramm

```mermaid
classDiagram
  class InlineTable {
  }

  Table <|-- InlineTable
  InlineTable --> Row : rows

```
