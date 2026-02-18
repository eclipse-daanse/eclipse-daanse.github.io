---
title: Unique Key Level Name
group: Hierarchy
kind: TUTORIAL
number: 2.16.03
---
# Daanse Tutorial - Unique Key Level Name

Catalog with Minimal Cube with Parent Child Hierarchy


## Database Schema

The Database Schema contains the `AUTOMOTIVE_DIM` table with 16 columns:
`AUTO_DIM_ID`, `MAKE_ID`, `MAKE`, `MODEL_ID`, `MODEL`, `PLANT_ID`, `PLANT`, `PLANT_STATE_ID`,
`PLANT_CITY_ID`, `VEHICLE_ID`, `COLOR_ID`, `TRIM_ID`, `LICENSE_ID`, `LICENSE`, `LICENSE_STATE_ID`, `PRICE`.
The `AUTO_DIM_ID` column is used as the discriminator in the Hierarchy definitions.


```xml
<roma:DatabaseSchema   id="_databaseSchema_main">
  <tables xsi:type="roma:PhysicalTable" id="_table_automotiveDim" name="AUTOMOTIVE_DIM">
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_autoDimId" name="AUTO_DIM_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_makeId" name="MAKE_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_make" name="MAKE" columnSize="100"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_modelId" name="MODEL_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_model" name="MODEL" columnSize="100"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_plantId" name="PLANT_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_plant" name="PLANT" columnSize="100"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_plantStateId" name="PLANT_STATE_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_plantCityId" name="PLANT_CITY_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_vehicleId" name="VEHICLE_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_colorId" name="COLOR_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_trimId" name="TRIM_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_licenseId" name="LICENSE_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_license" name="LICENSE" columnSize="100"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_licenseStateId" name="LICENSE_STATE_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_price" name="PRICE" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableQuery that selects all columns from the `AUTOMOTIVE_DIM` table to use in the measures.


```xml
<roma:TableQuery  id="_query_fact" table="_table_automotiveDim"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Automotive

The time dimension is defined with the one hierarchy.


```xml
<roma:StandardDimension  id="_dimension_automotive" name="Automotive" hierarchies="roma:ExplicitHierarchy _hierarchy_automotive"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists 5 levels Make, Model, ManufacturingPlant, Vehicle Identification Number, LicensePlateNum.
Hierarchy has UniqueKeyLevelName attribute.
The UniqueKeyLevelName attribute of a `<Hierarchy>` is used to indicate that the given level
taken together with all higher levels in the hierarchy acts as a unique alternate key,
ensuring that for any unique combination of those level values, there is exactly one combination
of values for all levels below it.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_automotive" primaryKey="_column_automotiveDim_autoDimId" uniqueKeyLevelName="Vehicle Identification Number" query="_query_fact" levels="_level_make _level_model _level_manufacturingPlant _level_vehicleIdentificationNumber _level_licensePlateNum"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Make

This Example uses 'Make' level based on the `MAKE_ID` column as key and name column `MAKE` of table `AUTOMOTIVE_DIM`.


```xml
<roma:Level  id="_level_make" name="Make" column="_column_automotiveDim_makeId" nameColumn="_column_automotiveDim_make"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Model

This Example uses 'Model' level based on the `MODEL_ID` column as key and name column `MODEL` of table `AUTOMOTIVE_DIM`.


```xml
<roma:Level  id="_level_model" name="Model" column="_column_automotiveDim_modelId" nameColumn="_column_automotiveDim_model"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## ManufacturingPlant

This Example uses 'ManufacturingPlant' level based on the `PLANT_ID` column as key and name column `PLANT` of table `AUTOMOTIVE_DIM`.


```xml
<roma:Level  id="_level_manufacturingPlant" name="ManufacturingPlant" column="_column_automotiveDim_plantId" nameColumn="_column_automotiveDim_plant">
  <memberProperties id="_memberProperty_state" name="State" column="_column_automotiveDim_plantStateId" dependsOnLevelValue="true" propertyType="Numeric"/>
  <memberProperties id="_memberProperty_city" name="City" column="_column_automotiveDim_plantCityId" dependsOnLevelValue="true" propertyType="Numeric"/>
</roma:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Vehicle Identification Number

This Example uses 'Vehicle Identification Number' level based on the `VEHICLE_ID` column as key of table `AUTOMOTIVE_DIM`.


```xml
<roma:Level  id="_level_vehicleIdentificationNumber" name="Vehicle Identification Number" column="_column_automotiveDim_vehicleId">
  <memberProperties id="_memberProperty_color" name="Color" column="_column_automotiveDim_colorId" dependsOnLevelValue="true" propertyType="Numeric"/>
  <memberProperties id="_memberProperty_trim" name="Trim" column="_column_automotiveDim_trimId" dependsOnLevelValue="true" propertyType="Numeric"/>
</roma:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LicensePlateNum

This Example uses 'LicensePlateNum' level based on the `LICENSE_ID` column as key and name column `LICENSE` of table `AUTOMOTIVE_DIM`.


```xml
<roma:Level  id="_level_licensePlateNum" name="LicensePlateNum" column="_column_automotiveDim_licenseId">
  <memberProperties id="_memberProperty_licenseState" name="State" column="_column_automotiveDim_licenseStateId" dependsOnLevelValue="true" propertyType="Numeric"/>
</roma:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure

        Measure use AUTOMOTIVE_DIM table PRICE column with sum aggregation in Cube.


```xml
<roma:SumMeasure  id="_measure_measure" name="Measure" column="_column_automotiveDim_price"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

The cube with hierarchy with functional dependency optimizations.


```xml
<roma:PhysicalCube   id="_cube_cube" name="Cube" query="_query_fact">
  <dimensionConnectors dimension="roma:StandardDimension _dimension_automotive" overrideDimensionName="Automotive" id="_dimensionConnector_automotive"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_measure" name="Measure" column="_column_automotiveDim_price"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Hierarchy with unique key level name optimizations" name="Daanse Tutorial - Unique Key Level Name" cubes="_cube_cube" dbschemas="_databaseSchema_main"/>
  <roma:DatabaseSchema id="_databaseSchema_main">
    <tables xsi:type="roma:PhysicalTable" id="_table_automotiveDim" name="AUTOMOTIVE_DIM">
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_autoDimId" name="AUTO_DIM_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_makeId" name="MAKE_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_make" name="MAKE" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_modelId" name="MODEL_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_model" name="MODEL" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_plantId" name="PLANT_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_plant" name="PLANT" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_plantStateId" name="PLANT_STATE_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_plantCityId" name="PLANT_CITY_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_vehicleId" name="VEHICLE_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_colorId" name="COLOR_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_trimId" name="TRIM_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_licenseId" name="LICENSE_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_license" name="LICENSE" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_licenseStateId" name="LICENSE_STATE_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_automotiveDim_price" name="PRICE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_fact" table="_table_automotiveDim"/>
  <roma:Level id="_level_licensePlateNum" name="LicensePlateNum" column="_column_automotiveDim_licenseId">
    <memberProperties id="_memberProperty_licenseState" name="State" column="_column_automotiveDim_licenseStateId" dependsOnLevelValue="true" propertyType="Numeric"/>
  </roma:Level>
  <roma:Level id="_level_make" name="Make" column="_column_automotiveDim_makeId" nameColumn="_column_automotiveDim_make"/>
  <roma:Level id="_level_manufacturingPlant" name="ManufacturingPlant" column="_column_automotiveDim_plantId" nameColumn="_column_automotiveDim_plant">
    <memberProperties id="_memberProperty_state" name="State" column="_column_automotiveDim_plantStateId" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties id="_memberProperty_city" name="City" column="_column_automotiveDim_plantCityId" dependsOnLevelValue="true" propertyType="Numeric"/>
  </roma:Level>
  <roma:Level id="_level_model" name="Model" column="_column_automotiveDim_modelId" nameColumn="_column_automotiveDim_model"/>
  <roma:Level id="_level_vehicleIdentificationNumber" name="Vehicle Identification Number" column="_column_automotiveDim_vehicleId">
    <memberProperties id="_memberProperty_color" name="Color" column="_column_automotiveDim_colorId" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties id="_memberProperty_trim" name="Trim" column="_column_automotiveDim_trimId" dependsOnLevelValue="true" propertyType="Numeric"/>
  </roma:Level>
  <roma:ExplicitHierarchy id="_hierarchy_automotive" primaryKey="_column_automotiveDim_autoDimId" uniqueKeyLevelName="Vehicle Identification Number" query="_query_fact" levels="_level_make _level_model _level_manufacturingPlant _level_vehicleIdentificationNumber _level_licensePlateNum"/>
  <roma:StandardDimension id="_dimension_automotive" name="Automotive" hierarchies="_hierarchy_automotive"/>
  <roma:PhysicalCube id="_cube_cube" name="Cube" query="_query_fact">
    <dimensionConnectors dimension="_dimension_automotive" overrideDimensionName="Automotive" id="_dimensionConnector_automotive"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_measure" name="Measure" column="_column_automotiveDim_price"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.hierarchy.uniquekeylevelname.zip" download>Download Zip File</a>
