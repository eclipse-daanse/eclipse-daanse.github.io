---
title: Access Member Grant
group: Access
kind: TUTORIAL
number: 2.04.08
---
# Daanse Tutorial - Access Member Grant

This tutorial discusses role with MemberGrant

role1 role: with member grants <br />
- [Dimension1].[A] -all;
- [Dimension1].[B] -none;
- [Dimension1].[C] -none;
(Cube1 - access to 'A' only)

Rollup policy: (Full. Partial. Hidden.)<br />
- Full. The total for that member includes all children. This is the default policy if you don't specify the rollupPolicy attribute.
- Partial. The total for that member includes only accessible children.
- Hidden. If any of the children are inaccessible, the total is hidden.


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
## Level1

This Example uses one simple Level1 based on the `KEY` column.


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
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension1

The dimension1 is defined with the one hierarchy1.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1 with access all

The cube1 is defined by the DimensionConnector1 and the DimensionConnector2  and the MeasureGroup with measure with aggregation sum.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension1" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension1"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimension2" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension2"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key"/>
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
    <accessCatalogGrants xmi:id="_accesscataloggrant" catalogAccess="all">
      <cubeGrants xmi:id="_accesscubegrant_cube1" cubeAccess="custom">
        <dimensionGrants xmi:id="_accessdimensiongrant_dimension1" dimensionAccess="all" dimension="_standarddimension_dimension1"/>
        <hierarchyGrants xmi:id="_accesshierarchygrant" hierarchyAccess="all"/>
        <hierarchyGrants xmi:id="_accesshierarchygrant_hierarchy1" hierarchyAccess="custom" hierarchy="_explicithierarchy_hierarchy1" bottomLevel="_level_level1" topLevel="_level_level1">
          <memberGrants xmi:id="_accessmembergrant" memberAccess="all" member="[Dimension1].[Hierarchy1].[A]"/>
          <memberGrants xmi:id="_accessmembergrant_1" member="[Dimension1].[Hierarchy1].[B]"/>
          <memberGrants xmi:id="_accessmembergrant_2" member="[Dimension1].[Hierarchy1].[C]"/>
        </hierarchyGrants>
        <cube xsi:type="rolapcube:PhysicalCube" href="_physicalcube_cube1"/>
      </cubeGrants>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant" databaseSchemaAccess="all">
        <databaseSchema href="_schema"/>
      </databaseSchemaGrants>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key"/>
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
  <rolapcat:Catalog xmi:id="_catalog_access_member_grant" description="Access control with member-level grants" name="Daanse Tutorial - Access Member Grant" cubes="_physicalcube_cube1" accessRoles="_accessrole_role1" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_level1" name="Level1" column="_column_fact_key"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_hierarchy1" name="Hierarchy1" primaryKey="_column_fact_key" query="_tablesource_fact" levels="_level_level1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimension1" name="Dimension1" hierarchies="_explicithierarchy_hierarchy1"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube1" name="Cube1" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimension1" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension1"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimension2" foreignKey="_column_fact_key" dimension="_standarddimension_dimension1" overrideDimensionName="Dimension2"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure1" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcacc:AccessRole xmi:id="_accessrole_role1" name="role1">
    <accessCatalogGrants xmi:id="_accesscataloggrant" catalogAccess="all">
      <cubeGrants xmi:id="_accesscubegrant_cube1" cubeAccess="custom" cube="_physicalcube_cube1">
        <dimensionGrants xmi:id="_accessdimensiongrant_dimension1" dimensionAccess="all" dimension="_standarddimension_dimension1"/>
        <hierarchyGrants xmi:id="_accesshierarchygrant" hierarchyAccess="all"/>
        <hierarchyGrants xmi:id="_accesshierarchygrant_hierarchy1" hierarchyAccess="custom" hierarchy="_explicithierarchy_hierarchy1" bottomLevel="_level_level1" topLevel="_level_level1">
          <memberGrants xmi:id="_accessmembergrant" memberAccess="all" member="[Dimension1].[Hierarchy1].[A]"/>
          <memberGrants xmi:id="_accessmembergrant_2" member="[Dimension1].[Hierarchy1].[B]"/>
          <memberGrants xmi:id="_accessmembergrant_1" member="[Dimension1].[Hierarchy1].[C]"/>
        </hierarchyGrants>
      </cubeGrants>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant" databaseSchemaAccess="all" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.access.membergrand.zip" download>Download Zip File</a>
