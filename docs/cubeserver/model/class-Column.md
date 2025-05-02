---
title: Column
group: Class
---

# Column<a name="class-column"></a>


## Extends
- AbstractElement [🔗](./class-AbstractElement)
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
      <td><strong>type</strong></td>
      <td>false</td>
      <td><em>ColumnType<a href="./enum-ColumnType">🔗</a></em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>columnSize</strong></td>
      <td>false</td>
      <td><em>EIntegerObject</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>decimalDigits</strong></td>
      <td>false</td>
      <td><em>EIntegerObject</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>charOctetLength</strong></td>
      <td>false</td>
      <td><em>EIntegerObject</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>numPrecRadix</strong></td>
      <td>false</td>
      <td><em>EIntegerObject</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>nullable</strong></td>
      <td>false</td>
      <td><em>EBooleanObject</em></td>
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
    <tr>
      <td><strong>table</strong></td>
      <td>Table<a href="./class-Table">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>primaryLinks</strong></td>
      <td>Link<a href="./class-Link">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>foreignLinks</strong></td>
      <td>Link<a href="./class-Link">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- CustomMeasure[🔗](./class-CustomMeasure) → columns
- ColumnBaseMeasure[🔗](./class-ColumnBaseMeasure) → column
- DimensionConnector[🔗](./class-DimensionConnector) → foreignKey
- Hierarchy[🔗](./class-Hierarchy) → primaryKey
- Level[🔗](./class-Level) → captionColumn
- Level[🔗](./class-Level) → column
- Level[🔗](./class-Level) → nameColumn
- Level[🔗](./class-Level) → ordinalColumn
- Level[🔗](./class-Level) → parentColumn
- MemberProperty[🔗](./class-MemberProperty) → column
- ParentChildLink[🔗](./class-ParentChildLink) → childColumn
- ParentChildLink[🔗](./class-ParentChildLink) → parentColumn
- JoinedQueryElement[🔗](./class-JoinedQueryElement) → key
- WritebackAttribute[🔗](./class-WritebackAttribute) → column
- WritebackMeasure[🔗](./class-WritebackMeasure) → column
- AggregationForeignKey[🔗](./class-AggregationForeignKey) → aggregationColumn
- AggregationForeignKey[🔗](./class-AggregationForeignKey) → factColumn
- AggregationLevel[🔗](./class-AggregationLevel) → captionColumn
- AggregationLevel[🔗](./class-AggregationLevel) → column
- AggregationLevel[🔗](./class-AggregationLevel) → nameColumn
- AggregationLevel[🔗](./class-AggregationLevel) → ordinalColumn
- AggregationLevelProperty[🔗](./class-AggregationLevelProperty) → column
- AggregationMeasure[🔗](./class-AggregationMeasure) → column
- AggregationMeasureFactCount[🔗](./class-AggregationMeasureFactCount) → column
- AggregationMeasureFactCount[🔗](./class-AggregationMeasureFactCount) → factColumn
- AggregationColumnName[🔗](./class-AggregationColumnName) → column
- AccessColumnGrant[🔗](./class-AccessColumnGrant) → column
- Table[🔗](./class-Table) → columns
- OrderedColumn[🔗](./class-OrderedColumn) → column
- Link[🔗](./class-Link) → primaryKey
- Link[🔗](./class-Link) → foreignKey
- RowValue[🔗](./class-RowValue) → column

## ClassDiagramm

```mermaid
classDiagram
  class Column {
    + type : ColumnType
    + columnSize : EIntegerObject
    + decimalDigits : EIntegerObject
    + charOctetLength : EIntegerObject
    + numPrecRadix : EIntegerObject
    + nullable : EBooleanObject
  }

  AbstractElement <|-- Column
  Column --> Table : table
  Column --> Link : primaryLinks
  Column --> Link : foreignLinks

```
