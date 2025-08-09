---
title: HideMemberIf
group: Enum
---

# HideMemberIf<a name="enum-hidememberif"></a>

Enumeration that specifies conditions under which dimensional members should be automatically hidden from client tools and analytical interfaces, providing sophisticated data quality management and user experience optimization for hierarchies that may contain incomplete, malformed, or inappropriate member data. HideMemberIf addresses common data quality challenges in real-world OLAP deployments where source systems may contain inconsistent data, incomplete hierarchical relationships, or members that should not be visible to end users due to business rules, data quality issues, or presentation requirements.
## Enumeration Literals

### NEVER - (0)

<em>Never hide any members. All members in the hierarchy are visible regardless of data quality or completeness issues.</em>

### IF_BLANK_NAME - (1)

<em>Hide members that have blank or null names. Useful for filtering out incomplete data where member names are missing from the source system.</em>

### IF_PARENTS_NAME - (2)

<em>Hide members whose name matches their parent member's name. Eliminates redundant display where child members have identical names to their parents in the hierarchy.</em>

