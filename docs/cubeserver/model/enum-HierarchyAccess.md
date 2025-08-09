---
title: HierarchyAccess
group: Enum
---

# HierarchyAccess<a name="enum-hierarchyaccess"></a>

Enumeration defining access levels for OLAP hierarchies within dimension security. Controls user access to hierarchical structures, levels, and member navigation paths that organize dimensional data.
## Enumeration Literals

### NONE - (0)

<em>Denies access to the hierarchy. Users cannot view hierarchy structure, levels, or access any members within this hierarchy.</em>

### ALL - (1)

<em>Grants full access to all levels and members within the hierarchy.</em>

### CUSTOM - (2)

<em>Enables member-level security and selective access to specific portions of the hierarchy through member grants and filtering rules.</em>

