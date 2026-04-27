---
title: Measure Inline Table With Physical
group: Measure
kind: TUTORIAL
number: 2.12.03
---
# Daanse Tutorial - Measure Inline Table With Physical

Data cube combines Physical and InlineTable.
InlineTable represents a table with data embedded directly in the schema definition rather than referencing external database tables.
InlineTable allows small lookup tables, dimension data, or test data to be included directly in the OLAP schema,
eliminating the need for separate database tables for static reference data.


## Database Schema

Schema includes InlineTable with data embedded directly in the schema definition and Physical table from database.
- Physical table `TOWN` contains 3 columns: `KEY`, `KEY_COUNTRY` and `NAME`.
- InlineTable, named `COUNTRY`, contains two columns: `KEY` and `NAME`.
- InlineTable, named `Fact`, contains two columns: `KEY` and `VALUE`.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_town" name="TOWN">
    <feature xsi:type="relational:Column" xmi:id="_column_town_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_key_country" name="KEY_COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
  </ownedElement>
  <ownedElement xsi:type="rolaprel:InlineTable" xmi:id="_inlinetable_country" name="COUNTRY">
    <feature xsi:type="relational:Column" xmi:id="_column_country_key" name="KEY" slot="_dataslot _dataslot_2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME" slot="_dataslot_1 _dataslot_3"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_country_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_country_name" dataValue="Germany"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_country_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_country_name" dataValue="France"/>
      </ownedElement>
    </extent>
  </ownedElement>
  <ownedElement xsi:type="rolaprel:InlineTable" xmi:id="_inlinetable_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" slot="_dataslot_4 _dataslot_6 _dataslot_8"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" slot="_dataslot_5 _dataslot_7 _dataslot_9"/>
    <extent xmi:id="_rowset_1">
      <ownedElement xsi:type="relational:Row" xmi:id="_row_2">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_fact_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_fact_value" dataValue="100.5"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_3">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_6" feature="_column_fact_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_7" feature="_column_fact_value" dataValue="200.5"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_4">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_8" feature="_column_fact_key" dataValue="3"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_9" feature="_column_fact_value" dataValue="300.5"/>
      </ownedElement>
    </extent>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

This example uses a InlineTableQuery, as it directly references the InlineTable table `Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_fact" alias="Fact" table="_inlinetable_fact"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" slot="_dataslot _dataslot_2 _dataslot_4"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" slot="_dataslot_1 _dataslot_3 _dataslot_5"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_fact_value" dataValue="100.5"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_fact_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_fact_value" dataValue="200.5"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_2">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_fact_key" dataValue="3"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_fact_value" dataValue="300.5"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Town

This example uses a TableQuery, as it directly references the Physical table `TOWN`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <relational:Table xmi:id="_table_town" name="TOWN">
    <feature xsi:type="relational:Column" xmi:id="_column_town_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_key_country" name="KEY_COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Country

This example uses a InlineTableQuery, as it directly references the InlineTable table `COUNTRY`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_country" alias="COUNTRY" table="_inlinetable_country"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_country" name="COUNTRY">
    <feature xsi:type="relational:Column" xmi:id="_column_country_key" name="KEY" slot="_dataslot _dataslot_2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME" slot="_dataslot_1 _dataslot_3"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_country_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_country_name" dataValue="Germany"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_country_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_country_name" dataValue="France"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Join Query

The JoinSource specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (TOWN - Physical table), the join uses the foreign key.
- In the upper-level table (COUNTRY - InlineTable), the join uses the primary key.
This JoinSource combins combines Physical and InlineTable


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_key_country" key="_column_town_key_country" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_country_key" query="_inlinetablesource_country"/>
  </rolapsrc:JoinSource>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_country" alias="COUNTRY" table="_inlinetable_country"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_country" name="COUNTRY">
    <feature xsi:type="relational:Column" xmi:id="_column_country_key" name="KEY" slot="_dataslot _dataslot_2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME" slot="_dataslot_1 _dataslot_3"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_country_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_country_name" dataValue="Germany"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_country_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_country_name" dataValue="France"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
  <relational:Table xmi:id="_table_town" name="TOWN">
    <feature xsi:type="relational:Column" xmi:id="_column_town_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_key_country" name="KEY_COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level - Town

The Level uses the column attribute to specify the primary key column. Additionally, it defines the nameColumn attribute to specify the column that contains the name of the level.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_town" name="Town">
  <column href="_column_town_key"/>
  <nameColumn href="_column_town_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level - Country

The Country level follows the same pattern as the Town level.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_country" name="Country">
  <column href="_column_country_key"/>
  <nameColumn href="_column_country_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists of two levels: Town and Country.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the queryHierarchy Join-query used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_town_key" query="_joinsource" levels="_level_country _level_town"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_key_country" key="_column_town_key_country" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_country_key" query="_inlinetablesource_country"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_country_key" nameColumn="_column_country_name"/>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_country" alias="COUNTRY" table="_inlinetable_country"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_country" name="COUNTRY">
    <feature xsi:type="relational:Column" xmi:id="_column_country_key" name="KEY" slot="_dataslot _dataslot_2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME" slot="_dataslot_1 _dataslot_3"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_country_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_country_name" dataValue="Germany"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_country_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_country_name" dataValue="France"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_key" nameColumn="_column_town_name"/>
  <relational:Table xmi:id="_table_town" name="TOWN">
    <feature xsi:type="relational:Column" xmi:id="_column_town_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_key_country" name="KEY_COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchy"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_key_country" key="_column_town_key_country" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_country_key" query="_inlinetablesource_country"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_country_key" nameColumn="_column_country_name"/>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_country" alias="COUNTRY" table="_inlinetable_country"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_country" name="COUNTRY">
    <feature xsi:type="relational:Column" xmi:id="_column_country_key" name="KEY" slot="_dataslot _dataslot_2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME" slot="_dataslot_1 _dataslot_3"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_country_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_country_name" dataValue="Germany"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_country_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_country_name" dataValue="France"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
  <relational:Table xmi:id="_table_town" name="TOWN">
    <feature xsi:type="relational:Column" xmi:id="_column_town_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_key_country" name="KEY_COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_key" nameColumn="_column_town_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_town_key" query="_joinsource" levels="_level_country _level_town"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure-Sum

        Measure use InlineTable column with sum aggregation.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_measure_sum" name="Measure-Sum">
  <column href="_column_fact_value"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Phisical and Inline Tables

In this example uses cube with InlineTable as data.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cubetwolevelsinlineandphysicaltable" name="CubeTwoLevelsInlineAndPhysicalTable" query="_inlinetablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension" foreignKey="_column_fact_key" dimension="_standarddimension_dimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_key_country" query="_tablesource_town">
      <key href="_column_town_key_country"/>
    </left>
    <right xmi:id="_joinedqueryelement_key" query="_inlinetablesource_country">
      <key href="_column_country_key"/>
    </right>
  </rolapsrc:JoinSource>
  <rolaprel:InlineTable xmi:id="_inlinetable_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" slot="_dataslot _dataslot_2 _dataslot_4"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" slot="_dataslot_1 _dataslot_3 _dataslot_5"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_fact_value" dataValue="100.5"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_fact_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_fact_value" dataValue="200.5"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_2">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_fact_key" dataValue="3"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_fact_value" dataValue="300.5"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
  <rolaplev:Level xmi:id="_level_country" name="Country">
    <column href="_column_country_key"/>
    <nameColumn href="_column_country_name"/>
  </rolaplev:Level>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_country" alias="COUNTRY" table="_inlinetable_country"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchy"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_country" name="COUNTRY">
    <feature xsi:type="relational:Column" xmi:id="_column_country_key" name="KEY" slot="_dataslot_6 _dataslot_8"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME" slot="_dataslot_7 _dataslot_9"/>
    <extent xmi:id="_rowset_1">
      <ownedElement xsi:type="relational:Row" xmi:id="_row_3">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_6" feature="_column_country_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_7" feature="_column_country_name" dataValue="Germany"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_4">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_8" feature="_column_country_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_9" feature="_column_country_name" dataValue="France"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
  <relational:Table xmi:id="_table_town" name="TOWN">
    <feature xsi:type="relational:Column" xmi:id="_column_town_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_key_country" name="KEY_COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_fact" alias="Fact" table="_inlinetable_fact"/>
  <rolaplev:Level xmi:id="_level_town" name="Town">
    <column href="_column_town_key"/>
    <nameColumn href="_column_town_name"/>
  </rolaplev:Level>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" query="_joinsource" levels="_level_country _level_town">
    <primaryKey href="_column_town_key"/>
  </rolaphier:ExplicitHierarchy>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_town_key _column_fact_key _column_town_key_country _column_country_key" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_country_name _column_town_name" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_double_precision" name="DOUBLE PRECISION" structuralFeature="_column_fact_value" typeNumber="8" numericPrecisionRadix="2"/>
  <rolapcat:Catalog xmi:id="_catalog_measure_inline_table_with_physical" description="Measure with inline table and physical table" name="Daanse Tutorial - Measure Inline Table With Physical" cubes="_physicalcube_cubetwolevelsinlineandphysicaltable" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_town" name="TOWN">
      <feature xsi:type="relational:Column" xmi:id="_column_town_key" name="KEY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_key_country" name="KEY_COUNTRY" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="rolaprel:InlineTable" xmi:id="_inlinetable_country" name="COUNTRY">
      <feature xsi:type="relational:Column" xmi:id="_column_country_key" name="KEY" type="_sqlsimpletype_integer" slot="_dataslot_8 _dataslot_1"/>
      <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME" type="_sqlsimpletype_character_varying" slot="_dataslot_7 _dataslot_5"/>
      <extent xmi:id="_rowset">
        <ownedElement xsi:type="relational:Row" xmi:id="_row_4">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_8" feature="_column_country_key" dataValue="1"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_7" feature="_column_country_name" dataValue="Germany"/>
        </ownedElement>
        <ownedElement xsi:type="relational:Row" xmi:id="_row_2">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_country_key" dataValue="2"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_country_name" dataValue="France"/>
        </ownedElement>
      </extent>
    </ownedElement>
    <ownedElement xsi:type="rolaprel:InlineTable" xmi:id="_inlinetable_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_integer" slot="_dataslot_6 _dataslot_2 _dataslot"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_double_precision" slot="_dataslot_4 _dataslot_3 _dataslot_9"/>
      <extent xmi:id="_rowset_1">
        <ownedElement xsi:type="relational:Row" xmi:id="_row">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_6" feature="_column_fact_key" dataValue="1"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_fact_value" dataValue="100.5"/>
        </ownedElement>
        <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_fact_key" dataValue="2"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_fact_value" dataValue="200.5"/>
        </ownedElement>
        <ownedElement xsi:type="relational:Row" xmi:id="_row_3">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_key" dataValue="3"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_9" feature="_column_fact_value" dataValue="300.5"/>
        </ownedElement>
      </extent>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_fact" alias="Fact" table="_inlinetable_fact"/>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_country" alias="COUNTRY" table="_inlinetable_country"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_key_country" key="_column_town_key_country" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_key" key="_column_country_key" query="_inlinetablesource_country"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_country_key" nameColumn="_column_country_name"/>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_key" nameColumn="_column_town_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_town_key" query="_joinsource" levels="_level_country _level_town"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension" name="Dimension" hierarchies="_explicithierarchy_hierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cubetwolevelsinlineandphysicaltable" name="CubeTwoLevelsInlineAndPhysicalTable" query="_inlinetablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension" foreignKey="_column_fact_key" dimension="_standarddimension_dimension"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.measure.inlinetablewithphysical.zip" download>Download Zip File</a>
