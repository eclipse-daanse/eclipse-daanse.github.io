---
title: Catalog
group: Class
---

# Catalog<a name="class-catalog"></a>

Package: [model.catalog](./package-model.catalog.md)

The root container of an OLAP schema that defines a complete analytical database. A Catalog represents a logical grouping of related cubes, dimensions, and data sources that together form a cohesive analytical model for a specific business domain or application. It serves as the top-level entry point for OLAP connections and contains all the metadata necessary to perform multidimensional analysis. The Catalog manages shared resources like dimension hierarchies, access roles, parameters, and database schema references, ensuring consistency and reusability across all contained analytical objects. In XMLA terms, this corresponds to a database or catalog that clients can connect to and browse.
## Extends
- Package
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
      <td><strong>measuresDimensionName</strong></td>
      <td>false</td>
      <td><em>String</em></td>
      <td>0</td>
      <td>1</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="6"><em>Optional custom name for the measures dimension that appears in MDX queries and XMLA metadata. By default, the measures dimension is named 'Measures', but this can be customized for localization or business terminology preferences. The measures dimension is a special system dimension that contains all the measures (metrics) available for analysis in each cube. This name appears in MDX syntax like [CustomMeasuresName].[Sales Amount] and in client tool dimension lists.</em></td>
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
      <td><strong>parameters</strong></td>
      <td>Parameter<a href="./class-Parameter">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em>Collection of catalog-level parameters that provide dynamic behavior and configuration within the catalog. Parameters enable runtime customization of schema elements, user-specific settings, and conditional logic in calculations. These parameters are available throughout the catalog for use in calculated members, named sets, security expressions, and custom formatting. Common uses include date ranges for time intelligence, user preferences, locale settings, and business rule toggles.</em></td>
    </tr>
    <tr>
      <td><strong>defaultAccessRole</strong></td>
      <td>AccessRole<a href="./class-AccessRole">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em>Reference to the access role that should be applied by default when users connect without explicit role assignment. This provides a baseline security policy for the catalog, typically configured to allow basic read access to public data while restricting sensitive information. If not specified, Daanse does not assign a built-in default role, and access will be denied unless a role is explicitly provided. This setting is particularly useful for public reporting scenarios, shared dashboards, or development environments where default read access is desirable.</em></td>
    </tr>
  </tbody>
</table>



## Used by


## ClassDiagramm

```mermaid
classDiagram
  class Catalog {
    + measuresDimensionName : String
  }

  Package <|-- Catalog  AbstractElement <|-- Catalog
  Catalog --> Parameter : parameters
  Catalog --> AccessRole : defaultAccessRole

```
