## Package: model.database.relational
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational`
Prefix: `rolaprel`

Daanse-specific extensions of cwm::relational (ExpressionColumn, InlineTable, DialectSqlView).

Parent package: [model.database](./package-model.database.md)



## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class ExpressionColumn {
  }
    ExpressionColumn --> SqlStatement : sqls

    ExpressionColumn <|-- Column : inherit


  class DialectSqlView {
  }
    DialectSqlView --> SqlStatement : dialectStatements

    DialectSqlView <|-- View : inherit


  class InlineTable {
  }
    InlineTable --> RowSet : extent

    InlineTable <|-- ColumnSet : inherit



  class OrderedColumn {
      + direction : SortingDirection
  }
    OrderedColumn --> Column : column




```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class ExpressionColumn](./class-ExpressionColumn.md)
- [Class DialectSqlView](./class-DialectSqlView.md)
- [Class InlineTable](./class-InlineTable.md)
- [Class OrderedColumn](./class-OrderedColumn.md)


- [Enum ColumnInternalDataType](./enum-ColumnInternalDataType.md)
- [Enum SortingDirection](./enum-SortingDirection.md)


