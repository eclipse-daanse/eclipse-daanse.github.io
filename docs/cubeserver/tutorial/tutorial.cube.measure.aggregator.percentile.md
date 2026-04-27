---
title: Measure Aggregator Percentile
group: Measure
kind: TUTORIAL
number: 2.02.07
---
# Daanse Tutorial - Measure Aggregator Percentile

Data cubes have percentile measures.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table, named `Fact`, contains two columns: `KEY` and `VALUE`. The `KEY` column acts as a discriminator, while the `VALUE` column holds the measurements to be aggregated.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
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
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
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
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <rolaprel:OrderedColumn xmi:id="_orderedcolumn_value" column="_column_fact_value"/>
  <rolapcat:Catalog xmi:id="_catalog_measure_aggregator_percentile" description="Percentile aggregation functions" name="Daanse Tutorial - Measure Aggregator Percentile" cubes="_physicalcube_measuresaggregatorscube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level" name="Level" column="_column_fact_key"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy" name="Hierarchy" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_diml" name="Diml" hierarchies="_explicithierarchy_hierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_measuresaggregatorscube" name="MeasuresAggregatorsCube" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dim" foreignKey="_column_fact_key" dimension="_standarddimension_diml" overrideDimensionName="Dim"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:PercentileMeasure" xmi:id="_percentilemeasure_percentile_disc_0_25" name="Percentile disc 0.25" column="_orderedcolumn_value" percentile="0.25"/>
      <measures xsi:type="rolapmeas:PercentileMeasure" xmi:id="_percentilemeasure_percentile_cont_0_25" name="Percentile cont 0.25" column="_orderedcolumn_value" percentType="cont" percentile="0.25"/>
      <measures xsi:type="rolapmeas:PercentileMeasure" xmi:id="_percentilemeasure_percentile_disc_0_42" name="Percentile disc 0.42" column="_orderedcolumn_value" percentile="0.42"/>
      <measures xsi:type="rolapmeas:PercentileMeasure" xmi:id="_percentilemeasure_percentile_cont_0_42" name="Percentile cont 0.42" column="_orderedcolumn_value" percentType="cont" percentile="0.42"/>
      <measures xsi:type="rolapmeas:PercentileMeasure" xmi:id="_percentilemeasure_percentile_disc_0_5" name="Percentile disc 0.5" column="_orderedcolumn_value" percentile="0.5"/>
      <measures xsi:type="rolapmeas:PercentileMeasure" xmi:id="_percentilemeasure_percentile_cont_0_5" name="Percentile cont 0.5" column="_orderedcolumn_value" percentType="cont" percentile="0.5"/>
      <measures xsi:type="rolapmeas:PercentileMeasure" xmi:id="_percentilemeasure_percentile_disc_0_75" name="Percentile disc 0.75" column="_orderedcolumn_value" percentile="0.75"/>
      <measures xsi:type="rolapmeas:PercentileMeasure" xmi:id="_percentilemeasure_percentile_cont_0_75" name="Percentile cont 0.75" column="_orderedcolumn_value" percentType="cont" percentile="0.75"/>
      <measures xsi:type="rolapmeas:PercentileMeasure" xmi:id="_percentilemeasure_percentile_disc_1_00" name="Percentile disc 1.00" column="_orderedcolumn_value"/>
      <measures xsi:type="rolapmeas:PercentileMeasure" xmi:id="_percentilemeasure_percentile_cont_1_00" name="Percentile cont 1.00" column="_orderedcolumn_value" percentType="cont"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.aggregator.percentile.zip" download>Download Zip File</a>
