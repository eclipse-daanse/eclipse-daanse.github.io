---
title: Minimal_Cube_with_cube_dimension_level_with_expressions
group: Unstrutured
kind: other
number: z0
---
A basic OLAP schema with a level with expressions




## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:Catalog description="Schema of a minimal cube with level with expressions" name="Minimal_Cube_with_cube_dimension_level_with_expressions" cubes="Cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY" name="KEY"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_KEY1" name="KEY1"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_VALUE" name="VALUE" type="Integer"/>
      <columns xsi:type="roma:SQLExpressionColumn" id="nameExpression" name="nameExpression">
        <sqls sql="&quot;KEY&quot; || ' ' || &quot;KEY1&quot;">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </columns>
      <columns xsi:type="roma:SQLExpressionColumn" id="keyExpression" name="keyExpression">
        <sqls sql="KEY">
          <dialects>generic</dialects>
        </sqls>
        <sqls sql="&quot;KEY1&quot; || ' ' || &quot;KEY&quot;">
          <dialects>h2</dialects>
        </sqls>
      </columns>
      <columns xsi:type="roma:SQLExpressionColumn" id="captionExpression" name="captionExpression">
        <sqls sql="KEY">
          <dialects>generic</dialects>
        </sqls>
        <sqls sql="&quot;KEY1&quot; || '___' || &quot;KEY&quot;">
          <dialects>h2</dialects>
        </sqls>
      </columns>
      <columns xsi:type="roma:SQLExpressionColumn" id="ordinalExpression" name="ordinalExpression">
        <sqls sql="&quot;KEY&quot; || '___' || &quot;KEY1&quot;">
          <dialects>generic</dialects>
          <dialects>h2</dialects>
        </sqls>
      </columns>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:Level id="Level1" name="Level1" column="Fact_KEY" nameColumn="nameExpression"/>
  <roma:Level id="Level2" name="Level2" captionColumn="captionExpression" column="keyExpression" ordinalColumn="ordinalExpression"/>
  <roma:Hierarchy id="HierarchyWithHasAll" name="HierarchyWithHasAll" levels="Level1 Level2" hasAll="true" primaryKey="Fact_KEY" query="FactQuery"/>
  <roma:StandardDimension id="Dimension" name="Dimension" hierarchies="HierarchyWithHasAll"/>
  <roma:PhysicalCube id="Cube" name="Cube" query="FactQuery">
    <dimensionConnectors dimension="Dimension" overrideDimensionName="Dimension"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure" name="Measure" column="Fact_VALUE"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimensionwithlevelexpressions.zip" download>Download Zip File</a>
