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
<roma:DatabaseSchema   id="databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_Fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_KEY" name="KEY"/>
    <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE" name="VALUE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the Fact table to use in in the hierarchy and in the cube for the measures.


```xml
<roma:TableQuery  id="_FactQuery" table="_Fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level1

This Example uses one simple Level1 bases on the KEY column.


```xml
<roma:Level  id="_Level1" name="Level1" column="_Fact_KEY"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy1 without hasAll Level1

The Hierarchy1 is defined with the hasAll property set to false and the one level1.


```xml
<roma:ExplicitHierarchy  id="_Hierarchy1" name="Hierarchy1" hasAll="false" primaryKey="_Fact_KEY" query="_FactQuery" levels="_Level1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension1

The dimension1 is defined with the one hierarchy1.


```xml
<roma:StandardDimension  id="_Dimension1" name="Dimension1" hierarchies="roma:ExplicitHierarchy _Hierarchy1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube1 with access all

The cube1 is defines by the DimensionConnector1 and the DimensionConnector2  and the MeasureGroup with measure with aggregation sum.


```xml
<roma:PhysicalCube   id="_Cube1" name="Cube1" query="_FactQuery">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _Fact_KEY" dimension="roma:StandardDimension _Dimension1" overrideDimensionName="Dimension1"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _Fact_KEY" dimension="roma:StandardDimension _Dimension1" overrideDimensionName="Dimension2"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_Measure1" name="Measure1" column="_Fact_VALUE"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleAll

The roleAll use CatalogGrant access all; (access cube1)


```xml
<roma:AccessRole  id="_roleAll" name="roleAll">
  <accessCatalogGrants catalogAccess="all"/>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleNone

The roleNone use CatalogGrant access none; (no access cube1)


```xml
<roma:AccessRole  id="_roleNone" name="roleNone">
  <accessCatalogGrants/>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleAllDimWithCubeGrand

The roleAll use CatalogGrant access all_dimensions; CubeGrant access all; (access cube1)


```xml
<roma:AccessRole  id="_roleAllDimWithCubeGrand" name="roleAllDimWithCubeGrand">
  <accessCatalogGrants catalogAccess="all_dimensions">
    <cubeGrants cubeAccess="all" cube="roma:PhysicalCube _Cube1"/>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## roleAllDimWithoutCubeGrand

The roleAll use CatalogGrant access all_dimensions without CubeGrant; (no access cube1)


```xml
<roma:AccessRole  id="_roleAllDimWithoutCubeGrand" name="roleAllDimWithoutCubeGrand">
  <accessCatalogGrants catalogAccess="all_dimensions">
    <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="databaseSchema"/>
  </accessCatalogGrants>
</roma:AccessRole>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="_Hierarchy1" name="Hierarchy1" hasAll="false" primaryKey="_Fact_KEY" query="_FactQuery" levels="_Level1"/>
  <roma:Catalog description="Schema with roles access catalog" name="Cube with roles access catalog" cubes="_Cube1" accessRoles="_roleAll _roleNone _roleAllDimWithCubeGrand _roleAllDimWithoutCubeGrand" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_FactQuery" table="_Fact"/>
  <roma:Level id="_Level1" name="Level1" column="_Fact_KEY"/>
  <roma:StandardDimension id="_Dimension1" name="Dimension1" hierarchies="_Hierarchy1"/>
  <roma:PhysicalCube id="_Cube1" name="Cube1" query="_FactQuery">
    <dimensionConnectors foreignKey="_Fact_KEY" dimension="_Dimension1" overrideDimensionName="Dimension1"/>
    <dimensionConnectors foreignKey="_Fact_KEY" dimension="_Dimension1" overrideDimensionName="Dimension2"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_Measure1" name="Measure1" column="_Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:AccessRole id="_roleAllDimWithoutCubeGrand" name="roleAllDimWithoutCubeGrand">
    <accessCatalogGrants catalogAccess="all_dimensions">
      <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="databaseSchema"/>
    </accessCatalogGrants>
  </roma:AccessRole>
  <roma:AccessRole id="_roleAllDimWithCubeGrand" name="roleAllDimWithCubeGrand">
    <accessCatalogGrants catalogAccess="all_dimensions">
      <cubeGrants cubeAccess="all" cube="_Cube1"/>
    </accessCatalogGrants>
  </roma:AccessRole>
  <roma:AccessRole id="_roleAll" name="roleAll">
    <accessCatalogGrants catalogAccess="all"/>
  </roma:AccessRole>
  <roma:AccessRole id="_roleNone" name="roleNone">
    <accessCatalogGrants/>
  </roma:AccessRole>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.access.cataloggrand.zip" download>Download Zip File</a>
