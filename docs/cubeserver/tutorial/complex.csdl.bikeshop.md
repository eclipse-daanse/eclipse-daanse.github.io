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
<relational:Schema xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmi:id="_schema">
  <ownedElement xsi:type="relational:Table" xmi:id="_table_bike" name="Bike">
    <feature xsi:type="relational:Column" xmi:id="_column_bike_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productkey" name="ProductKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productalternatekey" name="ProductAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productsubcategorykey" name="ProductSubcategoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productname" name="ProductName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_standardcost" name="StandardCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_finishedgoodsflag" name="FinishedGoodsFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_color" name="Color"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_listprice" name="ListPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_size" name="Size"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_sizerange" name="SizeRange"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_weight" name="Weight"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_dealerprice" name="DealerPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_class" name="Class"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_style" name="Style"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_modelname" name="ModelName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_description" name="Description"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_weightunitmeasurecode" name="WeightUnitMeasureCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_sizeunitmeasurecode" name="SizeUnitMeasureCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_safetystocklevel" name="SafetyStockLevel"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_reorderpoint" name="ReorderPoint"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_daystomanufacture" name="DaysToManufacture"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productline" name="ProductLine"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_bikesales" name="BikeSales">
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_salesordernumber" name="SalesOrderNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_salesorderlinenumber" name="SalesOrderLineNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_revisionnumber" name="RevisionNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_productkey" name="ProductKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_countrycode" name="CountryCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_currencykey" name="CurrencyKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_calendarquarter" name="CalendarQuarter"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_saleschannelcode" name="SalesChannelCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_orderquantity" name="OrderQuantity"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_unitprice" name="UnitPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_extendedamount" name="ExtendedAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_unitpricediscountpct" name="UnitPriceDiscountPct"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_discountamount" name="DiscountAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_productstandardcost" name="ProductStandardCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_totalproductcost" name="TotalProductCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_salesamount" name="SalesAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_taxamt" name="TaxAmt"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_freight" name="Freight"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_carriertrackingnumber" name="CarrierTrackingNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_customerponumber" name="CustomerPONumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_customeraccountnumber" name="CustomerAccountNumber"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_bikesubcategory" name="BikeSubcategory">
    <feature xsi:type="relational:Column" xmi:id="_column_bikesubcategory_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesubcategory_productsubcategorykey" name="ProductSubcategoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesubcategory_subcategory" name="Subcategory"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_calendarquarter" name="CalendarQuarter">
    <feature xsi:type="relational:Column" xmi:id="_column_calendarquarter_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_calendarquarter_calendarquarter2" name="CalendarQuarter2"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_countrycode" name="CountryCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_countryname" name="CountryName"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_currency" name="Currency">
    <feature xsi:type="relational:Column" xmi:id="_column_currency_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_currency_currencykey" name="CurrencyKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_currency_currencyalternatekey" name="CurrencyAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_currency_currencyname" name="CurrencyName"/>
  </ownedElement>
  <ownedElement xsi:type="relational:Table" xmi:id="_table_saleschannel" name="SalesChannel">
    <feature xsi:type="relational:Column" xmi:id="_column_saleschannel_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_saleschannel_saleschannelcode" name="SalesChannelCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_saleschannel_saleschannelname" name="SalesChannelName"/>
  </ownedElement>
</relational:Schema>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Query

The bridge between the cube and the database is the query element. In this case, it is a TableQuery, as it directly references the physical table `Fact`. The query element is not visible to users accessing the cube through the XMLA API, such as Daanse Dashboard, Power BI, or Excel.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapsrc:TableSource xmi:id="_tablesource_bike" table="_table_bike"/>
  <relational:Table xmi:id="_table_bike" name="Bike">
    <feature xsi:type="relational:Column" xmi:id="_column_bike_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productkey" name="ProductKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productalternatekey" name="ProductAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productsubcategorykey" name="ProductSubcategoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productname" name="ProductName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_standardcost" name="StandardCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_finishedgoodsflag" name="FinishedGoodsFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_color" name="Color"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_listprice" name="ListPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_size" name="Size"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_sizerange" name="SizeRange"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_weight" name="Weight"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_dealerprice" name="DealerPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_class" name="Class"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_style" name="Style"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_modelname" name="ModelName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_description" name="Description"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_weightunitmeasurecode" name="WeightUnitMeasureCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_sizeunitmeasurecode" name="SizeUnitMeasureCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_safetystocklevel" name="SafetyStockLevel"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_reorderpoint" name="ReorderPoint"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_daystomanufacture" name="DaysToManufacture"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productline" name="ProductLine"/>
  </relational:Table>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*
## Cube CSDLBI 1.1

The Cube CSDLBI 1.0.


```xml
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"  xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <rolapcube:PhysicalCube xmi:id="_physicalcube_saleschannel" name="SalesChannel" query="_tablesource_bikesales">
    <kpis xmi:id="_kpi_three_circles_colored" name="Three Circles Colored" goal="[Measures].[Sum of TotalProductCost]" status="[Measures].[Sum of TotalProductCost]"/>
    <dimensionConnectors xmi:id="_dimensionconnector_bike" foreignKey="_column_bikesales_productkey" dimension="_standarddimension_bike" overrideDimensionName="Bike"/>
    <dimensionConnectors xmi:id="_dimensionconnector_bikesubcategory" foreignKey="_column_bikesales_productkey" dimension="_standarddimension_bikesubcategory" overrideDimensionName="BikeSubcategory"/>
    <dimensionConnectors xmi:id="_dimensionconnector_calendarquarter" foreignKey="_column_bikesales_calendarquarter" dimension="_standarddimension_calendarquarter" overrideDimensionName="CalendarQuarter"/>
    <dimensionConnectors xmi:id="_dimensionconnector_country" foreignKey="_column_bikesales_countrycode" dimension="_standarddimension_country" overrideDimensionName="Country"/>
    <dimensionConnectors xmi:id="_dimensionconnector_currency" foreignKey="_column_bikesales_currencykey" dimension="_standarddimension_currency" overrideDimensionName="Currency"/>
    <dimensionConnectors xmi:id="_dimensionconnector_saleschannel" foreignKey="_column_bikesales_saleschannelcode" dimension="_standarddimension_saleschannel" overrideDimensionName="SalesChannel"/>
    <measureGroups xmi:id="_measuregroup_bikesales" name="BikeSales">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sum_of_totalproductcost" name="Sum of TotalProductCost" column="_column_bikesales_totalproductcost"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sum_of_salesamount" name="Sum of SalesAmount" column="_column_bikesales_salesamount"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_calendarquarter2" primaryKey="_column_calendarquarter_calendarquarter2" query="_tablesource_calendarquarter" levels="_level_rownumber_5 _level_calendarquarter2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_bikesubcategory" name="BikeSubcategory" hierarchies="_explicithierarchy_productkey"/>
  <rolaplev:Level xmi:id="_level_sizerange" name="SizeRange" column="_column_bike_sizerange"/>
  <rolaplev:Level xmi:id="_level_color" name="Color" column="_column_bike_color"/>
  <rolaplev:Level xmi:id="_level_saleschannelname" name="SalesChannelName" column="_column_saleschannel_saleschannelname"/>
  <rolaplev:Level xmi:id="_level_productalternatekey" name="ProductAlternateKey" column="_column_bike_productalternatekey"/>
  <rolaplev:Level xmi:id="_level_listprice" name="ListPrice" column="_column_bike_listprice"/>
  <rolaplev:Level xmi:id="_level_productname" name="ProductName" column="_column_bike_productname"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product_hierarchy" name="Product_Hierarchy" primaryKey="_column_bike_productkey" query="_tablesource_bike" levels="_level_rownumber_1 _level_productkey _level_productalternatekey _level_productsubcategorykey _level_productname _level_standardcost _level_finishedgoodsflag _level_color _level_listprice _level_size _level_sizerange _level_weight _level_dealerprice _level_class _level_style _level_modelname _level_description _level_weightunitmeasurecode _level_sizeunitmeasurecode _level_safetystocklevel _level_reorderpoint _level_daystomanufacture _level_productline"/>
  <rolaplev:Level xmi:id="_level_size" name="Size" column="_column_bike_size"/>
  <rolaplev:Level xmi:id="_level_weight" name="Weight" column="_column_bike_weight"/>
  <relational:Table xmi:id="_table_calendarquarter" name="CalendarQuarter">
    <feature xsi:type="relational:Column" xmi:id="_column_calendarquarter_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_calendarquarter_calendarquarter2" name="CalendarQuarter2"/>
  </relational:Table>
  <relational:Table xmi:id="_table_bike" name="Bike">
    <feature xsi:type="relational:Column" xmi:id="_column_bike_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productkey" name="ProductKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productalternatekey" name="ProductAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productsubcategorykey" name="ProductSubcategoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productname" name="ProductName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_standardcost" name="StandardCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_finishedgoodsflag" name="FinishedGoodsFlag"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_color" name="Color"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_listprice" name="ListPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_size" name="Size"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_sizerange" name="SizeRange"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_weight" name="Weight"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_dealerprice" name="DealerPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_class" name="Class"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_style" name="Style"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_modelname" name="ModelName"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_description" name="Description"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_weightunitmeasurecode" name="WeightUnitMeasureCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_sizeunitmeasurecode" name="SizeUnitMeasureCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_safetystocklevel" name="SafetyStockLevel"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_reorderpoint" name="ReorderPoint"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_daystomanufacture" name="DaysToManufacture"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bike_productline" name="ProductLine"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_bike" table="_table_bike"/>
  <relational:Table xmi:id="_table_currency" name="Currency">
    <feature xsi:type="relational:Column" xmi:id="_column_currency_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_currency_currencykey" name="CurrencyKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_currency_currencyalternatekey" name="CurrencyAlternateKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_currency_currencyname" name="CurrencyName"/>
  </relational:Table>
  <relational:Table xmi:id="_table_bikesubcategory" name="BikeSubcategory">
    <feature xsi:type="relational:Column" xmi:id="_column_bikesubcategory_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesubcategory_productsubcategorykey" name="ProductSubcategoryKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesubcategory_subcategory" name="Subcategory"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_weightunitmeasurecode" name="WeightUnitMeasureCode" column="_column_bike_weightunitmeasurecode"/>
  <rolapsrc:TableSource xmi:id="_tablesource_bikesubcategory" table="_table_bikesubcategory"/>
  <rolaplev:Level xmi:id="_level_calendarquarter2" name="CalendarQuarter2" column="_column_calendarquarter_calendarquarter2"/>
  <rolaplev:Level xmi:id="_level_productsubcategorykey" name="ProductSubcategoryKey" column="_column_bike_productsubcategorykey"/>
  <rolaplev:Level xmi:id="_level_rownumber" name="RowNumber" column="_column_country_rownumber" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_productsubcategorykey_1" name="ProductSubcategoryKey" column="_column_bikesubcategory_productsubcategorykey"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_country" name="Country" hierarchies="_explicithierarchy_countrycode"/>
  <rolaplev:Level xmi:id="_level_subcategory" name="Subcategory" column="_column_bikesubcategory_subcategory"/>
  <rolaplev:Level xmi:id="_level_rownumber_1" name="RowNumber" column="_column_bike_rownumber" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_countrycode" name="CountryCode" column="_column_country_countrycode"/>
  <rolaplev:Level xmi:id="_level_rownumber_2" name="RowNumber" column="_column_bikesubcategory_rownumber" uniqueMembers="true"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_calendarquarter" name="CalendarQuarter" hierarchies="_explicithierarchy_calendarquarter2"/>
  <rolaplev:Level xmi:id="_level_standardcost" name="StandardCost" column="_column_bike_standardcost"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_saleschannelcode" primaryKey="_column_saleschannel_saleschannelcode" query="_tablesource_saleschannel" levels="_level_rownumber_4 _level_saleschannelcode _level_saleschannelname"/>
  <rolaplev:Level xmi:id="_level_currencykey" name="CurrencyKey" column="_column_currency_currencykey"/>
  <relational:Table xmi:id="_table_bikesales" name="BikeSales">
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_salesordernumber" name="SalesOrderNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_salesorderlinenumber" name="SalesOrderLineNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_revisionnumber" name="RevisionNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_productkey" name="ProductKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_countrycode" name="CountryCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_currencykey" name="CurrencyKey"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_calendarquarter" name="CalendarQuarter"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_saleschannelcode" name="SalesChannelCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_orderquantity" name="OrderQuantity"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_unitprice" name="UnitPrice"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_extendedamount" name="ExtendedAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_unitpricediscountpct" name="UnitPriceDiscountPct"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_discountamount" name="DiscountAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_productstandardcost" name="ProductStandardCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_totalproductcost" name="TotalProductCost"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_salesamount" name="SalesAmount"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_taxamt" name="TaxAmt"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_freight" name="Freight"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_carriertrackingnumber" name="CarrierTrackingNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_customerponumber" name="CustomerPONumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_bikesales_customeraccountnumber" name="CustomerAccountNumber"/>
  </relational:Table>
  <rolapsrc:TableSource xmi:id="_tablesource_bikesales" table="_table_bikesales"/>
  <rolaplev:Level xmi:id="_level_modelname" name="ModelName" column="_column_bike_modelname"/>
  <relational:Table xmi:id="_table_saleschannel" name="SalesChannel">
    <feature xsi:type="relational:Column" xmi:id="_column_saleschannel_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_saleschannel_saleschannelcode" name="SalesChannelCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_saleschannel_saleschannelname" name="SalesChannelName"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_productkey" name="ProductKey" column="_column_bike_productkey"/>
  <rolaplev:Level xmi:id="_level_description" name="Description" column="_column_bike_description"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_bike" name="Bike" hierarchies="_explicithierarchy_product_hierarchy"/>
  <rolapsrc:TableSource xmi:id="_tablesource_currency" table="_table_currency"/>
  <rolaplev:Level xmi:id="_level_reorderpoint" name="ReorderPoint" column="_column_bike_reorderpoint"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_currencykey" primaryKey="_column_currency_currencykey" query="_tablesource_currency" levels="_level_rownumber_3 _level_currencykey _level_currencyalternatekey _level_currencyname"/>
  <rolaplev:Level xmi:id="_level_safetystocklevel" name="SafetyStockLevel" column="_column_bike_safetystocklevel"/>
  <rolaplev:Level xmi:id="_level_sizeunitmeasurecode" name="SizeUnitMeasureCode" column="_column_bike_sizeunitmeasurecode"/>
  <rolaplev:Level xmi:id="_level_rownumber_3" name="RowNumber" column="_column_currency_rownumber" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_daystomanufacture" name="DaysToManufacture" column="_column_bike_daystomanufacture"/>
  <rolaplev:Level xmi:id="_level_currencyname" name="CurrencyName" column="_column_currency_currencyname"/>
  <rolaplev:Level xmi:id="_level_countryname" name="CountryName" column="_column_country_countryname" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_rownumber_4" name="RowNumber" column="_column_saleschannel_rownumber" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_currencyalternatekey" name="CurrencyAlternateKey" column="_column_currency_currencyalternatekey"/>
  <rolaplev:Level xmi:id="_level_finishedgoodsflag" name="FinishedGoodsFlag" column="_column_bike_finishedgoodsflag"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_saleschannel" name="SalesChannel" hierarchies="_explicithierarchy_saleschannelcode"/>
  <relational:Table xmi:id="_table_country" name="Country">
    <feature xsi:type="relational:Column" xmi:id="_column_country_rownumber" name="RowNumber"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_countrycode" name="CountryCode"/>
    <feature xsi:type="relational:Column" xmi:id="_column_country_countryname" name="CountryName"/>
  </relational:Table>
  <rolaplev:Level xmi:id="_level_productline" name="ProductLine" column="_column_bike_productline"/>
  <rolaplev:Level xmi:id="_level_saleschannelcode" name="SalesChannelCode" column="_column_saleschannel_saleschannelcode"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_countrycode" primaryKey="_column_country_countrycode" query="_tablesource_country" levels="_level_rownumber _level_countrycode _level_countryname"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_currency" name="Currency" hierarchies="_explicithierarchy_currencykey"/>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <rolaplev:Level xmi:id="_level_class" name="Class" column="_column_bike_class"/>
  <rolaplev:Level xmi:id="_level_rownumber_5" name="RowNumber" column="_column_calendarquarter_rownumber" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_dealerprice" name="DealerPrice" column="_column_bike_dealerprice"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_productkey" primaryKey="_column_bike_productkey" query="_joinsource" levels="_level_rownumber_2 _level_productsubcategorykey_1 _level_subcategory"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_productsubcategorykey" key="_column_bike_productsubcategorykey" query="_tablesource_bike"/>
    <right xmi:id="_joinedqueryelement_productsubcategorykey_1" key="_column_bikesubcategory_productsubcategorykey" query="_tablesource_bikesubcategory"/>
  </rolapsrc:JoinSource>
  <rolapsrc:TableSource xmi:id="_tablesource_saleschannel" table="_table_saleschannel"/>
  <rolaplev:Level xmi:id="_level_style" name="Style" column="_column_bike_style"/>
  <rolapsrc:TableSource xmi:id="_tablesource_calendarquarter" table="_table_calendarquarter"/>
</xmi:XMI>

```
*<small>Note: This is only a symbolic example. For the exact definition, see the [Definition](#definition) section.</small>*

## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolapcube="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube" xmlns:rolapdim="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension" xmlns:rolaphier="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy" xmlns:rolaplev="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/dimension/hierarchy/level" xmlns:rolapmeas="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/olap/cube/measure" xmlns:rolapsrc="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/source">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_bike_safetystocklevel _column_bike_daystomanufacture _column_bikesales_revisionnumber _column_currency_rownumber _column_bikesales_salesorderlinenumber _column_country_rownumber _column_bikesubcategory_rownumber _column_bikesales_currencykey _column_bikesales_rownumber _column_currency_currencykey _column_calendarquarter_rownumber _column_bike_sizeunitmeasurecode _column_bike_reorderpoint _column_country_countrycode _column_bikesubcategory_productsubcategorykey _column_saleschannel_rownumber _column_bike_productkey _column_bikesales_productkey _column_bike_productsubcategorykey _column_bikesales_orderquantity _column_bike_rownumber" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_bikesales_carriertrackingnumber _column_country_countryname _column_bikesales_salesordernumber _column_saleschannel_saleschannelcode _column_bike_description _column_bike_style _column_bike_weightunitmeasurecode _column_bike_productline _column_bikesales_customerponumber _column_bike_color _column_currency_currencyalternatekey _column_bikesales_customeraccountnumber _column_bikesales_countrycode _column_bike_size _column_bike_productalternatekey _column_bikesales_saleschannelcode _column_bike_productname _column_bikesales_calendarquarter _column_bike_class _column_bike_modelname _column_saleschannel_saleschannelname _column_bike_sizerange _column_currency_currencyname _column_bikesubcategory_subcategory _column_calendarquarter_calendarquarter2" typeNumber="12"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_decimal" name="DECIMAL" structuralFeature="_column_bikesales_salesamount _column_bikesales_taxamt _column_bikesales_freight _column_bikesales_totalproductcost _column_bikesales_extendedamount _column_bike_standardcost _column_bikesales_productstandardcost _column_bike_listprice _column_bikesales_unitprice _column_bike_dealerprice" typeNumber="3" numericPrecision="18" numericPrecisionRadix="10" numericScale="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_double_precision" name="DOUBLE PRECISION" structuralFeature="_column_bike_weight _column_bikesales_unitpricediscountpct _column_bikesales_discountamount" typeNumber="8" numericPrecisionRadix="2"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_boolean" name="BOOLEAN" structuralFeature="_column_bike_finishedgoodsflag" typeNumber="16"/>
  <rolapcat:Catalog xmi:id="_catalog_csdlbi_1_1" name="CSDLBI 1.1" cubes="_physicalcube_saleschannel" measuresDimensionName="BikeSales" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="relational:Table" xmi:id="_table_bike" name="Bike">
      <feature xsi:type="relational:Column" xmi:id="_column_bike_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_productkey" name="ProductKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_productalternatekey" name="ProductAlternateKey" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_productsubcategorykey" name="ProductSubcategoryKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_productname" name="ProductName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_standardcost" name="StandardCost" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_finishedgoodsflag" name="FinishedGoodsFlag" type="_sqlsimpletype_boolean"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_color" name="Color" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_listprice" name="ListPrice" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_size" name="Size" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_sizerange" name="SizeRange" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_weight" name="Weight" type="_sqlsimpletype_double_precision"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_dealerprice" name="DealerPrice" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_class" name="Class" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_style" name="Style" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_modelname" name="ModelName" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_description" name="Description" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_weightunitmeasurecode" name="WeightUnitMeasureCode" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_sizeunitmeasurecode" name="SizeUnitMeasureCode" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_safetystocklevel" name="SafetyStockLevel" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_reorderpoint" name="ReorderPoint" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_daystomanufacture" name="DaysToManufacture" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bike_productline" name="ProductLine" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_bikesales" name="BikeSales">
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_salesordernumber" name="SalesOrderNumber" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_salesorderlinenumber" name="SalesOrderLineNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_revisionnumber" name="RevisionNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_productkey" name="ProductKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_countrycode" name="CountryCode" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_currencykey" name="CurrencyKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_calendarquarter" name="CalendarQuarter" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_saleschannelcode" name="SalesChannelCode" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_orderquantity" name="OrderQuantity" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_unitprice" name="UnitPrice" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_extendedamount" name="ExtendedAmount" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_unitpricediscountpct" name="UnitPriceDiscountPct" type="_sqlsimpletype_double_precision"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_discountamount" name="DiscountAmount" type="_sqlsimpletype_double_precision"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_productstandardcost" name="ProductStandardCost" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_totalproductcost" name="TotalProductCost" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_salesamount" name="SalesAmount" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_taxamt" name="TaxAmt" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_freight" name="Freight" type="_sqlsimpletype_decimal"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_carriertrackingnumber" name="CarrierTrackingNumber" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_customerponumber" name="CustomerPONumber" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesales_customeraccountnumber" name="CustomerAccountNumber" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_bikesubcategory" name="BikeSubcategory">
      <feature xsi:type="relational:Column" xmi:id="_column_bikesubcategory_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesubcategory_productsubcategorykey" name="ProductSubcategoryKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_bikesubcategory_subcategory" name="Subcategory" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_calendarquarter" name="CalendarQuarter">
      <feature xsi:type="relational:Column" xmi:id="_column_calendarquarter_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_calendarquarter_calendarquarter2" name="CalendarQuarter2" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_country" name="Country">
      <feature xsi:type="relational:Column" xmi:id="_column_country_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_country_countrycode" name="CountryCode" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_country_countryname" name="CountryName" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_currency" name="Currency">
      <feature xsi:type="relational:Column" xmi:id="_column_currency_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_currency_currencykey" name="CurrencyKey" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_currency_currencyalternatekey" name="CurrencyAlternateKey" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_currency_currencyname" name="CurrencyName" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
    <ownedElement xsi:type="relational:Table" xmi:id="_table_saleschannel" name="SalesChannel">
      <feature xsi:type="relational:Column" xmi:id="_column_saleschannel_rownumber" name="RowNumber" type="_sqlsimpletype_integer"/>
      <feature xsi:type="relational:Column" xmi:id="_column_saleschannel_saleschannelcode" name="SalesChannelCode" type="_sqlsimpletype_character_varying"/>
      <feature xsi:type="relational:Column" xmi:id="_column_saleschannel_saleschannelname" name="SalesChannelName" type="_sqlsimpletype_character_varying"/>
    </ownedElement>
  </relational:Schema>
  <rolapsrc:TableSource xmi:id="_tablesource_country" table="_table_country"/>
  <rolapsrc:TableSource xmi:id="_tablesource_bikesubcategory" table="_table_bikesubcategory"/>
  <rolapsrc:TableSource xmi:id="_tablesource_currency" table="_table_currency"/>
  <rolapsrc:TableSource xmi:id="_tablesource_saleschannel" table="_table_saleschannel"/>
  <rolapsrc:TableSource xmi:id="_tablesource_calendarquarter" table="_table_calendarquarter"/>
  <rolapsrc:TableSource xmi:id="_tablesource_bike" table="_table_bike"/>
  <rolapsrc:TableSource xmi:id="_tablesource_bikesales" table="_table_bikesales"/>
  <rolapsrc:JoinSource xmi:id="_joinsource">
    <left xmi:id="_joinedqueryelement_productsubcategorykey" key="_column_bike_productsubcategorykey" query="_tablesource_bike"/>
    <right xmi:id="_joinedqueryelement_productsubcategorykey_1" key="_column_bikesubcategory_productsubcategorykey" query="_tablesource_bikesubcategory"/>
  </rolapsrc:JoinSource>
  <rolaplev:Level xmi:id="_level_dealerprice" name="DealerPrice" column="_column_bike_dealerprice"/>
  <rolaplev:Level xmi:id="_level_weightunitmeasurecode" name="WeightUnitMeasureCode" column="_column_bike_weightunitmeasurecode"/>
  <rolaplev:Level xmi:id="_level_currencyalternatekey" name="CurrencyAlternateKey" column="_column_currency_currencyalternatekey"/>
  <rolaplev:Level xmi:id="_level_sizerange" name="SizeRange" column="_column_bike_sizerange"/>
  <rolaplev:Level xmi:id="_level_rownumber" name="RowNumber" column="_column_currency_rownumber" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_currencykey" name="CurrencyKey" column="_column_currency_currencykey"/>
  <rolaplev:Level xmi:id="_level_productsubcategorykey" name="ProductSubcategoryKey" column="_column_bike_productsubcategorykey"/>
  <rolaplev:Level xmi:id="_level_productsubcategorykey_1" name="ProductSubcategoryKey" column="_column_bikesubcategory_productsubcategorykey"/>
  <rolaplev:Level xmi:id="_level_saleschannelcode" name="SalesChannelCode" column="_column_saleschannel_saleschannelcode"/>
  <rolaplev:Level xmi:id="_level_productname" name="ProductName" column="_column_bike_productname"/>
  <rolaplev:Level xmi:id="_level_rownumber_1" name="RowNumber" column="_column_calendarquarter_rownumber" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_saleschannelname" name="SalesChannelName" column="_column_saleschannel_saleschannelname"/>
  <rolaplev:Level xmi:id="_level_productalternatekey" name="ProductAlternateKey" column="_column_bike_productalternatekey"/>
  <rolaplev:Level xmi:id="_level_finishedgoodsflag" name="FinishedGoodsFlag" column="_column_bike_finishedgoodsflag"/>
  <rolaplev:Level xmi:id="_level_subcategory" name="Subcategory" column="_column_bikesubcategory_subcategory"/>
  <rolaplev:Level xmi:id="_level_class" name="Class" column="_column_bike_class"/>
  <rolaplev:Level xmi:id="_level_rownumber_2" name="RowNumber" column="_column_bike_rownumber" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_daystomanufacture" name="DaysToManufacture" column="_column_bike_daystomanufacture"/>
  <rolaplev:Level xmi:id="_level_rownumber_3" name="RowNumber" column="_column_bikesubcategory_rownumber" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_productkey" name="ProductKey" column="_column_bike_productkey"/>
  <rolaplev:Level xmi:id="_level_countrycode" name="CountryCode" column="_column_country_countrycode"/>
  <rolaplev:Level xmi:id="_level_modelname" name="ModelName" column="_column_bike_modelname"/>
  <rolaplev:Level xmi:id="_level_size" name="Size" column="_column_bike_size"/>
  <rolaplev:Level xmi:id="_level_weight" name="Weight" column="_column_bike_weight"/>
  <rolaplev:Level xmi:id="_level_calendarquarter2" name="CalendarQuarter2" column="_column_calendarquarter_calendarquarter2"/>
  <rolaplev:Level xmi:id="_level_rownumber_4" name="RowNumber" column="_column_saleschannel_rownumber" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_reorderpoint" name="ReorderPoint" column="_column_bike_reorderpoint"/>
  <rolaplev:Level xmi:id="_level_standardcost" name="StandardCost" column="_column_bike_standardcost"/>
  <rolaplev:Level xmi:id="_level_safetystocklevel" name="SafetyStockLevel" column="_column_bike_safetystocklevel"/>
  <rolaplev:Level xmi:id="_level_productline" name="ProductLine" column="_column_bike_productline"/>
  <rolaplev:Level xmi:id="_level_style" name="Style" column="_column_bike_style"/>
  <rolaplev:Level xmi:id="_level_countryname" name="CountryName" column="_column_country_countryname" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_color" name="Color" column="_column_bike_color"/>
  <rolaplev:Level xmi:id="_level_currencyname" name="CurrencyName" column="_column_currency_currencyname"/>
  <rolaplev:Level xmi:id="_level_description" name="Description" column="_column_bike_description"/>
  <rolaplev:Level xmi:id="_level_listprice" name="ListPrice" column="_column_bike_listprice"/>
  <rolaplev:Level xmi:id="_level_rownumber_5" name="RowNumber" column="_column_country_rownumber" uniqueMembers="true"/>
  <rolaplev:Level xmi:id="_level_sizeunitmeasurecode" name="SizeUnitMeasureCode" column="_column_bike_sizeunitmeasurecode"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_currencykey" primaryKey="_column_currency_currencykey" query="_tablesource_currency" levels="_level_rownumber _level_currencykey _level_currencyalternatekey _level_currencyname"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_product_hierarchy" name="Product_Hierarchy" primaryKey="_column_bike_productkey" query="_tablesource_bike" levels="_level_rownumber_2 _level_productkey _level_productalternatekey _level_productsubcategorykey _level_productname _level_standardcost _level_finishedgoodsflag _level_color _level_listprice _level_size _level_sizerange _level_weight _level_dealerprice _level_class _level_style _level_modelname _level_description _level_weightunitmeasurecode _level_sizeunitmeasurecode _level_safetystocklevel _level_reorderpoint _level_daystomanufacture _level_productline"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_calendarquarter2" primaryKey="_column_calendarquarter_calendarquarter2" query="_tablesource_calendarquarter" levels="_level_rownumber_1 _level_calendarquarter2"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_productkey" primaryKey="_column_bike_productkey" query="_joinsource" levels="_level_rownumber_3 _level_productsubcategorykey_1 _level_subcategory"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_countrycode" primaryKey="_column_country_countrycode" query="_tablesource_country" levels="_level_rownumber_5 _level_countrycode _level_countryname"/>
  <rolaphier:ExplicitHierarchy xmi:id="_explicithierarchy_saleschannelcode" primaryKey="_column_saleschannel_saleschannelcode" query="_tablesource_saleschannel" levels="_level_rownumber_4 _level_saleschannelcode _level_saleschannelname"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_bike" name="Bike" hierarchies="_explicithierarchy_product_hierarchy"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_calendarquarter" name="CalendarQuarter" hierarchies="_explicithierarchy_calendarquarter2"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_saleschannel" name="SalesChannel" hierarchies="_explicithierarchy_saleschannelcode"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_bikesubcategory" name="BikeSubcategory" hierarchies="_explicithierarchy_productkey"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_country" name="Country" hierarchies="_explicithierarchy_countrycode"/>
  <rolapdim:StandardDimension xmi:id="_standarddimension_currency" name="Currency" hierarchies="_explicithierarchy_currencykey"/>
  <rolapcube:PhysicalCube xmi:id="_physicalcube_saleschannel" name="SalesChannel" query="_tablesource_bikesales">
    <kpis xmi:id="_kpi_three_circles_colored" name="Three Circles Colored" goal="[Measures].[Sum of TotalProductCost]" status="[Measures].[Sum of TotalProductCost]"/>
    <dimensionConnectors xmi:id="_dimensionconnector_bike" foreignKey="_column_bikesales_productkey" dimension="_standarddimension_bike" overrideDimensionName="Bike"/>
    <dimensionConnectors xmi:id="_dimensionconnector_bikesubcategory" foreignKey="_column_bikesales_productkey" dimension="_standarddimension_bikesubcategory" overrideDimensionName="BikeSubcategory"/>
    <dimensionConnectors xmi:id="_dimensionconnector_calendarquarter" foreignKey="_column_bikesales_calendarquarter" dimension="_standarddimension_calendarquarter" overrideDimensionName="CalendarQuarter"/>
    <dimensionConnectors xmi:id="_dimensionconnector_country" foreignKey="_column_bikesales_countrycode" dimension="_standarddimension_country" overrideDimensionName="Country"/>
    <dimensionConnectors xmi:id="_dimensionconnector_currency" foreignKey="_column_bikesales_currencykey" dimension="_standarddimension_currency" overrideDimensionName="Currency"/>
    <dimensionConnectors xmi:id="_dimensionconnector_saleschannel" foreignKey="_column_bikesales_saleschannelcode" dimension="_standarddimension_saleschannel" overrideDimensionName="SalesChannel"/>
    <measureGroups xmi:id="_measuregroup_bikesales" name="BikeSales">
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sum_of_totalproductcost" name="Sum of TotalProductCost" column="_column_bikesales_totalproductcost"/>
      <measures xsi:type="rolapmeas:SumMeasure" xmi:id="_summeasure_sum_of_salesamount" name="Sum of SalesAmount" column="_column_bikesales_salesamount"/>
    </measureGroups>
  </rolapcube:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/complex.csdl.bikeshop.zip" download>Download Zip File</a>
