---
title: CubeOneMeasureInlineTable
group: Unstrutured
kind: other
number: z0
---
A minimal cube based on an inline table




## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:InlineTableQuery id="FactQuery" alias="Fact" table="Fact"/>
  <roma:Catalog description="Schema of a minimal cube consisting of one measurement and based on an virtual inline table" name="CubeOneMeasureInlineTable" cubes="CubeOneMeasure" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:InlineTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
      <rows>
        <rowValues column="Fact_KEY" value="A"/>
        <rowValues column="Fact_VALUE" value="100.5"/>
      </rows>
    </tables>
  </roma:DatabaseSchema>
  <roma:PhysicalCube id="CubeOneMeasure" name="CubeOneMeasure" query="FactQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure-Sum" name="Measure-Sum" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.inlinetable.zip" download>Download Zip File</a>
