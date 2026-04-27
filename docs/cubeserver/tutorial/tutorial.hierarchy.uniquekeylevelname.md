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
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_automotive_dim" name="AUTOMOTIVE_DIM">
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_auto_dim_id" name="AUTO_DIM_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make_id" name="MAKE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make" name="MAKE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model_id" name="MODEL_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model" name="MODEL"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_id" name="PLANT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant" name="PLANT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_state_id" name="PLANT_STATE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_city_id" name="PLANT_CITY_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_vehicle_id" name="VEHICLE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_color_id" name="COLOR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_trim_id" name="TRIM_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_id" name="LICENSE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license" name="LICENSE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_state_id" name="LICENSE_STATE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_price" name="PRICE"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The Query is a simple TableSource that selects all columns from the `AUTOMOTIVE_DIM` table to use in the measures.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_automotive_dim" table="_table_automotive_dim"/>
  <relational:Table xmi:id="_table_automotive_dim" name="AUTOMOTIVE_DIM">
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_auto_dim_id" name="AUTO_DIM_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make_id" name="MAKE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make" name="MAKE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model_id" name="MODEL_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model" name="MODEL"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_id" name="PLANT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant" name="PLANT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_state_id" name="PLANT_STATE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_city_id" name="PLANT_CITY_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_vehicle_id" name="VEHICLE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_color_id" name="COLOR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_trim_id" name="TRIM_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_id" name="LICENSE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license" name="LICENSE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_state_id" name="LICENSE_STATE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_price" name="PRICE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Automotive

The time dimension is defined with the one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_automotive" name="Automotive" hierarchies="_explicithierarchy_auto_dim_id"/>
  <rolapsrc:TableSource xmi:id="_tablesource_automotive_dim" table="_table_automotive_dim"/>
  <rolaplev:Level xmi:id="_level_model" name="Model" column="_column_automotive_dim_model_id" nameColumn="_column_automotive_dim_model"/>
  <relational:Table xmi:id="_table_automotive_dim" name="AUTOMOTIVE_DIM">
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_auto_dim_id" name="AUTO_DIM_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make_id" name="MAKE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make" name="MAKE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model_id" name="MODEL_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model" name="MODEL"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_id" name="PLANT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant" name="PLANT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_state_id" name="PLANT_STATE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_city_id" name="PLANT_CITY_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_vehicle_id" name="VEHICLE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_color_id" name="COLOR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_trim_id" name="TRIM_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_id" name="LICENSE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license" name="LICENSE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_state_id" name="LICENSE_STATE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_price" name="PRICE"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_auto_dim_id" primaryKey="_column_automotive_dim_auto_dim_id" uniqueKeyLevelName="Vehicle Identification Number" query="_tablesource_automotive_dim" levels="_level_make _level_model _level_manufacturingplant _level_vehicle_identification_number _level_licenseplatenum"/>
  <rolaplev:Level xmi:id="_level_licenseplatenum" name="LicensePlateNum" column="_column_automotive_dim_license_id">
    <memberProperties xmi:id="_memberproperty_state" name="State" column="_column_automotive_dim_license_state_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_manufacturingplant" name="ManufacturingPlant" column="_column_automotive_dim_plant_id" nameColumn="_column_automotive_dim_plant">
    <memberProperties xmi:id="_memberproperty_state_1" name="State" column="_column_automotive_dim_plant_state_id" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_city" name="City" column="_column_automotive_dim_plant_city_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_vehicle_identification_number" name="Vehicle Identification Number" column="_column_automotive_dim_vehicle_id">
    <memberProperties xmi:id="_memberproperty_color" name="Color" column="_column_automotive_dim_color_id" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_trim" name="Trim" column="_column_automotive_dim_trim_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_make" name="Make" column="_column_automotive_dim_make_id" nameColumn="_column_automotive_dim_make"/>
</xmi:XMI>

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
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_auto_dim_id" primaryKey="_column_automotive_dim_auto_dim_id" uniqueKeyLevelName="Vehicle Identification Number" query="_tablesource_automotive_dim" levels="_level_make _level_model _level_manufacturingplant _level_vehicle_identification_number _level_licenseplatenum"/>
  <rolapsrc:TableSource xmi:id="_tablesource_automotive_dim" table="_table_automotive_dim"/>
  <rolaplev:Level xmi:id="_level_model" name="Model" column="_column_automotive_dim_model_id" nameColumn="_column_automotive_dim_model"/>
  <relational:Table xmi:id="_table_automotive_dim" name="AUTOMOTIVE_DIM">
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_auto_dim_id" name="AUTO_DIM_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make_id" name="MAKE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make" name="MAKE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model_id" name="MODEL_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model" name="MODEL"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_id" name="PLANT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant" name="PLANT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_state_id" name="PLANT_STATE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_city_id" name="PLANT_CITY_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_vehicle_id" name="VEHICLE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_color_id" name="COLOR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_trim_id" name="TRIM_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_id" name="LICENSE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license" name="LICENSE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_state_id" name="LICENSE_STATE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_price" name="PRICE"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_licenseplatenum" name="LicensePlateNum" column="_column_automotive_dim_license_id">
    <memberProperties xmi:id="_memberproperty_state" name="State" column="_column_automotive_dim_license_state_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_manufacturingplant" name="ManufacturingPlant" column="_column_automotive_dim_plant_id" nameColumn="_column_automotive_dim_plant">
    <memberProperties xmi:id="_memberproperty_state_1" name="State" column="_column_automotive_dim_plant_state_id" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_city" name="City" column="_column_automotive_dim_plant_city_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_vehicle_identification_number" name="Vehicle Identification Number" column="_column_automotive_dim_vehicle_id">
    <memberProperties xmi:id="_memberproperty_color" name="Color" column="_column_automotive_dim_color_id" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_trim" name="Trim" column="_column_automotive_dim_trim_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_make" name="Make" column="_column_automotive_dim_make_id" nameColumn="_column_automotive_dim_make"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Make

This Example uses 'Make' level based on the `MAKE_ID` column as key and name column `MAKE` of table `AUTOMOTIVE_DIM`.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_make" name="Make">
  <column href="_column_automotive_dim_make_id"/>
  <nameColumn href="_column_automotive_dim_make"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Model

This Example uses 'Model' level based on the `MODEL_ID` column as key and name column `MODEL` of table `AUTOMOTIVE_DIM`.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_model" name="Model">
  <column href="_column_automotive_dim_model_id"/>
  <nameColumn href="_column_automotive_dim_model"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## ManufacturingPlant

This Example uses 'ManufacturingPlant' level based on the `PLANT_ID` column as key and name column `PLANT` of table `AUTOMOTIVE_DIM`.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_manufacturingplant" name="ManufacturingPlant">
  <memberProperties xmi:id="_memberproperty_state" name="State" dependsOnLevelValue="true" propertyType="Numeric">
    <column href="_column_automotive_dim_plant_state_id"/>
  </memberProperties>
  <memberProperties xmi:id="_memberproperty_city" name="City" dependsOnLevelValue="true" propertyType="Numeric">
    <column href="_column_automotive_dim_plant_city_id"/>
  </memberProperties>
  <column href="_column_automotive_dim_plant_id"/>
  <nameColumn href="_column_automotive_dim_plant"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Vehicle Identification Number

This Example uses 'Vehicle Identification Number' level based on the `VEHICLE_ID` column as key of table `AUTOMOTIVE_DIM`.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_vehicle_identification_number" name="Vehicle Identification Number">
  <memberProperties xmi:id="_memberproperty_color" name="Color" dependsOnLevelValue="true" propertyType="Numeric">
    <column href="_column_automotive_dim_color_id"/>
  </memberProperties>
  <memberProperties xmi:id="_memberproperty_trim" name="Trim" dependsOnLevelValue="true" propertyType="Numeric">
    <column href="_column_automotive_dim_trim_id"/>
  </memberProperties>
  <column href="_column_automotive_dim_vehicle_id"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## LicensePlateNum

This Example uses 'LicensePlateNum' level based on the `LICENSE_ID` column as key and name column `LICENSE` of table `AUTOMOTIVE_DIM`.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_licenseplatenum" name="LicensePlateNum">
  <memberProperties xmi:id="_memberproperty_state" name="State" dependsOnLevelValue="true" propertyType="Numeric">
    <column href="_column_automotive_dim_license_state_id"/>
  </memberProperties>
  <column href="_column_automotive_dim_license_id"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Measure

        Measure use AUTOMOTIVE_DIM table PRICE column with sum aggregation in Cube.


```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_measure" name="Measure">
  <column href="_column_automotive_dim_price"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube

The cube with hierarchy with functional dependency optimizations.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_automotive_dim">
    <dimensionConnectors xmi:id="_dimensionconnector_automotive" dimension="_standarddimension_automotive" overrideDimensionName="Automotive"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure" name="Measure" column="_column_automotive_dim_price"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapdim:StandardDimension xmi:id="_standarddimension_automotive" name="Automotive" hierarchies="_explicithierarchy_auto_dim_id"/>
  <rolapsrc:TableSource xmi:id="_tablesource_automotive_dim" table="_table_automotive_dim"/>
  <rolaplev:Level xmi:id="_level_model" name="Model" column="_column_automotive_dim_model_id" nameColumn="_column_automotive_dim_model"/>
  <relational:Table xmi:id="_table_automotive_dim" name="AUTOMOTIVE_DIM">
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_auto_dim_id" name="AUTO_DIM_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make_id" name="MAKE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make" name="MAKE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model_id" name="MODEL_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model" name="MODEL"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_id" name="PLANT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant" name="PLANT"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_state_id" name="PLANT_STATE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_city_id" name="PLANT_CITY_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_vehicle_id" name="VEHICLE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_color_id" name="COLOR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_trim_id" name="TRIM_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_id" name="LICENSE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license" name="LICENSE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_state_id" name="LICENSE_STATE_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_price" name="PRICE"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_auto_dim_id" primaryKey="_column_automotive_dim_auto_dim_id" uniqueKeyLevelName="Vehicle Identification Number" query="_tablesource_automotive_dim" levels="_level_make _level_model _level_manufacturingplant _level_vehicle_identification_number _level_licenseplatenum"/>
  <rolaplev:Level xmi:id="_level_licenseplatenum" name="LicensePlateNum" column="_column_automotive_dim_license_id">
    <memberProperties xmi:id="_memberproperty_state" name="State" column="_column_automotive_dim_license_state_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_manufacturingplant" name="ManufacturingPlant" column="_column_automotive_dim_plant_id" nameColumn="_column_automotive_dim_plant">
    <memberProperties xmi:id="_memberproperty_state_1" name="State" column="_column_automotive_dim_plant_state_id" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_city" name="City" column="_column_automotive_dim_plant_city_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_vehicle_identification_number" name="Vehicle Identification Number" column="_column_automotive_dim_vehicle_id">
    <memberProperties xmi:id="_memberproperty_color" name="Color" column="_column_automotive_dim_color_id" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_trim" name="Trim" column="_column_automotive_dim_trim_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_make" name="Make" column="_column_automotive_dim_make_id" nameColumn="_column_automotive_dim_make"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_automotive_dim_plant_state_id _column_automotive_dim_trim_id _column_automotive_dim_price _column_automotive_dim_vehicle_id _column_automotive_dim_make_id _column_automotive_dim_license_state_id _column_automotive_dim_auto_dim_id _column_automotive_dim_license_id _column_automotive_dim_color_id _column_automotive_dim_model_id _column_automotive_dim_plant_city_id _column_automotive_dim_plant_id" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_automotive_dim_model _column_automotive_dim_license _column_automotive_dim_make _column_automotive_dim_plant" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_unique_key_level_name" description="Hierarchy with unique key level name optimizations" name="Daanse Tutorial - Unique Key Level Name" cubes="_physicalcube_cube" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_automotive_dim" name="AUTOMOTIVE_DIM">
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_auto_dim_id" name="AUTO_DIM_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make_id" name="MAKE_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_make" name="MAKE" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model_id" name="MODEL_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_model" name="MODEL" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_id" name="PLANT_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant" name="PLANT" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_state_id" name="PLANT_STATE_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_plant_city_id" name="PLANT_CITY_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_vehicle_id" name="VEHICLE_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_color_id" name="COLOR_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_trim_id" name="TRIM_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_id" name="LICENSE_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license" name="LICENSE" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_license_state_id" name="LICENSE_STATE_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_automotive_dim_price" name="PRICE" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_automotive_dim" table="_table_automotive_dim"/>
  <rolaplev:Level xmi:id="_level_licenseplatenum" name="LicensePlateNum" column="_column_automotive_dim_license_id">
    <memberProperties xmi:id="_memberproperty_state_1" name="State" column="_column_automotive_dim_license_state_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_make" name="Make" column="_column_automotive_dim_make_id" nameColumn="_column_automotive_dim_make"/>
  <rolaplev:Level xmi:id="_level_manufacturingplant" name="ManufacturingPlant" column="_column_automotive_dim_plant_id" nameColumn="_column_automotive_dim_plant">
    <memberProperties xmi:id="_memberproperty_state" name="State" column="_column_automotive_dim_plant_state_id" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_city" name="City" column="_column_automotive_dim_plant_city_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_model" name="Model" column="_column_automotive_dim_model_id" nameColumn="_column_automotive_dim_model"/>
  <rolaplev:Level xmi:id="_level_vehicle_identification_number" name="Vehicle Identification Number" column="_column_automotive_dim_vehicle_id">
    <memberProperties xmi:id="_memberproperty_color" name="Color" column="_column_automotive_dim_color_id" dependsOnLevelValue="true" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_trim" name="Trim" column="_column_automotive_dim_trim_id" dependsOnLevelValue="true" propertyType="Numeric"/>
  </rolaplev:Level>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_auto_dim_id" primaryKey="_column_automotive_dim_auto_dim_id" uniqueKeyLevelName="Vehicle Identification Number" query="_tablesource_automotive_dim" levels="_level_make _level_model _level_manufacturingplant _level_vehicle_identification_number _level_licenseplatenum"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_automotive" name="Automotive" hierarchies="_explicithierarchy_auto_dim_id"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_cube" name="Cube" query="_tablesource_automotive_dim">
    <dimensionConnectors xmi:id="_dimensionconnector_automotive" dimension="_standarddimension_automotive" overrideDimensionName="Automotive"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_measure" name="Measure" column="_column_automotive_dim_price"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.hierarchy.uniquekeylevelname.zip" download>Download Zip File</a>
