---
title: MemberAccess
group: Enum
---

# MemberAccess<a name="enum-memberaccess"></a>

Enumeration defining access levels for individual dimensional members within OLAP security. Provides the most granular level of access control by specifying which specific members users can access within hierarchies.
## Enumeration Literals

### NONE - (0)

<em>Denies access to specific members. Users cannot view these members or any of their descendants in the hierarchy.</em>

### ALL - (1)

<em>Grants access to all members in the hierarchy including descendants and related members.</em>

### CUSTOM - (2)

<em>Enables fine-grained member-level access control with specific grants and filtering rules for individual members and member sets.</em>

