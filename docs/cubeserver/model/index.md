# 🧩 Introduction: Model Structure and Class Overview

This chapter provides a comprehensive overview of all classes and enumerations defined in the EMF Ecore model. Each section focuses on a single class or enum, presenting its full structure, including:

- Attributes and their types
- References to other model elements
- Cardinalities, Containsments and default values
- Usage relationships across the model
- A visual diagram for better understanding

The documentation is generated directly from the Ecore/XMI representation of the model, ensuring consistency with the underlying formal definition.

Unlike formats such as JSON or YAML, XMI is a model-oriented serialization designed for structural clarity and type safety. It captures the semantics and relationships of your model elements explicitly, making it the preferred format for precise and scalable domain modeling.

Use this section to explore how the individual elements of your model are defined and how they interconnect — both structurally and semantically.

## Package: rolapmapping
URI: `https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping`
Prefix: `roma`

Here will be the description for the package.

## PackageDiagram

A full overview of the package is given in the following diagram. It shows all classes and enums, their attributes and references. In the Pages of the Classes are diagrams with the Focus on the Class itself and only the related Classes.

```mermaid
classDiagram
  class Documentation {
      + title : EString
      + value : EString
      + orderMajor : EInt
      + orderMinor : EInt
      + orderMicro : EInt
      + showContainer : EBoolean
      + showContainments : EInt
  }

  class DocumentedElement {
  }
    DocumentedElement --> Documentation : documentations

  class Annotation {
      + value : EString
      + name : EString
  }

  class AbstractElement {
      + id : EString
      + description : EString
      + name : EString
  }
    AbstractElement --> Annotation : annotations

  class Enviroment {
  }
    Enviroment --> Catalog : schemas
    Enviroment --> Cube : cubes
    Enviroment --> Dimension : dimensions
    Enviroment --> Hierarchy : hierarchies
    Enviroment --> Level : levels
    Enviroment --> Formatter : formatters
    Enviroment --> AccessRole : accessRoles
    Enviroment --> AggregationTable : aggregationTables
    Enviroment --> AggregationExclude : aggregationExcludes

  class Catalog {
      + measuresDimensionName : EString
  }
    Catalog --> Parameter : parameters
    Catalog --> Cube : cubes
    Catalog --> NamedSet : namedSets
    Catalog --> AccessRole : accessRoles
    Catalog --> AccessRole : defaultAccessRole
    Catalog --> DatabaseSchema : dbschemas

  class Cube {
      + enabled : Boolean
      + visible : Boolean
  }
    Cube --> CalculatedMember : calculatedMembers
    Cube --> NamedSet : namedSets
    Cube --> Kpi : kpis
    Cube --> Member : defaultMeasure

  class PhysicalCube {
      + cache : Boolean
  }
    PhysicalCube --> DimensionConnector : dimensionConnectors
    PhysicalCube --> Query : query
    PhysicalCube --> WritebackTable : writebackTable
    PhysicalCube --> Action : action
    PhysicalCube --> MeasureGroup : measureGroups

  class VirtualCube {
  }
    VirtualCube --> DimensionConnector : dimensionConnectors
    VirtualCube --> CubeConnector : cubeUsages
    VirtualCube --> CalculatedMember : referencedCalculatedMembers
    VirtualCube --> BaseMeasure : referencedMeasures

  class CubeConnector {
      + ignoreUnrelatedDimensions : Boolean
  }
    CubeConnector --> Cube : cube

  class MeasureGroup {
      + name : EString
  }
    MeasureGroup --> BaseMeasure : measures
    MeasureGroup --> PhysicalCube : physicalCube

  class Member {
      + displayFolder : EString
      + visible : Boolean
      + formatString : EString
  }
    Member --> CalculatedMemberProperty : calculatedMemberProperties
    Member --> CellFormatter : cellFormatter

  class MinMeasure {
  }

  class MaxMeasure {
  }

  class SumMeasure {
  }

  class AvgMeasure {
  }

  class NoneMeasure {
  }

  class CountMeasure {
      + distinct : Boolean
  }

  class TextAggMeasure {
      + separator : EString
      + distinct : Boolean
      + coalesce : EString
      + onOverflowTruncate : EString
  }
    TextAggMeasure --> OrderedColumn : orderByColumns

  class BitAggMeasure {
      + aggType : BitAggType
      + not : Boolean
  }

  class PercentileMeasure {
      + percentType : PercentType
      + percentile : Double
  }
    PercentileMeasure --> OrderedColumn : column

  class CustomMeasure {
      + template : EString
      + properties : EString
  }
    CustomMeasure --> Column : columns

  class SQLExpressionBaseMeasure {
  }
    SQLExpressionBaseMeasure --> SQLExpressionColumn : column

  class ColumnBaseMeasure {
  }
    ColumnBaseMeasure --> Column : column

  class BaseMeasure {
      + backColor : EString
      + dataType : ColumnInternalDataType
      + formatter : EString
  }
    BaseMeasure --> MeasureGroup : measureGroup

  class Kpi {
      + displayFolder : EString
      + associatedMeasureGroupID : EString
      + value : EString
      + goal : EString
      + status : EString
      + trend : EString
      + weight : EString
      + trendGraphic : EString
      + statusGraphic : EString
      + currentTimeMember : EString
  }
    Kpi --> Translation : translations
    Kpi --> Kpi : parentKpi

  class NamedSet {
      + displayFolder : EString
      + formula : Formula
  }

  class Dimension {
      + usagePrefix : EString
      + visible : Boolean
  }
    Dimension --> Hierarchy : hierarchies
    Dimension --> Hierarchy : defaultHierarchy

  class DimensionConnector {
      + usagePrefix : EString
      + visible : Boolean
      + overrideDimensionName : EString
      + id : EString
  }
    DimensionConnector --> Column : foreignKey
    DimensionConnector --> Dimension : dimension
    DimensionConnector --> Level : level
    DimensionConnector --> PhysicalCube : physicalCube

  class TimeDimension {
  }

  class StandardDimension {
  }

  class Hierarchy {
      + allLevelName : EString
      + allMemberCaption : EString
      + allMemberName : EString
      + defaultMember : EString
      + displayFolder : EString
      + hasAll : Boolean
      + memberReaderClass : EString
      + origin : EString
      + uniqueKeyLevelName : EString
      + visible : Boolean
  }
    Hierarchy --> Level : levels
    Hierarchy --> MemberReaderParameter : memberReaderParameters
    Hierarchy --> Column : primaryKey
    Hierarchy --> Query : query

  class Level {
      + approxRowCount : EString
      + hideMemberIf : HideMemberIf
      + type : LevelDefinition
      + nullParentValue : EString
      + columnType : ColumnInternalDataType
      + uniqueMembers : Boolean
      + visible : Boolean
  }
    Level --> ParentChildLink : parentChildLink
    Level --> MemberProperty : memberProperties
    Level --> MemberFormatter : memberFormatter
    Level --> Column : captionColumn
    Level --> Column : column
    Level --> Column : nameColumn
    Level --> Column : ordinalColumn
    Level --> Column : parentColumn

  class MemberProperty {
      + dependsOnLevelValue : Boolean
      + propertyType : ColumnInternalDataType
  }
    MemberProperty --> MemberPropertyFormatter : formatter
    MemberProperty --> Column : column

  class CalculatedMember {
      + formula : Formula
      + parent : EString
  }
    CalculatedMember --> Hierarchy : hierarchy
    CalculatedMember --> PhysicalCube : physicalCube

  class CalculatedMemberProperty {
      + expression : EString
      + value : EString
  }

  class ParentChildLink {
  }
    ParentChildLink --> TableQuery : table
    ParentChildLink --> Column : childColumn
    ParentChildLink --> Column : parentColumn

  class RelationalQuery {
      + alias : EString
  }

  class InlineTableQuery {
  }
    InlineTableQuery --> InlineTable : table

  class JoinQuery {
  }
    JoinQuery --> JoinedQueryElement : left
    JoinQuery --> JoinedQueryElement : right

  class JoinedQueryElement {
      + alias : EString
  }
    JoinedQueryElement --> Column : key
    JoinedQueryElement --> Query : query

  class TableQuery {
  }
    TableQuery --> SqlStatement : sqlWhereExpression
    TableQuery --> AggregationExclude : aggregationExcludes
    TableQuery --> TableQueryOptimizationHint : optimizationHints
    TableQuery --> AggregationTable : aggregationTables
    TableQuery --> Table : table

  class TableQueryOptimizationHint {
      + value : EString
      + type : EString
  }

  class SqlSelectQuery {
  }
    SqlSelectQuery --> SqlView : sql

  class MemberReaderParameter {
      + name : EString
      + value : EString
  }

  class Translation {
      + language : UnsignedInt
      + caption : EString
      + description : EString
      + displayFolder : EString
  }
    Translation --> Annotation : annotations


  class Formatter {
      + ref : EString
  }

  class CellFormatter {
  }

  class MemberFormatter {
  }

  class MemberPropertyFormatter {
  }

  class Parameter {
      + defaultValue : EString
      + description : EString
      + modifiable : Boolean
      + name : EString
      + dataType : ColumnInternalDataType
  }

  class Action {
  }

  class DrillThroughAction {
      + default : Boolean
  }
    DrillThroughAction --> DrillThroughAttribute : drillThroughAttribute
    DrillThroughAction --> BaseMeasure : drillThroughMeasure

  class DrillThroughAttribute {
      + property : EString
  }
    DrillThroughAttribute --> Dimension : dimension
    DrillThroughAttribute --> Hierarchy : hierarchy
    DrillThroughAttribute --> Level : level

  class WritebackAttribute {
  }
    WritebackAttribute --> Column : column
    WritebackAttribute --> DimensionConnector : dimensionConnector

  class WritebackMeasure {
      + name : EString
  }
    WritebackMeasure --> Column : column

  class WritebackTable {
      + name : EString
      + schema : EString
  }
    WritebackTable --> WritebackAttribute : writebackAttribute
    WritebackTable --> WritebackMeasure : writebackMeasure

  class AggregationExclude {
      + ignorecase : Boolean
      + name : EString
      + pattern : EString
      + id : EString
  }

  class AggregationForeignKey {
  }
    AggregationForeignKey --> Column : aggregationColumn
    AggregationForeignKey --> Column : factColumn

  class AggregationLevel {
      + collapsed : Boolean
      + name : EString
  }
    AggregationLevel --> AggregationLevelProperty : aggregationLevelProperties
    AggregationLevel --> Column : captionColumn
    AggregationLevel --> Column : column
    AggregationLevel --> Column : nameColumn
    AggregationLevel --> Column : ordinalColumn

  class AggregationLevelProperty {
      + name : EString
  }
    AggregationLevelProperty --> Column : column

  class AggregationMeasure {
      + name : EString
      + rollupType : EString
  }
    AggregationMeasure --> Column : column

  class AggregationMeasureFactCount {
  }
    AggregationMeasureFactCount --> Column : column
    AggregationMeasureFactCount --> Column : factColumn

  class AggregationTable {
      + ignorecase : Boolean
      + id : EString
  }
    AggregationTable --> AggregationColumnName : aggregationFactCount
    AggregationTable --> AggregationColumnName : aggregationIgnoreColumns
    AggregationTable --> AggregationForeignKey : aggregationForeignKeys
    AggregationTable --> AggregationMeasure : aggregationMeasures
    AggregationTable --> AggregationLevel : aggregationLevels
    AggregationTable --> AggregationMeasureFactCount : aggregationMeasureFactCounts

  class AggregationName {
      + approxRowCount : EString
  }
    AggregationName --> Table : name

  class AggregationPattern {
      + pattern : EString
  }
    AggregationPattern --> AggregationExclude : excludes

  class AggregationColumnName {
  }
    AggregationColumnName --> Column : column

  class AccessCubeGrant {
      + cubeAccess : CubeAccess
  }
    AccessCubeGrant --> AccessDimensionGrant : dimensionGrants
    AccessCubeGrant --> AccessHierarchyGrant : hierarchyGrants
    AccessCubeGrant --> Cube : cube

  class AccessDatabaseSchemaGrant {
      + databaseSchemaAccess : DatabaseSchemaAccess
  }
    AccessDatabaseSchemaGrant --> AccessTableGrant : tableGrants
    AccessDatabaseSchemaGrant --> DatabaseSchema : databaseSchema

  class AccessTableGrant {
      + tableAccess : TableAccess
  }
    AccessTableGrant --> AccessColumnGrant : columnGrants
    AccessTableGrant --> Table : table

  class AccessColumnGrant {
      + columnAccess : ColumnAccess
  }
    AccessColumnGrant --> Column : column

  class AccessDimensionGrant {
      + dimensionAccess : DimensionAccess
  }
    AccessDimensionGrant --> Dimension : dimension

  class AccessHierarchyGrant {
      + hierarchyAccess : HierarchyAccess
      + rollupPolicy : RollupPolicy
  }
    AccessHierarchyGrant --> AccessMemberGrant : memberGrants
    AccessHierarchyGrant --> Hierarchy : hierarchy
    AccessHierarchyGrant --> Level : bottomLevel
    AccessHierarchyGrant --> Level : topLevel

  class AccessMemberGrant {
      + memberAccess : MemberAccess
      + member : EString
  }

  class AccessRole {
  }
    AccessRole --> AccessCatalogGrant : accessCatalogGrants
    AccessRole --> AccessRole : referencedAccessRoles

  class AccessCatalogGrant {
      + catalogAccess : CatalogAccess
  }
    AccessCatalogGrant --> AccessCubeGrant : cubeGrants
    AccessCatalogGrant --> AccessDatabaseSchemaGrant : databaseSchemaGrants

  class DatabaseCatalog {
  }
    DatabaseCatalog --> DatabaseSchema : schemas
    DatabaseCatalog --> Link : links

  class DatabaseSchema {
  }
    DatabaseSchema --> Table : tables

  class Table {
  }
    Table --> Column : columns
    Table --> DatabaseSchema : schema

  class PhysicalTable {
  }

  class SystemTable {
  }

  class ViewTable {
  }

  class OrderedColumn {
      + ascend : Boolean
  }
    OrderedColumn --> Column : column

  class Column {
      + type : ColumnType
      + columnSize : EIntegerObject
      + decimalDigits : EIntegerObject
      + charOctetLength : EIntegerObject
      + numPrecRadix : EIntegerObject
      + nullable : EBooleanObject
  }
    Column --> Table : table
    Column --> Link : primaryLinks
    Column --> Link : foreignLinks

  class PhysicalColumn {
  }

  class SQLExpressionColumn {
  }
    SQLExpressionColumn --> SqlStatement : sqls

  class Query {
      + id : EString
  }
    Query --> Documentation : documentation

  class Link {
  }
    Link --> Column : primaryKey
    Link --> Column : foreignKey

  class InlineTable {
  }
    InlineTable --> Row : rows

  class Row {
  }
    Row --> RowValue : rowValues

  class RowValue {
      + value : EString
  }
    RowValue --> Column : column

  class SqlStatement {
      + dialects : EString
      + sql : EString
  }

  class SqlView {
  }
    SqlView --> SqlStatement : sqlStatements























































  class IMemberPropertyFormatter {
  }

  class IMemberFormatter {
  }

































































```


### All Classes and Enums


- [Class Documentation](#class-documentation)
- [Class DocumentedElement](#class-documentedelement)
- [Class Annotation](#class-annotation)
- [Class AbstractElement](#class-abstractelement)
- [Class Enviroment](#class-enviroment)
- [Class Catalog](#class-catalog)
- [Class Cube](#class-cube)
- [Class PhysicalCube](#class-physicalcube)
- [Class VirtualCube](#class-virtualcube)
- [Class CubeConnector](#class-cubeconnector)
- [Class MeasureGroup](#class-measuregroup)
- [Class Member](#class-member)
- [Class MinMeasure](#class-minmeasure)
- [Class MaxMeasure](#class-maxmeasure)
- [Class SumMeasure](#class-summeasure)
- [Class AvgMeasure](#class-avgmeasure)
- [Class NoneMeasure](#class-nonemeasure)
- [Class CountMeasure](#class-countmeasure)
- [Class TextAggMeasure](#class-textaggmeasure)
- [Class BitAggMeasure](#class-bitaggmeasure)
- [Class PercentileMeasure](#class-percentilemeasure)
- [Class CustomMeasure](#class-custommeasure)
- [Class SQLExpressionBaseMeasure](#class-sqlexpressionbasemeasure)
- [Class ColumnBaseMeasure](#class-columnbasemeasure)
- [Class BaseMeasure](#class-basemeasure)
- [Class Kpi](#class-kpi)
- [Class NamedSet](#class-namedset)
- [Class Dimension](#class-dimension)
- [Class DimensionConnector](#class-dimensionconnector)
- [Class TimeDimension](#class-timedimension)
- [Class StandardDimension](#class-standarddimension)
- [Class Hierarchy](#class-hierarchy)
- [Class Level](#class-level)
- [Class MemberProperty](#class-memberproperty)
- [Class CalculatedMember](#class-calculatedmember)
- [Class CalculatedMemberProperty](#class-calculatedmemberproperty)
- [Class ParentChildLink](#class-parentchildlink)
- [Class RelationalQuery](#class-relationalquery)
- [Class InlineTableQuery](#class-inlinetablequery)
- [Class JoinQuery](#class-joinquery)
- [Class JoinedQueryElement](#class-joinedqueryelement)
- [Class TableQuery](#class-tablequery)
- [Class TableQueryOptimizationHint](#class-tablequeryoptimizationhint)
- [Class SqlSelectQuery](#class-sqlselectquery)
- [Class MemberReaderParameter](#class-memberreaderparameter)
- [Class Translation](#class-translation)
- [Class Formatter](#class-formatter)
- [Class CellFormatter](#class-cellformatter)
- [Class MemberFormatter](#class-memberformatter)
- [Class MemberPropertyFormatter](#class-memberpropertyformatter)
- [Class Parameter](#class-parameter)
- [Class Action](#class-action)
- [Class DrillThroughAction](#class-drillthroughaction)
- [Class DrillThroughAttribute](#class-drillthroughattribute)
- [Class WritebackAttribute](#class-writebackattribute)
- [Class WritebackMeasure](#class-writebackmeasure)
- [Class WritebackTable](#class-writebacktable)
- [Class AggregationExclude](#class-aggregationexclude)
- [Class AggregationForeignKey](#class-aggregationforeignkey)
- [Class AggregationLevel](#class-aggregationlevel)
- [Class AggregationLevelProperty](#class-aggregationlevelproperty)
- [Class AggregationMeasure](#class-aggregationmeasure)
- [Class AggregationMeasureFactCount](#class-aggregationmeasurefactcount)
- [Class AggregationTable](#class-aggregationtable)
- [Class AggregationName](#class-aggregationname)
- [Class AggregationPattern](#class-aggregationpattern)
- [Class AggregationColumnName](#class-aggregationcolumnname)
- [Class AccessCubeGrant](#class-accesscubegrant)
- [Class AccessDatabaseSchemaGrant](#class-accessdatabaseschemagrant)
- [Class AccessTableGrant](#class-accesstablegrant)
- [Class AccessColumnGrant](#class-accesscolumngrant)
- [Class AccessDimensionGrant](#class-accessdimensiongrant)
- [Class AccessHierarchyGrant](#class-accesshierarchygrant)
- [Class AccessMemberGrant](#class-accessmembergrant)
- [Class AccessRole](#class-accessrole)
- [Class AccessCatalogGrant](#class-accesscataloggrant)
- [Class DatabaseCatalog](#class-databasecatalog)
- [Class DatabaseSchema](#class-databaseschema)
- [Class Table](#class-table)
- [Class PhysicalTable](#class-physicaltable)
- [Class SystemTable](#class-systemtable)
- [Class ViewTable](#class-viewtable)
- [Class OrderedColumn](#class-orderedcolumn)
- [Class Column](#class-column)
- [Class PhysicalColumn](#class-physicalcolumn)
- [Class SQLExpressionColumn](#class-sqlexpressioncolumn)
- [Class Query](#class-query)
- [Class Link](#class-link)
- [Class InlineTable](#class-inlinetable)
- [Class Row](#class-row)
- [Class RowValue](#class-rowvalue)
- [Class SqlStatement](#class-sqlstatement)
- [Class SqlView](#class-sqlview)
- [Class IMemberPropertyFormatter](#class-imemberpropertyformatter)
- [Class IMemberFormatter](#class-imemberformatter)


- [Enum CatalogAccess](#enum-catalogaccess)
- [Enum DatabaseSchemaAccess](#enum-databaseschemaaccess)
- [Enum TableAccess](#enum-tableaccess)
- [Enum ColumnAccess](#enum-columnaccess)
- [Enum CubeAccess](#enum-cubeaccess)
- [Enum DimensionAccess](#enum-dimensionaccess)
- [Enum HierarchyAccess](#enum-hierarchyaccess)
- [Enum HideMemberIf](#enum-hidememberif)
- [Enum MemberAccess](#enum-memberaccess)
- [Enum RollupPolicy](#enum-rolluppolicy)
- [Enum ColumnInternalDataType](#enum-columninternaldatatype)
- [Enum ColumnType](#enum-columntype)
- [Enum BitAggType](#enum-bitaggtype)
- [Enum PercentType](#enum-percenttype)
- [Enum LevelDefinition](#enum-leveldefinition)


