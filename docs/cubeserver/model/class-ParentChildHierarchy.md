---
title: ParentChildHierarchy
group: Class
---

# ParentChildHierarchy<a name="class-parentchildhierarchy"></a>

Self-referencing hierarchy where members can have parent-child relationships within the same table, creating variable-depth structures. This hierarchy type is ideal for organizational charts, account hierarchies, or any structure where the depth varies by branch and members reference other members as parents. ParentChildHierarchies support recursive relationships and dynamic navigation without requiring fixed level definitions.
## Extends
- AbstractElement [🔗](./class-AbstractElement)- Hierarchy [🔗](./class-Hierarchy)
## Attributes

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Id</th>
      <th>Type</th>
      <th>Lower</th>
      <th>Upper</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>nullParentValue</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
      <td>1</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="6"><em>String value in the parent column that indicates root-level members (those without parents). Common values include '0', 'NULL', or empty string. This value identifies which members serve as the top-level roots of the hierarchy tree structure.</em></td>
    </tr>
    <tr>
      <td><strong>parentAsLeafEnable</strong></td>
      <td>false</td>
      <td><em>Boolean</em></td>
      <td>0</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="6"><em>Boolean flag that allows intermediate parent members to also appear as leaf members, enabling scenarios where the same entity functions both as a container and as a data point. When true, parents can have their own measures and participate in aggregations at multiple levels. Commonly used in account hierarchies where summary accounts also contain direct transactions.</em></td>
    </tr>
    <tr>
      <td><strong>parentAsLeafNameFormat</strong></td>
      <td>false</td>
      <td><em>EString</em></td>
      <td>0</td>
      <td>1</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="6"><em>Format string for naming parent members when they appear as leaf nodes (used when parentAsLeafEnable=true). The format uses {0} as a placeholder for the original member name. Default format is '{0} (parent)' which creates names like 'Sales Manager (parent)' to distinguish the parent role from child member names.</em></td>
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
      <td><strong>parentChildLink</strong></td>
      <td>ParentChildLink<a href="./class-ParentChildLink">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em>Optional closure table configuration for performance optimization of parent-child queries. The closure table pre-computes all ancestor-descendant relationships, enabling efficient recursive queries and aggregations. When specified, provides significant performance benefits for deep hierarchies with complex drill-down operations.</em></td>
    </tr>
    <tr>
      <td><strong>parentColumn</strong></td>
      <td>Column<a href="./class-Column">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em>Column containing the parent reference for each member, establishing the self-referencing relationship. This column typically contains the primary key value of the parent member, or the nullParentValue for root members. The column enables the recursive traversal that defines the hierarchy structure.</em></td>
    </tr>
    <tr>
      <td><strong>level</strong></td>
      <td>Level<a href="./class-Level">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em>Single level definition that applies to all members in this parent-child hierarchy. Unlike explicit hierarchies with multiple levels, parent-child hierarchies use one level definition that describes the properties and behavior of all members regardless of their position in the tree structure.</em></td>
    </tr>
  </tbody>
</table>



## Used by


## ClassDiagramm

```mermaid
classDiagram
  class ParentChildHierarchy {
    + nullParentValue : EString
    + parentAsLeafEnable : Boolean
    + parentAsLeafNameFormat : EString
  }

  AbstractElement <|-- ParentChildHierarchy  Hierarchy <|-- ParentChildHierarchy
  ParentChildHierarchy --> ParentChildLink : parentChildLink
  ParentChildHierarchy --> Column : parentColumn
  ParentChildHierarchy --> Level : level

```
