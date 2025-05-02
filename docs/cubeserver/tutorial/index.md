# 📘 Introduction: Data Cube Modeling Tutorials

Welcome to our comprehensive tutorial series on data cube modeling. This collection is designed to guide you step by step through the core concepts and techniques used in modeling complex analytical data structures. Whether you're building a business intelligence solution or working on an OLAP engine, a solid understanding of the data cube, catalogs, schemas, and OLAP elements is essential.

We start with the relational foundation – modeling catalogs, schemas, tables, and columns in a way that mirrors typical database systems. This layer serves as the cornerstone for everything that follows.

From there, we transition into the world of OLAP modeling:
You’ll learn how to define cubes, and how to enrich them with dimensions, hierarchies, and levels that reflect your business structure and enable powerful multidimensional queries.

We strongly recommend beginning with the database tutorial, as it introduces the core data model that most of the other tutorials build upon. Before diving into advanced topics, it’s useful to revisit the introductions in each section, as they often highlight key transitions and modeling decisions.

The Tutorials in the `unstructured` section agre bare Mapping descriptions and example files. They are designed for advaned users who are already familiar with the basics of data cube modeling. These tutorials provide a deeper dive into specific topics, showcasing advanced techniques and best practices for creating efficient and effective data models. Feel free to add Tutorial description and structure to this Tutotials.

A recommended reading order is provided below to help you build your understanding progressively and systematically.



[Database - Intro](./tutorial.database.intro.md)

[Database - ColumnTypes](./tutorial.database.column.md)

[Database - SQL Expression Column](./tutorial.database.expressioncolumn.md)

[Database - Schema](./tutorial.database.schema.md)

[Database - Table](./tutorial.database.table.md)

[Database - SqlView](./tutorial.database.sqlview.md)

[Database - InlineTable](./tutorial.database.inlinetable.md)

[Cube - Minimal](./tutorial.cube.minimal.md)

[Cube - Measures and Aggregators](./tutorial.cube.measure.aggregator.base.md)

[Cube - Measures Multiple](./tutorial.cube.measure.multiple.md)

[Cube - Measures and Datatypes](./tutorial.cube.measure.datatype.md)

[Cube - Measures and Formats](./tutorial.cube.measure.format.md)

[Cube - Measures and MeasureGroups](./tutorial.cube.measure.group.md)

[Cube - Measures and Aggregators](./tutorial.cube.measure.aggregator.bit.md)

[Cube - Percentile](./tutorial.cube.measure.aggregator.percentile.md)

[Cube - Measures and Text Aggregators with comments](./tutorial.cube.measure.aggregator.textagg.md)

[Dimension - Introduction](./tutorial.cube.dimension.intro.md)

[Hierarchy - Query based on seperate Tables for Fact and Dimension](./tutorial.cube.hierarchy.query.table.base.md)

[Hierarchy - Query based on a Table with 2 Levels](./tutorial.cube.hierarchy.query.table.multilevel.multitable.md)

[Hierarchy - Query based on all in one Table](./tutorial.cube.hierarchy.query.table.multilevel.singletable.md)

[Hierarchy - Query based on Join](./tutorial.cube.hierarchy.query.join.base.md)

[Hierarchy - Query based on a 2 Joind with 3 Levels](./tutorial.cube.hierarchy.query.join.multi.md)

[Hierarchy - HasAll-Level](./tutorial.cube.hierarchy.hasall.md)

[Level - MemberProperties Intro](./tutorial.cube.level.member.property.intro.md)

[Cube - CalculatedMembers Intro](./tutorial.cube.calculatedmember.intro.md)

[Kpi - Introduction](./tutorial.cube.kpi.intro.md)

[Kpi - parent ring](./tutorial.cube.kpi.parent.ring.md)

[Schulwesen](./complex.school.md)

[Writeback_without_dimension](./tutorial.writebackwithoutdimension.md)

[tutorial_for_writeback_with_fact_view](./tutorial.writebackview.md)

[tutorial_for_writeback](./tutorial.writebacktable.md)

[tutorial_for_writeback_with_fact_InlineTable](./tutorial.writebackinlinetable.md)

[Cube_with_virtual_cube_with_un_visible_reference_cube](./tutorial.virtualcubevisiblereferencecubes.md)

[Minimal_Virtual_Cubes_With_Measures_only](./tutorial.virtualcubemeasureonly.md)

[Cube_with_virtual_cube](./tutorial.virtualcubedimensions.md)

[Cube_with_virtual_cube_with_calculatedMember](./tutorial.virtualcubecalculatedmember.md)

[Minimal_Virtual_Cubes_With_Measures](./tutorial.virtualcube.md)

[Minimal_Cube_with_Time_Dimension](./tutorial.timedimension.md)

[Cube_with_NamedSet](./tutorial.namedset.md)

[Minimal_Cubes_With_MeasureExpression](./tutorial.measureexpression.md)

[Minimal_Single_Hierarchy_Hidden_Members_with_IfParentsName](./tutorial.levelifparentsname.md)

[Minimal_Single_Hierarchy_Hidden_Members_with_IfBlankName](./tutorial.levelifblankname.md)

[Cube_with_virtual_cube_with_kpi](./tutorial.kpivirtualcube.md)

[Minimal_Cubes_With_KPI_all_Properties](./tutorial.kpiall.md)

[CubeOneMeasureInlineTable](./tutorial.inlinetable.md)

[Cube_with_share_dimension_with hierarchy_with_view_reference](./tutorial.hierarchywithview.md)

[Cube_with_dimension_with hierarchy_with_inner_table](./tutorial.hierarchywithinnertable.md)

[Minimal_Cube_with_DrillThroughAction](./tutorial.drillthroughaction.md)

[Minimal_Cube_with_cube_dimension_smallInt_boolean_level](./tutorial.dimensionwithsmallintbooleanlevel.md)

[Minimal_Cube_with_cube_dimension_level_with_closure_table](./tutorial.dimensionwithlevelwithparentchild.md)

[Minimal_Parent_Child_Hierarchy](./tutorial.dimensionwithlevelparentcolumn.md)

[Minimal_Cube_with_cube_dimension_level_with_expressions](./tutorial.dimensionwithlevelexpressions.md)

[Minimal_Parent_Child_With_Closure](./tutorial.dimensionwithlevelclosure.md)

[Minimal_Cube_with_cube_dimension_level_attribute](./tutorial.dimensionwithlevelattribute.md)

[Minimal_Cube_with_cube_dimension_with_functional_dependency_optimizations](./tutorial.dimensionwithfunctionaldependencyoptimization.md)

[Minimal_Cube_With_Measures_CellFormatter](./tutorial.cellformatter.md)

[Cube_with_Aggregate_tables](./tutorial.aggregatetables.md)

[Cube_with_table_reference_with_AggExclude](./tutorial.aggexclude.md)

[Cube_with_access_all_dimension](./tutorial.accessschemagrand.md)

[Cube_with_access_all_dimension_cube1_access_to_A_only](./tutorial.accesshierarchygrand.md)

[Cube_with_access_database_schema](./tutorial.accessdbschemagrand.md)

[Cube_with_access_all_dimension_cube1_access_only](./tutorial.accesscubegrand.md)

[Cube_with_role_access_all_none_custom](./tutorial.accessallnonecustom.md)