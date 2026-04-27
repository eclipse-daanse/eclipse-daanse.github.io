---
title: Writeback Inline Table
group: Writeback
kind: TUTORIAL
number: 2.05.01
---
# Daanse Tutorial - Writeback Inline Table

This tutorial discusses writeback with fact as InlineTable.


## Database Schema

The Database Schema contains the
- InlineTable `FACT` with 3 columns `VAL`, `VAL1`, `L2`. The `L2` column is used as the discriminator in the Level and Hierarchy definitions
- `L1` table with two columns: `L1` and `L2`.
- `L2` table with one column: `L2`.
- `FACTWB` table with 4 columns: `VAL`, `VAL1`, `ID`, `USER`.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_schema">
  <ownedElement xsi:type="rolaprel:InlineTable" xmi:id="_inlinetable_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val" name="VAL" slot="_dataslot _dataslot_3 _dataslot_6 _dataslot_9 _dataslot_12"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val1" name="VAL1" slot="_dataslot_1 _dataslot_4 _dataslot_7 _dataslot_10 _dataslot_13"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_l2" name="L2" slot="_dataslot_2 _dataslot_5 _dataslot_8 _dataslot_11 _dataslot_14"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_val" dataValue="42"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_fact_val1" dataValue="21"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_fact_l2" dataValue="Level11"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_fact_val" dataValue="62"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_fact_val1" dataValue="31"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_fact_l2" dataValue="Level22"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_2">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_6" feature="_column_fact_val" dataValue="20"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_7" feature="_column_fact_val1" dataValue="10"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_8" feature="_column_fact_l2" dataValue="Level33"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_3">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_9" feature="_column_fact_val" dataValue="40"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_10" feature="_column_fact_val1" dataValue="20"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_11" feature="_column_fact_l2" dataValue="Level44"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_4">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_12" feature="_column_fact_val" dataValue="60"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_13" feature="_column_fact_val1" dataValue="30"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_14" feature="_column_fact_l2" dataValue="Level55"/>
      </ownedElement>
    </extent>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_l1" name="L1">
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l1" name="L1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l2" name="L2"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_l2" name="L2">
    <feature xsi:type="relational:Column" xmi:id="_column_l2_l2" name="L2"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_val" name="VAL"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_val1" name="VAL1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_l2" name="L2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_factwb_user" name="USER"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## FactQuery

The FactQuery is a simple InlineTableSource that selects all columns from the `Fact` inline table to use in the cube for the measures. InlineTableSource have description and data in catalog


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_fact" alias="FACT" table="_inlinetable_fact"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val" name="VAL" slot="_dataslot _dataslot_3 _dataslot_6 _dataslot_9 _dataslot_12"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val1" name="VAL1" slot="_dataslot_1 _dataslot_4 _dataslot_7 _dataslot_10 _dataslot_13"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_l2" name="L2" slot="_dataslot_2 _dataslot_5 _dataslot_8 _dataslot_11 _dataslot_14"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_val" dataValue="42"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_fact_val1" dataValue="21"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_fact_l2" dataValue="Level11"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_fact_val" dataValue="62"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_fact_val1" dataValue="31"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_fact_l2" dataValue="Level22"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_2">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_6" feature="_column_fact_val" dataValue="20"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_7" feature="_column_fact_val1" dataValue="10"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_8" feature="_column_fact_l2" dataValue="Level33"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_3">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_9" feature="_column_fact_val" dataValue="40"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_10" feature="_column_fact_val1" dataValue="20"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_11" feature="_column_fact_l2" dataValue="Level44"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_4">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_12" feature="_column_fact_val" dataValue="60"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_13" feature="_column_fact_val1" dataValue="30"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_14" feature="_column_fact_l2" dataValue="Level55"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## l1TableQuery

The l1TableQuery is a simple TableSource that selects all columns from the `L1` table to use in the cube for the `L1` level.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_l1" table="_table_l1"/>
  <relational:Table xmi:id="_table_l1" name="L1">
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l1" name="L1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l2" name="L2"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## l21TableQuery

The l2TableQuery is a simple TableSource that selects all columns from the `L2` table to use in the cube for the `L2` level.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_l2" table="_table_l2"/>
  <relational:Table xmi:id="_table_l2" name="L2">
    <feature xsi:type="relational:Column" xmi:id="_column_l2_l2" name="L2"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## join

The join is a simple JoinedQuery that unites l1TableQuery and l2TableQuery by `L2` column.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_l2" key="_column_l1_l2" query="_tablesource_l1"/>
    <right xmi:id="_joinedqueryelement_l2_1" key="_column_l2_l2" query="_tablesource_l2"/>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_l1" name="L1">
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l1" name="L1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l2" name="L2"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_l1" table="_table_l1"/>
  <relational:Table xmi:id="_table_l2" name="L2">
    <feature xsi:type="relational:Column" xmi:id="_column_l2_l2" name="L2"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_l2" table="_table_l2"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## L1

This Example uses one simple `L1` level based on the `L1` column. `L2` column to use for connection to level `L2`


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_l1" name="L1">
  <column href="_column_l1_l1"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## L2

This Example uses one simple `L2` level based on the `L2` column. `L2` column to use for connection to level `L1`


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_l2" name="L2">
  <column href="_column_l2_l2"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## HierarchyWithHasAll

The Hierarchy is defined with the hasAll property set to true and the two levels.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_l1_l2" query="_joinsource" levels="_level_l1 _level_l2"/>
  <rolaplev:Level xmi:id="_level_l2" name="L2" column="_column_l2_l2"/>
  <relational:Table xmi:id="_table_l1" name="L1">
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l1" name="L1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l2" name="L2"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_l1" table="_table_l1"/>
  <relational:Table xmi:id="_table_l2" name="L2">
    <feature xsi:type="relational:Column" xmi:id="_column_l2_l2" name="L2"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_l2" table="_table_l2"/>
  <rolaplev:Level xmi:id="_level_l1" name="L1" column="_column_l1_l1"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_l2" key="_column_l1_l2" query="_tablesource_l1"/>
    <right xmi:id="_joinedqueryelement_l2_1" key="_column_l2_l2" query="_tablesource_l2"/>
  </rolapsrc:JoinSource>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The dimension is defined with the one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchywithhasall"/>
  <rolaplev:Level xmi:id="_level_l2" name="L2" column="_column_l2_l2"/>
  <relational:Table xmi:id="_table_l1" name="L1">
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l1" name="L1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l2" name="L2"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_l1" table="_table_l1"/>
  <relational:Table xmi:id="_table_l2" name="L2">
    <feature xsi:type="relational:Column" xmi:id="_column_l2_l2" name="L2"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_l1_l2" query="_joinsource" levels="_level_l1 _level_l2"/>
  <rolapsrc:TableSource xmi:id="_tablesource_l2" table="_table_l2"/>
  <rolaplev:Level xmi:id="_level_l1" name="L1" column="_column_l1_l1"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_l2" key="_column_l1_l2" query="_tablesource_l1"/>
    <right xmi:id="_joinedqueryelement_l2_1" key="_column_l2_l2" query="_tablesource_l2"/>
  </rolapsrc:JoinSource>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cubec C

Cube C is defined by DimensionConnector D1 and a MeasureGroup containing two measures using SUM aggregation.
The cube also contains a FACTWB WritebackTable configuration with a WritebackAttribute mapped to the VAL column from the fact table, along with two WritebackMeasures: Measure1 and Measure2.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" query="_inlinetablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_d1" foreignKey="_column_fact_l2" dimension="_standarddimension_dimension" overrideDimensionName="D1"/>
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackAttribute xmi:id="_writebackattribute_l2" column="_column_fact_l2" dimensionConnector="_dimensionconnector_d1"/>
      <writebackMeasure xmi:id="_writebackmeasure_measure1" column="_column_fact_val" name="Measure1"/>
      <writebackMeasure xmi:id="_writebackmeasure_measure2" column="_column_fact_val1" name="Measure2"/>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_val"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure2" name="Measure2" column="_column_fact_val1"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaprel:InlineTable xmi:id="_inlinetable_fact" name="FACT">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val" name="VAL" slot="_dataslot _dataslot_3 _dataslot_6 _dataslot_9 _dataslot_12"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_val1" name="VAL1" slot="_dataslot_1 _dataslot_4 _dataslot_7 _dataslot_10 _dataslot_13"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_l2" name="L2" slot="_dataslot_2 _dataslot_5 _dataslot_8 _dataslot_11 _dataslot_14"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_val" dataValue="42"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_fact_val1" dataValue="21"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_fact_l2" dataValue="Level11"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_fact_val" dataValue="62"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_fact_val1" dataValue="31"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_fact_l2" dataValue="Level22"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_2">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_6" feature="_column_fact_val" dataValue="20"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_7" feature="_column_fact_val1" dataValue="10"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_8" feature="_column_fact_l2" dataValue="Level33"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_3">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_9" feature="_column_fact_val" dataValue="40"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_10" feature="_column_fact_val1" dataValue="20"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_11" feature="_column_fact_l2" dataValue="Level44"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_4">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_12" feature="_column_fact_val" dataValue="60"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_13" feature="_column_fact_val1" dataValue="30"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_14" feature="_column_fact_l2" dataValue="Level55"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
  <rolaplev:Level xmi:id="_level_l2" name="L2">
    <column href="_column_l2_l2"/>
  </rolaplev:Level>
  <relational:Table xmi:id="_table_l1" name="L1">
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l1" name="L1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_l1_l2" name="L2"/>
  </relational:Table>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_fact" alias="FACT" table="_inlinetable_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_l1" table="_table_l1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchywithhasall"/>
  <rolapsrc:TableSource xmi:id="_tablesource_l2" table="_table_l2"/>
  <relational:Table xmi:id="_table_l2" name="L2">
    <feature xsi:type="relational:Column" xmi:id="_column_l2_l2" name="L2"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_l1_l2" query="_joinsource" levels="_level_l1 _level_l2"/>
  <rolaplev:Level xmi:id="_level_l1" name="L1" column="_column_l1_l1"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_l2" key="_column_l1_l2" query="_tablesource_l1"/>
    <right xmi:id="_joinedqueryelement_l2_1" key="_column_l2_l2" query="_tablesource_l2"/>
  </rolapsrc:JoinSource>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_val _column_factwb_val1 _column_factwb_val _column_fact_val1" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_factwb_user _column_factwb_l2 _column_l1_l2 _column_factwb_id _column_fact_l2 _column_l1_l1 _column_l2_l2" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_writeback_inline_table" description="Inline table writeback functionality" name="Daanse Tutorial - Writeback Inline Table" cubes="_physicalcube_c" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="rolaprel:InlineTable" xmi:id="_inlinetable_fact" name="FACT">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_val" name="VAL" type="_sqlsimpletype_integer" slot="_dataslot_2 _dataslot_5 _dataslot_7 _dataslot_8 _dataslot_3"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_val1" name="VAL1" type="_sqlsimpletype_integer" slot="_dataslot _dataslot_10 _dataslot_13 _dataslot_1 _dataslot_12"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_l2" name="L2" type="_sqlsimpletype_character_varying" slot="_dataslot_6 _dataslot_14 _dataslot_11 _dataslot_9 _dataslot_4"/>
      <extent xmi:id="_rowset">
        <ownedElement xsi:type="relational:Row" xmi:id="_row_2">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_fact_val" dataValue="42"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_val1" dataValue="21"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_6" feature="_column_fact_l2" dataValue="Level11"/>
        </ownedElement>
        <ownedElement xsi:type="relational:Row" xmi:id="_row_4">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_fact_val" dataValue="62"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_10" feature="_column_fact_val1" dataValue="31"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_14" feature="_column_fact_l2" dataValue="Level22"/>
        </ownedElement>
        <ownedElement xsi:type="relational:Row" xmi:id="_row">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_7" feature="_column_fact_val" dataValue="20"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_13" feature="_column_fact_val1" dataValue="10"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_11" feature="_column_fact_l2" dataValue="Level33"/>
        </ownedElement>
        <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_8" feature="_column_fact_val" dataValue="40"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_fact_val1" dataValue="20"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_9" feature="_column_fact_l2" dataValue="Level44"/>
        </ownedElement>
        <ownedElement xsi:type="relational:Row" xmi:id="_row_3">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_fact_val" dataValue="60"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_12" feature="_column_fact_val1" dataValue="30"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_fact_l2" dataValue="Level55"/>
        </ownedElement>
      </extent>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_l1" name="L1">
      <feature xsi:type="relational:Column" xmi:id="_column_l1_l1" name="L1" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_l1_l2" name="L2" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_l2" name="L2">
      <feature xsi:type="relational:Column" xmi:id="_column_l2_l2" name="L2" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_factwb" name="FACTWB">
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_val" name="VAL" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_val1" name="VAL1" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_l2" name="L2" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_id" name="ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_factwb_user" name="USER" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_l2" table="_table_l2"/>
  <rolapsrc:TableSource xmi:id="_tablesource_l1" table="_table_l1"/>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_fact" alias="FACT" table="_inlinetable_fact"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_l2" key="_column_l1_l2" query="_tablesource_l1"/>
    <right xmi:id="_joinedqueryelement_l2_1" key="_column_l2_l2" query="_tablesource_l2"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_l1" name="L1" column="_column_l1_l1"/>
  <rolaplev:Level xmi:id="_level_l2" name="L2" column="_column_l2_l2"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchywithhasall" name="HierarchyWithHasAll" primaryKey="_column_l1_l2" query="_joinsource" levels="_level_l1 _level_l2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchywithhasall"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_c" name="C" query="_inlinetablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_d1" foreignKey="_column_fact_l2" dimension="_standarddimension_dimension" overrideDimensionName="D1"/>
    <writebackTable xmi:id="_writebacktable_factwb" name="FACTWB">
      <writebackAttribute xmi:id="_writebackattribute_l2" column="_column_fact_l2" dimensionConnector="_dimensionconnector_d1"/>
      <writebackMeasure xmi:id="_writebackmeasure_measure1" column="_column_fact_val" name="Measure1"/>
      <writebackMeasure xmi:id="_writebackmeasure_measure2" column="_column_fact_val1" name="Measure2"/>
    </writebackTable>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_val"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure2" name="Measure2" column="_column_fact_val1"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.writeback.inlinetable.zip" download>Download Zip File</a>
