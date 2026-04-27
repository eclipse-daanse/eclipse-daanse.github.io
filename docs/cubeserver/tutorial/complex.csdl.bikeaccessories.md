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
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_productkey" name="ProductKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_orderdatekey" name="OrderDateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_duedatekey" name="DueDateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_shipdatekey" name="ShipDateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_customerkey" name="CustomerKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_promotionkey" name="PromotionKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_currencykey" name="CurrencyKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesterritorykey" name="SalesTerritoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesordernumber" name="SalesOrderNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesorderlinenumber" name="SalesOrderLineNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_revisionnumber" name="RevisionNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_orderquantity" name="OrderQuantity"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_unitprice" name="UnitPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_extendedamount" name="ExtendedAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_unitpricediscountpct" name="UnitPriceDiscountPct"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_discountamount" name="DiscountAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_productstandardcost" name="ProductStandardCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_totalproductcost" name="TotalProductCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesamount" name="SalesAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_taxamt" name="TaxAmt"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_freight" name="Freight"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_carriertrackingnumber" name="CarrierTrackingNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_customerponumber" name="CustomerPONumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_employeekey" name="EmployeeKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_billingcustomerkey" name="BillingCustomerKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_storekey" name="StoreKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_totalsales" name="TotalSales"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_customer" name="Customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customerkey" name="CustomerKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_geographykey" name="GeographyKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customeralternatekey" name="CustomerAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_firstname" name="FirstName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_middlename" name="MiddleName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lastname" name="LastName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_namestyle" name="NameStyle"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_birthdate" name="BirthDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_maritalstatus" name="MaritalStatus"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_suffix" name="Suffix"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="Gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_emailaddress" name="EmailAddress"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearlyincome" name="YearlyIncome"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_totalchildren" name="TotalChildren"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_numberchildrenathome" name="NumberChildrenAtHome"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_englisheducation" name="EnglishEducation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_spanisheducation" name="SpanishEducation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_frencheducation" name="FrenchEducation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_englishoccupation" name="EnglishOccupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_spanishoccupation" name="SpanishOccupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_frenchoccupation" name="FrenchOccupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseownerflag" name="HouseOwnerFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_numbercarsowned" name="NumberCarsOwned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_addressline1" name="AddressLine1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_addressline2" name="AddressLine2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_phone" name="Phone"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_datefirstpurchase" name="DateFirstPurchase"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_commutedistance" name="CommuteDistance"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_employee" name="Employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employeekey" name="EmployeeKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_parentemployeekey" name="ParentEmployeeKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employeenationalidalternatekey" name="EmployeeNationalIDAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_parentemployeenationalidalternatekey" name="ParentEmployeeNationalIDAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salesterritorykey" name="SalesTerritoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_firstname" name="FirstName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_lastname" name="LastName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_middlename" name="MiddleName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_namestyle" name="NameStyle"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_title" name="Title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_hiredate" name="HireDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_birthdate" name="BirthDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_loginid" name="LoginID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_emailaddress" name="EmailAddress"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_phone" name="Phone"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_maritalstatus" name="MaritalStatus"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_emergencycontactname" name="EmergencyContactName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_emergencycontactphone" name="EmergencyContactPhone"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salariedflag" name="SalariedFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="Gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_payfrequency" name="PayFrequency"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_baserate" name="BaseRate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_vacationhours" name="VacationHours"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_sickleavehours" name="SickLeaveHours"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_currentflag" name="CurrentFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salespersonflag" name="SalesPersonFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_departmentname" name="DepartmentName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_startdate" name="StartDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_enddate" name="EndDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_status" name="Status"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_geography" name="Geography">
    <feature xsi:type="relational:Column" xmi:id="_column_geography_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_geographykey" name="GeographyKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_city" name="City"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_stateprovincecode" name="StateProvinceCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_stateprovincename" name="StateProvinceName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_countryregioncode" name="CountryRegionCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_englishcountryregionname" name="EnglishCountryRegionName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_spanishcountryregionname" name="SpanishCountryRegionName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_frenchcountryregionname" name="FrenchCountryRegionName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_postalcode" name="PostalCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_salesterritorykey" name="SalesTerritoryKey"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_product" name="Product">
    <feature xsi:type="relational:Column" xmi:id="_column_product_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_productkey" name="ProductKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_productalternatekey" name="ProductAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_productsubcategorykey" name="ProductSubcategoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_weightunitmeasurecode" name="WeightUnitMeasureCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_sizeunitmeasurecode" name="SizeUnitMeasureCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_englishproductname" name="EnglishProductName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_spanishproductname" name="SpanishProductName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_frenchproductname" name="FrenchProductName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_standardcost" name="StandardCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_finishedgoodsflag" name="FinishedGoodsFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_color" name="Color"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_safetystocklevel" name="SafetyStockLevel"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_reorderpoint" name="ReorderPoint"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_listprice" name="ListPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_size" name="Size"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_sizerange" name="SizeRange"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_weight" name="Weight"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_daystomanufacture" name="DaysToManufacture"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_productline" name="ProductLine"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_dealerprice" name="DealerPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class" name="Class"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_style" name="Style"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_modelname" name="ModelName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_englishdescription" name="EnglishDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_frenchdescription" name="FrenchDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_chinesedescription" name="ChineseDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_arabicdescription" name="ArabicDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_hebrewdescription" name="HebrewDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_thaidescription" name="ThaiDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_startdate" name="StartDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_enddate" name="EndDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_status" name="Status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_subcategory" name="Subcategory"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_productcategory" name="ProductCategory">
    <feature xsi:type="relational:Column" xmi:id="_column_productcategory_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productcategory_productcategorykey" name="ProductCategoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productcategory_productcategoryalternatekey" name="ProductCategoryAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productcategory_englishproductcategoryname" name="EnglishProductCategoryName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productcategory_spanishproductcategoryname" name="SpanishProductCategoryName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productcategory_frenchproductcategoryname" name="FrenchProductCategoryName"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_productsubcategory" name="ProductSubcategory">
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_productsubcategorykey" name="ProductSubcategoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_productsubcategoryalternatekey" name="ProductSubcategoryAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_englishproductsubcategoryname" name="EnglishProductSubcategoryName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_spanishproductsubcategoryname" name="SpanishProductSubcategoryName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_frenchproductsubcategoryname" name="FrenchProductSubcategoryName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_productcategorykey" name="ProductCategoryKey"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_store" name="Store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_storekey" name="StoreKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_geography_key" name="Geography_Key"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_storename" name="StoreName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_number_of_employees" name="Number_of_Employees"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_sales" name="Sales"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_time" name="Time">
    <feature xsi:type="relational:Column" xmi:id="_column_time_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_timekey" name="TimeKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_fulldatealternatekey" name="FullDateAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_daynumberofweek" name="DayNumberOfWeek"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_englishdaynameofweek" name="EnglishDayNameOfWeek"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_spanishdaynameofweek" name="SpanishDayNameOfWeek"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_frenchdaynameofweek" name="FrenchDayNameOfWeek"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_daynumberofmonth" name="DayNumberOfMonth"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_daynumberofyear" name="DayNumberOfYear"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_weeknumberofyear" name="WeekNumberOfYear"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_englishmonthname" name="EnglishMonthName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_spanishmonthname" name="SpanishMonthName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_frenchmonthname" name="FrenchMonthName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_monthnumberofyear" name="MonthNumberOfYear"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_calendarquarter" name="CalendarQuarter"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_calendaryear" name="CalendarYear"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_calendarsemester" name="CalendarSemester"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_fiscalquarter" name="FiscalQuarter"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_fiscalyear" name="FiscalYear"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_fiscalsemester" name="FiscalSemester"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery, as it directly references the physical table `Fact`. The query element is not visible to users accessing the cube through the XMLA API, such as Daanse Dashboard, Power BI, or Excel.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_productkey" name="ProductKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_orderdatekey" name="OrderDateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_duedatekey" name="DueDateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_shipdatekey" name="ShipDateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_customerkey" name="CustomerKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_promotionkey" name="PromotionKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_currencykey" name="CurrencyKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesterritorykey" name="SalesTerritoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesordernumber" name="SalesOrderNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesorderlinenumber" name="SalesOrderLineNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_revisionnumber" name="RevisionNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_orderquantity" name="OrderQuantity"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_unitprice" name="UnitPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_extendedamount" name="ExtendedAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_unitpricediscountpct" name="UnitPriceDiscountPct"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_discountamount" name="DiscountAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_productstandardcost" name="ProductStandardCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_totalproductcost" name="TotalProductCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesamount" name="SalesAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_taxamt" name="TaxAmt"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_freight" name="Freight"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_carriertrackingnumber" name="CarrierTrackingNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_customerponumber" name="CustomerPONumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_employeekey" name="EmployeeKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_billingcustomerkey" name="BillingCustomerKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_storekey" name="StoreKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_totalsales" name="TotalSales"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube CSDLBI 1.0

The Cube CSDLBI 1.0.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_descriptionroleplayingdimensionsdb" name="DescriptionRolePlayingDimensionsDB" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimcustomer" foreignKey="_column_fact_customerkey" dimension="_standarddimension_dimcustomer" overrideDimensionName="DimCustomer"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimemployee" foreignKey="_column_fact_employeekey" dimension="_standarddimension_dimemployee" overrideDimensionName="DimEmployee"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimgeography" foreignKey="_column_fact_customerkey" dimension="_standarddimension_dimgeography" overrideDimensionName="DimGeography"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimproduct" foreignKey="_column_fact_productkey" dimension="_standarddimension_dimproduct" overrideDimensionName="DimProduct"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimproductcategory" foreignKey="_column_fact_productkey" dimension="_standarddimension_dimproductcategory" overrideDimensionName="DimProductCategory"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimproductsubcategory" foreignKey="_column_fact_productkey" dimension="_standarddimension_dimproductsubcategory" overrideDimensionName="DimProductSubCategory"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimstore" foreignKey="_column_fact_storekey" dimension="_standarddimension_dimstore" overrideDimensionName="DimStore"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimtime" foreignKey="_column_fact_orderdatekey" dimension="_standarddimension_dimtime" overrideDimensionName="DimTime"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_factinternetsales" name="FactInternetSales" column="_column_fact_salesamount"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaplev:Level xmi:id="_level_hiredate" name="HireDate" column="_column_employee_hiredate"/>
  <rolaplev:Level xmi:id="_level_namestyle" name="NameStyle" column="_column_customer_namestyle" columnType="String"/>
  <rolaplev:Level xmi:id="_level_numberchildrenathome" name="NumberChildrenAtHome" column="_column_customer_numberchildrenathome" columnType="Integer"/>
  <rolaplev:Level xmi:id="_level_daynumberofweek" name="DayNumberOfWeek" column="_column_time_daynumberofweek"/>
  <rolapsrc:TableSource xmi:id="_tablesource_productcategory">
    <table href="_table_productcategory"/>
  </rolapsrc:TableSource>
  <rolaplev:Level xmi:id="_level_departmentname" name="DepartmentName" column="_column_employee_departmentname"/>
  <rolaplev:Level xmi:id="_level_productcategoryalternatekey" name="ProductCategoryAlternateKey">
    <column href="_column_productcategory_productcategoryalternatekey"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_geographykey" name="GeographyKey">
    <column href="_column_geography_geographykey"/>
  </rolaplev:Level>
  <relational:Table xmi:id="_table_product" name="Product">
    <feature xsi:type="relational:Column" xmi:id="_column_product_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_productkey" name="ProductKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_productalternatekey" name="ProductAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_productsubcategorykey" name="ProductSubcategoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_weightunitmeasurecode" name="WeightUnitMeasureCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_sizeunitmeasurecode" name="SizeUnitMeasureCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_englishproductname" name="EnglishProductName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_spanishproductname" name="SpanishProductName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_frenchproductname" name="FrenchProductName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_standardcost" name="StandardCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_finishedgoodsflag" name="FinishedGoodsFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_color" name="Color"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_safetystocklevel" name="SafetyStockLevel"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_reorderpoint" name="ReorderPoint"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_listprice" name="ListPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_size" name="Size"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_sizerange" name="SizeRange"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_weight" name="Weight"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_daystomanufacture" name="DaysToManufacture"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_productline" name="ProductLine"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_dealerprice" name="DealerPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class" name="Class"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_style" name="Style"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_modelname" name="ModelName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_englishdescription" name="EnglishDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_frenchdescription" name="FrenchDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_chinesedescription" name="ChineseDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_arabicdescription" name="ArabicDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_hebrewdescription" name="HebrewDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_thaidescription" name="ThaiDescription"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_startdate" name="StartDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_enddate" name="EndDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_status" name="Status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_subcategory" name="Subcategory"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_numbercarsowned" name="NumberCarsOwned" column="_column_customer_numbercarsowned"/>
  <rolaplev:Level xmi:id="_level_suffix" name="Suffix" column="_column_customer_suffix" columnType="String"/>
  <rolaplev:Level xmi:id="_level_thaidescription" name="ThaiDescription" column="_column_product_thaidescription"/>
  <rolaplev:Level xmi:id="_level_countryregioncode" name="CountryRegionCode">
    <column href="_column_geography_countryregioncode"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_englishmonthname" name="EnglishMonthName" column="_column_time_englishmonthname"/>
  <rolaplev:Level xmi:id="_level_calendaryear" name="CalendarYear" column="_column_time_calendaryear"/>
  <rolaplev:Level xmi:id="_level_productcategorykey" name="ProductCategoryKey">
    <column href="_column_productsubcategory_productcategorykey"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_hebrewdescription" name="HebrewDescription" column="_column_product_hebrewdescription"/>
  <rolaplev:Level xmi:id="_level_spanishmonthname" name="SpanishMonthName" column="_column_time_spanishmonthname"/>
  <rolaplev:Level xmi:id="_level_productalternatekey" name="ProductAlternateKey" column="_column_product_productalternatekey"/>
  <rolaplev:Level xmi:id="_level_rownumber" name="RowNumber" column="_column_time_rownumber"/>
  <rolaplev:Level xmi:id="_level_emailaddress" name="EmailAddress" column="_column_employee_emailaddress"/>
  <rolaplev:Level xmi:id="_level_spanishproductsubcategoryname" name="SpanishProductSubcategoryName">
    <column href="_column_productsubcategory_spanishproductsubcategoryname"/>
  </rolaplev:Level>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_geographykey" query="_joinsource_1" levels="_level_rownumber_7 _level_geographykey _level_city _level_stateprovincecode _level_stateprovincename _level_countryregioncode _level_englishcountryregionname _level_spanishcountryregionname _level_frenchcountryregionname _level_postalcode _level_salesterritorykey">
    <primaryKey href="_column_geography_geographykey"/>
  </rolaphier:ExplicitHierarchy>
  <rolaplev:Level xmi:id="_level_payfrequency" name="PayFrequency" column="_column_employee_payfrequency"/>
  <rolaplev:Level xmi:id="_level_middlename" name="MiddleName" column="_column_employee_middlename"/>
  <rolaplev:Level xmi:id="_level_rownumber_1" name="RowNumber" column="_column_customer_rownumber" columnType="Integer" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_spanishproductcategoryname" name="SpanishProductCategoryName">
    <column href="_column_productcategory_spanishproductcategoryname"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_rownumber_2" name="RowNumber">
    <column href="_column_productcategory_rownumber"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_firstname" name="FirstName" column="_column_employee_firstname"/>
  <rolaplev:Level xmi:id="_level_englishproductname" name="EnglishProductName" column="_column_product_englishproductname"/>
  <rolaplev:Level xmi:id="_level_productkey" name="ProductKey" column="_column_product_productkey"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_productkey" primaryKey="_column_product_productkey" query="_tablesource_product" levels="_level_rownumber_6 _level_productkey _level_productalternatekey _level_productsubcategorykey _level_weightunitmeasurecode _level_sizeunitmeasurecode _level_englishproductname _level_spanishproductname _level_frenchproductname _level_standardcost _level_finishedgoodsflag _level_color _level_safetystocklevel _level_reorderpoint _level_listprice _level_size _level_sizerange _level_weight _level_daystomanufacture _level_productline _level_dealerprice _level_class _level_style _level_modelname _level_englishdescription _level_frenchdescription _level_chinesedescription _level_arabicdescription _level_hebrewdescription _level_thaidescription _level_startdate_1 _level_enddate_1 _level_status _level_product_subcategory"/>
  <rolaplev:Level xmi:id="_level_productsubcategoryalternatekey" name="ProductSubcategoryAlternateKey">
    <column href="_column_productsubcategory_productsubcategoryalternatekey"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_status" name="Status" column="_column_product_status"/>
  <rolaplev:Level xmi:id="_level_daynumberofyear" name="DayNumberOfYear" column="_column_time_daynumberofyear"/>
  <rolaplev:Level xmi:id="_level_standardcost" name="StandardCost" column="_column_product_standardcost"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_geography_city"/>
  <rolaplev:Level xmi:id="_level_number_of_employees" name="Number_of_Employees" column="_column_store_number_of_employees"/>
  <rolaplev:Level xmi:id="_level_weeknumberofyear" name="WeekNumberOfYear" column="_column_time_weeknumberofyear"/>
  <rolaplev:Level xmi:id="_level_productsubcategorykey" name="ProductSubcategoryKey" column="_column_product_productsubcategorykey"/>
  <rolaplev:Level xmi:id="_level_maritalstatus" name="MaritalStatus" column="_column_customer_maritalstatus" columnType="String"/>
  <rolaplev:Level xmi:id="_level_productsubcategorykey_1" name="ProductSubcategoryKey">
    <column href="_column_productsubcategory_productsubcategorykey"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_sizeunitmeasurecode" name="SizeUnitMeasureCode" column="_column_product_sizeunitmeasurecode"/>
  <relational:Table xmi:id="_table_fact" name="Fact">
    <feature xsi:type="relational:Column" xmi:id="_column_fact_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_productkey" name="ProductKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_orderdatekey" name="OrderDateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_duedatekey" name="DueDateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_shipdatekey" name="ShipDateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_customerkey" name="CustomerKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_promotionkey" name="PromotionKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_currencykey" name="CurrencyKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesterritorykey" name="SalesTerritoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesordernumber" name="SalesOrderNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesorderlinenumber" name="SalesOrderLineNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_revisionnumber" name="RevisionNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_orderquantity" name="OrderQuantity"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_unitprice" name="UnitPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_extendedamount" name="ExtendedAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_unitpricediscountpct" name="UnitPriceDiscountPct"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_discountamount" name="DiscountAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_productstandardcost" name="ProductStandardCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_totalproductcost" name="TotalProductCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_salesamount" name="SalesAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_taxamt" name="TaxAmt"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_freight" name="Freight"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_carriertrackingnumber" name="CarrierTrackingNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_customerponumber" name="CustomerPONumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_employeekey" name="EmployeeKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_billingcustomerkey" name="BillingCustomerKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_storekey" name="StoreKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_fact_totalsales" name="TotalSales"/>
  </relational:Table>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimstore" name="DimStore" hierarchies="_explicithierarchy_storekey"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_storekey" primaryKey="_column_store_storekey" query="_tablesource_store" levels="_level_rownumber_4 _level_storekey _level_geography_key _level_storename _level_number_of_employees _level_sales"/>
  <relational:Table xmi:id="_table_productsubcategory" name="ProductSubcategory">
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_productsubcategorykey" name="ProductSubcategoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_productsubcategoryalternatekey" name="ProductSubcategoryAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_englishproductsubcategoryname" name="EnglishProductSubcategoryName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_spanishproductsubcategoryname" name="SpanishProductSubcategoryName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_frenchproductsubcategoryname" name="FrenchProductSubcategoryName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_productcategorykey" name="ProductCategoryKey"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_vacationhours" name="VacationHours" column="_column_employee_vacationhours"/>
  <rolaplev:Level xmi:id="_level_fiscalsemester" name="FiscalSemester" column="_column_time_fiscalsemester"/>
  <rolaplev:Level xmi:id="_level_maritalstatus_1" name="MaritalStatus" column="_column_employee_maritalstatus"/>
  <rolaplev:Level xmi:id="_level_fiscalyear" name="FiscalYear" column="_column_time_fiscalyear"/>
  <rolaplev:Level xmi:id="_level_chinesedescription" name="ChineseDescription" column="_column_product_chinesedescription"/>
  <rolaplev:Level xmi:id="_level_fulldatealternatekey" name="FullDateAlternateKey" column="_column_time_fulldatealternatekey"/>
  <rolaplev:Level xmi:id="_level_frenchcountryregionname" name="FrenchCountryRegionName" column="_column_geography_frenchcountryregionname"/>
  <rolaplev:Level xmi:id="_level_gender" name="Gender" column="_column_employee_gender"/>
  <rolaplev:Level xmi:id="_level_calendarsemester" name="CalendarSemester" column="_column_time_calendarsemester"/>
  <rolaplev:Level xmi:id="_level_salesterritorykey" name="SalesTerritoryKey" column="_column_geography_salesterritorykey"/>
  <rolaplev:Level xmi:id="_level_frenchdaynameofweek" name="FrenchDayNameOfWeek" column="_column_time_frenchdaynameofweek"/>
  <rolaplev:Level xmi:id="_level_productcategorykey_1" name="ProductCategoryKey">
    <column href="_column_productcategory_productcategorykey"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_storename" name="StoreName" column="_column_store_storename"/>
  <rolaplev:Level xmi:id="_level_houseownerflag" name="HouseOwnerFlag" column="_column_customer_houseownerflag"/>
  <rolaplev:Level xmi:id="_level_englishdaynameofweek" name="EnglishDayNameOfWeek" column="_column_time_englishdaynameofweek"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <rolaplev:Level xmi:id="_level_startdate" name="StartDate" column="_column_employee_startdate"/>
  <rolaplev:Level xmi:id="_level_englishproductcategoryname" name="EnglishProductCategoryName">
    <column href="_column_productcategory_englishproductcategoryname"/>
  </rolaplev:Level>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimproduct" name="DimProduct" hierarchies="_explicithierarchy_productkey"/>
  <rolaplev:Level xmi:id="_level_geography_key" name="Geography_Key" column="_column_store_geography_key"/>
  <rolaplev:Level xmi:id="_level_frenchproductsubcategoryname" name="FrenchProductSubcategoryName">
    <column href="_column_productsubcategory_frenchproductsubcategoryname"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_customeralternatekey" name="CustomerAlternateKey" column="_column_customer_customeralternatekey" columnType="String"/>
  <rolaplev:Level xmi:id="_level_employeekey" name="EmployeeKey" column="_column_employee_employeekey"/>
  <rolaplev:Level xmi:id="_level_rownumber_3" name="RowNumber" column="_column_employee_rownumber"/>
  <rolaplev:Level xmi:id="_level_class" name="Class" column="_column_product_class"/>
  <rolaplev:Level xmi:id="_level_salespersonflag" name="SalesPersonFlag" column="_column_employee_salespersonflag"/>
  <rolaplev:Level xmi:id="_level_stateprovincecode" name="StateProvinceCode" column="_column_geography_stateprovincecode"/>
  <rolaplev:Level xmi:id="_level_frenchmonthname" name="FrenchMonthName" column="_column_time_frenchmonthname"/>
  <rolaplev:Level xmi:id="_level_rownumber_4" name="RowNumber" column="_column_store_rownumber"/>
  <rolaplev:Level xmi:id="_level_emailaddress_1" name="EmailAddress" column="_column_customer_emailaddress" columnType="String"/>
  <rolaplev:Level xmi:id="_level_spanishdaynameofweek" name="SpanishDayNameOfWeek" column="_column_time_spanishdaynameofweek"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_productsubcategorykey" key="_column_product_productsubcategorykey" query="_tablesource_product"/>
    <right xmi:id="_joinedqueryelement_productsubcategorykey_1" key="_column_productsubcategory_productsubcategorykey" query="_joinsource_3"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_englishcountryregionname" name="EnglishCountryRegionName" column="_column_geography_englishcountryregionname"/>
  <rolaplev:Level xmi:id="_level_frenchoccupation" name="FrenchOccupation" column="_column_customer_frenchoccupation"/>
  <rolaplev:Level xmi:id="_level_middlename_1" name="MiddleName" column="_column_customer_middlename" columnType="String"/>
  <rolaplev:Level xmi:id="_level_frenchproductcategoryname" name="FrenchProductCategoryName">
    <column href="_column_productcategory_frenchproductcategoryname"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_emergencycontactname" name="EmergencyContactName" column="_column_employee_emergencycontactname"/>
  <rolaplev:Level xmi:id="_level_emergencycontactphone" name="EmergencyContactPhone" column="_column_employee_emergencycontactphone"/>
  <rolaplev:Level xmi:id="_level_calendarquarter" name="CalendarQuarter" column="_column_time_calendarquarter"/>
  <rolaplev:Level xmi:id="_level_timekey" name="TimeKey" column="_column_time_timekey"/>
  <rolaplev:Level xmi:id="_level_phone" name="Phone" column="_column_employee_phone"/>
  <rolaplev:Level xmi:id="_level_color" name="Color" column="_column_product_color"/>
  <rolaplev:Level xmi:id="_level_rownumber_5" name="RowNumber" column="_column_productsubcategory_rownumber"/>
  <rolaplev:Level xmi:id="_level_arabicdescription" name="ArabicDescription" column="_column_product_arabicdescription"/>
  <rolaplev:Level xmi:id="_level_enddate" name="EndDate" column="_column_employee_enddate"/>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_geographykey" key="_column_customer_geographykey" query="_tablesource_customer"/>
    <right xmi:id="_joinedqueryelement_geographykey_1" query="_tablesource_geography">
      <key href="_column_geography_geographykey"/>
    </right>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_addressline2" name="AddressLine2" column="_column_customer_addressline2"/>
  <rolaplev:Level xmi:id="_level_phone_1" name="Phone" column="_column_customer_phone"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimproductcategory" name="DimProductCategory" hierarchies="_explicithierarchy_productkey_2"/>
  <rolaplev:Level xmi:id="_level_firstname_1" name="FirstName" column="_column_customer_firstname" columnType="String"/>
  <rolaplev:Level xmi:id="_level_status_1" name="Status" column="_column_employee_status"/>
  <rolapsrc:TableSource xmi:id="_tablesource_time" table="_table_time"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_employeekey" primaryKey="_column_employee_employeekey" query="_tablesource_employee" levels="_level_rownumber_3 _level_employeekey _level_parentemployeekey _level_employeenationalidalternatekey _level_parentemployeenationalidalternatekey _level_salesterritorykey_1 _level_firstname _level_lastname_1 _level_middlename _level_namestyle_1 _level_title _level_hiredate _level_birthdate_1 _level_loginid _level_emailaddress _level_phone _level_maritalstatus_1 _level_emergencycontactname _level_emergencycontactphone _level_salariedflag _level_gender _level_payfrequency _level_baserate _level_vacationhours _level_sickleavehours _level_currentflag _level_salespersonflag _level_departmentname _level_startdate _level_enddate _level_status_1"/>
  <rolaplev:Level xmi:id="_level_parentemployeenationalidalternatekey" name="ParentEmployeeNationalIDAlternateKey" column="_column_employee_parentemployeenationalidalternatekey"/>
  <rolaplev:Level xmi:id="_level_employeenationalidalternatekey" name="EmployeeNationalIDAlternateKey" column="_column_employee_employeenationalidalternatekey"/>
  <rolaplev:Level xmi:id="_level_fiscalquarter" name="FiscalQuarter" column="_column_time_fiscalquarter"/>
  <rolaplev:Level xmi:id="_level_gender_1" name="Gender" column="_column_customer_gender" columnType="String"/>
  <rolaplev:Level xmi:id="_level_sizerange" name="SizeRange" column="_column_product_sizerange"/>
  <rolaplev:Level xmi:id="_level_postalcode" name="PostalCode">
    <column href="_column_geography_postalcode"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_weight" name="Weight" column="_column_product_weight"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimtime" name="DimTime" hierarchies="_explicithierarchy_timekey"/>
  <rolaplev:Level xmi:id="_level_weightunitmeasurecode" name="WeightUnitMeasureCode" column="_column_product_weightunitmeasurecode"/>
  <rolaplev:Level xmi:id="_level_daystomanufacture" name="DaysToManufacture" column="_column_product_daystomanufacture"/>
  <relational:Table xmi:id="_table_store" name="Store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_storekey" name="StoreKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_geography_key" name="Geography_Key"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_storename" name="StoreName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_number_of_employees" name="Number_of_Employees"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_sales" name="Sales"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_spanishproductname" name="SpanishProductName" column="_column_product_spanishproductname"/>
  <rolapsrc:TableSource xmi:id="_tablesource_geography" table="_table_geography"/>
  <rolaplev:Level xmi:id="_level_datefirstpurchase" name="DateFirstPurchase" column="_column_customer_datefirstpurchase"/>
  <rolapsrc:JoinSource xmi:id="_joinsource_2">
    <left xmi:id="_joinedqueryelement_productsubcategorykey_2" key="_column_product_productsubcategorykey" query="_tablesource_product"/>
    <right xmi:id="_joinedqueryelement_productsubcategorykey_3" query="_tablesource_productsubcategory">
      <key href="_column_productsubcategory_productsubcategorykey"/>
    </right>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_birthdate" name="BirthDate" column="_column_customer_birthdate" columnType="String"/>
  <rolaplev:Level xmi:id="_level_stateprovincename" name="StateProvinceName" column="_column_geography_stateprovincename"/>
  <rolaplev:Level xmi:id="_level_baserate" name="BaseRate" column="_column_employee_baserate"/>
  <rolaplev:Level xmi:id="_level_sickleavehours" name="SickLeaveHours" column="_column_employee_sickleavehours"/>
  <rolaplev:Level xmi:id="_level_parentemployeekey" name="ParentEmployeeKey" column="_column_employee_parentemployeekey"/>
  <rolaplev:Level xmi:id="_level_listprice" name="ListPrice" column="_column_product_listprice"/>
  <rolaplev:Level xmi:id="_level_englisheducation" name="EnglishEducation" column="_column_customer_englisheducation" columnType="String"/>
  <rolaplev:Level xmi:id="_level_startdate_1" name="StartDate" column="_column_product_startdate"/>
  <rolaplev:Level xmi:id="_level_lastname" name="LastName" column="_column_customer_lastname" columnType="String"/>
  <rolaplev:Level xmi:id="_level_productline" name="ProductLine" column="_column_product_productline"/>
  <relational:Table xmi:id="_table_employee" name="Employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employeekey" name="EmployeeKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_parentemployeekey" name="ParentEmployeeKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employeenationalidalternatekey" name="EmployeeNationalIDAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_parentemployeenationalidalternatekey" name="ParentEmployeeNationalIDAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salesterritorykey" name="SalesTerritoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_firstname" name="FirstName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_lastname" name="LastName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_middlename" name="MiddleName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_namestyle" name="NameStyle"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_title" name="Title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_hiredate" name="HireDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_birthdate" name="BirthDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_loginid" name="LoginID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_emailaddress" name="EmailAddress"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_phone" name="Phone"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_maritalstatus" name="MaritalStatus"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_emergencycontactname" name="EmergencyContactName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_emergencycontactphone" name="EmergencyContactPhone"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salariedflag" name="SalariedFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="Gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_payfrequency" name="PayFrequency"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_baserate" name="BaseRate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_vacationhours" name="VacationHours"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_sickleavehours" name="SickLeaveHours"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_currentflag" name="CurrentFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salespersonflag" name="SalesPersonFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_departmentname" name="DepartmentName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_startdate" name="StartDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_enddate" name="EndDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_status" name="Status"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_timekey" primaryKey="_column_time_timekey" query="_tablesource_time" levels="_level_rownumber _level_timekey _level_fulldatealternatekey _level_daynumberofweek _level_englishdaynameofweek _level_spanishdaynameofweek _level_frenchdaynameofweek _level_daynumberofmonth _level_daynumberofyear _level_weeknumberofyear _level_englishmonthname _level_spanishmonthname _level_frenchmonthname _level_monthnumberofyear _level_calendarquarter _level_calendaryear _level_calendarsemester _level_fiscalquarter _level_fiscalyear _level_fiscalsemester"/>
  <rolaplev:Level xmi:id="_level_loginid" name="LoginID" column="_column_employee_loginid"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
  <rolaplev:Level xmi:id="_level_customerkey" name="CustomerKey" column="_column_customer_customerkey" columnType="Integer"/>
  <rolaplev:Level xmi:id="_level_frenchdescription" name="FrenchDescription" column="_column_product_frenchdescription"/>
  <rolaplev:Level xmi:id="_level_rownumber_6" name="RowNumber" column="_column_product_rownumber"/>
  <rolaplev:Level xmi:id="_level_commutedistance" name="CommuteDistance" column="_column_customer_commutedistance"/>
  <rolaplev:Level xmi:id="_level_yearlyincome" name="YearlyIncome" column="_column_customer_yearlyincome" columnType="Numeric"/>
  <rolaplev:Level xmi:id="_level_storekey" name="StoreKey" column="_column_store_storekey"/>
  <rolaplev:Level xmi:id="_level_birthdate_1" name="BirthDate" column="_column_employee_birthdate"/>
  <rolaplev:Level xmi:id="_level_finishedgoodsflag" name="FinishedGoodsFlag" column="_column_product_finishedgoodsflag"/>
  <relational:Table xmi:id="_table_time" name="Time">
    <feature xsi:type="relational:Column" xmi:id="_column_time_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_timekey" name="TimeKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_fulldatealternatekey" name="FullDateAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_daynumberofweek" name="DayNumberOfWeek"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_englishdaynameofweek" name="EnglishDayNameOfWeek"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_spanishdaynameofweek" name="SpanishDayNameOfWeek"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_frenchdaynameofweek" name="FrenchDayNameOfWeek"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_daynumberofmonth" name="DayNumberOfMonth"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_daynumberofyear" name="DayNumberOfYear"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_weeknumberofyear" name="WeekNumberOfYear"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_englishmonthname" name="EnglishMonthName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_spanishmonthname" name="SpanishMonthName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_frenchmonthname" name="FrenchMonthName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_monthnumberofyear" name="MonthNumberOfYear"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_calendarquarter" name="CalendarQuarter"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_calendaryear" name="CalendarYear"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_calendarsemester" name="CalendarSemester"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_fiscalquarter" name="FiscalQuarter"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_fiscalyear" name="FiscalYear"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_fiscalsemester" name="FiscalSemester"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_englishproductsubcategoryname" name="EnglishProductSubcategoryName">
    <column href="_column_productsubcategory_englishproductsubcategoryname"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_frenchproductname" name="FrenchProductName" column="_column_product_frenchproductname"/>
  <rolaplev:Level xmi:id="_level_modelname" name="ModelName" column="_column_product_modelname"/>
  <rolaplev:Level xmi:id="_level_englishoccupation" name="EnglishOccupation" column="_column_customer_englishoccupation"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimcustomer" name="DimCustomer" hierarchies="_explicithierarchy_customerkey"/>
  <rolaplev:Level xmi:id="_level_salariedflag" name="SalariedFlag" column="_column_employee_salariedflag"/>
  <relational:Table xmi:id="_table_geography" name="Geography">
    <feature xsi:type="relational:Column" xmi:id="_column_geography_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_geographykey" name="GeographyKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_city" name="City"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_stateprovincecode" name="StateProvinceCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_stateprovincename" name="StateProvinceName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_countryregioncode" name="CountryRegionCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_englishcountryregionname" name="EnglishCountryRegionName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_spanishcountryregionname" name="SpanishCountryRegionName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_frenchcountryregionname" name="FrenchCountryRegionName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_postalcode" name="PostalCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_geography_salesterritorykey" name="SalesTerritoryKey"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_product_subcategory" id="_level_product_subcategory" name="Subcategory" column="_column_product_subcategory"/>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolaplev:Level xmi:id="_level_totalchildren" name="TotalChildren" column="_column_customer_totalchildren" columnType="Integer"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customerkey" primaryKey="_column_customer_customerkey" query="_tablesource_customer" levels="_level_rownumber_1 _level_customerkey _level_customeralternatekey _level_firstname_1 _level_middlename_1 _level_lastname _level_namestyle _level_birthdate _level_maritalstatus _level_suffix _level_gender_1 _level_emailaddress_1 _level_yearlyincome _level_totalchildren _level_numberchildrenathome _level_englisheducation _level_spanisheducation _level_frencheducation _level_englishoccupation _level_spanishoccupation _level_frenchoccupation _level_houseownerflag _level_numbercarsowned _level_addressline1 _level_addressline2 _level_phone_1 _level_datefirstpurchase _level_commutedistance"/>
  <rolaplev:Level xmi:id="_level_salesterritorykey_1" name="SalesTerritoryKey" column="_column_employee_salesterritorykey"/>
  <rolapsrc:JoinSource xmi:id="_joinsource_3">
    <left xmi:id="_joinedqueryelement_productcategorykey" key="_column_productsubcategory_productcategorykey" query="_tablesource_productsubcategory"/>
    <right xmi:id="_joinedqueryelement_productcategorykey_1" query="_tablesource_productcategory">
      <key href="_column_productcategory_productcategorykey"/>
    </right>
  </rolapsrc:JoinSource>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_productkey_1" primaryKey="_column_product_productkey" query="_joinsource_2" levels="_level_rownumber_5 _level_productsubcategorykey_1 _level_productsubcategoryalternatekey _level_englishproductsubcategoryname _level_spanishproductsubcategoryname _level_frenchproductsubcategoryname _level_productcategorykey"/>
  <rolaplev:Level xmi:id="_level_daynumberofmonth" name="DayNumberOfMonth" column="_column_time_daynumberofmonth"/>
  <rolaplev:Level xmi:id="_level_addressline1" name="AddressLine1" column="_column_customer_addressline1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimproductsubcategory" name="DimProductSubcategory" hierarchies="_explicithierarchy_productkey_1"/>
  <rolaplev:Level xmi:id="_level_spanisheducation" name="SpanishEducation" column="_column_customer_spanisheducation" columnType="String"/>
  <rolaplev:Level xmi:id="_level_enddate_1" name="EndDate" column="_column_product_enddate"/>
  <rolaplev:Level xmi:id="_level_style" name="Style" column="_column_product_style"/>
  <rolaplev:Level xmi:id="_level_size" name="Size" column="_column_product_size"/>
  <rolapsrc:TableSource xmi:id="_tablesource_productsubcategory" table="_table_productsubcategory"/>
  <rolaplev:Level xmi:id="_level_spanishoccupation" name="SpanishOccupation" column="_column_customer_spanishoccupation"/>
  <rolaplev:Level xmi:id="_level_safetystocklevel" name="SafetyStockLevel" column="_column_product_safetystocklevel"/>
  <rolaplev:Level xmi:id="_level_dealerprice" name="DealerPrice" column="_column_product_dealerprice"/>
  <rolaplev:Level xmi:id="_level_reorderpoint" name="ReorderPoint" column="_column_product_reorderpoint"/>
  <rolaplev:Level xmi:id="_level_monthnumberofyear" name="MonthNumberOfYear" column="_column_time_monthnumberofyear"/>
  <rolaplev:Level xmi:id="_level_title" name="Title" column="_column_employee_title"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimgeography" name="DimGeography" hierarchies="_explicithierarchy_geographykey"/>
  <rolaplev:Level xmi:id="_level_rownumber_7" name="RowNumber" column="_column_geography_rownumber"/>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
  <rolaplev:Level xmi:id="_level_lastname_1" name="LastName" column="_column_employee_lastname"/>
  <rolaplev:Level xmi:id="_level_frencheducation" name="FrenchEducation" column="_column_customer_frencheducation" columnType="String"/>
  <rolaplev:Level xmi:id="_level_currentflag" name="CurrentFlag" column="_column_employee_currentflag"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimemployee" name="DimEmployee" hierarchies="_explicithierarchy_employeekey"/>
  <rolaplev:Level xmi:id="_level_sales" name="Sales" column="_column_store_sales"/>
  <rolaplev:Level xmi:id="_level_englishdescription" name="EnglishDescription" column="_column_product_englishdescription"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_productkey_2" primaryKey="_column_product_productkey" query="_joinsource" levels="_level_rownumber_2 _level_productcategorykey_1 _level_productcategoryalternatekey _level_englishproductcategoryname _level_spanishproductcategoryname _level_frenchproductcategoryname"/>
  <rolaplev:Level xmi:id="_level_namestyle_1" name="NameStyle" column="_column_employee_namestyle"/>
  <relational:Table xmi:id="_table_customer" name="Customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customerkey" name="CustomerKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_geographykey" name="GeographyKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customeralternatekey" name="CustomerAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_firstname" name="FirstName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_middlename" name="MiddleName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lastname" name="LastName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_namestyle" name="NameStyle"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_birthdate" name="BirthDate"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_maritalstatus" name="MaritalStatus"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_suffix" name="Suffix"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="Gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_emailaddress" name="EmailAddress"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearlyincome" name="YearlyIncome"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_totalchildren" name="TotalChildren"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_numberchildrenathome" name="NumberChildrenAtHome"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_englisheducation" name="EnglishEducation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_spanisheducation" name="SpanishEducation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_frencheducation" name="FrenchEducation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_englishoccupation" name="EnglishOccupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_spanishoccupation" name="SpanishOccupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_frenchoccupation" name="FrenchOccupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseownerflag" name="HouseOwnerFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_numbercarsowned" name="NumberCarsOwned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_addressline1" name="AddressLine1"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_addressline2" name="AddressLine2"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_phone" name="Phone"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_datefirstpurchase" name="DateFirstPurchase"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_commutedistance" name="CommuteDistance"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_spanishcountryregionname" name="SpanishCountryRegionName" column="_column_geography_spanishcountryregionname"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_decimal" name="DECIMAL" structuralFeature="_column_employee_baserate _column_store_sales _column_fact_unitpricediscountpct _column_fact_taxamt _column_customer_yearlyincome _column_fact_totalproductcost _column_fact_extendedamount _column_fact_freight _column_product_standardcost _column_product_dealerprice _column_fact_salesamount _column_product_listprice" typeNumber="3" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_customerkey _column_product_rownumber _column_time_calendarsemester _column_customer_rownumber _column_time_calendarquarter _column_geography_geographykey _column_store_storekey _column_employee_parentemployeekey _column_fact_rownumber _column_employee_vacationhours _column_product_reorderpoint _column_employee_payfrequency _column_product_daystomanufacture _column_fact_productkey _column_time_daynumberofweek _column_productsubcategory_productsubcategorykey _column_fact_totalsales _column_productsubcategory_productcategorykey _column_customer_numberchildrenathome _column_geography_rownumber _column_fact_salesordernumber _column_fact_promotionkey _column_customer_customerkey _column_customer_geographykey _column_productcategory_rownumber _column_fact_billingcustomerkey _column_store_geography_key _column_store_rownumber _column_productsubcategory_rownumber _column_fact_currencykey _column_fact_revisionnumber _column_store_number_of_employees _column_productcategory_productcategorykey _column_employee_salesterritorykey _column_time_fiscalquarter _column_fact_orderquantity _column_fact_duedatekey _column_time_timekey _column_fact_shipdatekey _column_fact_salesterritorykey _column_time_monthnumberofyear _column_product_safetystocklevel _column_fact_orderdatekey _column_fact_unitprice _column_time_fiscalsemester _column_geography_salesterritorykey _column_fact_employeekey _column_time_rownumber _column_fact_storekey _column_productsubcategory_productsubcategoryalternatekey _column_time_daynumberofmonth _column_employee_employeekey _column_employee_sickleavehours _column_product_productkey _column_time_weeknumberofyear _column_time_daynumberofyear _column_product_productsubcategorykey _column_productcategory_productcategoryalternatekey _column_employee_rownumber _column_customer_totalchildren" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_salesorderlinenumber _column_product_englishdescription _column_fact_customerponumber _column_employee_title _column_customer_englisheducation _column_product_sizerange _column_product_style _column_time_frenchdaynameofweek _column_customer_frencheducation _column_customer_numbercarsowned _column_employee_phone _column_geography_englishcountryregionname _column_time_spanishdaynameofweek _column_employee_departmentname _column_product_frenchdescription _column_customer_gender _column_product_modelname _column_employee_firstname _column_customer_middlename _column_product_chinesedescription _column_product_size _column_employee_employeenationalidalternatekey _column_customer_suffix _column_product_spanishproductname _column_product_color _column_productsubcategory_spanishproductsubcategoryname _column_customer_maritalstatus _column_productsubcategory_englishproductsubcategoryname _column_customer_spanishoccupation _column_product_productalternatekey _column_time_calendaryear _column_employee_emailaddress _column_customer_addressline1 _column_geography_postalcode _column_customer_lastname _column_customer_frenchoccupation _column_product_status _column_employee_emergencycontactname _column_geography_stateprovincename _column_customer_phone _column_product_sizeunitmeasurecode _column_employee_maritalstatus _column_customer_englishoccupation _column_employee_parentemployeenationalidalternatekey _column_time_englishmonthname _column_time_spanishmonthname _column_product_englishproductname _column_store_storename _column_time_englishdaynameofweek _column_productcategory_englishproductcategoryname _column_product_productline _column_geography_frenchcountryregionname _column_customer_spanisheducation _column_time_frenchmonthname _column_employee_gender _column_geography_spanishcountryregionname _column_customer_emailaddress _column_product_arabicdescription _column_geography_countryregioncode _column_product_subcategory _column_product_frenchproductname _column_productcategory_frenchproductcategoryname _column_employee_emergencycontactphone _column_geography_city _column_product_weightunitmeasurecode _column_customer_houseownerflag _column_productsubcategory_frenchproductsubcategoryname _column_employee_middlename _column_customer_commutedistance _column_time_fiscalyear _column_fact_carriertrackingnumber _column_product_hebrewdescription _column_customer_addressline2 _column_customer_customeralternatekey _column_employee_loginid _column_employee_lastname _column_product_class _column_productcategory_spanishproductcategoryname _column_employee_status _column_geography_stateprovincecode _column_product_thaidescription _column_customer_firstname" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_date" name="DATE" structuralFeature="_column_product_startdate _column_customer_birthdate _column_employee_enddate _column_employee_birthdate _column_employee_startdate _column_employee_hiredate _column_product_enddate _column_time_fulldatealternatekey _column_customer_datefirstpurchase" typeNumber="91"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_double_precision" name="DOUBLE PRECISION" structuralFeature="_column_product_weight _column_fact_productstandardcost _column_fact_discountamount" typeNumber="8" numericPrecisionRadix="2"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_boolean" name="BOOLEAN" structuralFeature="_column_employee_currentflag _column_employee_salespersonflag _column_employee_namestyle _column_customer_namestyle _column_employee_salariedflag _column_product_finishedgoodsflag" typeNumber="16"/>
  <rolapcat:Catalog xmi:id="_catalog_csdlbi_1_0" name="CSDLBI 1.0" cubes="_physicalcube_descriptionroleplayingdimensionsdb" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_fact" name="Fact">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_productkey" name="ProductKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_orderdatekey" name="OrderDateKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_duedatekey" name="DueDateKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_shipdatekey" name="ShipDateKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_customerkey" name="CustomerKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_promotionkey" name="PromotionKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_currencykey" name="CurrencyKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_salesterritorykey" name="SalesTerritoryKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_salesordernumber" name="SalesOrderNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_salesorderlinenumber" name="SalesOrderLineNumber" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_revisionnumber" name="RevisionNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_orderquantity" name="OrderQuantity" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_unitprice" name="UnitPrice" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_extendedamount" name="ExtendedAmount" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_unitpricediscountpct" name="UnitPriceDiscountPct" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_discountamount" name="DiscountAmount" type="_sqlsimpletype_double_precision"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_productstandardcost" name="ProductStandardCost" type="_sqlsimpletype_double_precision"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_totalproductcost" name="TotalProductCost" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_salesamount" name="SalesAmount" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_taxamt" name="TaxAmt" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_freight" name="Freight" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_carriertrackingnumber" name="CarrierTrackingNumber" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_customerponumber" name="CustomerPONumber" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_employeekey" name="EmployeeKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_billingcustomerkey" name="BillingCustomerKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_storekey" name="StoreKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_totalsales" name="TotalSales" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_customer" name="Customer">
      <feature xsi:type="relational:Column" xmi:id="_column_customer_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_customerkey" name="CustomerKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_geographykey" name="GeographyKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_customeralternatekey" name="CustomerAlternateKey" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_firstname" name="FirstName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_middlename" name="MiddleName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_lastname" name="LastName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_namestyle" name="NameStyle" type="_sqlsimpletype_boolean"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_birthdate" name="BirthDate" type="_sqlsimpletype_date"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_maritalstatus" name="MaritalStatus" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_suffix" name="Suffix" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="Gender" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_emailaddress" name="EmailAddress" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_yearlyincome" name="YearlyIncome" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_totalchildren" name="TotalChildren" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_numberchildrenathome" name="NumberChildrenAtHome" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_englisheducation" name="EnglishEducation" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_spanisheducation" name="SpanishEducation" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_frencheducation" name="FrenchEducation" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_englishoccupation" name="EnglishOccupation" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_spanishoccupation" name="SpanishOccupation" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_frenchoccupation" name="FrenchOccupation" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_houseownerflag" name="HouseOwnerFlag" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_numbercarsowned" name="NumberCarsOwned" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_addressline1" name="AddressLine1" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_addressline2" name="AddressLine2" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_phone" name="Phone" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_datefirstpurchase" name="DateFirstPurchase" type="_sqlsimpletype_date"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_commutedistance" name="CommuteDistance" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_employee" name="Employee">
      <feature xsi:type="relational:Column" xmi:id="_column_employee_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_employeekey" name="EmployeeKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_parentemployeekey" name="ParentEmployeeKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_employeenationalidalternatekey" name="EmployeeNationalIDAlternateKey" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_parentemployeenationalidalternatekey" name="ParentEmployeeNationalIDAlternateKey" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_salesterritorykey" name="SalesTerritoryKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_firstname" name="FirstName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_lastname" name="LastName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_middlename" name="MiddleName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_namestyle" name="NameStyle" type="_sqlsimpletype_boolean"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_title" name="Title" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_hiredate" name="HireDate" type="_sqlsimpletype_date"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_birthdate" name="BirthDate" type="_sqlsimpletype_date"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_loginid" name="LoginID" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_emailaddress" name="EmailAddress" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_phone" name="Phone" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_maritalstatus" name="MaritalStatus" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_emergencycontactname" name="EmergencyContactName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_emergencycontactphone" name="EmergencyContactPhone" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_salariedflag" name="SalariedFlag" type="_sqlsimpletype_boolean"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="Gender" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_payfrequency" name="PayFrequency" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_baserate" name="BaseRate" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_vacationhours" name="VacationHours" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_sickleavehours" name="SickLeaveHours" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_currentflag" name="CurrentFlag" type="_sqlsimpletype_boolean"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_salespersonflag" name="SalesPersonFlag" type="_sqlsimpletype_boolean"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_departmentname" name="DepartmentName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_startdate" name="StartDate" type="_sqlsimpletype_date"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_enddate" name="EndDate" type="_sqlsimpletype_date"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_status" name="Status" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_geography" name="Geography">
      <feature xsi:type="relational:Column" xmi:id="_column_geography_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_geography_geographykey" name="GeographyKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_geography_city" name="City" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_geography_stateprovincecode" name="StateProvinceCode" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_geography_stateprovincename" name="StateProvinceName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_geography_countryregioncode" name="CountryRegionCode" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_geography_englishcountryregionname" name="EnglishCountryRegionName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_geography_spanishcountryregionname" name="SpanishCountryRegionName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_geography_frenchcountryregionname" name="FrenchCountryRegionName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_geography_postalcode" name="PostalCode" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_geography_salesterritorykey" name="SalesTerritoryKey" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_product" name="Product">
      <feature xsi:type="relational:Column" xmi:id="_column_product_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_productkey" name="ProductKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_productalternatekey" name="ProductAlternateKey" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_productsubcategorykey" name="ProductSubcategoryKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_weightunitmeasurecode" name="WeightUnitMeasureCode" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_sizeunitmeasurecode" name="SizeUnitMeasureCode" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_englishproductname" name="EnglishProductName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_spanishproductname" name="SpanishProductName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_frenchproductname" name="FrenchProductName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_standardcost" name="StandardCost" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_finishedgoodsflag" name="FinishedGoodsFlag" type="_sqlsimpletype_boolean"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_color" name="Color" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_safetystocklevel" name="SafetyStockLevel" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_reorderpoint" name="ReorderPoint" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_listprice" name="ListPrice" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_size" name="Size" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_sizerange" name="SizeRange" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_weight" name="Weight" type="_sqlsimpletype_double_precision"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_daystomanufacture" name="DaysToManufacture" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_productline" name="ProductLine" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_dealerprice" name="DealerPrice" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_class" name="Class" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_style" name="Style" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_modelname" name="ModelName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_englishdescription" name="EnglishDescription" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_frenchdescription" name="FrenchDescription" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_chinesedescription" name="ChineseDescription" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_arabicdescription" name="ArabicDescription" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_hebrewdescription" name="HebrewDescription" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_thaidescription" name="ThaiDescription" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_startdate" name="StartDate" type="_sqlsimpletype_date"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_enddate" name="EndDate" type="_sqlsimpletype_date"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_status" name="Status" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_subcategory" name="Subcategory" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_productcategory" name="ProductCategory">
      <feature xsi:type="relational:Column" xmi:id="_column_productcategory_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_productcategory_productcategorykey" name="ProductCategoryKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_productcategory_productcategoryalternatekey" name="ProductCategoryAlternateKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_productcategory_englishproductcategoryname" name="EnglishProductCategoryName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_productcategory_spanishproductcategoryname" name="SpanishProductCategoryName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_productcategory_frenchproductcategoryname" name="FrenchProductCategoryName" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_productsubcategory" name="ProductSubcategory">
      <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_productsubcategorykey" name="ProductSubcategoryKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_productsubcategoryalternatekey" name="ProductSubcategoryAlternateKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_englishproductsubcategoryname" name="EnglishProductSubcategoryName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_spanishproductsubcategoryname" name="SpanishProductSubcategoryName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_frenchproductsubcategoryname" name="FrenchProductSubcategoryName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_productsubcategory_productcategorykey" name="ProductCategoryKey" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_store" name="Store">
      <feature xsi:type="relational:Column" xmi:id="_column_store_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_storekey" name="StoreKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_geography_key" name="Geography_Key" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_storename" name="StoreName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_number_of_employees" name="Number_of_Employees" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_sales" name="Sales" type="_sqlsimpletype_decimal"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_time" name="Time">
      <feature xsi:type="relational:Column" xmi:id="_column_time_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_timekey" name="TimeKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_fulldatealternatekey" name="FullDateAlternateKey" type="_sqlsimpletype_date"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_daynumberofweek" name="DayNumberOfWeek" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_englishdaynameofweek" name="EnglishDayNameOfWeek" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_spanishdaynameofweek" name="SpanishDayNameOfWeek" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_frenchdaynameofweek" name="FrenchDayNameOfWeek" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_daynumberofmonth" name="DayNumberOfMonth" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_daynumberofyear" name="DayNumberOfYear" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_weeknumberofyear" name="WeekNumberOfYear" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_englishmonthname" name="EnglishMonthName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_spanishmonthname" name="SpanishMonthName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_frenchmonthname" name="FrenchMonthName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_monthnumberofyear" name="MonthNumberOfYear" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_calendarquarter" name="CalendarQuarter" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_calendaryear" name="CalendarYear" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_calendarsemester" name="CalendarSemester" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_fiscalquarter" name="FiscalQuarter" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_fiscalyear" name="FiscalYear" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_fiscalsemester" name="FiscalSemester" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_fact" table="_table_fact"/>
  <rolapsrc:TableSource xmi:id="_tablesource_geography" table="_table_geography"/>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
  <rolapsrc:TableSource xmi:id="_tablesource_time" table="_table_time"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
  <rolapsrc:TableSource xmi:id="_tablesource_productsubcategory" table="_table_productsubcategory"/>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <rolapsrc:TableSource xmi:id="_tablesource_productcategory" table="_table_productcategory"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_productsubcategorykey" key="_column_product_productsubcategorykey" query="_tablesource_product"/>
    <right xmi:id="_joinedqueryelement_productsubcategorykey_2" key="_column_productsubcategory_productsubcategorykey" query="_joinsource_1"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_productcategorykey" key="_column_productsubcategory_productcategorykey" query="_tablesource_productsubcategory"/>
    <right xmi:id="_joinedqueryelement_productcategorykey_1" key="_column_productcategory_productcategorykey" query="_tablesource_productcategory"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_2">
    <left xmi:id="_joinedqueryelement_productsubcategorykey_1" key="_column_product_productsubcategorykey" query="_tablesource_product"/>
    <right xmi:id="_joinedqueryelement_productsubcategorykey_3" key="_column_productsubcategory_productsubcategorykey" query="_tablesource_productsubcategory"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_3">
    <left xmi:id="_joinedqueryelement_geographykey" key="_column_customer_geographykey" query="_tablesource_customer"/>
    <right xmi:id="_joinedqueryelement_geographykey_1" key="_column_geography_geographykey" query="_tablesource_geography"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_salesterritorykey" name="SalesTerritoryKey" column="_column_employee_salesterritorykey"/>
  <rolaplev:Level xmi:id="_level_productcategorykey" name="ProductCategoryKey" column="_column_productsubcategory_productcategorykey"/>
  <rolaplev:Level xmi:id="_level_baserate" name="BaseRate" column="_column_employee_baserate"/>
  <rolaplev:Level xmi:id="_level_productcategoryalternatekey" name="ProductCategoryAlternateKey" column="_column_productcategory_productcategoryalternatekey"/>
  <rolaplev:Level xmi:id="_level_safetystocklevel" name="SafetyStockLevel" column="_column_product_safetystocklevel"/>
  <rolaplev:Level xmi:id="_level_birthdate" name="BirthDate" column="_column_employee_birthdate"/>
  <rolaplev:Level xmi:id="_level_daynumberofweek" name="DayNumberOfWeek" column="_column_time_daynumberofweek"/>
  <rolaplev:Level xmi:id="_level_fulldatealternatekey" name="FullDateAlternateKey" column="_column_time_fulldatealternatekey"/>
  <rolaplev:Level xmi:id="_level_geographykey" name="GeographyKey" column="_column_geography_geographykey"/>
  <rolaplev:Level xmi:id="_level_frenchdaynameofweek" name="FrenchDayNameOfWeek" column="_column_time_frenchdaynameofweek"/>
  <rolaplev:Level xmi:id="_level_spanishproductname" name="SpanishProductName" column="_column_product_spanishproductname"/>
  <rolaplev:Level xmi:id="_level_sizerange" name="SizeRange" column="_column_product_sizerange"/>
  <rolaplev:Level xmi:id="_level_birthdate_1" name="BirthDate" column="_column_customer_birthdate" columnType="String"/>
  <rolaplev:Level xmi:id="_level_englishproductcategoryname" name="EnglishProductCategoryName" column="_column_productcategory_englishproductcategoryname"/>
  <rolaplev:Level xmi:id="_level_daynumberofmonth" name="DayNumberOfMonth" column="_column_time_daynumberofmonth"/>
  <rolaplev:Level xmi:id="_level_color" name="Color" column="_column_product_color"/>
  <rolaplev:Level xmi:id="_level_yearlyincome" name="YearlyIncome" column="_column_customer_yearlyincome" columnType="Numeric"/>
  <rolaplev:Level xmi:id="_level_englishproductsubcategoryname" name="EnglishProductSubcategoryName" column="_column_productsubcategory_englishproductsubcategoryname"/>
  <rolaplev:Level xmi:id="_level_weeknumberofyear" name="WeekNumberOfYear" column="_column_time_weeknumberofyear"/>
  <rolaplev:Level xmi:id="_level_rownumber" name="RowNumber" column="_column_productcategory_rownumber"/>
  <rolaplev:Level xmi:id="_level_loginid" name="LoginID" column="_column_employee_loginid"/>
  <rolaplev:Level xmi:id="_level_modelname" name="ModelName" column="_column_product_modelname"/>
  <rolaplev:Level xmi:id="_level_englisheducation" name="EnglishEducation" column="_column_customer_englisheducation" columnType="String"/>
  <rolaplev:Level xmi:id="_level_reorderpoint" name="ReorderPoint" column="_column_product_reorderpoint"/>
  <rolaplev:Level xmi:id="_level_totalchildren" name="TotalChildren" column="_column_customer_totalchildren" columnType="Integer"/>
  <rolaplev:Level xmi:id="_level_timekey" name="TimeKey" column="_column_time_timekey"/>
  <rolaplev:Level xmi:id="_level_englishmonthname" name="EnglishMonthName" column="_column_time_englishmonthname"/>
  <rolaplev:Level xmi:id="_level_frenchmonthname" name="FrenchMonthName" column="_column_time_frenchmonthname"/>
  <rolaplev:Level xmi:id="_level_englishproductname" name="EnglishProductName" column="_column_product_englishproductname"/>
  <rolaplev:Level xmi:id="_level_frenchcountryregionname" name="FrenchCountryRegionName" column="_column_geography_frenchcountryregionname"/>
  <rolaplev:Level xmi:id="_level_rownumber_1" name="RowNumber" column="_column_customer_rownumber" columnType="Integer" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_sizeunitmeasurecode" name="SizeUnitMeasureCode" column="_column_product_sizeunitmeasurecode"/>
  <rolaplev:Level xmi:id="_level_standardcost" name="StandardCost" column="_column_product_standardcost"/>
  <rolaplev:Level xmi:id="_level_stateprovincename" name="StateProvinceName" column="_column_geography_stateprovincename"/>
  <rolaplev:Level xmi:id="_level_firstname" name="FirstName" column="_column_employee_firstname"/>
  <rolaplev:Level xmi:id="_level_productsubcategoryalternatekey" name="ProductSubcategoryAlternateKey" column="_column_productsubcategory_productsubcategoryalternatekey"/>
  <rolaplev:Level xmi:id="_level_frenchdescription" name="FrenchDescription" column="_column_product_frenchdescription"/>
  <rolaplev:Level xmi:id="_level_payfrequency" name="PayFrequency" column="_column_employee_payfrequency"/>
  <rolaplev:Level xmi:id="_level_stateprovincecode" name="StateProvinceCode" column="_column_geography_stateprovincecode"/>
  <rolaplev:Level xmi:id="_level_emailaddress" name="EmailAddress" column="_column_customer_emailaddress" columnType="String"/>
  <rolaplev:Level xmi:id="_level_geography_key" name="Geography_Key" column="_column_store_geography_key"/>
  <rolaplev:Level xmi:id="_level_spanishdaynameofweek" name="SpanishDayNameOfWeek" column="_column_time_spanishdaynameofweek"/>
  <rolaplev:Level xmi:id="_level_employeenationalidalternatekey" name="EmployeeNationalIDAlternateKey" column="_column_employee_employeenationalidalternatekey"/>
  <rolaplev:Level xmi:id="_level_productkey" name="ProductKey" column="_column_product_productkey"/>
  <rolaplev:Level xmi:id="_level_enddate" name="EndDate" column="_column_product_enddate"/>
  <rolaplev:Level xmi:id="_level_rownumber_2" name="RowNumber" column="_column_product_rownumber"/>
  <rolaplev:Level xmi:id="_level_maritalstatus" name="MaritalStatus" column="_column_customer_maritalstatus" columnType="String"/>
  <rolaplev:Level xmi:id="_level_frenchproductcategoryname" name="FrenchProductCategoryName" column="_column_productcategory_frenchproductcategoryname"/>
  <rolaplev:Level xmi:id="_level_customeralternatekey" name="CustomerAlternateKey" column="_column_customer_customeralternatekey" columnType="String"/>
  <rolaplev:Level xmi:id="_level_storename" name="StoreName" column="_column_store_storename"/>
  <rolaplev:Level xmi:id="_level_listprice" name="ListPrice" column="_column_product_listprice"/>
  <rolaplev:Level xmi:id="_level_firstname_1" name="FirstName" column="_column_customer_firstname" columnType="String"/>
  <rolaplev:Level xmi:id="_level_addressline2" name="AddressLine2" column="_column_customer_addressline2"/>
  <rolaplev:Level xmi:id="_level_spanishproductcategoryname" name="SpanishProductCategoryName" column="_column_productcategory_spanishproductcategoryname"/>
  <rolaplev:Level xmi:id="_level_rownumber_3" name="RowNumber" column="_column_store_rownumber"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_geography_city"/>
  <rolaplev:Level xmi:id="_level_salariedflag" name="SalariedFlag" column="_column_employee_salariedflag"/>
  <rolaplev:Level xmi:id="_level_addressline1" name="AddressLine1" column="_column_customer_addressline1"/>
  <rolaplev:Level xmi:id="_level_calendarquarter" name="CalendarQuarter" column="_column_time_calendarquarter"/>
  <rolaplev:Level xmi:id="_level_thaidescription" name="ThaiDescription" column="_column_product_thaidescription"/>
  <rolaplev:Level xmi:id="_level_englishdaynameofweek" name="EnglishDayNameOfWeek" column="_column_time_englishdaynameofweek"/>
  <rolaplev:Level xmi:id="_level_frencheducation" name="FrenchEducation" column="_column_customer_frencheducation" columnType="String"/>
  <rolaplev:Level xmi:id="_level_spanishoccupation" name="SpanishOccupation" column="_column_customer_spanishoccupation"/>
  <rolaplev:Level xmi:id="_level_emergencycontactphone" name="EmergencyContactPhone" column="_column_employee_emergencycontactphone"/>
  <rolaplev:Level xmi:id="_level_class" name="Class" column="_column_product_class"/>
  <rolaplev:Level xmi:id="_level_startdate" name="StartDate" column="_column_employee_startdate"/>
  <rolaplev:Level xmi:id="_level_maritalstatus_1" name="MaritalStatus" column="_column_employee_maritalstatus"/>
  <rolaplev:Level xmi:id="_level_productline" name="ProductLine" column="_column_product_productline"/>
  <rolaplev:Level xmi:id="_level_arabicdescription" name="ArabicDescription" column="_column_product_arabicdescription"/>
  <rolaplev:Level xmi:id="_level_middlename" name="MiddleName" column="_column_customer_middlename" columnType="String"/>
  <rolaplev:Level xmi:id="_level_rownumber_4" name="RowNumber" column="_column_geography_rownumber"/>
  <rolaplev:Level xmi:id="_level_sickleavehours" name="SickLeaveHours" column="_column_employee_sickleavehours"/>
  <rolaplev:Level xmi:id="_level_gender" name="Gender" column="_column_customer_gender" columnType="String"/>
  <rolaplev:Level xmi:id="_level_productalternatekey" name="ProductAlternateKey" column="_column_product_productalternatekey"/>
  <rolaplev:Level xmi:id="_level_suffix" name="Suffix" column="_column_customer_suffix" columnType="String"/>
  <rolaplev:Level xmi:id="_level_emailaddress_1" name="EmailAddress" column="_column_employee_emailaddress"/>
  <rolaplev:Level xmi:id="_level_postalcode" name="PostalCode" column="_column_geography_postalcode"/>
  <rolaplev:Level xmi:id="_level_frenchproductsubcategoryname" name="FrenchProductSubcategoryName" column="_column_productsubcategory_frenchproductsubcategoryname"/>
  <rolaplev:Level xmi:id="_level_size" name="Size" column="_column_product_size"/>
  <rolaplev:Level xmi:id="_level_weight" name="Weight" column="_column_product_weight"/>
  <rolaplev:Level xmi:id="_level_commutedistance" name="CommuteDistance" column="_column_customer_commutedistance"/>
  <rolaplev:Level xmi:id="_level_title" name="Title" column="_column_employee_title"/>
  <rolaplev:Level xmi:id="_level_frenchoccupation" name="FrenchOccupation" column="_column_customer_frenchoccupation"/>
  <rolaplev:Level xmi:id="_level_lastname" name="LastName" column="_column_customer_lastname" columnType="String"/>
  <rolaplev:Level xmi:id="_level_daynumberofyear" name="DayNumberOfYear" column="_column_time_daynumberofyear"/>
  <rolaplev:Level xmi:id="_level_spanishmonthname" name="SpanishMonthName" column="_column_time_spanishmonthname"/>
  <rolaplev:Level xmi:id="_level_vacationhours" name="VacationHours" column="_column_employee_vacationhours"/>
  <rolaplev:Level xmi:id="_level_spanishcountryregionname" name="SpanishCountryRegionName" column="_column_geography_spanishcountryregionname"/>
  <rolaplev:Level xmi:id="_level_dealerprice" name="DealerPrice" column="_column_product_dealerprice"/>
  <rolaplev:Level xmi:id="_level_datefirstpurchase" name="DateFirstPurchase" column="_column_customer_datefirstpurchase"/>
  <rolaplev:Level xmi:id="_level_frenchproductname" name="FrenchProductName" column="_column_product_frenchproductname"/>
  <rolaplev:Level xmi:id="_level_sales" name="Sales" column="_column_store_sales"/>
  <rolaplev:Level xmi:id="_level_startdate_1" name="StartDate" column="_column_product_startdate"/>
  <rolaplev:Level xmi:id="_level_houseownerflag" name="HouseOwnerFlag" column="_column_customer_houseownerflag"/>
  <rolaplev:Level xmi:id="_level_rownumber_5" name="RowNumber" column="_column_employee_rownumber"/>
  <rolaplev:Level xmi:id="_level_calendarsemester" name="CalendarSemester" column="_column_time_calendarsemester"/>
  <rolaplev:Level xmi:id="_level_fiscalsemester" name="FiscalSemester" column="_column_time_fiscalsemester"/>
  <rolaplev:Level xmi:id="_level_storekey" name="StoreKey" column="_column_store_storekey"/>
  <rolaplev:Level xmi:id="_level_englishdescription" name="EnglishDescription" column="_column_product_englishdescription"/>
  <rolaplev:Level xmi:id="_level_calendaryear" name="CalendarYear" column="_column_time_calendaryear"/>
  <rolaplev:Level xmi:id="_level_rownumber_6" name="RowNumber" column="_column_time_rownumber"/>
  <rolaplev:Level xmi:id="_level_enddate_1" name="EndDate" column="_column_employee_enddate"/>
  <rolaplev:Level xmi:id="_level_hebrewdescription" name="HebrewDescription" column="_column_product_hebrewdescription"/>
  <rolaplev:Level xmi:id="_level_fiscalquarter" name="FiscalQuarter" column="_column_time_fiscalquarter"/>
  <rolaplev:Level xmi:id="_level_status" name="Status" column="_column_employee_status"/>
  <rolaplev:Level xmi:id="_level_finishedgoodsflag" name="FinishedGoodsFlag" column="_column_product_finishedgoodsflag"/>
  <rolaplev:Level xmi:id="_level_salespersonflag" name="SalesPersonFlag" column="_column_employee_salespersonflag"/>
  <rolaplev:Level xmi:id="_level_hiredate" name="HireDate" column="_column_employee_hiredate"/>
  <rolaplev:Level xmi:id="_level_productcategorykey_1" name="ProductCategoryKey" column="_column_productcategory_productcategorykey"/>
  <rolaplev:Level xmi:id="_level_phone" name="Phone" column="_column_employee_phone"/>
  <rolaplev:Level xmi:id="_level_monthnumberofyear" name="MonthNumberOfYear" column="_column_time_monthnumberofyear"/>
  <rolaplev:Level xmi:id="_level_style" name="Style" column="_column_product_style"/>
  <rolaplev:Level xmi:id="_level_parentemployeenationalidalternatekey" name="ParentEmployeeNationalIDAlternateKey" column="_column_employee_parentemployeenationalidalternatekey"/>
  <rolaplev:Level xmi:id="_level_number_of_employees" name="Number_of_Employees" column="_column_store_number_of_employees"/>
  <rolaplev:Level xmi:id="_level_productsubcategorykey" name="ProductSubcategoryKey" column="_column_product_productsubcategorykey"/>
  <rolaplev:Level xmi:id="_level_namestyle" name="NameStyle" column="_column_employee_namestyle"/>
  <rolaplev:Level xmi:id="_level_lastname_1" name="LastName" column="_column_employee_lastname"/>
  <rolaplev:Level xmi:id="_level_parentemployeekey" name="ParentEmployeeKey" column="_column_employee_parentemployeekey"/>
  <rolaplev:Level xmi:id="_level_fiscalyear" name="FiscalYear" column="_column_time_fiscalyear"/>
  <rolaplev:Level xmi:id="_level_englishoccupation" name="EnglishOccupation" column="_column_customer_englishoccupation"/>
  <rolaplev:Level xmi:id="_level_rownumber_7" name="RowNumber" column="_column_productsubcategory_rownumber"/>
  <rolaplev:Level xmi:id="_level_numbercarsowned" name="NumberCarsOwned" column="_column_customer_numbercarsowned"/>
  <rolaplev:Level xmi:id="_level_status_1" name="Status" column="_column_product_status"/>
  <rolaplev:Level xmi:id="_level_employeekey" name="EmployeeKey" column="_column_employee_employeekey"/>
  <rolaplev:Level xmi:id="_level_chinesedescription" name="ChineseDescription" column="_column_product_chinesedescription"/>
  <rolaplev:Level xmi:id="_level_salesterritorykey_1" name="SalesTerritoryKey" column="_column_geography_salesterritorykey"/>
  <rolaplev:Level xmi:id="_level_gender_1" name="Gender" column="_column_employee_gender"/>
  <rolaplev:Level xmi:id="_level_spanishproductsubcategoryname" name="SpanishProductSubcategoryName" column="_column_productsubcategory_spanishproductsubcategoryname"/>
  <rolaplev:Level xmi:id="_level_currentflag" name="CurrentFlag" column="_column_employee_currentflag"/>
  <rolaplev:Level xmi:id="_level_countryregioncode" name="CountryRegionCode" column="_column_geography_countryregioncode"/>
  <rolaplev:Level xmi:id="_level_emergencycontactname" name="EmergencyContactName" column="_column_employee_emergencycontactname"/>
  <rolaplev:Level xmi:id="_level_departmentname" name="DepartmentName" column="_column_employee_departmentname"/>
  <rolaplev:Level xmi:id="_level_numberchildrenathome" name="NumberChildrenAtHome" column="_column_customer_numberchildrenathome" columnType="Integer"/>
  <rolaplev:Level xmi:id="_level_englishcountryregionname" name="EnglishCountryRegionName" column="_column_geography_englishcountryregionname"/>
  <rolaplev:Level xmi:id="_level_customerkey" name="CustomerKey" column="_column_customer_customerkey" columnType="Integer"/>
  <rolaplev:Level xmi:id="_level_middlename_1" name="MiddleName" column="_column_employee_middlename"/>
  <rolaplev:Level xmi:id="_level_productsubcategorykey_1" name="ProductSubcategoryKey" column="_column_productsubcategory_productsubcategorykey"/>
  <rolaplev:Level xmi:id="_level_daystomanufacture" name="DaysToManufacture" column="_column_product_daystomanufacture"/>
  <rolaplev:Level xmi:id="_level_namestyle_1" name="NameStyle" column="_column_customer_namestyle" columnType="String"/>
  <rolaplev:Level xmi:id="_level_weightunitmeasurecode" name="WeightUnitMeasureCode" column="_column_product_weightunitmeasurecode"/>
  <rolaplev:Level xmi:id="_level_phone_1" name="Phone" column="_column_customer_phone"/>
  <rolaplev:Level xmi:id="_level_spanisheducation" name="SpanishEducation" column="_column_customer_spanisheducation" columnType="String"/>
  <rolaplev:Level xmi:id="_level_product_subcategory" id="_level_product_subcategory" name="Subcategory" column="_column_product_subcategory"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_storekey" primaryKey="_column_store_storekey" query="_tablesource_store" levels="_level_rownumber_3 _level_storekey _level_geography_key _level_storename _level_number_of_employees _level_sales"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_timekey" primaryKey="_column_time_timekey" query="_tablesource_time" levels="_level_rownumber_6 _level_timekey _level_fulldatealternatekey _level_daynumberofweek _level_englishdaynameofweek _level_spanishdaynameofweek _level_frenchdaynameofweek _level_daynumberofmonth _level_daynumberofyear _level_weeknumberofyear _level_englishmonthname _level_spanishmonthname _level_frenchmonthname _level_monthnumberofyear _level_calendarquarter _level_calendaryear _level_calendarsemester _level_fiscalquarter _level_fiscalyear _level_fiscalsemester"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_productkey" primaryKey="_column_product_productkey" query="_tablesource_product" levels="_level_rownumber_2 _level_productkey _level_productalternatekey _level_productsubcategorykey _level_weightunitmeasurecode _level_sizeunitmeasurecode _level_englishproductname _level_spanishproductname _level_frenchproductname _level_standardcost _level_finishedgoodsflag _level_color _level_safetystocklevel _level_reorderpoint _level_listprice _level_size _level_sizerange _level_weight _level_daystomanufacture _level_productline _level_dealerprice _level_class _level_style _level_modelname _level_englishdescription _level_frenchdescription _level_chinesedescription _level_arabicdescription _level_hebrewdescription _level_thaidescription _level_startdate_1 _level_enddate _level_status_1 _level_product_subcategory"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customerkey" primaryKey="_column_customer_customerkey" query="_tablesource_customer" levels="_level_rownumber_1 _level_customerkey _level_customeralternatekey _level_firstname_1 _level_middlename _level_lastname _level_namestyle_1 _level_birthdate_1 _level_maritalstatus _level_suffix _level_gender _level_emailaddress _level_yearlyincome _level_totalchildren _level_numberchildrenathome _level_englisheducation _level_spanisheducation _level_frencheducation _level_englishoccupation _level_spanishoccupation _level_frenchoccupation _level_houseownerflag _level_numbercarsowned _level_addressline1 _level_addressline2 _level_phone_1 _level_datefirstpurchase _level_commutedistance"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_employeekey" primaryKey="_column_employee_employeekey" query="_tablesource_employee" levels="_level_rownumber_5 _level_employeekey _level_parentemployeekey _level_employeenationalidalternatekey _level_parentemployeenationalidalternatekey _level_salesterritorykey _level_firstname _level_lastname_1 _level_middlename_1 _level_namestyle _level_title _level_hiredate _level_birthdate _level_loginid _level_emailaddress_1 _level_phone _level_maritalstatus_1 _level_emergencycontactname _level_emergencycontactphone _level_salariedflag _level_gender_1 _level_payfrequency _level_baserate _level_vacationhours _level_sickleavehours _level_currentflag _level_salespersonflag _level_departmentname _level_startdate _level_enddate_1 _level_status"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_productkey_1" primaryKey="_column_product_productkey" query="_joinsource" levels="_level_rownumber _level_productcategorykey_1 _level_productcategoryalternatekey _level_englishproductcategoryname _level_spanishproductcategoryname _level_frenchproductcategoryname"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_geographykey" primaryKey="_column_geography_geographykey" query="_joinsource_3" levels="_level_rownumber_4 _level_geographykey _level_city _level_stateprovincecode _level_stateprovincename _level_countryregioncode _level_englishcountryregionname _level_spanishcountryregionname _level_frenchcountryregionname _level_postalcode _level_salesterritorykey_1"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_productkey_2" primaryKey="_column_product_productkey" query="_joinsource_2" levels="_level_rownumber_7 _level_productsubcategorykey_1 _level_productsubcategoryalternatekey _level_englishproductsubcategoryname _level_spanishproductsubcategoryname _level_frenchproductsubcategoryname _level_productcategorykey"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimproduct" name="DimProduct" hierarchies="_explicithierarchy_productkey"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimproductcategory" name="DimProductCategory" hierarchies="_explicithierarchy_productkey_1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimtime" name="DimTime" hierarchies="_explicithierarchy_timekey"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimstore" name="DimStore" hierarchies="_explicithierarchy_storekey"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimcustomer" name="DimCustomer" hierarchies="_explicithierarchy_customerkey"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimgeography" name="DimGeography" hierarchies="_explicithierarchy_geographykey"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimemployee" name="DimEmployee" hierarchies="_explicithierarchy_employeekey"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_dimproductsubcategory" name="DimProductSubcategory" hierarchies="_explicithierarchy_productkey_2"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_descriptionroleplayingdimensionsdb" name="DescriptionRolePlayingDimensionsDB" query="_tablesource_fact">
    <dimensionConnectors xmi:id="_dimensionconnector_dimcustomer" foreignKey="_column_fact_customerkey" dimension="_standarddimension_dimcustomer" overrideDimensionName="DimCustomer"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimemployee" foreignKey="_column_fact_employeekey" dimension="_standarddimension_dimemployee" overrideDimensionName="DimEmployee"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimgeography" foreignKey="_column_fact_customerkey" dimension="_standarddimension_dimgeography" overrideDimensionName="DimGeography"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimproduct" foreignKey="_column_fact_productkey" dimension="_standarddimension_dimproduct" overrideDimensionName="DimProduct"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimproductcategory" foreignKey="_column_fact_productkey" dimension="_standarddimension_dimproductcategory" overrideDimensionName="DimProductCategory"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimproductsubcategory" foreignKey="_column_fact_productkey" dimension="_standarddimension_dimproductsubcategory" overrideDimensionName="DimProductSubCategory"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimstore" foreignKey="_column_fact_storekey" dimension="_standarddimension_dimstore" overrideDimensionName="DimStore"/>
    <dimensionConnectors xmi:id="_dimensionconnector_dimtime" foreignKey="_column_fact_orderdatekey" dimension="_standarddimension_dimtime" overrideDimensionName="DimTime"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_factinternetsales" name="FactInternetSales" column="_column_fact_salesamount"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.csdl.bikeaccessories.zip" download>Download Zip File</a>
