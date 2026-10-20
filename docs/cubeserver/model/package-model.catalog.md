## Package: model.catalog
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog`
Prefix: `rolapcat`

Catalog entry points for rolap mappings.

Parent package: [model](./index.md)



## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class Catalog {
      + measuresDimensionName : String
  }
    Catalog --> Parameter : parameters
    Catalog --> AccessRole : defaultAccessRole

    Catalog <|-- Package : inherit
    Catalog <|-- AbstractElement : inherit


```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class Catalog](./class-Catalog.md)




