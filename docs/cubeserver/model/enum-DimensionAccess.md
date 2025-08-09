---
title: DimensionAccess
group: Enum
---

# DimensionAccess<a name="enum-dimensionaccess"></a>

Enumeration defining access levels for OLAP dimensions within cube security. Controls user access to dimensional metadata, hierarchies, levels, and member data that form the analytical context for multidimensional queries.
## Enumeration Literals

### NONE - (0)

<em>Denies access to the dimension. Users cannot view dimension metadata, hierarchies, or access any members within this dimension.</em>

### ALL - (1)

<em>Grants full access to all hierarchies, levels, and members within the dimension.</em>

### CUSTOM - (2)

<em>Enables selective access through hierarchy grants and member-level security rules within the dimension.</em>

