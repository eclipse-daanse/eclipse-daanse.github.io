---
title: SQLExpressionColumn
group: Class
---

# SQLExpressionColumn<a name="class-sqlexpressioncolumn"></a>


## Extends
- Column [🔗](./class-Column)
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
      <td><strong>sqls</strong></td>
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

- SQLExpressionBaseMeasure[🔗](./class-SQLExpressionBaseMeasure) → column

## ClassDiagramm

```mermaid
classDiagram
  class SQLExpressionColumn {
  }

  Column <|-- SQLExpressionColumn
  SQLExpressionColumn --> SqlStatement : sqls

```
