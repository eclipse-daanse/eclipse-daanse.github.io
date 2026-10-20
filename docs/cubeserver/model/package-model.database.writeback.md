## Package: model.database.writeback
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/writeback`
Prefix: `rolapwb`

Writeback table support.

Parent package: [model.database](./package-model.database.md)



## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class WritebackAttribute {
  }
    WritebackAttribute --> Column : column
    WritebackAttribute --> DimensionConnector : dimensionConnector



  class WritebackTable {
      + schema : String
  }
    WritebackTable --> WritebackAttribute : writebackAttribute
    WritebackTable --> WritebackMeasure : writebackMeasure

    WritebackTable <|-- AbstractElement : inherit


```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class WritebackAttribute](./class-WritebackAttribute.md)
- [Class WritebackTable](./class-WritebackTable.md)




