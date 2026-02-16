---
title: Bevölkerung
group: Full Examples
kind: COMPLEX
number: 99.1.3
---
# Bevölkerung Database

Bevölkerungsstatistik Jena ist eine Beispieldatenbank für demografische Analysen der Stadt Jena.
Sie enthält Einwohnerdaten mit geografischen, zeitlichen und soziodemografischen Dimensionen
für detaillierte Bevölkerungsanalysen und Stadtplanung.


## Bevölkerungs Cube

Der Bevölkerungs-Würfel enthält Einwohnerzahlen mit demografischen und geografischen Aufschlüsselungen.
Er ermöglicht Analysen nach Stadtteilen, Altersgruppen, Geschlecht und Zeitverläufen.


```xml
<roma:PhysicalCube  id="_cube_bevoelkerung" name="Bev&#xf6;lkerung" query="_query_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Jahr Dimension

Die Jahr-Dimension ermöglicht zeitliche Analysen der Bevölkerungsentwicklung
über verschiedene Jahre hinweg für Trendanalysen und Vergleiche.


```xml
<roma:TimeDimension  id="_dimension_jahr" name="Jahr" hierarchies="roma:ExplicitHierarchy _hierarchy_jahr"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Geografie Dimension

Die Geografie-Dimension stellt die administrative und statistische Gliederung
der Stadt Jena dar mit Hierarchie von Stadt über Planungsräume zu statistischen Bezirken.


```xml
<roma:StandardDimension  id="_dimension_statistischer_bezirk" name="statistischer Bezirk" hierarchies="roma:ExplicitHierarchy _hierarchy_stadt_planungsraum_statbezirk"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Geschlecht Dimension

Die Geschlecht-Dimension ermöglicht geschlechtsspezifische demografische Analysen
mit Kategorien männlich, weiblich und divers.


```xml
<roma:StandardDimension  id="_dimension_geschlecht" name="Geschlecht" hierarchies="roma:ExplicitHierarchy _hierarchy_geschlecht"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Alter Dimension

Die Alter-Dimension bietet verschiedene Altersgruppierungen für demografische Analysen,
einschließlich Einzeljahrgänge und verschiedene Gruppierungssysteme für unterschiedliche Analysezwecke.


```xml
<roma:StandardDimension  id="_dimension_alter" name="Alter" hierarchies="roma:ExplicitHierarchy _hierarchy_alter_einzeljahrgaenge roma:ExplicitHierarchy _hierarchy_altersgruppen_standard roma:ExplicitHierarchy _hierarchy_altersgruppen_kinder roma:ExplicitHierarchy _hierarchy_altersgruppen_rki_h7 roma:ExplicitHierarchy _hierarchy_altersgruppen_rki_h8 roma:ExplicitHierarchy _hierarchy_altersgruppen_10jahre"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_population_jena" description="Bevölkerungsstatistik Jena - EMF Version" name="Bevölkerung" cubes="_cube_bevoelkerung" dbschemas="_databaseSchema_population_jena"/>
  <roma:DatabaseSchema id="_databaseSchema_population_jena">
    <tables xsi:type="roma:PhysicalTable" id="_table_einwohner" name="einwohner">
      <columns xsi:type="roma:PhysicalColumn" id="_column_einwohner_jahr" name="JAHR" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_einwohner_statbez" name="STATBEZ" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_einwohner_ker_gesch" name="KER_GESCH"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_einwohner_age" name="AGE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_einwohner_anzahl" name="Anzahl" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_einwohner_geojson" name="GEOJSON"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_year" name="year">
      <columns xsi:type="roma:PhysicalColumn" id="_column_year_year" name="year" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_year_ordinal" name="ordinal" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_town" name="town">
      <columns xsi:type="roma:PhysicalColumn" id="_column_town_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_town_name" name="name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_town_geojson" name="geojson"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_plraum" name="plraum">
      <columns xsi:type="roma:PhysicalColumn" id="_column_plraum_gid" name="gid" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_plraum_plraum" name="plraum"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_plraum_uuid" name="uuid"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_plraum_geojson" name="geojson"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_plraum_townid" name="townid" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_statbez" name="statbez">
      <columns xsi:type="roma:PhysicalColumn" id="_column_statbez_gid" name="gid" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_statbez_plraum" name="plraum" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_statbez_statbez_name" name="statbez_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_statbez_uuid" name="uuid"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_statbez_geojson" name="geojson"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_gender" name="gender">
      <columns xsi:type="roma:PhysicalColumn" id="_column_gender_key" name="key"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_gender_name" name="name"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_agegroups" name="AgeGroups">
      <columns xsi:type="roma:PhysicalColumn" id="_column_agegroups_age" name="Age" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agegroups_h1" name="H1"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agegroups_h1_order" name="H1_Order" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agegroups_h2" name="H2"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agegroups_h2_order" name="H2_Order" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agegroups_h7" name="H7"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agegroups_h7_order" name="H7_Order" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agegroups_h8" name="H8"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agegroups_h8_order" name="H8_Order" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agegroups_h9" name="H9"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agegroups_h9_order" name="H9_Order" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_agegroups" table="_table_agegroups"/>
  <roma:TableQuery id="_query_fact" table="_table_einwohner"/>
  <roma:TableQuery id="_query_gender" table="_table_gender"/>
  <roma:TableQuery id="_query_plraum" table="_table_plraum"/>
  <roma:TableQuery id="_query_statbez" table="_table_statbez"/>
  <roma:TableQuery id="_query_town" table="_table_town"/>
  <roma:TableQuery id="_query_year" table="_table_year"/>
  <roma:JoinQuery id="_joinquery_plraum_town">
    <left key="_column_plraum_townid" query="_query_plraum"/>
    <right key="_column_town_id" query="_query_town"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_joinquery_stadt_planungsraum_statbezirk">
    <left key="_column_statbez_plraum" query="_query_statbez"/>
    <right key="_column_plraum_gid" query="_joinquery_plraum_town"/>
  </roma:JoinQuery>
  <roma:Level id="_level_alter_10jahre" name="Alter 10" column="_column_agegroups_age"/>
  <roma:Level id="_level_alter_einzeljahrgaenge" name="Alter" column="_column_agegroups_age"/>
  <roma:Level id="_level_alter_kinder" name="Alter Kinder" column="_column_agegroups_age"/>
  <roma:Level id="_level_alter_rki_h7" name="Alter H7" column="_column_agegroups_age"/>
  <roma:Level id="_level_alter_rki_h8" name="Alter H8" column="_column_agegroups_age"/>
  <roma:Level id="_level_alter_standard" name="Alter Standard" column="_column_agegroups_age"/>
  <roma:Level id="_level_altersgruppe_kinder" name="Altersgruppe" column="_column_agegroups_h2" ordinalColumn="_column_agegroups_h2_order"/>
  <roma:Level id="_level_altersgruppe_standard" name="Altersgruppe" column="_column_agegroups_h1" ordinalColumn="_column_agegroups_h1_order"/>
  <roma:Level id="_level_geschlecht" name="Geschlecht" column="_column_gender_key" nameColumn="_column_gender_name"/>
  <roma:Level id="_level_jahr" name="Jahr" column="_column_year_year" type="TimeYears" ordinalColumn="_column_year_ordinal"/>
  <roma:Level id="_level_planungsraum" name="Planungsraum" column="_column_plraum_gid" nameColumn="_column_plraum_plraum" columnType="Integer">
    <memberProperties id="_property_plraum_uuid" name="uuid" column="_column_plraum_uuid"/>
    <memberProperties id="_property_plraum_geojson" name="GeoJson" column="_column_plraum_geojson" propertyType="String"/>
  </roma:Level>
  <roma:Level id="_level_stadt" name="Stadt" column="_column_town_name">
    <memberProperties id="_property_town_geojson" name="GeoJson" column="_column_town_geojson" propertyType="String"/>
  </roma:Level>
  <roma:Level id="_level_statistischer_bezirk" name="Statistischer Bezirk" column="_column_statbez_gid" nameColumn="_column_statbez_statbez_name" columnType="Integer">
    <memberProperties id="_property_statbez_uuid" name="uuid" column="_column_statbez_uuid"/>
    <memberProperties id="_property_statbez_geojson" name="GeoJson" column="_column_statbez_geojson" propertyType="String"/>
  </roma:Level>
  <roma:ExplicitHierarchy id="_hierarchy_alter_einzeljahrgaenge" name="Alter (Einzeljahrgänge)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_query_agegroups" levels="_level_alter_einzeljahrgaenge"/>
  <roma:ExplicitHierarchy id="_hierarchy_altersgruppen_10jahre" name="Altersgruppen (10-Jahres-Gruppen)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_query_agegroups" levels="_level_alter_10jahre"/>
  <roma:ExplicitHierarchy id="_hierarchy_altersgruppen_kinder" name="Altersgruppen (Kinder)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_query_agegroups" levels="_level_altersgruppe_kinder _level_alter_kinder"/>
  <roma:ExplicitHierarchy id="_hierarchy_altersgruppen_rki_h7" name="Altersgruppen (Systematik RKI H7)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_query_agegroups" levels="_level_alter_rki_h7"/>
  <roma:ExplicitHierarchy id="_hierarchy_altersgruppen_rki_h8" name="Altersgruppen (Systematik RKI H8)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_query_agegroups" levels="_level_alter_rki_h8"/>
  <roma:ExplicitHierarchy id="_hierarchy_altersgruppen_standard" name="Altersgruppen (Standard)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_query_agegroups" levels="_level_altersgruppe_standard _level_alter_standard"/>
  <roma:ExplicitHierarchy id="_hierarchy_geschlecht" name="Geschlecht (m/w/d)" allMemberName="Alle Geschlechter" primaryKey="_column_gender_key" query="_query_gender" levels="_level_geschlecht"/>
  <roma:ExplicitHierarchy id="_hierarchy_jahr" name="Jahr" defaultMember="2023" hasAll="false" primaryKey="_column_year_year" query="_query_year" levels="_level_jahr"/>
  <roma:ExplicitHierarchy id="_hierarchy_stadt_planungsraum_statbezirk" name="Stadt - Planungsraum - statistischer Bezirk" allMemberName="Alle Gebiete" primaryKey="_column_statbez_gid" query="_joinquery_stadt_planungsraum_statbezirk" levels="_level_stadt _level_planungsraum _level_statistischer_bezirk"/>
  <roma:StandardDimension id="_dimension_alter" name="Alter" hierarchies="_hierarchy_alter_einzeljahrgaenge _hierarchy_altersgruppen_standard _hierarchy_altersgruppen_kinder _hierarchy_altersgruppen_rki_h7 _hierarchy_altersgruppen_rki_h8 _hierarchy_altersgruppen_10jahre"/>
  <roma:StandardDimension id="_dimension_geschlecht" name="Geschlecht" hierarchies="_hierarchy_geschlecht"/>
  <roma:StandardDimension id="_dimension_statistischer_bezirk" name="statistischer Bezirk" hierarchies="_hierarchy_stadt_planungsraum_statbezirk"/>
  <roma:TimeDimension id="_dimension_jahr" name="Jahr" hierarchies="_hierarchy_jahr"/>
  <roma:PhysicalCube id="_cube_bevoelkerung" name="Bevölkerung" query="_query_fact">
    <dimensionConnectors foreignKey="_column_einwohner_jahr" dimension="_dimension_jahr" overrideDimensionName="Jahr" id="_connector_jahr"/>
    <dimensionConnectors foreignKey="_column_einwohner_statbez" dimension="_dimension_statistischer_bezirk" overrideDimensionName="statistischer Bezirk" id="_connector_statistischer_bezirk"/>
    <dimensionConnectors foreignKey="_column_einwohner_ker_gesch" dimension="_dimension_geschlecht" overrideDimensionName="Geschlecht" id="_connector_geschlecht"/>
    <dimensionConnectors foreignKey="_column_einwohner_age" dimension="_dimension_alter" overrideDimensionName="Alter" id="_connector_alter"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_einwohnerzahl" name="Einwohnerzahl" formatString="#,###" column="_column_einwohner_anzahl"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.population.jena.zip" download>Download Zip File</a>
