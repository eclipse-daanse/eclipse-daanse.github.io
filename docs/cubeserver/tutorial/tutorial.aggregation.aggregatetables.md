---
title: Aggregation Aggregate Tables
group: Aggregation
kind: TUTORIAL
number: 2.8.2
---
Aggregate tables are a way to improve performance when the fact table contains
a huge number of rows: a million or more. An aggregate table is essentially a pre-computed
summary of the data in the fact table.


# Daanse Tutorial - Aggregation Aggregate Tables

This tutorial discusses TableQuery with AggregationExclude.
AggregationExclude defines exclusion rules that prevent specific tables from being used as aggregation tables,
even if they would otherwise match aggregation patterns or be considered suitable for aggregation optimization.
AggregationExclude is essential for maintaining aggregation accuracy and system reliability by providing explicit
control over which tables should be avoided during aggregation table discovery and selection.


## Database Schema

The cube defined in this example is based on

SALES_FACT_1997 table which contains two columns: `PRODUCT_ID` and `STORE_COST`.
PRODUCT table which contains 4 columns: `PRODUCT_CLASS_ID`,`PRODUCT_ID`,`brand_name`,`product_name`
PRODUCT_CLASS table which contains 3 columns: `PRODUCT_CLASS_ID`, `PRODUCT_ID` and `brand_name`.
AGG_C_SPECIAL_SALES_FACT_1997 table which contains 3 columns: `PRODUCT_ID`, `STORE_COST_SUM`, `FACT_COUNT`;
AGG_C_14_SALES_FACT_1997 this is exclude table
AGG_LC_100_SALES_FACT_1997 this is exclude table


```xml
<roma:DatabaseSchema   id="_databaseSchema_AggregateTables">
  <tables xsi:type="roma:PhysicalTable" id="_table_sales_fact_1997" name="SALES_FACT_1997">
    <columns xsi:type="roma:PhysicalColumn" id="_column_sales_fact_1997_product_id" name="PRODUCT_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_sales_fact_1997_store_cost" name="STORE_COST" type="Decimal" columnSize="10" decimalDigits="4"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_product" name="PRODUCT">
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_class_id" name="PRODUCT_CLASS_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_id" name="PRODUCT_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_brandName" name="brand_name" columnSize="60"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_productName" name="product_name" columnSize="60"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_product_class" name="PRODUCT_CLASS">
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_class_product_class_id" name="PRODUCT_CLASS_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_product_class_product_famile" name="PRODUCT_FAMILE" columnSize="60"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_agg_c_special_sales_fact_1997" name="AGG_C_SPECIAL_SALES_FACT_1997">
    <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_product_id" name="PRODUCT_ID" type="Integer"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_store_cost_sum" name="STORE_COST_SUM" type="Decimal" columnSize="10" decimalDigits="4"/>
    <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_fact_count" name="FACT_COUNT" type="Integer"/>
  </tables>
  <tables xsi:type="roma:PhysicalTable" id="_table_agg_c_14_sales_fact_1997" name="AGG_C_14_SALES_FACT_1997"/>
  <tables xsi:type="roma:PhysicalTable" id="_table_agg_lc_100_sales_fact_1997" name="AGG_LC_100_SALES_FACT_1997"/>
</roma:DatabaseSchema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery, as it directly references the physical table `SALES_FACT_1997`.
The query element is not visible to users accessing the cube through the XMLA API, such as Daanse Dashboard, Power BI, or Excel.
this TableQuery have one AggregationTable with reference to 'AGG_C_SPECIAL_SALES_FACT_1997' the specific database table that contains the pre-computed aggregation data.
this tabele will use for calculate aggregation data for aggregationMeasure [Measures].[Store Cost] for level [Product].[Product Family].[Product Family].


```xml
<roma:TableQuery  id="_query_salesFact1997Query" aggregationTables="roma:AggregationName _aggregationName_AGG_C_SPECIAL_SALES_FACT_1997" table="_table_sales_fact_1997">
  <aggregationExcludes name="AGG_C_14_SALES_FACT_1997"/>
  <aggregationExcludes name="AGG_LC_100_SALES_FACT_1997"/>
</roma:TableQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Query

The TableQuery for the PRODUCT table.


```xml
<roma:TableQuery  id="_query_productQuery" table="_table_product"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Class Query

The TableQuery for the PRODUCT_CLASS table.


```xml
<roma:TableQuery  id="_query_productClassQuery" table="_table_product_class"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Class Query

The JoinQuery specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the PRODUCT the join uses the foreign key.
- In the PRODUCT_CLASS table, the join uses the primary key.


```xml
<roma:JoinQuery  id="_joinQuery_productClassProduct">
  <left key="_column_product_product_class_id" query="_query_productQuery"/>
  <right key="_column_product_class_product_class_id" query="_query_productClassQuery"/>
</roma:JoinQuery>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level - Product Family

The Level Product Family uses the column attribute to specify the primary key column PRODUCT_FAMILE from table PRODUCT_CLASS.


```xml
<roma:Level  id="_level_Product_Family_Level" name="Product Family" column="_column_product_class_product_famile"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists the level Product Family.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the Join-query used to retrieve the data for the hierarchy.


```xml
<roma:ExplicitHierarchy  id="_hierarchy_Product_Family_Hierarchy" name="Product Family" displayFolder="Details" primaryKey="_column_product_product_id" query="_joinQuery_productClassProduct" levels="_level_Product_Family_Level"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<roma:StandardDimension  id="_dimension_ProductDimension" name="Product" hierarchies="roma:ExplicitHierarchy _hierarchy_Product_Family_Hierarchy"/>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube, MeasureGroup and Measure

The cube is the element visible to users in analysis tools. A cube is based on elements such as measures, dimensions, hierarchies, KPIs, and named sets.
In this case, we only define measures, which are the minimal required elements. The other elements are optional. To link a measure to the cube, we use the `MeasureGroup` element.
The `MeasureGroup` is useful for organizing multiple measures into logical groups. Measures are used to define the data that should be aggregated.
In this example, the measure is named Store Cost and references the `STORE_COST` column in the SALES_FACT_1997 table.
But fact table query has AggregationTable 'AGG_C_SPECIAL_SALES_FACT_1997'. The aggregation calculation will use AGG_C_SPECIAL_SALES_FACT_1997 table instead of SALES_FACT_1997.
The measure is aggregated using summation.


```xml
<roma:PhysicalCube   id="_cube_Sales" name="Sales" query="_query_salesFact1997Query">
  <dimensionConnectors foreignKey="roma:PhysicalColumn _column_sales_fact_1997_product_id" dimension="roma:StandardDimension _dimension_ProductDimension" overrideDimensionName="Product" id="_dimensionConnector_product"/>
  <measureGroups>
    <measures xsi:type="roma:SumMeasure" id="_measure_StoreCost" name="Store Cost" formatString=",###.00" column="_column_sales_fact_1997_store_cost"/>
  </measureGroups>
</roma:PhysicalCube>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:AggregationName id="_aggregationName_AGG_C_SPECIAL_SALES_FACT_1997" name="_table_agg_c_special_sales_fact_1997">
    <aggregationFactCount column="_column_agg_c_special_sales_fact_1997_fact_count"/>
    <aggregationMeasures column="_column_agg_c_special_sales_fact_1997_store_cost_sum" name="[Measures].[Store Cost]"/>
    <aggregationLevels column="_column_product_class_product_famile" name="[Product].[Product Family].[Product Family]"/>
  </roma:AggregationName>
  <roma:ExplicitHierarchy id="_hierarchy_Product_Family_Hierarchy" name="Product Family" displayFolder="Details" primaryKey="_column_product_product_id" query="_joinQuery_productClassProduct" levels="_level_Product_Family_Level"/>
  <roma:Catalog description="Aggregate table optimization techniques" name="Daanse Tutorial - Aggregation Aggregate Tables" cubes="_cube_Sales" dbschemas="_databaseSchema_AggregateTables"/>
  <roma:DatabaseSchema id="_databaseSchema_AggregateTables">
    <tables xsi:type="roma:PhysicalTable" id="_table_sales_fact_1997" name="SALES_FACT_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_sales_fact_1997_product_id" name="PRODUCT_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_sales_fact_1997_store_cost" name="STORE_COST" type="Decimal" columnSize="10" decimalDigits="4"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_product" name="PRODUCT">
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_class_id" name="PRODUCT_CLASS_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_product_id" name="PRODUCT_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_brandName" name="brand_name" columnSize="60"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_productName" name="product_name" columnSize="60"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_product_class" name="PRODUCT_CLASS">
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_class_product_class_id" name="PRODUCT_CLASS_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_product_class_product_famile" name="PRODUCT_FAMILE" columnSize="60"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_agg_c_special_sales_fact_1997" name="AGG_C_SPECIAL_SALES_FACT_1997">
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_product_id" name="PRODUCT_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_store_cost_sum" name="STORE_COST_SUM" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="_column_agg_c_special_sales_fact_1997_fact_count" name="FACT_COUNT" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="_table_agg_c_14_sales_fact_1997" name="AGG_C_14_SALES_FACT_1997"/>
    <tables xsi:type="roma:PhysicalTable" id="_table_agg_lc_100_sales_fact_1997" name="AGG_LC_100_SALES_FACT_1997"/>
  </roma:DatabaseSchema>
  <roma:TableQuery id="_query_productClassQuery" table="_table_product_class"/>
  <roma:TableQuery id="_query_salesFact1997Query" aggregationTables="_aggregationName_AGG_C_SPECIAL_SALES_FACT_1997" table="_table_sales_fact_1997">
    <aggregationExcludes name="AGG_C_14_SALES_FACT_1997"/>
    <aggregationExcludes name="AGG_LC_100_SALES_FACT_1997"/>
  </roma:TableQuery>
  <roma:TableQuery id="_query_productQuery" table="_table_product"/>
  <roma:JoinQuery id="_joinQuery_productClassProduct">
    <left key="_column_product_product_class_id" query="_query_productQuery"/>
    <right key="_column_product_class_product_class_id" query="_query_productClassQuery"/>
  </roma:JoinQuery>
  <roma:Level id="_level_Product_Family_Level" name="Product Family" column="_column_product_class_product_famile"/>
  <roma:StandardDimension id="_dimension_ProductDimension" name="Product" hierarchies="_hierarchy_Product_Family_Hierarchy"/>
  <roma:PhysicalCube id="_cube_Sales" name="Sales" query="_query_salesFact1997Query">
    <dimensionConnectors foreignKey="_column_sales_fact_1997_product_id" dimension="_dimension_ProductDimension" overrideDimensionName="Product" id="_dimensionConnector_product"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="_measure_StoreCost" name="Store Cost" formatString="#,###.00" column="_column_sales_fact_1997_store_cost"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.aggregation.aggregatetables.zip" download>Download Zip File</a>
