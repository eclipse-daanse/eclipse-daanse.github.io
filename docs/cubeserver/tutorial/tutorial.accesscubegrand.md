---
title: Cube_with_access_all_dimension_cube1_access_only
group: Unstrutured
kind: other
number: z0
---
Cube with examples of roles with SchemaGrant all_dimensions
Cube1 - all access
Cube2 - no access



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema with access all dimension with cube1access only" name="Cube_with_access_all_dimension_cube1_access_only" cubes="Cube1 Cube2" accessRoles="role1" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:Level id="Level2" name="Level2" column="Fact_KEY"/>
  <roma:Hierarchy id="Hierarchy1" name="Hierarchy1" levels="Level2" primaryKey="Fact_KEY" query="FactQuery"/>
  <roma:StandardDimension id="Dimension1" name="Dimension1" hierarchies="Hierarchy1"/>
  <roma:PhysicalCube id="Cube1" name="Cube1" query="FactQuery">
    <dimensionConnectors foreignKey="Fact_KEY" dimension="Dimension1" overrideDimensionName="Dimension1"/>
    <dimensionConnectors foreignKey="Fact_KEY" dimension="Dimension1" overrideDimensionName="Dimension2"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="Cube2" name="Cube2" query="FactQuery">
    <dimensionConnectors foreignKey="Fact_KEY" dimension="Dimension1" overrideDimensionName="Dimension1"/>
    <measureGroups/>
  </roma:PhysicalCube>
  <roma:AccessRole id="role1" name="role1">
    <accessCatalogGrants catalogAccess="all_dimensions">
      <cubeGrants cubeAccess="all" cube="Cube1"/>
      <cubeGrants cube="Cube2"/>
    </accessCatalogGrants>
  </roma:AccessRole>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.accesscubegrand.zip" download>Download Zip File</a>
