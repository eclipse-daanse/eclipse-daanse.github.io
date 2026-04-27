---
title: Database Inline Table
group: Database
kind: TUTORIAL
number: 1.03.03
---
# Daanse Tutorial - Database Inline Table

An InlineTable is a named ColumnSet whose data is carried inline in the catalog XMI rather than stored in the database. It is not a physical Table and not a database View: nothing is created in the DB. The server materialises the rows at query time as literal VALUES, derived from the inline data. Use it for small lookup tables or test fixtures.



## Definition

This file represents the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:instance="http://www.omg.org/spec/CWM/1.1/objectmodel/instance" xmlns:relational="http://www.omg.org/spec/CWM/1.1/resource/relational" xmlns:rolapcat="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/catalog" xmlns:rolaprel="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping/database/relational">
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_integer" name="INTEGER" structuralFeature="_column_fact_value" typeNumber="4"/>
  <relational:SQLSimpleType xmi:id="_sqlsimpletype_character_varying" name="CHARACTER VARYING" structuralFeature="_column_fact_key" typeNumber="12"/>
  <rolapcat:Catalog xmi:id="_catalog_databaseinlinetable" id="_catalog_databaseInlineTable" description="Inline table definitions with row data" name="Daanse Tutorial - Database Inline Table" dbschemas="_schema"/>
  <relational:Schema xmi:id="_schema">
    <ownedElement xsi:type="rolaprel:InlineTable" xmi:id="_inlinetable_fact" name="FACT">
      <feature xsi:type="relational:Column" xmi:id="_column_fact_key" name="KEY" type="_sqlsimpletype_character_varying" slot="_dataslot_2 _dataslot_3"/>
      <feature xsi:type="relational:Column" xmi:id="_column_fact_value" name="VALUE" type="_sqlsimpletype_integer" slot="_dataslot_1 _dataslot"/>
      <extent xmi:id="_rowset">
        <ownedElement xsi:type="relational:Row" xmi:id="_row">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_2" feature="_column_fact_key" dataValue="A"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_1" feature="_column_fact_value" dataValue="100"/>
        </ownedElement>
        <ownedElement xsi:type="relational:Row" xmi:id="_row_1">
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot_3" feature="_column_fact_key" dataValue="B"/>
          <slot xsi:type="instance:DataSlot" xmi:id="_dataslot" feature="_column_fact_value" dataValue="42"/>
        </ownedElement>
      </extent>
    </ownedElement>
  </relational:Schema>
</xmi:XMI>

```



## Tutorial Zip
This file contains the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.database.inlinetable.zip" download>Download Zip File</a>
