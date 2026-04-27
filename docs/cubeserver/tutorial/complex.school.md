---
title: Daanse Example - Schulwesen
group: Full Examples
kind: COMPLEX
number: 99.1.1
---

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_sonderpaed_foerderbedarf_id _column_fact_personal_schule_id _column_schul_art_id _column_fact_schueler_klassen_wdh _column_fact_schueler_wohn_lk_id _column_personal_art_id _column_schul_art_schul_kategorie_id _column_fact_schulen_schul_jahr_id _column_foerderung_art_sp_foerderbedarf_id _column_ganztags_art_id _column_schule_id _column_fact_schueler_schul_jahr_id _column_einschulung_id _column_traeger_id _column_traeger_traeger_art_id _column_migrations_hintergrund_id _column_geschlecht_id _column_klassen_wiederholung_id _column_schule_ganztags_art_id _column_fact_schueler_schul_abschluss_id _column_fact_schueler_foerder_art_id _column_fact_personal_schul_jahr_id _column_fact_schulen_anzahl_klassen _column_fact_schueler_einschulung_id _column_fact_schueler_geschlecht_id _column_traeger_kategorie_id _column_fact_personal_personal_art_id _column_bundesland_id _column_schule_schul_art_id _column_traeger_art_id _column_schule_schul_nummer _column_fact_schulen_anzahl_schulen _column_foerderung_art_id _column_geschlecht_bezeichnung _column_fact_personal_alters_gruppe_id _column_schule_traeger_id _column_schul_abschluss_id _column_alters_gruppe_id _column_schul_kategorie_id _column_fact_schueler_migrations_hg_id _column_fact_personal_geschlecht_id _column_fact_schulen_schule_id _column_fact_schueler_schule_id _column_fact_schueler_anzahl_schueler _column_wohnort_landkreis_bundesland_id _column_schul_art_id_1 _column_schul_jahr_order _column_klassen_wiederholung_klassenwiederholung _column_schul_jahr_id _column_wohnort_landkreis_id _column_alters_gruppe_altersgruppe _column_fact_personal_anzahl_personen" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_schul_abschluss_schulabschluss _column_traeger_kategorie_traeger_kategorie _column_schul_kategorie_schul_kategorie_name _column_personal_art_bezeichnung _column_bundesland_bezeichnung _column_wohnort_landkreis_bezeichnung _column_einschulung_einschulung _column_schul_art_schulart_name _column_sonderpaed_foerderbedarf_sonderpaed_bedarf _column_traeger_traeger_name _column_schule_schul_name _column_foerderung_art_foerderung_art _column_traeger_art_traeger_kat_id _column_ganztags_art_schul_umfang _column_schul_jahr_schul_jahr _column_migrations_hintergrund_migrations_hintergrund _column_traeger_art_traeger_art" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_schulwesen" id="_catalog_schulwesen" name="Daanse Example - Schulwesen" cubes="_physicalcube_schulen_in_jena_institutionen _physicalcube_p_dagogisches_personal_an_jenaer_schulen _physicalcube_sch_ler_innen_an_jenaer_schulen" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_schule" name="schule">
      <feature xsi:type="relational:Column" xmi:id="_column_schule_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_schule_schul_name" name="schul_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_schule_schul_nummer" name="schul_nummer" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_schule_ganztags_art_id" name="ganztags_art_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_schule_traeger_id" name="traeger_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_schule_schul_art_id" name="schul_art_id" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_ganztags_art" name="ganztags_art">
      <feature xsi:type="relational:Column" xmi:id="_column_ganztags_art_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_ganztags_art_schul_umfang" name="schul_umfang" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_traeger" name="traeger">
      <feature xsi:type="relational:Column" xmi:id="_column_traeger_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_traeger_traeger_name" name="traeger_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_traeger_traeger_art_id" name="traeger_art_id" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_traeger_art" name="traeger_art">
      <feature xsi:type="relational:Column" xmi:id="_column_traeger_art_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_traeger_art_traeger_art" name="traeger_art" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_traeger_art_traeger_kat_id" name="traeger_kat_id" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_traeger_kategorie" name="traeger_kategorie">
      <feature xsi:type="relational:Column" xmi:id="_column_traeger_kategorie_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_traeger_kategorie_traeger_kategorie" name="traeger_kategorie" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_schul_art" name="schul_art">
      <feature xsi:type="relational:Column" xmi:id="_column_schul_art_id_1" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_schul_art_schul_kategorie_id" name="schul_kategorie_id" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_schul_jahr" name="schul_jahr">
      <feature xsi:type="relational:Column" xmi:id="_column_schul_jahr_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_schul_jahr_schul_jahr" name="schul_jahr" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_schul_jahr_order" name="order" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_alters_gruppe" name="alters_gruppe">
      <feature xsi:type="relational:Column" xmi:id="_column_alters_gruppe_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_alters_gruppe_altersgruppe" name="altersgruppe" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_geschlecht" name="geschlecht">
      <feature xsi:type="relational:Column" xmi:id="_column_geschlecht_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_geschlecht_bezeichnung" name="bezeichnung" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_einschulung" name="einschulung">
      <feature xsi:type="relational:Column" xmi:id="_column_einschulung_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_einschulung_einschulung" name="einschulung" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_klassen_wiederholung" name="klassen_wiederholung">
      <feature xsi:type="relational:Column" xmi:id="_column_klassen_wiederholung_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_klassen_wiederholung_klassenwiederholung" name="klassenwiederholung" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_schul_abschluss" name="schul_abschluss">
      <feature xsi:type="relational:Column" xmi:id="_column_schul_abschluss_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_schul_abschluss_schulabschluss" name="schulabschluss" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_migrations_hintergrund" name="migrations_hintergrund">
      <feature xsi:type="relational:Column" xmi:id="_column_migrations_hintergrund_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_migrations_hintergrund_migrations_hintergrund" name="migrations_hintergrund" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_wohnort_landkreis" name="wohnort_landkreis">
      <feature xsi:type="relational:Column" xmi:id="_column_wohnort_landkreis_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_wohnort_landkreis_bezeichnung" name="bezeichnung" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_wohnort_landkreis_bundesland_id" name="bundesland_id" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_schul_art_1" name="schul_art">
      <feature xsi:type="relational:Column" xmi:id="_column_schul_art_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_schul_art_schulart_name" name="schulart_name" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_schul_kategorie" name="schul_kategorie">
      <feature xsi:type="relational:Column" xmi:id="_column_schul_kategorie_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_schul_kategorie_schul_kategorie_name" name="schul_kategorie_name" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_foerderung_art" name="foerderung_art">
      <feature xsi:type="relational:Column" xmi:id="_column_foerderung_art_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_foerderung_art_foerderung_art" name="foerderung_art" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_foerderung_art_sp_foerderbedarf_id" name="sp_foerderbedarf_id" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_personal_art" name="personal_art">
      <feature xsi:type="relational:Column" xmi:id="_column_personal_art_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_personal_art_bezeichnung" name="bezeichnung" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_bundesland" name="bundesland">
      <feature xsi:type="relational:Column" xmi:id="_column_bundesland_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bundesland_bezeichnung" name="bezeichnung" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_sonderpaed_foerderbedarf" name="sonderpaed_foerderbedarf">
      <feature xsi:type="relational:Column" xmi:id="_column_sonderpaed_foerderbedarf_id" name="id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_sonderpaed_foerderbedarf_sonderpaed_bedarf" name="sonderpaed_bedarf" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact_schulen" name="fact_schulen">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schulen_schule_id" name="schule_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schulen_schul_jahr_id" name="schul_jahr_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schulen_anzahl_schulen" name="anzahl_schulen" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schulen_anzahl_klassen" name="anzahl_klassen" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact_personal" name="fact_personal">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_personal_schule_id" name="schule_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_personal_schul_jahr_id" name="schul_jahr_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_personal_alters_gruppe_id" name="alters_gruppe_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_personal_geschlecht_id" name="geschlecht_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_personal_personal_art_id" name="personal_art_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_personal_anzahl_personen" name="anzahl_personen" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact_schueler" name="fact_schueler">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schueler_schule_id" name="schule_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schueler_schul_jahr_id" name="schul_jahr_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schueler_geschlecht_id" name="geschlecht_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schueler_wohn_lk_id" name="wohn_lk_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schueler_einschulung_id" name="einschulung_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schueler_schul_abschluss_id" name="schul_abschluss_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schueler_klassen_wdh" name="klassen_wdh" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schueler_migrations_hg_id" name="migrations_hg_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schueler_foerder_art_id" name="foerder_art_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_schueler_anzahl_schueler" name="anzahl_schueler" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_alters_gruppe" table="_table_alters_gruppe"/>
  <rolapsrc:TableSource xmi:id="_tablesource_einschulung" table="_table_einschulung"/>
  <rolapsrc:TableSource xmi:id="_tablesource_traeger_kategorie" table="_table_traeger_kategorie"/>
  <rolapsrc:TableSource xmi:id="_tablesource_traeger_art" table="_table_traeger_art"/>
  <rolapsrc:TableSource xmi:id="_tablesource_wohnort_landkreis" table="_table_wohnort_landkreis"/>
  <rolapsrc:TableSource xmi:id="_tablesource_personal_art" table="_table_personal_art"/>
  <rolapsrc:TableSource xmi:id="_tablesource_migrations_hintergrund" table="_table_migrations_hintergrund"/>
  <rolapsrc:TableSource xmi:id="_tablesource_schule" table="_table_schule"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact_schulen" table="_table_fact_schulen"/>
  <rolapsrc:TableSource xmi:id="_tablesource_ganztags_art" table="_table_ganztags_art"/>
  <rolapsrc:TableSource xmi:id="_tablesource_klassen_wiederholung" table="_table_klassen_wiederholung"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact_schueler" table="_table_fact_schueler"/>
  <rolapsrc:TableSource xmi:id="_tablesource_schul_kategorie" table="_table_schul_kategorie"/>
  <rolapsrc:TableSource xmi:id="_tablesource_schul_jahr" table="_table_schul_jahr"/>
  <rolapsrc:TableSource xmi:id="_tablesource_geschlecht" table="_table_geschlecht"/>
  <rolapsrc:TableSource xmi:id="_tablesource_schul_art" table="_table_schul_art"/>
  <rolapsrc:TableSource xmi:id="_tablesource_schul_abschluss" table="_table_schul_abschluss"/>
  <rolapsrc:TableSource xmi:id="_tablesource_foerderung_art" table="_table_foerderung_art"/>
  <rolapsrc:TableSource xmi:id="_tablesource_bundesland" table="_table_bundesland"/>
  <rolapsrc:TableSource xmi:id="_tablesource_traeger" table="_table_traeger"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact_personal" table="_table_fact_personal"/>
  <rolapsrc:TableSource xmi:id="_tablesource_sonderpaed_foerderbedarf" table="_table_sonderpaed_foerderbedarf"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_sp_foerderbedarf_id" key="_column_foerderung_art_sp_foerderbedarf_id" query="_tablesource_foerderung_art"/>
    <right xmi:id="_joinedqueryelement_id_2" key="_column_sonderpaed_foerderbedarf_id" query="_tablesource_sonderpaed_foerderbedarf"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_traeger_art_id" key="_column_traeger_traeger_art_id" query="_tablesource_traeger"/>
    <right xmi:id="_joinedqueryelement_id_3" key="_column_traeger_art_id" query="_joinsource_7"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_2">
    <left xmi:id="_joinedqueryelement_bundesland_id" key="_column_wohnort_landkreis_bundesland_id" query="_tablesource_wohnort_landkreis"/>
    <right xmi:id="_joinedqueryelement_id_1" key="_column_bundesland_id" query="_tablesource_bundesland"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_3">
    <left xmi:id="_joinedqueryelement_ganztags_art_id" key="_column_schule_ganztags_art_id" query="_tablesource_schule"/>
    <right xmi:id="_joinedqueryelement_id_4" key="_column_ganztags_art_id" query="_tablesource_ganztags_art"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_4">
    <left xmi:id="_joinedqueryelement_traeger_id" key="_column_schule_traeger_id" query="_tablesource_schule"/>
    <right xmi:id="_joinedqueryelement_id_5" key="_column_traeger_id" query="_joinsource_1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_5">
    <left xmi:id="_joinedqueryelement_schul_art_id" key="_column_schule_schul_art_id" query="_tablesource_schule"/>
    <right xmi:id="_joinedqueryelement_id_7" key="_column_schul_art_id_1" query="_joinsource_6"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_6">
    <left xmi:id="_joinedqueryelement_schul_kategorie_id" key="_column_schul_art_schul_kategorie_id" query="_tablesource_schul_art"/>
    <right xmi:id="_joinedqueryelement_id_6" key="_column_schul_kategorie_id" query="_tablesource_schul_kategorie"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_7">
    <left xmi:id="_joinedqueryelement_traeger_kat_id" key="_column_traeger_art_traeger_kat_id" query="_tablesource_traeger_art"/>
    <right xmi:id="_joinedqueryelement_id" key="_column_traeger_kategorie_id" query="_tablesource_traeger_kategorie"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_schule" name="Schule" column="_column_schule_id" nameColumn="_column_schule_schul_name">
    <ordinalColumns xmi:id="_orderedcolumn_schul_nummer" column="_column_schule_schul_nummer"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_schulabschl_sse" name="Schulabschlüsse" column="_column_schul_abschluss_id" nameColumn="_column_schul_abschluss_schulabschluss"/>
  <rolaplev:Level xmi:id="_level_schultr_ger_art" name="Schulträger-Art" column="_column_traeger_art_id" nameColumn="_column_traeger_art_traeger_art"/>
  <rolaplev:Level xmi:id="_level_bundesland" name="Bundesland" column="_column_bundesland_id" nameColumn="_column_bundesland_bezeichnung"/>
  <rolaplev:Level xmi:id="_level_schulart" name="Schulart" column="_column_schul_art_id" nameColumn="_column_schul_art_schulart_name"/>
  <rolaplev:Level xmi:id="_level_schule_1" name="Schule" column="_column_schule_id" nameColumn="_column_schule_schul_name">
    <ordinalColumns xmi:id="_orderedcolumn_schul_nummer_2" column="_column_schule_schul_nummer"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_altersgruppe" name="Altersgruppe" column="_column_alters_gruppe_id" nameColumn="_column_alters_gruppe_altersgruppe"/>
  <rolaplev:Level xmi:id="_level_schule_2" name="Schule" column="_column_schule_id" nameColumn="_column_schule_schul_name">
    <ordinalColumns xmi:id="_orderedcolumn_schul_nummer_1" column="_column_schule_schul_nummer"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_einschulung" name="Einschulung" column="_column_einschulung_id" nameColumn="_column_einschulung_einschulung"/>
  <rolaplev:Level xmi:id="_level_schultr_ger_kategorie" name="Schulträger-Kategorie" column="_column_traeger_kategorie_id" nameColumn="_column_traeger_kategorie_traeger_kategorie"/>
  <rolaplev:Level xmi:id="_level_migrationshintergrund" name="Migrationshintergrund" column="_column_migrations_hintergrund_id" nameColumn="_column_migrations_hintergrund_migrations_hintergrund"/>
  <rolaplev:Level xmi:id="_level_art_des_ganztagsangebots" name="Art des Ganztagsangebots" column="_column_ganztags_art_id" nameColumn="_column_ganztags_art_schul_umfang"/>
  <rolaplev:Level xmi:id="_level_f_rderbedarf" name="Förderbedarf" column="_column_sonderpaed_foerderbedarf_id" nameColumn="_column_sonderpaed_foerderbedarf_sonderpaed_bedarf"/>
  <rolaplev:Level xmi:id="_level_geschlecht" name="Geschlecht" column="_column_geschlecht_id" nameColumn="_column_geschlecht_bezeichnung"/>
  <rolaplev:Level xmi:id="_level_schultr_ger" name="Schulträger" column="_column_traeger_id" nameColumn="_column_traeger_traeger_name"/>
  <rolaplev:Level xmi:id="_level_schuljahr" name="Schuljahr" column="_column_schul_jahr_id" nameColumn="_column_schul_jahr_schul_jahr">
    <ordinalColumns xmi:id="_orderedcolumn_order" column="_column_schul_jahr_order"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_klassenwiederholung" name="Klassenwiederholung" column="_column_klassen_wiederholung_id" nameColumn="_column_klassen_wiederholung_klassenwiederholung"/>
  <rolaplev:Level xmi:id="_level_wohnlandkreis" name="Wohnlandkreis" column="_column_wohnort_landkreis_id" nameColumn="_column_wohnort_landkreis_bezeichnung"/>
  <rolaplev:Level xmi:id="_level_schulkategorie" name="Schulkategorie" column="_column_schul_kategorie_id" nameColumn="_column_schul_kategorie_schul_kategorie_name"/>
  <rolaplev:Level xmi:id="_level_art_der_f_rderung" name="Art der Förderung" column="_column_foerderung_art_id" nameColumn="_column_foerderung_art_foerderung_art"/>
  <rolaplev:Level xmi:id="_level_berufsgruppe" name="Berufsgruppe" column="_column_personal_art_id" nameColumn="_column_personal_art_bezeichnung"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_sonderp_dagogische_f_rderung" name="Sonderpädagogische Förderung" allMemberName="Gesamt" primaryKey="_column_foerderung_art_id" query="_joinsource" levels="_level_f_rderbedarf _level_art_der_f_rderung"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_einschulung" name="Einschulung" allMemberName="Gesamt" primaryKey="_column_einschulung_id" query="_tablesource_einschulung" levels="_level_einschulung"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_klassenwiederholung" name="Klassenwiederholung" allMemberName="Gesamt" primaryKey="_column_klassen_wiederholung_id" query="_tablesource_klassen_wiederholung" levels="_level_klassenwiederholung"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_schuljahre" name="Schuljahre" hasAll="false" primaryKey="_column_schul_jahr_id" query="_tablesource_schul_jahr" levels="_level_schuljahr"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_berufsgruppen" name="Berufsgruppen" allMemberName="Alle Berufsgruppen" primaryKey="_column_personal_art_id" query="_tablesource_personal_art" levels="_level_berufsgruppe"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_schulen_nach_tr_gerschaft" name="Schulen nach Trägerschaft" allMemberName="Alle Schulen" primaryKey="_column_schule_id" query="_joinsource_4" levels="_level_schultr_ger_kategorie _level_schultr_ger_art _level_schultr_ger _level_schule_2"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_schulen_nach_ganztagsangebot" name="Schulen nach Ganztagsangebot" allMemberName="Alle Schulen" primaryKey="_column_schule_id" query="_joinsource_3" levels="_level_art_des_ganztagsangebots _level_schule"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_migrationshintergrund" name="Migrationshintergrund" allMemberName="Gesamt" primaryKey="_column_migrations_hintergrund_id" query="_tablesource_migrations_hintergrund" levels="_level_migrationshintergrund"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_altersgruppen" name="Altersgruppen" allMemberName="Alle Altersgruppen" primaryKey="_column_alters_gruppe_id" query="_tablesource_alters_gruppe" levels="_level_altersgruppe"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_wohnlandkreis" name="Wohnlandkreis" allMemberName="Alle Wohnlandkreise" primaryKey="_column_wohnort_landkreis_id" query="_joinsource_2" levels="_level_bundesland _level_wohnlandkreis"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_geschlecht" name="Geschlecht" allMemberName="Alle Geschlechter" primaryKey="_column_geschlecht_id" query="_tablesource_geschlecht" levels="_level_geschlecht"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_schulen_nach_art" name="Schulen nach Art" allMemberName="Alle Schulen" primaryKey="_column_schule_id" query="_joinsource_5" levels="_level_schulkategorie _level_schulart _level_schule_1"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_schulabschl_sse" name="Schulabschlüsse" allMemberName="Gesamt" primaryKey="_column_schul_abschluss_id" query="_tablesource_schul_abschluss" levels="_level_schulabschl_sse"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_klassenwiederholung" name="Klassenwiederholung" hierarchies="_explicithierarchy_klassenwiederholung"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_berufsgruppen_personal" name="Berufsgruppen Personal" hierarchies="_explicithierarchy_berufsgruppen"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_altersgruppen_personal" name="Altersgruppen Personal" hierarchies="_explicithierarchy_altersgruppen"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_schulen" name="Schulen" hierarchies="_explicithierarchy_schulen_nach_ganztagsangebot _explicithierarchy_schulen_nach_tr_gerschaft _explicithierarchy_schulen_nach_art"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_geschlecht" name="Geschlecht" hierarchies="_explicithierarchy_geschlecht"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_schulabschluss" name="Schulabschluss" hierarchies="_explicithierarchy_schulabschl_sse"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_einschulungen" name="Einschulungen" hierarchies="_explicithierarchy_einschulung"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_wohnlandkreis" name="Wohnlandkreis" hierarchies="_explicithierarchy_wohnlandkreis"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_inklusion" name="Inklusion" hierarchies="_explicithierarchy_sonderp_dagogische_f_rderung"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_schuljahre" name="Schuljahre" hierarchies="_explicithierarchy_schuljahre"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_migrationshintergrund" name="Migrationshintergrund" hierarchies="_explicithierarchy_migrationshintergrund"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_p_dagogisches_personal_an_jenaer_schulen" name="Pädagogisches Personal an Jenaer Schulen" query="_tablesource_fact_personal">
    <dimensionConnectors xmi:id="_dimensionconnector_schulen_1" foreignKey="_column_fact_personal_schule_id" dimension="_standarddimension_schulen" overrideDimensionName="Schulen"/>
    <dimensionConnectors xmi:id="_dimensionconnector_schuljahr_1" foreignKey="_column_fact_personal_schul_jahr_id" dimension="_standarddimension_schuljahre" overrideDimensionName="Schuljahr"/>
    <dimensionConnectors xmi:id="_dimensionconnector_altersgruppe" foreignKey="_column_fact_personal_alters_gruppe_id" dimension="_standarddimension_altersgruppen_personal" overrideDimensionName="Altersgruppe"/>
    <dimensionConnectors xmi:id="_dimensionconnector_geschlecht" foreignKey="_column_fact_personal_geschlecht_id" dimension="_standarddimension_geschlecht" overrideDimensionName="Geschlecht"/>
    <dimensionConnectors xmi:id="_dimensionconnector_berufsgruppe" foreignKey="_column_fact_personal_personal_art_id" dimension="_standarddimension_berufsgruppen_personal" overrideDimensionName="Berufsgruppe"/>
    <measureGroups xmi:id="_measuregroup_1">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_anzahl_personen" name="Anzahl Personen" column="_column_fact_personal_anzahl_personen"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_sch_ler_innen_an_jenaer_schulen" name="Schüler:innen an Jenaer Schulen" query="_tablesource_fact_schueler">
    <dimensionConnectors xmi:id="_dimensionconnector_schulen_2" foreignKey="_column_fact_schueler_schule_id" dimension="_standarddimension_schulen" overrideDimensionName="Schulen"/>
    <dimensionConnectors xmi:id="_dimensionconnector_schuljahr_2" foreignKey="_column_fact_schueler_schul_jahr_id" dimension="_standarddimension_schuljahre" overrideDimensionName="Schuljahr"/>
    <dimensionConnectors xmi:id="_dimensionconnector_geschlecht_1" foreignKey="_column_fact_schueler_geschlecht_id" dimension="_standarddimension_geschlecht" overrideDimensionName="Geschlecht"/>
    <dimensionConnectors xmi:id="_dimensionconnector_wohnlandkreis" foreignKey="_column_fact_schueler_wohn_lk_id" dimension="_standarddimension_wohnlandkreis" overrideDimensionName="Wohnlandkreis"/>
    <dimensionConnectors xmi:id="_dimensionconnector_einschulung" foreignKey="_column_fact_schueler_einschulung_id" dimension="_standarddimension_einschulungen" overrideDimensionName="Einschulung"/>
    <dimensionConnectors xmi:id="_dimensionconnector_schulabschluss" foreignKey="_column_fact_schueler_schul_abschluss_id" dimension="_standarddimension_schulabschluss" overrideDimensionName="Schulabschluss"/>
    <dimensionConnectors xmi:id="_dimensionconnector_klassenwiederholung" foreignKey="_column_fact_schueler_klassen_wdh" dimension="_standarddimension_klassenwiederholung" overrideDimensionName="Klassenwiederholung"/>
    <dimensionConnectors xmi:id="_dimensionconnector_migrationshintergrund" foreignKey="_column_fact_schueler_migrations_hg_id" dimension="_standarddimension_migrationshintergrund" overrideDimensionName="Migrationshintergrund"/>
    <dimensionConnectors xmi:id="_dimensionconnector_sonderp_dagogische_f_rderung" foreignKey="_column_fact_schueler_foerder_art_id" dimension="_standarddimension_inklusion" overrideDimensionName="Sonderpädagogische Förderung"/>
    <measureGroups xmi:id="_measuregroup_2">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_anzahl_sch_lerinnen" name="Anzahl SchülerInnen" column="_column_fact_schueler_anzahl_schueler"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_schulen_in_jena_institutionen" name="Schulen in Jena (Institutionen)" query="_tablesource_fact_schulen">
    <dimensionConnectors xmi:id="_dimensionconnector_schulen" foreignKey="_column_fact_schulen_schule_id" dimension="_standarddimension_schulen" overrideDimensionName="Schulen"/>
    <dimensionConnectors xmi:id="_dimensionconnector_schuljahr" foreignKey="_column_fact_schulen_schul_jahr_id" dimension="_standarddimension_schuljahre" overrideDimensionName="Schuljahr"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_anzahl_schulen" name="Anzahl Schulen" column="_column_fact_schulen_anzahl_schulen"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_anzahl_klassen" name="Anzahl Klassen" column="_column_fact_schulen_anzahl_klassen"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.school.zip" download>Download Zip File</a>
