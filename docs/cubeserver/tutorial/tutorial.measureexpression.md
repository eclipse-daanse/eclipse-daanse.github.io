---
title: Minimal_Cubes_With_MeasureExpression
group: Unstrutured
kind: other
number: z0
---
A mininmal cube with a simple measure with MeasureExpression.



## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Minimal Cube With MeasureExpression" name="Minimal_Cubes_With_MeasureExpression" cubes="CubeOneNumericMeasureDifferentFormatStrings" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="FACT" name="FACT">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE_NUMERIC" name="VALUE_NUMERIC" type="Numeric"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="MEASURE_TABLE" name="MEASURE_TABLE">
      <columns xsi:type="roma:PhysicalColumn" id="MEASURE_TABLE_ID" name="ID" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="MEASURE_TABLE_VALUE" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="MEASURE_TABLE_FLAG" name="FLAG" type="Integer"/>
      <columns xsi:type="roma:SQLExpressionColumn" id="measureExpression1" name="measureExpression1">
        <sqls sql="(select sum(&quot;MEASURE_TABLE&quot;.&quot;VALUE&quot;) from &quot;MEASURE_TABLE&quot; where &quot;MEASURE_TABLE&quot;.&quot;FLAG&quot; = 1)">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </columns>
      <columns xsi:type="roma:SQLExpressionColumn" id="measureExpression2" name="measureExpression2">
        <sqls sql="(CASE WHEN &quot;FACT&quot;.&quot;VALUE&quot; > 21 THEN 50 ELSE &quot;FACT&quot;.&quot;VALUE&quot; END)">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </columns>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="FACT"/>
  <roma:PhysicalCube id="CubeOneNumericMeasureDifferentFormatStrings" name="CubeOneNumericMeasureDifferentFormatStrings" query="FactQuery">
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure1-Sum" name="Measure1-Sum" column="measureExpression1"/>
      <measures xsi:type="roma:SumMeasure" id="Measure2-Sum" name="Measure2-Sum" column="measureExpression2"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.measureexpression.zip" download>Download Zip File</a>
