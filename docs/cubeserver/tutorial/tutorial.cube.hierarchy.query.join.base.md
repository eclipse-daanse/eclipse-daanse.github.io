---
title: Query based on Join
group: Hierarchy
kind: TUTORIAL
number: 2.3.3.1
---
# Hierarchy - Query based on a Join

If the database structure follows the Third Normal Form (3NF), hierarchies in a cube are not stored in a single table but are distributed across multiple tables.

For example, consider a Geographical hierarchy with the levels Town and Country. If each entity is stored in a separate table, with a primary-foreign key relationship linking them, a query must be defined that incorporates both tables and specifies how the levels are joined.

The following example demonstrates how to define such a query.


## Database Schema

The cube defined in this example is based on three tables: Fact, Town, and Country.

- The Fact table contains measures and a reference to the Town table.
- The Fact table is linked to the Town table through the TOWN_ID column, which corresponds to the ID column in the Town table.
- The Town table includes a column that references the primary key of the Country table.
- The Country table consists of two columns: ID (primary key) and Name.

This structure ensures that the hierarchy is properly normalized, following the Third Normal Form (3NF).


```xml
<roma:DatabaseSchema   id="_dbschema">
  <tables xsi:type="roma:PhysicalTable" id="_tab_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_townId" name="TOWN_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_fact_value" name="VALUE" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_tab_town" name="Town">
    <columns xsi:type="roma:PhysicalColumn" id="_col_town_id" name="ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_town_name" name="NAME"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_town_countryid" name="COUNTRY_ID" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_tab_country" name="Country">
    <columns xsi:type="roma:PhysicalColumn" id="_col_country_id" name="ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_col_country_name" name="NAME"/>
  </tables>
</roma:DatabaseSchema>

```

## Query - Level Town

The TableQuery for the Town level directly references the physical Town table.


```xml
<roma:TableQuery  id="_query_LevelTown" table="roma:PhysicalTable _tab_town"/>

```

## Query - Level Country

The TableQuery for the Country level directly references the physical Country table.


```xml
<roma:TableQuery  id="_query_LevelCountry" table="roma:PhysicalTable _tab_country"/>

```

## Query - Join Town to Country

The JoinQuery specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the lower-level table (Town), the join uses the foreign key.
- In the upper-level table (Country), the join uses the primary key.


```xml
<roma:JoinQuery  id="_query_LevelTownToCountry">
  <left key="roma:PhysicalColumn _col_town_id" query="roma:TableQuery _query_LevelTown"/>
  <right key="roma:PhysicalColumn _col_country_id" query="roma:TableQuery _query_LevelCountry"/>
</roma:JoinQuery>

```

## Query Fact

The TableQuery for the Level, as it directly references the physical table `Fact`.


```xml
<roma:TableQuery  id="_query_Fact" table="roma:PhysicalTable _tab_fact"/>

```

## Level - Town

The Level uses the column attribute to specify the primary key column. Additionally, it defines the nameColumn attribute to specify the column that contains the name of the level.


```xml
<roma:Level  id="_level_town" name="Town" column="roma:PhysicalColumn _col_town_id" nameColumn="roma:PhysicalColumn _col_town_name"/>

```

## Level - Country

The Country level follows the same pattern as the Town level.


```xml
<roma:Level  id="_level_country" name="County" column="roma:PhysicalColumn _col_country_id" nameColumn="roma:PhysicalColumn _col_country_name"/>

```

## Hierarchy

This hierarchy consists of two levels: Town and Country.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the query used to retrieve the data for the hierarchy.


```xml
<roma:Hierarchy  id="_hierarchy_town" name="TownHierarchy" levels="_level_town _level_country" primaryKey="roma:PhysicalColumn _col_town_id" query="roma:JoinQuery _query_LevelTownToCountry"/>

```

## Dimension

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dim_town" name="Town" hierarchies="_hierarchy_town"/>

```

## Cube and DimensionConnector and Measure

The cube contains only one Measure in a unnamed MeasureGroup and references to the Dimension.

To connect the dimension to the cube, a DimensionConnector is used. The dimension has set the attribute `foreignKey` to define the column that contains the foreign key of the dimension in the fact table.


```xml
<roma:PhysicalCube   id="_cube" name="Cube Query linked Tables" query="roma:TableQuery _query_Fact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _col_fact_townId" dimension="roma:StandardDimension _dim_town"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure" name="theMeasure" column="roma:PhysicalColumn _col_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```


## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog name="Hierarchy - Query based on Join" cubes="_cube" dbschemas="_dbschema"/>
  <roma:DatabaseSchema id="_dbschema">
    <tables xsi:type="roma:PhysicalTable" id="_tab_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_townId" name="TOWN_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_value" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_town" name="Town">
      <columns xsi:type="roma:PhysicalColumn" id="_col_town_id" name="ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_town_name" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_town_countryid" name="COUNTRY_ID" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_country" name="Country">
      <columns xsi:type="roma:PhysicalColumn" id="_col_country_id" name="ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_country_name" name="NAME"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_LevelTown" table="_tab_town"/>
  <roma:TableQuery id="_query_LevelCountry" table="_tab_country"/>
  <roma:TableQuery id="_query_Fact" table="_tab_fact"/>
  <roma:JoinQuery id="_query_LevelTownToCountry">
    <left key="_col_town_id" query="_query_LevelTown"/>
    <right key="_col_country_id" query="_query_LevelCountry"/>
  </roma:JoinQuery>
  <roma:Level id="_level_country" name="County" column="_col_country_id" nameColumn="_col_country_name"/>
  <roma:Level id="_level_town" name="Town" column="_col_town_id" nameColumn="_col_town_name"/>
  <roma:Hierarchy id="_hierarchy_town" name="TownHierarchy" levels="_level_town _level_country" primaryKey="_col_town_id" query="_query_LevelTownToCountry"/>
  <roma:StandardDimension id="_dim_town" name="Town" hierarchies="_hierarchy_town"/>
  <roma:PhysicalCube id="_cube" name="Cube Query linked Tables" query="_query_Fact">
    <dimensionConnectors foreignKey="_col_fact_townId" dimension="_dim_town"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure" name="theMeasure" column="_col_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cube.hierarchy.query.join.base.zip" download>Download Zip File</a>
