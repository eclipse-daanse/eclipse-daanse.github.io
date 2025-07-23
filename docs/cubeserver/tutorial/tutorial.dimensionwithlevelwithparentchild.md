---
title: Minimal_Cube_with_cube_dimension_level_with_closure_table
group: Unstrutured
kind: other
number: z0
---




## Definition

This files represent the complete definition of the catalog.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:roma="https://www.daanse.org/spec/org.eclipse.daanse.rolap.mapping">
  <roma:ParentChildHierarchy id="hierarchy" allMemberName="All Employees" hasAll="true" primaryKey="Fact_employee_id" query="FactQuery" nullParentValue="0" parentColumn="Fact_supervisor_id" level="EmployeeIdLevel">
    <parentChildLink childColumn="employee_closure_employee_id" parentColumn="employee_closure_supervisor_id">
      <table id="EmployeeClosureQuery" table="employee_closure"/>
    </parentChildLink>
  </roma:ParentChildHierarchy>
  <roma:Catalog description="Schema of a minimal cube with cube dimension level with closure table" name="Minimal_Cube_with_cube_dimension_level_with_closure_table" cubes="Cube" dbschemas="databaseSchema"/>
  <roma:DatabaseSchema id="databaseSchema">
    <tables xsi:type="roma:PhysicalTable" id="Fact" name="Fact">
      <columns xsi:type="roma:PhysicalColumn" id="Fact_employee_id" name="employee_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_full_name" name="full_name"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_supervisor_id" name="supervisor_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_marital_status" name="marital_status"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_position_title" name="position_title"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_gender" name="gender"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_salary" name="salary" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_education_level" name="education_level" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="Fact_management_role" name="management_role"/>
    </tables>
    <tables xsi:type="roma:PhysicalTable" id="employee_closure" name="employee_closure">
      <columns xsi:type="roma:PhysicalColumn" id="employee_closure_supervisor_id" name="supervisor_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="employee_closure_employee_id" name="employee_id" type="Integer"/>
      <columns xsi:type="roma:PhysicalColumn" id="employee_closure_distance" name="distance" type="Integer"/>
    </tables>
  </roma:DatabaseSchema>
  <roma:TableQuery id="FactQuery" table="Fact"/>
  <roma:Level id="EmployeeIdLevel" name="Employee Id" column="Fact_employee_id" nameColumn="Fact_full_name" uniqueMembers="true">
    <memberProperties id="MaritalStatus" name="Marital Status" column="Fact_marital_status"/>
    <memberProperties id="PositionTitle" name="Position Title" column="Fact_position_title"/>
    <memberProperties id="Gender" name="Gender" column="Fact_gender"/>
    <memberProperties id="Salary" name="Salary" column="Fact_salary"/>
    <memberProperties id="EducationLevel" name="Education Level" column="Fact_education_level"/>
    <memberProperties id="ManagementRole" name="Management Role" column="Fact_management_role"/>
  </roma:Level>
  <roma:StandardDimension id="Employees" name="Employees" hierarchies="hierarchy"/>
  <roma:PhysicalCube id="Cube" name="Cube" query="FactQuery">
    <dimensionConnectors foreignKey="Fact_employee_id" dimension="Employees" overrideDimensionName="Employees"/>
    <measureGroups>
      <measures xsi:type="roma:SumMeasure" id="Measure" name="Measure" column="Fact_salary"/>
    </measureGroups>
  </roma:PhysicalCube>
</xmi:XMI>

```



## Turorial Zip
This files contaisn the data-tables as csv and the mapping as xmi file.

<a href="./zip/tutorial.dimensionwithlevelwithparentchild.zip" download>Download Zip File</a>
