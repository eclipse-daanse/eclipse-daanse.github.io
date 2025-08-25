---
title: Daanse Example - Schulwesen
group: Full Examples
kind: COMPLEX
number: 99.1.1
---

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy_altersgruppen" name="Altersgruppen" allMemberName="Alle Altersgruppen" primaryKey="_col_alters_gruppe_id" query="_query_alters_gruppe_table_query" levels="_level_altersgruppe"/>
  <roma:ExplicitHierarchy id="_hierarchy_wohnlandkreis" name="Wohnlandkreis" allMemberName="Alle Wohnlandkreise" primaryKey="_col_wohnort_landkreis_id" query="_join_wohnlandkreis_bundesland" levels="_level_bundesland _level_wohnlandkreis"/>
  <roma:ExplicitHierarchy id="_hierarchy_klassenwiederholung" name="Klassenwiederholung" allMemberName="Gesamt" primaryKey="_col_klassen_wiederholung_id" query="_query_klassen_wiederholung_table_query" levels="_level_klassenwiederholung"/>
  <roma:ExplicitHierarchy id="_hierarchy_schulen_ganztagsangebot" name="Schulen nach Ganztagsangebot" allMemberName="Alle Schulen" primaryKey="_col_schule_id" query="_join_schule_ganztagsart" levels="_level_ganztagsangebot _level_schule_basic"/>
  <roma:ExplicitHierarchy id="_hierarchy_einschulung" name="Einschulung" allMemberName="Gesamt" primaryKey="_col_einschulung_id" query="_query_einschulung_table_query" levels="_level_einschulung"/>
  <roma:ExplicitHierarchy id="_hierarchy_berufsgruppen" name="Berufsgruppen" allMemberName="Alle Berufsgruppen" primaryKey="_col_personal_art_id" query="_query_personal_art_table_query" levels="_level_berufsgruppe"/>
  <roma:ExplicitHierarchy id="_hierarchy_migrationshintergrund" name="Migrationshintergrund" allMemberName="Gesamt" primaryKey="_col_migrations_hintergrund_id" query="_query_migrations_hintergrund_table_query" levels="_level_migrationshintergrund"/>
  <roma:ExplicitHierarchy id="_hierarchy_schuljahre" name="Schuljahre" hasAll="false" primaryKey="_col_schul_jahr_id" query="_query_schul_jaht_table_query" levels="_level_schuljahr"/>
  <roma:ExplicitHierarchy id="_hierarchy_schulen_art" name="Schulen nach Art" allMemberName="Alle Schulen" primaryKey="_col_schule_id" query="_join_schule_schulart_hierarchy" levels="_level_schulkategorie _level_schulart _level_schule_art"/>
  <roma:ExplicitHierarchy id="_hierarchy_schulabschluss" name="Schulabschlüsse" allMemberName="Gesamt" primaryKey="_col_schul_abschluss_id" query="_query_schul_abschluss_table_query" levels="_level_schulabschluss"/>
  <roma:ExplicitHierarchy id="_hierarchy_geschlecht" name="Geschlecht" allMemberName="Alle Geschlechter" primaryKey="_col_geschlecht_id" query="_query_geschlecht_table_query" levels="_level_geschlecht"/>
  <roma:ExplicitHierarchy id="_hierarchy_foerderung" name="Sonderpädagogische Förderung" allMemberName="Gesamt" primaryKey="_col_foerderung_art_id" query="_join_foerderbedarf_art" levels="_level_foerderbedarf _level_foerderung_art"/>
  <roma:ExplicitHierarchy id="_hierarchy_schulen_traegerschaft" name="Schulen nach Trägerschaft" allMemberName="Alle Schulen" primaryKey="_col_schule_id" query="_join_schule_traeger_hierarchy" levels="_level_traeger_kategorie _level_traeger_art _level_traeger _level_schule_traegerschaft"/>
  <roma:Catalog id="_catalog_schulwesen" name="Daanse Example - Schulwesen" cubes="_cube_schulen_institutionen _cube_paedagogisches_personal _cube_schueler_innen" dbschemas="_databaseschema"/>
  <roma:DatabaseSchema id="_databaseschema">
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
    <tables xsi:type="roma:PhysicalTable" id="_tab_alters_gruppe" name="alters_gruppe">
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
  <roma:TableQuery id="_query_table_schule" table="_tab_schule"/>
  <roma:TableQuery id="_query_schul_abschluss_table_query" table="_tab_schul_abschluss"/>
  <roma:TableQuery id="_query_fact_schulen_table_query" table="_tab_fact_schulen"/>
  <roma:TableQuery id="_query_migrations_hintergrund_table_query" table="_tab_migrations_hintergrund"/>
  <roma:TableQuery id="_query_schul_jaht_table_query" table="_tab_schul_jahr"/>
  <roma:TableQuery id="_query_personal_art_table_query" table="_tab_personal_art"/>
  <roma:TableQuery id="_query_foerderung_art_table_query" table="_tab_foerderung_art"/>
  <roma:TableQuery id="_query_schedule_art_table_query" table="_tab_schul_art"/>
  <roma:TableQuery id="_query_sonderpaed_foerderbedart_table_query" table="_tab_sonderpaed_foerderbedarf"/>
  <roma:TableQuery id="_query_table_ganztags_art" table="_tab_ganztags_art"/>
  <roma:TableQuery id="_query_alters_gruppe_table_query" table="_tab_alters_gruppe"/>
  <roma:TableQuery id="_query_wohnort_landkreis_table_query" table="_tab_wohnort_landkreis"/>
  <roma:TableQuery id="_query_fact_schueler_table_query" table="_tab_fact_schueler"/>
  <roma:TableQuery id="_query_schedule_kategorie_table_query" table="_tab_schul_kategorie"/>
  <roma:TableQuery id="_query_traeger_kategorie_table_query" table="_tab_traeger_kategorie"/>
  <roma:TableQuery id="_query_klassen_wiederholung_table_query" table="_tab_klassen_wiederholung"/>
  <roma:TableQuery id="_query_einschulung_table_query" table="_tab_einschulung"/>
  <roma:TableQuery id="_query_traeger_art_table_query" table="_tab_traeger_art"/>
  <roma:TableQuery id="_query_geschlecht_table_query" table="_tab_geschlecht"/>
  <roma:TableQuery id="_query_bundesland_table_query" table="_tab_bundesland"/>
  <roma:TableQuery id="_query_traeger_table_query" table="_tab_traeger"/>
  <roma:TableQuery id="_query_fact_personam_table_query" table="_tab_fact_personal"/>
  <roma:JoinQuery id="_join_foerderbedarf_art">
    <left key="_col_foerderung_art_sp_foerderbedarf_id" query="_query_foerderung_art_table_query"/>
    <right key="_col_sonderpaed_foerderbedarf_id" query="_query_sonderpaed_foerderbedart_table_query"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_traeger_kategorie_art">
    <left key="_col_traeger_art_traeger_kat_id" query="_query_traeger_art_table_query"/>
    <right key="_col_traeger_kategorie_id" query="_query_traeger_kategorie_table_query"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_traeger_art_traeger">
    <left key="_col_traeger_traeger_art_id" query="_query_traeger_table_query"/>
    <right key="_col_traeger_art_id" query="_join_traeger_kategorie_art"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_schule_traeger_hierarchy">
    <left key="_col_schule_traeger_id" query="_query_table_schule"/>
    <right key="_col_traeger_id" query="_join_traeger_art_traeger"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_wohnlandkreis_bundesland">
    <left key="_col_wohnort_landkreis_bundesland_id" query="_query_wohnort_landkreis_table_query"/>
    <right key="_col_bundesland_id" query="_query_bundesland_table_query"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_schule_ganztagsart">
    <left key="_col_schule_ganztags_art_id" query="_query_table_schule"/>
    <right key="_col_ganztags_art_id" query="_query_table_ganztags_art"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_schule_schulart_hierarchy">
    <left key="_col_schule_schul_art_id" query="_query_table_schule"/>
    <right key="_col_schul_art_id" query="_join_schulkategorie_art"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_schulkategorie_art">
    <left key="_col_schul_art_schul_kategorie_id" query="_query_schedule_art_table_query"/>
    <right key="_col_schul_kategorie_id" query="_query_schedule_kategorie_table_query"/>
  </roma:JoinQuery>
  <roma:Level id="_level_traeger" name="Schulträger" column="_col_traeger_id" nameColumn="_col_traeger_traeger_name"/>
  <roma:Level id="_level_traeger_art" name="Schulträger-Art" column="_col_traeger_art_id" nameColumn="_col_traeger_art_traeger_art"/>
  <roma:Level id="_level_schulart" name="Schulart" column="_col_schul_art_id" nameColumn="_col_schul_art_schulart_name"/>
  <roma:Level id="_level_bundesland" name="Bundesland" column="_col_bundesland_id" nameColumn="_col_bundesland_bezeichnung"/>
  <roma:Level id="_level_klassenwiederholung" name="Klassenwiederholung" column="_col_klassen_wiederholung_id" nameColumn="_col_klassen_wiederholung_klassenwiederholung"/>
  <roma:Level id="_level_traeger_kategorie" name="Schulträger-Kategorie" column="_col_traeger_kategorie_id" nameColumn="_col_traeger_kategorie_traeger_kategorie"/>
  <roma:Level id="_level_einschulung" name="Einschulung" column="_col_einschulung_id" nameColumn="_col_einschulung_einschulung"/>
  <roma:Level id="_level_foerderbedarf" name="Förderbedarf" column="_col_sonderpaed_foerderbedarf_id" nameColumn="_col_sonderpaed_foerderbedarf_sonderpaed_bedarf"/>
  <roma:Level id="_level_foerderung_art" name="Art der Förderung" column="_col_foerderung_art_id" nameColumn="_col_foerderung_art_foerderung_art"/>
  <roma:Level id="_level_schulabschluss" name="Schulabschlüsse" column="_col_schul_abschluss_id" nameColumn="_col_schul_abschluss_schulabschluss"/>
  <roma:Level id="_level_berufsgruppe" name="Berufsgruppe" column="_col_personal_art_id" nameColumn="_col_personal_art_bezeichnung"/>
  <roma:Level id="_level_migrationshintergrund" name="Migrationshintergrund" column="_col_migrations_hintergrund_id" nameColumn="_col_migrations_hintergrund_migrations_hintergrund"/>
  <roma:Level id="_level_altersgruppe" name="Altersgruppe" column="_col_alters_gruppe_id" nameColumn="_col_alters_gruppe_altersgruppe"/>
  <roma:Level id="_level_wohnlandkreis" name="Wohnlandkreis" column="_col_wohnort_landkreis_id" nameColumn="_col_wohnort_landkreis_bezeichnung"/>
  <roma:Level id="_level_geschlecht" name="Geschlecht" column="_col_geschlecht_id" nameColumn="_col_geschlecht_bezeichnung"/>
  <roma:Level id="_level_schulkategorie" name="Schulkategorie" column="_col_schul_kategorie_id" nameColumn="_col_schul_kategorie_schul_kategorie_name"/>
  <roma:Level id="_level_schule_art" name="Schule" column="_col_schule_id" nameColumn="_col_schule_schul_name" ordinalColumn="_col_schule_schul_nummer"/>
  <roma:Level id="_level_schuljahr" name="Schuljahr" column="_col_schul_jahr_id" nameColumn="_col_schul_jahr_schul_jahr" ordinalColumn="_col_schul_jahr_order"/>
  <roma:Level id="_level_ganztagsangebot" name="Art des Ganztagsangebots" column="_col_ganztags_art_id" nameColumn="_col_ganztags_art_schul_umfang"/>
  <roma:Level id="_level_schule_basic" name="Schule" column="_col_schule_id" nameColumn="_col_schule_schul_name" ordinalColumn="_col_schule_schul_nummer"/>
  <roma:Level id="_level_schule_traegerschaft" name="Schule" column="_col_schule_id" nameColumn="_col_schule_schul_name" ordinalColumn="_col_schule_schul_nummer"/>
  <roma:StandardDimension id="_dimension_wohnlandkreis" name="Wohnlandkreis" hierarchies="_hierarchy_wohnlandkreis"/>
  <roma:StandardDimension id="_dimension_migrationshintergrund" name="Migrationshintergrund" hierarchies="_hierarchy_migrationshintergrund"/>
  <roma:StandardDimension id="_dimension_einschulungen" name="Einschulungen" hierarchies="_hierarchy_einschulung"/>
  <roma:StandardDimension id="_dimension_altersgruppen_personal" name="Altersgruppen Personal" hierarchies="_hierarchy_altersgruppen"/>
  <roma:StandardDimension id="_dimension_schuljahre" name="Schuljahre" hierarchies="_hierarchy_schuljahre"/>
  <roma:StandardDimension id="_dimension_schulabschluss" name="Schulabschluss" hierarchies="_hierarchy_schulabschluss"/>
  <roma:StandardDimension id="_dimension_geschlecht" name="Geschlecht" hierarchies="_hierarchy_geschlecht"/>
  <roma:StandardDimension id="_dimension_inklusion" name="Inklusion" hierarchies="_hierarchy_foerderung"/>
  <roma:StandardDimension id="_dimension_berufsgruppen_personal" name="Berufsgruppen Personal" hierarchies="_hierarchy_berufsgruppen"/>
  <roma:StandardDimension id="_dimension_schulen" name="Schulen" hierarchies="_hierarchy_schulen_ganztagsangebot _hierarchy_schulen_traegerschaft _hierarchy_schulen_art"/>
  <roma:StandardDimension id="_dimension_klassenwiederholung" name="Klassenwiederholung" hierarchies="_hierarchy_klassenwiederholung"/>
  <roma:PhysicalCube id="_cube_schueler_innen" name="Schüler:innen an Jenaer Schulen" query="_query_fact_schueler_table_query">
    <dimensionConnectors foreignKey="_col_fact_schueler_schule_id" dimension="_dimension_schulen" overrideDimensionName="Schulen"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_schul_jahr_id" dimension="_dimension_schuljahre" overrideDimensionName="Schuljahr"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_geschlecht_id" dimension="_dimension_geschlecht" overrideDimensionName="Geschlecht"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_wohn_lk_id" dimension="_dimension_wohnlandkreis" overrideDimensionName="Wohnlandkreis"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_einschulung_id" dimension="_dimension_einschulungen" overrideDimensionName="Einschulung"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_schul_abschluss_id" dimension="_dimension_schulabschluss" overrideDimensionName="Schulabschluss"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_klassen_wdh" dimension="_dimension_klassenwiederholung" overrideDimensionName="Klassenwiederholung"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_migrations_hg_id" dimension="_dimension_migrationshintergrund" overrideDimensionName="Migrationshintergrund"/>
    <dimensionConnectors foreignKey="_col_fact_schueler_foerder_art_id" dimension="_dimension_inklusion" overrideDimensionName="Sonderpädagogische Förderung"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_anzahl_schuler_innen" name="Anzahl SchülerInnen" column="_col_fact_schueler_anzahl_schueler"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_schulen_institutionen" name="Schulen in Jena (Institutionen)" query="_query_fact_schulen_table_query">
    <dimensionConnectors foreignKey="_col_fact_schulen_schule_id" dimension="_dimension_schulen" overrideDimensionName="Schulen" id="_dc_schulen"/>
    <dimensionConnectors foreignKey="_col_fact_schulen_schul_jahr_id" dimension="_dimension_schuljahre" overrideDimensionName="Schuljahr" id="_dc_schuljahr"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_anzahl_schulen" name="Anzahl Schulen" column="_col_fact_schulen_anzahl_schulen"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_anzahl_klassen" name="Anzahl Klassen" column="_col_fact_schulen_anzahl_klassen"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_paedagogisches_personal" name="Pädagogisches Personal an Jenaer Schulen" query="_query_fact_personam_table_query">
    <dimensionConnectors foreignKey="_col_fact_personal_schule_id" dimension="_dimension_schulen" overrideDimensionName="Schulen"/>
    <dimensionConnectors foreignKey="_col_fact_personal_schul_jahr_id" dimension="_dimension_schuljahre" overrideDimensionName="Schuljahr"/>
    <dimensionConnectors foreignKey="_col_fact_personal_alters_gruppe_id" dimension="_dimension_altersgruppen_personal" overrideDimensionName="Altersgruppe"/>
    <dimensionConnectors foreignKey="_col_fact_personal_geschlecht_id" dimension="_dimension_geschlecht" overrideDimensionName="Geschlecht"/>
    <dimensionConnectors foreignKey="_col_fact_personal_personal_art_id" dimension="_dimension_berufsgruppen_personal" overrideDimensionName="Berufsgruppe"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_anzahl_personen" name="Anzahl Personen" column="_col_fact_personal_anzahl_personen"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.school.zip" download>Download Zip File</a>
