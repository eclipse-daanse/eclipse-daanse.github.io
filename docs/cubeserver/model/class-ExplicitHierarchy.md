---
title: ExplicitHierarchy
group: Class
---

# ExplicitHierarchy<a name="class-explicithierarchy"></a>

Hierarchy with explicitly defined levels organized in a fixed, predetermined structure. This is the most common hierarchy type, mapping to star schema and snowflake schema designs where levels correspond to dimension tables or normalized structures. ExplicitHierarchies provide optimal performance for predictable hierarchical structures and support complex multi-level drill-down operations with explicit level relationships defined through foreign keys.
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
    </tr>
  </thead>
  <tbody>
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
      <td><strong>levels</strong></td>
      <td>Level<a href="./class-Level">🔗</a></td>
      <td>1</td>
      <td>&infin;</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em>Ordered collection of levels that define the hierarchical structure from most aggregated to most detailed. The order determines the drill-down sequence and level relationships. Each level corresponds to a granularity of analysis (e.g., Country -> State -> City) and must be connected through appropriate foreign key relationships in the underlying queries.</em></td>
    </tr>
  </tbody>
</table>



## Used by


## ClassDiagramm

```mermaid
classDiagram
  class ExplicitHierarchy {
  }

  AbstractElement <|-- ExplicitHierarchy  Hierarchy <|-- ExplicitHierarchy
  ExplicitHierarchy --> Level : levels

```
