---
title: Cube_with_dimension_with hierarchy_with_inner_table
group: Unstrutured
kind: other
number: z0
---
A basic OLAP schema with a level with reference with inner table



Catalog with schema with hierarchy with table reference with inner table


## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema with hierarchy with table reference with inner table" name="Cube_with_dimension_with hierarchy_with_inner_table" cubes="Cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_DIM_KEY" name="DIM_KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
    </tables>
    <tables xsi:type="roma:InlineTable" name="HT">
      <columns xsi:type="roma:PhysicalColumn" id="HT_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="HT_VALUE" name="VALUE" type="Numeric"/>
      <columns xsi:type="roma:PhysicalColumn" id="HT_NAME" name="NAME"/>
      <rows>
        <rowValues column="HT_KEY" value="1"/>
        <rowValues column="HT_VALUE" value="100.5"/>
        <rowValues column="HT_NAME" value="name1"/>
      </rows>
      <rows>
        <rowValues column="HT_KEY" value="2"/>
        <rowValues column="HT_VALUE" value="100.2"/>
        <rowValues column="HT_NAME" value="name2"/>
      </rows>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery table="Fact"/>
  <roma:PhysicalCube id="Cube" name="Cube" query="/2">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1" name="Measure1" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.hierarchywithinnertable.zip" download>Download Zip File</a>
