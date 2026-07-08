---
title: Writeback Parent-Child
group: Writeback
kind: TUTORIAL
number: 2.05.06
---
# Daanse Tutorial - Writeback Parent-Child

**Daanse Tutorial — Writeback with a parent-child hierarchy.**

The minimal example showing how writeback works against a
`ParentChildHierarchy`. One self-referencing dimension table
`NODE` (KEY, NAME, PARENT_KEY) defines an arbitrary-depth tree,
the fact table `FACT` posts values against any node, and a
`FACTWB` writeback table receives user-entered adjustments.

When the user writes a value at an *intermediate* node (e.g. a
parent in the tree), the runtime allocates the value across the
descendant leaves per the chosen `AllocationPolicy` — exactly
the same behaviour as for a multi-level explicit hierarchy. The
interesting part is that for a parent-child hierarchy the set
of leaves is computed by walking the self-referencing
relationship at cube-init time, not from a fixed level depth.


## Database Schema

Three tables:

- **`FACT`** — `NODE`, `VALUE`. One row per fact posting, with
  `NODE` referencing the leaf node and `VALUE` the numeric
  amount.
- **`NODE`** — `KEY`, `NAME`, `PARENT_KEY`. The self-referencing
  dimension table. Root rows have an empty `PARENT_KEY`
  (matching the configured `nullParentValue = ""`). Members at
  any depth share the same level definition.
- **`FACTWB`** — `NODE`, `VALUE`, `ID`, `USER`. The writeback
  target. `ID` is filled by the engine with a UUID, `USER` with
  the session user.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_node" name="NODE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_node" name="NODE">
    <feature xsi:type="relational:Column" xmi:id="_column_node_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_node_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_node_parent_key" name="PARENT_KEY"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_node" name="NODE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_user" name="USER"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Fact Query

Plain TableSource over FACT.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_node" name="NODE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Tree dimension

One dimension `Tree` with a single-level `ParentChildHierarchy`.
The level keys on the `KEY` column; the `PARENT_KEY` column
wires the self-reference, and `nullParentValue = ""` marks the
roots. The fact joins on `FACT.NODE = NODE.KEY` — at every
level of the tree, the same column carries the join key.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_tree" name="Tree" hierarchies="_parentchildhierarchy_tree"/>
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_tree" name="Tree" allMemberName="All Nodes" primaryKey="_column_node_key" source="_tablesource_node" nullParentValue="" parentColumn="_column_node_parent_key" level="_level_node"/>
  <rolaplev:Level xmi:id="_level_node" name="Node" column="_column_node_key" nameColumn="_column_node_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_node" table="_table_node"/>
  <relational:Table xmi:id="_table_node" name="NODE">
    <feature xsi:type="relational:Column" xmi:id="_column_node_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_node_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_node_parent_key" name="PARENT_KEY"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## ParentChildHierarchy

```
ParentChildHierarchy
  ├── name = "Tree"
  ├── hasAll = true
  ├── allMemberName = "All Nodes"
  ├── primaryKey  = NODE.KEY
  ├── parentColumn = NODE.PARENT_KEY
  ├── nullParentValue = ""
  ├── source = NodeTableSource
  └── level("Node") with column = NODE.KEY, nameColumn = NODE.NAME
```

`setUniqueMembers(true)` on the level is appropriate here
because every parent-child member is uniquely identified by
its `KEY` value, regardless of depth.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_tree" name="Tree" allMemberName="All Nodes" primaryKey="_column_node_key" source="_tablesource_node" nullParentValue="" parentColumn="_column_node_parent_key" level="_level_node"/>
  <rolaplev:Level xmi:id="_level_node" name="Node" column="_column_node_key" nameColumn="_column_node_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_node" table="_table_node"/>
  <relational:Table xmi:id="_table_node" name="NODE">
    <feature xsi:type="relational:Column" xmi:id="_column_node_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_node_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_node_parent_key" name="PARENT_KEY"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Writeback (FACTWB)

The cube wires the `Value` measure into a single-measure
writeback table:

```
WritebackTable("FACTWB")                     [database.writeback]
  ├── WritebackAttribute(Tree connector) → NODE   [database.writeback]
  └── WritebackMeasure("Value")          → VALUE  [olap.cube.measure]
```

*Behaviour at write time.* A `Cell.setValue([Measures].[Value], 100, EQUAL_ALLOCATION, ...)`
at any node — root, intermediate or leaf — drives the engine to:

1. Walk the self-referencing `NODE.PARENT_KEY` chain to compute
   the leaves of the addressed node.
2. Spread the `100` value across those leaves per the chosen
   `AllocationPolicy` — `EQUAL_ALLOCATION` gives every leaf
   `100 / N`, `EQUAL_INCREMENT` adds `(100 - oldValue) / N` to
   each.
3. Emit one row per leaf into `FACTWB` with the leaf's `KEY` as
   `NODE`, the allocated portion as `VALUE`, a fresh `UUID` as
   `ID`, and the session user as `USER`.

*Behaviour at read time.* A subsequent MDX query for any node
sums fact rows plus writeback rows under that subtree via the
standard SQL aggregation path — no special handling needed,
because the writeback table has the same shape as the fact and
both are aggregated by the cube's `SumMeasure`.

*Where the measure lives.* `WritebackMeasure` is now in the
`olap.cube.measure` ecore package (alongside `SumMeasure`,
`TextAggMeasure`, …) — it is conceptually a measure that
happens to be paired with a database column for persistence.
Only the writeback *infrastructure* (`WritebackTable`,
`WritebackAttribute`) remains in `database.writeback`. In Java
the factory call is `MeasureFactory.eINSTANCE.createWritebackMeasure()`.


```xml
<rolapwb:WritebackTable xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapwb="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/writeback" xmi:id="_writebacktable_factwb" name="FACTWB">
  <writebackAttribute xmi:id="_writebackattribute_node">
    <column href="_column_factwb_node"/>
    <dimensionConnector href="_dimensionconnector_tree"/>
  </writebackAttribute>
  <writebackMeasure xmi:id="_writebackmeasure_value" name="Value">
    <column href="_column_factwb_value"/>
  </writebackMeasure>
</rolapwb:WritebackTable>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube C

One physical cube `C` over `FACT` with one `DimensionConnector`
(Tree → `FACT.NODE`), one `MeasureGroup` holding the `Value`
sum measure, and the `FACTWB` writeback table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" source="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_tree" foreignKey="_column_fact_node" dimension="_standarddimension_tree" overrideDimensionName="Tree"/>
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackAttribute xmi:id="_writebackattribute_node" dimensionConnector="_dimensionconnector_tree">
        <column href="_column_factwb_node"/>
      </writebackAttribute>
      <writebackMeasure xmi:id="_writebackmeasure_value" name="Value">
        <column href="_column_factwb_value"/>
      </writebackMeasure>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_value" name="Value" formatString=",##0" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <relational:Table xmi:id="_table_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_node" name="NODE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <relational:Table xmi:id="_table_node" name="NODE">
    <feature xsi:type="relational:Column" xmi:id="_column_node_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_node_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_node_parent_key" name="PARENT_KEY"/>
  </relational:Table>
  <rolapdim:StandardDimension xmi:id="_standarddimension_tree" name="Tree" hierarchies="_parentchildhierarchy_tree"/>
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_tree" name="Tree" allMemberName="All Nodes" primaryKey="_column_node_key" source="_tablesource_node" nullParentValue="" parentColumn="_column_node_parent_key" level="_level_node"/>
  <rolaplev:Level xmi:id="_level_node" name="Node" column="_column_node_key" nameColumn="_column_node_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_node" table="_table_node"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_factwb_id _column_node_key _column_node_name _column_fact_node _column_factwb_node _column_node_parent_key _column_factwb_user" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value _column_factwb_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_writeback_parent_child" description="Minimal writeback example against a ParentChildHierarchy." name="Daanse Tutorial - Writeback Parent-Child" cubes="_physicalcube_c" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="FACT">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_node" name="NODE" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_node" name="NODE">
      <feature xsi:type="relational:Column" xmi:id="_column_node_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_node_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_node_parent_key" name="PARENT_KEY" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_node" name="NODE" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_id" name="ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_user" name="USER" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_node" table="_table_node"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_node" name="Node" column="_column_node_key" nameColumn="_column_node_name" uniqueMembers="true"/>
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_tree" name="Tree" allMemberName="All Nodes" primaryKey="_column_node_key" source="_tablesource_node" nullParentValue="" parentColumn="_column_node_parent_key" level="_level_node"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_tree" name="Tree" hierarchies="_parentchildhierarchy_tree"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" source="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_tree" foreignKey="_column_fact_node" dimension="_standarddimension_tree" overrideDimensionName="Tree"/>
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackAttribute xmi:id="_writebackattribute_node" column="_column_factwb_node" dimensionConnector="_dimensionconnector_tree"/>
      <writebackMeasure xmi:id="_writebackmeasure_value" column="_column_factwb_value" name="Value"/>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_value" name="Value" formatString="#,##0" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.writeback.parentchild.zip" download>Download Zip File</a>
