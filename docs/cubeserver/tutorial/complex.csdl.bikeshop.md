---
title: CSDLBI 1.1
group: Full Examples
kind: COMPLEX
number: 99.1.7
---
# CSDLBI 1.1

Data cubes are the most important objects in OLAP. Cubes provide access to data related to a specific topic, which corresponds to the cube's name. Within the catalog, each data cube must have a unique name.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table is named `Fact` and contains two columns: `KEY` and `VALUE`. The KEY column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_table_bike" name="Bike">
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_product_key" name="ProductKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_product_alternate_key" name="ProductAlternateKey"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_product_subcategory_key" name="ProductSubcategoryKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_product_name" name="ProductName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_standard_cost" name="StandardCost" type="Decimal" columnSize="19" decimalDigits="4"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_finished_goods_flag" name="FinishedGoodsFlag" type="Boolean"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_color" name="Color"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_list_price" name="ListPrice" type="Decimal" columnSize="19" decimalDigits="4"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_size" name="Size"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_size_range" name="SizeRange"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_weight" name="Weight" type="Double"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_dealer_price" name="DealerPrice" type="Decimal" columnSize="19" decimalDigits="4"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_class" name="Class"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_style" name="Style"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_model_name" name="ModelName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_description" name="Description"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_weight_unit_measure_code" name="WeightUnitMeasureCode"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_size_unit_measure_code" name="WeightUnitMeasureCode"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_safety_stock_level" name="SafetyStockLevel" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_reorder_point" name="ReorderPoint" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_days_to_manufacture" name="DaysToManufacture" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_productLine" name="ProductLine"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_bike_sales" name="BikeSales">
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_sales_order_number" name="SalesOrderNumber"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_sales_order_line_number" name="SalesOrderLineNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_revision_number" name="RevisionNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_product_key" name="ProductKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_country_code" name="CountryCode"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_currency_key" name="CurrencyKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_calendar_quarter" name="CalendarQuarter"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_sales_channel_code" name="SalesChannelCode"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_sales_order_quantity" name="OrderQuantity" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_unit_price" name="UnitPrice" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_extended_amount" name="ExtendedAmount" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_unit_price_discount_pct" name="UnitPriceDiscountPct" type="Double"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_discount_amount" name="DiscountAmount" type="Double"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_product_standard_cost" name="ProductStandardCost" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_total_product_cost" name="TotalProductCost" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_sales_amount" name="SalesAmount" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_tax_amt" name="TaxAmt" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_freight" name="Freight" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_carrier_tracking_number" name="CarrierTrackingNumber"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_customer_po_number" name="CustomerPONumber"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_customer_account_number" name="CustomerAccountNumber"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_bike_subcategory" name="BikeSubcategory">
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_subcategory_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_subcategory_product_subcategory_key" name="ProductSubcategoryKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_bike_subcategory_subcategory" name="Subcategory"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_calendar_quarter" name="CalendarQuarter">
    <columns xsi:type="roma:PhysicalColumn" id="_column_calendar_quarter_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_calendar_quarter_calendar_quarter2" name="CalendarQuarter2"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_country" name="Country">
    <columns xsi:type="roma:PhysicalColumn" id="_column_country_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_country_country_code" name="CountryCode" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_country_country_name" name="CountryName"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_currency" name="Currency">
    <columns xsi:type="roma:PhysicalColumn" id="_column_currency_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_currency_currency_key" name="CurrencyKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_currency_currency_alternate_key" name="CurrencyAlternateKey"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_currency_currency_name" name="CurrencyName"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_sales_channel" name="SalesChannel">
    <columns xsi:type="roma:PhysicalColumn" id="_column_sales_channel_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_sales_channel_sales_channel_code" name="SalesChannelCode"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_sales_channel_sales_channel_name" name="SalesChannelName"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery, as it directly references the physical table `Fact`. The query element is not visible to users accessing the cube through the XMLA API, such as Daanse Dashboard, Power BI, or Excel.


```xml
<roma:TableQuery  id="_query_bike" table="_table_bike"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube CSDLBI 1.1

The Cube CSDLBI 1.0.


```xml
<roma:PhysicalCube   id="_cube_DescriptionRolePlayingDimensionsDB" name="SalesChannel" query="_query_bike_sales">
  <kpis description="KPI Description" name="Three Circles Colored" goal="[Measures].[Sum of TotalProductCost]" status="[Measures].[Sum of TotalProductCost]"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_bike_sales_product_key" dimension="roma:StandardDimension _dimension_bike" overrideDimensionName="Bike" id="_connector_bike"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_bike_sales_product_key" dimension="roma:StandardDimension _dimension_bike_subcategory" overrideDimensionName="BikeSubcategory" id="_connector_bike_subcategory"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_bike_sales_calendar_quarter" dimension="roma:StandardDimension _dimension_calendar_quarter" overrideDimensionName="CalendarQuarter" id="_connector_calendar_quarter"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_bike_sales_country_code" dimension="roma:StandardDimension _dimension_country" overrideDimensionName="Country" id="_connector_country"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_bike_sales_currency_key" dimension="roma:StandardDimension _dimension_currency" overrideDimensionName="Currency" id="_connector_currency"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_bike_sales_sales_channel_code" dimension="roma:StandardDimension _dimension_sales_channel" overrideDimensionName="SalesChannel" id="_connector_sales_channel"/>
  <measureGroups name="BikeSales">
    <measures xsi:type="roma:SumMeasure" id="_measure_sum_of_total_product_cost" name="Sum of TotalProductCost" column="_column_bike_sales_total_product_cost"/>
    <measures xsi:type="roma:SumMeasure" id="_measure_sum_of_sales_amount" name="Sum of SalesAmount" column="_column_bike_sales_sales_amount"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_csdl1" description="SalesChannel" name="CSDLBI 1.1" cubes="_cube_DescriptionRolePlayingDimensionsDB" measuresDimensionName="BikeSales" dbschemas="_databaseSchema"/>
  <roma:DatabaseSchema id="_databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_table_bike" name="Bike">
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_product_key" name="ProductKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_product_alternate_key" name="ProductAlternateKey"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_product_subcategory_key" name="ProductSubcategoryKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_product_name" name="ProductName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_standard_cost" name="StandardCost" type="Decimal" columnSize="19" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_finished_goods_flag" name="FinishedGoodsFlag" type="Boolean"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_color" name="Color"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_list_price" name="ListPrice" type="Decimal" columnSize="19" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_size" name="Size"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_size_range" name="SizeRange"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_weight" name="Weight" type="Double"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_dealer_price" name="DealerPrice" type="Decimal" columnSize="19" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_class" name="Class"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_style" name="Style"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_model_name" name="ModelName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_description" name="Description"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_weight_unit_measure_code" name="WeightUnitMeasureCode"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_size_unit_measure_code" name="WeightUnitMeasureCode"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_safety_stock_level" name="SafetyStockLevel" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_reorder_point" name="ReorderPoint" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_days_to_manufacture" name="DaysToManufacture" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_productLine" name="ProductLine"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_bike_sales" name="BikeSales">
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_sales_order_number" name="SalesOrderNumber"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_sales_order_line_number" name="SalesOrderLineNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_revision_number" name="RevisionNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_product_key" name="ProductKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_country_code" name="CountryCode"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_currency_key" name="CurrencyKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_calendar_quarter" name="CalendarQuarter"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_sales_channel_code" name="SalesChannelCode"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_sales_order_quantity" name="OrderQuantity" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_unit_price" name="UnitPrice" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_extended_amount" name="ExtendedAmount" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_unit_price_discount_pct" name="UnitPriceDiscountPct" type="Double"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_discount_amount" name="DiscountAmount" type="Double"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_product_standard_cost" name="ProductStandardCost" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_total_product_cost" name="TotalProductCost" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_sales_amount" name="SalesAmount" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_tax_amt" name="TaxAmt" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_freight" name="Freight" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_carrier_tracking_number" name="CarrierTrackingNumber"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_customer_po_number" name="CustomerPONumber"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_sales_customer_account_number" name="CustomerAccountNumber"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_bike_subcategory" name="BikeSubcategory">
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_subcategory_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_subcategory_product_subcategory_key" name="ProductSubcategoryKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_bike_subcategory_subcategory" name="Subcategory"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_calendar_quarter" name="CalendarQuarter">
      <columns xsi:type="roma:PhysicalColumn" id="_column_calendar_quarter_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_calendar_quarter_calendar_quarter2" name="CalendarQuarter2"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_country" name="Country">
      <columns xsi:type="roma:PhysicalColumn" id="_column_country_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_country_country_code" name="CountryCode" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_country_country_name" name="CountryName"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_currency" name="Currency">
      <columns xsi:type="roma:PhysicalColumn" id="_column_currency_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_currency_currency_key" name="CurrencyKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_currency_currency_alternate_key" name="CurrencyAlternateKey"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_currency_currency_name" name="CurrencyName"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_sales_channel" name="SalesChannel">
      <columns xsi:type="roma:PhysicalColumn" id="_column_sales_channel_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_sales_channel_sales_channel_code" name="SalesChannelCode"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_sales_channel_sales_channel_name" name="SalesChannelName"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_bike" table="_table_bike"/>
  <roma:TableQuery id="_query_bike_sales" table="_table_bike_sales"/>
  <roma:TableQuery id="_query_bike_sebcategory" table="_table_bike_subcategory"/>
  <roma:TableQuery id="_query_calendar_quarter" table="_table_calendar_quarter"/>
  <roma:TableQuery id="_query_country" table="_table_country"/>
  <roma:TableQuery id="_query_currency" table="_table_currency"/>
  <roma:TableQuery id="_query_sales_channel" table="_table_sales_channel"/>
  <roma:JoinQuery id="_join_query_subcategory">
    <left key="_column_bike_product_subcategory_key" query="_query_bike"/>
    <right key="_column_bike_subcategory_product_subcategory_key" query="_query_bike_sebcategory"/>
  </roma:JoinQuery>
  <roma:Level id="_level_bike_class" name="Class" column="_column_bike_class"/>
  <roma:Level id="_level_bike_color" name="Color" column="_column_bike_color"/>
  <roma:Level id="_level_bike_days_to_manufacture" name="DaysToManufacture" column="_column_bike_days_to_manufacture"/>
  <roma:Level id="_level_bike_dealer_price" name="DealerPrice" column="_column_bike_dealer_price"/>
  <roma:Level id="_level_bike_description" name="Description" column="_column_bike_description"/>
  <roma:Level id="_level_bike_finished_goods_flag" name="FinishedGoodsFlag" column="_column_bike_finished_goods_flag"/>
  <roma:Level id="_level_bike_list_price" name="ListPrice" column="_column_bike_list_price"/>
  <roma:Level id="_level_bike_model_name" name="ModelName" column="_column_bike_model_name"/>
  <roma:Level id="_level_bike_product_alternate_key" name="ProductAlternateKey" column="_column_bike_product_alternate_key"/>
  <roma:Level id="_level_bike_product_key" name="ProductKey" column="_column_bike_product_key"/>
  <roma:Level id="_level_bike_product_line" name="ProductLine" column="_column_bike_productLine"/>
  <roma:Level id="_level_bike_product_name" name="ProductName" column="_column_bike_product_name"/>
  <roma:Level id="_level_bike_product_subcategory_key" name="ProductSubcategoryKey" column="_column_bike_product_subcategory_key"/>
  <roma:Level id="_level_bike_reorder_point" name="ReorderPoint" column="_column_bike_reorder_point"/>
  <roma:Level id="_level_bike_row_number" name="RowNumber" column="_column_bike_row_number" uniqueMembers="true"/>
  <roma:Level id="_level_bike_safety_stock_level" name="SafetyStockLevel" column="_column_bike_safety_stock_level"/>
  <roma:Level id="_level_bike_size" name="Size" column="_column_bike_size"/>
  <roma:Level id="_level_bike_size_range" name="SizeRange" column="_column_bike_size_range"/>
  <roma:Level id="_level_bike_size_unit_measure_code" name="SizeUnitMeasureCode" column="_column_bike_size_unit_measure_code"/>
  <roma:Level id="_level_bike_standard_cost" name="StandardCost" column="_column_bike_standard_cost"/>
  <roma:Level id="_level_bike_Style" name="Style" column="_column_bike_style"/>
  <roma:Level id="_level_bike_subcategory_product_subcategory_key" name="ProductSubcategoryKey" column="_column_bike_subcategory_product_subcategory_key"/>
  <roma:Level id="_level_bike_subcategory_row_number" name="RowNumber" column="_column_bike_subcategory_row_number" uniqueMembers="true"/>
  <roma:Level id="_level_bike_subcategory_subcategory" name="Subcategory" column="_column_bike_subcategory_subcategory"/>
  <roma:Level id="_level_bike_weight" name="Weight" column="_column_bike_weight"/>
  <roma:Level id="_level_bike_weight_unit_measure_code" name="WeightUnitMeasureCode" column="_column_bike_weight_unit_measure_code"/>
  <roma:Level id="_level_calendar_quarter_calendar_quarter2" name="CalendarQuarter2" column="_column_calendar_quarter_calendar_quarter2"/>
  <roma:Level id="_level_calendar_quarter_row_number" name="RowNumber" column="_column_calendar_quarter_row_number" uniqueMembers="true"/>
  <roma:Level id="_level_country_country_code" name="CountryCode" column="_column_country_country_code"/>
  <roma:Level id="_level_country_country_name" name="CountryName" column="_column_country_country_name" uniqueMembers="true"/>
  <roma:Level id="_level_country_row_number" name="RowNumber" column="_column_country_row_number" uniqueMembers="true"/>
  <roma:Level id="_level_currency_currency_alternate_key" name="CurrencyAlternateKey" column="_column_currency_currency_alternate_key"/>
  <roma:Level id="_level_currency_currency_key" name="CurrencyKey" column="_column_currency_currency_key"/>
  <roma:Level id="_level_currency_currency_name" name="CurrencyName" column="_column_currency_currency_name"/>
  <roma:Level id="_level_currency_row_number" name="RowNumber" column="_column_currency_row_number" uniqueMembers="true"/>
  <roma:Level id="_level_sales_channel_row_number" name="RowNumber" column="_column_sales_channel_row_number" uniqueMembers="true"/>
  <roma:Level id="_level_sales_channel_sales_channel_code" name="SalesChannelCode" column="_column_sales_channel_sales_channel_code"/>
  <roma:Level id="_level_sales_channel_sales_channel_name" name="SalesChannelName" column="_column_sales_channel_sales_channel_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_bike" name="Product_Hierarchy" primaryKey="_column_bike_product_key" query="_query_bike" levels="_level_bike_row_number _level_bike_product_key _level_bike_product_alternate_key _level_bike_product_subcategory_key _level_bike_product_name _level_bike_standard_cost _level_bike_finished_goods_flag _level_bike_color _level_bike_list_price _level_bike_size _level_bike_size_range _level_bike_weight _level_bike_dealer_price _level_bike_class _level_bike_Style _level_bike_model_name _level_bike_description _level_bike_weight_unit_measure_code _level_bike_size_unit_measure_code _level_bike_safety_stock_level _level_bike_reorder_point _level_bike_days_to_manufacture _level_bike_product_line"/>
  <roma:ExplicitHierarchy id="_hierarchy_bike_subcategory" primaryKey="_column_bike_product_key" query="_join_query_subcategory" levels="_level_bike_subcategory_row_number _level_bike_subcategory_product_subcategory_key _level_bike_subcategory_subcategory"/>
  <roma:ExplicitHierarchy id="_hierarchy_calendar_quarter" primaryKey="_column_calendar_quarter_calendar_quarter2" query="_query_calendar_quarter" levels="_level_calendar_quarter_row_number _level_calendar_quarter_calendar_quarter2"/>
  <roma:ExplicitHierarchy id="_hierarchy_country" primaryKey="_column_country_country_code" query="_query_country" levels="_level_country_row_number _level_country_country_code _level_country_country_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_currencyy" primaryKey="_column_currency_currency_key" query="_query_currency" levels="_level_currency_row_number _level_currency_currency_key _level_currency_currency_alternate_key _level_currency_currency_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_sales_channel" primaryKey="_column_sales_channel_sales_channel_code" query="_query_sales_channel" levels="_level_sales_channel_row_number _level_sales_channel_sales_channel_code _level_sales_channel_sales_channel_name"/>
  <roma:StandardDimension id="_dimension_bike" name="Bike" hierarchies="_hierarchy_bike"/>
  <roma:StandardDimension id="_dimension_bike_subcategory" name="BikeSubcategory" hierarchies="_hierarchy_bike_subcategory"/>
  <roma:StandardDimension id="_dimension_calendar_quarter" name="CalendarQuarter" hierarchies="_hierarchy_calendar_quarter"/>
  <roma:StandardDimension id="_dimension_country" name="Country" hierarchies="_hierarchy_country"/>
  <roma:StandardDimension id="_dimension_currency" name="Currency" hierarchies="_hierarchy_currencyy"/>
  <roma:StandardDimension id="_dimension_sales_channel" name="SalesChannel" hierarchies="_hierarchy_sales_channel"/>
  <roma:PhysicalCube id="_cube_DescriptionRolePlayingDimensionsDB" name="SalesChannel" query="_query_bike_sales">
    <kpis description="KPI Description" name="Three Circles Colored" goal="[Measures].[Sum of TotalProductCost]" status="[Measures].[Sum of TotalProductCost]"/>
    <dimensionConnectors foreignKey="_column_bike_sales_product_key" dimension="_dimension_bike" overrideDimensionName="Bike" id="_connector_bike"/>
    <dimensionConnectors foreignKey="_column_bike_sales_product_key" dimension="_dimension_bike_subcategory" overrideDimensionName="BikeSubcategory" id="_connector_bike_subcategory"/>
    <dimensionConnectors foreignKey="_column_bike_sales_calendar_quarter" dimension="_dimension_calendar_quarter" overrideDimensionName="CalendarQuarter" id="_connector_calendar_quarter"/>
    <dimensionConnectors foreignKey="_column_bike_sales_country_code" dimension="_dimension_country" overrideDimensionName="Country" id="_connector_country"/>
    <dimensionConnectors foreignKey="_column_bike_sales_currency_key" dimension="_dimension_currency" overrideDimensionName="Currency" id="_connector_currency"/>
    <dimensionConnectors foreignKey="_column_bike_sales_sales_channel_code" dimension="_dimension_sales_channel" overrideDimensionName="SalesChannel" id="_connector_sales_channel"/>
    <measureGroups name="BikeSales">
      <measures xsi:type="roma:SumMeasure" id="_measure_sum_of_total_product_cost" name="Sum of TotalProductCost" column="_column_bike_sales_total_product_cost"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_sum_of_sales_amount" name="Sum of SalesAmount" column="_column_bike_sales_sales_amount"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.csdl.bikeshop.zip" download>Download Zip File</a>
