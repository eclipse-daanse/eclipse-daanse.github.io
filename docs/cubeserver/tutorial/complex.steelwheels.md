---
title: SteelWheels
group: Full Examples
kind: COMPLEX
number: 99.1.5
---
## SteelWheels Database

SteelWheels is a sample database representing a classic car and motorcycle sales company.
It contains order data with product information, customer details, and time-based sales transactions
for analyzing business performance across different markets and product lines.


### Customer Query

The Query selects all columns from the customer_w_ter table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_customer_w_ter" table="_table_customer_w_ter"/>
  <relational:Table xmi:id="_table_customer_w_ter" name="customer_w_ter">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customernumber" name="CUSTOMERNUMBER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customername" name="CUSTOMERNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_territory" name="TERRITORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_state" name="STATE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_city" name="CITY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactfirstname" name="CONTACTFIRSTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactlastname" name="CONTACTLASTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_phone" name="PHONE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_addressline1" name="ADDRESSLINE1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_creditlimit" name="CREDITLIMIT"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Product Query

The Query selects all columns from the products table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_products" table="_table_products"/>
  <relational:Table xmi:id="_table_products" name="products">
    <feature xsi:type="relational:Column" xmi:id="_column_products_productcode" name="PRODUCTCODE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_products_productname" name="PRODUCTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_products_productline" name="PRODUCTLINE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_products_productvendor" name="PRODUCTVENDOR"/>
    <feature xsi:type="relational:Column" xmi:id="_column_products_productdescription" name="PRODUCTDESCRIPTION"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Time Query

The Query selects all columns from the time table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_time" table="_table_time"/>
  <relational:Table xmi:id="_table_time" name="time">
    <feature xsi:type="relational:Column" xmi:id="_column_time_time_id" name="TIME_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_year_id" name="YEAR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_qtr_name" name="QTR_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_qtr_id" name="QTR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_month_name" name="MONTH_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_month_id" name="MONTH_ID"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Status Query

The Query selects all columns from the orderfact table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_orderfact" table="_table_orderfact"/>
  <relational:Table xmi:id="_table_orderfact" name="orderfact">
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_customernumber" name="CUSTOMERNUMBER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_productcode" name="PRODUCTCODE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_time_id" name="TIME_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_quantityordered" name="QUANTITYORDERED"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_totalprice" name="TOTALPRICE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_status" name="STATUS"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_orderdate" name="ORDERDATE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_priceeach" name="PRICEEACH"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_requireddate" name="REQUIREDDATE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_shippeddate" name="SHIPPEDDATE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Fact Query

The Query selects all columns from the orderfact table for cube measures and dimension connections.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_orderfact" table="_table_orderfact"/>
  <relational:Table xmi:id="_table_orderfact" name="orderfact">
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_customernumber" name="CUSTOMERNUMBER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_productcode" name="PRODUCTCODE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_time_id" name="TIME_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_quantityordered" name="QUANTITYORDERED"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_totalprice" name="TOTALPRICE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_status" name="STATUS"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_orderdate" name="ORDERDATE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_priceeach" name="PRICEEACH"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_requireddate" name="REQUIREDDATE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_shippeddate" name="SHIPPEDDATE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Markets Dimension

The Markets dimension represents customer territories and geographic regions
where SteelWheels operates, enabling regional sales analysis.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_markets" name="Markets" hierarchies="_explicithierarchy_customernumber"/>
  <rolaplev:Level xmi:id="_level_state_province" name="State Province" column="_column_customer_w_ter_state" columnType="String" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_customer_w_ter" name="customer_w_ter">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customernumber" name="CUSTOMERNUMBER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customername" name="CUSTOMERNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_territory" name="TERRITORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_state" name="STATE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_city" name="CITY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactfirstname" name="CONTACTFIRSTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactlastname" name="CONTACTLASTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_phone" name="PHONE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_addressline1" name="ADDRESSLINE1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_creditlimit" name="CREDITLIMIT"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_territory" name="Territory" column="_column_customer_w_ter_territory" columnType="String" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_customer_w_ter_country" columnType="String"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_customer_w_ter_city" columnType="String" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer_w_ter" table="_table_customer_w_ter"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customernumber" allMemberName="All Markets" primaryKey="_column_customer_w_ter_customernumber" query="_tablesource_customer_w_ter" levels="_level_territory _level_country _level_state_province _level_city"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Customers Dimension

The Customers dimension contains individual customer information
for detailed customer-level sales analysis and segmentation.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_customers" name="Customers" hierarchies="_explicithierarchy_customernumber"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customernumber" allMemberName="All Customers" primaryKey="_column_customer_w_ter_customernumber" query="_tablesource_customer_w_ter" levels="_level_customer"/>
  <relational:Table xmi:id="_table_customer_w_ter" name="customer_w_ter">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customernumber" name="CUSTOMERNUMBER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customername" name="CUSTOMERNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_territory" name="TERRITORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_state" name="STATE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_city" name="CITY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactfirstname" name="CONTACTFIRSTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactlastname" name="CONTACTLASTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_phone" name="PHONE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_addressline1" name="ADDRESSLINE1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_creditlimit" name="CREDITLIMIT"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_customer" name="Customer" column="_column_customer_w_ter_customername" columnType="String" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer_w_ter" table="_table_customer_w_ter"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Product Dimension

The Product dimension organizes the classic car and motorcycle inventory
into product lines, vendors, and individual product details for sales analysis.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_productcode"/>
  <relational:Table xmi:id="_table_products" name="products">
    <feature xsi:type="relational:Column" xmi:id="_column_products_productcode" name="PRODUCTCODE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_products_productname" name="PRODUCTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_products_productline" name="PRODUCTLINE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_products_productvendor" name="PRODUCTVENDOR"/>
    <feature xsi:type="relational:Column" xmi:id="_column_products_productdescription" name="PRODUCTDESCRIPTION"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_products" table="_table_products"/>
  <rolaplev:Level xmi:id="_level_product" name="Product" column="_column_products_productname" columnType="String" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_line" name="Line" column="_column_products_productline" columnType="String" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_vendor" name="Vendor" column="_column_products_productvendor" columnType="String" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_productcode" allMemberName="All Products" primaryKey="_column_products_productcode" query="_tablesource_products" levels="_level_line _level_vendor _level_product"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Time Dimension

The Time dimension provides temporal analysis capabilities with yearly
and quarterly breakdowns for trend analysis and seasonal comparisons.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:TimeDimension xmi:id="_timedimension_time" name="Time" hierarchies="_explicithierarchy_time_id"/>
  <rolaplev:Level xmi:id="_level_quarters" name="Quarters" column="_column_time_qtr_name" type="TimeQuarters" columnType="String"/>
  <rolaplev:Level xmi:id="_level_years" name="Years" column="_column_time_year_id" type="TimeYears" columnType="Integer" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_months" name="Months" column="_column_time_month_name" type="TimeMonths" columnType="String"/>
  <rolapsrc:TableSource xmi:id="_tablesource_time" table="_table_time"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_time_id" allMemberName="All Years" primaryKey="_column_time_time_id" query="_tablesource_time" levels="_level_years _level_quarters _level_months"/>
  <relational:Table xmi:id="_table_time" name="time">
    <feature xsi:type="relational:Column" xmi:id="_column_time_time_id" name="TIME_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_year_id" name="YEAR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_qtr_name" name="QTR_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_qtr_id" name="QTR_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_month_name" name="MONTH_NAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_month_id" name="MONTH_ID"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Order Status Dimension

The Order Status dimension represents the current state of orders for tracking fulfillment progress.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level">
  <rolapdim:StandardDimension xmi:id="_standarddimension_order_status" name="Order Status" hierarchies="_explicithierarchy_status"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_status" allMemberName="All Status Types" levels="_level_type">
    <primaryKey href="_column_orderfact_status"/>
  </rolaphier:ExplicitHierarchy>
  <rolaplev:Level xmi:id="_level_type" name="Type" columnType="String" uniqueMembers="true">
    <column href="_column_orderfact_status"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Markets Hierarchy

The Markets hierarchy organizes geographic territories with hasAll enabled and primary key on customer number.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customernumber" allMemberName="All Markets" primaryKey="_column_customer_w_ter_customernumber" query="_tablesource_customer_w_ter" levels="_level_territory _level_country _level_state_province _level_city"/>
  <rolaplev:Level xmi:id="_level_state_province" name="State Province" column="_column_customer_w_ter_state" columnType="String" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_customer_w_ter" name="customer_w_ter">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customernumber" name="CUSTOMERNUMBER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customername" name="CUSTOMERNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_territory" name="TERRITORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_state" name="STATE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_city" name="CITY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactfirstname" name="CONTACTFIRSTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactlastname" name="CONTACTLASTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_phone" name="PHONE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_addressline1" name="ADDRESSLINE1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_creditlimit" name="CREDITLIMIT"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_territory" name="Territory" column="_column_customer_w_ter_territory" columnType="String" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_customer_w_ter_country" columnType="String"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_customer_w_ter_city" columnType="String" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer_w_ter" table="_table_customer_w_ter"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Customers Hierarchy

The Customers hierarchy provides customer-level analysis with hasAll enabled.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customernumber" allMemberName="All Customers" primaryKey="_column_customer_w_ter_customernumber" query="_tablesource_customer_w_ter" levels="_level_customer"/>
  <relational:Table xmi:id="_table_customer_w_ter" name="customer_w_ter">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customernumber" name="CUSTOMERNUMBER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customername" name="CUSTOMERNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_territory" name="TERRITORY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_country" name="COUNTRY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_state" name="STATE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_city" name="CITY"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactfirstname" name="CONTACTFIRSTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactlastname" name="CONTACTLASTNAME"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_phone" name="PHONE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_addressline1" name="ADDRESSLINE1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_creditlimit" name="CREDITLIMIT"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_customer" name="Customer" column="_column_customer_w_ter_customername" columnType="String" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer_w_ter" table="_table_customer_w_ter"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Order Status Hierarchy

The Time hierarchy provides temporal analysis with product status with hasAll enabled.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_status" allMemberName="All Status Types" levels="_level_type">
    <primaryKey href="_column_orderfact_status"/>
  </rolaphier:ExplicitHierarchy>
  <rolaplev:Level xmi:id="_level_type" name="Type" columnType="String" uniqueMembers="true">
    <column href="_column_orderfact_status"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Territory Level

Territory level represents geographic territories for market analysis.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_territory" name="Territory" columnType="String" uniqueMembers="true">
  <column href="_column_customer_w_ter_territory"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Country Level

Country level represents country for market analysis.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_country" name="Country" columnType="String">
  <column href="_column_customer_w_ter_country"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### State Level

State level represents state for market analysis.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_state_province" name="State Province" columnType="String" uniqueMembers="true">
  <column href="_column_customer_w_ter_state"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### State City

City level represents city for market analysis.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_city" name="City" columnType="String" uniqueMembers="true">
  <column href="_column_customer_w_ter_city"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Customer Level

Customer level provides individual customer details for analysis.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_customer" name="Customer" columnType="String" uniqueMembers="true">
  <column href="_column_customer_w_ter_customername"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Product Line Level

Product line level categorizes products into major product categories.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_line" name="Line" columnType="String" uniqueMembers="true">
  <column href="_column_products_productline"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Vendor Level

Vendor level into major product categories.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_vendor" name="Vendor" columnType="String" uniqueMembers="true">
  <column href="_column_products_productvendor"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Product Level

Product name into major product categories.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_product" name="Product" columnType="String" uniqueMembers="true">
  <column href="_column_products_productname"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Years Level

Years level provides temporal analysis by year periods.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_years" name="Years" type="TimeYears" columnType="Integer" uniqueMembers="true">
  <column href="_column_time_year_id"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Quarters Level

Quarters level provides temporal analysis by quarter periods.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_quarters" name="Quarters" type="TimeQuarters" columnType="String">
  <column href="_column_time_qtr_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Months Level

Months level provides temporal analysis by month periods.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_months" name="Months" type="TimeMonths" columnType="String">
  <column href="_column_time_month_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Status Level

Products status products into major product categories.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_type" name="Type" columnType="String" uniqueMembers="true">
  <column href="_column_orderfact_status"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Measure Quantity

Measure Quantity use orderfact table QUANTITYORDERED column with sum aggregation in Cube.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_quantity" name="Quantity" formatString=",###">
  <column href="_column_orderfact_quantityordered"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Measure Sales

Measure Sales is sum of product sales.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_sales" name="Sales" formatString=",###">
  <column href="_column_orderfact_totalprice"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Sales Cube

The SteelWheels Sales cube contains order-level transactions with quantity and sales amount measures.
It provides analysis capabilities across customer markets, product categories, and time periods.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_steelwheelssales" name="SteelWheelsSales" query="_tablesource_orderfact"/>
  <relational:Table xmi:id="_table_orderfact" name="orderfact">
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_customernumber" name="CUSTOMERNUMBER"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_productcode" name="PRODUCTCODE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_time_id" name="TIME_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_quantityordered" name="QUANTITYORDERED"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_totalprice" name="TOTALPRICE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_status" name="STATUS"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_orderdate" name="ORDERDATE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_priceeach" name="PRICEEACH"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_requireddate" name="REQUIREDDATE"/>
    <feature xsi:type="relational:Column" xmi:id="_column_orderfact_shippeddate" name="SHIPPEDDATE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_orderfact" table="_table_orderfact"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_orderfact_customernumber _column_orderfact_quantityordered _column_customer_w_ter_customernumber _column_time_month_id _column_time_qtr_id _column_time_year_id" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_orderfact_time_id _column_customer_w_ter_phone _column_time_time_id _column_products_productname _column_customer_w_ter_addressline1 _column_customer_w_ter_state _column_products_productcode _column_customer_w_ter_country _column_time_qtr_name _column_customer_w_ter_customername _column_customer_w_ter_contactfirstname _column_customer_w_ter_contactlastname _column_customer_w_ter_city _column_products_productline _column_customer_w_ter_territory _column_products_productvendor _column_orderfact_status _column_products_productdescription _column_orderfact_productcode _column_time_month_name" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_timestamp" name="TIMESTAMP" structuralFeature="_column_orderfact_shippeddate _column_orderfact_orderdate _column_orderfact_requireddate" typeNumber="93"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_numeric" name="NUMERIC" structuralFeature="_column_customer_w_ter_creditlimit _column_orderfact_totalprice _column_orderfact_priceeach" typeNumber="2" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <rolapcat:Catalog xmi:id="_catalog_steelwheels" name="SteelWheels" cubes="_physicalcube_steelwheelssales" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_orderfact" name="orderfact">
      <feature xsi:type="relational:Column" xmi:id="_column_orderfact_customernumber" name="CUSTOMERNUMBER" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orderfact_productcode" name="PRODUCTCODE" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orderfact_time_id" name="TIME_ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orderfact_quantityordered" name="QUANTITYORDERED" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orderfact_totalprice" name="TOTALPRICE" type="_sqlsimpletype_numeric"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orderfact_status" name="STATUS" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orderfact_orderdate" name="ORDERDATE" type="_sqlsimpletype_timestamp"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orderfact_priceeach" name="PRICEEACH" type="_sqlsimpletype_numeric"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orderfact_requireddate" name="REQUIREDDATE" type="_sqlsimpletype_timestamp"/>
      <feature xsi:type="relational:Column" xmi:id="_column_orderfact_shippeddate" name="SHIPPEDDATE" type="_sqlsimpletype_timestamp"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_customer_w_ter" name="customer_w_ter">
      <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customernumber" name="CUSTOMERNUMBER" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_customername" name="CUSTOMERNAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_territory" name="TERRITORY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_country" name="COUNTRY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_state" name="STATE" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_city" name="CITY" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactfirstname" name="CONTACTFIRSTNAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_contactlastname" name="CONTACTLASTNAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_phone" name="PHONE" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_addressline1" name="ADDRESSLINE1" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_w_ter_creditlimit" name="CREDITLIMIT" type="_sqlsimpletype_numeric"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_products" name="products">
      <feature xsi:type="relational:Column" xmi:id="_column_products_productcode" name="PRODUCTCODE" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_products_productname" name="PRODUCTNAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_products_productline" name="PRODUCTLINE" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_products_productvendor" name="PRODUCTVENDOR" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_products_productdescription" name="PRODUCTDESCRIPTION" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_time" name="time">
      <feature xsi:type="relational:Column" xmi:id="_column_time_time_id" name="TIME_ID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_year_id" name="YEAR_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_qtr_name" name="QTR_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_qtr_id" name="QTR_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_month_name" name="MONTH_NAME" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_month_id" name="MONTH_ID" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_products" table="_table_products"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer_w_ter" table="_table_customer_w_ter"/>
  <rolapsrc:TableSource xmi:id="_tablesource_time" table="_table_time"/>
  <rolapsrc:TableSource xmi:id="_tablesource_orderfact" table="_table_orderfact"/>
  <rolaplev:Level xmi:id="_level_type" name="Type" column="_column_orderfact_status" columnType="String" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_vendor" name="Vendor" column="_column_products_productvendor" columnType="String" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_customer" name="Customer" column="_column_customer_w_ter_customername" columnType="String" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_years" name="Years" column="_column_time_year_id" type="TimeYears" columnType="Integer" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_quarters" name="Quarters" column="_column_time_qtr_name" type="TimeQuarters" columnType="String"/>
  <rolaplev:Level xmi:id="_level_product" name="Product" column="_column_products_productname" columnType="String" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_customer_w_ter_country" columnType="String"/>
  <rolaplev:Level xmi:id="_level_territory" name="Territory" column="_column_customer_w_ter_territory" columnType="String" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_customer_w_ter_city" columnType="String" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_months" name="Months" column="_column_time_month_name" type="TimeMonths" columnType="String"/>
  <rolaplev:Level xmi:id="_level_state_province" name="State Province" column="_column_customer_w_ter_state" columnType="String" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_line" name="Line" column="_column_products_productline" columnType="String" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_productcode" allMemberName="All Products" primaryKey="_column_products_productcode" query="_tablesource_products" levels="_level_line _level_vendor _level_product"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_status" allMemberName="All Status Types" primaryKey="_column_orderfact_status" levels="_level_type"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customernumber" allMemberName="All Customers" primaryKey="_column_customer_w_ter_customernumber" query="_tablesource_customer_w_ter" levels="_level_customer"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_time_id" allMemberName="All Years" primaryKey="_column_time_time_id" query="_tablesource_time" levels="_level_years _level_quarters _level_months"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customernumber_1" allMemberName="All Markets" primaryKey="_column_customer_w_ter_customernumber" query="_tablesource_customer_w_ter" levels="_level_territory _level_country _level_state_province _level_city"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_customers" name="Customers" hierarchies="_explicithierarchy_customernumber"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_order_status" name="Order Status" hierarchies="_explicithierarchy_status"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_productcode"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_markets" name="Markets" hierarchies="_explicithierarchy_customernumber_1"/>
  <rolapdim:TimeDimension xmi:id="_timedimension_time" name="Time" hierarchies="_explicithierarchy_time_id"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_steelwheelssales" name="SteelWheelsSales" query="_tablesource_orderfact">
    <dimensionConnectors xmi:id="_dimensionconnector_markets" foreignKey="_column_orderfact_customernumber" dimension="_standarddimension_markets" overrideDimensionName="Markets"/>
    <dimensionConnectors xmi:id="_dimensionconnector_customers" foreignKey="_column_orderfact_customernumber" dimension="_standarddimension_customers" overrideDimensionName="Customers"/>
    <dimensionConnectors xmi:id="_dimensionconnector_product" foreignKey="_column_orderfact_productcode" dimension="_standarddimension_product" overrideDimensionName="Product"/>
    <dimensionConnectors xmi:id="_dimensionconnector_time" foreignKey="_column_orderfact_time_id" dimension="_timedimension_time" overrideDimensionName="Time"/>
    <dimensionConnectors xmi:id="_dimensionconnector_order_status" foreignKey="_column_orderfact_status" dimension="_standarddimension_order_status" overrideDimensionName="Order Status"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_quantity" name="Quantity" formatString="#,###" column="_column_orderfact_quantityordered"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sales" name="Sales" formatString="#,###" column="_column_orderfact_totalprice"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.steelwheels.zip" download>Download Zip File</a>
