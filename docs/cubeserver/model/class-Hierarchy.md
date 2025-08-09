---
title: Hierarchy
group: Class
---

# Hierarchy<a name="class-hierarchy"></a>

Abstract base class for OLAP hierarchies that organize dimension members into structured levels, enabling multidimensional analysis through drill-down, roll-up, and slice-and-dice operations. Hierarchies serve as navigational pathways through dimension data, organizing members from most detailed (leaf) to most aggregated (all member) levels. They support both explicit level-based structures and parent-child self-referencing relationships.
## Extends
- AbstractElement [🔗](./class-AbstractElement)
## Attributes

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Id</th>
      <th>Type</th>
      <th>Lower</th>
      <th>Upper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>allLevelName</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Custom name for the All level when hasAll is true. If not specified, defaults to '(All)'. The All level represents the topmost aggregation level containing the single All member that aggregates all members in the hierarchy.</em></td>
    </tr>
    <tr>
      <td><strong>allMemberCaption</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Display caption for the All member that appears in client tools and reports. This provides a user-friendly label that may differ from the internal allMemberName, supporting localization and business-friendly terminology.</em></td>
    </tr>
    <tr>
      <td><strong>allMemberName</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Name of the All member when hasAll is true. If not specified, defaults to 'All [HierarchyName]s'. The All member serves as the root aggregation member containing the sum of all members in the hierarchy.</em></td>
    </tr>
    <tr>
      <td><strong>defaultMember</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>MDX expression identifying the default member used when this hierarchy is referenced in queries without an explicit member selection. If not specified, defaults to the All member (when hasAll=true) or the first member of the first level. This member serves as the implicit context for calculations and filtering.</em></td>
    </tr>
    <tr>
      <td><strong>displayFolder</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Optional folder path for organizing this hierarchy in client tool dimension browsers and metadata trees. Supports hierarchical folder structures using forward slashes (e.g., 'Geography/Administrative') to create logical groupings for improved user experience and dimension organization.</em></td>
    </tr>
    <tr>
      <td><strong>hasAll</strong></td>
      <td>false</td>
      <td><em>Boolean</em></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Controls whether this hierarchy includes an 'All' level containing a single member that aggregates all other members. When true (default), enables total aggregations and 'grand total' calculations. Time hierarchies often set this to false to prevent meaningless temporal aggregations across all time periods.</em></td>
    </tr>
    <tr>
      <td><strong>memberReaderClass</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Fully qualified class name of a custom Java MemberReader implementation for loading hierarchy members. When specified, overrides the default member loading behavior to enable custom data sources, specialized caching strategies, security integration, or advanced member computation logic. The class must implement the MemberReader interface.</em></td>
    </tr>
    <tr>
      <td><strong>origin</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Source system identifier indicating the origin of this hierarchy definition. Used for provenance tracking, debugging, and managing hierarchies that originate from multiple source systems or schema generation processes. Helpful for maintaining data lineage in complex multi-source OLAP environments.</em></td>
    </tr>
    <tr>
      <td><strong>uniqueKeyLevelName</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Name of the level within this hierarchy that contains unique key values for member identification, establishing the granularity level where member keys become distinct and enabling proper member resolution in MDX queries, drill-through operations, and dimensional navigation scenarios. The unique key level defines the point in the hierarchical structure where member identification transitions from potentially shared keys at higher levels to guaranteed unique identifiers, which is crucial for maintaining data integrity and supporting sophisticated analytical operations that require precise member targeting. This specification is essential for complex hierarchical structures where multiple levels may share similar identifiers but uniqueness is guaranteed only at specific granularity levels, supporting scenarios such as geographic hierarchies where city names may repeat across different states but become unique when combined with state-level context, product hierarchies where product names may be duplicated across different categories but become unique within category context, and organizational hierarchies where employee names may repeat across different departments but become unique within departmental context. The unique key level enables advanced OLAP functionality including precise member filtering where security policies or analytical constraints must target specific individual members, accurate drill-through linking where aggregated results must be traceable to specific underlying data records, and sophisticated member-based calculations where analytical logic must operate on unambiguously identified dimensional entities while maintaining performance and accuracy across large-scale enterprise analytical environments.</em></td>
    </tr>
    <tr>
      <td><strong>visible</strong></td>
      <td>false</td>
      <td><em>Boolean</em></td>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Boolean flag controlling whether this hierarchy appears in client tool hierarchy browsers, XMLA metadata discovery responses, and dimensional navigation interfaces, enabling sophisticated visibility management for hierarchical structures that may need to be hidden from general users while remaining accessible for programmatic access and advanced analytical scenarios. When set to false, the hierarchy becomes invisible to standard user interfaces and metadata enumeration operations but remains fully functional for direct MDX references, programmatic queries, and system-level operations that explicitly reference the hierarchy by name. This visibility control is essential for enterprise OLAP deployments where hierarchical complexity must be managed to provide optimal user experiences, supporting scenarios such as technical hierarchies that serve internal calculation purposes but should not confuse business users, intermediate hierarchies that support complex analytical logic but are not intended for direct user navigation, deprecated hierarchies that remain functional for backward compatibility but should not appear in new applications, and specialized hierarchies that are designed for specific power-user scenarios or advanced analytical applications. The visibility setting enables sophisticated hierarchy management strategies including progressive disclosure where basic users see simplified dimensional structures while advanced users access complete hierarchical complexity, role-based hierarchy presentation where different user types see appropriate hierarchical views, and hierarchical versioning where new hierarchy implementations can be tested alongside existing structures without disrupting established analytical workflows and user experiences across enterprise business intelligence deployments.</em></td>
    </tr>
  </tbody>
</table>

## References

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Lower</th>
      <th>Upper</th>
      <th>Containment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>memberReaderParameters</strong></td>
      <td>MemberReaderParameter<a href="./class-MemberReaderParameter">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em>Collection of custom parameters passed to the member reader implementation for controlling member loading behavior, caching strategies, and performance optimization. These parameters enable fine-tuning of hierarchy-specific behaviors like prefetch depth, cache size, and custom loading rules.</em></td>
    </tr>
    <tr>
      <td><strong>primaryKey</strong></td>
      <td>Column<a href="./class-Column">🔗</a></td>
      <td>1</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em>Reference to the database column that serves as the primary key for this hierarchy's main dimension table, establishing the unique identifier system that enables proper member identification, hierarchical relationships, and join operations across the dimensional model. The primary key column is fundamental to the hierarchy's data integrity and query performance, providing the basis for all member lookups, parent-child relationships, and cross-dimensional joins that enable multidimensional analysis. This column reference is essential for sophisticated OLAP architectures where hierarchical navigation, member filtering, and dimensional joining must operate efficiently across large data volumes and complex relational structures. The primary key supports advanced analytical scenarios including member-based security filtering where access controls are applied at the individual member level, drill-through operations that link aggregated analytical results back to detailed transactional data, dimension bridging where members from different hierarchies are correlated through key relationships, and temporal analysis where member keys enable tracking of dimensional changes over time while maintaining consistent analytical behavior. Enterprise implementations leverage the primary key for sophisticated caching strategies, query optimization patterns, and distributed analytical architectures where member identification must remain consistent across multiple data sources, processing nodes, and analytical applications while supporting high-performance query execution and maintaining data integrity across complex multidimensional analytical workloads.</em></td>
    </tr>
    <tr>
      <td><strong>query</strong></td>
      <td>Query<a href="./class-Query">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em>Reference to the Query object that defines how hierarchy members are retrieved from the underlying data source, specifying the SQL logic, table relationships, and data transformation rules required to populate this hierarchy with members from the dimensional database structures. The query reference establishes the critical link between the logical hierarchy definition and the physical data sources, enabling sophisticated data integration scenarios where hierarchy members may be sourced from complex table joins, views, stored procedures, or federated data sources. This query specification is fundamental to enterprise OLAP deployments where hierarchical data integration requires sophisticated SQL logic to handle normalized schemas, denormalized structures, temporal data management, and multi-source dimensional consolidation. The query supports advanced analytical architectures including slowly changing dimension handling where member evolution is tracked over time, dimensional bridging where hierarchy members are correlated across multiple fact tables, real-time dimensional updates where hierarchy membership changes are reflected in active analytical applications, and federated dimensional management where hierarchy members are sourced from distributed data systems while maintaining unified analytical behavior. Enterprise implementations leverage the query specification for performance optimization through indexed views, materialized query results, and intelligent caching strategies that ensure optimal hierarchy loading performance while supporting dynamic member updates, security-filtered member sets, and context-aware member populations that adapt to user permissions and analytical requirements across complex multidimensional business intelligence environments.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- Dimension[🔗](./class-Dimension) → hierarchies
- Dimension[🔗](./class-Dimension) → defaultHierarchy
- CalculatedMember[🔗](./class-CalculatedMember) → hierarchy
- DrillThroughAttribute[🔗](./class-DrillThroughAttribute) → hierarchy
- AccessHierarchyGrant[🔗](./class-AccessHierarchyGrant) → hierarchy

## ClassDiagramm

```mermaid
classDiagram
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

  AbstractElement <|-- Hierarchy
  Hierarchy --> MemberReaderParameter : memberReaderParameters
  Hierarchy --> Column : primaryKey
  Hierarchy --> Query : query

```
