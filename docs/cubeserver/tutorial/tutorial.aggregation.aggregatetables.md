---
title: Aggregation Aggregate Tables
group: Aggregation
kind: TUTORIAL
number: 2.08.02
---
# Daanse Tutorial - Aggregation Aggregate Tables

This tutorial discusses TableSource with AggregationExclude.
AggregationExclude defines exclusion rules that prevent specific tables from being used as aggregation tables,
even if they would otherwise match aggregation patterns or be considered suitable for aggregation optimization.
AggregationExclude is essential for maintaining aggregation accuracy and system reliability by providing explicit
control over which tables should be avoided during aggregation table discovery and selection.


## Database Schema

The cube defined in this example is based on

- `SALES_FACT_1997 `table which contains two columns: `PRODUCT_ID` and `STORE_COST`.<br />
- `PRODUCT` table which contains 4 columns: `PRODUCT_CLASS_ID`,`PRODUCT_ID`,`brand_name`,`product_name`<br />
- `PRODUCT_CLASS` table which contains 3 columns: `PRODUCT_CLASS_ID`, `PRODUCT_ID` and `brand_name`.<br />
- `AGG_C_SPECIAL_SALES_FACT_1997` table which contains 3 columns: `PRODUCT_ID`, `STORE_COST_SUM`, `FACT_COUNT`;<br />
- `AGG_C_14_SALES_FACT_1997` this is exclude table<br />
- `AGG_LC_100_SALES_FACT_1997` this is exclude table<br />


```xml
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_sales_fact_1997" name="SALES_FACT_1997">
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_product_id" name="PRODUCT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_cost" name="STORE_COST"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_product" name="PRODUCT">
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_class_id" name="PRODUCT_CLASS_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_id" name="PRODUCT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_brand_name" name="brand_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_name" name="product_name"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_product_class" name="PRODUCT_CLASS">
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_class_id" name="PRODUCT_CLASS_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_famile" name="PRODUCT_FAMILE"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_c_special_sales_fact_1997" name="AGG_C_SPECIAL_SALES_FACT_1997">
    <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_product_id" name="PRODUCT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_store_cost_sum" name="STORE_COST_SUM"/>
    <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_fact_count" name="FACT_COUNT"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_c_14_sales_fact_1997" name="AGG_C_14_SALES_FACT_1997"/>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_lc_100_sales_fact_1997" name="AGG_LC_100_SALES_FACT_1997"/>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery, as it directly references the physical table `SALES_FACT_1997`.
The query element is not visible to users accessing the cube through the XMLA API, such as Daanse Dashboard, Power BI, or Excel.
this TableSource have one AggregationTable with reference to 'AGG_C_SPECIAL_SALES_FACT_1997' the specific database table that contains the pre-computed aggregation data.
this tabele will use for calculate aggregation data for aggregationMeasure [Measures].[Store Cost] for level [Product].[Product Family].[Product Family].


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapagg="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/aggregation" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_sales_fact_1997" table="_table_sales_fact_1997">
    <aggregationExcludes xmi:id="_aggregationexclude_agg_c_14_sales_fact_1997" name="AGG_C_14_SALES_FACT_1997"/>
    <aggregationExcludes xmi:id="_aggregationexclude_agg_lc_100_sales_fact_1997" name="AGG_LC_100_SALES_FACT_1997"/>
    <aggregationTables xsi:type="rolapagg:AggregationName" href="_aggregationname"/>
  </rolapsrc:TableSource>
  <relational:Table xmi:id="_table_sales_fact_1997" name="SALES_FACT_1997">
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_product_id" name="PRODUCT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_cost" name="STORE_COST"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Query

The TableSource for the PRODUCT table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <relational:Table xmi:id="_table_product" name="PRODUCT">
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_class_id" name="PRODUCT_CLASS_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_id" name="PRODUCT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_brand_name" name="brand_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_name" name="product_name"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Class Query

The TableSource for the PRODUCT_CLASS table.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_product_class" table="_table_product_class"/>
  <relational:Table xmi:id="_table_product_class" name="PRODUCT_CLASS">
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_class_id" name="PRODUCT_CLASS_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_famile" name="PRODUCT_FAMILE"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Product Class Query

The JoinSource specifies which TableQueries should be joined. It also defines the columns in each table that are used for the join:

- In the PRODUCT the join uses the foreign key.
- In the PRODUCT_CLASS table, the join uses the primary key.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_product_class_id" key="_column_product_product_class_id" query="_tablesource_product"/>
    <right xmi:id="_joinedqueryelement_product_class_id_1" key="_column_product_class_product_class_id" query="_tablesource_product_class"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_product_class" table="_table_product_class"/>
  <relational:Table xmi:id="_table_product_class" name="PRODUCT_CLASS">
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_class_id" name="PRODUCT_CLASS_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_famile" name="PRODUCT_FAMILE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <relational:Table xmi:id="_table_product" name="PRODUCT">
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_class_id" name="PRODUCT_CLASS_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_id" name="PRODUCT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_brand_name" name="brand_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_name" name="product_name"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Level - Product Family

The Level Product Family uses the column attribute to specify the primary key column PRODUCT_FAMILE from table PRODUCT_CLASS.


```xml
<rolaplev:Level xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmi:id="_level_product_family" name="Product Family">
  <column href="_column_product_class_product_famile"/>
</rolaplev:Level>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Hierarchy

This hierarchy consists the level Product Family.
- The primaryKey attribute specifies the column that contains the primary key of the hierarchy.
- The query attribute references the Join-query used to retrieve the data for the hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product_family" name="Product Family" displayFolder="Details" primaryKey="_column_product_product_id" query="_joinsource" levels="_level_product_family"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_product_class_id" key="_column_product_product_class_id" query="_tablesource_product"/>
    <right xmi:id="_joinedqueryelement_product_class_id_1" key="_column_product_class_product_class_id" query="_tablesource_product_class"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_product_class" table="_table_product_class"/>
  <relational:Table xmi:id="_table_product_class" name="PRODUCT_CLASS">
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_class_id" name="PRODUCT_CLASS_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_famile" name="PRODUCT_FAMILE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <rolaplev:Level xmi:id="_level_product_family" name="Product Family" column="_column_product_class_product_famile"/>
  <relational:Table xmi:id="_table_product" name="PRODUCT">
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_class_id" name="PRODUCT_CLASS_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_id" name="PRODUCT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_brand_name" name="brand_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_name" name="product_name"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Dimension

The Dimension has only one hierarchy.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_product_family"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_product_class_id" key="_column_product_product_class_id" query="_tablesource_product"/>
    <right xmi:id="_joinedqueryelement_product_class_id_1" key="_column_product_class_product_class_id" query="_tablesource_product_class"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_product_class" table="_table_product_class"/>
  <relational:Table xmi:id="_table_product_class" name="PRODUCT_CLASS">
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_class_id" name="PRODUCT_CLASS_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_famile" name="PRODUCT_FAMILE"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product_family" name="Product Family" displayFolder="Details" primaryKey="_column_product_product_id" query="_joinsource" levels="_level_product_family"/>
  <rolaplev:Level xmi:id="_level_product_family" name="Product Family" column="_column_product_class_product_famile"/>
  <relational:Table xmi:id="_table_product" name="PRODUCT">
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_class_id" name="PRODUCT_CLASS_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_id" name="PRODUCT_ID"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_brand_name" name="brand_name"/>
    <feature xsi:type="relational:Column" xmi:id="_column_product_product_name" name="product_name"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapagg="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/aggregation" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_decimal" name="DECIMAL" structuralFeature="_column_agg_c_special_sales_fact_1997_store_cost_sum _column_sales_fact_1997_store_cost" typeNumber="3" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_product_brand_name _column_product_product_name _column_product_class_product_famile" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_agg_c_special_sales_fact_1997_fact_count _column_product_class_product_class_id _column_product_product_class_id _column_product_product_id _column_sales_fact_1997_product_id _column_agg_c_special_sales_fact_1997_product_id" typeNumber="4"/>
  <rolapagg:AggregationName xmi:id="_aggregationname" name="_table_agg_c_special_sales_fact_1997">
    <aggregationFactCount xmi:id="_aggregationcolumnname_fact_count" column="_column_agg_c_special_sales_fact_1997_fact_count"/>
    <aggregationMeasures xmi:id="_aggregationmeasure_measures_store_cost" column="_column_agg_c_special_sales_fact_1997_store_cost_sum" name="[Measures].[Store Cost]"/>
    <aggregationLevels xmi:id="_aggregationlevel_product_product_family_product_family" column="_column_product_class_product_famile" name="[Product].[Product Family].[Product Family]"/>
  </rolapagg:AggregationName>
  <rolapcat:Catalog xmi:id="_catalog_aggregation_aggregate_tables" description="Aggregate table optimization techniques" name="Daanse Tutorial - Aggregation Aggregate Tables" cubes="_physicalcube_sales" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_sales_fact_1997" name="SALES_FACT_1997">
      <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_product_id" name="PRODUCT_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_sales_fact_1997_store_cost" name="STORE_COST" type="_sqlsimpletype_decimal"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_product" name="PRODUCT">
      <feature xsi:type="relational:Column" xmi:id="_column_product_product_class_id" name="PRODUCT_CLASS_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_product_id" name="PRODUCT_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_brand_name" name="brand_name" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_product_name" name="product_name" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_product_class" name="PRODUCT_CLASS">
      <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_class_id" name="PRODUCT_CLASS_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_product_class_product_famile" name="PRODUCT_FAMILE" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_c_special_sales_fact_1997" name="AGG_C_SPECIAL_SALES_FACT_1997">
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_product_id" name="PRODUCT_ID" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_store_cost_sum" name="STORE_COST_SUM" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_agg_c_special_sales_fact_1997_fact_count" name="FACT_COUNT" type="_sqlsimpletype_integer"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_c_14_sales_fact_1997" name="AGG_C_14_SALES_FACT_1997"/>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_agg_lc_100_sales_fact_1997" name="AGG_LC_100_SALES_FACT_1997"/>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_product" table="_table_product"/>
  <rolapsrc:TableSource xmi:id="_tablesource_sales_fact_1997" table="_table_sales_fact_1997" aggregationTables="_aggregationname">
    <aggregationExcludes xmi:id="_aggregationexclude_agg_c_14_sales_fact_1997" name="AGG_C_14_SALES_FACT_1997"/>
    <aggregationExcludes xmi:id="_aggregationexclude_agg_lc_100_sales_fact_1997" name="AGG_LC_100_SALES_FACT_1997"/>
  </rolapsrc:TableSource>
  <rolapsrc:TableSource xmi:id="_tablesource_product_class" table="_table_product_class"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_product_class_id_1" key="_column_product_product_class_id" query="_tablesource_product"/>
    <right xmi:id="_joinedqueryelement_product_class_id" key="_column_product_class_product_class_id" query="_tablesource_product_class"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_product_family" name="Product Family" column="_column_product_class_product_famile"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product_family" name="Product Family" displayFolder="Details" primaryKey="_column_product_product_id" query="_joinsource" levels="_level_product_family"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_product" name="Product" hierarchies="_explicithierarchy_product_family"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_sales" name="Sales" query="_tablesource_sales_fact_1997">
    <dimensionConnectors xmi:id="_dimensionconnector_product" foreignKey="_column_sales_fact_1997_product_id" dimension="_standarddimension_product" overrideDimensionName="Product"/>
    <measureGroups xmi:id="_measuregroup">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_store_cost" name="Store Cost" formatString="#,###.00" column="_column_sales_fact_1997_store_cost"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.aggregation.aggregatetables.zip" download>Download Zip File</a>
