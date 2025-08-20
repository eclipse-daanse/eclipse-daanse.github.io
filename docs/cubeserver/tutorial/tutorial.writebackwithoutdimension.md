---
title: Writeback_without_dimension
group: Unstrutured
kind: other
number: z0
---
writeback with fact as table with only measure



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema with writeback without dimension" name="Writeback_without_dimension" cubes="C" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="FACT" name="FACT">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VAL" name="VAL" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VAL1" name="VAL1" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" columnSize="100"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="FACTWB" name="FACTWB">
      <columns xsi:type="roma:PhysicalColumn" id="Factwb_VAL" name="VAL" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Factwb_VAL1" name="VAL1" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="factwb_L2" name="L2" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="factwb_ID" name="ID" columnSize="100"/>
      <columns xsi:type="roma:PhysicalColumn" id="factwb_USER" name="USER" columnSize="100"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="FACT"/>
  <roma:PhysicalCube id="C" name="C" query="FactQuery">
    <writebackTable name="FACTWB">
      <writebackMeasure column="Fact_VAL" name="Measure1"/>
      <writebackMeasure column="Fact_VAL1" name="Measure2"/>
    </writebackTable>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VAL"/>
      <measures xsi:type="roma:SumMeasure" id="Measure2" name="Measure2" column="Fact_VAL1"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Tutorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.writebackwithoutdimension.zip" download>Download Zip File</a>
