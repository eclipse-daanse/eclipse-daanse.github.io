---
title: Minimal_Cube_with_cube_dimension_with_functional_dependency_optimizations
group: Unstrutured
kind: other
number: z0
---
    A basic OLAP schema with a level with with functional dependency optimizations

    In some circumstances, it may be possible to optimize performance by taking advantage of known
    functional dependencies in the data being processed. Such dependencies are typically the result
    of business rules associated with the systems producing the data, and often cannot be inferred
    just by looking at the data itself.
Functional dependencies are declared to Mondrian using the dependsOnLevelValue attribute of the
`<Property>` element and the uniqueKeyLevelName attribute of the `<Hierarchy>` element.
The dependsOnLevelValue attribute of a member property is used to indicate that the value of the
member property is functionally dependent on the value of the `<Level>` in which the member property
is defined. In other words, for a given value of the level, the value of the property is invariant.
The uniqueKeyLevelName attribute of a `<Hierarchy>` is used to indicate that the given level
(if any) taken together with all higher levels in the hierarchy acts as a unique alternate key,
ensuring that for any unique combination of those level values, there is exactly one combination
of values for all levels below it.



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="hierarchy" hasAll="true" primaryKey="AUTOMOTIVE_DIM_AUTO_DIM_ID" uniqueKeyLevelName="Vehicle Identification Number" query="FactQuery" levels="Make Model ManufacturingPlant Vehicle_Identification_Number LicensePlateNum"/>
  <roma:Catalog description="Schema with cube dimension with functional dependency optimizations" name="Minimal_Cube_with_cube_dimension_with_functional_dependency_optimizations" cubes="Cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="AUTOMOTIVE_DIM" name="AUTOMOTIVE_DIM">
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_AUTO_DIM_ID" name="AUTO_DIM_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_MAKE_ID" name="MAKE_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_MAKE" name="MAKE" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_MODEL_ID" name="MODEL_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_MODEL" name="MODEL" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_PLANT_ID" name="PLANT_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_PLANT" name="PLANT" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_PLANT_STATE_ID" name="PLANT_STATE_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_PLANT_CITY_ID" name="PLANT_CITY_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_VEHICLE_ID" name="VEHICLE_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_COLOR_ID" name="COLOR_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_TRIM_ID" name="TRIM_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_LICENSE_ID" name="LICENSE_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_LICENSE" name="LICENSE" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_LICENSE_STATE_ID" name="LICENSE_STATE_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="AUTOMOTIVE_DIM_PRICE" name="PRICE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="AUTOMOTIVE_DIM"/>
  <roma:Level id="Vehicle_Identification_Number" name="Vehicle Identification Number" column="AUTOMOTIVE_DIM_VEHICLE_ID">
    <memberProperties id="Color" name="Color" column="AUTOMOTIVE_DIM_COLOR_ID" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties id="Trim" name="Trim" column="AUTOMOTIVE_DIM_TRIM_ID" dependsOnLevelValue="true" propertyType="Numeric"/>
  </roma:Level>
  <roma:Level id="Model" name="Model" column="AUTOMOTIVE_DIM_MODEL_ID" nameColumn="AUTOMOTIVE_DIM_MODEL"/>
  <roma:Level id="ManufacturingPlant" name="ManufacturingPlant" column="AUTOMOTIVE_DIM_PLANT_ID" nameColumn="AUTOMOTIVE_DIM_PLANT">
    <memberProperties id="State" name="State" column="AUTOMOTIVE_DIM_PLANT_STATE_ID" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties id="City" name="City" column="AUTOMOTIVE_DIM_PLANT_CITY_ID" dependsOnLevelValue="true" propertyType="Numeric"/>
  </roma:Level>
  <roma:Level id="Make" name="Make" column="AUTOMOTIVE_DIM_MAKE_ID" nameColumn="AUTOMOTIVE_DIM_MAKE"/>
  <roma:Level id="LicensePlateNum" name="LicensePlateNum" column="AUTOMOTIVE_DIM_VEHICLE_ID">
    <memberProperties id="State" name="State" column="AUTOMOTIVE_DIM_LICENSE_STATE_ID" dependsOnLevelValue="true" propertyType="Numeric"/>
  </roma:Level>
  <roma:StandardDimension id="Automotive" name="Automotive" hierarchies="hierarchy"/>
  <roma:PhysicalCube id="Cube" name="Cube" query="FactQuery">
    <dimensionConnectors dimension="Automotive" overrideDimensionName="Automotive"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure" name="Measure" column="AUTOMOTIVE_DIM_PRICE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimensionwithfunctionaldependencyoptimization.zip" download>Download Zip File</a>
