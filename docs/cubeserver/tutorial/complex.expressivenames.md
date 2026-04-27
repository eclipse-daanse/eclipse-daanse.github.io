---
title: ExpressiveNames
group: Full Examples
kind: COMPLEX
number: 99.1.2
---
# ExpressiveNames Database

Sample catalog demonstrating complex hierarchies and naming patterns

## Test Cube

Cube with multiple dimensions and complex hierarchies

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_cube1fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_cube1fact" table="_table_cube1fact"/>
  <relational:Table xmi:id="_table_cube1fact" name="Cube1Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_cube1fact_d1" name="D1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_cube1fact_d2" name="D2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_cube1fact_d3" name="D3"/>
    <feature xsi:type="relational:Column" xmi:id="_column_cube1fact_m1" name="M1"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_d2h2l2table_d2h2l2_name _column_d2h1l1table_d2h1l1_name _column_d3h3l2table_d3h3l2_name _column_d3h3l1table_d3h3l1_name _column_cube1fact_d3 _column_d3h1l1table_d3h1l1_name _column_d2h2l2table_d2h2l1_ordinal _column_d1h1l1table_d1h1l1_name _column_d2h2l2table_d2h2l1_name _column_d2h2l2table_d2h2l2_ordinal _column_cube1fact_d1 _column_cube1fact_d2 _column_d3h2l1table_d3h2l1_name _column_d3h2l2table_d3h2l2_name _column_d3h3l3table_d3h3l3_name" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_d3h2l2table_d3h2l2_ordinal _column_d3h2l1table_d3h2l1_ordinal _column_d3h2l1table_d3h2l1 _column_d3h3l3table_d3h3l3 _column_d3h3l3table_d3h3l2_id _column_d3h3l3table_d3h3l3_ordinal _column_d2h2l2table_d2h2l2 _column_d3h2l2table_d3h2l1_id _column_d3h2l2table_d3h2l2 _column_d3h3l1table_d3h3l1 _column_cube1fact_m1 _column_d2h1l1table_d2h1l1 _column_d3h3l2table_d3h3l1_id _column_d2h1l1table_d2h1l1_ordinal _column_d1h1l1table_d1h1l1_ordinal _column_d3h1l1table_d3h1l1 _column_d3h3l2table_d3h3l2 _column_d3h3l2table_d3h3l2_ordinal _column_d2h2l1 _column_d3h1l1table_d3h1l1_ordinal _column_d3h2l2table_d3h2l2_id _column_d3h3l1table_d3h3l1_ordinal _column_d1h1l1table_d1h1l1" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_expressivenames" name="ExpressiveNames" cubes="_physicalcube_cube1" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_cube1fact" name="Cube1Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_cube1fact_d1" name="D1" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_cube1fact_d2" name="D2" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_cube1fact_d3" name="D3" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_cube1fact_m1" name="M1" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_d1h1l1table" name="D1H1L1Table">
      <feature xsi:type="relational:Column" xmi:id="_column_d1h1l1table_d1h1l1" name="D1H1L1" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d1h1l1table_d1h1l1_name" name="D1H1L1_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d1h1l1table_d1h1l1_ordinal" name="D1H1L1_Ordinal" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_d2h1l1table" name="D2H1L1Table">
      <feature xsi:type="relational:Column" xmi:id="_column_d2h1l1table_d2h1l1" name="D2H1L1" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d2h1l1table_d2h1l1_name" name="D2H1L1_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d2h1l1table_d2h1l1_ordinal" name="D2H1L1_Ordinal" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_d2h2l2table" name="D2H2L2Table">
      <feature xsi:type="relational:Column" xmi:id="_column_d2h2l2table_d2h2l2" name="D2H2L2" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d2h2l2table_d2h2l2_name" name="D2H2L2_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d2h2l2table_d2h2l1_name" name="D2H2L1_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d2h2l2table_d2h2l2_ordinal" name="D2H2L2_Ordinal" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d2h2l2table_d2h2l1_ordinal" name="D2H2L1_Ordinal" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_d3h1l1table" name="D3H1L1Table">
      <feature xsi:type="relational:Column" xmi:id="_column_d3h1l1table_d3h1l1" name="D3H1L1" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h1l1table_d3h1l1_name" name="D3H1L1_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h1l1table_d3h1l1_ordinal" name="D3H1L1_Ordinal" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_d3h2l2table" name="D3H2L2Table">
      <feature xsi:type="relational:Column" xmi:id="_column_d3h2l2table_d3h2l2" name="D3H2L2" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h2l2table_d3h2l2_id" name="D3H2L2_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h2l2table_d3h2l1_id" name="D3H2L1_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h2l2table_d3h2l2_name" name="D3H2L2_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h2l2table_d3h2l2_ordinal" name="D3H2L2_Ordinal" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_d3h2l1table" name="D3H2L1Table">
      <feature xsi:type="relational:Column" xmi:id="_column_d3h2l1table_d3h2l1" name="D3H2L1" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h2l1table_d3h2l1_name" name="D3H2L1_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h2l1table_d3h2l1_ordinal" name="D3H2L1_Ordinal" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_d3h3l3table" name="D3H3L3Table">
      <feature xsi:type="relational:Column" xmi:id="_column_d3h3l3table_d3h3l3" name="D3H3L3" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h3l3table_d3h3l2_id" name="D3H3L2_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h3l3table_d3h3l3_name" name="D3H3L3_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h3l3table_d3h3l3_ordinal" name="D3H3L3_Ordinal" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_d3h3l2table" name="D3H3L2Table">
      <feature xsi:type="relational:Column" xmi:id="_column_d3h3l2table_d3h3l2" name="D3H3L2" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h3l2table_d3h3l1_id" name="D3H3L1_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h3l2table_d3h3l2_name" name="D3H3L2_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h3l2table_d3h3l2_ordinal" name="D3H3L2_Ordinal" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_d3h3l1table" name="D3H3L1Table">
      <feature xsi:type="relational:Column" xmi:id="_column_d3h3l1table_d3h3l1" name="D3H3L1" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h3l1table_d3h3l1_name" name="D3H3L1_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_d3h3l1table_d3h3l1_ordinal" name="D3H3L1_Ordinal" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <relational:Column xmi:id="_column_d2h2l1" name="D2H2L1" type="_sqlsimpletype_integer"/>
  <rolapsrc:TableSource xmi:id="_tablesource_d3h3l1table" table="_table_d3h3l1table"/>
  <rolapsrc:TableSource xmi:id="_tablesource_d3h2l1table" table="_table_d3h2l1table"/>
  <rolapsrc:TableSource xmi:id="_tablesource_d3h3l3table" table="_table_d3h3l3table"/>
  <rolapsrc:TableSource xmi:id="_tablesource_d2h1l1table" table="_table_d2h1l1table"/>
  <rolapsrc:TableSource xmi:id="_tablesource_d1h1l1table" table="_table_d1h1l1table"/>
  <rolapsrc:TableSource xmi:id="_tablesource_d2h2l2table" table="_table_d2h2l2table"/>
  <rolapsrc:TableSource xmi:id="_tablesource_d3h3l2table" table="_table_d3h3l2table"/>
  <rolapsrc:TableSource xmi:id="_tablesource_d3h2l2table" table="_table_d3h2l2table"/>
  <rolapsrc:TableSource xmi:id="_tablesource_d3h1l1table" table="_table_d3h1l1table"/>
  <rolapsrc:TableSource xmi:id="_tablesource_cube1fact" table="_table_cube1fact"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_d3h2l1_id" key="_column_d3h2l2table_d3h2l1_id" query="_tablesource_d3h2l2table"/>
    <right xmi:id="_joinedqueryelement_d3h2l1" key="_column_d3h2l1table_d3h2l1" query="_tablesource_d3h2l1table"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_d3h3l1_id" key="_column_d3h3l2table_d3h3l1_id" query="_tablesource_d3h3l2table"/>
    <right xmi:id="_joinedqueryelement_d3h3l1" key="_column_d3h3l1table_d3h3l1" query="_tablesource_d3h3l1table"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_2">
    <left xmi:id="_joinedqueryelement_d3h3l2_id" key="_column_d3h3l3table_d3h3l2_id" query="_tablesource_d3h3l3table"/>
    <right xmi:id="_joinedqueryelement_d3h3l2" key="_column_d3h3l2table_d3h3l2" query="_joinsource_1"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_d3h2l2" name="D3H2L2" column="_column_d3h2l2table_d3h2l2" nameColumn="_column_d3h2l2table_d3h2l2_name">
    <ordinalColumns xmi:id="_orderedcolumn_d3h2l2_ordinal" column="_column_d3h2l2table_d3h2l2_ordinal"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_d1h1l1" name="D1H1L1" column="_column_d1h1l1table_d1h1l1" nameColumn="_column_d1h1l1table_d1h1l1_name">
    <ordinalColumns xmi:id="_orderedcolumn_d1h1l1_ordinal" column="_column_d1h1l1table_d1h1l1_ordinal"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_d2h2l1" name="D2H2L1" column="_column_d2h2l1" nameColumn="_column_d2h2l2table_d2h2l1_name">
    <ordinalColumns xmi:id="_orderedcolumn_d2h2l1_ordinal" column="_column_d2h2l2table_d2h2l1_ordinal"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_d3h1l1" name="D3H1L1" column="_column_d3h1l1table_d3h1l1" nameColumn="_column_d3h1l1table_d3h1l1_name">
    <ordinalColumns xmi:id="_orderedcolumn_d3h1l1_ordinal" column="_column_d3h1l1table_d3h1l1_ordinal"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_d3h2l1" name="D3H2L1" column="_column_d3h2l1table_d3h2l1" nameColumn="_column_d3h2l1table_d3h2l1_name">
    <ordinalColumns xmi:id="_orderedcolumn_d3h2l1_ordinal" column="_column_d3h2l1table_d3h2l1_ordinal"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_d2h2l2" name="D2H2L2" column="_column_d2h2l2table_d2h2l2" nameColumn="_column_d2h2l2table_d2h2l2_name">
    <ordinalColumns xmi:id="_orderedcolumn_d2h2l2_ordinal" column="_column_d2h2l2table_d2h2l2_ordinal"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_d3h3l1" name="D3H3L1" column="_column_d3h3l1table_d3h3l1" nameColumn="_column_d3h3l1table_d3h3l1_name">
    <ordinalColumns xmi:id="_orderedcolumn_d3h3l1_ordinal" column="_column_d3h3l1table_d3h3l1_ordinal"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_d3h3l3" name="D3H3L3" column="_column_d3h3l3table_d3h3l3" nameColumn="_column_d3h3l3table_d3h3l3_name">
    <ordinalColumns xmi:id="_orderedcolumn_d1h1l1_ordinal_1" column="_column_d1h1l1table_d1h1l1_ordinal"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_d2h1l1" name="D2H1L1" column="_column_d2h1l1table_d2h1l1" nameColumn="_column_d2h1l1table_d2h1l1_name">
    <ordinalColumns xmi:id="_orderedcolumn_d2h1l1_ordinal" column="_column_d2h1l1table_d2h1l1_ordinal"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_d3h3l2" name="D3H3L2" column="_column_d3h3l2table_d3h3l2" nameColumn="_column_d3h3l2table_d3h3l2_name">
    <ordinalColumns xmi:id="_orderedcolumn_d3h3l2_ordinal" column="_column_d3h3l2table_d3h3l2_ordinal"/>
  </rolaplev:Level>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_d3h3" name="D3H3" primaryKey="_column_d3h3l3table_d3h3l3" query="_joinsource_2" levels="_level_d3h3l1 _level_d3h3l2 _level_d3h3l3"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_d2h1" name="D2H1" primaryKey="_column_d2h1l1table_d2h1l1" query="_tablesource_d2h1l1table" levels="_level_d2h1l1"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_d1h1" name="D1H1" primaryKey="_column_d1h1l1table_d1h1l1" query="_tablesource_d1h1l1table" levels="_level_d1h1l1"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_d3h1" name="D3H1" primaryKey="_column_d3h1l1table_d3h1l1" query="_tablesource_d3h1l1table" levels="_level_d3h1l1"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_d2h2" name="D2H2" primaryKey="_column_d2h2l2table_d2h2l2" query="_tablesource_d2h2l2table" levels="_level_d2h2l1 _level_d2h2l2"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_d3h2" name="D3H2" primaryKey="_column_d3h2l2table_d3h2l2" query="_joinsource" levels="_level_d3h2l1 _level_d3h2l2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_d1h1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension2" name="Dimension2" hierarchies="_explicithierarchy_d2h1 _explicithierarchy_d2h2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension3" name="Dimension3" hierarchies="_explicithierarchy_d3h1 _explicithierarchy_d3h2 _explicithierarchy_d3h3"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_cube1fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension1" foreignKey="_column_cube1fact_d1" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension1"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimension2" foreignKey="_column_cube1fact_d2" dimension="_standarddimension_dimension2" overrideDimensionName="Dimension2"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimension3" foreignKey="_column_cube1fact_d3" dimension="_standarddimension_dimension3" overrideDimensionName="Dimension3"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" formatString="Standard" column="_column_cube1fact_m1"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.expressivenames.zip" download>Download Zip File</a>
