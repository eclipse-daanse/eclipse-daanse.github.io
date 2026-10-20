## Package: model.olap.dimension
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension`
Prefix: `rolapdim`

Dimension types and dimension connectors.

Parent package: [model.olap](./package-model.olap.md)

### Subpackages

- [Package model.olap.dimension.hierarchy](./package-model.olap.dimension.hierarchy.md)


## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class Dimension {
      + usagePrefix : String
      + visible : Boolean
  }
    Dimension --> Hierarchy : hierarchies
    Dimension --> Hierarchy : defaultHierarchy

    Dimension <|-- AbstractElement : inherit


  class DimensionConnector {
      + usagePrefix : String
      + visible : Boolean
      + overrideDimensionName : String
  }
    DimensionConnector --> Column : foreignKey
    DimensionConnector --> Dimension : dimension
    DimensionConnector --> Level : level
    DimensionConnector --> PhysicalCube : physicalCube

    DimensionConnector <|-- AbstractElement : inherit


  class TimeDimension {
  }

    TimeDimension <|-- Dimension : inherit


  class StandardDimension {
  }

    StandardDimension <|-- Dimension : inherit


  class NamedSet {
      + displayFolder : String
  }
    NamedSet --> MdxExpression : formula

    NamedSet <|-- AbstractElement : inherit


```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class Dimension](./class-Dimension.md)
- [Class DimensionConnector](./class-DimensionConnector.md)
- [Class TimeDimension](./class-TimeDimension.md)
- [Class StandardDimension](./class-StandardDimension.md)
- [Class NamedSet](./class-NamedSet.md)




