---
title: Hierarchy Query Join Multi
group: Hierarchy
kind: TUTORIAL
number: 2.03.03.02
---
# Daanse Tutorial - Hierarchy Query Join Multi

If the database structure follows the Third Normal Form (3NF), hierarchies in a cube are not stored in a single table but are distributed across multiple tables.

For example, consider a Geographical hierarchy with the levels Town and Country and Continent. If each entity is stored in a separate table, with a primary-foreign key relationship linking them,
a query must be defined that incorporates both tables and specifies how the levels are joined. In This case, the query must include a join between the Continent and Country tables,
as well as a join between the Country Join and Town tables. The following example demonstrates how to define such a query.


## Database Schema

The cube defined in this example is based on three tables: Fact, Town, and Country.

- The `Fact` table contains measures and a reference to the `Town` table.
- The `Fact` table is linked to the `Town` table through the `TOWN_ID` column, which corresponds to the `ID` column in the `Town` table.
- The `Town` table includes a column that references the primary key of the `Country` table.
- The `Country` table consists of two columns: `ID` (primary key) and Name as well as  referenct to the `Continent`.
- The `Continent` table consists of two columns: `ID` (primary key) and Name.

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
    <feature xsi:type="relational:Column" xmi:id="_column_country_continent_id" name="CONTINENT_ID"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_continent" name="Continent">
    <feature xsi:type="relational:Column" xmi:id="_column_continent_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_continent_name" name="NAME"/>
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
    <feature xsi:type="relational:Column" xmi:id="_column_country_continent_id" name="CONTINENT_ID"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Join Country to Continent

The JoinSource specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (Country), the join uses the foreign key.
- In the upper-level table (Continent), the join uses the primary key.



```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_continent_id" key="_column_country_continent_id" query="_tablesource_country"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_continent_id" query="_tablesource_continent"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <relational:Table xmi:id="_table_continent" name="Continent">
    <feature xsi:type="relational:Column" xmi:id="_column_continent_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_continent_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_continent" table="_table_continent"/>
  <relational:Table xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_continent_id" name="CONTINENT_ID"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Level Country

The TableSource for the Continent level directly references the physical Continent table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_continent" table="_table_continent"/>
  <relational:Table xmi:id="_table_continent" name="Continent">
    <feature xsi:type="relational:Column" xmi:id="_column_continent_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_continent_name" name="NAME"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query - Join Town to Country-Continent-Join

The JoinSource specifies which Queries should be joined.
It also defines the columns in each table that are used for the join:

In this case we join a TableSource with a JoinQuery.
- In the lower-level it is the TableQuery (Town), the join uses the foreign key.
- In the upper-level it is the JoinQuery (Country-Continent), the join uses the primary key.

Please note that within a JoinQuery, another JoinSource may only be used on the right side of the join.



```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_country_id" key="_column_town_country_id" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_country_id" query="_joinsource_1"/>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country_id" name="COUNTRY_ID"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_continent_id" key="_column_country_continent_id" query="_tablesource_country"/>
    <right xmi:id="_joinedqueryelement_id_1" key="_column_continent_id" query="_tablesource_continent"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <relational:Table xmi:id="_table_continent" name="Continent">
    <feature xsi:type="relational:Column" xmi:id="_column_continent_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_continent_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_continent" table="_table_continent"/>
  <relational:Table xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_continent_id" name="CONTINENT_ID"/>
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
## Level - Continent

The `Continent` level follows the same pattern as the `Town` and `Country` level.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_continent" name="Continent">
  <column href="_column_continent_id"/>
  <nameColumn href="_column_continent_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists of three levels: `Town`, `Country` and  `Continent`.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the Join-query used to retrieve the data for the hierarchy.

The order of the Levels in the hierarchy is important, as it determines the drill-down path for the hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_joinsource" levels="_level_continent _level_county _level_town"/>
  <rolaplev:Level xmi:id="_level_county" name="County" column="_column_country_id" nameColumn="_column_country_name"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_country_id" key="_column_town_country_id" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_country_id" query="_joinsource_1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <relational:Table xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_continent_id" name="CONTINENT_ID"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
  <rolaplev:Level xmi:id="_level_continent" name="Continent" column="_column_continent_id" nameColumn="_column_continent_name"/>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country_id" name="COUNTRY_ID"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_continent_id" key="_column_country_continent_id" query="_tablesource_country"/>
    <right xmi:id="_joinedqueryelement_id_1" key="_column_continent_id" query="_tablesource_continent"/>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_continent" name="Continent">
    <feature xsi:type="relational:Column" xmi:id="_column_continent_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_continent_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_continent" table="_table_continent"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_continent_country_town" name="Continent - Country - Town" hierarchies="_explicithierarchy_townhierarchy"/>
  <rolaplev:Level xmi:id="_level_county" name="County">
    <column href="_column_country_id"/>
    <nameColumn href="_column_country_name"/>
  </rolaplev:Level>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_country_id" key="_column_town_country_id" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_id" query="_joinsource_1">
      <key href="_column_country_id"/>
    </right>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <relational:Table xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_continent_id" name="CONTINENT_ID"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_joinsource" levels="_level_continent _level_county _level_town"/>
  <rolaplev:Level xmi:id="_level_continent" name="Continent">
    <column href="_column_continent_id"/>
    <nameColumn href="_column_continent_name"/>
  </rolaplev:Level>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country_id" name="COUNTRY_ID"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_continent_id" key="_column_country_continent_id" query="_tablesource_country"/>
    <right xmi:id="_joinedqueryelement_id_1" query="_tablesource_continent">
      <key href="_column_continent_id"/>
    </right>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_continent" name="Continent">
    <feature xsi:type="relational:Column" xmi:id="_column_continent_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_continent_name" name="NAME"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_continent" table="_table_continent"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube and DimensionConnector and Measure

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.

To connect the dimension to the cube, a DimensionConnector is used. The dimension has set the attribute `foreignKey` to define the column that contains the foreign key of the dimension in the fact table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_query_linked_tables" name="Cube Query linked Tables" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_continent_country_town" foreignKey="_column_fact_town_id" dimension="_standarddimension_continent_country_town"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_themeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaplev:Level xmi:id="_level_county" name="County">
    <column href="_column_country_id"/>
    <nameColumn href="_column_country_name"/>
  </rolaplev:Level>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_country_id" query="_tablesource_town">
      <key href="_column_town_country_id"/>
    </left>
    <right xmi:id="_joinedqueryelement_id" query="_joinsource_1">
      <key href="_column_country_id"/>
    </right>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_country">
    <table href="_table_country"/>
  </rolapsrc:TableSource>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_continent_country_town" name="Continent - Country - Town" hierarchies="_explicithierarchy_townhierarchy"/>
  <rolaplev:Level xmi:id="_level_town" name="Town">
    <column href="_column_town_id"/>
    <nameColumn href="_column_town_name"/>
  </rolaplev:Level>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" query="_joinsource" levels="_level_continent _level_county _level_town">
    <primaryKey href="_column_town_id"/>
  </rolaphier:ExplicitHierarchy>
  <rolaplev:Level xmi:id="_level_continent" name="Continent">
    <column href="_column_continent_id"/>
    <nameColumn href="_column_continent_name"/>
  </rolaplev:Level>
  <relational:Table xmi:id="_table_town" name="Town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_country_id" name="COUNTRY_ID"/>
  </relational:Table>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_town_id" name="TOWN_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_continent_id" query="_tablesource_country">
      <key href="_column_country_continent_id"/>
    </left>
    <right xmi:id="_joinedqueryelement_id_1" query="_tablesource_continent">
      <key href="_column_continent_id"/>
    </right>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_continent">
    <table href="_table_continent"/>
  </rolapsrc:TableSource>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_town_country_id _column_fact_value _column_country_id _column_town_id _column_fact_town_id _column_continent_id _column_country_continent_id" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_continent_name _column_town_name _column_country_name" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_hierarchy_query_join_multi" description="Multi-level hierarchy with joins" name="Daanse Tutorial - Hierarchy Query Join Multi" cubes="_physicalcube_cube_query_linked_tables" dbschemas="_schema"/>
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
      <feature xsi:type="relational:Column" xmi:id="_column_country_continent_id" name="CONTINENT_ID" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_continent" name="Continent">
      <feature xsi:type="relational:Column" xmi:id="_column_continent_id" name="ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_continent_name" name="NAME" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:TableSource xmi:id="_tablesource_continent" table="_table_continent"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_country_id" key="_column_town_country_id" query="_tablesource_town"/>
    <right xmi:id="_joinedqueryelement_id_1" key="_column_country_id" query="_joinsource_1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_continent_id" key="_column_country_continent_id" query="_tablesource_country"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_continent_id" query="_tablesource_continent"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_town" name="Town" column="_column_town_id" nameColumn="_column_town_name"/>
  <rolaplev:Level xmi:id="_level_county" name="County" column="_column_country_id" nameColumn="_column_country_name"/>
  <rolaplev:Level xmi:id="_level_continent" name="Continent" column="_column_continent_id" nameColumn="_column_continent_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_townhierarchy" name="TownHierarchy" primaryKey="_column_town_id" query="_joinsource" levels="_level_continent _level_county _level_town"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_continent_country_town" name="Continent - Country - Town" hierarchies="_explicithierarchy_townhierarchy"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube_query_linked_tables" name="Cube Query linked Tables" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_continent_country_town" foreignKey="_column_fact_town_id" dimension="_standarddimension_continent_country_town"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_themeasure" name="theMeasure" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.hierarchy.query.join.multi.zip" download>Download Zip File</a>
