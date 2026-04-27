---
title: Hierarchy Query Join Base
group: Hierarchy
kind: TUTORIAL
number: 2.03.03.01
---
# Daanse Tutorial - Hierarchy Query Join Base

If the database structure follows the Third Normal Form (3NF), hierarchies in a cube are not stored in a single table but are distributed across multiple tables.

For example, consider a Geographical hierarchy with the levels Town and Country. If each entity is stored in a separate table, with a primary-foreign key relationship linking them, a query must be defined that incorporates both tables and specifies how the levels are joined.

The following example demonstrates how to define such a query.


## Database Schema

The cube defined in this example is based on three tables: `Fact`, `Town`, and `Country`.

- The `Fact` table contains measures and a reference to the `Town` table.
- The `Fact` table is linked to the `Town` table through the TOWN_ID column, which corresponds to the `ID` column in the `Town` table.
- The `Town` table includes a column that references the primary key of the `Country` table.
- The Country table consists of two columns: ID (primary key) and Name.

This structure ensures that the hierarchy is properly normalized, following the Third Normal Form (3NF).


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_town_id" name="TOWN_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country_id" name="COUNTRY_ID"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Level Town

The TableSource for the Town level directly references the physical Town table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country_id" name="COUNTRY_ID"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Level Country

The TableSource for the Country level directly references the physical Country table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <relational:Table xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Join Town to Country

The JoinSource specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (Town), the join uses the foreign key.
- In the upper-level table (Country), the join uses the primary key.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_country_id" key="_column_town_country_id" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_country_id" query="_tablesource_country"/>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country_id" name="COUNTRY_ID"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query Fact

The TableSource for the Level, as it directly references the physical table `Fact`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_town_id" name="TOWN_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level - Town

The `Town` level uses the column attribute to specify the primary key column. Additionally, it defines the nameColumn attribute to specify the column that contains the name of the level.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_town" name="Town">
  <column href="_column_town_id"/>
  <nameColumn href="_column_town_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level - Country

The `Country` level follows the same pattern as the `Town` level.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_county" name="County">
  <column href="_column_country_id"/>
  <nameColumn href="_column_country_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists of two levels: `Town` and `Country`.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the query used to retrieve the data for the hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_joinsource" levels="_level_town _level_county"/>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
  <relational:Table xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country_id" name="COUNTRY_ID"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_county" name="County" column="_column_country_id" nameColumn="_column_country_name"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_country_id" key="_column_town_country_id" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_country_id" query="_tablesource_country"/>
  </rolapsrc:JoinSource>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_town" name="Town" hierarchies="_explicithierarchy_townhierarchy"/>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
  <relational:Table xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country_id" name="COUNTRY_ID"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_county" name="County" column="_column_country_id" nameColumn="_column_country_name"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_country_id" key="_column_town_country_id" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_country_id" query="_tablesource_country"/>
  </rolapsrc:JoinSource>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_joinsource" levels="_level_town _level_county"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.

To connect the dimension to the cube, a DimensionConnector is used. The dimension has set the attribute `foreignKey` to define the column that contains the foreign key of the dimension in the fact table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_query_linked_tables" name="Cube Query linked Tables" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_town" foreignKey="_column_fact_town_id" dimension="_standarddimension_town"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_themeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaplev:Level xmi:id="_level_town" name="Town">
    <column href="_column_town_id"/>
    <nameColumn href="_column_town_name"/>
  </rolaplev:Level>
  <relational:Table xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME"/>
  </relational:Table>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_town_id" name="TOWN_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country_id" name="COUNTRY_ID"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_town" name="Town" hierarchies="_explicithierarchy_townhierarchy"/>
  <rolaplev:Level xmi:id="_level_county" name="County" column="_column_country_id" nameColumn="_column_country_name"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_country_id" key="_column_town_country_id" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_country_id" query="_tablesource_country"/>
  </rolapsrc:JoinSource>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_joinsource" levels="_level_town _level_county"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_town_id _column_country_id _column_town_country_id _column_fact_value _column_town_id" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_country_name _column_town_name" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_hierarchy_query_join_base" description="Basic hierarchy with joined tables" name="Daanse Tutorial - Hierarchy Query Join Base" cubes="_physicalcube_cube_query_linked_tables" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_town_id" name="TOWN_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_town" name="Town">
      <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_country_id" name="COUNTRY_ID" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_country" name="Country">
      <feature xsi:type="relational:Column" xmi:id="_column_country_id" name="ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_country_id" key="_column_town_country_id" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_country_id" query="_tablesource_country"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_county" name="County" column="_column_country_id" nameColumn="_column_country_name"/>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_joinsource" levels="_level_town _level_county"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_town" name="Town" hierarchies="_explicithierarchy_townhierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_query_linked_tables" name="Cube Query linked Tables" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_town" foreignKey="_column_fact_town_id" dimension="_standarddimension_town"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_themeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.hierarchy.query.join.base.zip" download>Download Zip File</a>
