## Package: model.olap.cube
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube`
Prefix: `rolapcube`

Cube types with direct cube-scoped attachments.

Parent package: [model.olap](./package-model.olap.md)

### Subpackages

- [Package model.olap.cube.action](./package-model.olap.cube.action.md)
- [Package model.olap.cube.measure](./package-model.olap.cube.measure.md)


## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class Cube {
      + enabled : Boolean
      + visible : Boolean
  }
    Cube --> CalculatedMember : calculatedMembers
    Cube --> NamedSet : namedSets
    Cube --> Kpi : kpis
    Cube --> MemberLike : defaultMeasure

    Cube <|-- AbstractElement : inherit


  class PhysicalCube {
      + cache : Boolean
  }
    PhysicalCube --> DimensionConnector : dimensionConnectors
    PhysicalCube --> RelationalSource : source
    PhysicalCube --> WritebackTable : writebackTable
    PhysicalCube --> Action : action
    PhysicalCube --> MeasureGroup : measureGroups

    PhysicalCube <|-- Cube : inherit


  class VirtualCube {
  }
    VirtualCube --> DimensionConnector : dimensionConnectors
    VirtualCube --> CubeConnector : cubeUsages
    VirtualCube --> CalculatedMember : referencedCalculatedMembers
    VirtualCube --> BaseMeasure : referencedMeasures

    VirtualCube <|-- Cube : inherit


  class CubeConnector {
      + ignoreUnrelatedDimensions : Boolean
  }
    CubeConnector --> Cube : cube



  class MeasureGroup {
  }
    MeasureGroup --> BaseMeasure : measures
    MeasureGroup --> PhysicalCube : physicalCube

    MeasureGroup <|-- AbstractElement : inherit


  class Kpi {
      + displayFolder : String
      + associatedMeasureGroupID : String
      + weight : String
      + trendGraphic : String
      + statusGraphic : String
  }
    Kpi --> MdxExpression : value
    Kpi --> MdxExpression : goal
    Kpi --> MdxExpression : status
    Kpi --> MdxExpression : trend
    Kpi --> MdxExpression : currentTimeMember
    Kpi --> Kpi : parentKpi

    Kpi <|-- AbstractElement : inherit


```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class Cube](./class-Cube.md)
- [Class PhysicalCube](./class-PhysicalCube.md)
- [Class VirtualCube](./class-VirtualCube.md)
- [Class CubeConnector](./class-CubeConnector.md)
- [Class MeasureGroup](./class-MeasureGroup.md)
- [Class Kpi](./class-Kpi.md)




