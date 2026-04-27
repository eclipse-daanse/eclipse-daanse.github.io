---
title: Measure Aggregator Bit
group: Measure
kind: TUTORIAL
number: 2.02.06
---
# Multiple Measures with Bit Aggragators

Data cubes have multiple measures with different bit aggregations are required for a column.


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

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_measurebitaggregators" id="_catalog_measureBitAggregators" description="Bitwise aggregation functions" name="Daanse Tutorial - Measure Aggregator Bit" cubes="_physicalcube_measuresaggregatorscube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_measuresaggregatorscube" name="MeasuresAggregatorsCube" query="_tablesource_fact">
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:BitAggMeasure" xmi:id="_bitaggmeasure_bitagg_and" name="BitAgg AND" column="_column_fact_value"/>
      <measures xsi:type="rolapmeas:BitAggMeasure" xmi:id="_bitaggmeasure_bitagg_or" name="BitAgg OR" column="_column_fact_value" aggType="or"/>
      <measures xsi:type="rolapmeas:BitAggMeasure" xmi:id="_bitaggmeasure_bitagg_xor" name="BitAgg XOR" column="_column_fact_value" aggType="xor"/>
      <measures xsi:type="rolapmeas:BitAggMeasure" xmi:id="_bitaggmeasure_bitagg_nand" name="BitAgg NAND" column="_column_fact_value" not="true"/>
      <measures xsi:type="rolapmeas:BitAggMeasure" xmi:id="_bitaggmeasure_bitagg_nor" name="BitAgg NOR" column="_column_fact_value" aggType="or" not="true"/>
      <measures xsi:type="rolapmeas:BitAggMeasure" xmi:id="_bitaggmeasure_bitagg_nxor" name="BitAgg NXOR" column="_column_fact_value" aggType="xor" not="true"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.measure.aggregator.bit.zip" download>Download Zip File</a>
