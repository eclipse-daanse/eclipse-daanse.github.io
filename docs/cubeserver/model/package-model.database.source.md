## Package: model.database.source
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source`
Prefix: `rolapsrc`

Relational source types used as data sources for cubes and hierarchies.

Parent package: [model.database](./package-model.database.md)



## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class JoinedQueryElement {
      + alias : String
  }
    JoinedQueryElement --> Column : key
    JoinedQueryElement --> RelationalSource : source



  class RelationalSource {
      + alias : String
  }

    RelationalSource <|-- AbstractElement : inherit


  class TableSource {
  }
    TableSource --> NamedColumnSet : table
    TableSource --> TableQueryOptimizationHint : optimizationHints
    TableSource --> SqlStatement : sqlWhereExpression
    TableSource --> AggregationExclude : aggregationExcludes
    TableSource --> AggregationTable : aggregationTables

    TableSource <|-- RelationalSource : inherit


  class SqlSelectSource {
  }
    SqlSelectSource --> DialectSqlView : sql

    SqlSelectSource <|-- RelationalSource : inherit


  class JoinSource {
  }
    JoinSource --> JoinedQueryElement : left
    JoinSource --> JoinedQueryElement : right

    JoinSource <|-- RelationalSource : inherit


  class InlineTableSource {
  }
    InlineTableSource --> InlineTable : table

    InlineTableSource <|-- RelationalSource : inherit


  class SqlStatement {
      + dialects : String
  }

    SqlStatement <|-- Expression : inherit


  class TableQueryOptimizationHint {
      + value : String
      + type : String
  }



```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class JoinedQueryElement](./class-JoinedQueryElement.md)
- [Class RelationalSource](./class-RelationalSource.md)
- [Class TableSource](./class-TableSource.md)
- [Class SqlSelectSource](./class-SqlSelectSource.md)
- [Class JoinSource](./class-JoinSource.md)
- [Class InlineTableSource](./class-InlineTableSource.md)
- [Class SqlStatement](./class-SqlStatement.md)
- [Class TableQueryOptimizationHint](./class-TableQueryOptimizationHint.md)




