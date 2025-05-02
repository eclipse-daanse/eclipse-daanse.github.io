---
title: Minimal_Cube_With_Measures_CellFormatter
group: Unstrutured
kind: other
number: z0
---
A minimal cube with CellFormatter with class name



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema of a minimal cube with CellFormatter with class name" name="Minimal_Cube_With_Measures_CellFormatter" cubes="CubeOneNumericMeasureDifferentDataTypes" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:PhysicalCube id="CubeOneNumericMeasureDifferentDataTypes" name="CubeOneNumericMeasureDifferentDataTypes" query="FactQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" cellFormatter="/4" formatString="Standard" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
  <roma:CellFormatter ref="mondrian.rolap.format.CellFormatterImpl"/>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.cellformatter.zip" download>Download Zip File</a>
