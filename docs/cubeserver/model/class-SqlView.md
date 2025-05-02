---
title: SqlView
group: Class
---

# SqlView<a name="class-sqlview"></a>


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
      <td><strong>sqlStatements</strong></td>
      <td>SqlStatement<a href="./class-SqlStatement">🔗</a></td>
      <td>1</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- SqlSelectQuery[🔗](./class-SqlSelectQuery) → sql

## ClassDiagramm

```mermaid
classDiagram
  class SqlView {
  }

  Table <|-- SqlView
  SqlView --> SqlStatement : sqlStatements

```
