---
title: FoodMart
group: Full Examples
kind: COMPLEX
number: 99.1.4
---
# FoodMart Database

The FoodMart database is a classic example of a data warehouse schema used for demonstrating OLAP and business intelligence concepts.
It contains sales data for a fictional food retail chain with multiple stores, products, customers, and time periods.


## Sales Cube

The Sales cube is the primary fact table containing detailed sales transactions.
It includes measures for unit sales, store sales, and store cost, along with dimensions for time, customers, products, and stores.


```xml
<roma:PhysicalCube  id="_cube_sales" name="Sales" query="/11"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Time Dimension

The Time dimension provides various levels of temporal analysis including year, quarter, month, and day.
This allows for trend analysis and time-based comparisons of sales performance.


```xml
<roma:StandardDimension  id="_dimension_time" name="Time" hierarchies="roma:ExplicitHierarchy _hierarchy_time"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Dimension

The Store dimension contains information about retail locations including geographic hierarchy
(country, state, city) and store-specific attributes like store type and size.


```xml
<roma:StandardDimension  id="_dimension_store" name="Store" hierarchies="roma:ExplicitHierarchy _hierarchy_store"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customers Dimension

The Customer dimension includes demographic information about customers such as
gender, marital status, education level, and geographic location for customer analysis.


```xml
<roma:StandardDimension  id="_dimension_customers" name="Customers" hierarchies="roma:ExplicitHierarchy _hierarchy_customer_geography roma:ExplicitHierarchy _hierarchy_customer_gender roma:ExplicitHierarchy _hierarchy_customers_education roma:ExplicitHierarchy _hierarchy_customers_marital"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Dimension

The Product dimension organizes products into a hierarchy including product family,
department, category, subcategory, brand, and individual product details.


```xml
<roma:StandardDimension  id="_dimension_product" name="Product" hierarchies="roma:ExplicitHierarchy _hierarchy_product"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog id="_catalog_foodmart" description="FoodMart Sample Database - EMF Version" name="FoodMart" cubes="_cube_sales _cube_warehouse _cube_store _cube_hr" accessRoles="_role_california_manager _role_no_hr_cube _role_administrator" dbschemas="_databaseSchema_foodmart"/>
  <roma:DatabaseSchema id="_databaseSchema_foodmart" name="foodmart">
    <tables xsi:type="roma:PhysicalTable" id="_table_salesFact1997" name="sales_fact_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_timeId" name="time_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_storeId" name="store_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_customerId" name="customer_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_productId" name="product_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_unitSales" name="unit_sales" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_storeSales" name="store_sales" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_storeCost" name="store_cost" type="Numeric"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_timeByDay" name="time_by_day">
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_timeId" name="time_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_theDate" name="the_date" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_theYear" name="the_year" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_quarter" name="quarter"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_theMonth" name="the_month"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_store" name="store">
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_storeId" name="store_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_storeName" name="store_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_storeCountry" name="store_country"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_storeState" name="store_state"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_storeCity" name="store_city"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_storeType" name="store_type"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_regionId" name="region_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_storeStreetAddress" name="store_street_address"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_storeManager" name="store_manager"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_storeSqft" name="store_sqft" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_grocerySqft" name="grocery_sqft" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_frozenSqft" name="frozen_sqft" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_meatSqft" name="meat_sqft" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_coffeeBar" name="coffee_bar" type="Boolean"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_storePostalCode" name="store_postal_code"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_storeNumber" name="store_number" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_customer" name="customer">
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_customerId" name="customer_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_fullName" name="fullname"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_gender" name="gender"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_country" name="country"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_stateProvince" name="state_province"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_city" name="city"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_maritalStatus" name="marital_status"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_education" name="education"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_yearlyIncome" name="yearly_income"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_memberCard" name="member_card"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_occupation" name="occupation"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_houseowner" name="houseowner"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_numChildrenAtHome" name="num_children_at_home" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_product" name="product">
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_productId" name="product_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_productName" name="product_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_brandName" name="brand_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_productFamily" name="product_family"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_productDepartment" name="product_department"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_productCategory" name="product_category"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_productSubcategory" name="product_subcategory"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_warehouse" name="warehouse">
      <columns xsi:type="roma:PhysicalColumn" id="_column_warehouse_warehouseId" name="warehouse_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_warehouse_warehouseName" name="warehouse_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_warehouse_warehouseCity" name="warehouse_city"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_warehouse_warehouseStateProvince" name="warehouse_state_province"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_warehouse_warehouseCountry" name="warehouse_country"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_inventoryFact1997" name="inventory_fact_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_inventoryFact_warehouseId" name="warehouse_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_inventoryFact_productId" name="product_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_inventoryFact_timeId" name="time_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_inventoryFact_storeInvoice" name="store_invoice" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_inventoryFact_supplyTime" name="supply_time" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_inventoryFact_warehouseCost" name="warehouse_cost" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_inventoryFact_warehouseSales" name="warehouse_sales" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_inventoryFact_unitsShipped" name="units_shipped" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_inventoryFact_unitsOrdered" name="units_ordered" type="Numeric"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_promotion" name="promotion">
      <columns xsi:type="roma:PhysicalColumn" id="_column_promotion_promotionId" name="promotion_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_promotion_promotionName" name="promotion_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_promotion_mediaType" name="media_type"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_employee" name="employee">
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_employeeId" name="employee_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_firstName" name="first_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_lastName" name="last_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_fullName" name="full_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_managementRole" name="management_role"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_positionId" name="position_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_positionTitle" name="position_title"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_storeId" name="store_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_supervisorId" name="supervisor_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_maritalStatus" name="marital_status"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_gender" name="gender"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_department" name="department">
      <columns xsi:type="roma:PhysicalColumn" id="_column_department_departmentId" name="department_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_department_departmentDescription" name="department_description"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_position" name="position">
      <columns xsi:type="roma:PhysicalColumn" id="_column_position_positionId" name="position_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_position_positionTitle" name="position_title"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_position_payType" name="pay_type"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_position_minScale" name="min_scale" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_position_maxScale" name="max_scale" type="Numeric"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_salary" name="salary">
      <columns xsi:type="roma:PhysicalColumn" id="_column_salary_employeeId" name="employee_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salary_payDate" name="pay_date" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salary_salaryPaid" name="salary_paid" type="Numeric"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_employeeClosure" name="employee_closure">
      <columns xsi:type="roma:PhysicalColumn" id="_column_employeeClosure_supervisorId" name="supervisor_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employeeClosure_employeeId" name="employee_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employeeClosure_distance" name="distance" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_productClass" name="product_class">
      <columns xsi:type="roma:PhysicalColumn" id="_column_productClass_productClassId" name="product_class_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_productClass_productSubcategory" name="product_subcategory"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_productClass_productCategory" name="product_category"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_productClass_productDepartment" name="product_department"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_productClass_productFamily" name="product_family"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery table="_table_customer"/>
  <roma:TableQuery table="_table_position"/>
  <roma:TableQuery table="_table_timeByDay"/>
  <roma:TableQuery table="_table_product"/>
  <roma:TableQuery table="_table_employee"/>
  <roma:TableQuery table="_table_inventoryFact1997"/>
  <roma:TableQuery table="_table_department"/>
  <roma:TableQuery table="_table_warehouse"/>
  <roma:TableQuery table="_table_salary"/>
  <roma:TableQuery table="_table_salesFact1997"/>
  <roma:TableQuery table="_table_store"/>
  <roma:Level id="_level_customer_city" name="City" column="_column_customer_city"/>
  <roma:Level id="_level_customer_country" name="Country" column="_column_customer_country"/>
  <roma:Level id="_level_customer_education" name="Education Level" column="_column_customer_education"/>
  <roma:Level id="_level_customer_gender" name="Gender" column="_column_customer_gender"/>
  <roma:Level id="_level_customer_marital_status" name="Marital Status" column="_column_customer_maritalStatus"/>
  <roma:Level id="_level_customer_name" name="Name" column="_column_customer_fullName"/>
  <roma:Level id="_level_customer_stateProvince" name="State Province" column="_column_customer_stateProvince"/>
  <roma:Level id="_level_department_description" name="Department" column="_column_department_departmentDescription"/>
  <roma:Level id="_level_employee_department" name="Position ID" column="_column_employee_positionId"/>
  <roma:Level id="_level_employee_full_name" name="Employee Name" column="_column_employee_fullName"/>
  <roma:Level id="_level_employee_management_role" name="Management Role" column="_column_employee_managementRole"/>
  <roma:Level id="_level_employee_position" name="Position Title" column="_column_employee_positionTitle"/>
  <roma:Level id="_level_position_title" name="Position Title" column="_column_position_positionTitle"/>
  <roma:Level id="_level_product_brand" name="Brand Name" column="_column_product_brandName"/>
  <roma:Level id="_level_product_category" name="Product Category" column="_column_product_productCategory"/>
  <roma:Level id="_level_product_department" name="Product Department" column="_column_product_productDepartment"/>
  <roma:Level id="_level_product_family" name="Product Family" column="_column_product_productFamily"/>
  <roma:Level id="_level_product_name" name="Product Name" column="_column_product_productName"/>
  <roma:Level id="_level_product_subcategory" name="Product Subcategory" column="_column_product_productSubcategory"/>
  <roma:Level id="_level_store_city" name="Store City" column="_column_store_storeCity"/>
  <roma:Level id="_level_store_country" name="Store Country" column="_column_store_storeCountry"/>
  <roma:Level id="_level_store_name" name="Store Name" column="_column_store_storeName"/>
  <roma:Level id="_level_store_state" name="Store State" column="_column_store_storeState"/>
  <roma:Level id="_level_time_month" name="Month" column="_column_time_theMonth"/>
  <roma:Level id="_level_time_quarter" name="Quarter" column="_column_time_quarter"/>
  <roma:Level id="_level_time_year" name="Year" column="_column_time_theYear"/>
  <roma:Level id="_level_warehouse_city" name="City" column="_column_warehouse_warehouseCity"/>
  <roma:Level id="_level_warehouse_country" name="Country" column="_column_warehouse_warehouseCountry"/>
  <roma:Level id="_level_warehouse_name" name="Warehouse Name" column="_column_warehouse_warehouseName"/>
  <roma:Level id="_level_warehouse_state" name="State Province" column="_column_warehouse_warehouseStateProvince"/>
  <roma:ExplicitHierarchy id="_hierarchy_customer_gender" name="Gender" allMemberName="All Gender" query="/2" levels="_level_customer_gender"/>
  <roma:ExplicitHierarchy id="_hierarchy_customer_geography" name="Geography" allMemberName="All Customers" query="/2" levels="_level_customer_country _level_customer_stateProvince _level_customer_city _level_customer_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_customers_education" name="Customers Education" allMemberName="All Education Levels" query="/2" levels="_level_customer_education"/>
  <roma:ExplicitHierarchy id="_hierarchy_customers_marital" name="Customers Marital Status" allMemberName="All Marital Statuses" query="/2" levels="_level_customer_marital_status"/>
  <roma:ExplicitHierarchy id="_hierarchy_department" name="Department" allMemberName="All Departments" query="/8" levels="_level_department_description"/>
  <roma:ExplicitHierarchy id="_hierarchy_employee" name="Employee" allMemberName="All Employees" query="/6" levels="_level_employee_management_role _level_employee_position _level_employee_department _level_employee_full_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_position" name="Position" allMemberName="All Positions" query="/3" levels="_level_position_title"/>
  <roma:ExplicitHierarchy id="_hierarchy_product" name="Product Hierarchy" allMemberName="All Products" query="/5" levels="_level_product_family _level_product_department _level_product_category _level_product_subcategory _level_product_brand _level_product_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_store" name="Store Hierarchy" allMemberName="All Stores" query="/12" levels="_level_store_country _level_store_state _level_store_city _level_store_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_time" name="Time Hierarchy" allMemberName="All Years" query="/4" levels="_level_time_year _level_time_quarter _level_time_month"/>
  <roma:ExplicitHierarchy id="_hierarchy_warehouse" name="Warehouse" allMemberName="All Warehouses" query="/9" levels="_level_warehouse_country _level_warehouse_state _level_warehouse_city _level_warehouse_name"/>
  <roma:StandardDimension id="_dimension_customers" name="Customers" hierarchies="_hierarchy_customer_geography _hierarchy_customer_gender _hierarchy_customers_education _hierarchy_customers_marital"/>
  <roma:StandardDimension id="_dimension_department" name="Department" hierarchies="_hierarchy_department"/>
  <roma:StandardDimension id="_dimension_employee" name="Employee" hierarchies="_hierarchy_employee"/>
  <roma:StandardDimension id="_dimension_position" name="Position" hierarchies="_hierarchy_position"/>
  <roma:StandardDimension id="_dimension_product" name="Product" hierarchies="_hierarchy_product"/>
  <roma:StandardDimension id="_dimension_store" name="Store" hierarchies="_hierarchy_store"/>
  <roma:StandardDimension id="_dimension_time" name="Time" hierarchies="_hierarchy_time"/>
  <roma:StandardDimension id="_dimension_warehouse" name="Warehouse" hierarchies="_hierarchy_warehouse"/>
  <roma:PhysicalCube id="_cube_hr" name="HR" query="/10">
    <calculatedMembers id="_calculated_member_employee_salary" name="Employee Salary" formatString="$#,##0.00" formula="([Employees].currentmember.datamember, [Measures].[Org Salary])"/>
    <calculatedMembers id="_calculated_member_avg_salary" name="Avg Salary" formatString="$#,##0.00" formula="[Measures].[Org Salary]/[Measures].[Number of Employees]"/>
    <dimensionConnectors foreignKey="_column_salary_payDate" dimension="_dimension_time" id="_connector_hr_time"/>
    <dimensionConnectors foreignKey="_column_salary_employeeId" dimension="_dimension_store" id="_connector_hr_store"/>
    <dimensionConnectors foreignKey="_column_salary_employeeId" dimension="_dimension_employee" id="_connector_hr_employee"/>
    <dimensionConnectors foreignKey="_column_salary_employeeId" dimension="_dimension_position" id="_connector_hr_position"/>
    <dimensionConnectors foreignKey="_column_salary_employeeId" dimension="_dimension_department" id="_connector_hr_department"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_orgSalary" name="Org Salary" formatString="$#,##0.00" column="_column_salary_salaryPaid"/>
      <measures xsi:type="roma:CountMeasure" id="_measure_count" name="Count" formatString="#,###"/>
      <measures xsi:type="roma:CountMeasure" id="_measure_numberOfEmployees" name="Number of Employees" formatString="#,###"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_sales" name="Sales" query="/11">
    <calculatedMembers id="_calculated_member_profit" name="Profit" formatString="$#,##0.00" formula="[Measures].[Store Sales] - [Measures].[Store Cost]"/>
    <calculatedMembers id="_calculated_member_profit_last_period" name="Profit last Period" formatString="$#,##0.00" formula="COALESCEEMPTY((Measures.[Profit], [Time].[Time].PREVMEMBER), Measures.[Profit])"/>
    <calculatedMembers id="_calculated_member_profit_growth" name="Profit Growth" formatString="0.0%" formula="([Measures].[Profit] - [Measures].[Profit last Period]) / [Measures].[Profit last Period]"/>
    <dimensionConnectors foreignKey="_column_salesFact_timeId" dimension="_dimension_time" id="_connector_time"/>
    <dimensionConnectors foreignKey="_column_salesFact_storeId" dimension="_dimension_store" id="_connector_store"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_customers" id="_connector_customer"/>
    <dimensionConnectors foreignKey="_column_salesFact_productId" dimension="_dimension_product" id="_connector_product"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_unitSales" name="Unit Sales" formatString="#,###" column="_column_salesFact_unitSales"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_storeSales" name="Store Sales" formatString="$#,##0.00" column="_column_salesFact_storeSales"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_storeCost" name="Store Cost" formatString="$#,##0.00" column="_column_salesFact_storeCost"/>
      <measures xsi:type="roma:CountMeasure" id="_measure_salesCount" name="Sales Count" formatString="#,###"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_store" name="Store" query="/12">
    <dimensionConnectors dimension="_dimension_store" id="_connector_store_store"/>
    <dimensionConnectors dimension="_dimension_store" id="_connector_store_has_coffee_bar"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_storeSqft" name="Store Sqft" formatString="#,###" column="_column_store_storeSqft"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_grocerySqft" name="Grocery Sqft" formatString="#,###" column="_column_store_grocerySqft"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_warehouse" name="Warehouse" query="/7">
    <calculatedMembers id="_calculated_member_average_warehouse_sale" name="Average Warehouse Sale" formatString="$#,##0.00" formula="[Measures].[Warehouse Sales] / [Measures].[Warehouse Cost]"/>
    <dimensionConnectors foreignKey="_column_inventoryFact_timeId" dimension="_dimension_time" id="_connector_warehouse_time"/>
    <dimensionConnectors foreignKey="_column_inventoryFact_storeInvoice" dimension="_dimension_store" id="_connector_warehouse_store"/>
    <dimensionConnectors foreignKey="_column_inventoryFact_productId" dimension="_dimension_product" id="_connector_warehouse_product"/>
    <dimensionConnectors foreignKey="_column_inventoryFact_warehouseId" dimension="_dimension_warehouse" id="_connector_warehouse_warehouse"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_warehouseSales" name="Warehouse Sales" formatString="$#,##0.00" column="_column_inventoryFact_warehouseSales"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_warehouseCost" name="Warehouse Cost" formatString="$#,##0.00" column="_column_inventoryFact_warehouseCost"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_unitsShipped" name="Units Shipped" formatString="#,###" column="_column_inventoryFact_unitsShipped"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_unitsOrdered" name="Units Ordered" formatString="#,###" column="_column_inventoryFact_unitsOrdered"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:AccessRole id="_role_administrator" name="Administrator">
    <accessCatalogGrants catalogAccess="all"/>
  </roma:AccessRole>
  <roma:AccessRole id="_role_california_manager" name="California manager">
    <accessCatalogGrants>
      <cubeGrants cubeAccess="all" cube="_cube_sales"/>
    </accessCatalogGrants>
  </roma:AccessRole>
  <roma:AccessRole id="_role_no_hr_cube" name="No HR Cube">
    <accessCatalogGrants catalogAccess="all">
      <cubeGrants cube="_cube_hr"/>
    </accessCatalogGrants>
  </roma:AccessRole>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.foodmart.zip" download>Download Zip File</a>
