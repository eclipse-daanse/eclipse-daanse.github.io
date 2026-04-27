---
title: Inline Table
group: Hierarchy
kind: TUTORIAL
number: 2.16.01
---
# Daanse Tutorial - Inline Table

Cube with hierarchy which use inner table. This example shows combine phisical table as fact and Inline table for hierarchy
Inline table represents a table with data embedded directly in the schema


## Database Schema

The cube defined in this example is based on a two tables that stores all the data.

- The phisical table is named `Fact` uses for Cube1 and contains two columns: `DIM_KEY` and `VALUE`. The `DIM_KEY` column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.
- The InlineTable is named `HT` uses for Hierarchy and contains 3 columns: `KEY`, `VALUE`,`NAME` .

InlineTable represents a table with data embedded directly in the schema.
InlineTable uses for hierarchy.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="rolaprel:InlineTable" xmi:id="_inlinetable_ht" name="HT">
    <feature xsi:type="relational:Column" xmi:id="_column_ht_key" name="KEY" slot="_dataslot _dataslot_3"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_value" name="VALUE" slot="_dataslot_1 _dataslot_4"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_name" name="NAME" slot="_dataslot_2 _dataslot_5"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_ht_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_ht_value" dataValue="100.5"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_ht_name" dataValue="name1"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_ht_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_ht_value" dataValue="100.2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_ht_name" dataValue="name2"/>
      </ownedElement>
    </extent>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery,
as it directly references the physical table `Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## InlineTableQuery

The bridge between the cube and InlineTable `HT`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_ht" alias="HT" table="_inlinetable_ht"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_ht" name="HT">
    <feature xsi:type="relational:Column" xmi:id="_column_ht_key" name="KEY" slot="_dataslot _dataslot_3"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_value" name="VALUE" slot="_dataslot_1 _dataslot_4"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_name" name="NAME" slot="_dataslot_2 _dataslot_5"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_ht_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_ht_value" dataValue="100.5"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_ht_name" dataValue="name1"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_ht_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_ht_value" dataValue="100.2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_ht_name" dataValue="name2"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension1

The Dimension has only one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_ht" name="HT">
    <feature xsi:type="relational:Column" xmi:id="_column_ht_key" name="KEY" slot="_dataslot _dataslot_3"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_value" name="VALUE" slot="_dataslot_1 _dataslot_4"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_name" name="NAME" slot="_dataslot_2 _dataslot_5"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_ht_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_ht_value" dataValue="100.5"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_ht_name" dataValue="name1"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_ht_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_ht_value" dataValue="100.2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_ht_name" dataValue="name2"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_ht_key" query="_inlinetablesource_ht" levels="_level_level1"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_ht_key" nameColumn="_column_ht_name"/>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_ht" alias="HT" table="_inlinetable_ht"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists level Level1.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the query used to retrieve the data for the hierarchy.
Query uses Inline table as data sourse.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_ht_key" query="_inlinetablesource_ht" levels="_level_level1"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_ht" name="HT">
    <feature xsi:type="relational:Column" xmi:id="_column_ht_key" name="KEY" slot="_dataslot _dataslot_3"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_value" name="VALUE" slot="_dataslot_1 _dataslot_4"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_name" name="NAME" slot="_dataslot_2 _dataslot_5"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_ht_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_ht_value" dataValue="100.5"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_ht_name" dataValue="name1"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_ht_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_ht_value" dataValue="100.2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_ht_name" dataValue="name2"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_ht_key" nameColumn="_column_ht_name"/>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_ht" alias="HT" table="_inlinetable_ht"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

The Level uses the column attribute to specify the primary key `KEY` from Inline table `HT`.
Additionally, it defines the nameColumn `NAME` from Inline table `HT` attribute  to specify
the column that contains the name of the level.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_level1" name="Level1">
  <column href="_column_ht_key"/>
  <nameColumn href="_column_ht_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure1

Measure1 use Fact table VALUE column with sum aggregation in Cube.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_measure1" name="Measure1">
  <column href="_column_fact_value"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

In this example uses cube with fact table Fact as data. This example shows combine phisical table as fact and Inline table for hierarchy


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension1" foreignKey="_column_fact_dim_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_ht_key" query="_inlinetablesource_ht" levels="_level_level1"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_ht" name="HT">
    <feature xsi:type="relational:Column" xmi:id="_column_ht_key" name="KEY" slot="_dataslot _dataslot_3"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_value" name="VALUE" slot="_dataslot_1 _dataslot_4"/>
    <feature xsi:type="relational:Column" xmi:id="_column_ht_name" name="NAME" slot="_dataslot_2 _dataslot_5"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_ht_key" dataValue="1"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_ht_value" dataValue="100.5"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_ht_name" dataValue="name1"/>
      </ownedElement>
      <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_ht_key" dataValue="2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_ht_value" dataValue="100.2"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_ht_name" dataValue="name2"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_ht_key" nameColumn="_column_ht_name"/>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_ht" alias="HT" table="_inlinetable_ht"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_dim_key _column_ht_name _column_ht_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_numeric" name="NUMERIC" structuralFeature="_column_ht_value" typeNumber="2" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_inline_table" description="Hierarchy with inline table data" name="Daanse Tutorial - Inline Table" cubes="_physicalcube_cube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_dim_key" name="DIM_KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="rolaprel:InlineTable" xmi:id="_inlinetable_ht" name="HT">
      <feature xsi:type="relational:Column" xmi:id="_column_ht_key" name="KEY" type="_sqlsimpletype_character_varying" slot="_dataslot_3 _dataslot_1"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_value" name="VALUE" type="_sqlsimpletype_numeric" slot="_dataslot_2 _dataslot"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ht_name" name="NAME" type="_sqlsimpletype_character_varying" slot="_dataslot_5 _dataslot_4"/>
      <extent xmi:id="_rowset">
        <ownedElement xsi:type="relational:Row" xmi:id="_row">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_ht_key" dataValue="1"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_ht_value" dataValue="100.5"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_5" feature="_column_ht_name" dataValue="name1"/>
        </ownedElement>
        <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_ht_key" dataValue="2"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_ht_value" dataValue="100.2"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_4" feature="_column_ht_name" dataValue="name2"/>
        </ownedElement>
      </extent>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_ht" alias="HT" table="_inlinetable_ht"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_ht_key" nameColumn="_column_ht_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_ht_key" query="_inlinetablesource_ht" levels="_level_level1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension1" foreignKey="_column_fact_dim_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.hierarchy.inlinetable.zip" download>Download Zip File</a>
