---
title: SqlStatement
group: Class
---

# SqlStatement<a name="class-sqlstatement"></a>


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
      <td><strong>dialects</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
      <td>&infin;</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>sql</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
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
  </tbody>
</table>



## Used by

- TableQuery[🔗](./class-TableQuery) → sqlWhereExpression
- SQLExpressionColumn[🔗](./class-SQLExpressionColumn) → sqls
- SqlView[🔗](./class-SqlView) → sqlStatements

## ClassDiagramm

```mermaid
classDiagram
  class SqlStatement {
    + dialects : EString
    + sql : EString
  }



```
