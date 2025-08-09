---
title: CatalogAccess
group: Enum
---

# CatalogAccess<a name="enum-catalogaccess"></a>

Enumeration defining the access permission levels for OLAP catalogs within the role-based security framework, establishing the fundamental security boundaries that control whether users can access catalog resources and determining the overall scope of analytical capabilities available to specific roles. CatalogAccess represents the highest level of the OLAP security hierarchy and serves as the primary access control decision point that influences all subordinate security evaluations for cubes, dimensions, hierarchies, and members contained within the catalog.
## Enumeration Literals

### NONE - (0)

<em>Denies all access to the catalog. Users with NONE access cannot view catalog metadata, access any cubes, or perform any analytical operations within this catalog.</em>

### ALL - (1)

<em>Grants full access to the catalog and all its contents. Users can access all cubes, dimensions, hierarchies, and measures without restrictions.</em>

### CUSTOM - (2)

<em>Enables granular access control through specific grants for individual cubes, dimensions, and members. Custom access requires additional security grants to define permitted operations.</em>

### ALL_DIMENSIONS - (3)

<em>Grants access to all dimensional metadata within the catalog while requiring specific grants for cube and measure access. Allows browsing dimension structures without accessing fact data.</em>

