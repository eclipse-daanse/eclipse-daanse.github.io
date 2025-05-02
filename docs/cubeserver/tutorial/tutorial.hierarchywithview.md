---
title: Cube_with_share_dimension_with hierarchy_with_view_reference
group: Unstrutured
kind: other
number: z0
---




## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema of a minimal cube with hierarchy with view reference" name="Cube_with_share_dimension_with hierarchy_with_view_reference" cubes="CubeOneMeasure" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_DIM_KEY" name="DIM_KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="HT" name="HT">
      <columns xsi:type="roma:PhysicalColumn" id="HT_KEY" name="KEY" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="HT_NAME" name="NAME"/>
      <columns xsi:type="roma:PhysicalColumn" id="HT_VALUE" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:PhysicalCube id="CubeOneMeasure" name="CubeOneMeasure" query="FactQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.hierarchywithview.zip" download>Download Zip File</a>
