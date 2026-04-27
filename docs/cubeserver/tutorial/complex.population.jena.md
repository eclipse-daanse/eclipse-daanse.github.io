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
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_bev_lkerung" name="Bev&#xf6;lkerung" query="_tablesource_einwohner"/>
  <relational:Table xmi:id="_table_einwohner" name="einwohner">
    <feature xsi:type="relational:Column" xmi:id="_column_einwohner_jahr" name="JAHR"/>
    <feature xsi:type="relational:Column" xmi:id="_column_einwohner_statbez" name="STATBEZ"/>
    <feature xsi:type="relational:Column" xmi:id="_column_einwohner_ker_gesch" name="KER_GESCH"/>
    <feature xsi:type="relational:Column" xmi:id="_column_einwohner_age" name="AGE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_einwohner_anzahl" name="Anzahl"/>
    <feature xsi:type="relational:Column" xmi:id="_column_einwohner_geojson" name="GEOJSON"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_einwohner" table="_table_einwohner"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Jahr Dimension

Die Jahr-Dimension ermöglicht zeitliche Analysen der Bevölkerungsentwicklung
über verschiedene Jahre hinweg für Trendanalysen und Vergleiche.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:TimeDimension xmi:id="_timedimension_jahr" name="Jahr" hierarchies="_explicithierarchy_jahr"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_jahr" name="Jahr" defaultMember="2023" hasAll="false" primaryKey="_column_year_year" query="_tablesource_year" levels="_level_jahr"/>
  <rolaplev:Level xmi:id="_level_jahr" name="Jahr" column="_column_year_year" type="TimeYears">
    <ordinalColumns xmi:id="_orderedcolumn_ordinal" column="_column_year_ordinal"/>
  </rolaplev:Level>
  <rolapsrc:TableSource xmi:id="_tablesource_year" table="_table_year"/>
  <relational:Table xmi:id="_table_year" name="year">
    <feature xsi:type="relational:Column" xmi:id="_column_year_year" name="year"/>
    <feature xsi:type="relational:Column" xmi:id="_column_year_ordinal" name="ordinal"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Geografie Dimension

Die Geografie-Dimension stellt die administrative und statistische Gliederung
der Stadt Jena dar mit Hierarchie von Stadt über Planungsräume zu statistischen Bezirken.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_statistischer_bezirk" name="statistischer Bezirk" hierarchies="_explicithierarchy_stadt_planungsraum_statistischer_bezirk"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_townid" query="_tablesource_plraum">
      <key href="_column_plraum_townid"/>
    </left>
    <right xmi:id="_joinedqueryelement_id" key="_column_town_id" query="_tablesource_town"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_stadt" name="Stadt" column="_column_town_name">
    <memberProperties xmi:id="_memberproperty_geojson" name="GeoJson" column="_column_town_geojson" propertyType="String"/>
  </rolaplev:Level>
  <relational:Table xmi:id="_table_town" name="town">
    <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_town_geojson" name="geojson"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_stadt_planungsraum_statistischer_bezirk" name="Stadt - Planungsraum - statistischer Bezirk" allMemberName="Alle Gebiete" primaryKey="_column_statbez_gid" query="_joinsource_1" levels="_level_stadt _level_planungsraum _level_statistischer_bezirk"/>
  <rolaplev:Level xmi:id="_level_planungsraum" name="Planungsraum" columnType="Integer">
    <memberProperties xmi:id="_memberproperty_uuid" name="uuid">
      <column href="_column_plraum_uuid"/>
    </memberProperties>
    <memberProperties xmi:id="_memberproperty_geojson_1" name="GeoJson" propertyType="String">
      <column href="_column_plraum_geojson"/>
    </memberProperties>
    <column href="_column_plraum_gid"/>
    <nameColumn href="_column_plraum_plraum"/>
  </rolaplev:Level>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_plraum" key="_column_statbez_plraum" query="_tablesource_statbez"/>
    <right xmi:id="_joinedqueryelement_gid" query="_joinsource">
      <key href="_column_plraum_gid"/>
    </right>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_plraum" table="_table_plraum"/>
  <rolapsrc:TableSource xmi:id="_tablesource_statbez" table="_table_statbez"/>
  <relational:Table xmi:id="_table_plraum" name="plraum">
    <feature xsi:type="relational:Column" xmi:id="_column_plraum_gid" name="gid"/>
    <feature xsi:type="relational:Column" xmi:id="_column_plraum_plraum" name="plraum"/>
    <feature xsi:type="relational:Column" xmi:id="_column_plraum_uuid" name="uuid"/>
    <feature xsi:type="relational:Column" xmi:id="_column_plraum_geojson" name="geojson"/>
    <feature xsi:type="relational:Column" xmi:id="_column_plraum_townid" name="townid"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_statistischer_bezirk" name="Statistischer Bezirk" column="_column_statbez_gid" nameColumn="_column_statbez_statbez_name" columnType="Integer">
    <memberProperties xmi:id="_memberproperty_uuid_1" name="uuid" column="_column_statbez_uuid"/>
    <memberProperties xmi:id="_memberproperty_geojson_2" name="GeoJson" column="_column_statbez_geojson" propertyType="String"/>
  </rolaplev:Level>
  <relational:Table xmi:id="_table_statbez" name="statbez">
    <feature xsi:type="relational:Column" xmi:id="_column_statbez_gid" name="gid"/>
    <feature xsi:type="relational:Column" xmi:id="_column_statbez_plraum" name="plraum"/>
    <feature xsi:type="relational:Column" xmi:id="_column_statbez_statbez_name" name="statbez_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_statbez_uuid" name="uuid"/>
    <feature xsi:type="relational:Column" xmi:id="_column_statbez_geojson" name="geojson"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Geschlecht Dimension

Die Geschlecht-Dimension ermöglicht geschlechtsspezifische demografische Analysen
mit Kategorien männlich, weiblich und divers.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_geschlecht" name="Geschlecht" hierarchies="_explicithierarchy_geschlecht_m_w_d"/>
  <rolapsrc:TableSource xmi:id="_tablesource_gender" table="_table_gender"/>
  <relational:Table xmi:id="_table_gender" name="gender">
    <feature xsi:type="relational:Column" xmi:id="_column_gender_key" name="key"/>
    <feature xsi:type="relational:Column" xmi:id="_column_gender_name" name="name"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_geschlecht_m_w_d" name="Geschlecht (m/w/d)" allMemberName="Alle Geschlechter" primaryKey="_column_gender_key" query="_tablesource_gender" levels="_level_geschlecht"/>
  <rolaplev:Level xmi:id="_level_geschlecht" name="Geschlecht" column="_column_gender_key" nameColumn="_column_gender_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Alter Dimension

Die Alter-Dimension bietet verschiedene Altersgruppierungen für demografische Analysen,
einschließlich Einzeljahrgänge und verschiedene Gruppierungssysteme für unterschiedliche Analysezwecke.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_alter" name="Alter" hierarchies="_explicithierarchy_alter_einzeljahrg_nge _explicithierarchy_altersgruppen_standard _explicithierarchy_altersgruppen_kinder _explicithierarchy_altersgruppen_systematik_rki_h7 _explicithierarchy_altersgruppen_systematik_rki_h8 _explicithierarchy_altersgruppen_10_jahres_gruppen"/>
  <rolaplev:Level xmi:id="_level_alter" name="Alter" column="_column_agegroups_age"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_altersgruppen_10_jahres_gruppen" name="Altersgruppen (10-Jahres-Gruppen)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_alter_10"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_alter_einzeljahrg_nge" name="Alter (Einzeljahrg&#xe4;nge)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_alter"/>
  <rolaplev:Level xmi:id="_level_alter_h8" name="Alter H8" column="_column_agegroups_age"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_altersgruppen_standard" name="Altersgruppen (Standard)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_altersgruppe_1 _level_alter_standard"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_altersgruppen_systematik_rki_h8" name="Altersgruppen (Systematik RKI H8)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_alter_h8"/>
  <rolaplev:Level xmi:id="_level_alter_10" name="Alter 10" column="_column_agegroups_age"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_altersgruppen_systematik_rki_h7" name="Altersgruppen (Systematik RKI H7)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_alter_h7"/>
  <relational:Table xmi:id="_table_agegroups" name="AgeGroups">
    <feature xsi:type="relational:Column" xmi:id="_column_agegroups_age" name="Age"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h1" name="H1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h1_order" name="H1_Order"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h2" name="H2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h2_order" name="H2_Order"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h7" name="H7"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h7_order" name="H7_Order"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h8" name="H8"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h8_order" name="H8_Order"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h9" name="H9"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h9_order" name="H9_Order"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_altersgruppen_kinder" name="Altersgruppen (Kinder)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_altersgruppe _level_alter_kinder"/>
  <rolaplev:Level xmi:id="_level_alter_kinder" name="Alter Kinder" column="_column_agegroups_age"/>
  <rolapsrc:TableSource xmi:id="_tablesource_agegroups" table="_table_agegroups"/>
  <rolaplev:Level xmi:id="_level_alter_h7" name="Alter H7" column="_column_agegroups_age"/>
  <rolaplev:Level xmi:id="_level_alter_standard" name="Alter Standard" column="_column_agegroups_age"/>
  <rolaplev:Level xmi:id="_level_altersgruppe" name="Altersgruppe" column="_column_agegroups_h2">
    <ordinalColumns xmi:id="_orderedcolumn_h2_order" column="_column_agegroups_h2_order"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_altersgruppe_1" name="Altersgruppe" column="_column_agegroups_h1">
    <ordinalColumns xmi:id="_orderedcolumn_h1_order" column="_column_agegroups_h1_order"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_einwohner_ker_gesch _column_plraum_uuid _column_einwohner_geojson _column_gender_name _column_town_geojson _column_plraum_plraum _column_statbez_geojson _column_statbez_statbez_name _column_agegroups_h7 _column_agegroups_h1 _column_agegroups_h2 _column_gender_key _column_town_name _column_plraum_geojson _column_statbez_uuid _column_agegroups_h9 _column_agegroups_h8" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_year_ordinal _column_agegroups_h7_order _column_einwohner_statbez _column_einwohner_anzahl _column_plraum_townid _column_town_id _column_einwohner_jahr _column_agegroups_age _column_agegroups_h1_order _column_statbez_gid _column_statbez_plraum _column_year_year _column_einwohner_age _column_agegroups_h9_order _column_agegroups_h8_order _column_plraum_gid _column_agegroups_h2_order" typeNumber="4"/>
  <rolapcat:Catalog xmi:id="_catalog_bev_lkerung" name="Bevölkerung" cubes="_physicalcube_bev_lkerung" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_einwohner" name="einwohner">
      <feature xsi:type="relational:Column" xmi:id="_column_einwohner_jahr" name="JAHR" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_einwohner_statbez" name="STATBEZ" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_einwohner_ker_gesch" name="KER_GESCH" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_einwohner_age" name="AGE" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_einwohner_anzahl" name="Anzahl" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_einwohner_geojson" name="GEOJSON" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_year" name="year">
      <feature xsi:type="relational:Column" xmi:id="_column_year_year" name="year" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_year_ordinal" name="ordinal" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_town" name="town">
      <feature xsi:type="relational:Column" xmi:id="_column_town_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_name" name="name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_town_geojson" name="geojson" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_plraum" name="plraum">
      <feature xsi:type="relational:Column" xmi:id="_column_plraum_gid" name="gid" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_plraum_plraum" name="plraum" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_plraum_uuid" name="uuid" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_plraum_geojson" name="geojson" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_plraum_townid" name="townid" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_statbez" name="statbez">
      <feature xsi:type="relational:Column" xmi:id="_column_statbez_gid" name="gid" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_statbez_plraum" name="plraum" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_statbez_statbez_name" name="statbez_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_statbez_uuid" name="uuid" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_statbez_geojson" name="geojson" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_gender" name="gender">
      <feature xsi:type="relational:Column" xmi:id="_column_gender_key" name="key" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_gender_name" name="name" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_agegroups" name="AgeGroups">
      <feature xsi:type="relational:Column" xmi:id="_column_agegroups_age" name="Age" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h1" name="H1" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h1_order" name="H1_Order" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h2" name="H2" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h2_order" name="H2_Order" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h7" name="H7" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h7_order" name="H7_Order" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h8" name="H8" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h8_order" name="H8_Order" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h9" name="H9" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agegroups_h9_order" name="H9_Order" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_year" table="_table_year"/>
  <rolapsrc:TableSource xmi:id="_tablesource_agegroups" table="_table_agegroups"/>
  <rolapsrc:TableSource xmi:id="_tablesource_gender" table="_table_gender"/>
  <rolapsrc:TableSource xmi:id="_tablesource_einwohner" table="_table_einwohner"/>
  <rolapsrc:TableSource xmi:id="_tablesource_statbez" table="_table_statbez"/>
  <rolapsrc:TableSource xmi:id="_tablesource_plraum" table="_table_plraum"/>
  <rolapsrc:TableSource xmi:id="_tablesource_town" table="_table_town"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_plraum" key="_column_statbez_plraum" query="_tablesource_statbez"/>
    <right xmi:id="_joinedqueryelement_gid" key="_column_plraum_gid" query="_joinsource_1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_townid" key="_column_plraum_townid" query="_tablesource_plraum"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_town_id" query="_tablesource_town"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_alter_standard" name="Alter Standard" column="_column_agegroups_age"/>
  <rolaplev:Level xmi:id="_level_alter_kinder" name="Alter Kinder" column="_column_agegroups_age"/>
  <rolaplev:Level xmi:id="_level_alter_h8" name="Alter H8" column="_column_agegroups_age"/>
  <rolaplev:Level xmi:id="_level_altersgruppe" name="Altersgruppe" column="_column_agegroups_h2">
    <ordinalColumns xmi:id="_orderedcolumn_h2_order" column="_column_agegroups_h2_order"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_altersgruppe_1" name="Altersgruppe" column="_column_agegroups_h1">
    <ordinalColumns xmi:id="_orderedcolumn_h1_order" column="_column_agegroups_h1_order"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_planungsraum" name="Planungsraum" column="_column_plraum_gid" nameColumn="_column_plraum_plraum" columnType="Integer">
    <memberProperties xmi:id="_memberproperty_uuid_1" name="uuid" column="_column_plraum_uuid"/>
    <memberProperties xmi:id="_memberproperty_geojson_1" name="GeoJson" column="_column_plraum_geojson" propertyType="String"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_alter_h7" name="Alter H7" column="_column_agegroups_age"/>
  <rolaplev:Level xmi:id="_level_alter" name="Alter" column="_column_agegroups_age"/>
  <rolaplev:Level xmi:id="_level_alter_10" name="Alter 10" column="_column_agegroups_age"/>
  <rolaplev:Level xmi:id="_level_stadt" name="Stadt" column="_column_town_name">
    <memberProperties xmi:id="_memberproperty_geojson" name="GeoJson" column="_column_town_geojson" propertyType="String"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_geschlecht" name="Geschlecht" column="_column_gender_key" nameColumn="_column_gender_name"/>
  <rolaplev:Level xmi:id="_level_statistischer_bezirk" name="Statistischer Bezirk" column="_column_statbez_gid" nameColumn="_column_statbez_statbez_name" columnType="Integer">
    <memberProperties xmi:id="_memberproperty_uuid" name="uuid" column="_column_statbez_uuid"/>
    <memberProperties xmi:id="_memberproperty_geojson_2" name="GeoJson" column="_column_statbez_geojson" propertyType="String"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_jahr" name="Jahr" column="_column_year_year" type="TimeYears">
    <ordinalColumns xmi:id="_orderedcolumn_ordinal" column="_column_year_ordinal"/>
  </rolaplev:Level>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_altersgruppen_10_jahres_gruppen" name="Altersgruppen (10-Jahres-Gruppen)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_alter_10"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_geschlecht_m_w_d" name="Geschlecht (m/w/d)" allMemberName="Alle Geschlechter" primaryKey="_column_gender_key" query="_tablesource_gender" levels="_level_geschlecht"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_jahr" name="Jahr" defaultMember="2023" hasAll="false" primaryKey="_column_year_year" query="_tablesource_year" levels="_level_jahr"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_altersgruppen_kinder" name="Altersgruppen (Kinder)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_altersgruppe _level_alter_kinder"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_stadt_planungsraum_statistischer_bezirk" name="Stadt - Planungsraum - statistischer Bezirk" allMemberName="Alle Gebiete" primaryKey="_column_statbez_gid" query="_joinsource" levels="_level_stadt _level_planungsraum _level_statistischer_bezirk"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_alter_einzeljahrg_nge" name="Alter (Einzeljahrgänge)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_alter"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_altersgruppen_standard" name="Altersgruppen (Standard)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_altersgruppe_1 _level_alter_standard"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_altersgruppen_systematik_rki_h7" name="Altersgruppen (Systematik RKI H7)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_alter_h7"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_altersgruppen_systematik_rki_h8" name="Altersgruppen (Systematik RKI H8)" allMemberName="Alle Altersgruppen" primaryKey="_column_agegroups_age" query="_tablesource_agegroups" levels="_level_alter_h8"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_geschlecht" name="Geschlecht" hierarchies="_explicithierarchy_geschlecht_m_w_d"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_alter" name="Alter" hierarchies="_explicithierarchy_alter_einzeljahrg_nge _explicithierarchy_altersgruppen_standard _explicithierarchy_altersgruppen_kinder _explicithierarchy_altersgruppen_systematik_rki_h7 _explicithierarchy_altersgruppen_systematik_rki_h8 _explicithierarchy_altersgruppen_10_jahres_gruppen"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_statistischer_bezirk" name="statistischer Bezirk" hierarchies="_explicithierarchy_stadt_planungsraum_statistischer_bezirk"/>
  <rolapdim:TimeDimension xmi:id="_timedimension_jahr" name="Jahr" hierarchies="_explicithierarchy_jahr"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_bev_lkerung" name="Bevölkerung" query="_tablesource_einwohner">
    <dimensionConnectors xmi:id="_dimensionconnector_jahr" foreignKey="_column_einwohner_jahr" dimension="_timedimension_jahr" overrideDimensionName="Jahr"/>
    <dimensionConnectors xmi:id="_dimensionconnector_statistischer_bezirk" foreignKey="_column_einwohner_statbez" dimension="_standarddimension_statistischer_bezirk" overrideDimensionName="statistischer Bezirk"/>
    <dimensionConnectors xmi:id="_dimensionconnector_geschlecht" foreignKey="_column_einwohner_ker_gesch" dimension="_standarddimension_geschlecht" overrideDimensionName="Geschlecht"/>
    <dimensionConnectors xmi:id="_dimensionconnector_alter" foreignKey="_column_einwohner_age" dimension="_standarddimension_alter" overrideDimensionName="Alter"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_einwohnerzahl" name="Einwohnerzahl" formatString="#,###" column="_column_einwohner_anzahl"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.population.jena.zip" download>Download Zip File</a>
