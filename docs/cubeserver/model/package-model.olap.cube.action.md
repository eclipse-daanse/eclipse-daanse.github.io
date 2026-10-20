## Package: model.olap.cube.action
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/action`
Prefix: `rolapact`

Cube actions (drill-through, attributes).

Parent package: [model.olap.cube](./package-model.olap.cube.md)



## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class Action {
  }

    Action <|-- AbstractElement : inherit


  class DrillThroughAction {
      + default : Boolean
  }
    DrillThroughAction --> DrillThroughAttribute : drillThroughAttribute
    DrillThroughAction --> BaseMeasure : drillThroughMeasure

    DrillThroughAction <|-- Action : inherit


  class DrillThroughAttribute {
      + property : String
  }
    DrillThroughAttribute --> Dimension : dimension
    DrillThroughAttribute --> Hierarchy : hierarchy
    DrillThroughAttribute --> Level : level



```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class Action](./class-Action.md)
- [Class DrillThroughAction](./class-DrillThroughAction.md)
- [Class DrillThroughAttribute](./class-DrillThroughAttribute.md)




