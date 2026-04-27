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
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales Fact Query

SalesFactQuery it directly references the physical table `sales_fact_1997`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapagg="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/aggregation" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_sales_fact_1997" table="_table_sales_fact_1997">
    <aggregationTables xsi:type="rolapagg:AggregationName" href="_aggregationname"/>
  </rolapsrc:TableSource>
  <relational:Table xmi:id="_table_sales_fact_1997" name="sales_fact_1997">
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_product_id" name="product_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_time_id" name="time_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_promotion_id" name="promotion_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_sales" name="store_sales"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_cost" name="store_cost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_unit_sales" name="unit_sales"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Inventory Fact Query

InventoryFactQuery it directly references the physical table `inventory_fact_1997`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_inventory_fact_1997" table="_table_inventory_fact_1997"/>
  <relational:Table xmi:id="_table_inventory_fact_1997" name="inventory_fact_1997">
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_warehouse_id" name="warehouse_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_product_id" name="product_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_time_id" name="time_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_store_invoice" name="store_invoice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_supply_time" name="supply_time"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_warehouse_cost" name="warehouse_cost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_warehouse_sales" name="warehouse_sales"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_units_shipped" name="units_shipped"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_units_ordered" name="units_ordered"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Query

StoreQuery it directly references the physical table `store`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
  <relational:Table xmi:id="_table_store" name="store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Query

CustomerQuery it directly references the physical table `customer`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Query

ProductQuery it directly references the physical table `product`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <relational:Table xmi:id="_table_product" name="product">
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_id" name="product_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_name" name="product_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_brand_name" name="brand_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_family" name="product_family"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_department" name="product_department"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_category" name="product_category"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_subcategory" name="product_subcategory"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Query

WarehouseQuery it directly references the physical table `warehouse`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_warehouse" table="_table_warehouse"/>
  <relational:Table xmi:id="_table_warehouse" name="warehouse">
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_id" name="warehouse_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_name" name="warehouse_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_city" name="warehouse_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_state_province" name="warehouse_state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_country" name="warehouse_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_stores_id" name="stores_id"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotion Query

PromotionQuery it directly references the physical table `promotion`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_promotion" table="_table_promotion"/>
  <relational:Table xmi:id="_table_promotion" name="promotion">
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_id" name="promotion_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_name" name="promotion_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_media_type" name="media_type"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Query

EmployeeQuery it directly references the physical table `employee`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
  <relational:Table xmi:id="_table_employee" name="employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_first_name" name="first_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_last_name" name="last_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_full_name" name="full_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_management_role" name="management_role"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salary" name="salary"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_education_level" name="education_level"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Departament Query

DepartmentQuery it directly references the physical table `department`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_department" table="_table_department"/>
  <relational:Table xmi:id="_table_department" name="department">
    <feature xsi:type="relational:Column" xmi:id="_column_department_department_id" name="department_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_department_department_description" name="department_description"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Query

PositionQuery it directly references the physical table `position`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_position" table="_table_position"/>
  <relational:Table xmi:id="_table_position" name="position">
    <feature xsi:type="relational:Column" xmi:id="_column_position_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_pay_type" name="pay_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_min_scale" name="min_scale"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_max_scale" name="max_scale"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Salary Query

SalaryQuery it directly references the physical table `salary`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_salary" table="_table_salary"/>
  <relational:Table xmi:id="_table_salary" name="salary">
    <feature xsi:type="relational:Column" xmi:id="_column_salary_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_department_id" name="department_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_currency_id" name="currency_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_pay_date" name="pay_date"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_salary_paid" name="salary_paid"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_overtime_paid" name="overtime_paid"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_vacation_accrued" name="vacation_accrued"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_vacation_used" name="vacation_used"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Closure Query

EmployeeClosureQuery it directly references the physical table `employee_closure`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_employee_closure" table="_table_employee_closure"/>
  <relational:Table xmi:id="_table_employee_closure" name="employee_closure">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_closure_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_closure_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_closure_distance" name="distance"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Class Query

ProductClassQuery it directly references the physical table `product_class`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_product_class" table="_table_product_class"/>
  <relational:Table xmi:id="_table_product_class" name="product_class">
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_class_id" name="product_class_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_subcategory" name="product_subcategory"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_category" name="product_category"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_department" name="product_department"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_family" name="product_family"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Time By Day Query

TimeByDayQuery it directly references the physical table `time_by_day`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_time_by_day" table="_table_time_by_day"/>
  <relational:Table xmi:id="_table_time_by_day" name="time_by_day">
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_time_id" name="time_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_date" name="the_date"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_day" name="the_day"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_month" name="the_month"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_year" name="the_year"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_day_of_month" name="day_of_month"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_week_of_year" name="week_of_year"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_month_of_year" name="month_of_year"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_quarter" name="quarter"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_fiscal_period" name="fiscal_period"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Ragged Query

StoreRaggedQuery it directly references the physical table `store_ragged`.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_store_ragged" table="_table_store_ragged"/>
  <relational:Table xmi:id="_table_store_ragged" name="store_ragged">
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_region_id" name="region_id"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales Cube

The Sales cube is the sales_fact_1997 table containing detailed sales transactions.
It includes measures for Unit Sales, Store Sales and Store Cost, Sales Count, Promotion Sales along with dimensions for Stores,
Store Size, Store Type, Time, Products, Promotion Media, Promotions, Customers, Education Level, Gender, Marital Status, Yearly Income.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapagg="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/aggregation" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_sales" name="Sales" query="_tablesource_sales_fact_1997"/>
  <rolapsrc:TableSource xmi:id="_tablesource_sales_fact_1997" table="_table_sales_fact_1997">
    <aggregationExcludes xmi:id="_aggregationexclude_agg_lc_100_sales_fact_1997" name="agg_lc_100_sales_fact_1997"/>
    <aggregationExcludes xmi:id="_aggregationexclude_agg_lc_10_sales_fact_1997" name="agg_lc_10_sales_fact_1997"/>
    <aggregationExcludes xmi:id="_aggregationexclude_agg_pc_10_sales_fact_1997" name="agg_pc_10_sales_fact_1997"/>
    <aggregationTables xsi:type="rolapagg:AggregationName" href="_aggregationname"/>
  </rolapsrc:TableSource>
  <relational:Table xmi:id="_table_sales_fact_1997" name="sales_fact_1997">
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_product_id" name="product_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_time_id" name="time_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_promotion_id" name="promotion_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_sales" name="store_sales"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_cost" name="store_cost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_unit_sales" name="unit_sales"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Cube

The Warehouse cube is the inventory_fact_1997 table containing detailed warehouse sales transactions.
It includes measures for Store Invoice, Supply Time, Warehouse Cost, Warehouse Sales, Units Shipped, Units Ordered and Warehouse Profit,
along with dimensions for Store, Store Size in SQFT, Store Type, Time, Product and Warehouse.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_warehouse" name="Warehouse" query="_tablesource_inventory_fact_1997"/>
  <relational:Table xmi:id="_table_inventory_fact_1997" name="inventory_fact_1997">
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_warehouse_id" name="warehouse_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_product_id" name="product_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_time_id" name="time_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_store_invoice" name="store_invoice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_supply_time" name="supply_time"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_warehouse_cost" name="warehouse_cost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_warehouse_sales" name="warehouse_sales"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_units_shipped" name="units_shipped"/>
    <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_units_ordered" name="units_ordered"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_inventory_fact_1997" table="_table_inventory_fact_1997"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Cube

The Store cube is the store table containing detailed store information.
It includes measures for Store Sqft and Grocery Sqft, along with dimensions for Store Type, Store and Has coffee bar.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_store" name="Store" query="_tablesource_store"/>
  <relational:Table xmi:id="_table_store" name="store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## HR Cube

The HR cube is the salary table containing detailed employees information.
It includes measures for Org Salary, Count and Number of Employees, along with dimensions for Time, Store, Pay Type, Store Type,
Position, Departament and Employees.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_hr" name="HR" query="_tablesource_salary"/>
  <relational:Table xmi:id="_table_salary" name="salary">
    <feature xsi:type="relational:Column" xmi:id="_column_salary_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_department_id" name="department_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_currency_id" name="currency_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_pay_date" name="pay_date"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_salary_paid" name="salary_paid"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_overtime_paid" name="overtime_paid"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_vacation_accrued" name="vacation_accrued"/>
    <feature xsi:type="relational:Column" xmi:id="_column_salary_vacation_used" name="vacation_used"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_salary" table="_table_salary"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales Ragged Cube

The Sales Ragged cube is the sales_fact_1997 table containing detailed sales transactions.
It includes measures for Unit Sales, Store Cost, Store Sales, Store Count, CustomerStore Count along with dimensions for Store, Geography, Store Size,
Store Type, and Time, Product, Promotion Media, Promotions, Customers, Education Level, Gender, Status, Yearly Income.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapagg="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/aggregation" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_sales_ragged" name="Sales Ragged" query="_tablesource_sales_fact_1997"/>
  <rolapsrc:TableSource xmi:id="_tablesource_sales_fact_1997" table="_table_sales_fact_1997">
    <aggregationExcludes xmi:id="_aggregationexclude_agg_lc_100_sales_fact_1997" name="agg_lc_100_sales_fact_1997"/>
    <aggregationExcludes xmi:id="_aggregationexclude_agg_lc_10_sales_fact_1997" name="agg_lc_10_sales_fact_1997"/>
    <aggregationExcludes xmi:id="_aggregationexclude_agg_pc_10_sales_fact_1997" name="agg_pc_10_sales_fact_1997"/>
    <aggregationTables xsi:type="rolapagg:AggregationName" href="_aggregationname"/>
  </rolapsrc:TableSource>
  <relational:Table xmi:id="_table_sales_fact_1997" name="sales_fact_1997">
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_product_id" name="product_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_time_id" name="time_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_promotion_id" name="promotion_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_sales" name="store_sales"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_cost" name="store_cost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_unit_sales" name="unit_sales"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales2 Cube

The Sales cube is the sales_fact_1997 table containing detailed sales transactions.
It includes measures for Sales Count, Unit Sales, Store Sales, Store Cost, and Customer Count, along with dimensions for Time, Products, and Gender.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapagg="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/aggregation" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_sales_2" name="Sales 2" query="_tablesource_sales_fact_1997"/>
  <rolapsrc:TableSource xmi:id="_tablesource_sales_fact_1997" table="_table_sales_fact_1997">
    <aggregationExcludes xmi:id="_aggregationexclude_agg_lc_100_sales_fact_1997" name="agg_lc_100_sales_fact_1997"/>
    <aggregationExcludes xmi:id="_aggregationexclude_agg_lc_10_sales_fact_1997" name="agg_lc_10_sales_fact_1997"/>
    <aggregationExcludes xmi:id="_aggregationexclude_agg_pc_10_sales_fact_1997" name="agg_pc_10_sales_fact_1997"/>
    <aggregationTables xsi:type="rolapagg:AggregationName" href="_aggregationname"/>
  </rolapsrc:TableSource>
  <relational:Table xmi:id="_table_sales_fact_1997" name="sales_fact_1997">
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_product_id" name="product_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_time_id" name="time_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_promotion_id" name="promotion_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_sales" name="store_sales"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_cost" name="store_cost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_unit_sales" name="unit_sales"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse and Sales Cube

The Warehouse and Sales virual cube detailed sales transactions. This Cube unions Warehouse and Sales cubes.
It includes measures for Sales Count, Store Cost, Store Sales, Unit Sales, Store Invoice,
Supply Time, Units Ordered, Units Shipped, Warehouse Cost, Warehouse Profit, Warehouse Sales with dimensions for Customers, Education Level,
Gender, Material Status, Products, Promotion Media, Promotions, Stores, Time, Yearly Income, Warehouse.


```xml
<rolapcube:VirtualCube xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_virtualcube_warehouse_and_sales" name="Warehouse and Sales">
  <dimensionConnectors href="_dimensionconnector_customers_1"/>
  <dimensionConnectors href="_dimensionconnector_education_level_1"/>
  <dimensionConnectors href="_dimensionconnector_gender_2"/>
  <dimensionConnectors href="_dimensionconnector_marital_status"/>
  <dimensionConnectors href="_dimensionconnector_product"/>
  <dimensionConnectors href="_dimensionconnector_promotion_media"/>
  <dimensionConnectors href="_dimensionconnector_promotions"/>
  <dimensionConnectors href="_dimensionconnector_store_4"/>
  <dimensionConnectors href="_dimensionconnector_time_1"/>
  <dimensionConnectors href="_dimensionconnector_yearly_income_1"/>
  <dimensionConnectors href="_dimensionconnector_warehouse"/>
  <referencedCalculatedMembers href="_calculatedmember_profit_1"/>
  <referencedCalculatedMembers href="_calculatedmember_profit_growth"/>
  <referencedCalculatedMembers href="_calculatedmember_average_warehouse_sale"/>
  <referencedMeasures xsi:type="rolapmeas:CountMeasure" href="_countmeasure_sales_count_2"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_store_cost_2"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_store_sales_1"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_unit_sales_1"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_store_invoice"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_supply_time"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_units_ordered"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_units_shipped"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_warehouse_cost"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_warehouse_profit"/>
  <referencedMeasures xsi:type="rolapmeas:SumMeasure" href="_summeasure_warehouse_sales"/>
</rolapcube:VirtualCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Time Dimension

The Time dimension provides various levels of temporal analysis including year, quarter, month, and day.
This allows for trend analysis and time-based comparisons of sales performance.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:TimeDimension xmi:id="_timedimension_time" name="Time" hierarchies="_explicithierarchy_time_id _explicithierarchy_weekly"/>
  <rolaplev:Level xmi:id="_level_quarter" name="Quarter" column="_column_time_by_day_quarter" type="TimeQuarters"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_weekly" name="Weekly" primaryKey="_column_time_by_day_time_id" query="_tablesource_time_by_day" levels="_level_year _level_week _level_day"/>
  <relational:Table xmi:id="_table_time_by_day" name="time_by_day">
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_time_id" name="time_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_date" name="the_date"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_day" name="the_day"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_month" name="the_month"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_year" name="the_year"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_day_of_month" name="day_of_month"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_week_of_year" name="week_of_year"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_month_of_year" name="month_of_year"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_quarter" name="quarter"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_fiscal_period" name="fiscal_period"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_month" name="Month" column="_column_time_by_day_month_of_year" type="TimeMonths" columnType="Numeric"/>
  <rolapsrc:TableSource xmi:id="_tablesource_time_by_day" table="_table_time_by_day"/>
  <rolaplev:Level xmi:id="_level_day" name="Day" column="_column_time_by_day_day_of_month" type="TimeDays" columnType="Numeric"/>
  <rolaplev:Level xmi:id="_level_week" name="Week" column="_column_time_by_day_week_of_year" type="TimeWeeks" columnType="Numeric"/>
  <rolaplev:Level xmi:id="_level_year" name="Year" column="_column_time_by_day_the_year" type="TimeYears" columnType="Numeric" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_time_id" hasAll="false" primaryKey="_column_time_by_day_time_id" query="_tablesource_time_by_day" levels="_level_year _level_quarter _level_month"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Time Dimension

The Time dimension provides various levels of temporal analysis including year, quarter, month, and day.
This allows for trend analysis and time-based comparisons of sales performance.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:TimeDimension xmi:id="_timedimension_time" name="Time" hierarchies="_explicithierarchy_the_date"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_the_date" hasAll="false" primaryKey="_column_time_by_day_the_date" query="_tablesource_time_by_day" levels="_level_year _level_quarter _level_month"/>
  <rolaplev:Level xmi:id="_level_quarter" name="Quarter" column="_column_time_by_day_quarter" type="TimeQuarters"/>
  <rolaplev:Level xmi:id="_level_month" name="Month" column="_column_time_by_day_month_of_year" type="TimeMonths" nameColumn="_column_time_by_day_the_month" columnType="Numeric"/>
  <relational:Table xmi:id="_table_time_by_day" name="time_by_day">
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_time_id" name="time_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_date" name="the_date"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_day" name="the_day"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_month" name="the_month"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_year" name="the_year"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_day_of_month" name="day_of_month"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_week_of_year" name="week_of_year"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_month_of_year" name="month_of_year"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_quarter" name="quarter"/>
    <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_fiscal_period" name="fiscal_period"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_time_by_day" table="_table_time_by_day"/>
  <rolaplev:Level xmi:id="_level_year" name="Year" column="_column_time_by_day_the_year" type="TimeYears" columnType="Numeric" uniqueMembers="true"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Dimension

The Store dimension contains information about retail locations including geographic hierarchy
(country, state, city) and store-specific attributes like store type and size.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_store" name="Store" hierarchies="_explicithierarchy_store_id"/>
  <rolaplev:Level xmi:id="_level_store_state" name="Store State" column="_column_store_store_state" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_store_name" name="Store Name" column="_column_store_store_name" uniqueMembers="true">
    <memberProperties xmi:id="_memberproperty_store_type" name="Store Type" column="_column_store_store_type"/>
    <memberProperties xmi:id="_memberproperty_store_manager" name="Store Manager" column="_column_store_store_manager"/>
    <memberProperties xmi:id="_memberproperty_store_sqft" name="Store Sqft" column="_column_store_store_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_grocery_sqft" name="Grocery Sqft" column="_column_store_grocery_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_frozen_sqft" name="Frozen Sqft" column="_column_store_frozen_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_meat_sqft" name="Meat Sqft" column="_column_store_meat_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_has_coffee_bar" name="Has coffee bar" column="_column_store_coffee_bar" propertyType="Boolean"/>
    <memberProperties xmi:id="_memberproperty_street_address" name="Street address" column="_column_store_store_street_address" propertyType="String"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_store_country" name="Store Country" column="_column_store_store_country" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_store" name="store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" primaryKey="_column_store_store_id" query="_tablesource_store" levels="_level_store_country _level_store_state _level_store_city _level_store_name"/>
  <rolaplev:Level xmi:id="_level_store_city" name="Store City" column="_column_store_store_city"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Dimension

The Store dimension contains information about retail locations including geographic hierarchy
(country, state, city) and store-specific attributes like store type and size.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_store" name="Store" hierarchies="_explicithierarchy_store_id"/>
  <relational:Table xmi:id="_table_store_ragged" name="store_ragged">
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_region_id" name="region_id"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_store_state" name="Store State" column="_column_store_ragged_store_state" hideMemberIf="IfParentsName" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_store_name" name="Store Name" column="_column_store_ragged_store_name" uniqueMembers="true">
    <memberProperties xmi:id="_memberproperty_store_type" name="Store Type" column="_column_store_ragged_store_type"/>
    <memberProperties xmi:id="_memberproperty_store_manager" name="Store Manager" column="_column_store_ragged_store_manager"/>
    <memberProperties xmi:id="_memberproperty_store_sqft" name="Store Sqft" column="_column_store_ragged_store_sqft"/>
    <memberProperties xmi:id="_memberproperty_grocery_sqft" name="Grocery Sqft" column="_column_store_ragged_grocery_sqft"/>
    <memberProperties xmi:id="_memberproperty_frozen_sqft" name="Frozen Sqft" column="_column_store_ragged_frozen_sqft"/>
    <memberProperties xmi:id="_memberproperty_meat_sqft" name="Meat Sqft" column="_column_store_ragged_meat_sqft"/>
    <memberProperties xmi:id="_memberproperty_has_coffee_bar" name="Has coffee bar" column="_column_store_ragged_coffee_bar"/>
    <memberProperties xmi:id="_memberproperty_street_address" name="Street address" column="_column_store_ragged_store_street_address"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_store_country" name="Store Country" column="_column_store_ragged_store_country"/>
  <rolaplev:Level xmi:id="_level_store_city" name="Store City" column="_column_store_ragged_store_city" hideMemberIf="IfBlankName"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store_ragged" table="_table_store_ragged"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" primaryKey="_column_store_ragged_store_id" query="_tablesource_store_ragged" levels="_level_store_country _level_store_state _level_store_city _level_store_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Dimension

The Store dimension contains information about retail locations including geographic hierarchy
(country, state, city) and store-specific attributes like store type and size.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_store" name="Store" hierarchies="_explicithierarchy_employee_id"/>
  <rolaplev:Level xmi:id="_level_store_name" name="Store Name" column="_column_store_store_name" uniqueMembers="true">
    <memberProperties xmi:id="_memberproperty_store_type" name="Store Type" column="_column_store_store_type"/>
    <memberProperties xmi:id="_memberproperty_store_manager" name="Store Manager" column="_column_store_store_manager"/>
    <memberProperties xmi:id="_memberproperty_store_sqft" name="Store Sqft" column="_column_store_store_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_grocery_sqft" name="Grocery Sqft" column="_column_store_grocery_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_frozen_sqft" name="Frozen Sqft" column="_column_store_frozen_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_meat_sqft" name="Meat Sqft" column="_column_store_meat_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_has_coffee_bar" name="Has coffee bar" column="_column_store_coffee_bar" propertyType="Boolean"/>
    <memberProperties xmi:id="_memberproperty_street_address" name="Street address" column="_column_store_store_street_address" propertyType="String"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_store_city" name="Store City" column="_column_store_store_city"/>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
  <rolaplev:Level xmi:id="_level_store_state" name="Store State" column="_column_store_store_state" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_employee" name="employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_first_name" name="first_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_last_name" name="last_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_full_name" name="full_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_management_role" name="management_role"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salary" name="salary"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_education_level" name="education_level"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_store_country" name="Store Country" column="_column_store_store_country" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_store" name="store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_store_id" key="_column_employee_store_id" query="_tablesource_employee"/>
    <right xmi:id="_joinedqueryelement_store_id_1" key="_column_store_store_id" query="_tablesource_store"/>
  </rolapsrc:JoinSource>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_employee_id" primaryKey="_column_employee_employee_id" query="_joinsource" levels="_level_store_country _level_store_state _level_store_city _level_store_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Pay Type Dimension

The Pay Type dimension show pay type into a hierarchy of pay type.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_pay_type" name="Pay Type" hierarchies="_explicithierarchy_employee_id"/>
  <relational:Table xmi:id="_table_position" name="position">
    <feature xsi:type="relational:Column" xmi:id="_column_position_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_pay_type" name="pay_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_min_scale" name="min_scale"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_max_scale" name="max_scale"/>
  </relational:Table>
  <relational:Table xmi:id="_table_employee" name="employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_first_name" name="first_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_last_name" name="last_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_full_name" name="full_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_management_role" name="management_role"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salary" name="salary"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_education_level" name="education_level"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_position_id" key="_column_employee_position_id" query="_tablesource_employee"/>
    <right xmi:id="_joinedqueryelement_position_id_1" key="_column_position_position_id" query="_tablesource_position"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_pay_type" name="Pay Type" column="_column_position_pay_type" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_position" table="_table_position"/>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_employee_id" primaryKey="_column_employee_employee_id" query="_joinsource" levels="_level_pay_type"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Dimension

The Store Type dimension show store type into a hierarchy of store type.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_type" name="Store Type" hierarchies="_explicithierarchy_employee_id"/>
  <relational:Table xmi:id="_table_employee" name="employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_first_name" name="first_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_last_name" name="last_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_full_name" name="full_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_management_role" name="management_role"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salary" name="salary"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_education_level" name="education_level"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_store_type" name="Store Type" column="_column_store_store_type" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_store" name="store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_store_id" key="_column_employee_store_id" query="_tablesource_employee"/>
    <right xmi:id="_joinedqueryelement_store_id_1" key="_column_store_store_id" query="_tablesource_store"/>
  </rolapsrc:JoinSource>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_employee_id" primaryKey="_column_employee_employee_id" query="_joinsource" levels="_level_store_type"/>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Dimension

The Store Type dimension show store type into a hierarchy of store type.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_type" name="Store Type" hierarchies="_explicithierarchy_store_id"/>
  <relational:Table xmi:id="_table_store" name="store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" primaryKey="_column_store_store_id" query="_tablesource_store" levels="_level_store_type"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
  <rolaplev:Level xmi:id="_level_store_type" name="Store Type" column="_column_store_store_type" uniqueMembers="true"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Dimension

The Store Type dimension show store type into a hierarchy of store type.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level">
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_type" name="Store Type" hierarchies="_explicithierarchy_store_id"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" levels="_level_store_type">
    <primaryKey href="_column_store_store_id"/>
  </rolaphier:ExplicitHierarchy>
  <rolaplev:Level xmi:id="_level_store_type" name="Store Type" uniqueMembers="true">
    <column href="_column_store_store_type"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Dimension

The Store Type dimension show store type into a hierarchy of store type.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_type" name="Store Type" hierarchies="_explicithierarchy_store_id"/>
  <relational:Table xmi:id="_table_store" name="store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" primaryKey="_column_store_store_id" query="_tablesource_store" levels="_level_store_type"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
  <rolaplev:Level xmi:id="_level_store_type" name="Store Type" column="_column_store_store_type" uniqueMembers="true"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customers Dimension

The Customer dimension includes demographic information about customers such as
gender, marital status, education level, and geographic location for customer analysis.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_customers" name="Customers" hierarchies="_explicithierarchy_customer_id"/>
  <rolaplev:Level xmi:id="_level_name" name="Name" column="_column_customer_customer_id" columnType="Numeric" uniqueMembers="true">
    <memberProperties xmi:id="_memberproperty_gender" name="Gender" column="_column_customer_gender"/>
    <memberProperties xmi:id="_memberproperty_marital_status" name="Marital Status" column="_column_customer_marital_status"/>
    <memberProperties xmi:id="_memberproperty_education" name="Education" column="_column_customer_education"/>
    <memberProperties xmi:id="_memberproperty_yearly_income" name="Yearly Income" column="_column_customer_yearly_income"/>
    <nameColumn href="_expressioncolumn"/>
    <ordinalColumns xmi:id="_orderedcolumn">
      <column href="_expressioncolumn_3"/>
    </ordinalColumns>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_customer_country" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_state_province" name="State Province" column="_column_customer_state_province" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id" allMemberName="All Customers" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_country _level_state_province _level_city _level_name"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_customer_city"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Dimension

The Product dimension organizes products into a hierarchy including product family,
department, category, subcategory, brand, and individual product details.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_product_id"/>
  <rolaplev:Level xmi:id="_level_product_department" name="Product Department" column="_column_product_class_product_department"/>
  <rolaplev:Level xmi:id="_level_product_family" name="Product Family" column="_column_product_class_product_family"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_product_class_id" query="_tablesource_product">
      <key href="_column_product_class_id"/>
    </left>
    <right xmi:id="_joinedqueryelement_product_class_id_1" key="_column_product_class_product_class_id" query="_tablesource_product_class"/>
  </rolapsrc:JoinSource>
  <relational:Table xmi:id="_table_product" name="product">
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_id" name="product_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_name" name="product_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_brand_name" name="brand_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_family" name="product_family"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_department" name="product_department"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_category" name="product_category"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_subcategory" name="product_subcategory"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_product_class" table="_table_product_class"/>
  <rolaplev:Level xmi:id="_level_product_subcategory" name="Product Subcategory" column="_column_product_class_product_subcategory"/>
  <rolaplev:Level xmi:id="_level_product_category" name="Product Category" column="_column_product_class_product_category"/>
  <rolaplev:Level xmi:id="_level_product_name" name="Product Name" column="_column_product_product_name" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_brand_name" name="Brand Name" column="_column_product_brand_name"/>
  <relational:Table xmi:id="_table_product_class" name="product_class">
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_class_id" name="product_class_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_subcategory" name="product_subcategory"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_category" name="product_category"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_department" name="product_department"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_family" name="product_family"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product_id" primaryKey="_column_product_product_id" query="_joinsource" levels="_level_product_family _level_product_department _level_product_category _level_product_subcategory _level_brand_name _level_product_name"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Size Dimension

The Store Size dimension show store size into a hierarchy of store size.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_size_in_sqft" name="Store Size in SQFT" hierarchies="_explicithierarchy_store_id"/>
  <rolaplev:Level xmi:id="_level_store_sqft" name="Store Sqft" column="_column_store_store_sqft" columnType="Numeric" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_store" name="store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" primaryKey="_column_store_store_id" query="_tablesource_store" levels="_level_store_sqft"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotions Dimension

The Promotions dimension show promotions into a promotions hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_promotions" name="Promotions" hierarchies="_explicithierarchy_promotion_id"/>
  <relational:Table xmi:id="_table_promotion" name="promotion">
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_id" name="promotion_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_name" name="promotion_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_media_type" name="media_type"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_promotion_id" allMemberName="All Promotions" defaultMember="All Promotions" primaryKey="_column_promotion_promotion_id" query="_tablesource_promotion" levels="_level_promotion_name"/>
  <rolaplev:Level xmi:id="_level_promotion_name" name="Promotion Name" column="_column_promotion_promotion_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_promotion" table="_table_promotion"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Education Level Dimension

The Education Level show education level of customer.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_education_level" name="Education Level" hierarchies="_explicithierarchy_customer_id"/>
  <rolaplev:Level xmi:id="_level_education_level" name="Education Level" column="_column_customer_education" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_education_level"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Gender Dimension

The Gender dimension  show gender type of customer.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_gender" name="Gender" hierarchies="_explicithierarchy_customer_id"/>
  <rolaplev:Level xmi:id="_level_gender" name="Gender" column="_column_customer_gender" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id" allMemberName="All Gender" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_gender"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Marital Status Dimension

The Marital Status dimension show marital status of customer.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_marital_status" name="Marital Status" hierarchies="_explicithierarchy_customer_id"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id" allMemberName="All Marital Status" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_marital_status"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_marital_status" name="Marital Status" approxRowCount="111" column="_column_customer_marital_status" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Yearly Income Dimension

The YearlyIncome dimension show yearly income of customer.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_yearly_income" name="Yearly Income" hierarchies="_explicithierarchy_customer_id"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_yearly_income"/>
  <rolaplev:Level xmi:id="_level_yearly_income" name="Yearly Income" column="_column_customer_yearly_income" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Has coffee bar Dimension

The HasCoffeeBar dimension show coffee bar on store.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level">
  <rolapdim:StandardDimension xmi:id="_standarddimension_has_coffee_bar" name="Has coffee bar" hierarchies="_explicithierarchy_store_id"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" levels="_level_has_coffee_bar">
    <primaryKey href="_column_store_store_id"/>
  </rolaphier:ExplicitHierarchy>
  <rolaplev:Level xmi:id="_level_has_coffee_bar" name="Has coffee bar" columnType="Boolean" uniqueMembers="true">
    <column href="_column_store_coffee_bar"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Geography Dimension

The Geography dimension show geography on store (city, state, country).


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_geography" name="Geography" hierarchies="_explicithierarchy_store_id"/>
  <relational:Table xmi:id="_table_store_ragged" name="store_ragged">
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_region_id" name="region_id"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_state" name="State" column="_column_store_ragged_store_state" hideMemberIf="IfParentsName" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_store_ragged_store_city" hideMemberIf="IfBlankName"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store_ragged" table="_table_store_ragged"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_store_ragged_store_country" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" primaryKey="_column_store_ragged_store_id" query="_tablesource_store_ragged" levels="_level_country _level_state _level_city"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Dimension

The Warehouse dimension show information of warehouse (city, state, country, name).


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_warehouse" name="Warehouse" hierarchies="_explicithierarchy_warehouse_id"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_warehouse_warehouse_city"/>
  <rolaplev:Level xmi:id="_level_warehouse_name" name="Warehouse Name" column="_column_warehouse_warehouse_name" uniqueMembers="true"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_warehouse_id" allMemberName="All Warehouses" primaryKey="_column_warehouse_warehouse_id" query="_tablesource_warehouse" levels="_level_country _level_state_province _level_city _level_warehouse_name"/>
  <rolapsrc:TableSource xmi:id="_tablesource_warehouse" table="_table_warehouse"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_warehouse_warehouse_country"/>
  <relational:Table xmi:id="_table_warehouse" name="warehouse">
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_id" name="warehouse_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_name" name="warehouse_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_city" name="warehouse_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_state_province" name="warehouse_state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_country" name="warehouse_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_warehouse_stores_id" name="stores_id"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_state_province" name="State Province" column="_column_warehouse_warehouse_state_province"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotion Media Dimension

The Promotion Media dimension show promotion media type into a promotion media hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_promotion_media" name="Promotion Media" hierarchies="_explicithierarchy_promotion_id"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_promotion_id" allMemberName="All Media" primaryKey="_column_promotion_promotion_id" query="_tablesource_promotion" levels="_level_media_type"/>
  <relational:Table xmi:id="_table_promotion" name="promotion">
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_id" name="promotion_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_name" name="promotion_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_media_type" name="media_type"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_media_type" name="Media Type" column="_column_promotion_media_type" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_promotion" table="_table_promotion"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Dimension

The Employee dimension show employees structure into a employee hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_employee" name="Employee" hierarchies="_parentchildhierarchy_employee_id"/>
  <relational:Table xmi:id="_table_employee" name="employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_first_name" name="first_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_last_name" name="last_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_full_name" name="full_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_management_role" name="management_role"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salary" name="salary"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_education_level" name="education_level"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_employee_id" name="Employee Id" column="_column_employee_employee_id" nameColumn="_column_employee_full_name" columnType="Numeric" uniqueMembers="true">
    <memberProperties xmi:id="_memberproperty_marital_status" name="Marital Status" column="_column_employee_marital_status"/>
    <memberProperties xmi:id="_memberproperty_position_title" name="Position Title" column="_column_employee_position_title"/>
    <memberProperties xmi:id="_memberproperty_gender" name="Gender" column="_column_employee_gender"/>
    <memberProperties xmi:id="_memberproperty_salary" name="Salary" column="_column_employee_salary"/>
    <memberProperties xmi:id="_memberproperty_education_level" name="Education Level" column="_column_employee_education_level"/>
    <memberProperties xmi:id="_memberproperty_management_role" name="Management Role" column="_column_employee_management_role"/>
  </rolaplev:Level>
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_employee_id" allMemberName="All Employees" primaryKey="_column_employee_employee_id" query="_tablesource_employee" nullParentValue="0" parentColumn="_column_employee_supervisor_id" level="_level_employee_id">
    <parentChildLink xmi:id="_parentchildlink" childColumn="_column_employee_closure_employee_id" parentColumn="_column_employee_closure_supervisor_id">
      <table xmi:id="_tablesource_employee_closure" table="_table_employee_closure"/>
    </parentChildLink>
  </rolaphier:ParentChildHierarchy>
  <relational:Table xmi:id="_table_employee_closure" name="employee_closure">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_closure_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_closure_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_closure_distance" name="distance"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Department Dimension

The Department dimension show department name into a department hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_department" name="Department" hierarchies="_explicithierarchy_department"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_department" name="Department" primaryKey="_column_department_department_id" query="_tablesource_department" levels="_level_department_description"/>
  <rolaplev:Level xmi:id="_level_department_description" name="Department Description" column="_column_department_department_id" columnType="Numeric"/>
  <relational:Table xmi:id="_table_department" name="department">
    <feature xsi:type="relational:Column" xmi:id="_column_department_department_id" name="department_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_department_department_description" name="department_description"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_department" table="_table_department"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Dimension

The Position dimension show employees role and position into a position hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_position" name="Position" hierarchies="_explicithierarchy_position"/>
  <relational:Table xmi:id="_table_position" name="position">
    <feature xsi:type="relational:Column" xmi:id="_column_position_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_pay_type" name="pay_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_min_scale" name="min_scale"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_max_scale" name="max_scale"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_position" name="Position" allMemberName="All Positions" primaryKey="_column_position_position_id" query="_tablesource_position" levels="_level_position_title"/>
  <rolaplev:Level xmi:id="_level_position_title" name="Position Title" column="_column_position_position_title"/>
  <rolapsrc:TableSource xmi:id="_tablesource_position" table="_table_position"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Dimension

The Position dimension show employees role and position into a position hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_position" name="Position" hierarchies="_explicithierarchy_position"/>
  <rolaplev:Level xmi:id="_level_management_role" name="Management Role" column="_column_employee_management_role"/>
  <relational:Table xmi:id="_table_employee" name="employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_first_name" name="first_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_last_name" name="last_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_full_name" name="full_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_management_role" name="management_role"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salary" name="salary"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_education_level" name="education_level"/>
  </relational:Table>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_position" name="Position" allMemberName="All Position" primaryKey="_column_employee_employee_id" query="_tablesource_employee" levels="_level_management_role _level_position_title"/>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
  <rolaplev:Level xmi:id="_level_position_title" name="Position Title" column="_column_employee_position_title">
    <ordinalColumns xmi:id="_orderedcolumn_position_id" column="_column_employee_position_id"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Pay Type Hierarchy

The Pay Type provides pay type analysis for employee.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_employee_id" primaryKey="_column_employee_employee_id" query="_joinsource" levels="_level_pay_type"/>
  <relational:Table xmi:id="_table_position" name="position">
    <feature xsi:type="relational:Column" xmi:id="_column_position_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_pay_type" name="pay_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_min_scale" name="min_scale"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_max_scale" name="max_scale"/>
  </relational:Table>
  <relational:Table xmi:id="_table_employee" name="employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_first_name" name="first_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_last_name" name="last_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_full_name" name="full_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_management_role" name="management_role"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salary" name="salary"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_education_level" name="education_level"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_position_id" key="_column_employee_position_id" query="_tablesource_employee"/>
    <right xmi:id="_joinedqueryelement_position_id_1" key="_column_position_position_id" query="_tablesource_position"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_pay_type" name="Pay Type" column="_column_position_pay_type" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_position" table="_table_position"/>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Hierarchy

The Store Type provides store type analysis for store.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_employee_id" primaryKey="_column_employee_employee_id" query="_joinsource" levels="_level_store_type"/>
  <relational:Table xmi:id="_table_employee" name="employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_first_name" name="first_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_last_name" name="last_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_full_name" name="full_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_management_role" name="management_role"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salary" name="salary"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_education_level" name="education_level"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_store_type" name="Store Type" column="_column_store_store_type" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_store" name="store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address"/>
  </relational:Table>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_store_id" key="_column_employee_store_id" query="_tablesource_employee"/>
    <right xmi:id="_joinedqueryelement_store_id_1" key="_column_store_store_id" query="_tablesource_store"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Gender Hierarchy

The Gender provides customer analysis by gender identity.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_gender" name="Gender" allMemberName="All Gender" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_gender"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_gender" name="Gender" column="_column_customer_gender"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Size Hierarchy

The Store Size provides store analysis by size.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" primaryKey="_column_store_store_id" query="_tablesource_store" levels="_level_store_sqft"/>
  <rolaplev:Level xmi:id="_level_store_sqft" name="Store Sqft" column="_column_store_store_sqft" columnType="Numeric" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_store" name="store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotions Hierarchy

The Promotions provides sales analysis by promotions.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_promotion_id" allMemberName="All Promotions" defaultMember="All Promotions" primaryKey="_column_promotion_promotion_id" query="_tablesource_promotion" levels="_level_promotion_name"/>
  <relational:Table xmi:id="_table_promotion" name="promotion">
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_id" name="promotion_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_name" name="promotion_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_media_type" name="media_type"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_promotion_name" name="Promotion Name" column="_column_promotion_promotion_name" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_promotion" table="_table_promotion"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Hierarchy

The Store Type provides store analysis by type.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" primaryKey="_column_store_store_id" query="_tablesource_store" levels="_level_store_type"/>
  <relational:Table xmi:id="_table_store" name="store">
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number"/>
    <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
  <rolaplev:Level xmi:id="_level_store_type" name="Store Type" column="_column_store_store_type" uniqueMembers="true"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type Hierarchy

The Store Type provides store analysis by type.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" levels="_level_store_type">
    <primaryKey href="_column_store_store_id"/>
  </rolaphier:ExplicitHierarchy>
  <rolaplev:Level xmi:id="_level_store_type" name="Store Type" uniqueMembers="true">
    <column href="_column_store_store_type"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Education Level

The Education Level provides customer analysis by education level.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_education_level"/>
  <rolaplev:Level xmi:id="_level_education_level" name="Education Level" column="_column_customer_education" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Gender Hierarchy

The Gender provides customer analysis by gender identity.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id" allMemberName="All Gender" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_gender"/>
  <rolaplev:Level xmi:id="_level_gender" name="Gender" column="_column_customer_gender" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Marital Status Hierarchy

The Marital Status provides customer analysis by marital status.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id" allMemberName="All Marital Status" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_marital_status"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_marital_status" name="Marital Status" approxRowCount="111" column="_column_customer_marital_status" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Marital Status Hierarchy

The Marital Status provides customer analysis by marital status.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id" allMemberName="All Marital Status" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_marital_status"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_marital_status" name="Marital Status" approxRowCount="111" column="_column_customer_marital_status" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Yerly Income Hierarchy

The Yerly Income provides customer analysis by yerly income.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_yearly_income"/>
  <rolaplev:Level xmi:id="_level_yearly_income" name="Yearly Income" column="_column_customer_yearly_income" uniqueMembers="true"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Has Coffe Bar Hierarchy

The Has Coffe Bar provides store analysis by availability сoffe bar.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" levels="_level_has_coffee_bar">
    <primaryKey href="_column_store_store_id"/>
  </rolaphier:ExplicitHierarchy>
  <rolaplev:Level xmi:id="_level_has_coffee_bar" name="Has coffee bar" columnType="Boolean" uniqueMembers="true">
    <column href="_column_store_coffee_bar"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
### Promotion Media Hierarchy

The Promotion Media provides sales analysis by promotion media type.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_promotion_id" allMemberName="All Media" primaryKey="_column_promotion_promotion_id" query="_tablesource_promotion" levels="_level_media_type"/>
  <relational:Table xmi:id="_table_promotion" name="promotion">
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_id" name="promotion_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_name" name="promotion_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_promotion_media_type" name="media_type"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_media_type" name="Media Type" column="_column_promotion_media_type" uniqueMembers="true"/>
  <rolapsrc:TableSource xmi:id="_tablesource_promotion" table="_table_promotion"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Hierarchy

The Employee provides organisation structure analysis by employees.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_employee_id" allMemberName="All Employees" primaryKey="_column_employee_employee_id" query="_tablesource_employee" nullParentValue="0" parentColumn="_column_employee_supervisor_id" level="_level_employee_id"/>
  <relational:Table xmi:id="_table_employee" name="employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_first_name" name="first_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_last_name" name="last_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_full_name" name="full_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_management_role" name="management_role"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salary" name="salary"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_education_level" name="education_level"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_employee_id" name="Employee Id" column="_column_employee_employee_id" nameColumn="_column_employee_full_name" columnType="Numeric" uniqueMembers="true">
    <memberProperties xmi:id="_memberproperty_marital_status" name="Marital Status" column="_column_employee_marital_status"/>
    <memberProperties xmi:id="_memberproperty_position_title" name="Position Title" column="_column_employee_position_title"/>
    <memberProperties xmi:id="_memberproperty_gender" name="Gender" column="_column_employee_gender"/>
    <memberProperties xmi:id="_memberproperty_salary" name="Salary" column="_column_employee_salary"/>
    <memberProperties xmi:id="_memberproperty_education_level" name="Education Level" column="_column_employee_education_level"/>
    <memberProperties xmi:id="_memberproperty_management_role" name="Management Role" column="_column_employee_management_role"/>
  </rolaplev:Level>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Department Hierarchy

The Department provides sales analysis by departoment of employees.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_department" name="Department" primaryKey="_column_department_department_id" query="_tablesource_department" levels="_level_department_description"/>
  <rolaplev:Level xmi:id="_level_department_description" name="Department Description" column="_column_department_department_id" columnType="Numeric"/>
  <relational:Table xmi:id="_table_department" name="department">
    <feature xsi:type="relational:Column" xmi:id="_column_department_department_id" name="department_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_department_department_description" name="department_description"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_department" table="_table_department"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Hierarchy

The Position provides employee analysis by role and position.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_position" name="Position" allMemberName="All Positions" primaryKey="_column_position_position_id" query="_tablesource_position" levels="_level_position_title"/>
  <relational:Table xmi:id="_table_position" name="position">
    <feature xsi:type="relational:Column" xmi:id="_column_position_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_pay_type" name="pay_type"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_min_scale" name="min_scale"/>
    <feature xsi:type="relational:Column" xmi:id="_column_position_max_scale" name="max_scale"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_position_title" name="Position Title" column="_column_position_position_title"/>
  <rolapsrc:TableSource xmi:id="_tablesource_position" table="_table_position"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Hierarchy

The Position provides employee analysis by role and position.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_position" name="Position" allMemberName="All Position" primaryKey="_column_employee_employee_id" query="_tablesource_employee" levels="_level_management_role _level_position_title"/>
  <rolaplev:Level xmi:id="_level_management_role" name="Management Role" column="_column_employee_management_role"/>
  <relational:Table xmi:id="_table_employee" name="employee">
    <feature xsi:type="relational:Column" xmi:id="_column_employee_employee_id" name="employee_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_first_name" name="first_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_last_name" name="last_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_full_name" name="full_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_management_role" name="management_role"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_id" name="position_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_position_title" name="position_title"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_store_id" name="store_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_supervisor_id" name="supervisor_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_salary" name="salary"/>
    <feature xsi:type="relational:Column" xmi:id="_column_employee_education_level" name="education_level"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
  <rolaplev:Level xmi:id="_level_position_title" name="Position Title" column="_column_employee_position_title">
    <ordinalColumns xmi:id="_orderedcolumn_position_id" column="_column_employee_position_id"/>
  </rolaplev:Level>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customers Education Hierarchy

The Customers Education provides customer analysis by education level.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customers_education" name="Customers Education" allMemberName="All Education Levels" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_education_level"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_education_level" name="Education Level" column="_column_customer_education"/>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customers Marital Status

The Customers Marital Status provides customer analysis by marital status.

```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customers_marital_status" name="Customers Marital Status" allMemberName="All Marital Statuses" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_marital_status"/>
  <rolaplev:Level xmi:id="_level_marital_status" name="Marital Status" column="_column_customer_marital_status"/>
  <relational:Table xmi:id="_table_customer" name="customer">
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children"/>
    <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Year Level

Year level represents year for sales analysis.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_year" name="Year" type="TimeYears" columnType="Numeric" uniqueMembers="true">
  <column href="_column_time_by_day_the_year_1"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Quarter Level

Quarter level represents quarter for sales analysis.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_quarter" name="Quarter" type="TimeQuarters">
  <column href="_column_time_by_day_quarter_1"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Month Level

Month level represents month for sales analysis.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_month" name="Month" type="TimeMonths" columnType="Numeric">
  <column href="_column_time_by_day_month_of_year"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Month Level

Month level represents month for sales analysis.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_month" name="Month" type="TimeMonths" columnType="Numeric">
  <column href="_column_time_by_day_month_of_year"/>
  <nameColumn href="_column_time_by_day_the_month_1"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Week Level

Week level represents week for sales analysis.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_week" name="Week" type="TimeWeeks" columnType="Numeric">
  <column href="_column_time_by_day_week_of_year"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Day Level

Day level represents date for sales analysis.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_day" name="Day" type="TimeDays" columnType="Numeric">
  <column href="_column_time_by_day_day_of_month"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Country Level

Store Country level represents country for store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_store_country" name="Store Country" uniqueMembers="true">
  <column href="_column_store_store_country"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store State Level

Store State level represents state for store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_store_state" name="Store State" uniqueMembers="true">
  <column href="_column_store_store_state"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store State Level

Store City level represents city for store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_store_city" name="Store City">
  <column href="_column_store_store_city"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store State Level

Store Name level represents name of store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_store_name" name="Store Name" uniqueMembers="true">
  <column href="_column_store_store_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Has coffee bar Level

Has coffee bar level represents tag that store has coffe bar.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_has_coffee_bar" name="Has coffee bar" columnType="Boolean" uniqueMembers="true">
  <column href="_column_store_coffee_bar"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Country Level

Customer Country level represents country for customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_country" name="Country">
  <column href="_column_customer_country"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer State Level

Customer State level represents state for customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_state_province" name="State Province">
  <column href="_column_customer_state_province"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer City Level

Customer City level represents city for customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_city" name="City">
  <column href="_column_customer_city"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Name Level

Customer Name level represents name for customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_name" name="Name">
  <column href="_column_customer_fullname"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Gender Level

Customer Gender level represents gender identification for customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_gender" name="Gender">
  <column href="_column_customer_gender"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Family Level

Product Family level represents family of product.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_product_family" name="Product Family">
  <column href="_column_product_class_product_family"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Departament Level

Product Departament level represents departament of product.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_product_family" name="Product Family">
  <column href="_column_product_class_product_family"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Category Level

Product Category level represents category of product.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_product_category" name="Product Category">
  <column href="_column_product_class_product_category"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Category Level

Product Subcategory level represents subcategory of product.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_product_subcategory" name="Product Subcategory">
  <column href="_column_product_class_product_subcategory"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Brand Level

Product Brand level represents brand of product.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_brand_name" name="Brand Name">
  <column href="_column_product_brand_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Name Level

Product Name level represents name of product.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_product_name" name="Product Name" uniqueMembers="true">
  <column href="_column_product_product_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotions Level

Promotions level represents promotions of sales.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_promotion_name" name="Promotion Name" uniqueMembers="true">
  <column href="_column_promotion_promotion_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Sqft

Store Sqft level represents sqft of store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_store_sqft" name="Store Sqft" columnType="Numeric" uniqueMembers="true">
  <column href="_column_store_store_sqft"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type

Store Type level represents type of store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_store_type" name="Store Type" uniqueMembers="true">
  <column href="_column_store_store_type"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Education Level

Education Level level represents education level of customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_education_level" name="Education Level" uniqueMembers="true">
  <column href="_column_customer_education"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Gender

Gender Level level represents gender identification of customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_gender" name="Gender" uniqueMembers="true">
  <column href="_column_customer_gender"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Marital Status

Marital Status level represents marital status of customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_marital_status" name="Marital Status" approxRowCount="111" uniqueMembers="true">
  <column href="_column_customer_marital_status"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Yearly Income

Yearly Income level represents yearly income of customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_yearly_income" name="Yearly Income" uniqueMembers="true">
  <column href="_column_customer_yearly_income"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Pay Type

Pay Type level represents pay type of sales.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_pay_type" name="Pay Type" uniqueMembers="true">
  <column href="_column_position_pay_type"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Type

Store Type level represents type of store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_store_type" name="Store Type" uniqueMembers="true">
  <column href="_column_store_store_type"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Country

Store Country level represents country of store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_store_country" name="Store Country">
  <column href="_column_store_ragged_store_country"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store City

Store City level represents city of store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_store_state" name="Store State" hideMemberIf="IfParentsName" uniqueMembers="true">
  <column href="_column_store_ragged_store_state"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store City

Store City level represents city of store. with property hide member if blank name

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_store_city" name="Store City" hideMemberIf="IfBlankName">
  <column href="_column_store_ragged_store_city"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Name

Store Name level represents name of store. with property hide member if never

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_store_name" name="Store Name" uniqueMembers="true">
  <column href="_column_store_ragged_store_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Country

Country level represents name of customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_country" name="Country" uniqueMembers="true">
  <column href="_column_customer_country"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## State Province

State Province level represents state province of customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_state_province" name="State Province" uniqueMembers="true">
  <column href="_column_customer_state_province"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## City

City level represents city of customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_city" name="City">
  <column href="_column_customer_city"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Country

Country level represents name of warehouse.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_country" name="Country">
  <column href="_column_warehouse_warehouse_country"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## State

State level represents state of warehouse.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_state_province" name="State Province">
  <column href="_column_warehouse_warehouse_state_province"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## City

City level represents city of warehouse.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_city" name="City">
  <column href="_column_warehouse_warehouse_city"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Name

Warehouse Name level represents name of warehouse.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_warehouse_name" name="Warehouse Name" uniqueMembers="true">
  <column href="_column_warehouse_warehouse_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Media Type

Media Type level represents promotions media type of sales.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_media_type" name="Media Type" uniqueMembers="true">
  <column href="_column_promotion_media_type"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Management Role

Management Role level represents role of employee.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_management_role" name="Management Role">
  <column href="_column_employee_management_role"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Title

Position Title level represents position title of employee.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_position_title" name="Position Title">
  <column href="_column_employee_position_title"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position ID

Position ID level represents position ID of employee.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_position_id" name="Position ID">
  <column href="_column_employee_position_id"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Name

Employee Name level represents full name of employee.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_employee_name" name="Employee Name">
  <column href="_column_employee_full_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Name

Employee Name level represents full name of employee.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_employee_name" name="Employee Name">
  <column href="_column_employee_full_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Department Description

Department Description level represents department description of sales.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_department_description" name="Department Description" columnType="Numeric">
  <column href="_column_department_department_id"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Title

Position Title level represents position title of employee.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_position_title" name="Position Title">
  <column href="_column_position_position_title"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Management Role

Management Role level represents management role of employee.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_management_role" name="Management Role">
  <column href="_column_employee_management_role"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Position Title

Position Title level represents position title of employee.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_position_title" name="Position Title">
  <column href="_column_employee_position_title"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Education Level

Education Level level represents education level of customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_education_level" name="Education Level">
  <column href="_column_customer_education"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Marital Status

Marital Status level represents marital status of customer.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_marital_status" name="Marital Status">
  <column href="_column_customer_marital_status"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Employee Id

Employee Id level represents Id of employee.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_employee_id" name="Employee Id" columnType="Numeric" uniqueMembers="true">
  <column href="_column_employee_employee_id"/>
  <nameColumn href="_column_employee_full_name"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Country

Country level represents country of regged store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_country" name="Country" uniqueMembers="true">
  <column href="_column_store_ragged_store_country"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## State

State level represents state of regged store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_state" name="State" hideMemberIf="IfParentsName" uniqueMembers="true">
  <column href="_column_store_ragged_store_state"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## City

City level represents city of regged store.

```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_city" name="City" hideMemberIf="IfBlankName">
  <column href="_column_store_ragged_store_city"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Unit Sales

Measure Unit Sales use sales_fact_1997 table unit_sales column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_unit_sales" name="Unit Sales" formatString="Standard">
  <column href="_column_sales_fact_1997_unit_sales"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Sales

Measure Store Sales use sales_fact_1997 table store_sales column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_store_sales" name="Store Sales" formatString=",###.00">
  <column href="_column_sales_fact_1997_store_sales"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Cost

Measure Store Cost use sales_fact_1997 table store_cost column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_store_cost" name="Store Cost" formatString=",###.00">
  <column href="_column_sales_fact_1997_store_cost"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Count

Measure Store Count use sales_fact_1997 table product_id column with count aggregation.

```xml
<rolapmeas:CountMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_countmeasure_sales_count" name="Sales Count" formatString=",###">
  <column href="_column_sales_fact_1997_product_id"/>
</rolapmeas:CountMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Count

Measure Customer Count use sales_fact_1997 table customer_id column with count aggregation.

```xml
<rolapmeas:CountMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_countmeasure_customer_count" name="Customer Count" formatString=",###" distinct="true">
  <column href="_column_sales_fact_1997_customer_id"/>
</rolapmeas:CountMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Promotion Sales

Measure Promotion Sales use (case when `sales_fact_1997`.`promotion_id` = 0 then 0 else `sales_fact_1997`.`store_sales` end) expression with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_promotion_sales" name="Promotion Sales" formatString=",###.00">
  <column href="_expressioncolumn_1"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Sales

Measure Warehouse Sales use inventory_fact_1997 table warehouse_sales column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_warehouse_sales" name="Warehouse Sales">
  <column href="_column_inventory_fact_1997_warehouse_sales"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Invoice

Measure Store Invoice use inventory_fact_1997 table store_invoice column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_store_invoice" name="Store Invoice">
  <column href="_column_inventory_fact_1997_store_invoice"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Supply Time

Measure Supply Time use inventory_fact_1997 table supply_time column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_supply_time" name="Supply Time">
  <column href="_column_inventory_fact_1997_supply_time"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Profit

Measure Warehouse Profit use warehouse_sales - warehouse_cost expression with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_warehouse_profit" name="Warehouse Profit">
  <column href="_expressioncolumn_2"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Warehouse Cost

Measure Warehouse Cost use inventory_fact_1997 table warehouse_cost column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_warehouse_cost" name="Warehouse Cost">
  <column href="_column_inventory_fact_1997_warehouse_cost"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Units Shipped

Measure Units Shipped use inventory_fact_1997 table units_shipped column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_units_shipped" name="Units Shipped" formatString=".0">
  <column href="_column_inventory_fact_1997_units_shipped"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Units Ordered

Measure Units Ordered use inventory_fact_1997 table units_ordered column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_units_ordered" name="Units Ordered" formatString=".0">
  <column href="_column_inventory_fact_1997_units_ordered"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Sqft

Measure Store Sqft use store table store_sqft column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_store_sqft" name="Store Sqft" formatString=",###">
  <column href="_column_store_store_sqft"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Grocery Sqft

Measure Grocery Sqft use store table grocery_sqft column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_grocery_sqft" name="Grocery Sqft" formatString=",###">
  <column href="_column_store_grocery_sqft"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Org Salary

Measure Warehouse Cost use salary table salary_paid column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_org_salary" name="Org Salary" formatString="Currency">
  <column href="_column_salary_salary_paid"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Count

Measure Count use salary table employee_id column with count aggregation.

```xml
<rolapmeas:CountMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_countmeasure_count" name="Count" formatString=",#">
  <column href="_column_salary_employee_id"/>
</rolapmeas:CountMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Count

Measure Count use salary table employee_id column with count aggregation.

```xml
<rolapmeas:CountMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_countmeasure_number_of_employees" name="Number of Employees" formatString=",#" distinct="true">
  <column href="_column_salary_employee_id"/>
</rolapmeas:CountMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Unit Sales

Measure Unit Sales use sales_fact_1997 table unit_sales column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_unit_sales" name="Unit Sales" formatString="Standard">
  <column href="_column_sales_fact_1997_unit_sales"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Cost

Measure Store Cost use sales_fact_1997 table store_cost column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_store_cost" name="Store Cost" formatString=",###">
  <column href="_column_sales_fact_1997_store_cost"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Sales

Measure Store Sales use sales_fact_1997 table store_sales column with sum aggregation.

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_store_sales" name="Store Sales" formatString=",###">
  <column href="_column_sales_fact_1997_store_sales"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales Count

Measure Sales Count use sales_fact_1997 table product_id column with count aggregation.

```xml
<rolapmeas:CountMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_countmeasure_sales_count" name="Sales Count" formatString=",###">
  <column href="_column_sales_fact_1997_product_id"/>
</rolapmeas:CountMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Count

Measure Customer Count use sales_fact_1997 table customer_id column with count aggregation.

```xml
<rolapmeas:CountMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_countmeasure_customer_count" name="Customer Count" formatString=",###" distinct="true">
  <column href="_column_sales_fact_1997_customer_id"/>
</rolapmeas:CountMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Sales Count

Measure Sales Count use sales_fact_1997 table product_id column with count aggregation. with MEMBER_ORDINAL property

```xml
<rolapmeas:CountMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_countmeasure_sales_count" name="Sales Count">
  <column href="_column_sales_fact_1997_product_id"/>
</rolapmeas:CountMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Unit Sales

Measure Unit Sales use sales_fact_1997 table unit_sales column with sum aggregation. with MEMBER_ORDINAL property

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_unit_sales" name="Unit Sales">
  <column href="_column_sales_fact_1997_unit_sales"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Sales

Measure Store Sales use sales_fact_1997 table store_sales column with sum aggregation. with MEMBER_ORDINAL property

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_store_sales" name="Store Sales">
  <column href="_column_sales_fact_1997_store_sales"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Store Cost

Measure Store Cost use sales_fact_1997 table store_cost column with sum aggregation. with MEMBER_ORDINAL property

```xml
<rolapmeas:SumMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_summeasure_store_cost" name="Store Cost" formatString=",###.00">
  <column href="_column_sales_fact_1997_store_cost"/>
</rolapmeas:SumMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Customer Count

Measure Customer Count use sales_fact_1997 table customer_id column with count aggregation. with MEMBER_ORDINAL property

```xml
<rolapmeas:CountMeasure xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmi:id="_countmeasure_customer_count" name="Customer Count" formatString=",###">
  <column href="_column_sales_fact_1997_customer_id"/>
</rolapmeas:CountMeasure>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Administrator Role

The `Administrator` use CatalogGrant access all;


```xml
<rolapcacc:AccessRole xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmi:id="_accessrole_administrator" name="Administrator"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## California manager Role

The `California manager` use CatalogGrant access none. CatalogGrant has Sales cube access All
with HierarchyGrant Store and Customers access custom with member grants of caligornia
with HierarchyGrant Gender access none


```xml
<rolapcacc:AccessRole xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmi:id="_accessrole_california_manager" name="California manager"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## No HR Cube Role

The `No HR Cube` use CatalogGrant access all except Cube HR. CubeGrant has HR cube access none;


```xml
<rolapcacc:AccessRole xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmi:id="_accessrole_no_hr_cube" name="No HR Cube"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapagg="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/aggregation" xmlns:rolapcacc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/access/common" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_store_store_name _column_employee_full_name _column_store_ragged_store_state _column_agg_c_14_sales_fact_1997_quarter _column_agg_g_ms_pcat_sales_fact_1997_product_department _column_customer_yearly_income _column_store_ragged_store_type _column_warehouse_warehouse_name _column_customer_marital_status _column_product_product_name _column_agg_g_ms_pcat_sales_fact_1997_product_family _column_employee_position_title _column_agg_g_ms_pcat_sales_fact_1997_quarter _column_customer_occupation _column_customer_fullname _column_product_class_product_subcategory _column_store_store_manager _column_store_store_postal_code _column_warehouse_warehouse_city _column_employee_management_role _column_store_ragged_store_country _column_warehouse_warehouse_country _column_product_product_department _column_customer_city _column_time_by_day_the_month _column_store_store_state _column_store_ragged_store_manager _column_customer_lname _column_store_ragged_store_name _column_position_position_title _column_agg_g_ms_pcat_sales_fact_1997_product_category _column_employee_education_level _column_customer_fname _column_product_product_family _column_store_store_street_address _column_customer_country _column_time_by_day_quarter _column_store_ragged_store_city _column_customer_houseowner _column_position_pay_type _column_agg_c_special_sales_fact_1997_time_quarter _column_promotion_media_type _column_employee_first_name _column_time_by_day_fiscal_period _column_time_by_day_the_day _column_product_class_product_family _column_employee_gender _column_customer_address2 _column_product_class_product_department _column_customer_education _column_customer_state_province _column_agg_c_10_sales_fact_1997_quarter _column_time_by_day_the_month_1 _column_employee_marital_status _column_product_class_product_category _column_store_store_type _column_warehouse_warehouse_state_province _column_store_ragged_store_street_address _column_product_product_category _column_customer_gender _column_promotion_promotion_name _column_store_store_street_address_1 _column_customer_member_card _column_department_department_description _column_store_store_city _column_product_brand_name _column_agg_g_ms_pcat_sales_fact_1997_gender _column_store_store_country _column_product_product_subcategory _column_employee_last_name _column_agg_g_ms_pcat_sales_fact_1997_marital_status _column_time_by_day_quarter_1 _expressioncolumn _expressioncolumn_3" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_decimal" name="DECIMAL" structuralFeature="_column_agg_pl_01_sales_fact_1997_fact_count _column_agg_c_special_sales_fact_1997_store_sales_sum _column_agg_c_10_sales_fact_1997_store_cost _column_agg_c_14_sales_fact_1997_unit_sales _column_agg_pl_01_sales_fact_1997_store_cost_sum _column_agg_c_10_sales_fact_1997_unit_sales _column_agg_c_10_sales_fact_1997_store_sales _column_sales_fact_1997_unit_sales _column_agg_g_ms_pcat_sales_fact_1997_store_cost _column_agg_l_05_sales_fact_1997_store_cost _column_sales_fact_1997_store_sales _column_employee_salary _column_agg_l_05_sales_fact_1997_unit_sales _column_agg_l_03_sales_fact_1997_store_cost _column_agg_pl_01_sales_fact_1997_store_sales_sum _column_salary_salary_paid _column_agg_l_05_sales_fact_1997_store_sales _column_agg_c_special_sales_fact_1997_unit_sales_sum _column_agg_g_ms_pcat_sales_fact_1997_unit_sales _column_agg_c_14_sales_fact_1997_store_sales _column_agg_c_special_sales_fact_1997_store_cost_sum _column_sales_fact_1997_store_cost _column_agg_l_03_sales_fact_1997_store_sales _column_agg_g_ms_pcat_sales_fact_1997_store_sales _column_agg_c_14_sales_fact_1997_store_cost _column_agg_l_03_sales_fact_1997_unit_sales _column_agg_pl_01_sales_fact_1997_unit_sales_sum _expressioncolumn_1 _expressioncolumn_2" typeNumber="3" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_agg_l_05_sales_fact_1997_promotion_id _column_sales_fact_1997_store_id _column_agg_c_14_sales_fact_1997_product_id _column_salary_department_id _column_sales_fact_1997_product_id _column_agg_l_03_sales_fact_1997_fact_count _column_agg_g_ms_pcat_sales_fact_1997_customer_count _column_agg_c_10_sales_fact_1997_customer_count _column_time_by_day_time_id _column_agg_l_05_sales_fact_1997_customer_id _column_store_ragged_meat_sqft _column_agg_pl_01_sales_fact_1997_time_id _column_sales_fact_1997_promotion_id _column_agg_c_10_sales_fact_1997_fact_count _column_agg_c_14_sales_fact_1997_store_id _column_store_region_id _column_agg_c_special_sales_fact_1997_promotion_id _column_store_store_number _column_promotion_promotion_id _column_inventory_fact_1997_supply_time _column_store_ragged_frozen_sqft _column_employee_position_id _column_store_grocery_sqft _column_customer_num_cars_owned _column_agg_c_special_sales_fact_1997_customer_id _column_employee_supervisor_id _column_inventory_fact_1997_warehouse_id _column_employee_closure_supervisor_id _column_customer_customer_region_id _column_employee_employee_id _column_agg_l_03_sales_fact_1997_time_id _column_store_ragged_region_id _column_agg_c_special_sales_fact_1997_product_id _column_agg_c_special_sales_fact_1997_store_id _column_agg_l_05_sales_fact_1997_fact_count _column_sales_fact_1997_time_id _column_time_by_day_the_year _column_product_class_product_class_id _column_inventory_fact_1997_store_id _column_product_class_id _column_store_meat_sqft _column_salary_currency_id _column_agg_c_special_sales_fact_1997_fact_count _column_salary_employee_id _column_agg_pl_01_sales_fact_1997_customer_id _column_store_frozen_sqft _column_warehouse_warehouse_id _column_agg_c_14_sales_fact_1997_fact_count _column_time_by_day_time_id_1 _column_employee_closure_distance _column_agg_c_14_sales_fact_1997_customer_id _column_agg_pl_01_sales_fact_1997_product_id _column_store_ragged_store_sqft _column_store_ragged_store_id _column_sales_fact_1997_customer_id _column_employee_closure_employee_id _column_store_store_sqft _column_agg_c_14_sales_fact_1997_promotion_id _column_agg_l_03_sales_fact_1997_customer_id _column_agg_g_ms_pcat_sales_fact_1997_fact_count _column_store_ragged_grocery_sqft _column_customer_customer_id _column_store_store_id _column_warehouse_stores_id _column_product_product_id _column_employee_store_id _column_time_by_day_week_of_year _column_inventory_fact_1997_product_id _column_inventory_fact_1997_time_id _column_agg_l_05_sales_fact_1997_product_id _column_position_position_id _column_agg_l_05_sales_fact_1997_store_id _column_department_department_id _column_customer_num_children_at_home" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_real" name="REAL" structuralFeature="_column_salary_vacation_accrued _column_salary_vacation_used" typeNumber="7" numericPrecisionRadix="2"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_smallint" name="SMALLINT" structuralFeature="_column_time_by_day_month_of_year _column_agg_c_10_sales_fact_1997_month_of_year _column_agg_c_14_sales_fact_1997_the_year _column_agg_c_special_sales_fact_1997_time_year _column_agg_g_ms_pcat_sales_fact_1997_the_year _column_agg_c_14_sales_fact_1997_month_of_year _column_agg_g_ms_pcat_sales_fact_1997_month_of_year _column_agg_c_special_sales_fact_1997_time_month _column_store_ragged_coffee_bar _column_time_by_day_day_of_month _column_time_by_day_the_year_1 _column_customer_total_children _column_agg_c_10_sales_fact_1997_the_year" typeNumber="5"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_numeric" name="NUMERIC" structuralFeature="_column_inventory_fact_1997_warehouse_sales _column_inventory_fact_1997_units_ordered _column_position_max_scale _column_inventory_fact_1997_warehouse_cost _column_salary_overtime_paid _column_inventory_fact_1997_store_invoice _column_inventory_fact_1997_units_shipped _column_position_min_scale" typeNumber="2" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_date" name="DATE" structuralFeature="_column_salary_pay_date _column_time_by_day_the_date" typeNumber="91"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_timestamp" name="TIMESTAMP" structuralFeature="_column_time_by_day_the_date_1" typeNumber="93"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_bigint" name="BIGINT" structuralFeature="_column_customer_account_num" typeNumber="-5"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_boolean" name="BOOLEAN" structuralFeature="_column_store_coffee_bar" typeNumber="16"/>
  <rolapagg:AggregationName xmi:id="_aggregationname" name="_table_agg_c_special_sales_fact_1997">
    <aggregationFactCount xmi:id="_aggregationcolumnname_fact_count" column="_column_agg_c_special_sales_fact_1997_fact_count"/>
    <aggregationForeignKeys xmi:id="_aggregationforeignkey_3" aggregationColumn="_column_agg_c_special_sales_fact_1997_product_id" factColumn="_column_sales_fact_1997_product_id"/>
    <aggregationForeignKeys xmi:id="_aggregationforeignkey_2" aggregationColumn="_column_agg_c_special_sales_fact_1997_customer_id" factColumn="_column_sales_fact_1997_customer_id"/>
    <aggregationForeignKeys xmi:id="_aggregationforeignkey" aggregationColumn="_column_agg_c_special_sales_fact_1997_promotion_id" factColumn="_column_sales_fact_1997_promotion_id"/>
    <aggregationForeignKeys xmi:id="_aggregationforeignkey_1" aggregationColumn="_column_agg_c_special_sales_fact_1997_store_id" factColumn="_column_sales_fact_1997_store_id"/>
    <aggregationMeasures xmi:id="_aggregationmeasure_measures_unit_sales" column="_column_agg_c_special_sales_fact_1997_unit_sales_sum" name="[Measures].[Unit Sales]"/>
    <aggregationMeasures xmi:id="_aggregationmeasure_measures_store_cost" column="_column_agg_c_special_sales_fact_1997_store_cost_sum" name="[Measures].[Store Cost]"/>
    <aggregationMeasures xmi:id="_aggregationmeasure_measures_store_sales" column="_column_agg_c_special_sales_fact_1997_store_sales_sum" name="[Measures].[Store Sales]"/>
    <aggregationLevels xmi:id="_aggregationlevel_time_year" column="_column_agg_c_special_sales_fact_1997_time_year" name="[Time].[Year]"/>
    <aggregationLevels xmi:id="_aggregationlevel_time_quarter" column="_column_agg_c_special_sales_fact_1997_time_quarter" name="[Time].[Quarter]"/>
    <aggregationLevels xmi:id="_aggregationlevel_time_month" column="_column_agg_c_special_sales_fact_1997_time_month" name="[Time].[Month]"/>
  </rolapagg:AggregationName>
  <rolapcat:Catalog xmi:id="_catalog_foodmart" name="FoodMart" cubes="_physicalcube_sales _physicalcube_warehouse _physicalcube_store _physicalcube_hr _physicalcube_sales_ragged _physicalcube_sales_2 _virtualcube_warehouse_and_sales" accessRoles="_accessrole_california_manager _accessrole_no_hr_cube _accessrole_administrator" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_sales_fact_1997" name="sales_fact_1997">
      <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_product_id" name="product_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_time_id" name="time_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_customer_id" name="customer_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_promotion_id" name="promotion_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_id" name="store_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_sales" name="store_sales" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_cost" name="store_cost" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_unit_sales" name="unit_sales" type="_sqlsimpletype_decimal"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_time_by_day_1" name="time_by_day">
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_time_id_1" name="time_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_date" name="the_date" type="_sqlsimpletype_date"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_year" name="the_year" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_quarter" name="quarter" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_month" name="the_month" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_store" name="store">
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_id" name="store_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_name" name="store_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_country" name="store_country" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_state" name="store_state" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_city" name="store_city" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_type" name="store_type" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_region_id" name="region_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address" name="store_street_address" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_manager" name="store_manager" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_sqft" name="store_sqft" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_grocery_sqft" name="grocery_sqft" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_frozen_sqft" name="frozen_sqft" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_meat_sqft" name="meat_sqft" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_coffee_bar" name="coffee_bar" type="_sqlsimpletype_boolean"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_postal_code" name="store_postal_code" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_number" name="store_number" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_store_street_address_1" name="store_street_address" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_customer" name="customer">
      <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_id" name="customer_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_fullname" name="fullname" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_gender" name="gender" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_country" name="country" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_state_province" name="state_province" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_city" name="city" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_marital_status" name="marital_status" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_education" name="education" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_yearly_income" name="yearly_income" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_member_card" name="member_card" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_occupation" name="occupation" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_houseowner" name="houseowner" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_num_children_at_home" name="num_children_at_home" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_lname" name="lname" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_fname" name="fname" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_account_num" name="account_num" type="_sqlsimpletype_bigint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_customer_region_id" name="customer_region_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_num_cars_owned" name="num_cars_owned" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_total_children" name="total_children" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_customer_address2" name="address2" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_product" name="product">
      <feature xsi:type="relational:Column" xmi:id="_column_product_product_id" name="product_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_product_name" name="product_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_brand_name" name="brand_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_product_family" name="product_family" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_product_department" name="product_department" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_product_category" name="product_category" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_product_subcategory" name="product_subcategory" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_warehouse" name="warehouse">
      <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_id" name="warehouse_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_name" name="warehouse_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_city" name="warehouse_city" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_state_province" name="warehouse_state_province" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_warehouse_warehouse_country" name="warehouse_country" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_warehouse_stores_id" name="stores_id" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_inventory_fact_1997" name="inventory_fact_1997">
      <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_warehouse_id" name="warehouse_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_store_id" name="store_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_product_id" name="product_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_time_id" name="time_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_store_invoice" name="store_invoice" type="_sqlsimpletype_numeric"/>
      <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_supply_time" name="supply_time" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_warehouse_cost" name="warehouse_cost" type="_sqlsimpletype_numeric"/>
      <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_warehouse_sales" name="warehouse_sales" type="_sqlsimpletype_numeric"/>
      <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_units_shipped" name="units_shipped" type="_sqlsimpletype_numeric"/>
      <feature xsi:type="relational:Column" xmi:id="_column_inventory_fact_1997_units_ordered" name="units_ordered" type="_sqlsimpletype_numeric"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_promotion" name="promotion">
      <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_id" name="promotion_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_promotion_promotion_name" name="promotion_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_promotion_media_type" name="media_type" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_employee" name="employee">
      <feature xsi:type="relational:Column" xmi:id="_column_employee_employee_id" name="employee_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_first_name" name="first_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_last_name" name="last_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_full_name" name="full_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_management_role" name="management_role" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_position_id" name="position_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_position_title" name="position_title" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_store_id" name="store_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_supervisor_id" name="supervisor_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_marital_status" name="marital_status" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_gender" name="gender" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_salary" name="salary" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_education_level" name="education_level" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_department" name="department">
      <feature xsi:type="relational:Column" xmi:id="_column_department_department_id" name="department_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_department_department_description" name="department_description" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_position" name="position">
      <feature xsi:type="relational:Column" xmi:id="_column_position_position_id" name="position_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_position_position_title" name="position_title" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_position_pay_type" name="pay_type" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_position_min_scale" name="min_scale" type="_sqlsimpletype_numeric"/>
      <feature xsi:type="relational:Column" xmi:id="_column_position_max_scale" name="max_scale" type="_sqlsimpletype_numeric"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_salary" name="salary">
      <feature xsi:type="relational:Column" xmi:id="_column_salary_employee_id" name="employee_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_salary_department_id" name="department_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_salary_currency_id" name="currency_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_salary_pay_date" name="pay_date" type="_sqlsimpletype_date"/>
      <feature xsi:type="relational:Column" xmi:id="_column_salary_salary_paid" name="salary_paid" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_salary_overtime_paid" name="overtime_paid" type="_sqlsimpletype_numeric"/>
      <feature xsi:type="relational:Column" xmi:id="_column_salary_vacation_accrued" name="vacation_accrued" type="_sqlsimpletype_real"/>
      <feature xsi:type="relational:Column" xmi:id="_column_salary_vacation_used" name="vacation_used" type="_sqlsimpletype_real"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_employee_closure" name="employee_closure">
      <feature xsi:type="relational:Column" xmi:id="_column_employee_closure_supervisor_id" name="supervisor_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_closure_employee_id" name="employee_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_employee_closure_distance" name="distance" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_product_class" name="product_class">
      <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_class_id" name="product_class_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_subcategory" name="product_subcategory" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_category" name="product_category" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_department" name="product_department" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_family" name="product_family" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_c_special_sales_fact_1997" name="agg_c_special_sales_fact_1997">
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_product_id" name="product_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_promotion_id" name="promotion_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_customer_id" name="customer_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_store_id" name="store_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_time_month" name="time_month" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_time_quarter" name="time_quarter" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_time_year" name="time_year" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_store_sales_sum" name="store_sales_sum" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_store_cost_sum" name="store_cost_sum" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_unit_sales_sum" name="unit_sales_sum" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_fact_count" name="fact_count" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_l_05_sales_fact_1997" name="agg_l_05_sales_fact_1997">
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_05_sales_fact_1997_product_id" name="product_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_05_sales_fact_1997_customer_id" name="customer_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_05_sales_fact_1997_promotion_id" name="promotion_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_05_sales_fact_1997_store_id" name="store_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_05_sales_fact_1997_store_sales" name="store_sales" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_05_sales_fact_1997_store_cost" name="store_cost" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_05_sales_fact_1997_unit_sales" name="unit_sales" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_05_sales_fact_1997_fact_count" name="fact_count" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_l_03_sales_fact_1997" name="agg_l_03_sales_fact_1997">
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_03_sales_fact_1997_time_id" name="time_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_03_sales_fact_1997_customer_id" name="customer_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_03_sales_fact_1997_store_sales" name="store_sales" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_03_sales_fact_1997_store_cost" name="store_cost" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_03_sales_fact_1997_unit_sales" name="unit_sales" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_l_03_sales_fact_1997_fact_count" name="fact_count" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_pl_01_sales_fact_1997" name="agg_pl_01_sales_fact_1997">
      <feature xsi:type="relational:Column" xmi:id="_column_agg_pl_01_sales_fact_1997_product_id" name="product_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_pl_01_sales_fact_1997_time_id" name="time_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_pl_01_sales_fact_1997_customer_id" name="customer_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_pl_01_sales_fact_1997_store_sales_sum" name="store_sales_sum" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_pl_01_sales_fact_1997_store_cost_sum" name="store_cost_sum" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_pl_01_sales_fact_1997_unit_sales_sum" name="unit_sales_sum" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_pl_01_sales_fact_1997_fact_count" name="fact_count" type="_sqlsimpletype_decimal"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_g_ms_pcat_sales_fact_1997" name="agg_g_ms_pcat_sales_fact_1997">
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_gender" name="gender" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_marital_status" name="marital_status" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_product_family" name="product_family" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_product_department" name="product_department" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_product_category" name="product_category" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_month_of_year" name="month_of_year" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_quarter" name="quarter" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_the_year" name="the_year" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_store_sales" name="store_sales" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_store_cost" name="store_cost" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_unit_sales" name="unit_sales" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_customer_count" name="customer_count" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_g_ms_pcat_sales_fact_1997_fact_count" name="fact_count" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_c_14_sales_fact_1997" name="agg_c_14_sales_fact_1997">
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_14_sales_fact_1997_product_id" name="product_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_14_sales_fact_1997_customer_id" name="customer_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_14_sales_fact_1997_store_id" name="store_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_14_sales_fact_1997_promotion_id" name="promotion_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_14_sales_fact_1997_month_of_year" name="month_of_year" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_14_sales_fact_1997_quarter" name="quarter" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_14_sales_fact_1997_the_year" name="the_year" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_14_sales_fact_1997_store_sales" name="store_sales" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_14_sales_fact_1997_store_cost" name="store_cost" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_14_sales_fact_1997_unit_sales" name="unit_sales" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_14_sales_fact_1997_fact_count" name="fact_count" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_c_10_sales_fact_1997" name="agg_c_10_sales_fact_1997">
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_10_sales_fact_1997_month_of_year" name="month_of_year" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_10_sales_fact_1997_quarter" name="quarter" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_10_sales_fact_1997_the_year" name="the_year" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_10_sales_fact_1997_store_sales" name="store_sales" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_10_sales_fact_1997_store_cost" name="store_cost" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_10_sales_fact_1997_unit_sales" name="unit_sales" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_10_sales_fact_1997_customer_count" name="customer_count" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_10_sales_fact_1997_fact_count" name="fact_count" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_time_by_day" name="time_by_day">
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_time_id" name="time_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_date_1" name="the_date" type="_sqlsimpletype_timestamp"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_day" name="the_day" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_month_1" name="the_month" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_the_year_1" name="the_year" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_day_of_month" name="day_of_month" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_week_of_year" name="week_of_year" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_month_of_year" name="month_of_year" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_quarter_1" name="quarter" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_time_by_day_fiscal_period" name="fiscal_period" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_store_ragged" name="store_ragged">
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_id" name="store_id" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_type" name="store_type" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_name" name="store_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_street_address" name="store_street_address" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_state" name="store_state" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_country" name="store_country" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_manager" name="store_manager" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_city" name="store_city" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_store_sqft" name="store_sqft" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_grocery_sqft" name="grocery_sqft" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_frozen_sqft" name="frozen_sqft" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_meat_sqft" name="meat_sqft" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_coffee_bar" name="coffee_bar" type="_sqlsimpletype_smallint"/>
      <feature xsi:type="relational:Column" xmi:id="_column_store_ragged_region_id" name="region_id" type="_sqlsimpletype_integer"/>
    </ownedElement>
  </relational:Schema>
  <relational:Column xmi:id="_column_product_class_id" name="product_class_id" type="_sqlsimpletype_integer"/>
  <rolaprel:ExpressionColumn xmi:id="_expressioncolumn" type="_sqlsimpletype_character_varying">
    <sqls xmi:id="_sqlstatement_2" sql="&quot;fname&quot; || ' ' || &quot;lname&quot;">
      <dialects>oracle</dialects>
      <dialects>h2</dialects>
      <dialects>hsqldb</dialects>
      <dialects>postgres</dialects>
      <dialects>luciddb</dialects>
      <dialects>teradata</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement_3" sql="`customer`.`fullname`">
      <dialects>hive</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement_4" sql="fname + ' ' + lname">
      <dialects>access</dialects>
      <dialects>mssql</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement_14" sql="CONCAT(`customer`.`fname`, ' ', `customer`.`lname`)">
      <dialects>mysql</dialects>
      <dialects>mariadb</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement_5" sql="&quot;customer&quot;.&quot;fullname&quot;">
      <dialects>derby</dialects>
      <dialects>neoview</dialects>
      <dialects>snowflake</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement_12" sql="CONCAT(CONCAT(&quot;customer&quot;.&quot;fname&quot;, ' '), &quot;customer&quot;.&quot;lname&quot;)">
      <dialects>db2</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement_16" sql="fullname">
      <dialects>generic</dialects>
    </sqls>
  </rolaprel:ExpressionColumn>
  <rolaprel:ExpressionColumn xmi:id="_expressioncolumn_1" type="_sqlsimpletype_decimal">
    <sqls xmi:id="_sqlstatement_6" sql="Iif(&quot;sales_fact_1997&quot;.&quot;promotion_id&quot; = 0, 0, &quot;sales_fact_1997&quot;.&quot;store_sales&quot;)">
      <dialects>access</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement_8" sql="(case when &quot;sales_fact_1997&quot;.&quot;promotion_id&quot; = 0 then 0 else &quot;sales_fact_1997&quot;.&quot;store_sales&quot; end)">
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
    <sqls xmi:id="_sqlstatement_10" sql="(case when `sales_fact_1997`.`promotion_id` = 0 then 0 else `sales_fact_1997`.`store_sales` end)">
      <dialects>infobright</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement_1" sql="(case when sales_fact_1997.promotion_id = 0 then 0 else sales_fact_1997.store_sales end)">
      <dialects>generic</dialects>
    </sqls>
  </rolaprel:ExpressionColumn>
  <rolaprel:ExpressionColumn xmi:id="_expressioncolumn_2" type="_sqlsimpletype_decimal">
    <sqls xmi:id="_sqlstatement_15" sql="`warehouse_sales` - `inventory_fact_1997`.`warehouse_cost`">
      <dialects>mysql</dialects>
      <dialects>mariadb</dialects>
      <dialects>infobright</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement_9" sql="&amp;quot;warehouse_sales&amp;quot; - &amp;quot;inventory_fact_1997&amp;quot;.&amp;quot;warehouse_cost&amp;quot;">
      <dialects>generic</dialects>
    </sqls>
  </rolaprel:ExpressionColumn>
  <rolaprel:ExpressionColumn xmi:id="_expressioncolumn_3" type="_sqlsimpletype_character_varying">
    <sqls xmi:id="_sqlstatement_7" sql="&quot;fname&quot; || ' ' || &quot;lname&quot;">
      <dialects>oracle</dialects>
      <dialects>h2</dialects>
      <dialects>hsqldb</dialects>
      <dialects>postgres</dialects>
      <dialects>luciddb</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement_13" sql="fname + ' ' + lname">
      <dialects>access</dialects>
      <dialects>mssql</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement_11" sql="CONCAT(`customer`.`fname`, ' ', `customer`.`lname`)">
      <dialects>mysql</dialects>
      <dialects>mariadb</dialects>
    </sqls>
    <sqls xmi:id="_sqlstatement" sql="&quot;customer&quot;.&quot;fullname&quot;">
      <dialects>derby</dialects>
      <dialects>neoview</dialects>
      <dialects>snowflake</dialects>
    </sqls>
  </rolaprel:ExpressionColumn>
  <rolapsrc:TableSource xmi:id="_tablesource_inventory_fact_1997" table="_table_inventory_fact_1997"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store" table="_table_store"/>
  <rolapsrc:TableSource xmi:id="_tablesource_department" table="_table_department"/>
  <rolapsrc:TableSource xmi:id="_tablesource_warehouse" table="_table_warehouse"/>
  <rolapsrc:TableSource xmi:id="_tablesource_product_class" table="_table_product_class"/>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <rolapsrc:TableSource xmi:id="_tablesource_time_by_day" table="_table_time_by_day"/>
  <rolapsrc:TableSource xmi:id="_tablesource_promotion" table="_table_promotion"/>
  <rolapsrc:TableSource xmi:id="_tablesource_salary" table="_table_salary"/>
  <rolapsrc:TableSource xmi:id="_tablesource_position" table="_table_position"/>
  <rolapsrc:TableSource xmi:id="_tablesource_employee" table="_table_employee"/>
  <rolapsrc:TableSource xmi:id="_tablesource_sales_fact_1997" table="_table_sales_fact_1997" aggregationTables="_aggregationname">
    <aggregationExcludes xmi:id="_aggregationexclude_agg_lc_100_sales_fact_1997" name="agg_lc_100_sales_fact_1997"/>
    <aggregationExcludes xmi:id="_aggregationexclude_agg_lc_10_sales_fact_1997" name="agg_lc_10_sales_fact_1997"/>
    <aggregationExcludes xmi:id="_aggregationexclude_agg_pc_10_sales_fact_1997" name="agg_pc_10_sales_fact_1997"/>
  </rolapsrc:TableSource>
  <rolapsrc:TableSource xmi:id="_tablesource_customer" table="_table_customer"/>
  <rolapsrc:TableSource xmi:id="_tablesource_store_ragged" table="_table_store_ragged"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_position_id_1" key="_column_employee_position_id" query="_tablesource_employee"/>
    <right xmi:id="_joinedqueryelement_position_id" key="_column_position_position_id" query="_tablesource_position"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_1">
    <left xmi:id="_joinedqueryelement_product_class_id_1" key="_column_product_class_id" query="_tablesource_product"/>
    <right xmi:id="_joinedqueryelement_product_class_id" key="_column_product_class_product_class_id" query="_tablesource_product_class"/>
  </rolapsrc:JoinSource>
  <rolapsrc:JoinSource xmi:id="_joinsource_2">
    <left xmi:id="_joinedqueryelement_store_id_1" key="_column_employee_store_id" query="_tablesource_employee"/>
    <right xmi:id="_joinedqueryelement_store_id" key="_column_store_store_id" query="_tablesource_store"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_store_type" name="Store Type" column="_column_store_store_type" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_country" name="Country" column="_column_warehouse_warehouse_country"/>
  <rolaplev:Level xmi:id="_level_pay_type" name="Pay Type" column="_column_position_pay_type" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_department_description" name="Department Description" column="_column_department_department_id" columnType="Numeric"/>
  <rolaplev:Level xmi:id="_level_store_sqft" name="Store Sqft" column="_column_store_store_sqft" columnType="Numeric" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_month" name="Month" column="_column_time_by_day_month_of_year" type="TimeMonths" columnType="Numeric"/>
  <rolaplev:Level xmi:id="_level_store_city" name="Store City" column="_column_store_ragged_store_city" hideMemberIf="IfBlankName"/>
  <rolaplev:Level xmi:id="_level_country_1" name="Country" column="_column_store_ragged_store_country" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_country_2" name="Country" column="_column_customer_country" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_gender" name="Gender" column="_column_customer_gender" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_store_name" name="Store Name" column="_column_store_ragged_store_name" uniqueMembers="true">
    <memberProperties xmi:id="_memberproperty_store_type_1" name="Store Type" column="_column_store_ragged_store_type"/>
    <memberProperties xmi:id="_memberproperty_store_manager_1" name="Store Manager" column="_column_store_ragged_store_manager"/>
    <memberProperties xmi:id="_memberproperty_store_sqft_1" name="Store Sqft" column="_column_store_ragged_store_sqft"/>
    <memberProperties xmi:id="_memberproperty_grocery_sqft" name="Grocery Sqft" column="_column_store_ragged_grocery_sqft"/>
    <memberProperties xmi:id="_memberproperty_frozen_sqft" name="Frozen Sqft" column="_column_store_ragged_frozen_sqft"/>
    <memberProperties xmi:id="_memberproperty_meat_sqft" name="Meat Sqft" column="_column_store_ragged_meat_sqft"/>
    <memberProperties xmi:id="_memberproperty_has_coffee_bar" name="Has coffee bar" column="_column_store_ragged_coffee_bar"/>
    <memberProperties xmi:id="_memberproperty_street_address" name="Street address" column="_column_store_ragged_store_street_address"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_month_1" name="Month" column="_column_time_by_day_month_of_year" type="TimeMonths" nameColumn="_column_time_by_day_the_month_1" columnType="Numeric"/>
  <rolaplev:Level xmi:id="_level_position_title" name="Position Title" column="_column_employee_position_title">
    <ordinalColumns xmi:id="_orderedcolumn_position_id" column="_column_employee_position_id"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_quarter" name="Quarter" column="_column_time_by_day_quarter_1" type="TimeQuarters"/>
  <rolaplev:Level xmi:id="_level_store_state" name="Store State" column="_column_store_store_state" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_promotion_name" name="Promotion Name" column="_column_promotion_promotion_name" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_year" name="Year" column="_column_time_by_day_the_year_1" type="TimeYears" columnType="Numeric" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_store_type_1" name="Store Type" column="_column_store_store_type" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_store_city_1" name="Store City" column="_column_store_store_city"/>
  <rolaplev:Level xmi:id="_level_city" name="City" column="_column_customer_city"/>
  <rolaplev:Level xmi:id="_level_city_1" name="City" column="_column_store_ragged_store_city" hideMemberIf="IfBlankName"/>
  <rolaplev:Level xmi:id="_level_product_subcategory" name="Product Subcategory" column="_column_product_class_product_subcategory"/>
  <rolaplev:Level xmi:id="_level_education_level" name="Education Level" column="_column_customer_education" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_name" name="Name" column="_column_customer_customer_id" nameColumn="_expressioncolumn" columnType="Numeric" uniqueMembers="true">
    <memberProperties xmi:id="_memberproperty_gender" name="Gender" column="_column_customer_gender"/>
    <memberProperties xmi:id="_memberproperty_marital_status_1" name="Marital Status" column="_column_customer_marital_status"/>
    <memberProperties xmi:id="_memberproperty_education" name="Education" column="_column_customer_education"/>
    <memberProperties xmi:id="_memberproperty_yearly_income" name="Yearly Income" column="_column_customer_yearly_income"/>
    <ordinalColumns xmi:id="_orderedcolumn" column="_expressioncolumn_3"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_warehouse_name" name="Warehouse Name" column="_column_warehouse_warehouse_name" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_day" name="Day" column="_column_time_by_day_day_of_month" type="TimeDays" columnType="Numeric"/>
  <rolaplev:Level xmi:id="_level_has_coffee_bar" name="Has coffee bar" column="_column_store_coffee_bar" columnType="Boolean" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_state_province" name="State Province" column="_column_customer_state_province" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_product_category" name="Product Category" column="_column_product_class_product_category"/>
  <rolaplev:Level xmi:id="_level_management_role" name="Management Role" column="_column_employee_management_role"/>
  <rolaplev:Level xmi:id="_level_brand_name" name="Brand Name" column="_column_product_brand_name"/>
  <rolaplev:Level xmi:id="_level_marital_status" name="Marital Status" approxRowCount="111" column="_column_customer_marital_status" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_store_state_1" name="Store State" column="_column_store_ragged_store_state" hideMemberIf="IfParentsName" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_media_type" name="Media Type" column="_column_promotion_media_type" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_state_province_1" name="State Province" column="_column_warehouse_warehouse_state_province"/>
  <rolaplev:Level xmi:id="_level_employee_id" name="Employee Id" column="_column_employee_employee_id" nameColumn="_column_employee_full_name" columnType="Numeric" uniqueMembers="true">
    <memberProperties xmi:id="_memberproperty_marital_status" name="Marital Status" column="_column_employee_marital_status"/>
    <memberProperties xmi:id="_memberproperty_position_title" name="Position Title" column="_column_employee_position_title"/>
    <memberProperties xmi:id="_memberproperty_gender_1" name="Gender" column="_column_employee_gender"/>
    <memberProperties xmi:id="_memberproperty_salary" name="Salary" column="_column_employee_salary"/>
    <memberProperties xmi:id="_memberproperty_education_level" name="Education Level" column="_column_employee_education_level"/>
    <memberProperties xmi:id="_memberproperty_management_role" name="Management Role" column="_column_employee_management_role"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_state" name="State" column="_column_store_ragged_store_state" hideMemberIf="IfParentsName" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_yearly_income" name="Yearly Income" column="_column_customer_yearly_income" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_product_name" name="Product Name" column="_column_product_product_name" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_product_family" name="Product Family" column="_column_product_class_product_family"/>
  <rolaplev:Level xmi:id="_level_store_name_1" name="Store Name" column="_column_store_store_name" uniqueMembers="true">
    <memberProperties xmi:id="_memberproperty_store_type" name="Store Type" column="_column_store_store_type"/>
    <memberProperties xmi:id="_memberproperty_store_manager" name="Store Manager" column="_column_store_store_manager"/>
    <memberProperties xmi:id="_memberproperty_store_sqft" name="Store Sqft" column="_column_store_store_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_grocery_sqft_1" name="Grocery Sqft" column="_column_store_grocery_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_frozen_sqft_1" name="Frozen Sqft" column="_column_store_frozen_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_meat_sqft_1" name="Meat Sqft" column="_column_store_meat_sqft" propertyType="Numeric"/>
    <memberProperties xmi:id="_memberproperty_has_coffee_bar_1" name="Has coffee bar" column="_column_store_coffee_bar" propertyType="Boolean"/>
    <memberProperties xmi:id="_memberproperty_street_address_1" name="Street address" column="_column_store_store_street_address" propertyType="String"/>
  </rolaplev:Level>
  <rolaplev:Level xmi:id="_level_store_country" name="Store Country" column="_column_store_store_country" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_product_department" name="Product Department" column="_column_product_class_product_department"/>
  <rolaplev:Level xmi:id="_level_city_2" name="City" column="_column_warehouse_warehouse_city"/>
  <rolaplev:Level xmi:id="_level_store_country_1" name="Store Country" column="_column_store_ragged_store_country"/>
  <rolaplev:Level xmi:id="_level_week" name="Week" column="_column_time_by_day_week_of_year" type="TimeWeeks" columnType="Numeric"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_department" name="Department" primaryKey="_column_department_department_id" query="_tablesource_department" levels="_level_department_description"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_warehouse_id" allMemberName="All Warehouses" primaryKey="_column_warehouse_warehouse_id" query="_tablesource_warehouse" levels="_level_country _level_state_province_1 _level_city_2 _level_warehouse_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id" allMemberName="All Customers" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_country_2 _level_state_province _level_city _level_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id" primaryKey="_column_store_store_id" levels="_level_has_coffee_bar"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id_1" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_education_level"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id_2" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_yearly_income"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id_3" allMemberName="All Gender" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_gender"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id_1" primaryKey="_column_store_ragged_store_id" query="_tablesource_store_ragged" levels="_level_country_1 _level_state _level_city_1"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id_2" primaryKey="_column_store_store_id" levels="_level_store_type"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product_id" primaryKey="_column_product_product_id" query="_joinsource_1" levels="_level_product_family _level_product_department _level_product_category _level_product_subcategory _level_brand_name _level_product_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_employee_id" primaryKey="_column_employee_employee_id" query="_joinsource_2" levels="_level_store_country _level_store_state _level_store_city_1 _level_store_name_1"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_weekly" name="Weekly" primaryKey="_column_time_by_day_time_id" query="_tablesource_time_by_day" levels="_level_year _level_week _level_day"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_position" name="Position" allMemberName="All Position" primaryKey="_column_employee_employee_id" query="_tablesource_employee" levels="_level_management_role _level_position_title"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id_3" primaryKey="_column_store_ragged_store_id" query="_tablesource_store_ragged" levels="_level_store_country_1 _level_store_state_1 _level_store_city _level_store_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id_4" primaryKey="_column_store_store_id" query="_tablesource_store" levels="_level_store_sqft"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_promotion_id" allMemberName="All Media" primaryKey="_column_promotion_promotion_id" query="_tablesource_promotion" levels="_level_media_type"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_employee_id_1" primaryKey="_column_employee_employee_id" query="_joinsource" levels="_level_pay_type"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_the_date" hasAll="false" primaryKey="_column_time_by_day_the_date_1" query="_tablesource_time_by_day" levels="_level_year _level_quarter _level_month_1"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_promotion_id_1" allMemberName="All Promotions" defaultMember="All Promotions" primaryKey="_column_promotion_promotion_id" query="_tablesource_promotion" levels="_level_promotion_name"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_employee_id_2" primaryKey="_column_employee_employee_id" query="_joinsource_2" levels="_level_store_type_1"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_time_id" hasAll="false" primaryKey="_column_time_by_day_time_id" query="_tablesource_time_by_day" levels="_level_year _level_quarter _level_month"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_customer_id_4" allMemberName="All Marital Status" primaryKey="_column_customer_customer_id" query="_tablesource_customer" levels="_level_marital_status"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id_5" primaryKey="_column_store_store_id" query="_tablesource_store" levels="_level_store_type"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_store_id_6" primaryKey="_column_store_store_id" query="_tablesource_store" levels="_level_store_country _level_store_state _level_store_city_1 _level_store_name_1"/>
  <rolaphier:ParentChildHierarchy xmi:id="_parentchildhierarchy_employee_id" allMemberName="All Employees" primaryKey="_column_employee_employee_id" query="_tablesource_employee" nullParentValue="0" parentColumn="_column_employee_supervisor_id" level="_level_employee_id">
    <parentChildLink xmi:id="_parentchildlink" childColumn="_column_employee_closure_employee_id" parentColumn="_column_employee_closure_supervisor_id">
      <table xmi:id="_tablesource_employee_closure" table="_table_employee_closure"/>
    </parentChildLink>
  </rolaphier:ParentChildHierarchy>
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_type" name="Store Type" hierarchies="_explicithierarchy_store_id_2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_geography" name="Geography" hierarchies="_explicithierarchy_store_id_1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_type_1" name="Store Type" hierarchies="_explicithierarchy_store_id_5"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_gender" name="Gender" hierarchies="_explicithierarchy_customer_id_3"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_position" name="Position" hierarchies="_explicithierarchy_position"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_marital_status" name="Marital Status" hierarchies="_explicithierarchy_customer_id_4"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_warehouse" name="Warehouse" hierarchies="_explicithierarchy_warehouse_id"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_department" name="Department" hierarchies="_explicithierarchy_department"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_pay_type" name="Pay Type" hierarchies="_explicithierarchy_employee_id_1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_has_coffee_bar" name="Has coffee bar" hierarchies="_explicithierarchy_store_id"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_promotion_media" name="Promotion Media" hierarchies="_explicithierarchy_promotion_id"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_education_level" name="Education Level" hierarchies="_explicithierarchy_customer_id_1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_yearly_income" name="Yearly Income" hierarchies="_explicithierarchy_customer_id_2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_customers" name="Customers" hierarchies="_explicithierarchy_customer_id"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_store" name="Store" hierarchies="_explicithierarchy_employee_id"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_size_in_sqft" name="Store Size in SQFT" hierarchies="_explicithierarchy_store_id_4"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_type_2" name="Store Type" hierarchies="_explicithierarchy_employee_id_2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_type_3" name="Store Type" hierarchies="_explicithierarchy_store_id_5"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_promotions" name="Promotions" hierarchies="_explicithierarchy_promotion_id_1"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_employee" name="Employee" hierarchies="_parentchildhierarchy_employee_id"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_1" name="Store" hierarchies="_explicithierarchy_store_id_3"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_store_2" name="Store" hierarchies="_explicithierarchy_store_id_6"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_product_id"/>
  <rolapdim:TimeDimension xmi:id="_timedimension_time" name="Time" hierarchies="_explicithierarchy_time_id _explicithierarchy_weekly"/>
  <rolapdim:TimeDimension xmi:id="_timedimension_time_1" name="Time" hierarchies="_explicithierarchy_the_date"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_sales_ragged" name="Sales Ragged" query="_tablesource_sales_fact_1997">
    <dimensionConnectors xmi:id="_dimensionconnector_store_2" foreignKey="_column_sales_fact_1997_store_id" dimension="_standarddimension_store_1" overrideDimensionName="Store"/>
    <dimensionConnectors xmi:id="_dimensionconnector_geography" foreignKey="_column_sales_fact_1997_store_id" dimension="_standarddimension_geography" overrideDimensionName="Geography"/>
    <dimensionConnectors xmi:id="_dimensionconnector_store_size_in_sqft" foreignKey="_column_sales_fact_1997_store_id" dimension="_standarddimension_store_size_in_sqft" overrideDimensionName="Store Size in SqFt"/>
    <dimensionConnectors xmi:id="_dimensionconnector_store_type_3" foreignKey="_column_sales_fact_1997_store_id" dimension="_standarddimension_store_type_3" overrideDimensionName="Store Type"/>
    <dimensionConnectors xmi:id="_dimensionconnector_time_4" foreignKey="_column_sales_fact_1997_time_id" dimension="_timedimension_time" overrideDimensionName="Time"/>
    <dimensionConnectors xmi:id="_dimensionconnector_product_1" foreignKey="_column_sales_fact_1997_product_id" dimension="_standarddimension_product" overrideDimensionName="Product"/>
    <dimensionConnectors xmi:id="_dimensionconnector_promotion_media_1" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_promotion_media" overrideDimensionName="Promotion Media"/>
    <dimensionConnectors xmi:id="_dimensionconnector_promotions_1" foreignKey="_column_sales_fact_1997_promotion_id" dimension="_standarddimension_promotions" overrideDimensionName="Promotions"/>
    <dimensionConnectors xmi:id="_dimensionconnector_customers" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_customers" overrideDimensionName="Customers"/>
    <dimensionConnectors xmi:id="_dimensionconnector_education_level" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_education_level" overrideDimensionName="Education Level"/>
    <dimensionConnectors xmi:id="_dimensionconnector_gender_1" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_gender" overrideDimensionName="Gender"/>
    <dimensionConnectors xmi:id="_dimensionconnector_marital_status_1" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_marital_status" overrideDimensionName="Marital Status"/>
    <dimensionConnectors xmi:id="_dimensionconnector_yearly_income" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_yearly_income" overrideDimensionName="Yearly Income"/>
    <measureGroups xmi:id="_measuregroup_2">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_unit_sales_2" name="Unit Sales" formatString="Standard" column="_column_sales_fact_1997_unit_sales"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_store_cost_1" name="Store Cost" formatString="#,###" column="_column_sales_fact_1997_store_cost"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_store_sales_2" name="Store Sales" formatString="#,###" column="_column_sales_fact_1997_store_sales"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_sales_count" name="Sales Count" formatString="#,###" column="_column_sales_fact_1997_product_id"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_customer_count" name="Customer Count" formatString="#,###" column="_column_sales_fact_1997_customer_id" distinct="true"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_warehouse" name="Warehouse" query="_tablesource_inventory_fact_1997">
    <calculatedMembers xmi:id="_calculatedmember_average_warehouse_sale" name="Average Warehouse Sale" formula="[Measures].[Warehouse Sales] / [Measures].[Warehouse Cost]">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string_1" name="FORMAT_STRING" value="$#,##0.00"/>
    </calculatedMembers>
    <namedSets xmi:id="_namedset_top_sellers" name="Top Sellers" formula="TopCount([Warehouse].[Warehouse Name].MEMBERS, 5, [Measures].[Warehouse Sales])"/>
    <dimensionConnectors xmi:id="_dimensionconnector_store_1" foreignKey="_column_inventory_fact_1997_store_id" dimension="_standarddimension_store_2" overrideDimensionName="Store"/>
    <dimensionConnectors xmi:id="_dimensionconnector_store_size_in_sqft_1" foreignKey="_column_inventory_fact_1997_store_id" dimension="_standarddimension_store_size_in_sqft" overrideDimensionName="Store Size in SQFT"/>
    <dimensionConnectors xmi:id="_dimensionconnector_store_type_1" foreignKey="_column_inventory_fact_1997_store_id" dimension="_standarddimension_store_type_1" overrideDimensionName="Store Type"/>
    <dimensionConnectors xmi:id="_dimensionconnector_time_2" foreignKey="_column_inventory_fact_1997_time_id" dimension="_timedimension_time" overrideDimensionName="Time"/>
    <dimensionConnectors xmi:id="_dimensionconnector_product_3" foreignKey="_column_inventory_fact_1997_product_id" dimension="_standarddimension_product" overrideDimensionName="Product"/>
    <dimensionConnectors xmi:id="_dimensionconnector_warehouse" foreignKey="_column_inventory_fact_1997_warehouse_id" dimension="_standarddimension_warehouse" overrideDimensionName="Warehouse"/>
    <measureGroups xmi:id="_measuregroup_1">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_store_invoice" name="Store Invoice" column="_column_inventory_fact_1997_store_invoice"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_supply_time" name="Supply Time" column="_column_inventory_fact_1997_supply_time"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_warehouse_cost" name="Warehouse Cost" column="_column_inventory_fact_1997_warehouse_cost"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_warehouse_sales" name="Warehouse Sales" column="_column_inventory_fact_1997_warehouse_sales"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_units_shipped" name="Units Shipped" formatString="#.0" column="_column_inventory_fact_1997_units_shipped"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_units_ordered" name="Units Ordered" formatString="#.0" column="_column_inventory_fact_1997_units_ordered"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_warehouse_profit" name="Warehouse Profit" column="_expressioncolumn_2"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_sales_2" name="Sales 2" query="_tablesource_sales_fact_1997">
    <calculatedMembers xmi:id="_calculatedmember_profit" name="Profit" formula="[Measures].[Store Sales] - [Measures].[Store Cost]">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string_2" name="FORMAT_STRING" value="$#,##0.00"/>
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_2" name="MEMBER_ORDINAL" value="4"/>
    </calculatedMembers>
    <calculatedMembers xmi:id="_calculatedmember_profit_last_period" name="Profit last Period" visible="false" formula="COALESCEEMPTY((Measures.[Profit], [Time].[Time].PREVMEMBER),    Measures.[Profit])">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_1" name="MEMBER_ORDINAL" value="5"/>
    </calculatedMembers>
    <dimensionConnectors xmi:id="_dimensionconnector_time_3" foreignKey="_column_sales_fact_1997_time_id" dimension="_timedimension_time" overrideDimensionName="Time"/>
    <dimensionConnectors xmi:id="_dimensionconnector_product_2" foreignKey="_column_sales_fact_1997_product_id" dimension="_standarddimension_product" overrideDimensionName="Product"/>
    <dimensionConnectors xmi:id="_dimensionconnector_gender" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_gender" overrideDimensionName="Gender"/>
    <measureGroups xmi:id="_measuregroup_3">
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_sales_count_1" name="Sales Count" column="_column_sales_fact_1997_product_id">
        <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal" name="MEMBER_ORDINAL" value="1"/>
      </measures>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_unit_sales" name="Unit Sales" column="_column_sales_fact_1997_unit_sales">
        <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_5" name="MEMBER_ORDINAL" value="2"/>
      </measures>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_store_sales" name="Store Sales" column="_column_sales_fact_1997_store_sales">
        <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_3" name="MEMBER_ORDINAL" value="3"/>
      </measures>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_store_cost" name="Store Cost" formatString="#,###.00" column="_column_sales_fact_1997_store_cost">
        <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_4" name="MEMBER_ORDINAL" value="6"/>
      </measures>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_customer_count_2" name="Customer Count" formatString="#,###" column="_column_sales_fact_1997_customer_id">
        <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_6" name="MEMBER_ORDINAL" value="7"/>
      </measures>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_sales" name="Sales" query="_tablesource_sales_fact_1997">
    <annotations xmi:id="_annotation_caption_de_de" value="Verkaufen" name="caption.de_DE"/>
    <annotations xmi:id="_annotation_caption_fr_fr" value="Ventes" name="caption.fr_FR"/>
    <annotations xmi:id="_annotation_description_fr_fr" value="Cube des ventes" name="description.fr_FR"/>
    <annotations xmi:id="_annotation_description_de" value="Cube Verkaufen" name="description.de"/>
    <annotations xmi:id="_annotation_description_de_at" value="Cube den Verkaufen" name="description.de_AT"/>
    <calculatedMembers xmi:id="_calculatedmember_profit_1" name="Profit" formula="[Measures].[Store Sales] - [Measures].[Store Cost]">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string_3" name="FORMAT_STRING" value="$#,##0.00"/>
    </calculatedMembers>
    <calculatedMembers xmi:id="_calculatedmember_profit_last_period_1" name="Profit last Period" formatString="$#,##0.00" formula="COALESCEEMPTY((Measures.[Profit], [Time].[Time].PREVMEMBER), Measures.[Profit])">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string" name="FORMAT_STRING" value="$#,##0.00"/>
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_member_ordinal_7" name="MEMBER_ORDINAL" value="18"/>
    </calculatedMembers>
    <calculatedMembers xmi:id="_calculatedmember_profit_growth" name="Profit Growth" formula="([Measures].[Profit] - [Measures].[Profit last Period]) / [Measures].[Profit last Period]">
      <calculatedMemberProperties xmi:id="_calculatedmemberproperty_format_string_4" name="FORMAT_STRING" value="0.0%"/>
    </calculatedMembers>
    <dimensionConnectors xmi:id="_dimensionconnector_store_4" foreignKey="_column_sales_fact_1997_store_id" dimension="_standarddimension_store_2" overrideDimensionName="Store"/>
    <dimensionConnectors xmi:id="_dimensionconnector_store_size_in_sqft_2" foreignKey="_column_sales_fact_1997_store_id" dimension="_standarddimension_store_size_in_sqft" overrideDimensionName="Store Size in SQFT"/>
    <dimensionConnectors xmi:id="_dimensionconnector_store_type_4" foreignKey="_column_sales_fact_1997_store_id" dimension="_standarddimension_store_type_1" overrideDimensionName="Store Type"/>
    <dimensionConnectors xmi:id="_dimensionconnector_time_1" foreignKey="_column_sales_fact_1997_time_id" dimension="_timedimension_time" overrideDimensionName="Time"/>
    <dimensionConnectors xmi:id="_dimensionconnector_product" foreignKey="_column_sales_fact_1997_product_id" dimension="_standarddimension_product" overrideDimensionName="Product"/>
    <dimensionConnectors xmi:id="_dimensionconnector_promotion_media" foreignKey="_column_sales_fact_1997_promotion_id" dimension="_standarddimension_promotion_media" overrideDimensionName="Promotion Media"/>
    <dimensionConnectors xmi:id="_dimensionconnector_promotions" foreignKey="_column_sales_fact_1997_promotion_id" dimension="_standarddimension_promotions" overrideDimensionName="Promotions"/>
    <dimensionConnectors xmi:id="_dimensionconnector_customers_1" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_customers" overrideDimensionName="Customers"/>
    <dimensionConnectors xmi:id="_dimensionconnector_education_level_1" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_education_level" overrideDimensionName="Education Level"/>
    <dimensionConnectors xmi:id="_dimensionconnector_gender_2" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_gender" overrideDimensionName="Gender"/>
    <dimensionConnectors xmi:id="_dimensionconnector_marital_status" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_marital_status" overrideDimensionName="Marital Status"/>
    <dimensionConnectors xmi:id="_dimensionconnector_yearly_income_1" foreignKey="_column_sales_fact_1997_customer_id" dimension="_standarddimension_yearly_income" overrideDimensionName="Yearly Income"/>
    <measureGroups xmi:id="_measuregroup_5">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_unit_sales_1" name="Unit Sales" formatString="Standard" column="_column_sales_fact_1997_unit_sales"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_store_cost_2" name="Store Cost" formatString="#,###.00" column="_column_sales_fact_1997_store_cost"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_store_sales_1" name="Store Sales" formatString="#,###.00" column="_column_sales_fact_1997_store_sales"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_sales_count_2" name="Sales Count" formatString="#,###" column="_column_sales_fact_1997_product_id"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_customer_count_1" name="Customer Count" formatString="#,###" column="_column_sales_fact_1997_customer_id" distinct="true"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_promotion_sales" name="Promotion Sales" formatString="#,###.00" column="_expressioncolumn_1"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_store" name="Store" query="_tablesource_store">
    <dimensionConnectors xmi:id="_dimensionconnector_store_type" dimension="_standarddimension_store_type" overrideDimensionName="Store Type"/>
    <dimensionConnectors xmi:id="_dimensionconnector_store" dimension="_standarddimension_store_2" overrideDimensionName="Store"/>
    <dimensionConnectors xmi:id="_dimensionconnector_has_coffee_bar" dimension="_standarddimension_has_coffee_bar" overrideDimensionName="Has coffee bar"/>
    <measureGroups xmi:id="_measuregroup_4">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_store_sqft" name="Store Sqft" formatString="#,###" column="_column_store_store_sqft"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_grocery_sqft" name="Grocery Sqft" formatString="#,###" column="_column_store_grocery_sqft"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_hr" name="HR" query="_tablesource_salary">
    <calculatedMembers xmi:id="_calculatedmember_employee_salary" name="Employee Salary" formatString="Currency" formula="([Employees].currentmember.datamember, [Measures].[Org Salary])"/>
    <calculatedMembers xmi:id="_calculatedmember_avg_salary" name="Avg Salary" formatString="Currency" formula="[Measures].[Org Salary]/[Measures].[Number of Employees]"/>
    <dimensionConnectors xmi:id="_dimensionconnector_time" foreignKey="_column_salary_pay_date" dimension="_timedimension_time_1" overrideDimensionName="Time"/>
    <dimensionConnectors xmi:id="_dimensionconnector_store_3" foreignKey="_column_salary_employee_id" dimension="_standarddimension_store" overrideDimensionName="Store"/>
    <dimensionConnectors xmi:id="_dimensionconnector_pay_type" foreignKey="_column_salary_employee_id" dimension="_standarddimension_pay_type" overrideDimensionName="Pay Type"/>
    <dimensionConnectors xmi:id="_dimensionconnector_store_type_2" foreignKey="_column_salary_employee_id" dimension="_standarddimension_store_type_2" overrideDimensionName="Store Type"/>
    <dimensionConnectors xmi:id="_dimensionconnector_position" foreignKey="_column_salary_employee_id" dimension="_standarddimension_position" overrideDimensionName="Position"/>
    <dimensionConnectors xmi:id="_dimensionconnector_department" foreignKey="_column_salary_department_id" dimension="_standarddimension_department" overrideDimensionName="Department"/>
    <dimensionConnectors xmi:id="_dimensionconnector_employees" foreignKey="_column_salary_employee_id" dimension="_standarddimension_employee" overrideDimensionName="Employees"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_org_salary" name="Org Salary" formatString="Currency" column="_column_salary_salary_paid"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_count" name="Count" formatString="#,#" column="_column_salary_employee_id"/>
      <measures xsi:type="rolapmeas:CountMeasure" xmi:id="_countmeasure_number_of_employees" name="Number of Employees" formatString="#,#" column="_column_salary_employee_id" distinct="true"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolapcube:VirtualCube xmi:id="_virtualcube_warehouse_and_sales" name="Warehouse and Sales" dimensionConnectors="_dimensionconnector_customers_1 _dimensionconnector_education_level_1 _dimensionconnector_gender_2 _dimensionconnector_marital_status _dimensionconnector_product _dimensionconnector_promotion_media _dimensionconnector_promotions _dimensionconnector_store_4 _dimensionconnector_time_1 _dimensionconnector_yearly_income_1 _dimensionconnector_warehouse" referencedCalculatedMembers="_calculatedmember_profit_1 _calculatedmember_profit_growth _calculatedmember_average_warehouse_sale" referencedMeasures="_countmeasure_sales_count_2 _summeasure_store_cost_2 _summeasure_store_sales_1 _summeasure_unit_sales_1 _summeasure_store_invoice _summeasure_supply_time _summeasure_units_ordered _summeasure_units_shipped _summeasure_warehouse_cost _summeasure_warehouse_profit _summeasure_warehouse_sales">
    <calculatedMembers xmi:id="_calculatedmember_profit_per_unit_shipped" name="Profit Per Unit Shipped" formatString="Currency" formula="[Measures].[Profit] / [Measures].[Units Shipped]"/>
  </rolapcube:VirtualCube>
  <rolapcacc:AccessRole xmi:id="_accessrole_administrator" name="Administrator">
    <accessCatalogGrants xmi:id="_accesscataloggrant_1" catalogAccess="all">
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant_1" databaseSchemaAccess="all" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <rolapcacc:AccessRole xmi:id="_accessrole_no_hr_cube" name="No HR Cube">
    <accessCatalogGrants xmi:id="_accesscataloggrant_2" catalogAccess="all">
      <cubeGrants xmi:id="_accesscubegrant_hr" cube="_physicalcube_hr"/>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant" databaseSchemaAccess="all" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
  <rolapcacc:AccessRole xmi:id="_accessrole_california_manager" name="California manager">
    <accessCatalogGrants xmi:id="_accesscataloggrant">
      <cubeGrants xmi:id="_accesscubegrant_sales" cubeAccess="all" cube="_physicalcube_sales">
        <hierarchyGrants xmi:id="_accesshierarchygrant_1" hierarchyAccess="custom" hierarchy="_explicithierarchy_store_id_6" topLevel="_level_store_country">
          <memberGrants xmi:id="_accessmembergrant_3" memberAccess="all" member="[Store].[USA].[CA]"/>
          <memberGrants xmi:id="_accessmembergrant_2" member="[Store].[USA].[CA].[Los Angeles]"/>
        </hierarchyGrants>
        <hierarchyGrants xmi:id="_accesshierarchygrant_2" hierarchyAccess="custom" hierarchy="_explicithierarchy_customer_id" bottomLevel="_level_city" topLevel="_level_state_province">
          <memberGrants xmi:id="_accessmembergrant" memberAccess="all" member="[Customers].[USA].[CA]"/>
          <memberGrants xmi:id="_accessmembergrant_1" member="[Customers].[USA].[CA].[Los Angeles]"/>
        </hierarchyGrants>
        <hierarchyGrants xmi:id="_accesshierarchygrant" hierarchy="_explicithierarchy_customer_id_3"/>
      </cubeGrants>
      <databaseSchemaGrants xmi:id="_accessdatabaseschemagrant_2" databaseSchemaAccess="all" databaseSchema="_schema"/>
    </accessCatalogGrants>
  </rolapcacc:AccessRole>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.foodmart.zip" download>Download Zip File</a>
