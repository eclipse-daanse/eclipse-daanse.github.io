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
  <roma:Catalog name="Schulwesen" cubes="CUBE1 CUBE2 CUBE3" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" name="schule">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schul_name"/>
      <columns xsi:type="roma:PhysicalColumn" name="schul_nummer" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="ganztags_art_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="traeger_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schul_art_id" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="ganztags_art">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schul_umfang"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="traeger">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="traeger_name"/>
      <columns xsi:type="roma:PhysicalColumn" name="traeger_art_id" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="traeger_art">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="traeger_art"/>
      <columns xsi:type="roma:PhysicalColumn" name="traeger_kat_id"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="traeger_kategorie">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="traeger_kategorie"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="schul_art">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schul_kategorie_id" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="schul_jahr">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schul_jahr"/>
      <columns xsi:type="roma:PhysicalColumn" name="order" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="alters_gruppe">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="altersgruppe" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="geschlecht">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="bezeichnung" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="einschulung">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="einschulung"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="klassen_wiederholung">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="klassenwiederholung" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="schul_abschluss">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schulabschluss"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="migrations_hintergrund">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="migrations_hintergrund"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="wohnort_landkreis">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="bezeichnung"/>
      <columns xsi:type="roma:PhysicalColumn" name="bundesland_id" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="schul_art">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schulart_name"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="schul_kategorie">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schul_kategorie_name"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="foerderung_art">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="foerderung_art"/>
      <columns xsi:type="roma:PhysicalColumn" name="sp_foerderbedarf_id" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="personal_art">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="bezeichnung"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="bundesland">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="bezeichnung"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="sonderpaed_foerderbedarf">
      <columns xsi:type="roma:PhysicalColumn" name="id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="sonderpaed_bedarf"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="fact_schulen">
      <columns xsi:type="roma:PhysicalColumn" name="schule_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schul_jahr_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="anzahl_schulen" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="anzahl_klassen" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="fact_personal">
      <columns xsi:type="roma:PhysicalColumn" name="schule_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schul_jahr_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="alters_gruppe_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="geschlecht_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="personal_art_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="anzahl_personen" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="fact_schueler">
      <columns xsi:type="roma:PhysicalColumn" name="schule_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schul_jahr_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="geschlecht_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="wohn_lk_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="einschulung_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="schul_abschluss_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="klassen_wdh" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="migrations_hg_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="foerder_art_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" name="anzahl_schueler" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FOERDERUNG_ART_TABLE_QUERY" table="/1/@tables.16"/>
  <roma:TableQuery id="MIGRATIONS_HINTERGRUND_TABLE_QUERY" table="/1/@tables.12"/>
  <roma:TableQuery id="WOHNORT_LANDKREIS_TABLE_QUERY" table="/1/@tables.13"/>
  <roma:TableQuery id="KLASSEN_WIEDERHOLUNG_TABLE_QUERY" table="/1/@tables.10"/>
  <roma:TableQuery id="TRAEGER_TABLE_QUERY" table="/1/@tables.2"/>
  <roma:TableQuery id="BUNDESLAND_TABLE_QUERY" table="/1/@tables.18"/>
  <roma:TableQuery id="SONDERPAED_FOERDERBEDART_TABLE_QUERY" table="/1/@tables.19"/>
  <roma:TableQuery id="FACT_SCHULEN_TABLE_QUERY" table="/1/@tables.20"/>
  <roma:TableQuery id="SCHEDULE_TABLE_QUERY" table="/1/@tables.0"/>
  <roma:TableQuery id="GANZTAGS_ART_TABLE_QUERY" table="/1/@tables.1"/>
  <roma:TableQuery id="EINSCHULUNG_TABLE_QUERY" table="/1/@tables.9"/>
  <roma:TableQuery id="SCHEDULE_ART_TABLE_QUERY" table="/1/@tables.5"/>
  <roma:TableQuery id="GESCHLECHT_TABLE_QUERY" table="/1/@tables.8"/>
  <roma:TableQuery id="FACT_SCHUELER_TABLE_QUERY" table="/1/@tables.22"/>
  <roma:TableQuery id="PERSONAL_ART_TABLE_QUERY" table="/1/@tables.17"/>
  <roma:TableQuery id="SCHUL_JAHT_TABLE_QUERY" table="/1/@tables.6"/>
  <roma:TableQuery id="FACT_PERSONAM_TABLE_QUERY" table="/1/@tables.21"/>
  <roma:TableQuery id="ALTERS_GRUPPE_TABLE_QUERY" table="/1/@tables.7"/>
  <roma:TableQuery id="TRAEGER_KATEGORIE_TABLE_QUERY" table="/1/@tables.4"/>
  <roma:TableQuery id="SCHEDULE_KATEGORIE_TABLE_QUERY" table="/1/@tables.15"/>
  <roma:TableQuery id="TRAEGER_ART_TABLE_QUERY" table="/1/@tables.3"/>
  <roma:TableQuery id="SCHUL_ABSCHLUSS_TABLE_QUERY" table="/1/@tables.11"/>
  <roma:JoinQuery id="JOIN3">
    <left key="/1/@tables.0/@columns.5" query="SCHEDULE_TABLE_QUERY"/>
    <right key="/1/@tables.5/@columns.0" query="JOIN3_1"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="JOIN2_1_1">
    <left key="/1/@tables.3/@columns.2" query="TRAEGER_ART_TABLE_QUERY"/>
    <right key="/1/@tables.4/@columns.0" query="TRAEGER_KATEGORIE_TABLE_QUERY"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="JOIN3_1">
    <left key="/1/@tables.5/@columns.1" query="SCHEDULE_ART_TABLE_QUERY"/>
    <right key="/1/@tables.15/@columns.0" query="SCHEDULE_KATEGORIE_TABLE_QUERY"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="JOIN2">
    <left key="/1/@tables.0/@columns.4" query="SCHEDULE_TABLE_QUERY"/>
    <right key="/1/@tables.2/@columns.0" query="JOIN2_1"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="JOIN5">
    <left key="/1/@tables.16/@columns.2" query="FOERDERUNG_ART_TABLE_QUERY"/>
    <right key="/1/@tables.19/@columns.0" query="SONDERPAED_FOERDERBEDART_TABLE_QUERY"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="JOIN1">
    <left key="/1/@tables.0/@columns.3" query="SCHEDULE_TABLE_QUERY"/>
    <right key="/1/@tables.1/@columns.0" query="GANZTAGS_ART_TABLE_QUERY"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="JOIN4">
    <left key="/1/@tables.13/@columns.2" query="WOHNORT_LANDKREIS_TABLE_QUERY"/>
    <right key="/1/@tables.18/@columns.0" query="BUNDESLAND_TABLE_QUERY"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="JOIN2_1">
    <left key="/1/@tables.2/@columns.2" query="TRAEGER_TABLE_QUERY"/>
    <right key="/1/@tables.3/@columns.0" query="JOIN2_1_1"/>
  </roma:JoinQuery>
  <roma:Level id="LEVEL1" name="Art des Ganztagsangebots" column="/1/@tables.1/@columns.0" nameColumn="/1/@tables.1/@columns.1"/>
  <roma:Level id="LEVEL2" name="Schule" column="/1/@tables.0/@columns.0" nameColumn="/1/@tables.0/@columns.1" ordinalColumn="/1/@tables.0/@columns.2"/>
  <roma:Level id="LEVEL5" name="Schulträger" column="/1/@tables.2/@columns.0" nameColumn="/1/@tables.2/@columns.1"/>
  <roma:Level id="LEVEL4" name="Schulträger-Art" column="/1/@tables.3/@columns.0" nameColumn="/1/@tables.3/@columns.1"/>
  <roma:Level id="LEVEL20" name="Förderbedarf" column="/1/@tables.19/@columns.0" nameColumn="/1/@tables.19/@columns.1"/>
  <roma:Level id="LEVEL3" name="Schulträger-Kategorie" column="/1/@tables.4/@columns.0" nameColumn="/1/@tables.4/@columns.1"/>
  <roma:Level id="LEVEL6" name="Schule" column="/1/@tables.0/@columns.0" nameColumn="/1/@tables.0/@columns.1" ordinalColumn="/1/@tables.0/@columns.2"/>
  <roma:Level id="LEVEL12" name="Geschlecht" column="/1/@tables.8/@columns.0" nameColumn="/1/@tables.8/@columns.1"/>
  <roma:Level id="LEVEL9" name="Schule" column="/1/@tables.0/@columns.0" nameColumn="/1/@tables.0/@columns.1" ordinalColumn="/1/@tables.0/@columns.2"/>
  <roma:Level id="LEVEL7" name="Schulkategorie" column="/1/@tables.15/@columns.0" nameColumn="/1/@tables.15/@columns.1"/>
  <roma:Level id="LEVEL18" name="Bundesland" column="/1/@tables.18/@columns.0" nameColumn="/1/@tables.18/@columns.1"/>
  <roma:Level id="LEVEL19" name="Wohnlandkreis" column="/1/@tables.13/@columns.0" nameColumn="/1/@tables.13/@columns.1"/>
  <roma:Level id="LEVEL10" name="Schuljahr" column="/1/@tables.6/@columns.0" nameColumn="/1/@tables.6/@columns.1" ordinalColumn="/1/@tables.6/@columns.2"/>
  <roma:Level id="LEVEL11" name="Altersgruppe" column="/1/@tables.7/@columns.0" nameColumn="/1/@tables.7/@columns.1"/>
  <roma:Level id="LEVEL16" name="Schulabschlüsse" column="/1/@tables.11/@columns.0" nameColumn="/1/@tables.11/@columns.1"/>
  <roma:Level id="LEVEL17" name="Migrationshintergrund" column="/1/@tables.12/@columns.0" nameColumn="/1/@tables.12/@columns.1"/>
  <roma:Level id="LEVEL8" name="Schulart" column="/1/@tables.14/@columns.0" nameColumn="/1/@tables.14/@columns.1"/>
  <roma:Level id="LEVEL21" name="Art der Förderung" column="/1/@tables.16/@columns.0" nameColumn="/1/@tables.16/@columns.1"/>
  <roma:Level id="LEVEL14" name="Einschulung" column="/1/@tables.9/@columns.0" nameColumn="/1/@tables.9/@columns.1"/>
  <roma:Level id="LEVEL13" name="Berufsgruppe" column="/1/@tables.17/@columns.0" nameColumn="/1/@tables.17/@columns.1"/>
  <roma:Level id="LEVEL15" name="Klassenwiederholung" column="/1/@tables.10/@columns.0" nameColumn="/1/@tables.10/@columns.1"/>
  <roma:Hierarchy id="HIERARCHY4" name="Schuljahre" levels="LEVEL10" primaryKey="/1/@tables.6/@columns.0" query="SCHUL_JAHT_TABLE_QUERY"/>
  <roma:Hierarchy id="HIERARCHY3" name="Schulen nach Art" levels="LEVEL7 LEVEL8 LEVEL9" allMemberName="Alle Schulen" hasAll="true" primaryKey="/1/@tables.0/@columns.0" query="JOIN3"/>
  <roma:Hierarchy id="HIERARCHY5" name="Altersgruppen" levels="LEVEL11" allMemberName="Alle Altersgruppen" hasAll="true" primaryKey="/1/@tables.7/@columns.0" query="ALTERS_GRUPPE_TABLE_QUERY"/>
  <roma:Hierarchy id="HIERARCHY6" name="Geschlecht" levels="LEVEL12" allMemberName="Alle Geschlechter" hasAll="true" primaryKey="/1/@tables.8/@columns.0" query="GESCHLECHT_TABLE_QUERY"/>
  <roma:Hierarchy id="HIERARCHY8" name="Einschulung" levels="LEVEL14" allMemberName="Gesamt" hasAll="true" primaryKey="/1/@tables.9/@columns.0" query="EINSCHULUNG_TABLE_QUERY"/>
  <roma:Hierarchy id="HIERARCHY2" name="Schulen nach Trägerschaft" levels="LEVEL3 LEVEL4 LEVEL5 LEVEL6" allMemberName="Alle Schulen" hasAll="true" primaryKey="/1/@tables.0/@columns.0" query="JOIN2"/>
  <roma:Hierarchy id="HIERARCHY10" name="Schulabschlüsse" levels="LEVEL16" allMemberName="Gesamt" hasAll="true" primaryKey="/1/@tables.11/@columns.0" query="SCHUL_ABSCHLUSS_TABLE_QUERY"/>
  <roma:Hierarchy id="HIERARCHY7" name="Berufsgruppen" levels="LEVEL13" allMemberName="Alle Berufsgruppen" hasAll="true" primaryKey="/1/@tables.17/@columns.0" query="PERSONAL_ART_TABLE_QUERY"/>
  <roma:Hierarchy id="HIERARCHY1" name="Schulen nach Ganztagsangebot" levels="LEVEL1 LEVEL2" allMemberName="Alle Schulen" hasAll="true" primaryKey="/1/@tables.0/@columns.0" query="JOIN1"/>
  <roma:Hierarchy name="Sonderpädagogische Förderung" levels="LEVEL20 LEVEL21" allMemberName="Gesamt" hasAll="true" primaryKey="/1/@tables.16/@columns.0" query="JOIN5"/>
  <roma:Hierarchy id="HIERARCHY11" name="Migrationshintergrund" levels="LEVEL17" allMemberName="Gesamt" hasAll="true" primaryKey="/1/@tables.12/@columns.0" query="MIGRATIONS_HINTERGRUND_TABLE_QUERY"/>
  <roma:Hierarchy id="HIERARCHY9" name="Klassenwiederholung" levels="LEVEL15" allMemberName="Gesamt" hasAll="true" primaryKey="/1/@tables.10/@columns.0" query="KLASSEN_WIEDERHOLUNG_TABLE_QUERY"/>
  <roma:Hierarchy id="HIERARCHY12" name="Wohnlandkreis" levels="LEVEL18 LEVEL19" allMemberName="Alle Wohnlandkreise" hasAll="true" primaryKey="/1/@tables.13/@columns.0" query="JOIN4"/>
  <roma:StandardDimension id="Klassenwiederholung" name="Klassenwiederholung" hierarchies="HIERARCHY9"/>
  <roma:StandardDimension id="Altersgruppen_Personal" name="Altersgruppen Personal" hierarchies="HIERARCHY5"/>
  <roma:StandardDimension id="Schuljahre" name="Schuljahre" hierarchies="HIERARCHY4"/>
  <roma:StandardDimension id="Inklusion" name="Inklusion" hierarchies="/62"/>
  <roma:StandardDimension id="Geschlecht" name="Geschlecht" hierarchies="HIERARCHY6"/>
  <roma:StandardDimension id="Einschulungen" name="Einschulungen" hierarchies="HIERARCHY8"/>
  <roma:StandardDimension id="Berufsgruppen_Personal" name="Berufsgruppen Personal" hierarchies="HIERARCHY7"/>
  <roma:StandardDimension id="Schulabschluss" name="Schulabschluss" hierarchies="HIERARCHY10"/>
  <roma:StandardDimension id="Wohnlandkreis" name="Wohnlandkreis" hierarchies="HIERARCHY12"/>
  <roma:StandardDimension id="Schulen" name="Schulen" hierarchies="HIERARCHY1 HIERARCHY2 HIERARCHY3"/>
  <roma:StandardDimension id="Migrationshintergrund" name="Migrationshintergrund" hierarchies="HIERARCHY11"/>
  <roma:PhysicalCube id="CUBE2" name="Pädagogisches Personal an Jenaer Schulen" query="FACT_PERSONAM_TABLE_QUERY">
    <dimensionConnectors foreignKey="/1/@tables.21/@columns.0" dimension="Schulen" overrideDimensionName="Schulen"/>
    <dimensionConnectors foreignKey="/1/@tables.21/@columns.1" dimension="Schuljahre" overrideDimensionName="Schuljahr"/>
    <dimensionConnectors foreignKey="/1/@tables.21/@columns.2" dimension="Altersgruppen_Personal" overrideDimensionName="Altersgruppe"/>
    <dimensionConnectors foreignKey="/1/@tables.21/@columns.3" dimension="Geschlecht" overrideDimensionName="Geschlecht"/>
    <dimensionConnectors foreignKey="/1/@tables.21/@columns.4" dimension="Berufsgruppen_Personal" overrideDimensionName="Berufsgruppe"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="M_Anzahl_Personen" name="Anzahl Personen" column="/1/@tables.21/@columns.5"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="CUBE1" name="Schulen in Jena (Institutionen)" query="FACT_SCHULEN_TABLE_QUERY">
    <dimensionConnectors foreignKey="/1/@tables.20/@columns.0" dimension="Schulen" overrideDimensionName="Schulen"/>
    <dimensionConnectors foreignKey="/1/@tables.20/@columns.1" dimension="Schuljahre" overrideDimensionName="Schuljahr"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="M_Anzahl_Schulen" name="Anzahl Schulen" column="/1/@tables.20/@columns.2"/>
      <measures xsi:type="roma:SumMeasure" id="M_Anzahl_Klassen" name="Anzahl Klassen" column="/1/@tables.20/@columns.3"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="CUBE3" name="Schüler:innen an Jenaer Schulen" query="FACT_SCHUELER_TABLE_QUERY">
    <dimensionConnectors foreignKey="/1/@tables.22/@columns.0" dimension="Schulen" overrideDimensionName="Schulen"/>
    <dimensionConnectors foreignKey="/1/@tables.22/@columns.1" dimension="Schuljahre" overrideDimensionName="Schuljahr"/>
    <dimensionConnectors foreignKey="/1/@tables.22/@columns.2" dimension="Geschlecht" overrideDimensionName="Geschlecht"/>
    <dimensionConnectors foreignKey="/1/@tables.22/@columns.3" dimension="Wohnlandkreis" overrideDimensionName="Wohnlandkreis"/>
    <dimensionConnectors foreignKey="/1/@tables.22/@columns.4" dimension="Einschulungen" overrideDimensionName="Einschulung"/>
    <dimensionConnectors foreignKey="/1/@tables.22/@columns.5" dimension="Schulabschluss" overrideDimensionName="Schulabschluss"/>
    <dimensionConnectors foreignKey="/1/@tables.22/@columns.6" dimension="Klassenwiederholung" overrideDimensionName="Klassenwiederholung"/>
    <dimensionConnectors foreignKey="/1/@tables.22/@columns.7" dimension="Migrationshintergrund" overrideDimensionName="Migrationshintergrund"/>
    <dimensionConnectors foreignKey="/1/@tables.22/@columns.8" dimension="Inklusion" overrideDimensionName="Sonderpädagogische Förderung"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="M_Anzahl_Schuler_innen" name="Anzahl Schüler:innen" column="/1/@tables.22/@columns.9"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.school.zip" download>Download Zip File</a>
