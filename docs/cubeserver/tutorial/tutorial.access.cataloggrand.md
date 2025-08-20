---
title: Cube with roles access catalog
group: Access
kind: TUTORIAL
number: 2.4.4
---
        Cube with with CatalogGrant.
roleAll role                   : use CatalogGrant access all; (access cube1)
roleNone role                  : use CatalogGrant access none; (no access cube1)
roleAllDimWithCubeGrand role   : use CatalogGrant access all_dimensions; CubeGrant cube1 access all; cube2 access none (access cube1)
roleAllDimWithoutCubeGrand role: use CatalogGrant access all_dimensions without cube grant (As result is 'no access'. For access need CubeGrant with custom or all);


# Cube with roles access catalog

This tutorial discusses roles with CatalogGrant.

roleAll role                   : use CatalogGrant access all; (access cube1)
roleNone role                  : use CatalogGrant access none; (no access cube1)
roleAllDimWithCubeGrand role   : use CatalogGrant access all_dimensions; CubeGrant cube1 access all; cube2 access none (access cube1)
roleAllDimWithoutCubeGrand role: use CatalogGrant access all_dimensions without cube grant (As result is 'no access'. For access need CubeGrant with custom or all);


## Database Schema

The Database Schema contains the Fact table with two columns: KEY and VALUE. The KEY column is used as the discriminator in the the Level and Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="_databaseSchema_CatalogGrand">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the Fact table to use in in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

This Example uses one simple Level1 bases on the KEY column.


```xml
<roma:Level  id="_level_key" name="Level1" column="_column_fact_key"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1 without hasAll Level1

The Hierarchy1 is defined with the hasAll property set to false and the one level1.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_main" name="Hierarchy1" hasAll="false" primaryKey="_column_fact_key" query="_query_fact" levels="_level_key"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension1

The dimension1 is defined with the one hierarchy1.


```xml
<roma:StandardDimension  id="_dimension_main" name="Dimension1" hierarchies="roma:ExplicitHierarchy _hierarchy_main"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1 with access all

The cube1 is defines by the DimensionConnector1 and the DimensionConnector2  and the MeasureGroup with measure with aggregation sum.


```xml
<roma:PhysicalCube   id="_cube_main" name="Cube1" query="_query_fact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_key" dimension="roma:StandardDimension _dimension_main" overrideDimensionName="Dimension1" id="_dimensionConnector_main"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_key" dimension="roma:StandardDimension _dimension_main" overrideDimensionName="Dimension2" id="_dimensionConnector_secondary"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure1" column="_column_fact_value"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleAll

The roleAll use CatalogGrant access all; (access cube1)


```xml
<roma:AccessRole  id="_accessRole_all" name="roleAll">
  <accessCatalogGrants catalogAccess="all"/>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleNone

The roleNone use CatalogGrant access none; (no access cube1)


```xml
<roma:AccessRole  id="_accessRole_none" name="roleNone">
  <accessCatalogGrants/>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleAllDimWithCubeGrand

The roleAll use CatalogGrant access all_dimensions; CubeGrant access all; (access cube1)


```xml
<roma:AccessRole  id="_accessRole_allDimWithCubeGrand" name="roleAllDimWithCubeGrand">
  <accessCatalogGrants catalogAccess="all_dimensions">
    <cubeGrants cubeAccess="all" cube="roma:PhysicalCube _cube_main"/>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleAllDimWithoutCubeGrand

The roleAll use CatalogGrant access all_dimensions without CubeGrant; (no access cube1)


```xml
<roma:AccessRole  id="_accessRole_allDimWithoutCubeGrand" name="roleAllDimWithoutCubeGrand">
  <accessCatalogGrants catalogAccess="all_dimensions">
    <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="_databaseSchema_CatalogGrand"/>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_hierarchy_main" name="Hierarchy1" hasAll="false" primaryKey="_column_fact_key" query="_query_fact" levels="_level_key"/>
  <roma:Catalog description="Schema with roles access catalog" name="Cube with roles access catalog" cubes="_cube_main" accessRoles="_accessRole_all _accessRole_none _accessRole_allDimWithCubeGrand _accessRole_allDimWithoutCubeGrand" dbschemas="_databaseSchema_CatalogGrand"/>
  <roma:DatabaseSchema id="_databaseSchema_CatalogGrand">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_key" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_value" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:Level id="_level_key" name="Level1" column="_column_fact_key"/>
  <roma:StandardDimension id="_dimension_main" name="Dimension1" hierarchies="_hierarchy_main"/>
  <roma:PhysicalCube id="_cube_main" name="Cube1" query="_query_fact">
    <dimensionConnectors foreignKey="_column_fact_key" dimension="_dimension_main" overrideDimensionName="Dimension1" id="_dimensionConnector_main"/>
    <dimensionConnectors foreignKey="_column_fact_key" dimension="_dimension_main" overrideDimensionName="Dimension2" id="_dimensionConnector_secondary"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_sum" name="Measure1" column="_column_fact_value"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:AccessRole id="_accessRole_allDimWithoutCubeGrand" name="roleAllDimWithoutCubeGrand">
    <accessCatalogGrants catalogAccess="all_dimensions">
      <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="_databaseSchema_CatalogGrand"/>
    </accessCatalogGrants>
  </roma:AccessRole>
  <roma:AccessRole id="_accessRole_all" name="roleAll">
    <accessCatalogGrants catalogAccess="all"/>
  </roma:AccessRole>
  <roma:AccessRole id="_accessRole_allDimWithCubeGrand" name="roleAllDimWithCubeGrand">
    <accessCatalogGrants catalogAccess="all_dimensions">
      <cubeGrants cubeAccess="all" cube="_cube_main"/>
    </accessCatalogGrants>
  </roma:AccessRole>
  <roma:AccessRole id="_accessRole_none" name="roleNone">
    <accessCatalogGrants/>
  </roma:AccessRole>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.access.cataloggrand.zip" download>Download Zip File</a>
