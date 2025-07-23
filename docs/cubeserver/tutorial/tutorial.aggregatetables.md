---
title: Cube_with_Aggregate_tables
group: Unstrutured
kind: other
number: z0
---
Aggregate tables are a way to improve Mondrian's performance when the fact table contains
a huge number of rows: a million or more. An aggregate table is essentially a pre-computed
summary of the data in the fact table.


catalog with schema with aggregate tables


## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ExplicitHierarchy id="Product_Family_Hierarchy" name="Product Family" displayFolder="Details" hasAll="true" primaryKey="PRODUCT_PRODUCT_ID" query="joinQuery" levels="Product_Family_Level"/>
  <roma:AggregationName id="aggregationName" name="AGG_C_SPECIAL_SALES_FACT_1997">
    <aggregationFactCount column="aggCSpecialSalesFact1997_FACT_COUNT"/>
    <aggregationMeasures column="aggCSpecialSalesFact1997_STORE_COST_SUM" name="[Measures].[Store Cost]"/>
    <aggregationLevels column="PRODUCT_CLASS_PRODUCT_FAMILE" name="[Product].[Product Family].[Product Family]"/>
  </roma:AggregationName>
  <roma:Catalog description="Schema with aggregate tables" name="Cube_with_Aggregate_tables" cubes="Sales" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="SALES_FACT_1997" name="SALES_FACT_1997">
      <columns xsi:type="roma:PhysicalColumn" id="SALES_FACT_1997_PRODUCT_ID" name="PRODUCT_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="SALES_FACT_1997_STORE_COST" name="STORE_COST" type="Decimal" columnSize="10" decimalDigits="4"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="PRODUCT" name="PRODUCT">
      <columns xsi:type="roma:PhysicalColumn" id="PRODUCT_PRODUCT_CLASS_ID" name="PRODUCT_CLASS_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="PRODUCT_PRODUCT_ID" name="PRODUCT_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="PRODUCT_brand_name" name="brand_name" columnSize="60"/>
      <columns xsi:type="roma:PhysicalColumn" id="PRODUCT_brand_name" name="brand_name" columnSize="60"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="PRODUCT_CLASS" name="PRODUCT_CLASS">
      <columns xsi:type="roma:PhysicalColumn" id="PRODUCT_CLASS_PRODUCT_CLASS_ID" name="PRODUCT_CLASS_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="PRODUCT_CLASS_PRODUCT_FAMILE" name="PRODUCT_FAMILE" columnSize="60"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="AGG_C_SPECIAL_SALES_FACT_1997" name="AGG_C_SPECIAL_SALES_FACT_1997">
      <columns xsi:type="roma:PhysicalColumn" id="aggCSpecialSalesFact1997_PRODUCT_ID" name="PRODUCT_ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="aggCSpecialSalesFact1997_STORE_COST_SUM" name="STORE_COST_SUM" type="Decimal" columnSize="10" decimalDigits="4"/>
      <columns xsi:type="roma:PhysicalColumn" id="aggCSpecialSalesFact1997_FACT_COUNT" name="FACT_COUNT" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="AGG_C_14_SALES_FACT_1997" name="AGG_C_14_SALES_FACT_1997"/>
    <tables xsi:type="roma:PhysicalTable" id="AGG_LC_100_SALES_FACT_1997" name="AGG_LC_100_SALES_FACT_1997"/>
  </roma:DatabaseSchema>
  <roma:TableQuery id="productQuery" table="PRODUCT"/>
  <roma:TableQuery id="salesFact1997Query" aggregationTables="aggregationName" table="SALES_FACT_1997">
    <aggregationExcludes name="AGG_C_14_SALES_FACT_1997"/>
    <aggregationExcludes name="AGG_LC_100_SALES_FACT_1997"/>
  </roma:TableQuery>
  <roma:TableQuery id="productClassQuery" table="PRODUCT_CLASS"/>
  <roma:JoinQuery id="joinQuery">
    <left key="PRODUCT_PRODUCT_CLASS_ID" query="productQuery"/>
    <right key="PRODUCT_CLASS_PRODUCT_CLASS_ID" query="productClassQuery"/>
  </roma:JoinQuery>
  <roma:Level id="Product_Family_Level" name="Product Family" column="PRODUCT_CLASS_PRODUCT_FAMILE"/>
  <roma:StandardDimension id="ProductDimension" name="Product" hierarchies="Product_Family_Hierarchy"/>
  <roma:PhysicalCube id="Sales" name="Sales" query="salesFact1997Query">
    <dimensionConnectors foreignKey="SALES_FACT_1997_PRODUCT_ID" dimension="ProductDimension" overrideDimensionName="Product"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Store Cost" name="Store Cost" formatString="#,###.00" column="SALES_FACT_1997_STORE_COST"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.aggregatetables.zip" download>Download Zip File</a>
