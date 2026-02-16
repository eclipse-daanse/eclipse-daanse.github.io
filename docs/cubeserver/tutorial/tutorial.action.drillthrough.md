---
title: Action Drillthrough
group: Actions
kind: TUTORIAL
number: 2.10.1
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
<roma:DatabaseSchema   id="_databaseSchema_DrillThrough">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_h1_l1" name="H1_L1">
    <columns xsi:type="roma:PhysicalColumn" id="_column_h1_l1_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_h1_l1_name" name="NAME"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_h2_l1" name="H2_L1">
    <columns xsi:type="roma:PhysicalColumn" id="_column_h2_l1_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_h2_l1_name" name="NAME"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_hx_l2" name="HX_L2">
    <columns xsi:type="roma:PhysicalColumn" id="_column_hx_l2_key" name="KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_hx_l2_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_hx_l2_h1l1_key" name="H1L1_KEY" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_hx_l2_h2l1_key" name="H2L1_KEY" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the `Fact` table to use in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_query_factQuery" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## H1L1Query

The Query is a simple TableQuery that selects all columns from the `H1_L1` table.


```xml
<roma:TableQuery  id="_query_H1L1Query" table="_table_h1_l1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## H2L1Query

The Query is a simple TableQuery that selects all columns from the `H2_L1` table.


```xml
<roma:TableQuery  id="_query_H2L1Query" table="_table_h2_l1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## join1

The JoinQuery specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (`HX_L2`), the join uses the foreign key `H1L1_KEY`.<br />
- In the upper-level table (`H1_L1`), the join uses the primary key `KEY`.<br />


```xml
<roma:JoinQuery  id="_joinQuery_join1">
  <left key="_column_hx_l2_h1l1_key" query="_query_HxL2Query"/>
  <right key="_column_h1_l1_key" query="_query_H1L1Query"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## join2

The JoinQuery specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (`HX_L2`), the join uses the foreign key `H2L1_KEY`.<br />
- In the upper-level table (`H2_L1`), the join uses the primary key `KEY`.<br />


```xml
<roma:JoinQuery  id="_joinQuery_join2">
  <left key="_column_hx_l2_h2l1_key" query="_query_HxL2Query"/>
  <right key="_column_h2_l1_key" query="_query_H2L1Query"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## HxL2Query

The Query is a simple TableQuery that selects all columns from the `HX_L2` table.


```xml
<roma:TableQuery  id="_query_HxL2Query" table="_table_hx_l2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

This Example uses H1_Level1 level based on the `KEY` column as key and `NAME` column as name from `H1_L1` table.


```xml
<roma:Level  id="_level_H1_Level1" name="H1_Level1" column="_column_h1_l1_key" nameColumn="_column_h1_l1_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level2

This Example uses H1_Level2 level based on the KEY column as key and NAME column as name from HX_L2 table.


```xml
<roma:Level  id="_level_H1_Level2" name="H1_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level3

This Example uses H2_Level1 level based on the KEY column as key and NAME column as name from H2_L1 table.


```xml
<roma:Level  id="_level_H2_Level1" name="H2_Level1" column="_column_h2_l1_key" nameColumn="_column_h2_l1_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level4

This Example uses H2_Level2 level based on the KEY column as key and NAME column as name from HX_L2 table.


```xml
<roma:Level  id="_level_H2_Level2" name="H2_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1

The Hierarchy1 is defined with the hasAll property set to false and the two levels H1_Level1, H1_Level2.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_Hierarchy1" name="Hierarchy1" primaryKey="_column_hx_l2_key" query="_joinQuery_join1" levels="_level_H1_Level1 _level_H1_Level2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy2

The Hierarchy1 is defined with the hasAll property set to false and the two levels H1_Level1, H1_Level2.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_Hierarchy2" name="Hierarchy2" primaryKey="_column_hx_l2_key" query="_joinQuery_join2" levels="_level_H2_Level1 _level_H2_Level2"/>

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
<roma:DrillThroughAction  id="_drillThroughAction_DrillthroughH1L1" name="DrillthroughH1L1" drillThroughMeasure="roma:SumMeasure _measure_Measure1" default="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## DrillthroughH2L1

DrillThroughAttributes have reference to H2_Level1 level from Hierarchy2; H2_L1 table KEY and NAME column


```xml
<roma:DrillThroughAction  id="_drillThroughAction_DrillthroughH2L1" name="DrillthroughH2L1" drillThroughMeasure="roma:SumMeasure _measure_Measure1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The time dimension is defined with the 2 hierarchies.


```xml
<roma:StandardDimension  id="_dimension_Dimension1" name="Dimension1" hierarchies="roma:ExplicitHierarchy _hierarchy_Hierarchy1 roma:ExplicitHierarchy _hierarchy_Hierarchy2"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube with Time_Dimension

The cube with DrillThroughAction


```xml
<roma:PhysicalCube   id="_cube_Cube" name="Cube" query="_query_factQuery">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_key" dimension="roma:StandardDimension _dimension_Dimension1" overrideDimensionName="Dimension1" id="_dimensionConnector_dimension1"/>
  <action xsi:type="roma:DrillThroughAction" id="_drillThroughAction_DrillthroughH1L1" name="DrillthroughH1L1" drillThroughMeasure="roma:SumMeasure _measure_Measure1" default="true">
    <drillThroughAttribute dimension="roma:StandardDimension _dimension_Dimension1" hierarchy="roma:ExplicitHierarchy _hierarchy_Hierarchy1" level="_level_H1_Level1"/>
  </action>
  <action xsi:type="roma:DrillThroughAction" id="_drillThroughAction_DrillthroughH2L1" name="DrillthroughH2L1" drillThroughMeasure="roma:SumMeasure _measure_Measure1">
    <drillThroughAttribute dimension="roma:StandardDimension _dimension_Dimension1" hierarchy="roma:ExplicitHierarchy _hierarchy_Hierarchy2" level="_level_H2_Level1"/>
  </action>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Drill-through action configuration" name="Daanse Tutorial - Action Drillthrough" cubes="_cube_Cube" dbschemas="_databaseSchema_DrillThrough"/>
  <roma:DatabaseSchema id="_databaseSchema_DrillThrough">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_h1_l1" name="H1_L1">
      <columns xsi:type="roma:PhysicalColumn" id="_column_h1_l1_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_h1_l1_name" name="NAME"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_h2_l1" name="H2_L1">
      <columns xsi:type="roma:PhysicalColumn" id="_column_h2_l1_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_h2_l1_name" name="NAME"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_hx_l2" name="HX_L2">
      <columns xsi:type="roma:PhysicalColumn" id="_column_hx_l2_key" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_hx_l2_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_hx_l2_h1l1_key" name="H1L1_KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_hx_l2_h2l1_key" name="H2L1_KEY" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_factQuery" table="_table_fact"/>
  <roma:TableQuery id="_query_H1L1Query" table="_table_h1_l1"/>
  <roma:TableQuery id="_query_H2L1Query" table="_table_h2_l1"/>
  <roma:TableQuery id="_query_HxL2Query" table="_table_hx_l2"/>
  <roma:JoinQuery id="_joinQuery_join1">
    <left key="_column_hx_l2_h1l1_key" query="_query_HxL2Query"/>
    <right key="_column_h1_l1_key" query="_query_H1L1Query"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_joinQuery_join2">
    <left key="_column_hx_l2_h2l1_key" query="_query_HxL2Query"/>
    <right key="_column_h2_l1_key" query="_query_H2L1Query"/>
  </roma:JoinQuery>
  <roma:Level id="_level_H1_Level1" name="H1_Level1" column="_column_h1_l1_key" nameColumn="_column_h1_l1_name"/>
  <roma:Level id="_level_H1_Level2" name="H1_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <roma:Level id="_level_H2_Level1" name="H2_Level1" column="_column_h2_l1_key" nameColumn="_column_h2_l1_name"/>
  <roma:Level id="_level_H2_Level2" name="H2_Level2" column="_column_hx_l2_key" nameColumn="_column_hx_l2_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_Hierarchy1" name="Hierarchy1" primaryKey="_column_hx_l2_key" query="_joinQuery_join1" levels="_level_H1_Level1 _level_H1_Level2"/>
  <roma:ExplicitHierarchy id="_hierarchy_Hierarchy2" name="Hierarchy2" primaryKey="_column_hx_l2_key" query="_joinQuery_join2" levels="_level_H2_Level1 _level_H2_Level2"/>
  <roma:StandardDimension id="_dimension_Dimension1" name="Dimension1" hierarchies="_hierarchy_Hierarchy1 _hierarchy_Hierarchy2"/>
  <roma:PhysicalCube id="_cube_Cube" name="Cube" query="_query_factQuery">
    <dimensionConnectors foreignKey="_column_fact_key" dimension="_dimension_Dimension1" overrideDimensionName="Dimension1" id="_dimensionConnector_dimension1"/>
    <action xsi:type="roma:DrillThroughAction" id="_drillThroughAction_DrillthroughH1L1" name="DrillthroughH1L1" drillThroughMeasure="_measure_Measure1" default="true">
      <drillThroughAttribute dimension="_dimension_Dimension1" hierarchy="_hierarchy_Hierarchy1" level="_level_H1_Level1"/>
    </action>
    <action xsi:type="roma:DrillThroughAction" id="_drillThroughAction_DrillthroughH2L1" name="DrillthroughH2L1" drillThroughMeasure="_measure_Measure1">
      <drillThroughAttribute dimension="_dimension_Dimension1" hierarchy="_hierarchy_Hierarchy2" level="_level_H2_Level1"/>
    </action>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.action.drillthrough.zip" download>Download Zip File</a>
