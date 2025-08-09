---
title: Schulwesen
group: Full Examples
kind: COMPLEX
number: 99.1.1
---

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY5" name="Altersgruppen" allMemberName="Alle Altersgruppen" primaryKey="_col_alters_gruppe_id" query="_query_ALTERS_GRUPPE_TABLE_QUERY" levels="_level_LEVEL11"/>
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY10" name="Schulabschlüsse" allMemberName="Gesamt" primaryKey="_col_schul_abschluss_id" query="_query_SCHUL_ABSCHLUSS_TABLE_QUERY" levels="_level_LEVEL16"/>
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY3" name="Schulen nach Art" allMemberName="Alle Schulen" primaryKey="_col_schule_id" query="_join_JOIN3" levels="_level_LEVEL7 _level_LEVEL8 _level_LEVEL9"/>
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY6" name="Geschlecht" allMemberName="Alle Geschlechter" primaryKey="_col_geschlecht_id" query="_query_GESCHLECHT_TABLE_QUERY" levels="_level_LEVEL12"/>
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY8" name="Einschulung" allMemberName="Gesamt" primaryKey="_col_einschulung_id" query="_query_EINSCHULUNG_TABLE_QUERY" levels="_level_LEVEL14"/>
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY12" name="Wohnlandkreis" allMemberName="Alle Wohnlandkreise" primaryKey="_col_wohnort_landkreis_id" query="_join_JOIN4" levels="_level_LEVEL18 _level_LEVEL19"/>
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY11" name="Migrationshintergrund" allMemberName="Gesamt" primaryKey="_col_migrations_hintergrund_id" query="_query_MIGRATIONS_HINTERGRUND_TABLE_QUERY" levels="_level_LEVEL17"/>
  <roma:ExplicitHierarchy name="Sonderpädagogische Förderung" allMemberName="Gesamt" primaryKey="_col_foerderung_art_id" query="_join_JOIN5" levels="_level_LEVEL20 _level_LEVEL21"/>
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY9" name="Klassenwiederholung" allMemberName="Gesamt" primaryKey="_col_klassen_wiederholung_id" query="_query_KLASSEN_WIEDERHOLUNG_TABLE_QUERY" levels="_level_LEVEL15"/>
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY2" name="Schulen nach Trägerschaft" allMemberName="Alle Schulen" primaryKey="_col_schule_id" query="_join_JOIN2" levels="_level_LEVEL3 _level_LEVEL4 _level_LEVEL5 _level_LEVEL6"/>
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY7" name="Berufsgruppen" allMemberName="Alle Berufsgruppen" primaryKey="_col_personal_art_id" query="_query_PERSONAL_ART_TABLE_QUERY" levels="_level_LEVEL13"/>
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY1" name="Schulen nach Ganztagsangebot" allMemberName="Alle Schulen" primaryKey="_col_schule_id" query="_join_JOIN1" levels="_level_LEVEL1 _level_LEVEL2"/>
  <roma:ExplicitHierarchy id="_hierarchy_HIERARCHY4" name="Schuljahre" hasAll="false" primaryKey="_col_schul_jahr_id" query="_query_SCHUL_JAHT_TABLE_QUERY" levels="_level_LEVEL10"/>
  <roma:Catalog id="_catalog_Schulwesen" name="Schulwesen" cubes="_cube_CUBE1 _cube_CUBE2 _cube_CUBE3" dbschemas="_databaseSchema"/>
  <roma:DatabaseSchema id="_databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_tab_schule" name="schule">
      <columns xsi:type="roma:PhysicalColumn" id="_col_schule_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_schule_schul_name" name="schul_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_schule_schul_nummer" name="schul_nummer" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_schule_ganztags_art_id" name="ganztags_art_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_schule_traeger_id" name="traeger_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_schule_schul_art_id" name="schul_art_id" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_ganztags_art" name="ganztags_art">
      <columns xsi:type="roma:PhysicalColumn" id="_col_ganztags_art_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_ganztags_art_schul_umfang" name="schul_umfang"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_traeger" name="traeger">
      <columns xsi:type="roma:PhysicalColumn" id="_col_traeger_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_traeger_traeger_name" name="traeger_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_traeger_traeger_art_id" name="traeger_art_id" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_traeger_art" name="traeger_art">
      <columns xsi:type="roma:PhysicalColumn" id="_col_traeger_art_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_traeger_art_traeger_art" name="traeger_art"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_traeger_art_traeger_kat_id" name="traeger_kat_id"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_traeger_kategorie" name="traeger_kategorie">
      <columns xsi:type="roma:PhysicalColumn" id="_col_traeger_kategorie_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_traeger_kategorie_traeger_kategorie" name="traeger_kategorie"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_schul_art" name="schul_art">
      <columns xsi:type="roma:PhysicalColumn" id="_col_schul_art_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_schul_art_schul_kategorie_id" name="schul_kategorie_id" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_schul_jahr" name="schul_jahr">
      <columns xsi:type="roma:PhysicalColumn" id="_col_schul_jahr_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_schul_jahr_schul_jahr" name="schul_jahr"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_schul_jahr_order" name="order" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_col_alters_gruppe" name="alters_gruppe">
      <columns xsi:type="roma:PhysicalColumn" id="_col_alters_gruppe_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_alters_gruppe_altersgruppe" name="altersgruppe" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_geschlecht" name="geschlecht">
      <columns xsi:type="roma:PhysicalColumn" id="_col_geschlecht_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_geschlecht_bezeichnung" name="bezeichnung" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_einschulung" name="einschulung">
      <columns xsi:type="roma:PhysicalColumn" id="_col_einschulung_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_einschulung_einschulung" name="einschulung"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_klassen_wiederholung" name="klassen_wiederholung">
      <columns xsi:type="roma:PhysicalColumn" id="_col_klassen_wiederholung_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_klassen_wiederholung_klassenwiederholung" name="klassenwiederholung" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_schul_abschluss" name="schul_abschluss">
      <columns xsi:type="roma:PhysicalColumn" id="_col_schul_abschluss_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_schul_abschluss_schulabschluss" name="schulabschluss"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_migrations_hintergrund" name="migrations_hintergrund">
      <columns xsi:type="roma:PhysicalColumn" id="_col_migrations_hintergrund_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_migrations_hintergrund_migrations_hintergrund" name="migrations_hintergrund"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_wohnort_landkreis" name="wohnort_landkreis">
      <columns xsi:type="roma:PhysicalColumn" id="_col_wohnort_landkreis_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_wohnort_landkreis_bezeichnung" name="bezeichnung"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_wohnort_landkreis_bundesland_id" name="bundesland_id" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_schul_art" name="schul_art">
      <columns xsi:type="roma:PhysicalColumn" id="_col_schul_art_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_schul_art_schulart_name" name="schulart_name"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_schul_kategorie" name="schul_kategorie">
      <columns xsi:type="roma:PhysicalColumn" id="_col_schul_kategorie_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_schul_kategorie_schul_kategorie_name" name="schul_kategorie_name"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_foerderung_art" name="foerderung_art">
      <columns xsi:type="roma:PhysicalColumn" id="_col_foerderung_art_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_foerderung_art_foerderung_art" name="foerderung_art"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_foerderung_art_sp_foerderbedarf_id" name="sp_foerderbedarf_id" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_personal_art" name="personal_art">
      <columns xsi:type="roma:PhysicalColumn" id="_col_personal_art_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_personal_art_bezeichnung" name="bezeichnung"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_bundesland" name="bundesland">
      <columns xsi:type="roma:PhysicalColumn" id="_col_bundesland_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_bundesland_bezeichnung" name="bezeichnung"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_sonderpaed_foerderbedarf" name="sonderpaed_foerderbedarf">
      <columns xsi:type="roma:PhysicalColumn" id="_col_sonderpaed_foerderbedarf_id" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_sonderpaed_foerderbedarf_sonderpaed_bedarf" name="sonderpaed_bedarf"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_fact_schulen" name="fact_schulen">
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schulen_schule_id" name="schule_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schulen_schul_jahr_id" name="schul_jahr_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schulen_anzahl_schulen" name="anzahl_schulen" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schulen_anzahl_klassen" name="anzahl_klassen" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_fact_personal" name="fact_personal">
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_personal_schule_id" name="schule_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_personal_schul_jahr_id" name="schul_jahr_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_personal_alters_gruppe_id" name="alters_gruppe_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_personal_geschlecht_id" name="geschlecht_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_personal_personal_art_id" name="personal_art_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_personal_anzahl_personen" name="anzahl_personen" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_tab_fact_schueler" name="fact_schueler">
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schueler_schule_id" name="schule_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schueler_schul_jahr_id" name="schul_jahr_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schueler_geschlecht_id" name="geschlecht_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schueler_wohn_lk_id" name="wohn_lk_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schueler_einschulung_id" name="einschulung_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schueler_schul_abschluss_id" name="schul_abschluss_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schueler_klassen_wdh" name="klassen_wdh" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schueler_migrations_hg_id" name="migrations_hg_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schueler_foerder_art_id" name="foerder_art_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_col_fact_schueler_anzahl_schueler" name="anzahl_schueler" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_FACT_SCHUELER_TABLE_QUERY" table="_tab_fact_schueler"/>
  <roma:TableQuery id="_query_EINSCHULUNG_TABLE_QUERY" table="_tab_einschulung"/>
  <roma:TableQuery id="_query_MIGRATIONS_HINTERGRUND_TABLE_QUERY" table="_tab_migrations_hintergrund"/>
  <roma:TableQuery id="_query_ALTERS_GRUPPE_TABLE_QUERY" table="_col_alters_gruppe"/>
  <roma:TableQuery id="_query_FACT_PERSONAM_TABLE_QUERY" table="_tab_fact_personal"/>
  <roma:TableQuery id="_query_KLASSEN_WIEDERHOLUNG_TABLE_QUERY" table="_tab_klassen_wiederholung"/>
  <roma:TableQuery id="_query_SCHUL_ABSCHLUSS_TABLE_QUERY" table="_tab_schul_abschluss"/>
  <roma:TableQuery id="_query_SCHUL_JAHT_TABLE_QUERY" table="_tab_schul_jahr"/>
  <roma:TableQuery id="_query_SONDERPAED_FOERDERBEDART_TABLE_QUERY" table="_tab_sonderpaed_foerderbedarf"/>
  <roma:TableQuery id="_query_TRAEGER_TABLE_QUERY" table="_tab_traeger"/>
  <roma:TableQuery id="_query_TRAEGER_ART_TABLE_QUERY" table="_tab_traeger_art"/>
  <roma:TableQuery id="_query_SCHEDULE_KATEGORIE_TABLE_QUERY" table="_tab_schul_kategorie"/>
  <roma:TableQuery id="_query_SCHEDULE_ART_TABLE_QUERY" table="_tab_schul_art"/>
  <roma:TableQuery id="_query_FACT_SCHULEN_TABLE_QUERY" table="_tab_fact_schulen"/>
  <roma:TableQuery id="_query_GANZTAGS_ART_TABLE_QUERY" table="_tab_ganztags_art"/>
  <roma:TableQuery id="_query_FOERDERUNG_ART_TABLE_QUERY" table="_tab_foerderung_art"/>
  <roma:TableQuery id="_SCHEDULE_TABLE_QUERY" table="_tab_schule"/>
  <roma:TableQuery id="_query_GESCHLECHT_TABLE_QUERY" table="_tab_geschlecht"/>
  <roma:TableQuery id="_query_WOHNORT_LANDKREIS_TABLE_QUERY" table="_tab_wohnort_landkreis"/>
  <roma:TableQuery id="_query_PERSONAL_ART_TABLE_QUERY" table="_tab_personal_art"/>
  <roma:TableQuery id="_query_TRAEGER_KATEGORIE_TABLE_QUERY" table="_tab_traeger_kategorie"/>
  <roma:TableQuery id="_query_BUNDESLAND_TABLE_QUERY" table="_tab_bundesland"/>
  <roma:JoinQuery id="_join_JOIN1">
    <left key="_col_schule_ganztags_art_id" query="_SCHEDULE_TABLE_QUERY"/>
    <right key="_col_ganztags_art_id" query="_query_GANZTAGS_ART_TABLE_QUERY"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_JOIN2_1_1">
    <left key="_col_traeger_art_traeger_kat_id" query="_query_TRAEGER_ART_TABLE_QUERY"/>
    <right key="_col_traeger_kategorie_id" query="_query_TRAEGER_KATEGORIE_TABLE_QUERY"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_JOIN2">
    <left key="_col_schule_traeger_id" query="_SCHEDULE_TABLE_QUERY"/>
    <right key="_col_traeger_id" query="_join_JOIN2_1"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_JOIN3">
    <left key="_col_schule_schul_art_id" query="_SCHEDULE_TABLE_QUERY"/>
    <right key="_col_schul_art_id" query="_join_JOIN3_1"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_JOIN5">
    <left key="_col_foerderung_art_sp_foerderbedarf_id" query="_query_FOERDERUNG_ART_TABLE_QUERY"/>
    <right key="_col_sonderpaed_foerderbedarf_id" query="_query_SONDERPAED_FOERDERBEDART_TABLE_QUERY"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_JOIN3_1">
    <left key="_col_schul_art_schul_kategorie_id" query="_query_SCHEDULE_ART_TABLE_QUERY"/>
    <right key="_col_schul_kategorie_id" query="_query_SCHEDULE_KATEGORIE_TABLE_QUERY"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_JOIN2_1">
    <left key="_col_traeger_traeger_art_id" query="_query_TRAEGER_TABLE_QUERY"/>
    <right key="_col_traeger_art_id" query="_join_JOIN2_1_1"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_JOIN4">
    <left key="_col_wohnort_landkreis_bundesland_id" query="_query_WOHNORT_LANDKREIS_TABLE_QUERY"/>
    <right key="_col_bundesland_id" query="_query_BUNDESLAND_TABLE_QUERY"/>
  </roma:JoinQuery>
  <roma:Level id="_level_LEVEL5" name="Schulträger" column="_col_traeger_id" nameColumn="_col_traeger_traeger_name"/>
  <roma:Level id="_level_LEVEL20" name="Förderbedarf" column="_col_sonderpaed_foerderbedarf_id" nameColumn="_col_sonderpaed_foerderbedarf_sonderpaed_bedarf"/>
  <roma:Level id="_level_LEVEL4" name="Schulträger-Art" column="_col_traeger_art_id" nameColumn="_col_traeger_art_traeger_art"/>
  <roma:Level id="_level_LEVEL7" name="Schulkategorie" column="_col_schul_kategorie_id" nameColumn="_col_schul_kategorie_schul_kategorie_name"/>
  <roma:Level id="_level_LEVEL21" name="Art der Förderung" column="_col_foerderung_art_id" nameColumn="_col_foerderung_art_foerderung_art"/>
  <roma:Level id="_level_LEVEL16" name="Schulabschlüsse" column="_col_schul_abschluss_id" nameColumn="_col_schul_abschluss_schulabschluss"/>
  <roma:Level id="_level_LEVEL14" name="Einschulung" column="_col_einschulung_id" nameColumn="_col_einschulung_einschulung"/>
  <roma:Level id="_level_LEVEL6" name="Schule" column="_col_schule_id" nameColumn="_col_schule_schul_name" ordinalColumn="_col_schule_schul_nummer"/>
  <roma:Level id="_level_LEVEL13" name="Berufsgruppe" column="_col_personal_art_id" nameColumn="_col_personal_art_bezeichnung"/>
  <roma:Level id="_level_LEVEL9" name="Schule" column="_col_schule_id" nameColumn="_col_schule_schul_name" ordinalColumn="_col_schule_schul_nummer"/>
  <roma:Level id="_level_LEVEL10" name="Schuljahr" column="_col_schul_jahr_id" nameColumn="_col_schul_jahr_schul_jahr" ordinalColumn="_col_schul_jahr_order"/>
  <roma:Level id="_level_LEVEL18" name="Bundesland" column="_col_bundesland_id" nameColumn="_col_bundesland_bezeichnung"/>
  <roma:Level id="_level_LEVEL1" name="Art des Ganztagsangebots" column="_col_ganztags_art_id" nameColumn="_col_ganztags_art_schul_umfang"/>
  <roma:Level id="_level_LEVEL12" name="Geschlecht" column="_col_geschlecht_id" nameColumn="_col_geschlecht_bezeichnung"/>
  <roma:Level id="_level_LEVEL15" name="Klassenwiederholung" column="_col_klassen_wiederholung_id" nameColumn="_col_klassen_wiederholung_klassenwiederholung"/>
  <roma:Level id="_level_LEVEL17" name="Migrationshintergrund" column="_col_migrations_hintergrund_id" nameColumn="_col_migrations_hintergrund_migrations_hintergrund"/>
  <roma:Level id="_level_LEVEL3" name="Schulträger-Kategorie" column="_col_traeger_kategorie_id" nameColumn="_col_traeger_kategorie_traeger_kategorie"/>
  <roma:Level id="_level_LEVEL11" name="Altersgruppe" column="_col_alters_gruppe_id" nameColumn="_col_alters_gruppe_altersgruppe"/>
  <roma:Level id="_level_LEVEL8" name="Schulart" column="_col_schul_art_id" nameColumn="_col_schul_art_schulart_name"/>
  <roma:Level id="_level_LEVEL2" name="Schule" column="_col_schule_id" nameColumn="_col_schule_schul_name" ordinalColumn="_col_schule_schul_nummer"/>
  <roma:Level id="_level_LEVEL19" name="Wohnlandkreis" column="_col_wohnort_landkreis_id" nameColumn="_col_wohnort_landkreis_bezeichnung"/>
  <roma:StandardDimension id="_dimension_Einschulungen" name="Einschulungen" hierarchies="_hierarchy_HIERARCHY8"/>
  <roma:StandardDimension id="_dimension_Migrationshintergrund" name="Migrationshintergrund" hierarchies="_hierarchy_HIERARCHY11"/>
  <roma:StandardDimension id="_dimension_Schulen" name="Schulen" hierarchies="_hierarchy_HIERARCHY1 _hierarchy_HIERARCHY2 _hierarchy_HIERARCHY3"/>
  <roma:StandardDimension id="_dimension_Berufsgruppen_Personal" name="Berufsgruppen Personal" hierarchies="_hierarchy_HIERARCHY7"/>
  <roma:StandardDimension id="_dimension_Inklusion" name="Inklusion" hierarchies="/7"/>
  <roma:StandardDimension id="_dimension_Altersgruppen_Personal" name="Altersgruppen Personal" hierarchies="_hierarchy_HIERARCHY5"/>
  <roma:StandardDimension id="_dimension_Schuljahre" name="Schuljahre" hierarchies="_hierarchy_HIERARCHY4"/>
  <roma:StandardDimension id="_dimension_Klassenwiederholung" name="Klassenwiederholung" hierarchies="_hierarchy_HIERARCHY9"/>
  <roma:StandardDimension id="_dimension_Schulabschluss" name="Schulabschluss" hierarchies="_hierarchy_HIERARCHY10"/>
  <roma:StandardDimension id="_dimension_Wohnlandkreis" name="Wohnlandkreis" hierarchies="_hierarchy_HIERARCHY12"/>
  <roma:StandardDimension id="_dimension_Geschlecht" name="Geschlecht" hierarchies="_hierarchy_HIERARCHY6"/>
  <roma:PhysicalCube id="_cube_CUBE2" name="Pädagogisches Personal an Jenaer Schulen" query="_query_FACT_PERSONAM_TABLE_QUERY">
    <dimensionConnectors foreignKey="_col_fact_personal_schule_id" dimension="_dimension_Schulen" overrideDimensionName="Schulen"/>
    <dimensionConnectors foreignKey="_col_fact_personal_schul_jahr_id" dimension="_dimension_Schuljahre" overrideDimensionName="Schuljahr"/>
    <dimensionConnectors foreignKey="_col_fact_personal_alters_gruppe_id" dimension="_dimension_Altersgruppen_Personal" overrideDimensionName="Altersgruppe"/>
    <dimensionConnectors foreignKey="_col_fact_personal_geschlecht_id" dimension="_dimension_Geschlecht" overrideDimensionName="Geschlecht"/>
    <dimensionConnectors foreignKey="_col_fact_personal_personal_art_id" dimension="_dimension_Berufsgruppen_Personal" overrideDimensionName="Berufsgruppe"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Anzahl_Personen" name="Anzahl Personen" column="_col_fact_personal_anzahl_personen"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_CUBE1" name="Schulen in Jena (Institutionen)" query="_query_FACT_SCHULEN_TABLE_QUERY">
    <dimensionConnectors foreignKey="_col_fact_schulen_schule_id" dimension="_dimension_Schulen" overrideDimensionName="Schulen"/>
    <dimensionConnectors foreignKey="_col_fact_schulen_schul_jahr_id" dimension="_dimension_Schuljahre" overrideDimensionName="Schuljahr"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Anzahl_Schulen" name="Anzahl Schulen" column="_col_fact_schulen_anzahl_schulen"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_Anzahl_Klassen" name="Anzahl Klassen" column="_col_fact_schulen_anzahl_klassen"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_CUBE3" name="Schüler:innen an Jenaer Schulen" query="_query_FACT_SCHUELER_TABLE_QUERY">
    <dimensionConnectors foreignKey="_col_fact_schueler_schule_id" dimension="_dimension_Schulen" overrideDimensionName="Schulen"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_schul_jahr_id" dimension="_dimension_Schuljahre" overrideDimensionName="Schuljahr"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_geschlecht_id" dimension="_dimension_Geschlecht" overrideDimensionName="Geschlecht"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_wohn_lk_id" dimension="_dimension_Wohnlandkreis" overrideDimensionName="Wohnlandkreis"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_einschulung_id" dimension="_dimension_Einschulungen" overrideDimensionName="Einschulung"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_schul_abschluss_id" dimension="_dimension_Schulabschluss" overrideDimensionName="Schulabschluss"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_klassen_wdh" dimension="_dimension_Klassenwiederholung" overrideDimensionName="Klassenwiederholung"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_migrations_hg_id" dimension="_dimension_Migrationshintergrund" overrideDimensionName="Migrationshintergrund"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_foerder_art_id" dimension="_dimension_Inklusion" overrideDimensionName="Sonderpädagogische Förderung"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_Anzahl_Schuler_innen" name="Anzahl Schüler:innen" column="_col_fact_schueler_anzahl_schueler"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.school.zip" download>Download Zip File</a>
