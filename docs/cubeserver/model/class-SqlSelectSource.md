---
title: SqlSelectSource
group: Class
---

# SqlSelectSource<a name="class-sqlselectsource"></a>

Package: [model.database.source](./package-model.database.source.md)

Inline SQL SELECT as a data source. Wraps a DialectSqlView (which carries the standard query in queryExpression plus any dialect-specific overrides).
## Extends
- RelationalSource [🔗](./class-RelationalSource)

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
      <td><strong>sql</strong></td>
      <td>DialectSqlView<a href="./class-DialectSqlView">🔗</a></td>
      <td>1</td>
      <td>1</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em>Dialect-aware SQL view carrying the actual SELECT statement(s).</em></td>
    </tr>
  </tbody>
</table>



## Used by


## ClassDiagramm

```mermaid
classDiagram
  class SqlSelectSource {
  }

  RelationalSource <|-- SqlSelectSource
  SqlSelectSource --> DialectSqlView : sql

```
