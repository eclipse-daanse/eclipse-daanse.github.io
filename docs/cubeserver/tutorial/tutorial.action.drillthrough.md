---
title: Action Drillthrough
group: Actions
kind: TUTORIAL
number: 2.10.01
---
# Daanse Tutorial - Action Drillthrough

This tutorial discusses DrillThroughAction.
DrillThroughAction feature enables users to seamlessly transition from analytical summaries
to detailed operational data without losing analytical context or requiring technical
knowledge of underlying data structures.


## Database Schema

The Database Schema contains the `Fact` table with two columns: `KEY` and `VALUE`.<br />
- `H1_L1` table with two columns: `KEY` and `NAME`.<br />
- `H2_L1` table with two columns: `KEY` and `NAME`.<br />
- `HX_L2` table with 4 columns: `KEY`, `NAME`, `H1L1_KEY`, `H2L1_KEY`.<br />
The `KEY` column of `Fact` table is used as the discriminator in the dimension.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_h2_l1" name="H2_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_name" name="NAME"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableSource that selects all columns from the `Fact` table to use in the hierarchy and in the cube for the measures.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## H1L1Query

The Query is a simple TableSource that selects all columns from the `H1_L1` table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <relational:Table xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## H2L1Query

The Query is a simple TableSource that selects all columns from the `H2_L1` table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_h2_l1" table="_table_h2_l1"/>
  <relational:Table xmi:id="_table_h2_l1" name="H2_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## join1

The JoinSource specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (`HX_L2`), the join uses the foreign key `H1L1_KEY`.<br />
- In the upper-level table (`H1_L1`), the join uses the primary key `KEY`.<br />


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h1l1_key" key="_column_hx_l2_h1l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_h1_l1_key" query="_tablesource_h1_l1"/>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <relational:Table xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## join2

The JoinSource specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (`HX_L2`), the join uses the foreign key `H2L1_KEY`.<br />
- In the upper-level table (`H2_L1`), the join uses the primary key `KEY`.<br />


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h2l1_key" key="_column_hx_l2_h2l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_h2_l1_key" query="_tablesource_h2_l1"/>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_h2_l1" table="_table_h2_l1"/>
  <relational:Table xmi:id="_table_h2_l1" name="H2_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## HxL2Query

The Query is a simple TableSource that selects all columns from the `HX_L2` table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

This Example uses H1_Level1 level based on the `KEY` column as key and `NAME` column as name from `H1_L1` table.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_h1_level1" name="H1_Level1">
  <column href="_column_h1_l1_key"/>
  <nameColumn href="_column_h1_l1_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level2

This Example uses H1_Level2 level based on the KEY column as key and NAME column as name from HX_L2 table.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_h1_level2" name="H1_Level2">
  <column href="_column_hx_l2_key"/>
  <nameColumn href="_column_hx_l2_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level3

This Example uses H2_Level1 level based on the KEY column as key and NAME column as name from H2_L1 table.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_h2_level1" name="H2_Level1">
  <column href="_column_h2_l1_key"/>
  <nameColumn href="_column_h2_l1_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level4

This Example uses H2_Level2 level based on the KEY column as key and NAME column as name from HX_L2 table.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_h2_level2" name="H2_Level2">
  <column href="_column_hx_l2_key"/>
  <nameColumn href="_column_hx_l2_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1

The Hierarchy1 is defined with the hasAll property set to false and the two levels H1_Level1, H1_Level2.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hx_l2_key" query="_joinsource" levels="_level_h1_level1 _level_h1_level2"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h1l1_key" key="_column_hx_l2_h1l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_h1_l1_key" query="_tablesource_h1_l1"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_h1_level2" name="H1_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_h1_level1" name="H1_Level1" column="_column_h1_l1_key" nameColumn="_column_h1_l1_name"/>
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <relational:Table xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy2

The Hierarchy1 is defined with the hasAll property set to false and the two levels H1_Level1, H1_Level2.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy2" name="Hierarchy2" primaryKey="_column_hx_l2_key" query="_joinsource" levels="_level_h2_level1 _level_h2_level2"/>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_h2_l1" table="_table_h2_l1"/>
  <relational:Table xmi:id="_table_h2_l1" name="H2_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_name" name="NAME"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_h2_level2" name="H2_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <rolaplev:Level xmi:id="_level_h2_level1" name="H2_Level1" column="_column_h2_l1_key" nameColumn="_column_h2_l1_name"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h2l1_key" key="_column_hx_l2_h2l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_h2_l1_key" query="_tablesource_h2_l1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The time dimension is defined with the 2 hierarchies.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1 _explicithierarchy_hierarchy2"/>
  <rolapsrc:TableSource xmi:id="_tablesource_h2_l1" table="_table_h2_l1"/>
  <rolaplev:Level xmi:id="_level_h2_level2" name="H2_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <rolaplev:Level xmi:id="_level_h1_level1" name="H1_Level1" column="_column_h1_l1_key" nameColumn="_column_h1_l1_name"/>
  <rolaplev:Level xmi:id="_level_h2_level1" name="H2_Level1" column="_column_h2_l1_key" nameColumn="_column_h2_l1_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy2" name="Hierarchy2" primaryKey="_column_hx_l2_key" query="_joinsource_1" levels="_level_h2_level1 _level_h2_level2"/>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h1l1_key" key="_column_hx_l2_h1l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_h1_l1_key" query="_tablesource_h1_l1"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_h1_level2" name="H1_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
  <relational:Table xmi:id="_table_h2_l1" name="H2_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_h2l1_key" key="_column_hx_l2_h2l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key_1" key="_column_h2_l1_key" query="_tablesource_h2_l1"/>
  </rolapsrc:JoinSource>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hx_l2_key" query="_joinsource" levels="_level_h1_level1 _level_h1_level2"/>
  <relational:Table xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## DrillthroughH1L1

Specialized action that enables users to drill through from aggregated analytical views to the underlying
detailed transaction data that contributed to specific measure values, providing powerful capabilities
for data exploration, validation, and detailed investigation of analytical results.
Collection of DrillThroughAttribute objects that specify which dimensional attributes and descriptive columns
should be included in drill-through result sets

DrillThroughAttributes have reference to H1_Level1 level from Hierarchy1; H1_L1 table KEY and NAME column


```xml
<rolapact:DrillThroughAction xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:rolapact="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/action" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_drillthroughaction_drillthroughh1l1" name="DrillthroughH1L1" default="true">
  <drillThroughMeasure xsi:type="rolapmeas:SumMeasure" href="_summeasure_measure1"/>
</rolapact:DrillThroughAction>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## DrillthroughH2L1

DrillThroughAttributes have reference to H2_Level1 level from Hierarchy2; H2_L1 table KEY and NAME column


```xml
<rolapact:DrillThroughAction xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:rolapact="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/action" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_drillthroughaction_drillthroughh2l1" name="DrillthroughH2L1">
  <drillThroughMeasure xsi:type="rolapmeas:SumMeasure" href="_summeasure_measure1"/>
</rolapact:DrillThroughAction>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Time_Dimension

The cube with DrillThroughAction


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapact="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/action" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension1" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension1"/>
    <action xsi:type="rolapact:DrillThroughAction" xmi:id="_drillthroughaction_drillthroughh1l1" name="DrillthroughH1L1" drillThroughMeasure="_summeasure_measure1" default="true">
      <drillThroughAttribute xmi:id="_drillthroughattribute_dimension1" dimension="_standarddimension_dimension1" hierarchy="_explicithierarchy_hierarchy1" level="_level_h1_level1"/>
    </action>
    <action xsi:type="rolapact:DrillThroughAction" xmi:id="_drillthroughaction_drillthroughh2l1" name="DrillthroughH2L1" drillThroughMeasure="_summeasure_measure1">
      <drillThroughAttribute xmi:id="_drillthroughattribute_dimension1_1" dimension="_standarddimension_dimension1" hierarchy="_explicithierarchy_hierarchy2" level="_level_h2_level1"/>
    </action>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_h2_l1" table="_table_h2_l1"/>
  <rolaplev:Level xmi:id="_level_h1_level1" name="H1_Level1" column="_column_h1_l1_key" nameColumn="_column_h1_l1_name"/>
  <rolaplev:Level xmi:id="_level_h2_level2" name="H2_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <rolaplev:Level xmi:id="_level_h2_level1" name="H2_Level1" column="_column_h2_l1_key" nameColumn="_column_h2_l1_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy2" name="Hierarchy2" primaryKey="_column_hx_l2_key" query="_joinsource_1" levels="_level_h2_level1 _level_h2_level2"/>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1 _explicithierarchy_hierarchy2"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h1l1_key" key="_column_hx_l2_h1l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_h1_l1_key" query="_tablesource_h1_l1"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_h1_level2" name="H1_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <relational:Table xmi:id="_table_hx_l2" name="HX_L2">
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY"/>
  </relational:Table>
  <relational:Table xmi:id="_table_h2_l1" name="H2_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_name" name="NAME"/>
  </relational:Table>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_h2l1_key" key="_column_hx_l2_h2l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key_1" key="_column_h2_l1_key" query="_tablesource_h2_l1"/>
  </rolapsrc:JoinSource>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hx_l2_key" query="_joinsource" levels="_level_h1_level1 _level_h1_level2"/>
  <relational:Table xmi:id="_table_h1_l1" name="H1_L1">
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapact="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/action" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_hx_l2_h2l1_key _column_hx_l2_key _column_h2_l1_key _column_fact_value _column_hx_l2_h1l1_key _column_h1_l1_key" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_hx_l2_name _column_h2_l1_name _column_h1_l1_name _column_fact_key" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_action_drillthrough" description="Drill-through action configuration" name="Daanse Tutorial - Action Drillthrough" cubes="_physicalcube_cube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_h1_l1" name="H1_L1">
      <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_key" name="KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_h1_l1_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_h2_l1" name="H2_L1">
      <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_key" name="KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_h2_l1_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_hx_l2" name="HX_L2">
      <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_key" name="KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h1l1_key" name="H1L1_KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_hx_l2_h2l1_key" name="H2L1_KEY" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_h1_l1" table="_table_h1_l1"/>
  <rolapsrc:TableSource xmi:id="_tablesource_h2_l1" table="_table_h2_l1"/>
  <rolapsrc:TableSource xmi:id="_tablesource_hx_l2" table="_table_hx_l2"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_h2l1_key" key="_column_hx_l2_h2l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_h2_l1_key" query="_tablesource_h2_l1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_h1l1_key" key="_column_hx_l2_h1l1_key" query="_tablesource_hx_l2"/>
    <right xmi:id="_joinedqueryelement_key_1" key="_column_h1_l1_key" query="_tablesource_h1_l1"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_h1_level2" name="H1_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <rolaplev:Level xmi:id="_level_h2_level2" name="H2_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <rolaplev:Level xmi:id="_level_h1_level1" name="H1_Level1" column="_column_h1_l1_key" nameColumn="_column_h1_l1_name"/>
  <rolaplev:Level xmi:id="_level_h2_level1" name="H2_Level1" column="_column_h2_l1_key" nameColumn="_column_h2_l1_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy2" name="Hierarchy2" primaryKey="_column_hx_l2_key" query="_joinsource" levels="_level_h2_level1 _level_h2_level2"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_hx_l2_key" query="_joinsource_1" levels="_level_h1_level1 _level_h1_level2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1 _explicithierarchy_hierarchy2"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension1" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension1"/>
    <action xsi:type="rolapact:DrillThroughAction" xmi:id="_drillthroughaction_drillthroughh1l1" name="DrillthroughH1L1" drillThroughMeasure="_summeasure_measure1" default="true">
      <drillThroughAttribute xmi:id="_drillthroughattribute_dimension1_1" dimension="_standarddimension_dimension1" hierarchy="_explicithierarchy_hierarchy1" level="_level_h1_level1"/>
    </action>
    <action xsi:type="rolapact:DrillThroughAction" xmi:id="_drillthroughaction_drillthroughh2l1" name="DrillthroughH2L1" drillThroughMeasure="_summeasure_measure1">
      <drillThroughAttribute xmi:id="_drillthroughattribute_dimension1" dimension="_standarddimension_dimension1" hierarchy="_explicithierarchy_hierarchy2" level="_level_h2_level1"/>
    </action>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.action.drillthrough.zip" download>Download Zip File</a>
