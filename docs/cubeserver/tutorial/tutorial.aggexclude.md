---
title: Cube_with_table_reference_with_AggExclude
group: Unstrutured
kind: other
number: z0
---



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema of a minimal cube with table reference with AggExclude" name="Cube_with_table_reference_with_AggExclude" cubes="Cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="agg_01_Fact" name="agg_01_Fact">
      <columns xsi:type="roma:PhysicalColumn" id="agg_01_Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="agg_01_Fact_VALUE_count" name="KEY"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact">
    <aggregationExcludes name="agg_01_Fact" id="aggregationExclude"/>
  </roma:TableQuery>
  <roma:PhysicalCube id="Cube" name="Cube" query="FactQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure" name="Measure" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.aggexclude.zip" download>Download Zip File</a>
