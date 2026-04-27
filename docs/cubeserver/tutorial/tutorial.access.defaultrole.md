---
title: Access With Default Role
group: Access
kind: TUTORIAL
number: 2.04.07
---
# Daanse Tutorial - Access With Default Role

This tutorial discusses role with HierarchyGrant

- `role1` role:   use HierarchyGrant hierarchy1 access `all` hierarchy2 access `none`;
Catalog has property default access role - role1;
This role that should be applied by default when users connect without explicit role assignment.
This provides a baseline security policy for the catalog, typically configured to allow basic read access
to public data while restricting sensitive information. If not specified, Daanse does not assign a built-in default role,
and access will be denied unless a role is explicitly provided.
This setting is particularly useful for public reporting scenarios, shared dashboards, or development environments where default read access is desirable.


## Database Schema

The Database Schema contains the `Fact` table with two columns: `KEY` and `VALUE`. The `KEY` column is used as the discriminator in the Level and Hierarchy definitions.


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableSource that selects all columns from the `Fact` table to use in the hierarchy and in the cube for the measures.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level2

This Example uses one simple Level2 based on the KEY column.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_level1" name="Level1">
  <column href="_column_fact_key"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1 without hasAll Level1

The Hierarchy1 is defined with the hasAll property set to false and the one level2.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension1

The dimension1 is defined with the one hierarchy1.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1 _explicithierarchy_hierarchy2"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy2" name="Hierarchy2" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level2"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_fact_key"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1 with access all

The cube1 is defined by the DimensionConnector1 and the MeasureGroup with measure with aggregation sum.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension1" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1 _explicithierarchy_hierarchy2"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy2" name="Hierarchy2" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level2"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_fact_key"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Role1

The `role1` use CatalogGrant access `all`; CubeGrant cube1 access `all`; dimensionGrant dimension1 access `all`;
hierarchyGrant hierarchy1 access custom with member grants<br />
[Dimension1].[A] -all,<br />
[Dimension1].[B] -none,<br />
[Dimension1].[C] -none;<br />
(Cube1 - access to "A" Cube2 - no access)


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcacc:AccessRole xmi:id="_accessrole_role1" name="role1">
    <accessCatalogGrants xmi:id="_accesscataloggrant" catalogAccess="custom">
      <cubeGrants xmi:id="_accesscubegrant_cube1" cubeAccess="custom">
        <dimensionGrants xmi:id="_accessdimensiongrant_dimension1" dimensionAccess="custom" dimension="_standarddimension_dimension1"/>
        <hierarchyGrants xmi:id="_accesshierarchygrant" hierarchyAccess="all"/>
        <hierarchyGrants xmi:id="_accesshierarchygrant_hierarchy1" hierarchyAccess="all" hierarchy="_explicithierarchy_hierarchy1" bottomLevel="_level_level1" topLevel="_level_level1"/>
        <hierarchyGrants xmi:id="_accesshierarchygrant_hierarchy2" hierarchy="_explicithierarchy_hierarchy2" bottomLevel="_level_level2" topLevel="_level_level2"/>
        <cube xsi:type="rolapcube:PhysicalCube" href="_physicalcube_cube1"/>
      </cubeGrants>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant" databaseSchemaAccess="all">
        <databaseSchema href="_schema"/>
      </databaseSchemaGrants>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1 _explicithierarchy_hierarchy2"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy2" name="Hierarchy2" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level2"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_fact_key"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_access_with_default_role" description="Access control with default role" name="Daanse Tutorial - Access With Default Role" cubes="_physicalcube_cube1" accessRoles="_accessrole_role1" defaultAccessRole="_accessrole_role1" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key"/>
  <rolaplev:Level xmi:id="_level_level2" name="Level2" column="_column_fact_key"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy2" name="Hierarchy2" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level2"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1 _explicithierarchy_hierarchy2"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension1" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension1"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcacc:AccessRole xmi:id="_accessrole_role1" name="role1">
    <accessCatalogGrants xmi:id="_accesscataloggrant" catalogAccess="custom">
      <cubeGrants xmi:id="_accesscubegrant_cube1" cubeAccess="custom" cube="_physicalcube_cube1">
        <dimensionGrants xmi:id="_accessdimensiongrant_dimension1" dimensionAccess="custom" dimension="_standarddimension_dimension1"/>
        <hierarchyGrants xmi:id="_accesshierarchygrant" hierarchyAccess="all"/>
        <hierarchyGrants xmi:id="_accesshierarchygrant_hierarchy1" hierarchyAccess="all" hierarchy="_explicithierarchy_hierarchy1" bottomLevel="_level_level1" topLevel="_level_level1"/>
        <hierarchyGrants xmi:id="_accesshierarchygrant_hierarchy2" hierarchy="_explicithierarchy_hierarchy2" bottomLevel="_level_level2" topLevel="_level_level2"/>
      </cubeGrants>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant" databaseSchemaAccess="all" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.access.defaultrole.zip" download>Download Zip File</a>
