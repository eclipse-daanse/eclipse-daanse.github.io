---
title: FoodMart
group: Full Examples
kind: COMPLEX
number: 99.1.4
---
# FoodMart Database

The FoodMart database is a classic example of a data warehouse schema used for demonstrating OLAP and business intelligence concepts.
It contains sales data for a fictional food retail chain with multiple stores, products, customers, and time periods.


## Database Schema

FoodMart is a sample database representing a classic sales company.
It contains order data with product information, customer details, and time-based sales transactions
for analyzing business performance across different markets and product lines.


```xml
<roma:DatabaseSchema  id="_databaseSchema_foodmart"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales Fact Query

SalesFactQuery it directly references the physical table `sales_fact_1997`.


```xml
<roma:TableQuery  id="_query_sales_fact" aggregationTables="roma:AggregationName _aggregation_name_agg_c_special_sales_fact_1997" table="_table_salesFact1997"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Inventory Fact Query

InventoryFactQuery it directly references the physical table `inventory_fact_1997`.


```xml
<roma:TableQuery  id="_query_inventory_fact" table="_table_inventoryFact1997"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Query

StoreQuery it directly references the physical table `store`.


```xml
<roma:TableQuery  id="_query_store" table="_table_store"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Query

CustomerQuery it directly references the physical table `customer`.


```xml
<roma:TableQuery  id="_query_customer" table="_table_customer"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Query

ProductQuery it directly references the physical table `product`.


```xml
<roma:TableQuery  id="_query_product" table="_table_product"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Query

WarehouseQuery it directly references the physical table `warehouse`.


```xml
<roma:TableQuery  id="_query_warehouse" table="_table_warehouse"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotion Query

PromotionQuery it directly references the physical table `promotion`.


```xml
<roma:TableQuery  id="_query_promotion" table="_table_promotion"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Query

EmployeeQuery it directly references the physical table `employee`.


```xml
<roma:TableQuery  id="_query_exployee" table="_table_employee"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Departament Query

DepartmentQuery it directly references the physical table `department`.


```xml
<roma:TableQuery  id="_query_departament" table="_table_department"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Query

PositionQuery it directly references the physical table `position`.


```xml
<roma:TableQuery  id="_query_position" table="_table_position"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Salary Query

SalaryQuery it directly references the physical table `salary`.


```xml
<roma:TableQuery  id="_query_salary" table="_table_salary"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Closure Query

EmployeeClosureQuery it directly references the physical table `employee_closure`.


```xml
<roma:TableQuery  id="_query_employee_closure" table="_table_employeeClosure"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Class Query

ProductClassQuery it directly references the physical table `product_class`.


```xml
<roma:TableQuery  id="_query_product_class" table="_table_productClass"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Time By Day Query

TimeByDayQuery it directly references the physical table `time_by_day`.


```xml
<roma:TableQuery  id="_query_time_by_day" table="_table_time_by_day"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Ragged Query

StoreRaggedQuery it directly references the physical table `store_ragged`.


```xml
<roma:TableQuery  id="_query_store_ragged" table="_table_store_ragged"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales Cube

The Sales cube is the sales_fact_1997 table containing detailed sales transactions.
It includes measures for Unit Sales, Store Sales and Store Cost, Sales Count, Promotion Sales along with dimensions for Stores,
Store Size, Store Type, Time, Products, Promotion Media, Promotions, Customers, Education Level, Gender, Marital Status, Yearly Income.


```xml
<roma:PhysicalCube  id="_cube_sales" name="Sales" query="_query_sales_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Cube

The Warehouse cube is the inventory_fact_1997 table containing detailed warehouse sales transactions.
It includes measures for Store Invoice, Supply Time, Warehouse Cost, Warehouse Sales, Units Shipped, Units Ordered and Warehouse Profit,
along with dimensions for Store, Store Size in SQFT, Store Type, Time, Product and Warehouse.


```xml
<roma:PhysicalCube  id="_cube_warehouse" name="Warehouse" query="_query_inventory_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Cube

The Store cube is the store table containing detailed store information.
It includes measures for Store Sqft and Grocery Sqft, along with dimensions for Store Type, Store and Has coffee bar.


```xml
<roma:PhysicalCube  id="_cube_store" name="Store" query="_query_store"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## HR Cube

The HR cube is the salary table containing detailed employees information.
It includes measures for Org Salary, Count and Number of Employees, along with dimensions for Time, Store, Pay Type, Store Type,
Position, Departament and Employees.


```xml
<roma:PhysicalCube  id="_cube_hr" name="HR" query="_query_salary"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales Ragged Cube

The Sales Ragged cube is the sales_fact_1997 table containing detailed sales transactions.
It includes measures for Unit Sales, Store Cost, Store Sales, Store Count, CustomerStore Count along with dimensions for Store, Geography, Store Size,
Store Type, and Time, Product, Promotion Media, Promotions, Customers, Education Level, Gender, Status, Yearly Income.


```xml
<roma:PhysicalCube  id="_cube_sales_ragged" name="Sales Ragged" query="_query_sales_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales2 Cube

The Sales cube is the sales_fact_1997 table containing detailed sales transactions.
It includes measures for Sales Count, Unit Sales, Store Sales, Store Cost, and Customer Count, along with dimensions for Time, Products, and Gender.


```xml
<roma:PhysicalCube  id="_cube_sales_2" name="Sales 2" query="_query_sales_fact"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse and Sales Cube

The Warehouse and Sales virual cube detailed sales transactions. This Cube unions Warehouse and Sales cubes.
It includes measures for Sales Count, Store Cost, Store Sales, Unit Sales, Store Invoice,
Supply Time, Units Ordered, Units Shipped, Warehouse Cost, Warehouse Profit, Warehouse Sales with dimensions for Customers, Education Level,
Gender, Material Status, Products, Promotion Media, Promotions, Stores, Time, Yearly Income, Warehouse.


```xml
<roma:VirtualCube  id="_cube_warehouse_sales" name="Warehouse and Sales" dimensionConnectors="_connector_customer _connector_education_level _connector_gender _connector_marital_status _connector_product _connector_promotion_media _connector_promotions _connector_store _connector_time _connector_yearly_income _connector_warehouse_warehouse" referencedCalculatedMembers="_calculated_member_profit _calculated_member_profit_growth _calculated_member_average_warehouse_sale" referencedMeasures="roma:CountMeasure _measure_salesCount roma:SumMeasure _measure_storeCost roma:SumMeasure _measure_storeSales roma:SumMeasure _measure_unitSales roma:SumMeasure _measure_warehouseStoreInvoice roma:SumMeasure _measure_warehouseSupplyTime roma:SumMeasure _measure_unitsOrdered roma:SumMeasure _measure_unitsShipped roma:SumMeasure _measure_warehouseCost roma:SumMeasure _measure_warehouseWarehouseProfit roma:SumMeasure _measure_warehouseSales"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Time Dimension

The Time dimension provides various levels of temporal analysis including year, quarter, month, and day.
This allows for trend analysis and time-based comparisons of sales performance.


```xml
<roma:TimeDimension  id="_dimension_time" name="Time" hierarchies="roma:ExplicitHierarchy _hierarchy_time roma:ExplicitHierarchy _hierarchy_time1"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Time Dimension

The Time dimension provides various levels of temporal analysis including year, quarter, month, and day.
This allows for trend analysis and time-based comparisons of sales performance.


```xml
<roma:TimeDimension  id="_dimension_hr_time" name="Time" hierarchies="roma:ExplicitHierarchy _hierarchy_hr_time"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Dimension

The Store dimension contains information about retail locations including geographic hierarchy
(country, state, city) and store-specific attributes like store type and size.


```xml
<roma:StandardDimension  id="_dimension_store" name="Store" hierarchies="roma:ExplicitHierarchy _hierarchy_store"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Dimension

The Store dimension contains information about retail locations including geographic hierarchy
(country, state, city) and store-specific attributes like store type and size.


```xml
<roma:StandardDimension  id="_dimension_store_sales_ragged" name="Store" hierarchies="roma:ExplicitHierarchy _hierarchy_store_sales_ragged"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Dimension

The Store dimension contains information about retail locations including geographic hierarchy
(country, state, city) and store-specific attributes like store type and size.


```xml
<roma:StandardDimension  id="_dimension_hr_store" name="Store" hierarchies="roma:ExplicitHierarchy _hierarchy_hr_store"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Pay Type Dimension

The Pay Type dimension show pay type into a hierarchy of pay type.


```xml
<roma:StandardDimension  id="_dimension_pay_type" name="Pay Type" hierarchies="roma:ExplicitHierarchy _hierarchy_store_pay_type"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Dimension

The Store Type dimension show store type into a hierarchy of store type.


```xml
<roma:StandardDimension  id="_dimension_store_type_query_employee" name="Store Type" hierarchies="roma:ExplicitHierarchy _hierarchy_store_type_query_employee"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Dimension

The Store Type dimension show store type into a hierarchy of store type.


```xml
<roma:StandardDimension  id="_dimension_store_type" name="Store Type" hierarchies="roma:ExplicitHierarchy _hierarchy_store_type"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Dimension

The Store Type dimension show store type into a hierarchy of store type.


```xml
<roma:StandardDimension  id="_dimension_store_type_without_query" name="Store Type" hierarchies="roma:ExplicitHierarchy _hierarchy_store_type_without_table"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Dimension

The Store Type dimension show store type into a hierarchy of store type.


```xml
<roma:StandardDimension  id="_dimension_store_type_ragged" name="Store Type" hierarchies="roma:ExplicitHierarchy _hierarchy_store_type"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customers Dimension

The Customer dimension includes demographic information about customers such as
gender, marital status, education level, and geographic location for customer analysis.


```xml
<roma:StandardDimension  id="_dimension_customers" name="Customers" hierarchies="roma:ExplicitHierarchy _hierarchy_customer"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Dimension

The Product dimension organizes products into a hierarchy including product family,
department, category, subcategory, brand, and individual product details.


```xml
<roma:StandardDimension  id="_dimension_product" name="Product" hierarchies="roma:ExplicitHierarchy _hierarchy_product"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Size Dimension

The Store Size dimension show store size into a hierarchy of store size.


```xml
<roma:StandardDimension  id="_dimension_store_size_in_sqft" name="Store Size in SQFT" hierarchies="roma:ExplicitHierarchy _hierarchy_store_size_in_sqft"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotions Dimension

The Promotions dimension show promotions into a promotions hierarchy.


```xml
<roma:StandardDimension  id="_dimension_promotions" name="Promotions" hierarchies="roma:ExplicitHierarchy _hierarchy_promotions"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Education Level Dimension

The Education Level show education level of customer.


```xml
<roma:StandardDimension  id="_dimension_education_level" name="Education Level" hierarchies="roma:ExplicitHierarchy _hierarchy_education_level"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Gender Dimension

The Gender dimension  show gender type of customer.


```xml
<roma:StandardDimension  id="_dimension_gender" name="Gender" hierarchies="roma:ExplicitHierarchy _hierarchy_gender"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Marital Status Dimension

The Marital Status dimension show marital status of customer.


```xml
<roma:StandardDimension  id="_dimension_marital_status" name="Marital Status" hierarchies="roma:ExplicitHierarchy _hierarchy_marital_status"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Yearly Income Dimension

The YearlyIncome dimension show yearly income of customer.


```xml
<roma:StandardDimension  id="_dimension_yearly_income" name="Yearly Income" hierarchies="roma:ExplicitHierarchy _hierarchy_yerly_income"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Has coffee bar Dimension

The HasCoffeeBar dimension show coffee bar on store.


```xml
<roma:StandardDimension  id="_dimension_store_has_coffee_bar" name="Has coffee bar" hierarchies="roma:ExplicitHierarchy _hierarchy_store_has_coffe_bar"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Geography Dimension

The Geography dimension show geography on store (city, state, country).


```xml
<roma:StandardDimension  id="_dimension_geography" name="Geography" hierarchies="roma:ExplicitHierarchy _hierarchy_geography"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Dimension

The Warehouse dimension show information of warehouse (city, state, country, name).


```xml
<roma:StandardDimension  id="_dimension_warehouse" name="Warehouse" hierarchies="roma:ExplicitHierarchy _hierarchy_warehouse"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotion Media Dimension

The Promotion Media dimension show promotion media type into a promotion media hierarchy.


```xml
<roma:StandardDimension  id="_dimension_promotion_media" name="Promotion Media" hierarchies="roma:ExplicitHierarchy _hierarchy_promotion_media"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Dimension

The Employee dimension show employees structure into a employee hierarchy.


```xml
<roma:StandardDimension  id="_dimension_employee" name="Employee" hierarchies="roma:ParentChildHierarchy _hierarchy_employee"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Department Dimension

The Department dimension show department name into a department hierarchy.


```xml
<roma:StandardDimension  id="_dimension_department" name="Department" hierarchies="roma:ExplicitHierarchy _hierarchy_department"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Dimension

The Position dimension show employees role and position into a position hierarchy.


```xml
<roma:StandardDimension  id="_dimension_hr_position" name="Position" hierarchies="roma:ExplicitHierarchy _hierarchy_hr_position"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Time Hierarchy

The Time hierarchy provides temporal analysis with years, quarters, and months with hasAll enabled.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_time" hasAll="false" primaryKey="_column_time_by_day_time_id" query="_query_time_by_day" levels="_level_time_year _level_time_quarter _level_time_month"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Time Hierarchy

The Time hierarchy provides temporal analysis with years, quarters, and months with hasAll enabled.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_hr_time" hasAll="false" primaryKey="_column_time_by_day_the_date" query="_query_time_by_day" levels="_level_time_year _level_time_quarter _level_time_month_hr"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Time Hierarchy

The Time hierarchy provides temporal analysis with years, quarters, and months with hasAll enabled.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_time1" name="Weekly" primaryKey="_column_time_by_day_time_id" query="_query_time_by_day" levels="_level_time_year _level_time_week _level_time_day"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Hierarchy

The Store hierarchy provides store analysis with country, state, city and name of story with hasAll enabled.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_store" primaryKey="_column_store_storeId" query="_query_store" levels="_level_store_country _level_store_state _level_store_city _level_store_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Hierarchy

The Store hierarchy provides store analysis with country, state, city and name of story with hasAll enabled.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_store_sales_ragged" primaryKey="_column_store_ragged_store_id" query="_query_store_ragged" levels="_level_regged_store_country _level_regged_store_state _level_regged_store_city _level_regged_store_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Hierarchy

The Store hierarchy provides store analysis with country, state, city and name of story with hasAll enabled.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_hr_store" primaryKey="_column_employee_employeeId" query="_join_query_employee_store" levels="_level_store_country _level_store_state _level_store_city _level_store_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Pay Type Hierarchy

The Pay Type provides pay type analysis for employee.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_store_pay_type" primaryKey="_column_employee_employeeId" query="_join_query_employee_position" levels="_level_pay_type"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Hierarchy

The Store Type provides store type analysis for store.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_store_type_query_employee" primaryKey="_column_employee_employeeId" query="_join_query_employee_store" levels="_level_store_type"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Hierarchy

The Customer provides customer analysis by country, state, cyty, name of customer.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_customer" allMemberName="All Customers" primaryKey="_column_customer_customerId" query="_query_customer" levels="_level_country _level_state_province _level_city _level_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Hierarchy

The Product provides product analysis by product family, product departament, category, subcategory, brand, product name.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_product" primaryKey="_column_product_productId" query="_join_query_product_product_class" levels="_level_product_family _level_product_department _level_product_category _level_product_subcategory _level_product_brand _level_product_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Size Hierarchy

The Store Size provides store analysis by size.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_store_size_in_sqft" primaryKey="_column_store_storeId" query="_query_store" levels="_level_store_sqft"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotions Hierarchy

The Promotions provides sales analysis by promotions.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_promotions" allMemberName="All Promotions" defaultMember="All Promotions" primaryKey="_column_promotion_promotionId" query="_query_promotion" levels="_level_promotion_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Hierarchy

The Store Type provides store analysis by type.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_store_type" primaryKey="_column_store_storeId" query="_query_store" levels="_level_store_type_without_table"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Hierarchy

The Store Type provides store analysis by type.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_store_type_without_table" primaryKey="_column_store_storeId" levels="_level_store_type_without_table"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Education Level

The Education Level provides customer analysis by education level.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_education_level" primaryKey="_column_customer_customerId" query="_query_customer" levels="_level_education_level"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Gender Hierarchy

The Gender provides customer analysis by gender identity.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_gender" allMemberName="All Gender" primaryKey="_column_customer_customerId" query="_query_customer" levels="_level_gender"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Marital Status Hierarchy

The Marital Status provides customer analysis by marital status.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_marital_status" allMemberName="All Marital Status" primaryKey="_column_customer_customerId" query="_query_customer" levels="_level_marital_status"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Marital Status Hierarchy

The Marital Status provides customer analysis by marital status.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_marital_status" allMemberName="All Marital Status" primaryKey="_column_customer_customerId" query="_query_customer" levels="_level_marital_status"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Yerly Income Hierarchy

The Yerly Income provides customer analysis by yerly income.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_yerly_income" primaryKey="_column_customer_customerId" query="_query_customer" levels="_level_yearly_income"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Has Coffe Bar Hierarchy

The Has Coffe Bar provides store analysis by availability сoffe bar.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_store_has_coffe_bar" primaryKey="_column_store_storeId" levels="_level_store_has_coffe_bar"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Has Coffe Bar Hierarchy

The Has Coffe Bar provides store analysis by geography country, state, city.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_geography" primaryKey="_column_store_ragged_store_id" query="_query_store_ragged" levels="_level_regged_store_country _level_regged_store_state _level_regged_store_city"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Has Coffe Bar Hierarchy

The Has Coffe Bar provides store analysis by geography country, state, city.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_geography" primaryKey="_column_store_ragged_store_id" query="_query_store_ragged" levels="_level_regged_store_country _level_regged_store_state _level_regged_store_city"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Has Coffe Bar Hierarchy

The Has Coffe Bar provides store analysis by geography country, state, city.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_geography" primaryKey="_column_store_ragged_store_id" query="_query_store_ragged" levels="_level_regged_store_country _level_regged_store_state _level_regged_store_city"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Hierarchy

The Warehouse provides warehouse analysis by geography country, state, city and name of warehouse.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_warehouse" allMemberName="All Warehouses" primaryKey="_column_warehouse_warehouseId" query="_query_warehouse" levels="_level_warehouse_country _level_warehouse_state _level_warehouse_city _level_warehouse_name"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Promotion Media Hierarchy

The Promotion Media provides sales analysis by promotion media type.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_promotion_media" allMemberName="All Media" primaryKey="_column_promotion_promotionId" query="_query_promotion" levels="_level_promotion_media"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Hierarchy

The Employee provides organisation structure analysis by employees.

```xml
<roma:ParentChildHierarchy  id="_hierarchy_employee" allMemberName="All Employees" primaryKey="_column_employee_employeeId" query="_query_exployee" nullParentValue="0" parentColumn="roma:PhysicalColumn _column_employee_supervisorId" level="_level_employe_id"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Department Hierarchy

The Department provides sales analysis by departoment of employees.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_department" name="Department" primaryKey="_column_department_departmentId" query="_query_departament" levels="_level_department_description"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Hierarchy

The Position provides employee analysis by role and position.

```xml
<roma:ExplicitHierarchy  id="_hierarchy_hr_position" name="Position" allMemberName="All Position" primaryKey="_column_employee_employeeId" query="_query_exployee" levels="_level_hr_management_role _level_hr_position_title"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Year Level

Year level represents year for sales analysis.

```xml
<roma:Level  id="_level_time_year" name="Year" column="_column_time_by_day_the_year" type="TimeYears" columnType="Numeric" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Quarter Level

Quarter level represents quarter for sales analysis.

```xml
<roma:Level  id="_level_time_quarter" name="Quarter" column="_column_time_by_day_quarter" type="TimeQuarters"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Month Level

Month level represents month for sales analysis.

```xml
<roma:Level  id="_level_time_month" name="Month" column="_column_time_by_day_month_of_year" type="TimeMonths" columnType="Numeric"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Month Level

Month level represents month for sales analysis.

```xml
<roma:Level  id="_level_time_month_hr" name="Month" column="_column_time_by_day_month_of_year" type="TimeMonths" nameColumn="_column_time_by_day_the_month" columnType="Numeric"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Week Level

Week level represents week for sales analysis.

```xml
<roma:Level  id="_level_time_week" name="Week" column="_column_time_by_day_week_of_year" type="TimeWeeks" columnType="Numeric"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Day Level

Day level represents date for sales analysis.

```xml
<roma:Level  id="_level_time_day" name="Day" column="_column_time_by_day_day_of_month" type="TimeDays" columnType="Numeric"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Country Level

Store Country level represents country for store.

```xml
<roma:Level  id="_level_store_country" name="Store Country" column="_column_store_storeCountry" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store State Level

Store State level represents state for store.

```xml
<roma:Level  id="_level_store_state" name="Store State" column="_column_store_storeState" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store State Level

Store City level represents city for store.

```xml
<roma:Level  id="_level_store_city" name="Store City" column="_column_store_storeCity"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store State Level

Store Name level represents name of store.

```xml
<roma:Level  id="_level_store_name" name="Store Name" column="_column_store_storeName" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Has coffee bar Level

Has coffee bar level represents tag that store has coffe bar.

```xml
<roma:Level  id="_level_store_has_coffe_bar" name="Has coffee bar" column="_column_store_coffeeBar" columnType="Boolean" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Family Level

Product Family level represents family of product.

```xml
<roma:Level  id="_level_product_family" name="Product Family" column="_column_productClass_productFamily"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Departament Level

Product Departament level represents departament of product.

```xml
<roma:Level  id="_level_product_family" name="Product Family" column="_column_productClass_productFamily"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Category Level

Product Category level represents category of product.

```xml
<roma:Level  id="_level_product_category" name="Product Category" column="_column_productClass_productCategory"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Category Level

Product Subcategory level represents subcategory of product.

```xml
<roma:Level  id="_level_product_subcategory" name="Product Subcategory" column="_column_productClass_productSubcategory"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Brand Level

Product Brand level represents brand of product.

```xml
<roma:Level  id="_level_product_brand" name="Brand Name" column="_column_product_brandName"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Name Level

Product Name level represents name of product.

```xml
<roma:Level  id="_level_product_name" name="Product Name" column="_column_product_productName" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotions Level

Promotions level represents promotions of sales.

```xml
<roma:Level  id="_level_promotion_name" name="Promotion Name" column="_column_promotion_promotionName" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Sqft

Store Sqft level represents sqft of store.

```xml
<roma:Level  id="_level_store_sqft" name="Store Sqft" column="_column_store_storeSqft" columnType="Numeric" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type

Store Type level represents type of store.

```xml
<roma:Level  id="_level_store_type_without_table" name="Store Type" column="_column_store_storeType" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Education Level

Education Level level represents education level of customer.

```xml
<roma:Level  id="_level_education_level" name="Education Level" column="_column_customer_education" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Gender

Gender Level level represents gender identification of customer.

```xml
<roma:Level  id="_level_gender" name="Gender" column="_column_customer_gender" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Marital Status

Marital Status level represents marital status of customer.

```xml
<roma:Level  id="_level_marital_status" name="Marital Status" approxRowCount="111" column="_column_customer_maritalStatus" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Yearly Income

Yearly Income level represents yearly income of customer.

```xml
<roma:Level  id="_level_yearly_income" name="Yearly Income" column="_column_customer_yearlyIncome" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Pay Type

Pay Type level represents pay type of sales.

```xml
<roma:Level  id="_level_pay_type" name="Pay Type" column="_column_position_payType" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type

Store Type level represents type of store.

```xml
<roma:Level  id="_level_store_type" name="Store Type" column="_column_store_storeType" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Country

Store Country level represents country of store.

```xml
<roma:Level  id="_level_regged_store_country" name="Store Country" column="_column_store_ragged_store_country"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store City

Store City level represents city of store.

```xml
<roma:Level  id="_level_regged_store_state" name="Store State" column="_column_store_ragged_store_state" hideMemberIf="IfParentsName" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store City

Store City level represents city of store. with property hide member if blank name

```xml
<roma:Level  id="_level_regged_store_city" name="Store City" column="_column_store_ragged_store_city" hideMemberIf="IfBlankName"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Name

Store Name level represents name of store. with property hide member if never

```xml
<roma:Level  id="_level_regged_store_name" name="Store Name" column="_column_store_ragged_store_name" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Country

Country level represents name of customer.

```xml
<roma:Level  id="_level_country" name="Country" column="_column_customer_country" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## State Province

State Province level represents state province of customer.

```xml
<roma:Level  id="_level_state_province" name="State Province" column="_column_customer_stateProvince" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## City

City level represents city of customer.

```xml
<roma:Level  id="_level_city" name="City" column="_column_customer_city"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Name

Name level represents name of customer with properties (gender, marital status, education, yearly income) .

```xml
<roma:Level  id="_level_name" name="Name" column="_column_customer_customerId" nameColumn="roma:SQLExpressionColumn _sqlExpressionColumn_name" ordinalColumn="roma:SQLExpressionColumn _sqlExpressionColumn_name_order" columnType="Numeric" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Country

Country level represents name of warehouse.

```xml
<roma:Level  id="_level_warehouse_country" name="Country" column="_column_warehouse_warehouseCountry"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## State

State level represents state of warehouse.

```xml
<roma:Level  id="_level_warehouse_state" name="State Province" column="_column_warehouse_warehouseStateProvince"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## City

City level represents city of warehouse.

```xml
<roma:Level  id="_level_warehouse_city" name="City" column="_column_warehouse_warehouseCity"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Name

Warehouse Name level represents name of warehouse.

```xml
<roma:Level  id="_level_warehouse_name" name="Warehouse Name" column="_column_warehouse_warehouseName" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Media Type

Media Type level represents promotions media type of sales.

```xml
<roma:Level  id="_level_promotion_media" name="Media Type" column="_column_promotion_mediaType" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Department Description

Department Description level represents department description of sales.

```xml
<roma:Level  id="_level_department_description" name="Department Description" column="_column_department_departmentId" columnType="Numeric"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Management Role

Management Role level represents management role of employee.

```xml
<roma:Level  id="_level_hr_management_role" name="Management Role" column="_column_employee_managementRole"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Title

Position Title level represents position title of employee.

```xml
<roma:Level  id="_level_hr_position_title" name="Position Title" column="_column_employee_positionTitle" ordinalColumn="roma:PhysicalColumn _column_employee_positionId"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Id

Employee Id level represents Id of employee.

```xml
<roma:Level  id="_level_employe_id" name="Employee Id" column="_column_employee_employeeId" nameColumn="_column_employee_fullName" columnType="Numeric" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Country

Country level represents country of regged store.

```xml
<roma:Level  id="_level_regged_store_country" name="Country" column="_column_store_ragged_store_country" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## State

State level represents state of regged store.

```xml
<roma:Level  id="_level_regged_store_state" name="State" column="_column_store_ragged_store_state" hideMemberIf="IfParentsName" uniqueMembers="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## City

City level represents city of regged store.

```xml
<roma:Level  id="_level_regged_store_city" name="City" column="_column_store_ragged_store_city" hideMemberIf="IfBlankName"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Unit Sales

Measure Unit Sales use sales_fact_1997 table unit_sales column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_unitSales" name="Unit Sales" formatString="Standard" column="_column_salesFact_unitSales"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Sales

Measure Store Sales use sales_fact_1997 table store_sales column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_storeSales" name="Store Sales" formatString=",###.00" column="_column_salesFact_storeSales"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Cost

Measure Store Cost use sales_fact_1997 table store_cost column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_storeCost" name="Store Cost" formatString=",###.00" column="_column_salesFact_storeCost"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Count

Measure Store Count use sales_fact_1997 table product_id column with count aggregation.

```xml
<roma:CountMeasure  id="_measure_salesCount" name="Sales Count" formatString=",###" column="_column_salesFact_productId"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Count

Measure Customer Count use sales_fact_1997 table customer_id column with count aggregation.

```xml
<roma:CountMeasure  id="_measure_customerCount" name="Customer Count" formatString=",###" column="_column_salesFact_customerId" distinct="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotion Sales

Measure Promotion Sales use (case when `sales_fact_1997`.`promotion_id` = 0 then 0 else `sales_fact_1997`.`store_sales` end) expression with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_customerCount" name="Promotion Sales" formatString=",###.00" column="roma:SQLExpressionColumn _sqlExpressionColumn_promotionSales"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Sales

Measure Warehouse Sales use inventory_fact_1997 table warehouse_sales column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_warehouseSales" name="Warehouse Sales" column="_column_inventoryFact_warehouseSales"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Invoice

Measure Store Invoice use inventory_fact_1997 table store_invoice column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_warehouseStoreInvoice" name="Store Invoice" column="_column_inventoryFact_storeInvoice"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Supply Time

Measure Supply Time use inventory_fact_1997 table supply_time column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_warehouseSupplyTime" name="Supply Time" column="_column_inventoryFact_supplyTime"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Profit

Measure Warehouse Profit use warehouse_sales - warehouse_cost expression with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_warehouseWarehouseProfit" name="Warehouse Profit" column="roma:SQLExpressionColumn _sqlExpressionColumn_warehouseProfit"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Cost

Measure Warehouse Cost use inventory_fact_1997 table warehouse_cost column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_warehouseCost" name="Warehouse Cost" column="_column_inventoryFact_warehouseCost"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Units Shipped

Measure Units Shipped use inventory_fact_1997 table units_shipped column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_unitsShipped" name="Units Shipped" formatString=".0" column="_column_inventoryFact_unitsShipped"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Units Ordered

Measure Units Ordered use inventory_fact_1997 table units_ordered column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_unitsOrdered" name="Units Ordered" formatString=".0" column="_column_inventoryFact_unitsOrdered"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Sqft

Measure Store Sqft use store table store_sqft column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_storeSqft" name="Store Sqft" formatString=",###" column="_column_store_storeSqft"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Grocery Sqft

Measure Grocery Sqft use store table grocery_sqft column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_grocerySqft" name="Grocery Sqft" formatString=",###" column="_column_store_grocerySqft"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Org Salary

Measure Warehouse Cost use salary table salary_paid column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_orgSalary" name="Org Salary" formatString="Currency" column="_column_salary_salaryPaid"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Count

Measure Count use salary table employee_id column with count aggregation.

```xml
<roma:CountMeasure  id="_measure_count" name="Count" formatString=",#" column="_column_salary_employeeId"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Count

Measure Count use salary table employee_id column with count aggregation.

```xml
<roma:CountMeasure  id="_measure_numberOfEmployees" name="Number of Employees" formatString=",#" column="_column_salary_employeeId" distinct="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Unit Sales

Measure Unit Sales use sales_fact_1997 table unit_sales column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_unitSales_ragged" name="Unit Sales" formatString="Standard" column="_column_salesFact_unitSales"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Cost

Measure Store Cost use sales_fact_1997 table store_cost column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_storeCost_ragged" name="Store Cost" formatString=",###" column="_column_salesFact_storeCost"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Sales

Measure Store Sales use sales_fact_1997 table store_sales column with sum aggregation.

```xml
<roma:SumMeasure  id="_measure_storeSales_ragged" name="Store Sales" formatString=",###" column="_column_salesFact_storeSales"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales Count

Measure Sales Count use sales_fact_1997 table product_id column with count aggregation.

```xml
<roma:CountMeasure  id="_measure_salesCount_ragged" name="Sales Count" formatString=",###" column="_column_salesFact_productId"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Count

Measure Customer Count use sales_fact_1997 table customer_id column with count aggregation.

```xml
<roma:CountMeasure  id="_measure_customerCount_ragged" name="Customer Count" formatString=",###" column="_column_salesFact_customerId" distinct="true"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales Count

Measure Sales Count use sales_fact_1997 table product_id column with count aggregation. with MEMBER_ORDINAL property

```xml
<roma:CountMeasure  name="Sales Count" column="_column_salesFact_productId"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Unit Sales

Measure Unit Sales use sales_fact_1997 table unit_sales column with sum aggregation. with MEMBER_ORDINAL property

```xml
<roma:SumMeasure  name="Unit Sales" column="_column_salesFact_unitSales"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Sales

Measure Store Sales use sales_fact_1997 table store_sales column with sum aggregation. with MEMBER_ORDINAL property

```xml
<roma:SumMeasure  name="Store Sales" column="_column_salesFact_storeSales"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Cost

Measure Store Cost use sales_fact_1997 table store_cost column with sum aggregation. with MEMBER_ORDINAL property

```xml
<roma:SumMeasure  name="Store Cost" formatString=",###.00" column="_column_salesFact_storeCost"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Count

Measure Customer Count use sales_fact_1997 table customer_id column with count aggregation. with MEMBER_ORDINAL property

```xml
<roma:CountMeasure  name="Customer Count" formatString=",###" column="_column_salesFact_customerId"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Administrator Role

The `Administrator` use CatalogGrant access all;


```xml
<roma:AccessRole  id="_role_administrator" name="Administrator"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## California manager Role

The `California manager` use CatalogGrant access none. CatalogGrant has Sales cube access All
with HierarchyGrant Store and Customers access custom with member grants of caligornia
with HierarchyGrant Gender access none


```xml
<roma:AccessRole  id="_role_california_manager" name="California manager"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## No HR Cube Role

The `No HR Cube` use CatalogGrant access all except Cube HR. CubeGrant has HR cube access none;


```xml
<roma:AccessRole  id="_role_no_hr_cube" name="No HR Cube"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:AggregationName id="_aggregation_name_agg_c_special_sales_fact_1997" name="_table_agg_c_special_sales_fact_1997">
    <aggregationFactCount column="_column_agg_c_special_sales_fact_1997_fact_count"/>
    <aggregationForeignKeys aggregationColumn="_column_agg_c_special_sales_fact_1997_product_id" factColumn="_column_salesFact_productId"/>
    <aggregationForeignKeys aggregationColumn="_column_agg_c_special_sales_fact_1997_customer_id" factColumn="_column_salesFact_customerId"/>
    <aggregationForeignKeys aggregationColumn="_column_agg_c_special_sales_fact_1997_promotion_id" factColumn="_column_salesFact_promotionId"/>
    <aggregationForeignKeys aggregationColumn="_column_agg_c_special_sales_fact_1997_store_id" factColumn="_column_salesFact_storeId"/>
    <aggregationMeasures column="_column_agg_c_special_sales_fact_1997_unit_sales_sum" name="[Measures].[Unit Sales]"/>
    <aggregationMeasures column="_column_agg_c_special_sales_fact_1997_store_cost_sum" name="[Measures].[Store Cost]"/>
    <aggregationMeasures column="_column_agg_c_special_sales_fact_1997_store_sales_sum" name="[Measures].[Store Sales]"/>
    <aggregationLevels column="_column_agg_c_special_sales_fact_1997_time_year" name="[Time].[Year]"/>
    <aggregationLevels column="_column_agg_c_special_sales_fact_1997_time_quarter" name="[Time].[Quarter]"/>
    <aggregationLevels column="_column_agg_c_special_sales_fact_1997_time_month" name="[Time].[Month]"/>
  </roma:AggregationName>
  <roma:Catalog id="_catalog_foodmart" description="FoodMart Sample Database - EMF Version" name="FoodMart" cubes="_cube_sales _cube_warehouse _cube_store _cube_hr _cube_sales_ragged _cube_sales_2 _cube_warehouse_sales" accessRoles="_role_california_manager _role_no_hr_cube _role_administrator" dbschemas="_databaseSchema_foodmart"/>
  <roma:DatabaseSchema id="_databaseSchema_foodmart">
    <tables xsi:type="roma:PhysicalTable" id="_table_salesFact1997" name="sales_fact_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_productId" name="product_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_timeId" name="time_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_customerId" name="customer_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_promotionId" name="promotion_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_storeId" name="store_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_storeSales" name="store_sales" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_storeCost" name="store_cost" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salesFact_unitSales" name="unit_sales" type="Decimal" columnSize="10" decimalDigits="4"/>
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
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_store_street_address" name="store_street_address" columnSize="30"/>
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
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_lname" name="lname" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_fname" name="fname" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_account_num" name="account_num" type="BigInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_customer_region_id" name="customer_region_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_num_cars_owned" name="num_cars_owned" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_total_children" name="total_children" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_customer_address2" name="address2" columnSize="30"/>
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
      <columns xsi:type="roma:PhysicalColumn" id="_column_warehouse_stores_id" name="stores_id" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_inventoryFact1997" name="inventory_fact_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_inventoryFact_warehouseId" name="warehouse_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_inventoryFact_storeId" name="store_id" type="Integer"/>
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
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_salary" name="salary" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_employee_education_level" name="education_level"/>
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
      <columns xsi:type="roma:PhysicalColumn" id="_column_salary_departmentId" name="department_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salary_currencyId" name="currency_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salary_payDate" name="pay_date" type="Date"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salary_salaryPaid" name="salary_paid" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salary_overtimePaid" name="overtime_paid" type="Numeric" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salary_vacationAccrued" name="vacation_accrued" type="Real"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_salary_vacationUsed" name="vacation_used" type="Real"/>
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
    <tables xsi:type="roma:PhysicalTable" id="_table_agg_c_special_sales_fact_1997" name="agg_c_special_sales_fact_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_product_id" name="product_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_promotion_id" name="promotion_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_customer_id" name="customer_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_store_id" name="store_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_time_month" name="time_month" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_time_quarter" name="time_quarter" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_time_year" name="time_year" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_store_sales_sum" name="store_sales_sum" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_store_cost_sum" name="store_cost_sum" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_unit_sales_sum" name="unit_sales_sum" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_fact_count" name="fact_count" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_agg_l_05_sales_fact_1997" name="agg_l_05_sales_fact_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_05_sales_fact_1997_product_id" name="product_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_05_sales_fact_1997_customer_id" name="customer_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_05_sales_fact_1997_promotion_id" name="promotion_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_05_sales_fact_1997_store_id" name="store_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_05_sales_fact_1997_store_sales" name="store_sales" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_05_sales_fact_1997_store_cost" name="store_cost" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_05_sales_fact_1997_unit_sales" name="unit_sales" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_05_sales_fact_1997_fact_count" name="fact_count" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_agg_l_03_sales_fact_1997" name="agg_l_03_sales_fact_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_03_sales_fact_1997_time_id" name="time_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_03_sales_fact_1997_customer_id" name="customer_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_03_sales_fact_1997_store_sales" name="store_sales" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_03_sales_fact_1997_store_cost" name="store_cost" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_03_sales_fact_1997_unit_sales" name="unit_sales" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_l_03_sales_fact_1997_fact_count" name="fact_count" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_agg_pl_01_sales_fact_1997" name="agg_pl_01_sales_fact_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_pl_01_sales_fact_1997_product_id" name="product_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_pl_01_sales_fact_1997_time_id" name="time_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_pl_01_sales_fact_1997_customer_id" name="customer_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_pl_01_sales_fact_1997_store_sales_sum" name="store_sales_sum" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_pl_01_sales_fact_1997_store_cost_sum" name="store_cost_sum" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_pl_01_sales_fact_1997_unit_sales_sum" name="unit_sales_sum" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_pl_01_sales_fact_1997_fact_count" name="fact_count" type="Decimal" columnSize="10" decimalDigits="4"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_agg_g_ms_pcat_sales_fact_1997" name="agg_g_ms_pcat_sales_fact_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_gender" name="gender" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_marital_status" name="marital_status" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_product_family" name="product_family" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_product_department" name="product_department" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_product_category" name="product_category" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_month_of_year" name="month_of_year" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_quarter" name="quarter" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_the_year" name="the_year" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_store_sales" name="store_sales" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_store_cost" name="store_cost" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_unit_sales" name="unit_sales" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_customer_count" name="customer_count" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_g_ms_pcat_sales_fact_1997_fact_count" name="fact_count" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_agg_c_14_sales_fact_1997" name="agg_c_14_sales_fact_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_14_sales_fact_1997_product_id" name="product_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_14_sales_fact_1997_customer_id" name="customer_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_14_sales_fact_1997_store_id" name="store_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_14_sales_fact_1997_promotion_id" name="promotion_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_14_sales_fact_1997_month_of_year" name="month_of_year" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_14_sales_fact_1997_quarter" name="quarter" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_14_sales_fact_1997_the_year" name="the_year" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_14_sales_fact_1997_store_sales" name="store_sales" type="Decimal" columnSize="30" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_14_sales_fact_1997_store_cost" name="store_cost" type="Decimal" columnSize="30" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_14_sales_fact_1997_unit_sales" name="unit_sales" type="Decimal" columnSize="30" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_14_sales_fact_1997_fact_count" name="fact_count" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" name="agg_c_10_sales_fact_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_10_sales_fact_1997_month_of_year" name="month_of_year" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_10_sales_fact_1997_quarter" name="quarter" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_10_sales_fact_1997_the_year" name="the_year" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_10_sales_fact_1997_store_sales" name="store_sales" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_10_sales_fact_1997_store_cost" name="store_cost" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_10_sales_fact_1997_unit_sales" name="unit_sales" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_10_sales_fact_1997_customer_count" name="customer_count" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_10_sales_fact_1997_fact_count" name="fact_count" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_time_by_day" name="time_by_day">
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_by_day_time_id" name="time_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_by_day_the_date" name="the_date" type="Timestamp"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_by_day_the_day" name="the_day" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_by_day_the_month" name="the_month" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_by_day_the_year" name="the_year" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_by_day_day_of_month" name="day_of_month" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_by_day_week_of_year" name="week_of_year" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_by_day_month_of_year" name="month_of_year" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_by_day_quarter" name="quarter" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_time_by_day_fiscal_period" name="fiscal_period" columnSize="30"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_store_ragged" name="store_ragged">
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_store_id" name="store_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_store_type" name="store_type" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_store_name" name="store_name" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_store_street_address" name="store_street_address" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_store_state" name="store_state" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_store_country" name="store_country" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_store_manager" name="store_manager" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_store_city" name="store_city" columnSize="30"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_store_sqft" name="store_sqft" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_grocery_sqft" name="grocery_sqft" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_frozen_sqft" name="frozen_sqft" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_meat_sqft" name="meat_sqft" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_coffee_bar" name="coffee_bar" type="SmallInt"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_store_ragged_coffee_bar" name="region_id" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:PhysicalColumn id="_column_product_productClassId" name="product_class_id" type="Integer"/>
  <roma:SQLExpressionColumn id="_sqlExpressionColumn_name">
    <sqls sql="&quot;fname&quot; || ' ' || &quot;lname&quot;">
      <dialects>oracle</dialects>
      <dialects>h2</dialects>
      <dialects>hsqldb</dialects>
      <dialects>postgres</dialects>
      <dialects>luciddb</dialects>
      <dialects>teradata</dialects>
    </sqls>
    <sqls sql="`customer`.`fullname`">
      <dialects>hive</dialects>
    </sqls>
    <sqls sql="fname + ' ' + lname">
      <dialects>access</dialects>
      <dialects>mssql</dialects>
    </sqls>
    <sqls sql="CONCAT(`customer`.`fname`, ' ', `customer`.`lname`)">
      <dialects>mysql</dialects>
      <dialects>mariadb</dialects>
    </sqls>
    <sqls sql="&quot;customer&quot;.&quot;fullname&quot;">
      <dialects>derby</dialects>
      <dialects>neoview</dialects>
      <dialects>snowflake</dialects>
    </sqls>
    <sqls sql="CONCAT(CONCAT(&quot;customer&quot;.&quot;fname&quot;, ' '), &quot;customer&quot;.&quot;lname&quot;)">
      <dialects>db2</dialects>
    </sqls>
    <sqls sql="fullname">
      <dialects>generic</dialects>
    </sqls>
  </roma:SQLExpressionColumn>
  <roma:SQLExpressionColumn id="_sqlExpressionColumn_name_order">
    <sqls sql="&quot;fname&quot; || ' ' || &quot;lname&quot;">
      <dialects>oracle</dialects>
      <dialects>h2</dialects>
      <dialects>hsqldb</dialects>
      <dialects>postgres</dialects>
      <dialects>luciddb</dialects>
    </sqls>
    <sqls sql="fname + ' ' + lname">
      <dialects>access</dialects>
      <dialects>mssql</dialects>
    </sqls>
    <sqls sql="CONCAT(`customer`.`fname`, ' ', `customer`.`lname`)">
      <dialects>mysql</dialects>
      <dialects>mariadb</dialects>
    </sqls>
    <sqls sql="&quot;customer&quot;.&quot;fullname&quot;">
      <dialects>derby</dialects>
      <dialects>neoview</dialects>
      <dialects>snowflake</dialects>
    </sqls>
  </roma:SQLExpressionColumn>
  <roma:SQLExpressionColumn id="_sqlExpressionColumn_promotionSales" type="Decimal">
    <sqls sql="Iif(&quot;sales_fact_1997&quot;.&quot;promotion_id&quot; = 0, 0, &quot;sales_fact_1997&quot;.&quot;store_sales&quot;)">
      <dialects>access</dialects>
    </sqls>
    <sqls sql="(case when &quot;sales_fact_1997&quot;.&quot;promotion_id&quot; = 0 then 0 else &quot;sales_fact_1997&quot;.&quot;store_sales&quot; end)">
      <dialects>oracle</dialects>
      <dialects>h2</dialects>
      <dialects>hsqldb</dialects>
      <dialects>postgres</dialects>
      <dialects>neoview</dialects>
      <dialects>derby</dialects>
      <dialects>luciddb</dialects>
      <dialects>db2</dialects>
      <dialects>nuodb</dialects>
      <dialects>snowflake</dialects>
    </sqls>
    <sqls sql="(case when `sales_fact_1997`.`promotion_id` = 0 then 0 else `sales_fact_1997`.`store_sales` end)">
      <dialects>infobright</dialects>
    </sqls>
    <sqls sql="(case when sales_fact_1997.promotion_id = 0 then 0 else sales_fact_1997.store_sales end)">
      <dialects>generic</dialects>
    </sqls>
  </roma:SQLExpressionColumn>
  <roma:SQLExpressionColumn id="_sqlExpressionColumn_warehouseProfit" type="Decimal">
    <sqls sql="`warehouse_sales` - `inventory_fact_1997`.`warehouse_cost`">
      <dialects>mysql</dialects>
      <dialects>mariadb</dialects>
      <dialects>infobright</dialects>
    </sqls>
    <sqls sql="&amp;quot;warehouse_sales&amp;quot; - &amp;quot;inventory_fact_1997&amp;quot;.&amp;quot;warehouse_cost&amp;quot;">
      <dialects>generic</dialects>
    </sqls>
  </roma:SQLExpressionColumn>
  <roma:TableQuery id="_query_customer" table="_table_customer"/>
  <roma:TableQuery id="_query_departament" table="_table_department"/>
  <roma:TableQuery id="_query_exployee" table="_table_employee"/>
  <roma:TableQuery id="_query_inventory_fact" table="_table_inventoryFact1997"/>
  <roma:TableQuery id="_query_position" table="_table_position"/>
  <roma:TableQuery id="_query_product" table="_table_product"/>
  <roma:TableQuery id="_query_product_class" table="_table_productClass"/>
  <roma:TableQuery id="_query_promotion" table="_table_promotion"/>
  <roma:TableQuery id="_query_salary" table="_table_salary"/>
  <roma:TableQuery id="_query_sales_fact" aggregationTables="_aggregation_name_agg_c_special_sales_fact_1997" table="_table_salesFact1997">
    <aggregationExcludes name="agg_lc_100_sales_fact_1997" id="_aggregationExclude_agg_lc_100_sales_fact_1997"/>
    <aggregationExcludes name="agg_lc_10_sales_fact_1997" id="_aggregationExclude_agg_lc_10_sales_fact_1997"/>
    <aggregationExcludes name="agg_pc_10_sales_fact_1997" id="_aggregationExclude_agg_pc_10_sales_fact_1997"/>
  </roma:TableQuery>
  <roma:TableQuery id="_query_store" table="_table_store"/>
  <roma:TableQuery id="_query_store_ragged" table="_table_store_ragged"/>
  <roma:TableQuery id="_query_time_by_day" table="_table_time_by_day"/>
  <roma:TableQuery id="_query_warehouse" table="_table_warehouse"/>
  <roma:JoinQuery id="_join_query_employee_position">
    <left key="_column_employee_positionId" query="_query_exployee"/>
    <right key="_column_position_positionId" query="_query_position"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_query_employee_store">
    <left key="_column_employee_storeId" query="_query_exployee"/>
    <right key="_column_store_storeId" query="_query_store"/>
  </roma:JoinQuery>
  <roma:JoinQuery id="_join_query_product_product_class">
    <left key="_column_product_productClassId" query="_query_product"/>
    <right key="_column_productClass_productClassId" query="_query_product_class"/>
  </roma:JoinQuery>
  <roma:Level id="_level_city" name="City" column="_column_customer_city"/>
  <roma:Level id="_level_country" name="Country" column="_column_customer_country" uniqueMembers="true"/>
  <roma:Level id="_level_department_description" name="Department Description" column="_column_department_departmentId" columnType="Numeric"/>
  <roma:Level id="_level_education_level" name="Education Level" column="_column_customer_education" uniqueMembers="true"/>
  <roma:Level id="_level_employe_id" name="Employee Id" column="_column_employee_employeeId" nameColumn="_column_employee_fullName" columnType="Numeric" uniqueMembers="true">
    <memberProperties id="_memberProperty_employee_maritalStatus" name="Marital Status" column="_column_employee_maritalStatus"/>
    <memberProperties id="_memberProperty_employee_positionTitle" name="Position Title" column="_column_employee_positionTitle"/>
    <memberProperties id="_memberProperty_employee_gender" name="Gender" column="_column_employee_gender"/>
    <memberProperties id="_memberProperty_employee_salary" name="Salary" column="_column_employee_salary"/>
    <memberProperties id="_memberProperty_employee_educationLevel" name="Education Level" column="_column_employee_education_level"/>
    <memberProperties id="_memberProperty_employee_managementRole" name="Management Role" column="_column_employee_managementRole"/>
  </roma:Level>
  <roma:Level id="_level_gender" name="Gender" column="_column_customer_gender" uniqueMembers="true"/>
  <roma:Level id="_level_hr_management_role" name="Management Role" column="_column_employee_managementRole"/>
  <roma:Level id="_level_hr_position_title" name="Position Title" column="_column_employee_positionTitle" ordinalColumn="_column_employee_positionId"/>
  <roma:Level id="_level_marital_status" name="Marital Status" approxRowCount="111" column="_column_customer_maritalStatus" uniqueMembers="true"/>
  <roma:Level id="_level_name" name="Name" column="_column_customer_customerId" nameColumn="_sqlExpressionColumn_name" ordinalColumn="_sqlExpressionColumn_name_order" columnType="Numeric" uniqueMembers="true">
    <memberProperties id="_memberProperty_name_gender" name="Gender" column="_column_customer_gender"/>
    <memberProperties id="_memberProperty_name_maritalStatus" name="Marital Status" column="_column_customer_maritalStatus"/>
    <memberProperties id="_memberProperty_name_education" name="Education" column="_column_customer_education"/>
    <memberProperties id="_memberProperty_name_yearlyIncome" name="Yearly Income" column="_column_customer_yearlyIncome"/>
  </roma:Level>
  <roma:Level id="_level_pay_type" name="Pay Type" column="_column_position_payType" uniqueMembers="true"/>
  <roma:Level id="_level_product_brand" name="Brand Name" column="_column_product_brandName"/>
  <roma:Level id="_level_product_category" name="Product Category" column="_column_productClass_productCategory"/>
  <roma:Level id="_level_product_department" name="Product Department" column="_column_productClass_productDepartment"/>
  <roma:Level id="_level_product_family" name="Product Family" column="_column_productClass_productFamily"/>
  <roma:Level id="_level_product_name" name="Product Name" column="_column_product_productName" uniqueMembers="true"/>
  <roma:Level id="_level_product_subcategory" name="Product Subcategory" column="_column_productClass_productSubcategory"/>
  <roma:Level id="_level_promotion_media" name="Media Type" column="_column_promotion_mediaType" uniqueMembers="true"/>
  <roma:Level id="_level_promotion_name" name="Promotion Name" column="_column_promotion_promotionName" uniqueMembers="true"/>
  <roma:Level id="_level_regged_store_city" name="Store City" column="_column_store_ragged_store_city" hideMemberIf="IfBlankName"/>
  <roma:Level id="_level_regged_store_city" name="City" column="_column_store_ragged_store_city" hideMemberIf="IfBlankName"/>
  <roma:Level id="_level_regged_store_country" name="Store Country" column="_column_store_ragged_store_country"/>
  <roma:Level id="_level_regged_store_country" name="Country" column="_column_store_ragged_store_country" uniqueMembers="true"/>
  <roma:Level id="_level_regged_store_name" name="Store Name" column="_column_store_ragged_store_name" uniqueMembers="true">
    <memberProperties id="_memberProperty_storeRagged_storeType" name="Store Type" column="_column_store_ragged_store_type"/>
    <memberProperties id="_memberProperty_storeRagged_storeManager" name="Store Manager" column="_column_store_ragged_store_manager"/>
    <memberProperties id="_memberProperty_storeRagged_storeSqft" name="Store Sqft" column="_column_store_ragged_store_sqft"/>
    <memberProperties id="_memberProperty_storeRagged_grocerySqft" name="Grocery Sqft" column="_column_store_ragged_grocery_sqft"/>
    <memberProperties id="_memberProperty_storeRagged_frozenSqft" name="Frozen Sqft" column="_column_store_ragged_frozen_sqft"/>
    <memberProperties id="_memberProperty_storeRagged_meatSqft" name="Meat Sqft" column="_column_store_ragged_meat_sqft"/>
    <memberProperties id="_memberProperty_storeRagged_hasCoffeeBar" name="Has coffee bar" column="_column_store_ragged_coffee_bar"/>
    <memberProperties id="_memberProperty_storeRagged_streetAddress" name="Street address" column="_column_store_ragged_store_street_address"/>
  </roma:Level>
  <roma:Level id="_level_regged_store_state" name="State" column="_column_store_ragged_store_state" hideMemberIf="IfParentsName" uniqueMembers="true"/>
  <roma:Level id="_level_regged_store_state" name="Store State" column="_column_store_ragged_store_state" hideMemberIf="IfParentsName" uniqueMembers="true"/>
  <roma:Level id="_level_state_province" name="State Province" column="_column_customer_stateProvince" uniqueMembers="true"/>
  <roma:Level id="_level_store_city" name="Store City" column="_column_store_storeCity"/>
  <roma:Level id="_level_store_country" name="Store Country" column="_column_store_storeCountry" uniqueMembers="true"/>
  <roma:Level id="_level_store_has_coffe_bar" name="Has coffee bar" column="_column_store_coffeeBar" columnType="Boolean" uniqueMembers="true"/>
  <roma:Level id="_level_store_name" name="Store Name" column="_column_store_storeName" uniqueMembers="true">
    <memberProperties id="_memberProperty_store_storeType" name="Store Type" column="_column_store_storeType"/>
    <memberProperties id="_memberProperty_store_storeManager" name="Store Manager" column="_column_store_storeManager"/>
    <memberProperties id="_memberProperty_store_storeSqft" name="Store Sqft" column="_column_store_storeSqft" propertyType="Numeric"/>
    <memberProperties id="_memberProperty_store_grocerySqft" name="Grocery Sqft" column="_column_store_grocerySqft" propertyType="Numeric"/>
    <memberProperties id="_memberProperty_store_frozenSqft" name="Frozen Sqft" column="_column_store_frozenSqft" propertyType="Numeric"/>
    <memberProperties id="_memberProperty_store_meatSqft" name="Meat Sqft" column="_column_store_meatSqft" propertyType="Numeric"/>
    <memberProperties id="_memberProperty_store_hasCoffeeBar" name="Has coffee bar" column="_column_store_coffeeBar" propertyType="Boolean"/>
    <memberProperties id="_memberProperty_store_streetAddress" name="Street address" column="_column_store_storeStreetAddress" propertyType="String"/>
  </roma:Level>
  <roma:Level id="_level_store_sqft" name="Store Sqft" column="_column_store_storeSqft" columnType="Numeric" uniqueMembers="true"/>
  <roma:Level id="_level_store_state" name="Store State" column="_column_store_storeState" uniqueMembers="true"/>
  <roma:Level id="_level_store_type" name="Store Type" column="_column_store_storeType" uniqueMembers="true"/>
  <roma:Level id="_level_store_type_without_table" name="Store Type" column="_column_store_storeType" uniqueMembers="true"/>
  <roma:Level id="_level_time_day" name="Day" column="_column_time_by_day_day_of_month" type="TimeDays" columnType="Numeric"/>
  <roma:Level id="_level_time_month" name="Month" column="_column_time_by_day_month_of_year" type="TimeMonths" columnType="Numeric"/>
  <roma:Level id="_level_time_month_hr" name="Month" column="_column_time_by_day_month_of_year" type="TimeMonths" nameColumn="_column_time_by_day_the_month" columnType="Numeric"/>
  <roma:Level id="_level_time_quarter" name="Quarter" column="_column_time_by_day_quarter" type="TimeQuarters"/>
  <roma:Level id="_level_time_week" name="Week" column="_column_time_by_day_week_of_year" type="TimeWeeks" columnType="Numeric"/>
  <roma:Level id="_level_time_year" name="Year" column="_column_time_by_day_the_year" type="TimeYears" columnType="Numeric" uniqueMembers="true"/>
  <roma:Level id="_level_warehouse_city" name="City" column="_column_warehouse_warehouseCity"/>
  <roma:Level id="_level_warehouse_country" name="Country" column="_column_warehouse_warehouseCountry"/>
  <roma:Level id="_level_warehouse_name" name="Warehouse Name" column="_column_warehouse_warehouseName" uniqueMembers="true"/>
  <roma:Level id="_level_warehouse_state" name="State Province" column="_column_warehouse_warehouseStateProvince"/>
  <roma:Level id="_level_yearly_income" name="Yearly Income" column="_column_customer_yearlyIncome" uniqueMembers="true"/>
  <roma:ExplicitHierarchy id="_hierarchy_customer" allMemberName="All Customers" primaryKey="_column_customer_customerId" query="_query_customer" levels="_level_country _level_state_province _level_city _level_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_department" name="Department" primaryKey="_column_department_departmentId" query="_query_departament" levels="_level_department_description"/>
  <roma:ExplicitHierarchy id="_hierarchy_education_level" primaryKey="_column_customer_customerId" query="_query_customer" levels="_level_education_level"/>
  <roma:ExplicitHierarchy id="_hierarchy_gender" allMemberName="All Gender" primaryKey="_column_customer_customerId" query="_query_customer" levels="_level_gender"/>
  <roma:ExplicitHierarchy id="_hierarchy_geography" primaryKey="_column_store_ragged_store_id" query="_query_store_ragged" levels="_level_regged_store_country _level_regged_store_state _level_regged_store_city"/>
  <roma:ExplicitHierarchy id="_hierarchy_hr_position" name="Position" allMemberName="All Position" primaryKey="_column_employee_employeeId" query="_query_exployee" levels="_level_hr_management_role _level_hr_position_title"/>
  <roma:ExplicitHierarchy id="_hierarchy_hr_store" primaryKey="_column_employee_employeeId" query="_join_query_employee_store" levels="_level_store_country _level_store_state _level_store_city _level_store_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_hr_time" hasAll="false" primaryKey="_column_time_by_day_the_date" query="_query_time_by_day" levels="_level_time_year _level_time_quarter _level_time_month_hr"/>
  <roma:ExplicitHierarchy id="_hierarchy_marital_status" allMemberName="All Marital Status" primaryKey="_column_customer_customerId" query="_query_customer" levels="_level_marital_status"/>
  <roma:ExplicitHierarchy id="_hierarchy_product" primaryKey="_column_product_productId" query="_join_query_product_product_class" levels="_level_product_family _level_product_department _level_product_category _level_product_subcategory _level_product_brand _level_product_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_promotion_media" allMemberName="All Media" primaryKey="_column_promotion_promotionId" query="_query_promotion" levels="_level_promotion_media"/>
  <roma:ExplicitHierarchy id="_hierarchy_promotions" allMemberName="All Promotions" defaultMember="All Promotions" primaryKey="_column_promotion_promotionId" query="_query_promotion" levels="_level_promotion_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_store" primaryKey="_column_store_storeId" query="_query_store" levels="_level_store_country _level_store_state _level_store_city _level_store_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_store_has_coffe_bar" primaryKey="_column_store_storeId" levels="_level_store_has_coffe_bar"/>
  <roma:ExplicitHierarchy id="_hierarchy_store_pay_type" primaryKey="_column_employee_employeeId" query="_join_query_employee_position" levels="_level_pay_type"/>
  <roma:ExplicitHierarchy id="_hierarchy_store_sales_ragged" primaryKey="_column_store_ragged_store_id" query="_query_store_ragged" levels="_level_regged_store_country _level_regged_store_state _level_regged_store_city _level_regged_store_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_store_size_in_sqft" primaryKey="_column_store_storeId" query="_query_store" levels="_level_store_sqft"/>
  <roma:ExplicitHierarchy id="_hierarchy_store_type" primaryKey="_column_store_storeId" query="_query_store" levels="_level_store_type_without_table"/>
  <roma:ExplicitHierarchy id="_hierarchy_store_type_query_employee" primaryKey="_column_employee_employeeId" query="_join_query_employee_store" levels="_level_store_type"/>
  <roma:ExplicitHierarchy id="_hierarchy_store_type_without_table" primaryKey="_column_store_storeId" levels="_level_store_type_without_table"/>
  <roma:ExplicitHierarchy id="_hierarchy_time" hasAll="false" primaryKey="_column_time_by_day_time_id" query="_query_time_by_day" levels="_level_time_year _level_time_quarter _level_time_month"/>
  <roma:ExplicitHierarchy id="_hierarchy_time1" name="Weekly" primaryKey="_column_time_by_day_time_id" query="_query_time_by_day" levels="_level_time_year _level_time_week _level_time_day"/>
  <roma:ExplicitHierarchy id="_hierarchy_warehouse" allMemberName="All Warehouses" primaryKey="_column_warehouse_warehouseId" query="_query_warehouse" levels="_level_warehouse_country _level_warehouse_state _level_warehouse_city _level_warehouse_name"/>
  <roma:ExplicitHierarchy id="_hierarchy_yerly_income" primaryKey="_column_customer_customerId" query="_query_customer" levels="_level_yearly_income"/>
  <roma:ParentChildHierarchy id="_hierarchy_employee" allMemberName="All Employees" primaryKey="_column_employee_employeeId" query="_query_exployee" nullParentValue="0" parentColumn="_column_employee_supervisorId" level="_level_employe_id">
    <parentChildLink childColumn="_column_employeeClosure_employeeId" parentColumn="_column_employeeClosure_supervisorId">
      <table id="_query_employee_closure" table="_table_employeeClosure"/>
    </parentChildLink>
  </roma:ParentChildHierarchy>
  <roma:StandardDimension id="_dimension_customers" name="Customers" hierarchies="_hierarchy_customer"/>
  <roma:StandardDimension id="_dimension_department" name="Department" hierarchies="_hierarchy_department"/>
  <roma:StandardDimension id="_dimension_education_level" name="Education Level" hierarchies="_hierarchy_education_level"/>
  <roma:StandardDimension id="_dimension_employee" name="Employee" hierarchies="_hierarchy_employee"/>
  <roma:StandardDimension id="_dimension_gender" name="Gender" hierarchies="_hierarchy_gender"/>
  <roma:StandardDimension id="_dimension_geography" name="Geography" hierarchies="_hierarchy_geography"/>
  <roma:StandardDimension id="_dimension_hr_position" name="Position" hierarchies="_hierarchy_hr_position"/>
  <roma:StandardDimension id="_dimension_hr_store" name="Store" hierarchies="_hierarchy_hr_store"/>
  <roma:StandardDimension id="_dimension_marital_status" name="Marital Status" hierarchies="_hierarchy_marital_status"/>
  <roma:StandardDimension id="_dimension_pay_type" name="Pay Type" hierarchies="_hierarchy_store_pay_type"/>
  <roma:StandardDimension id="_dimension_product" name="Product" hierarchies="_hierarchy_product"/>
  <roma:StandardDimension id="_dimension_promotion_media" name="Promotion Media" hierarchies="_hierarchy_promotion_media"/>
  <roma:StandardDimension id="_dimension_promotions" name="Promotions" hierarchies="_hierarchy_promotions"/>
  <roma:StandardDimension id="_dimension_store" name="Store" hierarchies="_hierarchy_store"/>
  <roma:StandardDimension id="_dimension_store_has_coffee_bar" name="Has coffee bar" hierarchies="_hierarchy_store_has_coffe_bar"/>
  <roma:StandardDimension id="_dimension_store_sales_ragged" name="Store" hierarchies="_hierarchy_store_sales_ragged"/>
  <roma:StandardDimension id="_dimension_store_size_in_sqft" name="Store Size in SQFT" hierarchies="_hierarchy_store_size_in_sqft"/>
  <roma:StandardDimension id="_dimension_store_type" name="Store Type" hierarchies="_hierarchy_store_type"/>
  <roma:StandardDimension id="_dimension_store_type_query_employee" name="Store Type" hierarchies="_hierarchy_store_type_query_employee"/>
  <roma:StandardDimension id="_dimension_store_type_ragged" name="Store Type" hierarchies="_hierarchy_store_type"/>
  <roma:StandardDimension id="_dimension_store_type_without_query" name="Store Type" hierarchies="_hierarchy_store_type_without_table"/>
  <roma:StandardDimension id="_dimension_warehouse" name="Warehouse" hierarchies="_hierarchy_warehouse"/>
  <roma:StandardDimension id="_dimension_yearly_income" name="Yearly Income" hierarchies="_hierarchy_yerly_income"/>
  <roma:TimeDimension id="_dimension_hr_time" name="Time" hierarchies="_hierarchy_hr_time"/>
  <roma:TimeDimension id="_dimension_time" name="Time" hierarchies="_hierarchy_time _hierarchy_time1"/>
  <roma:PhysicalCube id="_cube_hr" name="HR" query="_query_salary">
    <calculatedMembers id="_calculated_member_employee_salary" name="Employee Salary" formatString="Currency" formula="([Employees].currentmember.datamember, [Measures].[Org Salary])"/>
    <calculatedMembers id="_calculated_member_avg_salary" name="Avg Salary" formatString="Currency" formula="[Measures].[Org Salary]/[Measures].[Number of Employees]"/>
    <dimensionConnectors foreignKey="_column_salary_payDate" dimension="_dimension_hr_time" overrideDimensionName="Time" id="_connector_hr_time"/>
    <dimensionConnectors foreignKey="_column_salary_employeeId" dimension="_dimension_hr_store" overrideDimensionName="Store" id="_connector_hr_store"/>
    <dimensionConnectors foreignKey="_column_salary_employeeId" dimension="_dimension_pay_type" overrideDimensionName="Pay Type" id="_connector_hr_pay_type"/>
    <dimensionConnectors foreignKey="_column_salary_employeeId" dimension="_dimension_store_type_query_employee" overrideDimensionName="Store Type" id="_connector_hr_store_type"/>
    <dimensionConnectors foreignKey="_column_salary_employeeId" dimension="_dimension_hr_position" overrideDimensionName="Position" id="_connector_hr_position"/>
    <dimensionConnectors foreignKey="_column_salary_departmentId" dimension="_dimension_department" overrideDimensionName="Department" id="_connector_hr_department"/>
    <dimensionConnectors foreignKey="_column_salary_employeeId" dimension="_dimension_employee" overrideDimensionName="Employees" id="_connector_hr_employee"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_orgSalary" name="Org Salary" formatString="Currency" column="_column_salary_salaryPaid"/>
      <measures xsi:type="roma:CountMeasure" id="_measure_count" name="Count" formatString="#,#" column="_column_salary_employeeId"/>
      <measures xsi:type="roma:CountMeasure" id="_measure_numberOfEmployees" name="Number of Employees" formatString="#,#" column="_column_salary_employeeId" distinct="true"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_sales" name="Sales" query="_query_sales_fact">
    <annotations value="Verkaufen" name="caption.de_DE"/>
    <annotations value="Ventes" name="caption.fr_FR"/>
    <annotations value="Cube des ventes" name="description.fr_FR"/>
    <annotations value="Cube Verkaufen" name="description.de"/>
    <annotations value="Cube den Verkaufen" name="description.de_AT"/>
    <calculatedMembers id="_calculated_member_profit" name="Profit" formula="[Measures].[Store Sales] - [Measures].[Store Cost]">
      <calculatedMemberProperties id="_calculatedMemberProperty_profit_formatString" name="FORMAT_STRING" value="$#,##0.00"/>
    </calculatedMembers>
    <calculatedMembers id="_calculated_member_profit_last_period" name="Profit last Period" formatString="$#,##0.00" formula="COALESCEEMPTY((Measures.[Profit], [Time].[Time].PREVMEMBER), Measures.[Profit])">
      <calculatedMemberProperties id="_calculatedMemberProperty_profit__last_period_formatString" name="FORMAT_STRING" value="$#,##0.00"/>
      <calculatedMemberProperties id="_calculatedMemberProperty_profit__last_period_member_ordinal" name="MEMBER_ORDINAL" value="18"/>
    </calculatedMembers>
    <calculatedMembers id="_calculated_member_profit_growth" name="Profit Growth" formula="([Measures].[Profit] - [Measures].[Profit last Period]) / [Measures].[Profit last Period]">
      <calculatedMemberProperties id="_calculatedMemberProperty_profit_growth_formatString" name="FORMAT_STRING" value="0.0%"/>
    </calculatedMembers>
    <dimensionConnectors foreignKey="_column_salesFact_storeId" dimension="_dimension_store" overrideDimensionName="Store" id="_connector_store"/>
    <dimensionConnectors foreignKey="_column_salesFact_storeId" dimension="_dimension_store_size_in_sqft" overrideDimensionName="Store Size in SQFT" id="_connector_store_size_in_soft"/>
    <dimensionConnectors foreignKey="_column_salesFact_storeId" dimension="_dimension_store_type" overrideDimensionName="Store Type" id="_connector_store_type"/>
    <dimensionConnectors foreignKey="_column_salesFact_timeId" dimension="_dimension_time" overrideDimensionName="Time" id="_connector_time"/>
    <dimensionConnectors foreignKey="_column_salesFact_productId" dimension="_dimension_product" overrideDimensionName="Product" id="_connector_product"/>
    <dimensionConnectors foreignKey="_column_salesFact_promotionId" dimension="_dimension_promotion_media" overrideDimensionName="Promotion Media" id="_connector_promotion_media"/>
    <dimensionConnectors foreignKey="_column_salesFact_promotionId" dimension="_dimension_promotions" overrideDimensionName="Promotions" id="_connector_promotions"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_customers" overrideDimensionName="Customers" id="_connector_customer"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_education_level" overrideDimensionName="Education Level" id="_connector_education_level"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_gender" overrideDimensionName="Gender" id="_connector_gender"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_marital_status" overrideDimensionName="Marital Status" id="_connector_marital_status"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_yearly_income" overrideDimensionName="Yearly Income" id="_connector_yearly_income"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_unitSales" name="Unit Sales" formatString="Standard" column="_column_salesFact_unitSales"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_storeCost" name="Store Cost" formatString="#,###.00" column="_column_salesFact_storeCost"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_storeSales" name="Store Sales" formatString="#,###.00" column="_column_salesFact_storeSales"/>
      <measures xsi:type="roma:CountMeasure" id="_measure_salesCount" name="Sales Count" formatString="#,###" column="_column_salesFact_productId"/>
      <measures xsi:type="roma:CountMeasure" id="_measure_customerCount" name="Customer Count" formatString="#,###" column="_column_salesFact_customerId" distinct="true"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_customerCount" name="Promotion Sales" formatString="#,###.00" column="_sqlExpressionColumn_promotionSales"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_sales_2" name="Sales 2" query="_query_sales_fact">
    <calculatedMembers id="_calculated_member_profit_with_order" name="Profit" formula="[Measures].[Store Sales] - [Measures].[Store Cost]">
      <calculatedMemberProperties id="_calculatedMemberProperty_profit_formatString2" name="FORMAT_STRING" value="$#,##0.00"/>
      <calculatedMemberProperties id="_calculatedMemberProperty_memberOrdinal4" name="MEMBER_ORDINAL" value="4"/>
    </calculatedMembers>
    <calculatedMembers id="_calculated_member_profit_last_period_sales2" name="Profit last Period" visible="false" formula="COALESCEEMPTY((Measures.[Profit], [Time].[Time].PREVMEMBER),    Measures.[Profit])">
      <calculatedMemberProperties id="_calculatedMemberProperty_memberOrdinal5" name="MEMBER_ORDINAL" value="5"/>
    </calculatedMembers>
    <dimensionConnectors foreignKey="_column_salesFact_timeId" dimension="_dimension_time" overrideDimensionName="Time" id="_connector_sales2_time"/>
    <dimensionConnectors foreignKey="_column_salesFact_productId" dimension="_dimension_product" overrideDimensionName="Product" id="_connector_sales2_product"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_gender" overrideDimensionName="Gender" id="_connector_sales2_gender"/>
    <measureGroups>
      <measures xsi:type="roma:CountMeasure" name="Sales Count" column="_column_salesFact_productId">
        <calculatedMemberProperties id="_calculatedMemberProperty_salesCount_memberOrdinal" name="MEMBER_ORDINAL" value="1"/>
      </measures>
      <measures xsi:type="roma:SumMeasure" name="Unit Sales" column="_column_salesFact_unitSales">
        <calculatedMemberProperties id="_calculatedMemberProperty_unitSales_memberOrdinal" name="MEMBER_ORDINAL" value="2"/>
      </measures>
      <measures xsi:type="roma:SumMeasure" name="Store Sales" column="_column_salesFact_storeSales">
        <calculatedMemberProperties id="_calculatedMemberProperty_storeSales_memberOrdinal" name="MEMBER_ORDINAL" value="3"/>
      </measures>
      <measures xsi:type="roma:SumMeasure" name="Store Cost" formatString="#,###.00" column="_column_salesFact_storeCost">
        <calculatedMemberProperties id="_calculatedMemberProperty_storeCost_memberOrdinal" name="MEMBER_ORDINAL" value="6"/>
      </measures>
      <measures xsi:type="roma:CountMeasure" name="Customer Count" formatString="#,###" column="_column_salesFact_customerId">
        <calculatedMemberProperties id="_calculatedMemberProperty_customerCount_memberOrdinal" name="MEMBER_ORDINAL" value="7"/>
      </measures>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_sales_ragged" name="Sales Ragged" query="_query_sales_fact">
    <dimensionConnectors foreignKey="_column_salesFact_storeId" dimension="_dimension_store_sales_ragged" overrideDimensionName="Store" id="_connector_ragged_store_store"/>
    <dimensionConnectors foreignKey="_column_salesFact_storeId" dimension="_dimension_geography" overrideDimensionName="Geography" id="_connector_ragged_store_geography"/>
    <dimensionConnectors foreignKey="_column_salesFact_storeId" dimension="_dimension_store_size_in_sqft" overrideDimensionName="Store Size in SqFt" id="_connector_ragged_store_store_size_in_sqft"/>
    <dimensionConnectors foreignKey="_column_salesFact_storeId" dimension="_dimension_store_type_ragged" overrideDimensionName="Store Type" id="_connector_ragged_store_store_type"/>
    <dimensionConnectors foreignKey="_column_salesFact_timeId" dimension="_dimension_time" overrideDimensionName="Time" id="_connector_ragged_store_time"/>
    <dimensionConnectors foreignKey="_column_salesFact_productId" dimension="_dimension_product" overrideDimensionName="Product" id="_connector_ragged_product"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_promotion_media" overrideDimensionName="Promotion Media" id="_connector_ragged_promotion_media"/>
    <dimensionConnectors foreignKey="_column_salesFact_promotionId" dimension="_dimension_promotions" overrideDimensionName="Promotions" id="_connector_ragged_promotions"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_customers" overrideDimensionName="Customers" id="_connector_ragged_customers"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_education_level" overrideDimensionName="Education Level" id="_connector_ragged_education_level"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_gender" overrideDimensionName="Gender" id="_connector_ragged_gender"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_marital_status" overrideDimensionName="Marital Status" id="_connector_ragged_marital_status"/>
    <dimensionConnectors foreignKey="_column_salesFact_customerId" dimension="_dimension_yearly_income" overrideDimensionName="Yearly Income" id="_connector_ragged_yearly_income"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_unitSales_ragged" name="Unit Sales" formatString="Standard" column="_column_salesFact_unitSales"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_storeCost_ragged" name="Store Cost" formatString="#,###" column="_column_salesFact_storeCost"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_storeSales_ragged" name="Store Sales" formatString="#,###" column="_column_salesFact_storeSales"/>
      <measures xsi:type="roma:CountMeasure" id="_measure_salesCount_ragged" name="Sales Count" formatString="#,###" column="_column_salesFact_productId"/>
      <measures xsi:type="roma:CountMeasure" id="_measure_customerCount_ragged" name="Customer Count" formatString="#,###" column="_column_salesFact_customerId" distinct="true"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_store" name="Store" query="_query_store">
    <dimensionConnectors dimension="_dimension_store_type_without_query" overrideDimensionName="Store Type" id="_connector_store_store_type"/>
    <dimensionConnectors dimension="_dimension_store" overrideDimensionName="Store" id="_connector_store_store"/>
    <dimensionConnectors dimension="_dimension_store_has_coffee_bar" overrideDimensionName="Has coffee bar" id="_connector_store_has_coffee_bar"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_storeSqft" name="Store Sqft" formatString="#,###" column="_column_store_storeSqft"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_grocerySqft" name="Grocery Sqft" formatString="#,###" column="_column_store_grocerySqft"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:PhysicalCube id="_cube_warehouse" name="Warehouse" query="_query_inventory_fact">
    <calculatedMembers id="_calculated_member_average_warehouse_sale" name="Average Warehouse Sale" formula="[Measures].[Warehouse Sales] / [Measures].[Warehouse Cost]">
      <calculatedMemberProperties id="_calculatedMemberProperty_averageWarehouseSale_formatString" name="FORMAT_STRING" value="$#,##0.00"/>
    </calculatedMembers>
    <namedSets id="namedSet_TopSellers" name="Top Sellers" formula="TopCount([Warehouse].[Warehouse Name].MEMBERS, 5, [Measures].[Warehouse Sales])"/>
    <dimensionConnectors foreignKey="_column_inventoryFact_storeId" dimension="_dimension_store" overrideDimensionName="Store" id="_connector_warehouse_store"/>
    <dimensionConnectors foreignKey="_column_inventoryFact_storeId" dimension="_dimension_store_size_in_sqft" overrideDimensionName="Store Size in SQFT" id="_connector_warehouse_store_size_in_sqft"/>
    <dimensionConnectors foreignKey="_column_inventoryFact_storeId" dimension="_dimension_store_type" overrideDimensionName="Store Type" id="_connector_warehouse_store_size_in_sqft"/>
    <dimensionConnectors foreignKey="_column_inventoryFact_timeId" dimension="_dimension_time" overrideDimensionName="Time" id="_connector_warehouse_time"/>
    <dimensionConnectors foreignKey="_column_inventoryFact_productId" dimension="_dimension_product" overrideDimensionName="Product" id="_connector_warehouse_product"/>
    <dimensionConnectors foreignKey="_column_inventoryFact_warehouseId" dimension="_dimension_warehouse" overrideDimensionName="Warehouse" id="_connector_warehouse_warehouse"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_warehouseStoreInvoice" name="Store Invoice" column="_column_inventoryFact_storeInvoice"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_warehouseSupplyTime" name="Supply Time" column="_column_inventoryFact_supplyTime"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_warehouseCost" name="Warehouse Cost" column="_column_inventoryFact_warehouseCost"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_warehouseSales" name="Warehouse Sales" column="_column_inventoryFact_warehouseSales"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_unitsShipped" name="Units Shipped" formatString="#.0" column="_column_inventoryFact_unitsShipped"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_unitsOrdered" name="Units Ordered" formatString="#.0" column="_column_inventoryFact_unitsOrdered"/>
      <measures xsi:type="roma:SumMeasure" id="_measure_warehouseWarehouseProfit" name="Warehouse Profit" column="_sqlExpressionColumn_warehouseProfit"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:VirtualCube id="_cube_warehouse_sales" name="Warehouse and Sales" dimensionConnectors="_connector_customer _connector_education_level _connector_gender _connector_marital_status _connector_product _connector_promotion_media _connector_promotions _connector_store _connector_time _connector_yearly_income _connector_warehouse_warehouse" referencedCalculatedMembers="_calculated_member_profit _calculated_member_profit_growth _calculated_member_average_warehouse_sale" referencedMeasures="_measure_salesCount _measure_storeCost _measure_storeSales _measure_unitSales _measure_warehouseStoreInvoice _measure_warehouseSupplyTime _measure_unitsOrdered _measure_unitsShipped _measure_warehouseCost _measure_warehouseWarehouseProfit _measure_warehouseSales">
    <calculatedMembers id="_calculated_member_profit_per_unit_shipped" name="Profit Per Unit Shipped" formatString="Currency" formula="[Measures].[Profit] / [Measures].[Units Shipped]"/>
  </roma:VirtualCube>
  <roma:AccessRole id="_role_administrator" name="Administrator">
    <accessCatalogGrants catalogAccess="all">
      <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="_databaseSchema_foodmart"/>
    </accessCatalogGrants>
  </roma:AccessRole>
  <roma:AccessRole id="_role_california_manager" name="California manager">
    <accessCatalogGrants>
      <cubeGrants cubeAccess="all" cube="_cube_sales">
        <hierarchyGrants hierarchyAccess="custom" hierarchy="_hierarchy_store" topLevel="_level_store_country">
          <memberGrants memberAccess="all" member="[Store].[USA].[CA]"/>
          <memberGrants member="[Store].[USA].[CA].[Los Angeles]"/>
        </hierarchyGrants>
        <hierarchyGrants hierarchyAccess="custom" hierarchy="_hierarchy_customer" bottomLevel="_level_city" topLevel="_level_state_province">
          <memberGrants memberAccess="all" member="[Customers].[USA].[CA]"/>
          <memberGrants member="[Customers].[USA].[CA].[Los Angeles]"/>
        </hierarchyGrants>
        <hierarchyGrants hierarchy="_hierarchy_gender"/>
      </cubeGrants>
      <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="_databaseSchema_foodmart"/>
    </accessCatalogGrants>
  </roma:AccessRole>
  <roma:AccessRole id="_role_no_hr_cube" name="No HR Cube">
    <accessCatalogGrants catalogAccess="all">
      <cubeGrants cube="_cube_hr"/>
      <databaseSchemaGrants databaseSchemaAccess="all" databaseSchema="_databaseSchema_foodmart"/>
    </accessCatalogGrants>
  </roma:AccessRole>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.foodmart.zip" download>Download Zip File</a>
