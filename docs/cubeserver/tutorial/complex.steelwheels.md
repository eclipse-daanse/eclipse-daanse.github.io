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
<roma:TableQuery  id="_query_customer" table="_table_customerWTer"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Product Query

The Query selects all columns from the products table.


```xml
<roma:TableQuery  id="_query_products" table="_table_products"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Time Query

The Query selects all columns from the time table.


```xml
<roma:TableQuery  id="_query_time" table="_table_time"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Fact Query

The Query selects all columns from the orderfact table for cube measures and dimension connections.


```xml
<roma:TableQuery  id="_query_fact" table="_table_orderfact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Markets Dimension

The Markets dimension represents customer territories and geographic regions
where SteelWheels operates, enabling regional sales analysis.


```xml
<roma:StandardDimension  id="_dimension_markets" name="Markets" hierarchies="roma:ExplicitHierarchy _hierarchy_markets"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Customers Dimension

The Customers dimension contains individual customer information
for detailed customer-level sales analysis and segmentation.


```xml
<roma:StandardDimension  id="_dimension_customers" name="Customers" hierarchies="roma:ExplicitHierarchy _hierarchy_customers"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Product Dimension

The Product dimension organizes the classic car and motorcycle inventory
into product lines, vendors, and individual product details for sales analysis.


```xml
<roma:StandardDimension  id="_dimension_product" name="Product" hierarchies="roma:ExplicitHierarchy _hierarchy_product"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Time Dimension

The Time dimension provides temporal analysis capabilities with yearly
and quarterly breakdowns for trend analysis and seasonal comparisons.


```xml
<roma:TimeDimension  id="_dimension_time" name="Time" hierarchies="roma:ExplicitHierarchy _hierarchy_time"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Order Status Dimension

The Order Status dimension represents the current state of orders for tracking fulfillment progress.

```xml
<roma:StandardDimension  id="_dimension_orderstatus" name="Order Status" hierarchies="roma:ExplicitHierarchy _hierarchy_orderstatus"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Markets Hierarchy

The Markets hierarchy organizes geographic territories with hasAll enabled and primary key on customer number.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_markets" allMemberName="All Markets" primaryKey="_column_customer_customernumber" query="_query_customer" levels="_level_markets_territory _level_markets_country _level_markets_state _level_markets_city"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Customers Hierarchy

The Customers hierarchy provides customer-level analysis with hasAll enabled.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_customers" allMemberName="All Customers" primaryKey="_column_customer_customernumber" query="_query_customer" levels="_level_customers_customer"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Product Hierarchy

The Product hierarchy organizes products by line, vendor, and individual product with hasAll enabled.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_product" allMemberName="All Products" primaryKey="_column_products_productcode" query="_query_products" levels="_level_product_line _level_product_vendor _level_product_product"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Time Hierarchy

The Time hierarchy provides temporal analysis with years, quarters, and months with hasAll enabled.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_time" allMemberName="All Years" primaryKey="_column_time_timeid" query="_query_time" levels="_level_time_years _level_time_quarters _level_time_months"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Order Status Hierarchy

The Time hierarchy provides temporal analysis with product status with hasAll enabled.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_orderstatus" allMemberName="All Status Types" primaryKey="_column_orderfact_status" levels="_level_orderstatus_type"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Territory Level

Territory level represents geographic territories for market analysis.

```xml
<roma:Level  id="_level_markets_territory" name="Territory" column="_column_customer_territory" columnType="String" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Country Level

Country level represents country for market analysis.

```xml
<roma:Level  id="_level_markets_country" name="Country" column="_column_customer_country" columnType="String"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### State Level

State level represents state for market analysis.

```xml
<roma:Level  id="_level_markets_state" name="State Province" column="_column_customer_state" columnType="String" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### State City

City level represents city for market analysis.

```xml
<roma:Level  id="_level_markets_city" name="City" column="_column_customer_city" columnType="String" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Customer Level

Customer level provides individual customer details for analysis.

```xml
<roma:Level  id="_level_customers_customer" name="Customer" column="_column_customer_customername" columnType="String" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Product Line Level

Product line level categorizes products into major product categories.

```xml
<roma:Level  id="_level_product_line" name="Line" column="_column_products_productline" columnType="String" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Vendor Level

Vendor level into major product categories.

```xml
<roma:Level  id="_level_product_vendor" name="Vendor" column="_column_products_productvendor" columnType="String" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Product Level

Product name into major product categories.

```xml
<roma:Level  id="_level_product_product" name="Product" column="_column_products_productname" columnType="String" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Years Level

Years level provides temporal analysis by year periods.

```xml
<roma:Level  id="_level_time_years" name="Years" column="_column_time_yearid" type="TimeYears" columnType="Integer" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Quarters Level

Quarters level provides temporal analysis by quarter periods.

```xml
<roma:Level  id="_level_time_quarters" name="Quarters" column="_column_time_qtrname" type="TimeQuarters" columnType="String"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Months Level

Months level provides temporal analysis by month periods.

```xml
<roma:Level  id="_level_time_months" name="Months" column="_column_time_monthname" type="TimeMonths" columnType="String"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Status Level

Products status products into major product categories.

```xml
<roma:Level  id="_level_orderstatus_type" name="Type" column="_column_orderfact_status" columnType="String" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Measure Quantity

Measure Quantity use orderfact table QUANTITYORDERED column with sum aggregation in Cube.

```xml
<roma:SumMeasure  id="_measure_quantity" name="Quantity" formatString=",###" column="_column_orderfact_quantityordered"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Measure Sales

Measure Sales is sum of product sales.

```xml
<roma:SumMeasure  id="_measure_sales" name="Sales" formatString=",###" column="_column_orderfact_totalprice"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Sales Cube

The SteelWheels Sales cube contains order-level transactions with quantity and sales amount measures.
It provides analysis capabilities across customer markets, product categories, and time periods.


```xml
<roma:PhysicalCube  id="_cube_steelwheelssales" name="SteelWheelsSales" query="_query_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_steelwheels" description="SteelWheels Sample Database - EMF Version" name="SteelWheels" cubes="_cube_steelwheelssales" dbschemas="_databaseSchema_steelwheels"/>
  <roma:DatabaseSchema id="_databaseSchema_steelwheels">
    <tables xsi:type="roma:PhysicalTable" id="_table_orderfact" name="orderfact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_orderfact_customernumber" name="CUSTOMERNUMBER" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_orderfact_productcode" name="PRODUCTCODE"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_orderfact_timeid" name="TIME_ID"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_orderfact_quantityordered" name="QUANTITYORDERED" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_orderfact_totalprice" name="TOTALPRICE" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_orderfact_status" name="STATUS"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_orderfact_orderdate" name="ORDERDATE" type="Timestamp"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_orderfact_priceeach" name="PRICEEACH" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_orderfact_requireddate" name="REQUIREDDATE" type="Timestamp"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_orderfact_shippeddate" name="SHIPPEDDATE" type="Timestamp"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_customerWTer" name="customer_w_ter">
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_customernumber" name="CUSTOMERNUMBER" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_customername" name="CUSTOMERNAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_territory" name="TERRITORY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_country" name="COUNTRY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_state" name="STATE"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_city" name="CITY"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_contactfirstname" name="CONTACTFIRSTNAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_contactlastname" name="CONTACTLASTNAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_phone" name="PHONE"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_addressline1" name="ADDRESSLINE1"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_creditlimit" name="CREDITLIMIT" type="Numeric"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_products" name="products">
      <columns xsi:type="roma:PhysicalColumn" id="_column_products_productcode" name="PRODUCTCODE"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_products_productname" name="PRODUCTNAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_products_productline" name="PRODUCTLINE"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_products_productvendor" name="PRODUCTVENDOR"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_products_productdescription" name="PRODUCTDESCRIPTION"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_time" name="time">
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_timeid" name="TIME_ID"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_yearid" name="YEAR_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_qtrname" name="QTR_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_qtrid" name="QTR_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_monthname" name="MONTH_NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_monthid" name="MONTH_ID" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_customer" table="_table_customerWTer"/>
  <roma:TableQuery id="_query_fact" table="_table_orderfact"/>
  <roma:TableQuery id="_query_products" table="_table_products"/>
  <roma:TableQuery id="_query_time" table="_table_time"/>
  <roma:Level id="_level_customers_customer" name="Customer" column="_column_customer_customername" columnType="String" uniqueMembers="true"/>
  <roma:Level id="_level_markets_city" name="City" column="_column_customer_city" columnType="String" uniqueMembers="true"/>
  <roma:Level id="_level_markets_country" name="Country" column="_column_customer_country" columnType="String"/>
  <roma:Level id="_level_markets_state" name="State Province" column="_column_customer_state" columnType="String" uniqueMembers="true"/>
  <roma:Level id="_level_markets_territory" name="Territory" column="_column_customer_territory" columnType="String" uniqueMembers="true"/>
  <roma:Level id="_level_orderstatus_type" name="Type" column="_column_orderfact_status" columnType="String" uniqueMembers="true"/>
  <roma:Level id="_level_product_line" name="Line" column="_column_products_productline" columnType="String" uniqueMembers="true"/>
  <roma:Level id="_level_product_product" name="Product" column="_column_products_productname" columnType="String" uniqueMembers="true"/>
  <roma:Level id="_level_product_vendor" name="Vendor" column="_column_products_productvendor" columnType="String" uniqueMembers="true"/>
  <roma:Level id="_level_time_months" name="Months" column="_column_time_monthname" type="TimeMonths" columnType="String"/>
  <roma:Level id="_level_time_quarters" name="Quarters" column="_column_time_qtrname" type="TimeQuarters" columnType="String"/>
  <roma:Level id="_level_time_years" name="Years" column="_column_time_yearid" type="TimeYears" columnType="Integer" uniqueMembers="true"/>
  <roma:ExplicitHierarchy id="_hierarchy_customers" allMemberName="All Customers" primaryKey="_column_customer_customernumber" query="_query_customer" levels="_level_customers_customer"/>
  <roma:ExplicitHierarchy id="_hierarchy_markets" allMemberName="All Markets" primaryKey="_column_customer_customernumber" query="_query_customer" levels="_level_markets_territory _level_markets_country _level_markets_state _level_markets_city"/>
  <roma:ExplicitHierarchy id="_hierarchy_orderstatus" allMemberName="All Status Types" primaryKey="_column_orderfact_status" levels="_level_orderstatus_type"/>
  <roma:ExplicitHierarchy id="_hierarchy_product" allMemberName="All Products" primaryKey="_column_products_productcode" query="_query_products" levels="_level_product_line _level_product_vendor _level_product_product"/>
  <roma:ExplicitHierarchy id="_hierarchy_time" allMemberName="All Years" primaryKey="_column_time_timeid" query="_query_time" levels="_level_time_years _level_time_quarters _level_time_months"/>
  <roma:StandardDimension id="_dimension_customers" name="Customers" hierarchies="_hierarchy_customers"/>
  <roma:StandardDimension id="_dimension_markets" name="Markets" hierarchies="_hierarchy_markets"/>
  <roma:StandardDimension id="_dimension_orderstatus" name="Order Status" hierarchies="_hierarchy_orderstatus"/>
  <roma:StandardDimension id="_dimension_product" name="Product" hierarchies="_hierarchy_product"/>
  <roma:TimeDimension id="_dimension_time" name="Time" hierarchies="_hierarchy_time"/>
  <roma:PhysicalCube id="_cube_steelwheelssales" name="SteelWheelsSales" query="_query_fact">
    <dimensionConnectors foreignKey="_column_orderfact_customernumber" dimension="_dimension_markets" overrideDimensionName="Markets" id="_connector_markets"/>
    <dimensionConnectors foreignKey="_column_orderfact_customernumber" dimension="_dimension_customers" overrideDimensionName="Customers" id="_connector_customers"/>
    <dimensionConnectors foreignKey="_column_orderfact_productcode" dimension="_dimension_product" overrideDimensionName="Product" id="_connector_product"/>
    <dimensionConnectors foreignKey="_column_orderfact_timeid" dimension="_dimension_time" overrideDimensionName="Time" id="_connector_time"/>
    <dimensionConnectors foreignKey="_column_orderfact_status" dimension="_dimension_orderstatus" overrideDimensionName="Order Status" id="_connector_orderstatus"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_quantity" name="Quantity" formatString="#,###" column="_column_orderfact_quantityordered"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_sales" name="Sales" formatString="#,###" column="_column_orderfact_totalprice"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.steelwheels.zip" download>Download Zip File</a>
