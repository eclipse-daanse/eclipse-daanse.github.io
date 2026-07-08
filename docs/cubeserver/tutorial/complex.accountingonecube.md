---
title: Accounting
group: Full Examples
kind: COMPLEX
number: 99.1.8
---
# Accounting Catalog

The `Accounting` catalog is a realistic financial-controlling example. It is
intentionally small enough to read end-to-end yet covers most modeling
features a real bookkeeping cube needs.

Both actual postings (`IST`) and planned postings (`PLAN`) are recorded into
the *same* fact table `BOOKING`, exposed as two separate `SumMeasure`s with
a currency format string. A third measure aggregates the per-booking
free-text `COMMENT` via a `TextAggMeasure`.

The cube further demonstrates:

- **Three-level `Account` (Sachkonto) dimension** — a snowflake-free
  `ExplicitHierarchy` on a single denormalised table (`Category` →
  `Group` → `Account`). For a worked example of writeback against a
  true parent-child hierarchy see `tutorial.writeback.parentchild`.
- **`Year` time dimension** with `TIME_YEARS` semantics and a
  `defaultMember` pinned to the highest year (`2027`).
- **Three-level `OrgUnit` dimension** on a single denormalised table; access
  rights are anchored at the lowest level.
- **Currency-formatted measures** (`#,##0 €`) — `AmountIst` and
  `AmountPlan` render as `1.234.567 €` in tools that respect format strings.
- **`Variance` and `VariancePct` calculated members** — IST vs. PLAN gap
  in currency and percent, with `iif` guarding division by zero. Both
  members carry a MDX-section format string that paints negative values
  red (`[Red]` token), demonstrating conditional cell coloring.

*Note:* a `BudgetUtilization` KPI and three named sets
(`Top5ExpenseAccounts`, `PlanOverrun`, `AccountsWithoutComment`) are
kept in the source code as commented-out blocks. They are temporarily
disabled because their MDX formulas need adjusting to the new
three-level `Account` hierarchy (Category → Group → Account).
Re-enable them once the formulas resolve cleanly.
- **`BOOKINGWB` writeback table** — actual, plan amounts and comments can be
  entered per org-unit, account and year.
- **Six access roles** — one per leaf org unit, one whole-division role, a
  full-access accounting role, and a read-only role that explicitly hides
  the writeback table at the schema level.


## Database Schema

The database schema contains the following tables:

- **`BOOKING`** (fact) — `BOOKING_ID`, `YEAR_KEY`, `ACCOUNT_KEY`,
  `ORG_UNIT_KEY`, `AMOUNT_IST`, `AMOUNT_PLAN`, `COMMENT`. Both IST and
  PLAN amounts live in the same row and are exposed as two separate
  measures. The `COMMENT` column feeds the text-aggregator measure.
- **`BOOKINGWB`** (writeback target) — same dimensional key columns as
  `BOOKING`, plus `ID` and `USER` for audit, plus `AMOUNT_IST`,
  `AMOUNT_PLAN` and `COMMENT`.
- **`ACCOUNT`** — single denormalised table with three level keys
  and names: `L1_KEY`/`L1_NAME` (Category, e.g. `EXPENSES`),
  `L2_KEY`/`L2_NAME` (Group, e.g. `PERSONNEL`), `L3_KEY`/`L3_NAME`
  (leaf account, e.g. `SALARIES`). The fact table joins on
  `BOOKING.ACCOUNT_KEY = ACCOUNT.L3_KEY`.
- **`YEAR`** — `YEAR_KEY`, `YEAR_NAME` (one row per business year).
- **`ORGUNIT`** — single denormalised table with three level keys and
  names: `L1_KEY`/`L1_NAME`, `L2_KEY`/`L2_NAME`, `L3_KEY`/`L3_NAME`. The
  fact table joins on the lowest level (`L3_KEY`) via `ORG_UNIT_KEY`.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_booking" name="BOOKING">
    <feature xsi:type="relational:Column" xmi:id="_column_booking_booking_id" name="BOOKING_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_year_key" name="YEAR_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_account_key" name="ACCOUNT_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_org_unit_key" name="ORG_UNIT_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_amount_ist" name="AMOUNT_IST"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_amount_plan" name="AMOUNT_PLAN"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_comment" name="COMMENT"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_bookingwb" name="BOOKINGWB">
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_user" name="USER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_year_key" name="YEAR_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_account_key" name="ACCOUNT_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_org_unit_key" name="ORG_UNIT_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_amount_ist" name="AMOUNT_IST"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_amount_plan" name="AMOUNT_PLAN"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_comment" name="COMMENT"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_account" name="ACCOUNT">
    <feature xsi:type="relational:Column" xmi:id="_column_account_l1_key" name="L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l1_name" name="L1_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l2_key" name="L2_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l2_name" name="L2_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l3_key" name="L3_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l3_name" name="L3_NAME"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_year" name="YEAR">
    <feature xsi:type="relational:Column" xmi:id="_column_year_year_key" name="YEAR_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_year_year_name" name="YEAR_NAME"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_orgunit" name="ORGUNIT">
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l1_key" name="L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l1_name" name="L1_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l2_key" name="L2_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l2_name" name="L2_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l3_key" name="L3_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l3_name" name="L3_NAME"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Fact Query

The fact `TableSource` reads all columns of the `BOOKING` table. Both the
sum measures and the text-aggregation measure source their columns from
this query.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_booking" table="_table_booking"/>
  <relational:Table xmi:id="_table_booking" name="BOOKING">
    <feature xsi:type="relational:Column" xmi:id="_column_booking_booking_id" name="BOOKING_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_year_key" name="YEAR_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_account_key" name="ACCOUNT_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_org_unit_key" name="ORG_UNIT_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_amount_ist" name="AMOUNT_IST"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_amount_plan" name="AMOUNT_PLAN"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_comment" name="COMMENT"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Account (parent-child Sachkonto)

The `Account` (Sachkonto) dimension is a 3-level `ExplicitHierarchy`
on a single denormalised `ACCOUNT` table (same snowflake-free
pattern as `OrgUnit`). The levels are:

- **`Category`** (L1) — e.g. `Expenses`, `Revenue`.
- **`Group`** (L2) — e.g. `Personnel`, `Rent`, `Travel`, `Sales`.
- **`Account`** (L3, leaf) — e.g. `Salaries`, `Office Rent`,
  `Flights`, `Product Sales`.

The fact table joins on the leaf level via
`BOOKING.ACCOUNT_KEY = ACCOUNT.L3_KEY`. Aggregations across an L2
or L1 member roll up the underlying leaves through the usual SQL
`GROUP BY` path.

*Note:* if the accounting domain calls for a variable-depth tree,
switch this dimension to a `ParentChildHierarchy` — the
`tutorial.writeback.parentchild` example demonstrates that
variant together with writeback.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_account" name="Account" hierarchies="_explicithierarchy_account"/>
  <rolaplev:Level xmi:id="_level_category" name="Category" column="_column_account_l1_key" nameColumn="_column_account_l1_name" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_account" name="ACCOUNT">
    <feature xsi:type="relational:Column" xmi:id="_column_account_l1_key" name="L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l1_name" name="L1_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l2_key" name="L2_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l2_name" name="L2_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l3_key" name="L3_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l3_name" name="L3_NAME"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_account" name="Account" allMemberName="All Accounts" primaryKey="_column_account_l3_key" source="_tablesource_account" levels="_level_category _level_group _level_account"/>
  <rolapsrc:TableSource xmi:id="_tablesource_account" table="_table_account"/>
  <rolaplev:Level xmi:id="_level_group" name="Group" column="_column_account_l2_key" nameColumn="_column_account_l2_name"/>
  <rolaplev:Level xmi:id="_level_account" name="Account" column="_column_account_l3_key" nameColumn="_column_account_l3_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Year (TimeDimension, default = 2027)

`Year` is modelled as a `TimeDimension` so that MDX time-functions like
`Lag`, `ParallelPeriod` and `YTD` can be used against it. The single
`Year` level is declared with `LevelDefinition.TIME_YEARS`.

The hierarchy's `defaultMember` is set to the fully-qualified unique
member name `[Year].[Year].[2027]` — the highest year in the data — so
that, unless the user picks another year, all queries implicitly run
against the most recent year. The unique-name form is required;
passing the bare key (`"2027"`) would fail at cube initialisation with
`Can not find Default Member`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:TimeDimension xmi:id="_timedimension_year" name="Year" hierarchies="_explicithierarchy_year"/>
  <rolaplev:Level xmi:id="_level_year" name="Year" column="_column_year_year_key" type="TimeYears" nameColumn="_column_year_year_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_year" name="Year" allMemberName="All Years" defaultMember="[Year].[Year].[2027]" primaryKey="_column_year_year_key" source="_tablesource_year" levels="_level_year"/>
  <rolapsrc:TableSource xmi:id="_tablesource_year" table="_table_year"/>
  <relational:Table xmi:id="_table_year" name="YEAR">
    <feature xsi:type="relational:Column" xmi:id="_column_year_year_key" name="YEAR_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_year_year_name" name="YEAR_NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## OrgUnit (three-level)

`OrgUnit` is a three-level explicit hierarchy that lives on a single
denormalised table. The three levels are `L1` (e.g. the company), `L2`
(e.g. division) and `L3` (e.g. department). The fact table joins on
`ORG_UNIT_KEY = ORGUNIT.L3_KEY`, i.e. on the lowest level — that is the
level at which postings happen.

Access rights are also pinned to the lowest level: there is one role per
`L3` member that grants `MemberAccess.ALL` on that member only (its
ancestors stay visible via `RollupPolicy.FULL`).


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_orgunit" name="OrgUnit" hierarchies="_explicithierarchy_orgunit"/>
  <relational:Table xmi:id="_table_orgunit" name="ORGUNIT">
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l1_key" name="L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l1_name" name="L1_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l2_key" name="L2_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l2_name" name="L2_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l3_key" name="L3_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l3_name" name="L3_NAME"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_l2" name="L2" column="_column_orgunit_l2_key" nameColumn="_column_orgunit_l2_name"/>
  <rolaplev:Level xmi:id="_level_l1" name="L1" column="_column_orgunit_l1_key" nameColumn="_column_orgunit_l1_name" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_l3" name="L3" column="_column_orgunit_l3_key" nameColumn="_column_orgunit_l3_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_orgunit" name="OrgUnit" allMemberName="All Org Units" primaryKey="_column_orgunit_l3_key" source="_tablesource_orgunit" levels="_level_l1 _level_l2 _level_l3"/>
  <rolapsrc:TableSource xmi:id="_tablesource_orgunit" table="_table_orgunit"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measures (IST / PLAN / Comments)

Three stored measures are exposed by the cube:

- **`AmountIst`** — `SumMeasure` over the `AMOUNT_IST` column. Read-only.
  `formatString = "#,##0 €"` so values render as currency in client tools
  that honour MDX format strings.
- **`AmountPlan`** — `SumMeasure` over the `AMOUNT_PLAN` column. Same
  currency format. Writeable via the writeback table.
- **`Comments`** — `TextAggMeasure` over the `COMMENT` column, with
  separator `" | "` and ordering by the comment text. Aggregating
  free-text comments across slicer selections is how the cube exposes the
  per-cell notes to the user — every slice produces a single, readable
  string concatenating all matching comments.

Two **calculated members** complement the stored measures (see the
"Calculated Members" section below). One **KPI** wraps the planning ratio
(see the "KPI" section), and one **named set** picks the top expense
accounts (see the "Named Set" section).


## Currency Format

`AmountIst` and `AmountPlan` are declared with `formatString = "#,##0 €"`.
The format string follows the standard MDX/OLE-DB syntax:

- `#` — optional digit
- `,` — thousands separator
- `0` — required digit
- trailing literal `€`

Client tools (Saiku, Excel, Power BI, the daanse front-end, …) that respect
format strings will display `1234567` as `1.234.567 €` (locale-dependent
grouping). The calculated member `Variance` reuses the same format string
via a `CalculatedMemberProperty` named `FORMAT_STRING`; `VariancePct` uses
`"#,##0.00%"` to render percentages.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_amountist" name="AmountIst" formatString=",##0 &#x20ac;">
  <column href="_column_booking_amount_ist"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Calculated Members (Variance, VariancePct)

Two calculated members compare IST against PLAN:

- **`Variance`** — `[Measures].[AmountIst] - [Measures].[AmountPlan]`.
  Negative values indicate plan overrun, positive values indicate plan
  underrun.
- **`VariancePct`** — the relative version,
  `(IST - PLAN) / PLAN`, wrapped in
  `iif([Measures].[AmountPlan] = 0, NULL, …)` so that cells without a plan
  return `NULL` instead of `#DIV/0!`.

**Color formatting (negative-in-red).** Both members carry a
`FORMAT_STRING` property whose value uses the MDX "section" syntax
`positive;negative`. Each section can prefix the format with the literal
`[Red]` (or any colour name the engine recognises) to colour matching
values:

```
Variance     →  "#,##0 €;[Red]-#,##0 €"
VariancePct  →  "#,##0.00%;[Red]-#,##0.00%"
```

**Alternative: daanse-style `BACK_COLOR` / `FORE_COLOR` properties.**
Instead of (or in addition to) the `[Red]` token, daanse recognises
`BACK_COLOR=<rgb-int>` and `FORE_COLOR=<rgb-int>` properties appended to
the format string. Examples (see
`tutorial/cube/calculatedmember.color`):

```
"$#,##0.00;BACK_COLOR=32768;FORE_COLOR=0"     // green background, black text
"$#,##0.00;BACK_COLOR=16711680;FORE_COLOR=0"  // red background, black text
```

The `[Red]` syntax is the portable MDX standard and is honoured by most
front-ends; the `BACK_COLOR=` properties are a daanse-specific
extension that pivot tools render as cell shading.

Calculated members are attached to the cube via
`cube.getCalculatedMembers().add(...)`. They behave exactly like stored
measures in MDX but are evaluated on the fly — no fact-table column is
required.


```xml
<rolaplev:CalculatedMember xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_calculatedmember_variance" name="Variance" formula="[Measures].[AmountIst] - [Measures].[AmountPlan]"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Writeback (BOOKINGWB)

The `BOOKINGWB` writeback table lets users enter planned amounts and free
comments while preserving IST data as read-only.

For every dimensional foreign key on the fact, the writeback table has a
matching column wired through a `WritebackAttribute`:

| Cube dimension | Writeback column |
|---|---|
| `Year`    | `YEAR_KEY` |
| `Account` | `ACCOUNT_KEY` |
| `OrgUnit` | `ORG_UNIT_KEY` |

Three `WritebackMeasure` entries describe the writeable measures:

- `AmountIst`  → `AMOUNT_IST`
- `AmountPlan` → `AMOUNT_PLAN`
- `Comments`   → `COMMENT`

The extra `ID` and `USER` columns are technical bookkeeping columns that
the writeback engine populates with the row id and the current user.

**Note on the model package.** `WritebackMeasure` lives in the
`olap/cube/measure/` ecore package alongside `SumMeasure`,
`TextAggMeasure` and the other base measures — it is conceptually a
measure (named by its logical cube-measure name, paired with a
database column for persistence). Only the writeback *infrastructure*
(`WritebackTable`, `WritebackAttribute`) remains in
`database/writeback/`. In Java that means
`MeasureFactory.eINSTANCE.createWritebackMeasure()` (not
`WritebackFactory`), and the XMI tag carries the `rolapmeas:`
namespace prefix.

**`Comments` writeback specifically.** Because `Comments` is a
`TextAggMeasure`, the daanse runtime detects its character bind type
automatically (no extra declaration on the model). The
`[Measures].[Comments]` cell is written as a single row at the
cell's exact coordinates — allocation is skipped — and the
read-side `ListAggAggregator` aggregates the new comment alongside
any fact-table comments via the standard SQL `LISTAGG` path.


```xml
<rolapwb:WritebackTable xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapwb="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/writeback" xmi:id="_writebacktable_bookingwb" name="BOOKINGWB">
  <writebackAttribute xmi:id="_writebackattribute_year_key">
    <column href="_column_bookingwb_year_key"/>
    <dimensionConnector href="_dimensionconnector_year"/>
  </writebackAttribute>
  <writebackAttribute xmi:id="_writebackattribute_account_key">
    <column href="_column_bookingwb_account_key"/>
    <dimensionConnector href="_dimensionconnector_account"/>
  </writebackAttribute>
  <writebackAttribute xmi:id="_writebackattribute_org_unit_key">
    <column href="_column_bookingwb_org_unit_key"/>
    <dimensionConnector href="_dimensionconnector_orgunit"/>
  </writebackAttribute>
  <writebackMeasure xmi:id="_writebackmeasure_amountist" name="AmountIst" editable="false">
    <column href="_column_amount_ist"/>
  </writebackMeasure>
  <writebackMeasure xmi:id="_writebackmeasure_amountplan" name="AmountPlan">
    <column href="_column_bookingwb_amount_plan"/>
  </writebackMeasure>
  <writebackMeasure xmi:id="_writebackmeasure_comments" name="Comments">
    <column href="_column_bookingwb_comment"/>
  </writebackMeasure>
</rolapwb:WritebackTable>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Access Roles

Six roles cover the typical org-rights matrix:

- **`role_dept_A1`**, **`role_dept_A2`**, **`role_dept_B1`** — one role
  per L3 org unit ("I am a department head, I only see my own
  department"). Each role grants:
    - `CatalogAccess.ALL_DIMENSIONS` on the catalog,
    - `DatabaseSchemaAccess.ALL` on the database schema,
    - `CubeAccess.ALL` on the `Accounting` cube,
    - `HierarchyAccess.CUSTOM` on the `OrgUnit` hierarchy with
      `RollupPolicy.FULL`, `topLevel = bottomLevel = L3`, and one
      `AccessMemberGrant` granting `MemberAccess.ALL` on the matching
      L3 member only.
  `RollupPolicy.FULL` keeps the parent (`L1`/`L2`) totals visible while
  hiding sibling departments.
- **`role_division_A`** — whole-subtree access ("I am the head of
  Division A, I see Division A and all its departments"). The
  `AccessMemberGrant` targets the L2 member
  `[OrgUnit].[OrgUnit].[Company].[Division A]`, which automatically includes
  its descendants. `topLevel = L1` and `bottomLevel = L3` keep all three
  levels navigable.
- **`role_accounting`** — central accounting role with full access to the
  catalog, schema and cube. No hierarchy restriction.
- **`role_readonly`** — full read access on the cube, but the writeback
  table `BOOKINGWB` is hidden via an `AccessTableGrant(TableAccess.NONE)`
  wrapped inside an `AccessDatabaseSchemaGrant(DatabaseSchemaAccess.CUSTOM)`.
  The access model does not have a dedicated "writeback" flag; restricting
  the underlying physical table is the recommended workaround and is the
  pattern the application layer can use to disable the writeback UI.


```xml
<rolapcacc:AccessRole xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmi:id="_accessrole_role_accounting" name="role_accounting"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Whole-Division Role (role_division_A)

`role_division_A` demonstrates **whole-subtree access**: a division head
should see their division plus every department in it, but not other
divisions.

The trick is that `AccessMemberGrant` with `MemberAccess.ALL` on a
non-leaf member implicitly grants access to *all descendants* of that
member. So a single grant on
`[OrgUnit].[OrgUnit].[Company].[Division A]` covers both
`[Department A1]` and `[Department A2]`. Setting `topLevel = L1` and
`bottomLevel = L3` on the `AccessHierarchyGrant` keeps all three levels
navigable so the user can still drill from `[Company]` down to
`[Division A]` down to its departments.

**Important:** member names are taken from the level's `nameColumn` (the
display value, e.g. `"Department A1"`), not from the database `KEY`
column (e.g. `"DEPT_A1"`). Passing the bare key in the unique-name path
would fail with `MemberNotFoundException`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcacc:AccessRole xmi:id="_accessrole_role_division_a" name="role_division_A">
    <accessCatalogGrants xmi:id="_accesscataloggrant" catalogAccess="all_dimensions">
      <cubeGrants xmi:id="_accesscubegrant_accounting" cubeAccess="all">
        <hierarchyGrants xmi:id="_accesshierarchygrant_orgunit" hierarchyAccess="custom" hierarchy="_explicithierarchy_orgunit" bottomLevel="_level_l3" topLevel="_level_l1">
          <memberGrants xmi:id="_accessmembergrant" memberAccess="all" member="[OrgUnit].[OrgUnit].[Company].[Division A]"/>
        </hierarchyGrants>
        <cube xsi:type="rolapcube:PhysicalCube" href="_physicalcube_accounting"/>
      </cubeGrants>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant" databaseSchemaAccess="all">
        <databaseSchema href="_schema"/>
      </databaseSchemaGrants>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <relational:Table xmi:id="_table_orgunit" name="ORGUNIT">
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l1_key" name="L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l1_name" name="L1_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l2_key" name="L2_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l2_name" name="L2_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l3_key" name="L3_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l3_name" name="L3_NAME"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_l2" name="L2" column="_column_orgunit_l2_key" nameColumn="_column_orgunit_l2_name"/>
  <rolaplev:Level xmi:id="_level_l1" name="L1" column="_column_orgunit_l1_key" nameColumn="_column_orgunit_l1_name" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_l3" name="L3" column="_column_orgunit_l3_key" nameColumn="_column_orgunit_l3_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_orgunit" name="OrgUnit" allMemberName="All Org Units" primaryKey="_column_orgunit_l3_key" source="_tablesource_orgunit" levels="_level_l1 _level_l2 _level_l3"/>
  <rolapsrc:TableSource xmi:id="_tablesource_orgunit" table="_table_orgunit"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Read-Only Role (role_readonly)

The access model has no dedicated "writeback allowed/denied" attribute.
To express *"can read everything, cannot write back"* the cleanest
pattern is:

1. Grant the cube with `CubeAccess.ALL` (full read).
2. Grant the database schema with `DatabaseSchemaAccess.CUSTOM` and add a
   single `AccessTableGrant(TableAccess.NONE)` for the `BOOKINGWB`
   physical table.

Hiding the writeback target at the schema level is what the application
layer can detect to disable any "save" / "submit plan" UI. Because the
grant only touches the writeback table, all other tables (the fact, the
dimensions) remain accessible.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube">
  <rolapcacc:AccessRole xmi:id="_accessrole_role_readonly" name="role_readonly">
    <accessCatalogGrants xmi:id="_accesscataloggrant" catalogAccess="all_dimensions">
      <cubeGrants xmi:id="_accesscubegrant_accounting" cubeAccess="all">
        <cube xsi:type="rolapcube:PhysicalCube" href="_physicalcube_accounting"/>
      </cubeGrants>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant" databaseSchemaAccess="custom">
        <tableGrants xmi:id="_accesstablegrant_bookingwb" table="_table_bookingwb"/>
        <databaseSchema href="_schema"/>
      </databaseSchemaGrants>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <relational:Table xmi:id="_table_bookingwb" name="BOOKINGWB">
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_user" name="USER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_year_key" name="YEAR_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_account_key" name="ACCOUNT_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_org_unit_key" name="ORG_UNIT_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_amount_ist" name="AMOUNT_IST"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_amount_plan" name="AMOUNT_PLAN"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_comment" name="COMMENT"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

The `Accounting` physical cube binds everything together. It uses the
`BOOKING` fact `TableSource`, declares one `DimensionConnector` per
dimension (each with its own `ForeignKey` column on the fact), groups the
three measures `AmountIst`, `AmountPlan` and `Comments` in a single
`MeasureGroup`, and references the `BOOKINGWB` `WritebackTable` so plan
data and comments can be entered.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_accounting" name="Accounting" source="_tablesource_booking">
    <calculatedMembers xmi:id="_calculatedmember_variance" name="Variance" formula="[Measures].[AmountIst] - [Measures].[AmountPlan]">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string" name="FORMAT_STRING" value=",##0 &#x20ac;;[Red]-#,##0 &#x20ac;"/>
    </calculatedMembers>
    <calculatedMembers xmi:id="_calculatedmember_variancepct" name="VariancePct" formula="iif([Measures].[AmountPlan] = 0, NULL, ([Measures].[AmountIst] - [Measures].[AmountPlan]) / [Measures].[AmountPlan])">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string_1" name="FORMAT_STRING" value=",##0.00%;[Red]-#,##0.00%"/>
    </calculatedMembers>
    <dimensionConnectors xmi:id="_dimensionconnector_year" foreignKey="_column_booking_year_key" dimension="_timedimension_year" overrideDimensionName="Year"/>
    <dimensionConnectors xmi:id="_dimensionconnector_account" foreignKey="_column_booking_account_key" dimension="_standarddimension_account" overrideDimensionName="Account"/>
    <dimensionConnectors xmi:id="_dimensionconnector_orgunit" foreignKey="_column_booking_org_unit_key" dimension="_standarddimension_orgunit" overrideDimensionName="OrgUnit"/>
    <writebackTable xmi:id="_writebacktable_bookingwb" name="BOOKINGWB">
      <writebackAttribute xmi:id="_writebackattribute_year_key" dimensionConnector="_dimensionconnector_year">
        <column href="_column_bookingwb_year_key"/>
      </writebackAttribute>
      <writebackAttribute xmi:id="_writebackattribute_account_key" dimensionConnector="_dimensionconnector_account">
        <column href="_column_bookingwb_account_key"/>
      </writebackAttribute>
      <writebackAttribute xmi:id="_writebackattribute_org_unit_key" dimensionConnector="_dimensionconnector_orgunit">
        <column href="_column_bookingwb_org_unit_key"/>
      </writebackAttribute>
      <writebackMeasure xmi:id="_writebackmeasure_amountist" name="AmountIst" editable="false">
        <column href="_column_amount_ist"/>
      </writebackMeasure>
      <writebackMeasure xmi:id="_writebackmeasure_amountplan" name="AmountPlan">
        <column href="_column_bookingwb_amount_plan"/>
      </writebackMeasure>
      <writebackMeasure xmi:id="_writebackmeasure_comments" name="Comments">
        <column href="_column_bookingwb_comment"/>
      </writebackMeasure>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_amountist" name="AmountIst" formatString=",##0 &#x20ac;" column="_column_booking_amount_ist"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_amountplan" name="AmountPlan" formatString=",##0 &#x20ac;" column="_column_booking_amount_plan"/>
      <measures xsi:type="rolapmeas:TextAggMeasure" xmi:id="_textaggmeasure_comments" name="Comments" column="_column_booking_comment" separator=" | ">
        <orderByColumns href="_orderedcolumn_comment"/>
      </measures>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <relational:Table xmi:id="_table_orgunit" name="ORGUNIT">
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l1_key" name="L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l1_name" name="L1_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l2_key" name="L2_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l2_name" name="L2_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l3_key" name="L3_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l3_name" name="L3_NAME"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_year" name="Year" column="_column_year_year_key" type="TimeYears" nameColumn="_column_year_year_name" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_l1" name="L1" column="_column_orgunit_l1_key" nameColumn="_column_orgunit_l1_name" uniqueMembers="true"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_account" name="Account" hierarchies="_explicithierarchy_account"/>
  <rolaplev:Level xmi:id="_level_l3" name="L3" column="_column_orgunit_l3_key" nameColumn="_column_orgunit_l3_name"/>
  <rolapsrc:TableSource xmi:id="_tablesource_booking" table="_table_booking"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_account" name="Account" allMemberName="All Accounts" primaryKey="_column_account_l3_key" source="_tablesource_account" levels="_level_category _level_group _level_account"/>
  <rolapsrc:TableSource xmi:id="_tablesource_year" table="_table_year"/>
  <rolapsrc:TableSource xmi:id="_tablesource_orgunit" table="_table_orgunit"/>
  <rolapdim:TimeDimension xmi:id="_timedimension_year" name="Year" hierarchies="_explicithierarchy_year"/>
  <rolaplev:Level xmi:id="_level_l2" name="L2" column="_column_orgunit_l2_key" nameColumn="_column_orgunit_l2_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_year" name="Year" allMemberName="All Years" defaultMember="[Year].[Year].[2027]" primaryKey="_column_year_year_key" source="_tablesource_year" levels="_level_year"/>
  <rolaplev:Level xmi:id="_level_category" name="Category" column="_column_account_l1_key" nameColumn="_column_account_l1_name" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_booking" name="BOOKING">
    <feature xsi:type="relational:Column" xmi:id="_column_booking_booking_id" name="BOOKING_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_year_key" name="YEAR_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_account_key" name="ACCOUNT_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_org_unit_key" name="ORG_UNIT_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_amount_ist" name="AMOUNT_IST"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_amount_plan" name="AMOUNT_PLAN"/>
    <feature xsi:type="relational:Column" xmi:id="_column_booking_comment" name="COMMENT"/>
  </relational:Table>
  <rolapdim:StandardDimension xmi:id="_standarddimension_orgunit" name="OrgUnit" hierarchies="_explicithierarchy_orgunit"/>
  <relational:Table xmi:id="_table_account" name="ACCOUNT">
    <feature xsi:type="relational:Column" xmi:id="_column_account_l1_key" name="L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l1_name" name="L1_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l2_key" name="L2_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l2_name" name="L2_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l3_key" name="L3_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_account_l3_name" name="L3_NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_account" table="_table_account"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_orgunit" name="OrgUnit" allMemberName="All Org Units" primaryKey="_column_orgunit_l3_key" source="_tablesource_orgunit" levels="_level_l1 _level_l2 _level_l3"/>
  <relational:Table xmi:id="_table_year" name="YEAR">
    <feature xsi:type="relational:Column" xmi:id="_column_year_year_key" name="YEAR_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_year_year_name" name="YEAR_NAME"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_group" name="Group" column="_column_account_l2_key" nameColumn="_column_account_l2_name"/>
  <rolaplev:Level xmi:id="_level_account" name="Account" column="_column_account_l3_key" nameColumn="_column_account_l3_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaprel:OrderedColumn xmi:id="_orderedcolumn_comment" column="_column_booking_comment"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_booking_comment _column_bookingwb_account_key _column_booking_account_key _column_bookingwb_comment _column_bookingwb_id _column_account_l1_key _column_orgunit_l1_key _column_orgunit_l1_name _column_account_l1_name _column_orgunit_l2_key _column_account_l2_key _column_account_l2_name _column_orgunit_l2_name _column_orgunit_l3_key _column_account_l3_key _column_account_l3_name _column_orgunit_l3_name _column_bookingwb_org_unit_key _column_booking_org_unit_key _column_bookingwb_user _column_year_year_name" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_bookingwb_year_key _column_amount_ist _column_booking_amount_ist _column_bookingwb_amount_ist _column_bookingwb_amount_plan _column_booking_amount_plan _column_booking_booking_id _column_booking_year_key _column_year_year_key" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_accounting" description="Accounting catalog with IST/PLAN postings, three-level accounts and org units, writeback for actual, plan data and text-aggregated comments. Includes Variance/VariancePct calculated members and a set of access roles ranging from single-department to division-wide, an accounting all-access role and a read-only role." name="Accounting" cubes="_physicalcube_accounting" accessRoles="_accessrole_role_dept_a1 _accessrole_role_dept_a2 _accessrole_role_dept_b1 _accessrole_role_division_a _accessrole_role_accounting _accessrole_role_readonly" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_booking" name="BOOKING">
      <feature xsi:type="relational:Column" xmi:id="_column_booking_booking_id" name="BOOKING_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_booking_year_key" name="YEAR_KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_booking_account_key" name="ACCOUNT_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_booking_org_unit_key" name="ORG_UNIT_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_booking_amount_ist" name="AMOUNT_IST" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_booking_amount_plan" name="AMOUNT_PLAN" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_booking_comment" name="COMMENT" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_bookingwb" name="BOOKINGWB">
      <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_id" name="ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_user" name="USER" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_year_key" name="YEAR_KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_account_key" name="ACCOUNT_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_org_unit_key" name="ORG_UNIT_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_amount_ist" name="AMOUNT_IST" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_amount_plan" name="AMOUNT_PLAN" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bookingwb_comment" name="COMMENT" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_account" name="ACCOUNT">
      <feature xsi:type="relational:Column" xmi:id="_column_account_l1_key" name="L1_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_account_l1_name" name="L1_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_account_l2_key" name="L2_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_account_l2_name" name="L2_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_account_l3_key" name="L3_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_account_l3_name" name="L3_NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_year" name="YEAR">
      <feature xsi:type="relational:Column" xmi:id="_column_year_year_key" name="YEAR_KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_year_year_name" name="YEAR_NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_orgunit" name="ORGUNIT">
      <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l1_key" name="L1_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l1_name" name="L1_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l2_key" name="L2_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l2_name" name="L2_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l3_key" name="L3_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orgunit_l3_name" name="L3_NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <relational:Column xmi:id="_column_amount_ist" name="AMOUNT_IST" type="_sqlsimpletype_integer"/>
  <rolapsrc:TableSource xmi:id="_tablesource_booking" table="_table_booking"/>
  <rolapsrc:TableSource xmi:id="_tablesource_orgunit" table="_table_orgunit"/>
  <rolapsrc:TableSource xmi:id="_tablesource_account" table="_table_account"/>
  <rolapsrc:TableSource xmi:id="_tablesource_year" table="_table_year"/>
  <rolaplev:Level xmi:id="_level_account" name="Account" column="_column_account_l3_key" nameColumn="_column_account_l3_name"/>
  <rolaplev:Level xmi:id="_level_category" name="Category" column="_column_account_l1_key" nameColumn="_column_account_l1_name" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_group" name="Group" column="_column_account_l2_key" nameColumn="_column_account_l2_name"/>
  <rolaplev:Level xmi:id="_level_l1" name="L1" column="_column_orgunit_l1_key" nameColumn="_column_orgunit_l1_name" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_l2" name="L2" column="_column_orgunit_l2_key" nameColumn="_column_orgunit_l2_name"/>
  <rolaplev:Level xmi:id="_level_l3" name="L3" column="_column_orgunit_l3_key" nameColumn="_column_orgunit_l3_name"/>
  <rolaplev:Level xmi:id="_level_year" name="Year" column="_column_year_year_key" type="TimeYears" nameColumn="_column_year_year_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_account" name="Account" allMemberName="All Accounts" primaryKey="_column_account_l3_key" source="_tablesource_account" levels="_level_category _level_group _level_account"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_orgunit" name="OrgUnit" allMemberName="All Org Units" primaryKey="_column_orgunit_l3_key" source="_tablesource_orgunit" levels="_level_l1 _level_l2 _level_l3"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_year" name="Year" allMemberName="All Years" defaultMember="[Year].[Year].[2027]" primaryKey="_column_year_year_key" source="_tablesource_year" levels="_level_year"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_account" name="Account" hierarchies="_explicithierarchy_account"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_orgunit" name="OrgUnit" hierarchies="_explicithierarchy_orgunit"/>
  <rolapdim:TimeDimension xmi:id="_timedimension_year" name="Year" hierarchies="_explicithierarchy_year"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_accounting" name="Accounting" source="_tablesource_booking">
    <calculatedMembers xmi:id="_calculatedmember_variance" name="Variance" formula="[Measures].[AmountIst] - [Measures].[AmountPlan]">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string" name="FORMAT_STRING" value="#,##0 €;[Red]-#,##0 €"/>
    </calculatedMembers>
    <calculatedMembers xmi:id="_calculatedmember_variancepct" name="VariancePct" formula="iif([Measures].[AmountPlan] = 0, NULL, ([Measures].[AmountIst] - [Measures].[AmountPlan]) / [Measures].[AmountPlan])">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string_1" name="FORMAT_STRING" value="#,##0.00%;[Red]-#,##0.00%"/>
    </calculatedMembers>
    <dimensionConnectors xmi:id="_dimensionconnector_year" foreignKey="_column_booking_year_key" dimension="_timedimension_year" overrideDimensionName="Year"/>
    <dimensionConnectors xmi:id="_dimensionconnector_account" foreignKey="_column_booking_account_key" dimension="_standarddimension_account" overrideDimensionName="Account"/>
    <dimensionConnectors xmi:id="_dimensionconnector_orgunit" foreignKey="_column_booking_org_unit_key" dimension="_standarddimension_orgunit" overrideDimensionName="OrgUnit"/>
    <writebackTable xmi:id="_writebacktable_bookingwb" name="BOOKINGWB">
      <writebackAttribute xmi:id="_writebackattribute_year_key" column="_column_bookingwb_year_key" dimensionConnector="_dimensionconnector_year"/>
      <writebackAttribute xmi:id="_writebackattribute_account_key" column="_column_bookingwb_account_key" dimensionConnector="_dimensionconnector_account"/>
      <writebackAttribute xmi:id="_writebackattribute_org_unit_key" column="_column_bookingwb_org_unit_key" dimensionConnector="_dimensionconnector_orgunit"/>
      <writebackMeasure xmi:id="_writebackmeasure_amountist" column="_column_amount_ist" name="AmountIst" editable="false"/>
      <writebackMeasure xmi:id="_writebackmeasure_amountplan" column="_column_bookingwb_amount_plan" name="AmountPlan"/>
      <writebackMeasure xmi:id="_writebackmeasure_comments" column="_column_bookingwb_comment" name="Comments"/>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_amountist" name="AmountIst" formatString="#,##0 €" column="_column_booking_amount_ist"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_amountplan" name="AmountPlan" formatString="#,##0 €" column="_column_booking_amount_plan"/>
      <measures xsi:type="rolapmeas:TextAggMeasure" xmi:id="_textaggmeasure_comments" name="Comments" column="_column_booking_comment" orderByColumns="_orderedcolumn_comment" separator=" | "/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcacc:AccessRole xmi:id="_accessrole_role_accounting" name="role_accounting">
    <accessCatalogGrants xmi:id="_accesscataloggrant_5" catalogAccess="all_dimensions">
      <cubeGrants xmi:id="_accesscubegrant_accounting_1" cubeAccess="all" cube="_physicalcube_accounting"/>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant_3" databaseSchemaAccess="all" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <rolapcacc:AccessRole xmi:id="_accessrole_role_dept_a1" name="role_dept_A1">
    <accessCatalogGrants xmi:id="_accesscataloggrant" catalogAccess="all_dimensions">
      <cubeGrants xmi:id="_accesscubegrant_accounting_2" cubeAccess="all" cube="_physicalcube_accounting">
        <hierarchyGrants xmi:id="_accesshierarchygrant_orgunit_2" hierarchyAccess="custom" hierarchy="_explicithierarchy_orgunit" bottomLevel="_level_l3" topLevel="_level_l3">
          <memberGrants xmi:id="_accessmembergrant_1" memberAccess="all" member="[OrgUnit].[OrgUnit].[Company].[Division A].[Department A1]"/>
        </hierarchyGrants>
      </cubeGrants>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant_4" databaseSchemaAccess="all" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <rolapcacc:AccessRole xmi:id="_accessrole_role_dept_a2" name="role_dept_A2">
    <accessCatalogGrants xmi:id="_accesscataloggrant_1" catalogAccess="all_dimensions">
      <cubeGrants xmi:id="_accesscubegrant_accounting_3" cubeAccess="all" cube="_physicalcube_accounting">
        <hierarchyGrants xmi:id="_accesshierarchygrant_orgunit_3" hierarchyAccess="custom" hierarchy="_explicithierarchy_orgunit" bottomLevel="_level_l3" topLevel="_level_l3">
          <memberGrants xmi:id="_accessmembergrant" memberAccess="all" member="[OrgUnit].[OrgUnit].[Company].[Division A].[Department A2]"/>
        </hierarchyGrants>
      </cubeGrants>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant_1" databaseSchemaAccess="all" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <rolapcacc:AccessRole xmi:id="_accessrole_role_dept_b1" name="role_dept_B1">
    <accessCatalogGrants xmi:id="_accesscataloggrant_3" catalogAccess="all_dimensions">
      <cubeGrants xmi:id="_accesscubegrant_accounting_5" cubeAccess="all" cube="_physicalcube_accounting">
        <hierarchyGrants xmi:id="_accesshierarchygrant_orgunit" hierarchyAccess="custom" hierarchy="_explicithierarchy_orgunit" bottomLevel="_level_l3" topLevel="_level_l3">
          <memberGrants xmi:id="_accessmembergrant_3" memberAccess="all" member="[OrgUnit].[OrgUnit].[Company].[Division B].[Department B1]"/>
        </hierarchyGrants>
      </cubeGrants>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant_5" databaseSchemaAccess="all" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <rolapcacc:AccessRole xmi:id="_accessrole_role_division_a" name="role_division_A">
    <accessCatalogGrants xmi:id="_accesscataloggrant_2" catalogAccess="all_dimensions">
      <cubeGrants xmi:id="_accesscubegrant_accounting" cubeAccess="all" cube="_physicalcube_accounting">
        <hierarchyGrants xmi:id="_accesshierarchygrant_orgunit_1" hierarchyAccess="custom" hierarchy="_explicithierarchy_orgunit" bottomLevel="_level_l3" topLevel="_level_l1">
          <memberGrants xmi:id="_accessmembergrant_2" memberAccess="all" member="[OrgUnit].[OrgUnit].[Company].[Division A]"/>
        </hierarchyGrants>
      </cubeGrants>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant" databaseSchemaAccess="all" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <rolapcacc:AccessRole xmi:id="_accessrole_role_readonly" name="role_readonly">
    <accessCatalogGrants xmi:id="_accesscataloggrant_4" catalogAccess="all_dimensions">
      <cubeGrants xmi:id="_accesscubegrant_accounting_4" cubeAccess="all" cube="_physicalcube_accounting"/>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant_2" databaseSchemaAccess="custom" databaseSchema="_schema">
        <tableGrants xmi:id="_accesstablegrant_bookingwb" table="_table_bookingwb"/>
      </databaseSchemaGrants>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.accountingonecube.zip" download>Download Zip File</a>
