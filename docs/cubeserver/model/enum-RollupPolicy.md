---
title: RollupPolicy
group: Enum
---

# RollupPolicy<a name="enum-rolluppolicy"></a>

Enumeration that defines how aggregate values should be calculated when some members in a hierarchy are inaccessible due to security restrictions, providing critical control over data accuracy and security boundary handling in scenarios where partial member access could lead to misleading analytical results. RollupPolicy addresses one of the most complex challenges in secure OLAP systems where users may have access to some members in a hierarchy but not others, creating situations where standard aggregation operations could either reveal restricted information through inference or provide inaccurate results that misrepresent the true business situation.
## Enumeration Literals

### FULL - (0)

<em>Include all member values in aggregation calculations, including those the user cannot directly access. Provides complete aggregate values but may reveal restricted information through inference.</em>

### PARTIAL - (1)

<em>Include only accessible member values in aggregation calculations. Provides secure but potentially incomplete aggregate values that exclude restricted data.</em>

### HIDDEN - (2)

<em>Hide aggregate values completely when some constituent members are inaccessible. Ensures maximum security by preventing any potential information disclosure through aggregated values.</em>

