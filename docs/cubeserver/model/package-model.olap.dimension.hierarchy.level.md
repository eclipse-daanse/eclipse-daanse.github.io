## Package: model.olap.dimension.hierarchy.level
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level`
Prefix: `rolaplev`

Level, Member, MemberProperty and their calculated variants.

Parent package: [model.olap.dimension.hierarchy](./package-model.olap.dimension.hierarchy.md)



## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

<ClientOnly>
<MermaidZoom>

```mermaid
classDiagram
  class MemberLike {
      + displayFolder : String
      + visible : Boolean
      + formatString : String
  }
    MemberLike --> CalculatedMemberProperty : calculatedMemberProperties
    MemberLike --> CellFormatter : cellFormatter

    MemberLike <|-- AbstractElement : inherit


  class Member {
  }

    Member <|-- MemberLike : inherit


  class Level {
      + approxRowCount : String
      + hideMemberIf : HideMemberIf
      + type : LevelDefinition
      + columnType : ColumnInternalDataType
      + uniqueMembers : Boolean
      + visible : Boolean
  }
    Level --> MemberProperty : memberProperties
    Level --> MemberFormatter : memberFormatter
    Level --> Column : captionColumn
    Level --> Column : column
    Level --> Column : nameColumn
    Level --> OrderedColumn : ordinalColumns
    Level --> RelationalSource : relationalSource

    Level <|-- AbstractElement : inherit


  class MemberProperty {
      + dependsOnLevelValue : Boolean
      + propertyType : ColumnInternalDataType
  }
    MemberProperty --> MemberPropertyFormatter : formatter
    MemberProperty --> Column : column

    MemberProperty <|-- AbstractElement : inherit


  class CalculatedMember {
      + parent : String
  }
    CalculatedMember --> MdxExpression : formula
    CalculatedMember --> Hierarchy : hierarchy
    CalculatedMember --> Cube : cube

    CalculatedMember <|-- Member : inherit


  class CalculatedMemberProperty {
      + value : String
  }
    CalculatedMemberProperty --> MdxExpression : expression

    CalculatedMemberProperty <|-- AbstractElement : inherit


  class MemberReaderParameter {
      + value : String
  }

    MemberReaderParameter <|-- AbstractElement : inherit




```

</MermaidZoom>
</ClientOnly>


### All Classes and Enums


- [Class MemberLike](./class-MemberLike.md)
- [Class Member](./class-Member.md)
- [Class Level](./class-Level.md)
- [Class MemberProperty](./class-MemberProperty.md)
- [Class CalculatedMember](./class-CalculatedMember.md)
- [Class CalculatedMemberProperty](./class-CalculatedMemberProperty.md)
- [Class MemberReaderParameter](./class-MemberReaderParameter.md)


- [Enum HideMemberIf](./enum-HideMemberIf.md)
- [Enum LevelDefinition](./enum-LevelDefinition.md)


