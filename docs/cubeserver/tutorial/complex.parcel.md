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
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_parcels" name="Parcels" query="_tablesource_parcels"/>
  <relational:Table xmi:id="_table_parcels" name="parcels">
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_parcel_id" name="parcel_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_width" name="width"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_depth" name="depth"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_height" name="height"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_type_id" name="type_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_defect_id" name="defect_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_deliverable" name="deliverable"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_customs" name="customs"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_return_status" name="return_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_sender_id" name="sender_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_receiver_id" name="receiver_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_drop_off_id" name="drop_off_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_delivery_id" name="delivery_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_postage" name="postage"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_insurance_value" name="insurance_value"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_weight" name="weight"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_parcels" table="_table_parcels"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Width Dimension

Physical dimensions enable analysis of package sizes and space utilization
for logistics optimization and capacity planning.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_width" name="Width" hierarchies="_explicithierarchy_width"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_width" name="Width" allMemberName="All Widths" primaryKey="_column_parcels_width" query="_tablesource_parcels" levels="_level_width"/>
  <relational:Table xmi:id="_table_parcels" name="parcels">
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_parcel_id" name="parcel_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_width" name="width"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_depth" name="depth"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_height" name="height"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_type_id" name="type_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_defect_id" name="defect_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_deliverable" name="deliverable"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_customs" name="customs"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_return_status" name="return_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_sender_id" name="sender_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_receiver_id" name="receiver_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_drop_off_id" name="drop_off_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_delivery_id" name="delivery_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_postage" name="postage"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_insurance_value" name="insurance_value"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_weight" name="weight"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_parcels" table="_table_parcels"/>
  <rolaplev:Level xmi:id="_level_width" name="Width" column="_column_parcels_width"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Depth Dimension

Physical dimensions enable analysis of package sizes and space utilization
for logistics optimization and capacity planning.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_depth" name="Depth" hierarchies="_explicithierarchy_depth"/>
  <relational:Table xmi:id="_table_parcels" name="parcels">
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_parcel_id" name="parcel_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_width" name="width"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_depth" name="depth"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_height" name="height"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_type_id" name="type_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_defect_id" name="defect_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_deliverable" name="deliverable"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_customs" name="customs"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_return_status" name="return_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_sender_id" name="sender_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_receiver_id" name="receiver_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_drop_off_id" name="drop_off_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_delivery_id" name="delivery_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_postage" name="postage"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_insurance_value" name="insurance_value"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_weight" name="weight"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_parcels" table="_table_parcels"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_depth" name="Depth" allMemberName="All Depths" primaryKey="_column_parcels_depth" query="_tablesource_parcels" levels="_level_depth"/>
  <rolaplev:Level xmi:id="_level_depth" name="Depth" column="_column_parcels_depth"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Height Dimension

Physical dimensions enable analysis of package sizes and space utilization
for logistics optimization and capacity planning.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_height" name="Height" hierarchies="_explicithierarchy_height"/>
  <rolaplev:Level xmi:id="_level_height" name="Height" column="_column_parcels_height"/>
  <rolapsrc:TableSource xmi:id="_tablesource_parcels" table="_table_parcels"/>
  <relational:Table xmi:id="_table_parcels" name="parcels">
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_parcel_id" name="parcel_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_width" name="width"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_depth" name="depth"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_height" name="height"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_type_id" name="type_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_defect_id" name="defect_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_deliverable" name="deliverable"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_customs" name="customs"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_return_status" name="return_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_sender_id" name="sender_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_receiver_id" name="receiver_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_drop_off_id" name="drop_off_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_delivery_id" name="delivery_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_postage" name="postage"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_insurance_value" name="insurance_value"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_weight" name="weight"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_height" name="Height" allMemberName="All Heights" primaryKey="_column_parcels_height" query="_tablesource_parcels" levels="_level_height"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Parcel Type Dimension

Parcel type dimension categorizes packages by delivery service type
for service-specific performance analysis.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_parcel_type" name="Parcel Type" hierarchies="_explicithierarchy_parcel_type"/>
  <rolapsrc:TableSource xmi:id="_tablesource_parcel_types" table="_table_parcel_types"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_parcel_type" name="Parcel Type" allMemberName="All Types" primaryKey="_column_parcel_types_type_id" query="_tablesource_parcel_types" levels="_level_parcel_type"/>
  <rolaplev:Level xmi:id="_level_parcel_type" name="Parcel Type" column="_column_parcel_types_type_id" nameColumn="_column_parcel_types_type_name"/>
  <relational:Table xmi:id="_table_parcel_types" name="parcel_types">
    <feature xsi:type="relational:Column" xmi:id="_column_parcel_types_type_id" name="type_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcel_types_type_name" name="type_name"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Defect Dimension

Defect dimension tracks package condition and damage levels
for quality control and insurance claim analysis.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_defect" name="Defect" hierarchies="_explicithierarchy_defect"/>
  <rolapsrc:TableSource xmi:id="_tablesource_defects" table="_table_defects"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_defect" name="Defect" allMemberName="All Defects" primaryKey="_column_defects_defect_id" query="_tablesource_defects" levels="_level_defect"/>
  <relational:Table xmi:id="_table_defects" name="defects">
    <feature xsi:type="relational:Column" xmi:id="_column_defects_defect_id" name="defect_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_defects_defect_name" name="defect_name"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_defect" name="Defect" column="_column_defects_defect_id" nameColumn="_column_defects_defect_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Deliverable Dimension

Status dimensions track delivery characteristics like deliverability,
customs requirements, and return status for operational insights.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_deliverable" name="Deliverable" hierarchies="_explicithierarchy_deliverable"/>
  <relational:Table xmi:id="_table_parcels" name="parcels">
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_parcel_id" name="parcel_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_width" name="width"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_depth" name="depth"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_height" name="height"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_type_id" name="type_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_defect_id" name="defect_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_deliverable" name="deliverable"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_customs" name="customs"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_return_status" name="return_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_sender_id" name="sender_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_receiver_id" name="receiver_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_drop_off_id" name="drop_off_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_delivery_id" name="delivery_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_postage" name="postage"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_insurance_value" name="insurance_value"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_weight" name="weight"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_parcels" table="_table_parcels"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_deliverable" name="Deliverable" allMemberName="All Deliverable" primaryKey="_column_parcels_deliverable" query="_tablesource_parcels" levels="_level_deliverable"/>
  <rolaplev:Level xmi:id="_level_deliverable" name="Deliverable" column="_column_parcels_deliverable"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customs Dimension

Status dimensions track delivery characteristics like deliverability,
customs requirements, and return status for operational insights.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_customs" name="Customs" hierarchies="_explicithierarchy_customs"/>
  <rolaplev:Level xmi:id="_level_customs" name="Customs" column="_column_parcels_customs"/>
  <rolapsrc:TableSource xmi:id="_tablesource_parcels" table="_table_parcels"/>
  <relational:Table xmi:id="_table_parcels" name="parcels">
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_parcel_id" name="parcel_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_width" name="width"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_depth" name="depth"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_height" name="height"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_type_id" name="type_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_defect_id" name="defect_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_deliverable" name="deliverable"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_customs" name="customs"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_return_status" name="return_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_sender_id" name="sender_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_receiver_id" name="receiver_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_drop_off_id" name="drop_off_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_delivery_id" name="delivery_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_postage" name="postage"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_insurance_value" name="insurance_value"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_weight" name="weight"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customs" name="Customs" allMemberName="All Customs" primaryKey="_column_parcels_customs" query="_tablesource_parcels" levels="_level_customs"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Return Dimension

Status dimensions track delivery characteristics like deliverability,
customs requirements, and return status for operational insights.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_return" name="Return" hierarchies="_explicithierarchy_return"/>
  <relational:Table xmi:id="_table_parcels" name="parcels">
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_parcel_id" name="parcel_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_width" name="width"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_depth" name="depth"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_height" name="height"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_type_id" name="type_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_defect_id" name="defect_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_deliverable" name="deliverable"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_customs" name="customs"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_return_status" name="return_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_sender_id" name="sender_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_receiver_id" name="receiver_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_drop_off_id" name="drop_off_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_delivery_id" name="delivery_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_postage" name="postage"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_insurance_value" name="insurance_value"/>
    <feature xsi:type="relational:Column" xmi:id="_column_parcels_weight" name="weight"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_parcels" table="_table_parcels"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_return" name="Return" allMemberName="All Return" primaryKey="_column_parcels_return_status" query="_tablesource_parcels" levels="_level_return"/>
  <rolaplev:Level xmi:id="_level_return" name="Return" column="_column_parcels_return_status"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sender Address Dimension

Address dimension provides geographic hierarchy analysis from continent
to street level for delivery routing and regional performance tracking.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_sender_address" name="Sender Address" hierarchies="_explicithierarchy_geographic_address"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_addresses_country"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_addresses_city"/>
  <rolaplev:Level xmi:id="_level_street" name="Street" column="_column_addresses_street"/>
  <relational:Table xmi:id="_table_addresses" name="addresses">
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_address_id" name="address_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_continent" name="continent"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_postal_code" name="postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_street" name="street"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_postal_code" name="Postal Code" column="_column_addresses_postal_code"/>
  <rolapsrc:TableSource xmi:id="_tablesource_addresses" table="_table_addresses"/>
  <rolaplev:Level xmi:id="_level_continent" name="Continent" column="_column_addresses_continent"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_geographic_address" name="Geographic Address" allMemberName="All Addresses" primaryKey="_column_addresses_address_id" query="_tablesource_addresses" levels="_level_continent _level_country _level_city _level_postal_code _level_street"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Receiver Address Dimension

Address dimension provides geographic hierarchy analysis from continent
to street level for delivery routing and regional performance tracking.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_receiver_address" name="Receiver Address" hierarchies="_explicithierarchy_geographic_address"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_addresses_country"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_addresses_city"/>
  <rolaplev:Level xmi:id="_level_street" name="Street" column="_column_addresses_street"/>
  <relational:Table xmi:id="_table_addresses" name="addresses">
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_address_id" name="address_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_continent" name="continent"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_postal_code" name="postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_street" name="street"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_postal_code" name="Postal Code" column="_column_addresses_postal_code"/>
  <rolapsrc:TableSource xmi:id="_tablesource_addresses" table="_table_addresses"/>
  <rolaplev:Level xmi:id="_level_continent" name="Continent" column="_column_addresses_continent"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_geographic_address" name="Geographic Address" allMemberName="All Addresses" primaryKey="_column_addresses_address_id" query="_tablesource_addresses" levels="_level_continent _level_country _level_city _level_postal_code _level_street"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Drop Off Address Dimension

Address dimension provides geographic hierarchy analysis from continent
to street level for delivery routing and regional performance tracking.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_drop_off_address" name="Drop Off Address" hierarchies="_explicithierarchy_geographic_address"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_addresses_country"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_addresses_city"/>
  <rolaplev:Level xmi:id="_level_street" name="Street" column="_column_addresses_street"/>
  <relational:Table xmi:id="_table_addresses" name="addresses">
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_address_id" name="address_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_continent" name="continent"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_postal_code" name="postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_street" name="street"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_postal_code" name="Postal Code" column="_column_addresses_postal_code"/>
  <rolapsrc:TableSource xmi:id="_tablesource_addresses" table="_table_addresses"/>
  <rolaplev:Level xmi:id="_level_continent" name="Continent" column="_column_addresses_continent"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_geographic_address" name="Geographic Address" allMemberName="All Addresses" primaryKey="_column_addresses_address_id" query="_tablesource_addresses" levels="_level_continent _level_country _level_city _level_postal_code _level_street"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Delivery Address Dimension

Address dimension provides geographic hierarchy analysis from continent
to street level for delivery routing and regional performance tracking.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_delivery_address" name="Delivery Address" hierarchies="_explicithierarchy_geographic_address"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_addresses_country"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_addresses_city"/>
  <rolaplev:Level xmi:id="_level_street" name="Street" column="_column_addresses_street"/>
  <relational:Table xmi:id="_table_addresses" name="addresses">
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_address_id" name="address_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_continent" name="continent"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_postal_code" name="postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_addresses_street" name="street"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_postal_code" name="Postal Code" column="_column_addresses_postal_code"/>
  <rolapsrc:TableSource xmi:id="_tablesource_addresses" table="_table_addresses"/>
  <rolaplev:Level xmi:id="_level_continent" name="Continent" column="_column_addresses_continent"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_geographic_address" name="Geographic Address" allMemberName="All Addresses" primaryKey="_column_addresses_address_id" query="_tablesource_addresses" levels="_level_continent _level_country _level_city _level_postal_code _level_street"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_decimal" name="DECIMAL" structuralFeature="_column_parcels_weight _column_parcels_postage _column_parcels_width _column_parcels_height _column_parcels_depth _column_parcels_insurance_value" typeNumber="3" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_parcels_type_id _column_defects_defect_id _column_parcels_parcel_id _column_parcels_receiver_id _column_parcels_defect_id _column_parcel_types_type_id _column_parcels_sender_id _column_parcels_drop_off_id _column_parcels_delivery_id _column_addresses_address_id" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_addresses_city _column_parcels_customs _column_addresses_postal_code _column_parcel_types_type_name _column_parcels_return_status _column_defects_defect_name _column_addresses_street _column_addresses_continent _column_addresses_country _column_parcels_deliverable" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_parcel_delivery_service" name="Parcel Delivery Service" cubes="_physicalcube_parcels" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_parcels" name="parcels">
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_parcel_id" name="parcel_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_width" name="width" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_depth" name="depth" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_height" name="height" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_type_id" name="type_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_defect_id" name="defect_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_deliverable" name="deliverable" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_customs" name="customs" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_return_status" name="return_status" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_sender_id" name="sender_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_receiver_id" name="receiver_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_drop_off_id" name="drop_off_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_delivery_id" name="delivery_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_postage" name="postage" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_insurance_value" name="insurance_value" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcels_weight" name="weight" type="_sqlsimpletype_decimal"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_parcel_types" name="parcel_types">
      <feature xsi:type="relational:Column" xmi:id="_column_parcel_types_type_id" name="type_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_parcel_types_type_name" name="type_name" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_defects" name="defects">
      <feature xsi:type="relational:Column" xmi:id="_column_defects_defect_id" name="defect_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_defects_defect_name" name="defect_name" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_addresses" name="addresses">
      <feature xsi:type="relational:Column" xmi:id="_column_addresses_address_id" name="address_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_addresses_continent" name="continent" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_addresses_country" name="country" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_addresses_city" name="city" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_addresses_postal_code" name="postal_code" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_addresses_street" name="street" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_parcel_types" table="_table_parcel_types"/>
  <rolapsrc:TableSource xmi:id="_tablesource_defects" table="_table_defects"/>
  <rolapsrc:TableSource xmi:id="_tablesource_parcels" table="_table_parcels"/>
  <rolapsrc:TableSource xmi:id="_tablesource_addresses" table="_table_addresses"/>
  <rolaplev:Level xmi:id="_level_return" name="Return" column="_column_parcels_return_status"/>
  <rolaplev:Level xmi:id="_level_street" name="Street" column="_column_addresses_street"/>
  <rolaplev:Level xmi:id="_level_width" name="Width" column="_column_parcels_width"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_addresses_country"/>
  <rolaplev:Level xmi:id="_level_continent" name="Continent" column="_column_addresses_continent"/>
  <rolaplev:Level xmi:id="_level_postal_code" name="Postal Code" column="_column_addresses_postal_code"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_addresses_city"/>
  <rolaplev:Level xmi:id="_level_deliverable" name="Deliverable" column="_column_parcels_deliverable"/>
  <rolaplev:Level xmi:id="_level_customs" name="Customs" column="_column_parcels_customs"/>
  <rolaplev:Level xmi:id="_level_defect" name="Defect" column="_column_defects_defect_id" nameColumn="_column_defects_defect_name"/>
  <rolaplev:Level xmi:id="_level_height" name="Height" column="_column_parcels_height"/>
  <rolaplev:Level xmi:id="_level_parcel_type" name="Parcel Type" column="_column_parcel_types_type_id" nameColumn="_column_parcel_types_type_name"/>
  <rolaplev:Level xmi:id="_level_depth" name="Depth" column="_column_parcels_depth"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_defect" name="Defect" allMemberName="All Defects" primaryKey="_column_defects_defect_id" query="_tablesource_defects" levels="_level_defect"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_height" name="Height" allMemberName="All Heights" primaryKey="_column_parcels_height" query="_tablesource_parcels" levels="_level_height"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customs" name="Customs" allMemberName="All Customs" primaryKey="_column_parcels_customs" query="_tablesource_parcels" levels="_level_customs"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_geographic_address" name="Geographic Address" allMemberName="All Addresses" primaryKey="_column_addresses_address_id" query="_tablesource_addresses" levels="_level_continent _level_country _level_city _level_postal_code _level_street"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_return" name="Return" allMemberName="All Return" primaryKey="_column_parcels_return_status" query="_tablesource_parcels" levels="_level_return"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_deliverable" name="Deliverable" allMemberName="All Deliverable" primaryKey="_column_parcels_deliverable" query="_tablesource_parcels" levels="_level_deliverable"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_depth" name="Depth" allMemberName="All Depths" primaryKey="_column_parcels_depth" query="_tablesource_parcels" levels="_level_depth"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_parcel_type" name="Parcel Type" allMemberName="All Types" primaryKey="_column_parcel_types_type_id" query="_tablesource_parcel_types" levels="_level_parcel_type"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_width" name="Width" allMemberName="All Widths" primaryKey="_column_parcels_width" query="_tablesource_parcels" levels="_level_width"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_width" name="Width" hierarchies="_explicithierarchy_width"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_depth" name="Depth" hierarchies="_explicithierarchy_depth"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_delivery_address" name="Delivery Address" hierarchies="_explicithierarchy_geographic_address"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_defect" name="Defect" hierarchies="_explicithierarchy_defect"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_drop_off_address" name="Drop Off Address" hierarchies="_explicithierarchy_geographic_address"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_height" name="Height" hierarchies="_explicithierarchy_height"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_parcel_type" name="Parcel Type" hierarchies="_explicithierarchy_parcel_type"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_customs" name="Customs" hierarchies="_explicithierarchy_customs"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_receiver_address" name="Receiver Address" hierarchies="_explicithierarchy_geographic_address"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_deliverable" name="Deliverable" hierarchies="_explicithierarchy_deliverable"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_return" name="Return" hierarchies="_explicithierarchy_return"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_sender_address" name="Sender Address" hierarchies="_explicithierarchy_geographic_address"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_parcels" name="Parcels" query="_tablesource_parcels">
    <dimensionConnectors xmi:id="_dimensionconnector_width" foreignKey="_column_parcels_width" dimension="_standarddimension_width" overrideDimensionName="Width"/>
    <dimensionConnectors xmi:id="_dimensionconnector_depth" foreignKey="_column_parcels_depth" dimension="_standarddimension_depth" overrideDimensionName="Depth"/>
    <dimensionConnectors xmi:id="_dimensionconnector_height" foreignKey="_column_parcels_height" dimension="_standarddimension_height" overrideDimensionName="Height"/>
    <dimensionConnectors xmi:id="_dimensionconnector_parcel_type" foreignKey="_column_parcels_type_id" dimension="_standarddimension_parcel_type" overrideDimensionName="Parcel Type"/>
    <dimensionConnectors xmi:id="_dimensionconnector_defect" foreignKey="_column_parcels_defect_id" dimension="_standarddimension_defect" overrideDimensionName="Defect"/>
    <dimensionConnectors xmi:id="_dimensionconnector_deliverable" foreignKey="_column_parcels_deliverable" dimension="_standarddimension_deliverable" overrideDimensionName="Deliverable"/>
    <dimensionConnectors xmi:id="_dimensionconnector_customs" foreignKey="_column_parcels_customs" dimension="_standarddimension_customs" overrideDimensionName="Customs"/>
    <dimensionConnectors xmi:id="_dimensionconnector_return" foreignKey="_column_parcels_return_status" dimension="_standarddimension_return" overrideDimensionName="Return"/>
    <dimensionConnectors xmi:id="_dimensionconnector_sender_address" foreignKey="_column_parcels_sender_id" dimension="_standarddimension_sender_address" overrideDimensionName="Sender Address"/>
    <dimensionConnectors xmi:id="_dimensionconnector_receiver_address" foreignKey="_column_parcels_receiver_id" dimension="_standarddimension_receiver_address" overrideDimensionName="Receiver Address"/>
    <dimensionConnectors xmi:id="_dimensionconnector_drop_off_address" foreignKey="_column_parcels_drop_off_id" dimension="_standarddimension_drop_off_address" overrideDimensionName="Drop Off Address"/>
    <dimensionConnectors xmi:id="_dimensionconnector_delivery_address" foreignKey="_column_parcels_delivery_id" dimension="_standarddimension_delivery_address" overrideDimensionName="Delivery Address"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_parcel_count" name="Parcel Count" formatString="#,###" column="_column_parcels_parcel_id"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_postage_sum" name="Postage Sum" formatString="#,##0.00" column="_column_parcels_postage"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_insurance_value_sum" name="Insurance Value Sum" formatString="#,##0.00" column="_column_parcels_insurance_value"/>
      <measures xsi:type="rolapmeas:MinMeasure" xmi:id="_minmeasure_weight_min" name="Weight Min" formatString="#,##0.00" column="_column_parcels_weight"/>
      <measures xsi:type="rolapmeas:MaxMeasure" xmi:id="_maxmeasure_weight_max" name="Weight Max" formatString="#,##0.00" column="_column_parcels_weight"/>
      <measures xsi:type="rolapmeas:AvgMeasure" xmi:id="_avgmeasure_weight_avg" name="Weight Avg" formatString="#,##0.00" column="_column_parcels_weight"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.parcel.zip" download>Download Zip File</a>
