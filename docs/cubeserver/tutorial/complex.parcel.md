---
title: Parcel Delivery Service
group: Full Examples
kind: COMPLEX
number: 99.1.6
---
# Parcel Database

Parcel delivery service database for analyzing package logistics and delivery operations.
Contains parcel data with dimensional analysis for delivery performance optimization
and logistics management insights.


## Parcel Cube

The Parcel cube contains delivery metrics with dimensional breakdowns for packages.
Enables analysis by dimensions, addresses, parcel types, and delivery characteristics.


```xml
<roma:PhysicalCube  id="_cube_parcels" name="Parcels" query="_query_parcels"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Width Dimension

Physical dimensions enable analysis of package sizes and space utilization
for logistics optimization and capacity planning.


```xml
<roma:StandardDimension  id="_dimension_width" name="Width" hierarchies="roma:ExplicitHierarchy _hierarchy_width"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Depth Dimension

Physical dimensions enable analysis of package sizes and space utilization
for logistics optimization and capacity planning.


```xml
<roma:StandardDimension  id="_dimension_depth" name="Depth" hierarchies="roma:ExplicitHierarchy _hierarchy_depth"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Height Dimension

Physical dimensions enable analysis of package sizes and space utilization
for logistics optimization and capacity planning.


```xml
<roma:StandardDimension  id="_dimension_height" name="Height" hierarchies="roma:ExplicitHierarchy _hierarchy_height"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Parcel Type Dimension

Parcel type dimension categorizes packages by delivery service type
for service-specific performance analysis.


```xml
<roma:StandardDimension  id="_dimension_parcel_type" name="Parcel Type" hierarchies="roma:ExplicitHierarchy _hierarchy_parcel_type"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Defect Dimension

Defect dimension tracks package condition and damage levels
for quality control and insurance claim analysis.


```xml
<roma:StandardDimension  id="_dimension_defect" name="Defect" hierarchies="roma:ExplicitHierarchy _hierarchy_defect"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Deliverable Dimension

Status dimensions track delivery characteristics like deliverability,
customs requirements, and return status for operational insights.


```xml
<roma:StandardDimension  id="_dimension_deliverable" name="Deliverable" hierarchies="roma:ExplicitHierarchy _hierarchy_deliverable"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customs Dimension

Status dimensions track delivery characteristics like deliverability,
customs requirements, and return status for operational insights.


```xml
<roma:StandardDimension  id="_dimension_customs" name="Customs" hierarchies="roma:ExplicitHierarchy _hierarchy_customs"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Return Dimension

Status dimensions track delivery characteristics like deliverability,
customs requirements, and return status for operational insights.


```xml
<roma:StandardDimension  id="_dimension_return" name="Return" hierarchies="roma:ExplicitHierarchy _hierarchy_return"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sender Address Dimension

Address dimension provides geographic hierarchy analysis from continent
to street level for delivery routing and regional performance tracking.


```xml
<roma:StandardDimension  id="_dimension_sender_address" name="Sender Address" hierarchies="roma:ExplicitHierarchy _hierarchy_address"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Receiver Address Dimension

Address dimension provides geographic hierarchy analysis from continent
to street level for delivery routing and regional performance tracking.


```xml
<roma:StandardDimension  id="_dimension_receiver_address" name="Receiver Address" hierarchies="roma:ExplicitHierarchy _hierarchy_address"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Drop Off Address Dimension

Address dimension provides geographic hierarchy analysis from continent
to street level for delivery routing and regional performance tracking.


```xml
<roma:StandardDimension  id="_dimension_drop_off_address" name="Drop Off Address" hierarchies="roma:ExplicitHierarchy _hierarchy_address"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Delivery Address Dimension

Address dimension provides geographic hierarchy analysis from continent
to street level for delivery routing and regional performance tracking.


```xml
<roma:StandardDimension  id="_dimension_delivery_address" name="Delivery Address" hierarchies="roma:ExplicitHierarchy _hierarchy_address"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_parcel" description="Parcel delivery service logistics database - EMF Version" name="Parcel Delivery Service" cubes="_cube_parcels" dbschemas="_databaseSchema_parcel"/>
  <roma:DatabaseSchema id="_databaseSchema_parcel">
    <tables xsi:type="roma:PhysicalTable" id="_table_parcels" name="parcels">
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_parcel_id" name="parcel_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_width" name="width" type="Decimal"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_depth" name="depth" type="Decimal"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_height" name="height" type="Decimal"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_type_id" name="type_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_defect_id" name="defect_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_deliverable" name="deliverable"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_customs" name="customs"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_return" name="return_status"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_sender_id" name="sender_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_receiver_id" name="receiver_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_drop_off_id" name="drop_off_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_delivery_id" name="delivery_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_postage" name="postage" type="Decimal"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_insurance_value" name="insurance_value" type="Decimal"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_parcels_weight" name="weight" type="Decimal"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_parcel_types" name="parcel_types">
      <columns xsi:type="roma:PhysicalColumn" id="_column_type_type_id" name="type_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_type_type_name" name="type_name"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_defects" name="defects">
      <columns xsi:type="roma:PhysicalColumn" id="_column_defect_defect_id" name="defect_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_defect_defect_name" name="defect_name"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_addresses" name="addresses">
      <columns xsi:type="roma:PhysicalColumn" id="_column_address_address_id" name="address_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_address_continent" name="continent"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_address_country" name="country"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_address_city" name="city"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_address_postal_code" name="postal_code"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_address_street" name="street"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_addresses" table="_table_addresses"/>
  <roma:TableQuery id="_query_defects" table="_table_defects"/>
  <roma:TableQuery id="_query_parcel_types" table="_table_parcel_types"/>
  <roma:TableQuery id="_query_parcels" table="_table_parcels"/>
  <roma:Level id="_level_city" name="City" column="_column_address_city"/>
  <roma:Level id="_level_continent" name="Continent" column="_column_address_continent"/>
  <roma:Level id="_level_country" name="Country" column="_column_address_country"/>
  <roma:Level id="_level_customs" name="Customs" column="_column_parcels_customs"/>
  <roma:Level id="_level_defect" name="Defect" column="_column_defect_defect_id" nameColumn="_column_defect_defect_name"/>
  <roma:Level id="_level_deliverable" name="Deliverable" column="_column_parcels_deliverable"/>
  <roma:Level id="_level_depth" name="Depth" column="_column_parcels_depth"/>
  <roma:Level id="_level_height" name="Height" column="_column_parcels_height"/>
  <roma:Level id="_level_parcel_type" name="Parcel Type" column="_column_type_type_id" nameColumn="_column_type_type_name"/>
  <roma:Level id="_level_postal_code" name="Postal Code" column="_column_address_postal_code"/>
  <roma:Level id="_level_return" name="Return" column="_column_parcels_return"/>
  <roma:Level id="_level_street" name="Street" column="_column_address_street"/>
  <roma:Level id="_level_width" name="Width" column="_column_parcels_width"/>
  <roma:ExplicitHierarchy id="_hierarchy_address" name="Geographic Address" allMemberName="All Addresses" primaryKey="_column_address_address_id" query="_query_addresses" levels="_level_continent _level_country _level_city _level_postal_code _level_street"/>
  <roma:ExplicitHierarchy id="_hierarchy_customs" name="Customs" allMemberName="All Customs" primaryKey="_column_parcels_customs" query="_query_parcels" levels="_level_customs"/>
  <roma:ExplicitHierarchy id="_hierarchy_defect" name="Defect" allMemberName="All Defects" primaryKey="_column_defect_defect_id" query="_query_defects" levels="_level_defect"/>
  <roma:ExplicitHierarchy id="_hierarchy_deliverable" name="Deliverable" allMemberName="All Deliverable" primaryKey="_column_parcels_deliverable" query="_query_parcels" levels="_level_deliverable"/>
  <roma:ExplicitHierarchy id="_hierarchy_depth" name="Depth" allMemberName="All Depths" primaryKey="_column_parcels_depth" query="_query_parcels" levels="_level_depth"/>
  <roma:ExplicitHierarchy id="_hierarchy_height" name="Height" allMemberName="All Heights" primaryKey="_column_parcels_height" query="_query_parcels" levels="_level_height"/>
  <roma:ExplicitHierarchy id="_hierarchy_parcel_type" name="Parcel Type" allMemberName="All Types" primaryKey="_column_type_type_id" query="_query_parcel_types" levels="_level_parcel_type"/>
  <roma:ExplicitHierarchy id="_hierarchy_return" name="Return" allMemberName="All Return" primaryKey="_column_parcels_return" query="_query_parcels" levels="_level_return"/>
  <roma:ExplicitHierarchy id="_hierarchy_width" name="Width" allMemberName="All Widths" primaryKey="_column_parcels_width" query="_query_parcels" levels="_level_width"/>
  <roma:StandardDimension id="_dimension_customs" name="Customs" hierarchies="_hierarchy_customs"/>
  <roma:StandardDimension id="_dimension_defect" name="Defect" hierarchies="_hierarchy_defect"/>
  <roma:StandardDimension id="_dimension_deliverable" name="Deliverable" hierarchies="_hierarchy_deliverable"/>
  <roma:StandardDimension id="_dimension_delivery_address" name="Delivery Address" hierarchies="_hierarchy_address"/>
  <roma:StandardDimension id="_dimension_depth" name="Depth" hierarchies="_hierarchy_depth"/>
  <roma:StandardDimension id="_dimension_drop_off_address" name="Drop Off Address" hierarchies="_hierarchy_address"/>
  <roma:StandardDimension id="_dimension_height" name="Height" hierarchies="_hierarchy_height"/>
  <roma:StandardDimension id="_dimension_parcel_type" name="Parcel Type" hierarchies="_hierarchy_parcel_type"/>
  <roma:StandardDimension id="_dimension_receiver_address" name="Receiver Address" hierarchies="_hierarchy_address"/>
  <roma:StandardDimension id="_dimension_return" name="Return" hierarchies="_hierarchy_return"/>
  <roma:StandardDimension id="_dimension_sender_address" name="Sender Address" hierarchies="_hierarchy_address"/>
  <roma:StandardDimension id="_dimension_width" name="Width" hierarchies="_hierarchy_width"/>
  <roma:PhysicalCube id="_cube_parcels" name="Parcels" query="_query_parcels">
    <dimensionConnectors foreignKey="_column_parcels_width" dimension="_dimension_width" overrideDimensionName="Width" id="_connector_width"/>
    <dimensionConnectors foreignKey="_column_parcels_depth" dimension="_dimension_depth" overrideDimensionName="Depth" id="_connector_depth"/>
    <dimensionConnectors foreignKey="_column_parcels_height" dimension="_dimension_height" overrideDimensionName="Height" id="_connector_height"/>
    <dimensionConnectors foreignKey="_column_parcels_type_id" dimension="_dimension_parcel_type" overrideDimensionName="Parcel Type" id="_connector_parcel_type"/>
    <dimensionConnectors foreignKey="_column_parcels_defect_id" dimension="_dimension_defect" overrideDimensionName="Defect" id="_connector_defect"/>
    <dimensionConnectors foreignKey="_column_parcels_deliverable" dimension="_dimension_deliverable" overrideDimensionName="Deliverable" id="_connector_deliverable"/>
    <dimensionConnectors foreignKey="_column_parcels_customs" dimension="_dimension_customs" overrideDimensionName="Customs" id="_connector_customs"/>
    <dimensionConnectors foreignKey="_column_parcels_return" dimension="_dimension_return" overrideDimensionName="Return" id="_connector_return"/>
    <dimensionConnectors foreignKey="_column_parcels_sender_id" dimension="_dimension_sender_address" overrideDimensionName="Sender Address" id="_connector_sender_address"/>
    <dimensionConnectors foreignKey="_column_parcels_receiver_id" dimension="_dimension_receiver_address" overrideDimensionName="Receiver Address" id="_connector_receiver_address"/>
    <dimensionConnectors foreignKey="_column_parcels_drop_off_id" dimension="_dimension_drop_off_address" overrideDimensionName="Drop Off Address" id="_connector_drop_off_address"/>
    <dimensionConnectors foreignKey="_column_parcels_delivery_id" dimension="_dimension_delivery_address" overrideDimensionName="Delivery Address" id="_connector_delivery_address"/>
    <measureGroups>
      <measures xsi:type="roma:CountMeasure" id="_measure_parcel_count" name="Parcel Count" formatString="#,###" column="_column_parcels_parcel_id"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_postage_sum" name="Postage Sum" formatString="#,##0.00" column="_column_parcels_postage"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_insurance_value_sum" name="Insurance Value Sum" formatString="#,##0.00" column="_column_parcels_insurance_value"/>
      <measures xsi:type="roma:MinMeasure" id="_measure_weight_min" name="Weight Min" formatString="#,##0.00" column="_column_parcels_weight"/>
      <measures xsi:type="roma:MaxMeasure" id="_measure_weight_max" name="Weight Max" formatString="#,##0.00" column="_column_parcels_weight"/>
      <measures xsi:type="roma:AvgMeasure" id="_measure_weight_avg" name="Weight Avg" formatString="#,##0.00" column="_column_parcels_weight"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.parcel.zip" download>Download Zip File</a>
