---
title: CubeAccess
group: Enum
---

# CubeAccess<a name="enum-cubeaccess"></a>

Enumeration defining access levels for OLAP cubes within the security framework. Controls user access to analytical cubes, their measures, calculated members, and dimensional context within the multidimensional data space.
## Enumeration Literals

### NONE - (0)

<em>Denies access to the cube. Users cannot view cube metadata, measures, or perform any analytical operations on this cube.</em>

### ALL - (1)

<em>Grants full access to the cube including all measures, calculated members, dimensions, and hierarchies.</em>

### CUSTOM - (2)

<em>Enables granular access control through dimension grants, hierarchy grants, and member-level security within the cube.</em>

