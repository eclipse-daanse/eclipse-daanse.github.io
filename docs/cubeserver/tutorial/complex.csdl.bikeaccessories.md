---
title: CSDLBI 1.0
group: Full Examples
kind: COMPLEX
number: 99.1.6
---
# CSDLBI 1.0

Data cubes are the most important objects in OLAP. Cubes provide access to data related to a specific topic, which corresponds to the cube's name. Within the catalog, each data cube must have a unique name.


## Database Schema

The cube defined in this example is based on a single table that stores all the data. The table is named `Fact` and contains two columns: `KEY` and `VALUE`. The KEY column serves as a discriminator, while the `VALUE` column contains the measurements to be aggregated.


```xml
<roma:DatabaseSchema   id="_databaseSchema">
  <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_Product_key" name="ProductKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_order_date_key" name="OrderDateKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_due_date_key" name="DueDateKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_ship_date_key" name="ShipDateKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_customer_key" name="CustomerKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_promotion_key" name="PromotionKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_currency_key" name="CurrencyKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_sales_territory_key" name="SalesTerritoryKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_sales_order_number" name="SalesOrderNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_sales_order_line_number" name="SalesOrderLineNumber"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_revision_number" name="RevisionNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_order_ouantity" name="OrderQuantity" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_unit_price" name="UnitPrice" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_extended_amount" name="ExtendedAmount" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_UnitPriceDiscountPct" name="UnitPriceDiscountPct" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_DiscountAmount" name="DiscountAmount" type="Double"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_product_standard_cost" name="ProductStandardCost" type="Double"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_total_product_cost" name="TotalProductCost" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_sales_amount" name="SalesAmount" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_tax_amt" name="TaxAmt" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_freight" name="Freight" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_carrier_tracking_number" name="CarrierTrackingNumber"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_customer_po_number" name="CustomerPONumber"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_employee_key" name="EmployeeKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_billing_customer_key" name="BillingCustomerKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_store_key" name="StoreKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_fact_total_sales" name="TotalSales" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_customer" name="Customer">
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_customer_Key" name="CustomerKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_geography_key" name="GeographyKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_customer_alternate_key" name="CustomerAlternateKey"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_first_name" name="FirstName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_middle_name" name="MiddleName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_last_name" name="LastName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_name_style" name="NameStyle" type="Boolean"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_birth_date" name="BirthDate" type="Date"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_marital_status" name="MaritalStatus"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_suffix" name="Suffix"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_gender" name="Gender"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_email_address" name="EmailAddress"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_yearly_income" name="YearlyIncome" type="Decimal" columnSize="10" decimalDigits="2"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_total_children" name="TotalChildren" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_number_children_at_home" name="NumberChildrenAtHome" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_english_education" name="EnglishEducation"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_spanish_education" name="SpanishEducation"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_french_education" name="FrenchEducation"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_english_occupation" name="EnglishOccupation"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_spanish_occupation" name="SpanishOccupation"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_french_occupation" name="FrenchOccupation"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_house_owner_flag" name="HouseOwnerFlag"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_number_cars_owned" name="NumberCarsOwned"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_address_line1" name="AddressLine1"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_address_line2" name="AddressLine2"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_phone" name="Phone"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_date_first_purchase" name="DateFirstPurchase" type="Date"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_customer_commute_distance" name="CommuteDistance"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_employee" name="Employee">
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_employee_key" name="EmployeeKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_parent_employee_key" name="ParentEmployeeKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_employee_national_id_alternate_key" name="EmployeeNationalIDAlternateKey"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_parent_employee_national_id_alternate_key" name="ParentEmployeeNationalIDAlternateKey"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_sales_territory_key" name="SalesTerritoryKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_first_name" name="FirstName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_last_name" name="LastName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_middle_name" name="MiddleName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_name_style" name="NameStyle" type="Boolean"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_title" name="Title"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_hire_date" name="HireDate" type="Date"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_birth_date" name="BirthDate" type="Date"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_login_id" name="LoginID"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_email_address" name="EmailAddress"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_phone" name="Phone"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_marital_status" name="MaritalStatus"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_emergency_contact_name" name="EmergencyContactName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_emergency_contact_phone" name="EmergencyContactPhone"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_salaried_flag" name="SalariedFlag" type="Boolean"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_gender" name="Gender"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_pay_frequency" name="PayFrequency" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_base_rate" name="BaseRate" type="Decimal" columnSize="19" decimalDigits="2"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_vacation_hours" name="VacationHours" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_sick_leave_hours" name="SickLeaveHours" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_current_flag" name="CurrentFlag" type="Boolean"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_sales_person_flag" name="SalesPersonFlag" type="Boolean"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_department_name" name="DepartmentName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_start_date" name="StartDate" type="Date"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_end_date" name="EndDate" type="Date"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_employee_status" name="Status"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_geography" name="Geography">
    <columns xsi:type="roma:PhysicalColumn" id="_column_geography_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_geography_geography_key" name="GeographyKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_geography_city" name="City"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_geography_state_province_code" name="StateProvinceCode"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_geography_state_province_name" name="StateProvinceName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_geography_country_region_code" name="CountryRegionCode"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_geography_english_country_region_name" name="EnglishCountryRegionName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_geography_spanish_country_region_name" name="SpanishCountryRegionName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_geography_french_country_region_name" name="FrenchCountryRegionName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_geography_postal_code" name="PostalCode"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_geography_sales_territory_key" name="SalesTerritoryKey" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_product" name="Product">
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_Key" name="ProductKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_alternate_key" name="ProductAlternateKey"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_subcategory_key" name="ProductSubcategoryKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_weight_unit_measure_code" name="WeightUnitMeasureCode"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_size_unit_measure_code" name="SizeUnitMeasureCode"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_english_product_name" name="EnglishProductName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_spanish_product_name" name="SpanishProductName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_french_product_name" name="FrenchProductName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_standard_cost" name="StandardCost" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_finished_goods_flag" name="FinishedGoodsFlag" type="Boolean"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_color" name="Color"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_safety_stock_level" name="SafetyStockLevel" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_reorder_point" name="ReorderPoint" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_list_price" name="ListPrice" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_size" name="Size"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_size_range" name="SizeRange"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_weight" name="Weight" type="Double"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_productd_days_to_manufacture" name="DaysToManufacture" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_line" name="ProductLine"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_dealer_price" name="DealerPrice" type="Decimal" decimalDigits="4" charOctetLength="19"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_class" name="Class"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_style" name="Style"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_model_name" name="ModelName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_english_description" name="EnglishDescription"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_french_description" name="FrenchDescription"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_chinese_description" name="ChineseDescription"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_arabic_description" name="ArabicDescription"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_hebrew_description" name="HebrewDescription"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_thai_description" name="ThaiDescription"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_start_date" name="StartDate" type="Date"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_end_date" name="EndDate" type="Date"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_status" name="Status"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory" name="Subcategory"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_product_catagory" name="ProductCategory">
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_product_category_key" name="ProductCategoryKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_product_category_alternate_key" name="ProductCategoryAlternateKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_english_product_category_name" name="EnglishProductCategoryName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_spanish_product_category_name" name="SpanishProductCategoryName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_french_product_category_name" name="FrenchProductCategoryName"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_product_subcatagory" name="ProductSubcategory">
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_product_subcategory_key" name="ProductSubcategoryKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_product_subcategory_alternate_key" name="ProductSubcategoryAlternateKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_english_product_subcategory_name" name="EnglishProductSubcategoryName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_spanish_product_subcategory_name" name="SpanishProductSubcategoryName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_french_product_subcategory_name" name="FrenchProductSubcategoryName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_product_category_key" name="ProductCategoryKey" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_store" name="Store">
    <columns xsi:type="roma:PhysicalColumn" id="_column_store_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_store_store_key" name="StoreKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_store_geography_key" name="Geography_Key" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_store_store_name" name="StoreName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_store_number_of_employees" name="Number_of_Employees" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_store_sales" name="Sales" type="Decimal" columnSize="19" decimalDigits="4"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_time" name="Time">
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_row_number" name="RowNumber" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_time_key" name="TimeKey" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_full_date_alternate_key" name="FullDateAlternateKey" type="Date"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_day_number_of_week" name="DayNumberOfWeek" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_english_day_name_of_week" name="EnglishDayNameOfWeek"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_spanish_day_name_of_week" name="SpanishDayNameOfWeek"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_french_day_name_of_week" name="FrenchDayNameOfWeek"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_day_number_of_month" name="DayNumberOfMonth" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_day_number_of_year" name="DayNumberOfYear" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_week_number_of_year" name="WeekNumberOfYear" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_english_month_name" name="EnglishMonthName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_spanish_month_name" name="SpanishMonthName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_french+month_name" name="FrenchMonthName"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_month_number_of_year" name="MonthNumberOfYear" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_calendar_quarter" name="CalendarQuarter" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_calendar_year" name="CalendarYear"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_calendar_semester" name="CalendarSemester" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_fiscal_quarter" name="FiscalQuarter" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_fiscal_year" name="FiscalYear"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_time_fiscal_semester" name="FiscalSemester" type="Integer"/>
  </tables>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery, as it directly references the physical table `Fact`. The query element is not visible to users accessing the cube through the XMLA API, such as Daanse Dashboard, Power BI, or Excel.


```xml
<roma:TableQuery  id="_query_fact" table="_table_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube CSDLBI 1.0

The Cube CSDLBI 1.0.


```xml
<roma:PhysicalCube   id="_cube_DescriptionRolePlayingDimensionsDB" name="DescriptionRolePlayingDimensionsDB" query="_query_fact">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_customer_key" dimension="roma:StandardDimension _dimension_customer" overrideDimensionName="DimCustomer" id="_connector_DimCustomer"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_employee_key" dimension="roma:StandardDimension _dimension_employee" overrideDimensionName="DimEmployee" id="_connector_DimEmployee"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_customer_key" dimension="roma:StandardDimension _dimension_geography" overrideDimensionName="DimGeography" id="_connector_DimGeography"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_Product_key" dimension="roma:StandardDimension _dimension_product" overrideDimensionName="DimProduct" id="_connector_DimProduct"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_Product_key" dimension="roma:StandardDimension _dimension_product_category" overrideDimensionName="DimProductCategory" id="_connector_DimProductCategory"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_Product_key" dimension="roma:StandardDimension _dimension_product_subcategory" overrideDimensionName="DimProductSubCategory" id="_connector_DimProductSubCategory"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_store_key" dimension="roma:StandardDimension _dimension_store" overrideDimensionName="DimStore" id="_connector_DimStore"/>
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_fact_order_date_key" dimension="roma:StandardDimension _dimension_time" overrideDimensionName="DimTime" id="_connector_DimTime"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_fact_internet_sales" name="FactInternetSales" column="_column_fact_sales_amount"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_csdl1" description="DescriptionRolePlayingDimensionsDB" name="CSDLBI 1.0" cubes="_cube_DescriptionRolePlayingDimensionsDB" dbschemas="_databaseSchema"/>
  <roma:DatabaseSchema id="_databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="_table_fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_Product_key" name="ProductKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_order_date_key" name="OrderDateKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_due_date_key" name="DueDateKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_ship_date_key" name="ShipDateKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_customer_key" name="CustomerKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_promotion_key" name="PromotionKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_currency_key" name="CurrencyKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_sales_territory_key" name="SalesTerritoryKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_sales_order_number" name="SalesOrderNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_sales_order_line_number" name="SalesOrderLineNumber"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_revision_number" name="RevisionNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_order_ouantity" name="OrderQuantity" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_unit_price" name="UnitPrice" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_extended_amount" name="ExtendedAmount" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_UnitPriceDiscountPct" name="UnitPriceDiscountPct" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_DiscountAmount" name="DiscountAmount" type="Double"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_product_standard_cost" name="ProductStandardCost" type="Double"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_total_product_cost" name="TotalProductCost" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_sales_amount" name="SalesAmount" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_tax_amt" name="TaxAmt" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_freight" name="Freight" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_carrier_tracking_number" name="CarrierTrackingNumber"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_customer_po_number" name="CustomerPONumber"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_employee_key" name="EmployeeKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_billing_customer_key" name="BillingCustomerKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_store_key" name="StoreKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_fact_total_sales" name="TotalSales" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_customer" name="Customer">
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_customer_Key" name="CustomerKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_geography_key" name="GeographyKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_customer_alternate_key" name="CustomerAlternateKey"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_first_name" name="FirstName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_middle_name" name="MiddleName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_last_name" name="LastName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_name_style" name="NameStyle" type="Boolean"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_birth_date" name="BirthDate" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_marital_status" name="MaritalStatus"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_suffix" name="Suffix"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_gender" name="Gender"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_email_address" name="EmailAddress"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_yearly_income" name="YearlyIncome" type="Decimal" columnSize="10" decimalDigits="2"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_total_children" name="TotalChildren" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_number_children_at_home" name="NumberChildrenAtHome" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_english_education" name="EnglishEducation"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_spanish_education" name="SpanishEducation"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_french_education" name="FrenchEducation"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_english_occupation" name="EnglishOccupation"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_spanish_occupation" name="SpanishOccupation"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_french_occupation" name="FrenchOccupation"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_house_owner_flag" name="HouseOwnerFlag"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_number_cars_owned" name="NumberCarsOwned"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_address_line1" name="AddressLine1"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_address_line2" name="AddressLine2"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_phone" name="Phone"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_date_first_purchase" name="DateFirstPurchase" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_commute_distance" name="CommuteDistance"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_employee" name="Employee">
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_employee_key" name="EmployeeKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_parent_employee_key" name="ParentEmployeeKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_employee_national_id_alternate_key" name="EmployeeNationalIDAlternateKey"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_parent_employee_national_id_alternate_key" name="ParentEmployeeNationalIDAlternateKey"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_sales_territory_key" name="SalesTerritoryKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_first_name" name="FirstName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_last_name" name="LastName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_middle_name" name="MiddleName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_name_style" name="NameStyle" type="Boolean"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_title" name="Title"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_hire_date" name="HireDate" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_birth_date" name="BirthDate" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_login_id" name="LoginID"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_email_address" name="EmailAddress"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_phone" name="Phone"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_marital_status" name="MaritalStatus"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_emergency_contact_name" name="EmergencyContactName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_emergency_contact_phone" name="EmergencyContactPhone"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_salaried_flag" name="SalariedFlag" type="Boolean"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_gender" name="Gender"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_pay_frequency" name="PayFrequency" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_base_rate" name="BaseRate" type="Decimal" columnSize="19" decimalDigits="2"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_vacation_hours" name="VacationHours" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_sick_leave_hours" name="SickLeaveHours" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_current_flag" name="CurrentFlag" type="Boolean"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_sales_person_flag" name="SalesPersonFlag" type="Boolean"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_department_name" name="DepartmentName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_start_date" name="StartDate" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_end_date" name="EndDate" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_status" name="Status"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_geography" name="Geography">
      <columns xsi:type="roma:PhysicalColumn" id="_column_geography_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_geography_geography_key" name="GeographyKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_geography_city" name="City"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_geography_state_province_code" name="StateProvinceCode"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_geography_state_province_name" name="StateProvinceName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_geography_country_region_code" name="CountryRegionCode"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_geography_english_country_region_name" name="EnglishCountryRegionName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_geography_spanish_country_region_name" name="SpanishCountryRegionName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_geography_french_country_region_name" name="FrenchCountryRegionName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_geography_postal_code" name="PostalCode"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_geography_sales_territory_key" name="SalesTerritoryKey" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_product" name="Product">
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_Key" name="ProductKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_alternate_key" name="ProductAlternateKey"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_subcategory_key" name="ProductSubcategoryKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_weight_unit_measure_code" name="WeightUnitMeasureCode"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_size_unit_measure_code" name="SizeUnitMeasureCode"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_english_product_name" name="EnglishProductName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_spanish_product_name" name="SpanishProductName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_french_product_name" name="FrenchProductName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_standard_cost" name="StandardCost" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_finished_goods_flag" name="FinishedGoodsFlag" type="Boolean"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_color" name="Color"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_safety_stock_level" name="SafetyStockLevel" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_reorder_point" name="ReorderPoint" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_list_price" name="ListPrice" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_size" name="Size"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_size_range" name="SizeRange"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_weight" name="Weight" type="Double"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_productd_days_to_manufacture" name="DaysToManufacture" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_line" name="ProductLine"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_dealer_price" name="DealerPrice" type="Decimal" decimalDigits="4" charOctetLength="19"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_class" name="Class"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_style" name="Style"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_model_name" name="ModelName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_english_description" name="EnglishDescription"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_french_description" name="FrenchDescription"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_chinese_description" name="ChineseDescription"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_arabic_description" name="ArabicDescription"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_hebrew_description" name="HebrewDescription"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_thai_description" name="ThaiDescription"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_start_date" name="StartDate" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_end_date" name="EndDate" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_status" name="Status"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory" name="Subcategory"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_product_catagory" name="ProductCategory">
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_product_category_key" name="ProductCategoryKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_product_category_alternate_key" name="ProductCategoryAlternateKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_english_product_category_name" name="EnglishProductCategoryName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_spanish_product_category_name" name="SpanishProductCategoryName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_category_french_product_category_name" name="FrenchProductCategoryName"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_product_subcatagory" name="ProductSubcategory">
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_product_subcategory_key" name="ProductSubcategoryKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_product_subcategory_alternate_key" name="ProductSubcategoryAlternateKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_english_product_subcategory_name" name="EnglishProductSubcategoryName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_spanish_product_subcategory_name" name="SpanishProductSubcategoryName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_french_product_subcategory_name" name="FrenchProductSubcategoryName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_subcategory_product_category_key" name="ProductCategoryKey" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_store" name="Store">
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_store_key" name="StoreKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_geography_key" name="Geography_Key" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_store_name" name="StoreName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_number_of_employees" name="Number_of_Employees" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_sales" name="Sales" type="Decimal" columnSize="19" decimalDigits="4"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_time" name="Time">
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_row_number" name="RowNumber" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_time_key" name="TimeKey" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_full_date_alternate_key" name="FullDateAlternateKey" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_day_number_of_week" name="DayNumberOfWeek" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_english_day_name_of_week" name="EnglishDayNameOfWeek"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_spanish_day_name_of_week" name="SpanishDayNameOfWeek"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_french_day_name_of_week" name="FrenchDayNameOfWeek"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_day_number_of_month" name="DayNumberOfMonth" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_day_number_of_year" name="DayNumberOfYear" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_week_number_of_year" name="WeekNumberOfYear" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_english_month_name" name="EnglishMonthName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_spanish_month_name" name="SpanishMonthName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_french+month_name" name="FrenchMonthName"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_month_number_of_year" name="MonthNumberOfYear" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_calendar_quarter" name="CalendarQuarter" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_calendar_year" name="CalendarYear"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_calendar_semester" name="CalendarSemester" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_fiscal_quarter" name="FiscalQuarter" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_fiscal_year" name="FiscalYear"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_fiscal_semester" name="FiscalSemester" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_customer" table="_table_customer"/>
  <roma:TableQuery id="_query_employee" table="_table_employee"/>
  <roma:TableQuery id="_query_fact" table="_table_fact"/>
  <roma:TableQuery id="_query_geography" table="_table_geography"/>
  <roma:TableQuery id="_query_product" table="_table_product"/>
  <roma:TableQuery id="_query_product_category" table="_table_product_catagory"/>
  <roma:TableQuery id="_query_product_subcategory" table="_table_product_subcatagory"/>
  <roma:TableQuery id="_query_store" table="_table_store"/>
  <roma:TableQuery id="_query_time" table="_table_time"/>
  <roma:JoinQuery id="_join_query_geography">
    <left key="_column_customer_geography_key" query="_query_customer"/>
    <right key="_column_geography_geography_key" query="_query_geography"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_query_product_category">
    <left key="_column_product_product_subcategory_key" query="_query_product"/>
    <right key="_column_product_subcategory_product_subcategory_key" query="_join_query_subcategory_category"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_query_product_subcategory">
    <left key="_column_product_product_subcategory_key" query="_query_product"/>
    <right key="_column_product_subcategory_product_subcategory_key" query="_query_product_subcategory"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_query_subcategory_category">
    <left key="_column_product_subcategory_product_category_key" query="_query_product_subcategory"/>
    <right key="_column_product_category_product_category_key" query="_query_product_category"/>
  </roma:JoinQuery>
  <roma:Level id="_level_customer_address_line1" name="AddressLine1" column="_column_customer_address_line1"/>
  <roma:Level id="_level_customer_address_line2" name="AddressLine2" column="_column_customer_address_line2"/>
  <roma:Level id="_level_customer_birth_date" name="BirthDate" column="_column_customer_birth_date" columnType="String"/>
  <roma:Level id="_level_customer_commute_distance" name="CommuteDistance" column="_column_customer_commute_distance"/>
  <roma:Level id="_level_customer_customer_alternate_key" name="CustomerAlternateKey" column="_column_customer_customer_alternate_key" columnType="String"/>
  <roma:Level id="_level_customer_customer_key" name="CustomerKey" column="_column_customer_customer_Key" columnType="Integer"/>
  <roma:Level id="_level_customer_date_first_purchase" name="DateFirstPurchase" column="_column_customer_date_first_purchase"/>
  <roma:Level id="_level_customer_email_address" name="EmailAddress" column="_column_customer_email_address" columnType="String"/>
  <roma:Level id="_level_customer_english_education" name="EnglishEducation" column="_column_customer_english_education" columnType="String"/>
  <roma:Level id="_level_customer_english_occupation" name="EnglishOccupation" column="_column_customer_english_occupation"/>
  <roma:Level id="_level_customer_first_name" name="FirstName" column="_column_customer_first_name" columnType="String"/>
  <roma:Level id="_level_customer_french_education" name="FrenchEducation" column="_column_customer_french_education" columnType="String"/>
  <roma:Level id="_level_customer_french_occupation" name="FrenchOccupation" column="_column_customer_french_occupation"/>
  <roma:Level id="_level_customer_gender" name="Gender" column="_column_customer_gender" columnType="String"/>
  <roma:Level id="_level_customer_house_owner_flag" name="HouseOwnerFlag" column="_column_customer_house_owner_flag"/>
  <roma:Level id="_level_customer_last_name" name="LastName" column="_column_customer_last_name" columnType="String"/>
  <roma:Level id="_level_customer_marital_status" name="MaritalStatus" column="_column_customer_marital_status" columnType="String"/>
  <roma:Level id="_level_customer_middle_name" name="MiddleName" column="_column_customer_middle_name" columnType="String"/>
  <roma:Level id="_level_customer_name_style" name="NameStyle" column="_column_customer_name_style" columnType="String"/>
  <roma:Level id="_level_customer_number_cars_owned" name="NumberCarsOwned" column="_column_customer_number_cars_owned"/>
  <roma:Level id="_level_customer_number_children_at_home" name="NumberChildrenAtHome" column="_column_customer_number_children_at_home" columnType="Integer"/>
  <roma:Level id="_level_customer_phone" name="Phone" column="_column_customer_phone"/>
  <roma:Level id="_level_customer_row_number" name="RowNumber" column="_column_customer_row_number" columnType="Integer" uniqueMembers="true"/>
  <roma:Level id="_level_customer_spanish_education" name="SpanishEducation" column="_column_customer_spanish_education" columnType="String"/>
  <roma:Level id="_level_customer_spanish_occupation" name="SpanishOccupation" column="_column_customer_spanish_occupation"/>
  <roma:Level id="_level_customer_suffix" name="Suffix" column="_column_customer_suffix" columnType="String"/>
  <roma:Level id="_level_customer_total_children" name="TotalChildren" column="_column_customer_total_children" columnType="Integer"/>
  <roma:Level id="_level_customer_yearly_income" name="YearlyIncome" column="_column_customer_yearly_income" columnType="Numeric"/>
  <roma:Level id="_level_employee_base_rate" name="BaseRate" column="_column_employee_base_rate"/>
  <roma:Level id="_level_employee_birth_date" name="BirthDate" column="_column_employee_birth_date"/>
  <roma:Level id="_level_employee_current_flag" name="CurrentFlag" column="_column_employee_current_flag"/>
  <roma:Level id="_level_employee_department_name" name="DepartmentName" column="_column_employee_department_name"/>
  <roma:Level id="_level_employee_email_address" name="EmailAddress" column="_column_employee_email_address"/>
  <roma:Level id="_level_employee_emergency_contact_name" name="EmergencyContactName" column="_column_employee_emergency_contact_name"/>
  <roma:Level id="_level_employee_emergency_contact_phone" name="EmergencyContactPhone" column="_column_employee_emergency_contact_phone"/>
  <roma:Level id="_level_employee_employee_key" name="EmployeeKey" column="_column_employee_employee_key"/>
  <roma:Level id="_level_employee_employee_mational_id_alternate_key" name="EmployeeNationalIDAlternateKey" column="_column_employee_employee_national_id_alternate_key"/>
  <roma:Level id="_level_employee_end_date" name="EndDate" column="_column_employee_end_date"/>
  <roma:Level id="_level_employee_first_name" name="FirstName" column="_column_employee_first_name"/>
  <roma:Level id="_level_employee_gender" name="Gender" column="_column_employee_gender"/>
  <roma:Level id="_level_employee_hire_date" name="HireDate" column="_column_employee_hire_date"/>
  <roma:Level id="_level_employee_last_name" name="LastName" column="_column_employee_last_name"/>
  <roma:Level id="_level_employee_login_id" name="LoginID" column="_column_employee_login_id"/>
  <roma:Level id="_level_employee_marital_status" name="MaritalStatus" column="_column_employee_marital_status"/>
  <roma:Level id="_level_employee_middle_name" name="MiddleName" column="_column_employee_middle_name"/>
  <roma:Level id="_level_employee_name_style" name="NameStyle" column="_column_employee_name_style"/>
  <roma:Level id="_level_employee_parent_employee_key" name="ParentEmployeeKey" column="_column_employee_parent_employee_key"/>
  <roma:Level id="_level_employee_parent_employee_national_id_alternate_key" name="ParentEmployeeNationalIDAlternateKey" column="_column_employee_parent_employee_national_id_alternate_key"/>
  <roma:Level id="_level_employee_pay_frequency" name="PayFrequency" column="_column_employee_pay_frequency"/>
  <roma:Level id="_level_employee_phone" name="Phone" column="_column_employee_phone"/>
  <roma:Level id="_level_employee_row_number" name="RowNumber" column="_column_employee_row_number"/>
  <roma:Level id="_level_employee_salaried_flag" name="SalariedFlag" column="_column_employee_salaried_flag"/>
  <roma:Level id="_level_employee_sales_person_flag" name="SalesPersonFlag" column="_column_employee_sales_person_flag"/>
  <roma:Level id="_level_employee_sales_territory_key" name="SalesTerritoryKey" column="_column_employee_sales_territory_key"/>
  <roma:Level id="_level_employee_sick_leave_hours" name="SickLeaveHours" column="_column_employee_sick_leave_hours"/>
  <roma:Level id="_level_employee_start_date" name="StartDate" column="_column_employee_start_date"/>
  <roma:Level id="_level_employee_status" name="Status" column="_column_employee_status"/>
  <roma:Level id="_level_employee_title" name="Title" column="_column_employee_title"/>
  <roma:Level id="_level_employee_vacation_hours" name="VacationHours" column="_column_employee_vacation_hours"/>
  <roma:Level id="_level_geography_city" name="City" column="_column_geography_city"/>
  <roma:Level id="_level_geography_country_region_code" name="CountryRegionCode" column="_column_geography_country_region_code"/>
  <roma:Level id="_level_geography_english_country_region_name" name="EnglishCountryRegionName" column="_column_geography_english_country_region_name"/>
  <roma:Level id="_level_geography_french_country_region_name" name="FrenchCountryRegionName" column="_column_geography_french_country_region_name"/>
  <roma:Level id="_level_geography_geography_key" name="GeographyKey" column="_column_geography_geography_key"/>
  <roma:Level id="_level_geography_postal_code" name="PostalCode" column="_column_geography_postal_code"/>
  <roma:Level id="_level_geography_row_number" name="RowNumber" column="_column_geography_row_number"/>
  <roma:Level id="_level_geography_sales_territory_key" name="SalesTerritoryKey" column="_column_geography_sales_territory_key"/>
  <roma:Level id="_level_geography_spanish_country_region_name" name="SpanishCountryRegionName" column="_column_geography_spanish_country_region_name"/>
  <roma:Level id="_level_geography_state_province_code" name="StateProvinceCode" column="_column_geography_state_province_code"/>
  <roma:Level id="_level_geography_state_province_name" name="StateProvinceName" column="_column_geography_state_province_name"/>
  <roma:Level id="_level_product_arabic_description" name="ArabicDescription" column="_column_product_arabic_description"/>
  <roma:Level id="_level_product_category_english_product_category_name" name="EnglishProductCategoryName" column="_column_product_category_english_product_category_name"/>
  <roma:Level id="_level_product_category_french_product_category_name" name="FrenchProductCategoryName" column="_column_product_category_french_product_category_name"/>
  <roma:Level id="_level_product_category_product_category_alternate_key" name="ProductCategoryAlternateKey" column="_column_product_category_product_category_alternate_key"/>
  <roma:Level id="_level_product_category_product_category_key" name="ProductCategoryKey" column="_column_product_category_product_category_key"/>
  <roma:Level id="_level_product_category_row_number" name="RowNumber" column="_column_product_category_row_number"/>
  <roma:Level id="_level_product_category_spanish_product_category_name" name="SpanishProductCategoryName" column="_column_product_category_spanish_product_category_name"/>
  <roma:Level id="_level_product_chinese_description" name="ChineseDescription" column="_column_product_chinese_description"/>
  <roma:Level id="_level_product_class" name="Class" column="_column_product_class"/>
  <roma:Level id="_level_product_color" name="Color" column="_column_product_color"/>
  <roma:Level id="_level_product_days_to_manufacture" name="DaysToManufacture" column="_column_productd_days_to_manufacture"/>
  <roma:Level id="_level_product_dealer_price" name="DealerPrice" column="_column_product_dealer_price"/>
  <roma:Level id="_level_product_end_date" name="EndDate" column="_column_product_end_date"/>
  <roma:Level id="_level_product_english_description" name="EnglishDescription" column="_column_product_english_description"/>
  <roma:Level id="_level_product_english_product_name" name="EnglishProductName" column="_column_product_english_product_name"/>
  <roma:Level id="_level_product_finished_goods_flag" name="FinishedGoodsFlag" column="_column_product_finished_goods_flag"/>
  <roma:Level id="_level_product_french_description" name="FrenchDescription" column="_column_product_french_description"/>
  <roma:Level id="_level_product_french_product_name" name="FrenchProductName" column="_column_product_french_product_name"/>
  <roma:Level id="_level_product_hebrew_description" name="HebrewDescription" column="_column_product_hebrew_description"/>
  <roma:Level id="_level_product_list_price" name="ListPrice" column="_column_product_list_price"/>
  <roma:Level id="_level_product_model_name" name="ModelName" column="_column_product_model_name"/>
  <roma:Level id="_level_product_product_alternate_key" name="ProductAlternateKey" column="_column_product_product_alternate_key"/>
  <roma:Level id="_level_product_product_key" name="ProductKey" column="_column_product_product_Key"/>
  <roma:Level id="_level_product_product_line" name="ProductLine" column="_column_product_product_line"/>
  <roma:Level id="_level_product_product_subcategory_key" name="ProductSubcategoryKey" column="_column_product_product_subcategory_key"/>
  <roma:Level id="_level_product_reorder_point" name="ReorderPoint" column="_column_product_reorder_point"/>
  <roma:Level id="_level_product_row_number" name="RowNumber" column="_column_product_row_number"/>
  <roma:Level id="_level_product_safety_stock_level" name="SafetyStockLevel" column="_column_product_safety_stock_level"/>
  <roma:Level id="_level_product_size" name="Size" column="_column_product_size"/>
  <roma:Level id="_level_product_size_range" name="SizeRange" column="_column_product_size_range"/>
  <roma:Level id="_level_product_size_unit_measure_code" name="SizeUnitMeasureCode" column="_column_product_size_unit_measure_code"/>
  <roma:Level id="_level_product_spanish_product_name" name="SpanishProductName" column="_column_product_spanish_product_name"/>
  <roma:Level id="_level_product_standard_cost" name="StandardCost" column="_column_product_standard_cost"/>
  <roma:Level id="_level_product_start_date" name="StartDate" column="_column_product_start_date"/>
  <roma:Level id="_level_product_status" name="Status" column="_column_product_status"/>
  <roma:Level id="_level_product_style" name="Style" column="_column_product_style"/>
  <roma:Level id="_level_product_subcategory" name="Subcategory" column="_column_product_subcategory"/>
  <roma:Level id="_level_product_subcategory_english_product_subcategory_name" name="EnglishProductSubcategoryName" column="_column_product_subcategory_english_product_subcategory_name"/>
  <roma:Level id="_level_product_subcategory_french_product_subcategory_name" name="FrenchProductSubcategoryName" column="_column_product_subcategory_french_product_subcategory_name"/>
  <roma:Level id="_level_product_subcategory_product_category_key" name="ProductCategoryKey" column="_column_product_subcategory_product_category_key"/>
  <roma:Level id="_level_product_subcategory_product_subcategory_alternate_key" name="ProductSubcategoryAlternateKey" column="_column_product_subcategory_product_subcategory_alternate_key"/>
  <roma:Level id="_level_product_subcategory_product_subcategory_key" name="ProductSubcategoryKey" column="_column_product_subcategory_product_subcategory_key"/>
  <roma:Level id="_level_product_subcategory_row_number" name="RowNumber" column="_column_product_subcategory_row_number"/>
  <roma:Level id="_level_product_subcategory_spanish_product_subcategory_name" name="SpanishProductSubcategoryName" column="_column_product_subcategory_spanish_product_subcategory_name"/>
  <roma:Level id="_level_product_thai_description" name="ThaiDescription" column="_column_product_thai_description"/>
  <roma:Level id="_level_product_weight" name="Weight" column="_column_product_weight"/>
  <roma:Level id="_level_product_weight_unit_measure_code" name="WeightUnitMeasureCode" column="_column_product_weight_unit_measure_code"/>
  <roma:Level id="_level_store_geography_key" name="Geography_Key" column="_column_store_geography_key"/>
  <roma:Level id="_level_store_number_of_employees" name="Number_of_Employees" column="_column_store_number_of_employees"/>
  <roma:Level id="_level_store_row_number" name="RowNumber" column="_column_store_row_number"/>
  <roma:Level id="_level_store_sales" name="Sales" column="_column_store_sales"/>
  <roma:Level id="_level_store_store_key" name="StoreKey" column="_column_store_store_key"/>
  <roma:Level id="_level_store_store_name" name="StoreName" column="_column_store_store_name"/>
  <roma:Level id="_level_time_calendar_quarter" name="CalendarQuarter" column="_column_time_calendar_quarter"/>
  <roma:Level id="_level_time_calendar_semester" name="CalendarSemester" column="_column_time_calendar_semester"/>
  <roma:Level id="_level_time_calendar_year" name="CalendarYear" column="_column_time_calendar_year"/>
  <roma:Level id="_level_time_day_number_of_month" name="DayNumberOfMonth" column="_column_time_day_number_of_month"/>
  <roma:Level id="_level_time_day_number_of_week" name="DayNumberOfWeek" column="_column_time_day_number_of_week"/>
  <roma:Level id="_level_time_day_number_of_year" name="DayNumberOfYear" column="_column_time_day_number_of_year"/>
  <roma:Level id="_level_time_english_day_name_of_week" name="EnglishDayNameOfWeek" column="_column_time_english_day_name_of_week"/>
  <roma:Level id="_level_time_english_month_name" name="EnglishMonthName" column="_column_time_english_month_name"/>
  <roma:Level id="_level_time_fiscal_quarter" name="FiscalQuarter" column="_column_time_fiscal_quarter"/>
  <roma:Level id="_level_time_fiscal_semester" name="FiscalSemester" column="_column_time_fiscal_semester"/>
  <roma:Level id="_level_time_fiscal_year" name="FiscalYear" column="_column_time_fiscal_year"/>
  <roma:Level id="_level_time_french_day_name_of_week" name="FrenchDayNameOfWeek" column="_column_time_french_day_name_of_week"/>
  <roma:Level id="_level_time_french_month_name" name="FrenchMonthName" column="_column_time_french+month_name"/>
  <roma:Level id="_level_time_full_date_alternate_key" name="FullDateAlternateKey" column="_column_time_full_date_alternate_key"/>
  <roma:Level id="_level_time_month_number_of_year" name="MonthNumberOfYear" column="_column_time_month_number_of_year"/>
  <roma:Level id="_level_time_row_number" name="RowNumber" column="_column_time_row_number"/>
  <roma:Level id="_level_time_spanish_day_name_of_week" name="SpanishDayNameOfWeek" column="_column_time_spanish_day_name_of_week"/>
  <roma:Level id="_level_time_spanish_month_name" name="SpanishMonthName" column="_column_time_spanish_month_name"/>
  <roma:Level id="_level_time_time_key" name="TimeKey" column="_column_time_time_key"/>
  <roma:Level id="_level_time_week_number_of_year" name="WeekNumberOfYear" column="_column_time_week_number_of_year"/>
  <roma:ExplicitHierarchy id="_hierarchy_customer" primaryKey="_column_customer_customer_Key" query="_query_customer" levels="_level_customer_row_number _level_customer_customer_key _level_customer_customer_alternate_key _level_customer_first_name _level_customer_middle_name _level_customer_last_name _level_customer_name_style _level_customer_birth_date _level_customer_marital_status _level_customer_suffix _level_customer_gender _level_customer_email_address _level_customer_yearly_income _level_customer_total_children _level_customer_number_children_at_home _level_customer_english_education _level_customer_spanish_education _level_customer_french_education _level_customer_english_occupation _level_customer_spanish_occupation _level_customer_french_occupation _level_customer_house_owner_flag _level_customer_number_cars_owned _level_customer_address_line1 _level_customer_address_line2 _level_customer_phone _level_customer_date_first_purchase _level_customer_commute_distance"/>
  <roma:ExplicitHierarchy id="_hierarchy_employee" primaryKey="_column_employee_employee_key" query="_query_employee" levels="_level_employee_row_number _level_employee_employee_key _level_employee_parent_employee_key _level_employee_employee_mational_id_alternate_key _level_employee_parent_employee_national_id_alternate_key _level_employee_sales_territory_key _level_employee_first_name _level_employee_last_name _level_employee_middle_name _level_employee_name_style _level_employee_title _level_employee_hire_date _level_employee_birth_date _level_employee_login_id _level_employee_email_address _level_employee_phone _level_employee_marital_status _level_employee_emergency_contact_name _level_employee_emergency_contact_phone _level_employee_salaried_flag _level_employee_gender _level_employee_pay_frequency _level_employee_base_rate _level_employee_vacation_hours _level_employee_sick_leave_hours _level_employee_current_flag _level_employee_sales_person_flag _level_employee_department_name _level_employee_start_date _level_employee_end_date _level_employee_status"/>
  <roma:ExplicitHierarchy id="_hierarchy_geography" primaryKey="_column_geography_geography_key" query="_join_query_geography" levels="_level_geography_row_number _level_geography_geography_key _level_geography_city _level_geography_state_province_code _level_geography_state_province_name _level_geography_country_region_code _level_geography_english_country_region_name _level_geography_spanish_country_region_name _level_geography_french_country_region_name _level_geography_postal_code _level_geography_sales_territory_key"/>
  <roma:ExplicitHierarchy id="_hierarchy_poroduct" primaryKey="_column_product_product_Key" query="_query_product" levels="_level_product_row_number _level_product_product_key _level_product_product_alternate_key _level_product_product_subcategory_key _level_product_weight_unit_measure_code _level_product_size_unit_measure_code _level_product_english_product_name _level_product_spanish_product_name _level_product_french_product_name _level_product_standard_cost _level_product_finished_goods_flag _level_product_color _level_product_safety_stock_level _level_product_reorder_point _level_product_list_price _level_product_size _level_product_size_range _level_product_weight _level_product_days_to_manufacture _level_product_product_line _level_product_dealer_price _level_product_class _level_product_style _level_product_model_name _level_product_english_description _level_product_french_description _level_product_chinese_description _level_product_arabic_description _level_product_hebrew_description _level_product_thai_description _level_product_start_date _level_product_end_date _level_product_status _level_product_subcategory"/>
  <roma:ExplicitHierarchy id="_hierarchy_poroduct_category" primaryKey="_column_product_product_Key" query="_join_query_product_category" levels="_level_product_category_row_number _level_product_category_product_category_key _level_product_category_product_category_alternate_key _level_product_category_english_product_category_name _level_product_category_spanish_product_category_name _level_product_category_french_product_category_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_poroduct_subcategory" primaryKey="_column_product_product_Key" query="_join_query_product_subcategory" levels="_level_product_subcategory_row_number _level_product_subcategory_product_subcategory_key _level_product_subcategory_product_subcategory_alternate_key _level_product_subcategory_english_product_subcategory_name _level_product_subcategory_spanish_product_subcategory_name _level_product_subcategory_french_product_subcategory_name _level_product_subcategory_product_category_key"/>
  <roma:ExplicitHierarchy id="_hierarchy_store" primaryKey="_column_store_store_key" query="_query_store" levels="_level_store_row_number _level_store_store_key _level_store_geography_key _level_store_store_name _level_store_number_of_employees _level_store_sales"/>
  <roma:ExplicitHierarchy id="_hierarchy_time" primaryKey="_column_time_time_key" query="_query_time" levels="_level_time_row_number _level_time_time_key _level_time_full_date_alternate_key _level_time_day_number_of_week _level_time_english_day_name_of_week _level_time_spanish_day_name_of_week _level_time_french_day_name_of_week _level_time_day_number_of_month _level_time_day_number_of_year _level_time_week_number_of_year _level_time_english_month_name _level_time_spanish_month_name _level_time_french_month_name _level_time_month_number_of_year _level_time_calendar_quarter _level_time_calendar_year _level_time_calendar_semester _level_time_fiscal_quarter _level_time_fiscal_year _level_time_fiscal_semester"/>
  <roma:StandardDimension id="_dimension_customer" name="DimCustomer" hierarchies="_hierarchy_customer"/>
  <roma:StandardDimension id="_dimension_employee" name="DimEmployee" hierarchies="_hierarchy_employee"/>
  <roma:StandardDimension id="_dimension_geography" name="DimGeography" hierarchies="_hierarchy_geography"/>
  <roma:StandardDimension id="_dimension_product" name="DimProduct" hierarchies="_hierarchy_poroduct"/>
  <roma:StandardDimension id="_dimension_product_category" name="DimProductCategory" hierarchies="_hierarchy_poroduct_category"/>
  <roma:StandardDimension id="_dimension_product_subcategory" name="DimProductSubcategory" hierarchies="_hierarchy_poroduct_subcategory"/>
  <roma:StandardDimension id="_dimension_store" name="DimStore" hierarchies="_hierarchy_store"/>
  <roma:StandardDimension id="_dimension_time" name="DimTime" hierarchies="_hierarchy_time"/>
  <roma:PhysicalCube id="_cube_DescriptionRolePlayingDimensionsDB" name="DescriptionRolePlayingDimensionsDB" query="_query_fact">
    <dimensionConnectors foreignKey="_column_fact_customer_key" dimension="_dimension_customer" overrideDimensionName="DimCustomer" id="_connector_DimCustomer"/>
    <dimensionConnectors foreignKey="_column_fact_employee_key" dimension="_dimension_employee" overrideDimensionName="DimEmployee" id="_connector_DimEmployee"/>
    <dimensionConnectors foreignKey="_column_fact_customer_key" dimension="_dimension_geography" overrideDimensionName="DimGeography" id="_connector_DimGeography"/>
    <dimensionConnectors foreignKey="_column_fact_Product_key" dimension="_dimension_product" overrideDimensionName="DimProduct" id="_connector_DimProduct"/>
    <dimensionConnectors foreignKey="_column_fact_Product_key" dimension="_dimension_product_category" overrideDimensionName="DimProductCategory" id="_connector_DimProductCategory"/>
    <dimensionConnectors foreignKey="_column_fact_Product_key" dimension="_dimension_product_subcategory" overrideDimensionName="DimProductSubCategory" id="_connector_DimProductSubCategory"/>
    <dimensionConnectors foreignKey="_column_fact_store_key" dimension="_dimension_store" overrideDimensionName="DimStore" id="_connector_DimStore"/>
    <dimensionConnectors foreignKey="_column_fact_order_date_key" dimension="_dimension_time" overrideDimensionName="DimTime" id="_connector_DimTime"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_fact_internet_sales" name="FactInternetSales" column="_column_fact_sales_amount"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.csdl.bikeaccessories.zip" download>Download Zip File</a>
