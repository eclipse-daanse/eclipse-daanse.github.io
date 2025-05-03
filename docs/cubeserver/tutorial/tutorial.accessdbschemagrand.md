---
title: Cube_with_access_database_schema
group: Unstrutured
kind: other
number: z0
---
Cube with examples of roles with database schema grant
role_database_schema_access_all - access all tables (Fact, Fact1) and all columns
role_database_schema_access_custom - access tables (Fact, Fact1) and all columns from Fact and KEY column from Fact1. no access for VALUE column from Fact1



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema with access database schema" name="Cube_with_access_database_schema" cubes="Cube" accessRoles="role_database_schema_access_all role_database_schema_access_custom" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="Fact1" name="Fact1">
      <columns xsi:type="roma:PhysicalColumn" id="Fact1_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact1_VALUE" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:PhysicalCube id="Cube" name="Cube" query="FactQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:AccessRole id="role_database_schema_access_custom" name="role_database_schema_access_custom">
    <accessCatalogGrants catalogAccess="custom">
      <cubeGrants cubeAccess="all" cube="Cube"/>
      <databaseSchemaGrants databaseSchemaAccess="custom" databaseSchema="databaseSchema">
        <tableGrants tableAccess="all" table="Fact"/>
        <tableGrants tableAccess="custom" table="Fact1">
          <columnGrants columnAccess="all" column="Fact1_KEY"/>
          <columnGrants column="Fact1_VALUE"/>
        </tableGrants>
      </databaseSchemaGrants>
    </accessCatalogGrants>
  </roma:AccessRole>
  <roma:AccessRole id="role_database_schema_access_all" name="role_database_schema_access_all">
    <accessCatalogGrants catalogAccess="custom">
      <cubeGrants cubeAccess="all" cube="Cube"/>
      <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="databaseSchema"/>
    </accessCatalogGrants>
  </roma:AccessRole>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.accessdbschemagrand.zip" download>Download Zip File</a>
