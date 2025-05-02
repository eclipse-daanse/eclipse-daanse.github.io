---
title: SQLExpressionBaseMeasure
group: Class
---

# SQLExpressionBaseMeasure<a name="class-sqlexpressionbasemeasure"></a>


## Extends
- BaseMeasure [🔗](./class-BaseMeasure)
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
      <td><strong>column</strong></td>
      <td>SQLExpressionColumn<a href="./class-SQLExpressionColumn">🔗</a></td>
      <td>1</td>
      <td>1</td>
      <td>false</td>
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
  class SQLExpressionBaseMeasure {
  }

  BaseMeasure <|-- SQLExpressionBaseMeasure
  SQLExpressionBaseMeasure --> SQLExpressionColumn : column

```
