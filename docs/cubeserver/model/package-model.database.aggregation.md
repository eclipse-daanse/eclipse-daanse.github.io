## Package: model.database.aggregation
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/aggregation`
Prefix: `rolapagg`

Aggregation table descriptors (named / pattern / level / measure mappings).

Parent package: [model.database](./package-model.database.md)



## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class AggregationExclude {
      + ignorecase : Boolean
      + pattern : String
  }

    AggregationExclude <|-- AbstractElement : inherit


  class AggregationForeignKey {
  }
    AggregationForeignKey --> Column : aggregationColumn
    AggregationForeignKey --> Column : factColumn



  class AggregationLevel {
      + collapsed : Boolean
  }
    AggregationLevel --> AggregationLevelProperty : aggregationLevelProperties
    AggregationLevel --> Column : captionColumn
    AggregationLevel --> Column : column
    AggregationLevel --> Column : nameColumn
    AggregationLevel --> Column : ordinalColumns

    AggregationLevel <|-- AbstractElement : inherit


  class AggregationLevelProperty {
  }
    AggregationLevelProperty --> Column : column

    AggregationLevelProperty <|-- AbstractElement : inherit


  class AggregationMeasure {
      + rollupType : String
  }
    AggregationMeasure --> Column : column

    AggregationMeasure <|-- AbstractElement : inherit


  class AggregationMeasureFactCount {
  }
    AggregationMeasureFactCount --> Column : column
    AggregationMeasureFactCount --> Column : factColumn



  class AggregationTable {
      + ignorecase : Boolean
  }
    AggregationTable --> AggregationColumnName : aggregationFactCount
    AggregationTable --> AggregationColumnName : aggregationIgnoreColumns
    AggregationTable --> AggregationForeignKey : aggregationForeignKeys
    AggregationTable --> AggregationMeasure : aggregationMeasures
    AggregationTable --> AggregationLevel : aggregationLevels
    AggregationTable --> AggregationMeasureFactCount : aggregationMeasureFactCounts

    AggregationTable <|-- AbstractElement : inherit


  class ExplicitAggregationTable {
      + approxRowCount : String
  }
    ExplicitAggregationTable --> NamedColumnSet : table

    ExplicitAggregationTable <|-- AggregationTable : inherit


  class PatternAggregationTable {
      + pattern : String
  }
    PatternAggregationTable --> AggregationExclude : excludes

    PatternAggregationTable <|-- AggregationTable : inherit


  class AggregationColumnName {
  }
    AggregationColumnName --> Column : column



```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class AggregationExclude](./class-AggregationExclude.md)
- [Class AggregationForeignKey](./class-AggregationForeignKey.md)
- [Class AggregationLevel](./class-AggregationLevel.md)
- [Class AggregationLevelProperty](./class-AggregationLevelProperty.md)
- [Class AggregationMeasure](./class-AggregationMeasure.md)
- [Class AggregationMeasureFactCount](./class-AggregationMeasureFactCount.md)
- [Class AggregationTable](./class-AggregationTable.md)
- [Class ExplicitAggregationTable](./class-ExplicitAggregationTable.md)
- [Class PatternAggregationTable](./class-PatternAggregationTable.md)
- [Class AggregationColumnName](./class-AggregationColumnName.md)




