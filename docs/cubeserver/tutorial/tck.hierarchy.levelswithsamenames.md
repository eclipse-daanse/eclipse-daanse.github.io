---
title: Daanse Tck - Hierarchy with levels with same names of values
group: Unstrutured
kind: other
number: z0
---

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_town_name _column_town_object" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_id _column_town_id _column_town_objectid _column_town_townid _column_fact_value _column_fact_year" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_daanse_tck_hierarchy_with_levels_with_same_names_of_values" description="        Hierarchy with levels with same names of values. We have issue with show ObjectHierarchy members.&#xA;        ObjectHierarchy members absent for Objects level.&#xA;        Issue reproduced only for YearHierarchy hasAll false&#xA;        Issue reproduced only for dimension Year as standart dimension. Issue can not reproduced for dimension Year as TimeDimension&#xA;" name="Daanse Tck - Hierarchy with levels with same names of values" cubes="_physicalcube_cube_with_levels_with_same_names_of_values" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_year" name="YEAR" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_id" name="ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_town" name="Town">
      <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_townid" name="TOWNID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_objectid" name="OBJECTID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_object" name="OBJECT" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact_1" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town_1" table="_table_town"/>
  <rolaplev:Level xmi:id="_level_id" name="Id" column="_column_town_id"/>
  <rolaplev:Level xmi:id="_level_objects" name="Objects" column="_column_town_objectid" nameColumn="_column_town_object"/>
  <rolaplev:Level xmi:id="_level_objects1" name="Objects1" column="_column_town_objectid"/>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_townid" nameColumn="_column_town_name"/>
  <rolaplev:Level xmi:id="_level_year" name="Year" column="_column_fact_year"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_objectshierarchy" name="ObjectsHierarchy" primaryKey="_column_town_id" source="_tablesource_town_1" levels="_level_objects1 _level_objects _level_id"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" source="_tablesource_town" levels="_level_town"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_yearhierarchy" name="YearHierarchy" hasAll="false" primaryKey="_column_fact_year" source="_tablesource_fact_1" levels="_level_year"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_town" name="Town" hierarchies="_explicithierarchy_townhierarchy _explicithierarchy_objectshierarchy"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_year" name="Year" hierarchies="_explicithierarchy_yearhierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_with_levels_with_same_names_of_values" name="Cube with levels with same names of values" source="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_year" foreignKey="_column_fact_year" dimension="_standarddimension_year"/>
    <dimensionConnectors xmi:id="_dimensionconnector_town" foreignKey="_column_fact_id" dimension="_standarddimension_town"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_themeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tck.hierarchy.levelswithsamenames.zip" download>Download Zip File</a>
