---
title: Measure Inline Table
group: Measure
kind: TUTORIAL
number: 2.12.02
---
# Daanse Tutorial - Measure Inline Table

Data cube with InlineTable.
InlineTable represents a table with data embedded directly in the schema definition rather than referencing external database tables.
InlineTable allows small lookup tables, dimension data, or test data to be included directly in the OLAP schema,
eliminating the need for separate database tables for static reference data.


## Database Schema

Schema includes InlineTable with data embedded directly in the schema definition.
InlineTable, named `Fact`, contains two columns: `KEY` and `VALUE`.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_schema">
  <ownedElement xsi:type="rolaprel:InlineTable" xmi:id="_inlinetable_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" slot="_dataslot"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" slot="_dataslot_1"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_key" dataValue="A"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_fact_value" dataValue="100.5"/>
      </ownedElement>
    </extent>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

This example uses a InlineTableQuery, as it directly references the InlineTable table `Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_fact" alias="Fact" table="_inlinetable_fact"/>
  <rolaprel:InlineTable xmi:id="_inlinetable_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" slot="_dataslot"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" slot="_dataslot_1"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_key" dataValue="A"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_fact_value" dataValue="100.5"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
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
## Cube with Inline Table

In this example uses cube with InlineTable as data.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_inlinetablesource_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaprel:InlineTable xmi:id="_inlinetable_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" slot="_dataslot"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" slot="_dataslot_1"/>
    <extent xmi:id="_rowset">
      <ownedElement xsi:type="relational:Row" xmi:id="_row">
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_key" dataValue="A"/>
        <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_fact_value" dataValue="100.5"/>
      </ownedElement>
    </extent>
  </rolaprel:InlineTable>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_fact" alias="Fact" table="_inlinetable_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_measure_inline_table" description="Measure with inline table data" name="Daanse Tutorial - Measure Inline Table" cubes="_physicalcube_cube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="rolaprel:InlineTable" xmi:id="_inlinetable_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying" slot="_dataslot"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer" slot="_dataslot_1"/>
      <extent xmi:id="_rowset">
        <ownedElement xsi:type="relational:Row" xmi:id="_row">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_key" dataValue="A"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_fact_value" dataValue="100.5"/>
        </ownedElement>
      </extent>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:InlineTableSource xmi:id="_inlinetablesource_fact" alias="Fact" table="_inlinetable_fact"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_inlinetablesource_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure_sum" name="Measure-Sum" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.measure.inlinetable.zip" download>Download Zip File</a>
