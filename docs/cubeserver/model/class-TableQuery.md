---
title: TableQuery
group: Class
---

# TableQuery<a name="class-tablequery"></a>


## Extends
- RelationalQuery [🔗](./class-RelationalQuery)
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
      <td><strong>sqlWhereExpression</strong></td>
      <td>SqlStatement<a href="./class-SqlStatement">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>aggregationExcludes</strong></td>
      <td>AggregationExclude<a href="./class-AggregationExclude">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>optimizationHints</strong></td>
      <td>TableQueryOptimizationHint<a href="./class-TableQueryOptimizationHint">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>aggregationTables</strong></td>
      <td>AggregationTable<a href="./class-AggregationTable">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>table</strong></td>
      <td>Table<a href="./class-Table">🔗</a></td>
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

- ParentChildLink[🔗](./class-ParentChildLink) → table

## ClassDiagramm

```mermaid
classDiagram
  class TableQuery {
  }

  RelationalQuery <|-- TableQuery
  TableQuery --> SqlStatement : sqlWhereExpression
  TableQuery --> AggregationExclude : aggregationExcludes
  TableQuery --> TableQueryOptimizationHint : optimizationHints
  TableQuery --> AggregationTable : aggregationTables
  TableQuery --> Table : table

```
