---
title: Measure Aggregator Nth
group: Measure
kind: TUTORIAL
number: 2.02.07
---
# Daanse Tutorial - Measure Aggregator Nth

Data cubes have NTH measures.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`. The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_name" name="NAME"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

This example uses a TableQuery, as it directly references the physical table `Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Ordered Column

Represents a column with specific ordering information used in queries and result sets.
OrderedColumn is typically used in OLAP contexts where explicit column ordering is required for query processing or result presentation.
OrderedColumn uses ascending by default.


```xml
<rolaprel:OrderedColumn xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmi:id="_orderedcolumn_value">
  <column href="_column_fact_value"/>
</rolaprel:OrderedColumn>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value _column_fact_id" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_name" typeNumber="12"/>
  <rolaprel:OrderedColumn xmi:id="_orderedcolumn_value" column="_column_fact_value"/>
  <rolapcat:Catalog xmi:id="_catalog_measure_aggregator_nth" description="Nth value aggregation functions" name="Daanse Tutorial - Measure Aggregator Nth" cubes="_physicalcube_measuresaggregatorscube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_id" name="ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_value" name="Value" column="_column_fact_value"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" hasAll="false" primaryKey="_column_fact_id" query="_tablesource_fact" levels="_level_value"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_diml" name="Diml" hierarchies="_explicithierarchy_hierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_measuresaggregatorscube" name="MeasuresAggregatorsCube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dim" foreignKey="_column_fact_id" dimension="_standarddimension_diml" overrideDimensionName="Dim"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:NthAggMeasure" xmi:id="_nthaggmeasure_nthagg1" name="NthAgg1" column="_column_fact_value" orderByColumns="_orderedcolumn_value" n="1"/>
      <measures xsi:type="rolapmeas:NthAggMeasure" xmi:id="_nthaggmeasure_nthagg2" name="NthAgg2" column="_column_fact_value" orderByColumns="_orderedcolumn_value" n="2"/>
      <measures xsi:type="rolapmeas:NthAggMeasure" xmi:id="_nthaggmeasure_nthagg3" name="NthAgg3" column="_column_fact_value" orderByColumns="_orderedcolumn_value" n="3"/>
      <measures xsi:type="rolapmeas:NthAggMeasure" xmi:id="_nthaggmeasure_nthagg4" name="NthAgg4" column="_column_fact_value" orderByColumns="_orderedcolumn_value" n="4"/>
      <measures xsi:type="rolapmeas:NthAggMeasure" xmi:id="_nthaggmeasure_nthagg5" name="NthAgg5" column="_column_fact_value" orderByColumns="_orderedcolumn_value" n="5"/>
      <measures xsi:type="rolapmeas:NthAggMeasure" xmi:id="_nthaggmeasure_nthagg6" name="NthAgg6" column="_column_fact_value" orderByColumns="_orderedcolumn_value" n="6"/>
      <measures xsi:type="rolapmeas:NthAggMeasure" xmi:id="_nthaggmeasure_nthagg7" name="NthAgg7" column="_column_fact_value" orderByColumns="_orderedcolumn_value" n="7"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.aggregator.nth.zip" download>Download Zip File</a>
