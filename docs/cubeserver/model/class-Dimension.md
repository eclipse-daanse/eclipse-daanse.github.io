---
title: Dimension
group: Class
---

# Dimension<a name="class-dimension"></a>

Package: [model.olap.dimension](./package-model.olap.dimension.md)

Abstract foundational class for all dimensional structures in OLAP modeling, representing the core concept of analytical dimensions that provide the contextual framework for multidimensional analysis by organizing business entities into hierarchical structures that enable slicing, dicing, drilling, and pivoting operations across different perspectives of business data. Dimension serves as the architectural foundation for the entire dimensional modeling paradigm, encapsulating the essential characteristics and behaviors that all dimensional structures must support including hierarchical organization of members from detailed to aggregated levels, support for multiple alternative hierarchies that provide different analytical perspectives on the same business domain, integration with security frameworks that can restrict access at dimensional and member levels, and compatibility with various analytical operations that form the basis of OLAP functionality.
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
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>usagePrefix</strong></td>
      <td>false</td>
      <td><em>String</em></td>
      <td>0</td>
      <td>1</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="6"><em>Optional prefix that can be applied to this dimension when used in specific contexts or cubes. The usage prefix allows for dimension name customization and disambiguation when the same dimensional concept is used multiple times within a single analytical context. This enables scenarios like having both 'Ship Date' and 'Order Date' dimensions that share the same underlying time dimension structure but have different contextual meanings and display names.</em></td>
    </tr>
    <tr>
      <td><strong>visible</strong></td>
      <td>false</td>
      <td><em>Boolean</em></td>
      <td>0</td>
      <td>1</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="6"><em>Boolean flag controlling whether this dimension appears in client tool dimension lists, XMLA metadata discovery, and cube browsers. When set to false, the dimension becomes hidden from normal user interfaces but remains fully accessible through direct references in MDX queries. This is useful for creating internal system dimensions, intermediate calculation dimensions, or advanced dimensions intended only for power users who know the dimension names explicitly. Deliberately distinct from the inherited CWM ModelElement.visibility, which carries namespace access semantics: visible is a client display hint only, and invisible elements stay fully addressable in MDX. The attribute stays declared per class instead of moving to AbstractElement, where it would bleed onto Catalog, AccessRole and friends.</em></td>
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
      <td><strong>hierarchies</strong></td>
      <td>Hierarchy<a href="./class-Hierarchy">🔗</a></td>
      <td>1</td>
      <td>&infin;</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em>Collection of Hierarchy objects that define the alternative organizational structures and navigation paths available within this dimension, providing multiple perspectives and drill-down patterns for analyzing the same business domain from different analytical viewpoints. Each dimension must contain at least one hierarchy, and many dimensions benefit from multiple hierarchies that offer different ways to organize and navigate the dimensional data based on varying business needs, user preferences, and analytical contexts. This multi-hierarchy capability is essential for sophisticated dimensional modeling where business entities can be organized in multiple meaningful ways, supporting scenarios such as product dimensions that provide both category-based hierarchies (Category → Subcategory → Product) and brand-based hierarchies (Brand → Product Line → Product), geographic dimensions that offer administrative hierarchies (Country → State → City) alongside sales territory hierarchies (Region → Territory → District), time dimensions that provide both calendar hierarchies (Year → Quarter → Month → Day) and fiscal hierarchies (Fiscal Year → Fiscal Quarter → Fiscal Month), and customer dimensions that support both demographic hierarchies (Age Group → Gender → Customer) and value-based hierarchies (Customer Segment → Customer Tier → Individual Customer).</em></td>
    </tr>
    <tr>
      <td><strong>defaultHierarchy</strong></td>
      <td>Hierarchy<a href="./class-Hierarchy">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em>Reference to the hierarchy that should be used as the default when queries reference this dimension without specifying a specific hierarchy. This provides a sensible default navigation path for the dimension and simplifies MDX query construction for end users. If not specified, the first hierarchy in the collection is typically used as the default.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- AccessDimensionGrant[🔗](./class-AccessDimensionGrant) → dimension
- DrillThroughAttribute[🔗](./class-DrillThroughAttribute) → dimension
- DimensionConnector[🔗](./class-DimensionConnector) → dimension

## ClassDiagramm

```mermaid
classDiagram
  class Dimension {
    + usagePrefix : String
    + visible : Boolean
  }

  AbstractElement <|-- Dimension
  Dimension --> Hierarchy : hierarchies
  Dimension --> Hierarchy : defaultHierarchy

```
