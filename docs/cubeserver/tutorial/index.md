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

[Minimal Cube with DrillThroughAction](./tutorial.action.drillthrough.md)

[Minimal Cube With Measures CellFormatter](./tutorial.formatter.cell.md)

[Minimal Cube With SQLExpressionColumn](./tutorial.measure.expression.md)

[Cube with one measure with inline table](./tutorial.measure.inlinetable.md)

[Cube with One Measure with Inline Table and with Levels with physical and inline tables](./tutorial.measure.inlinetablewithphysical.md)

[Minimal Cube with level with expressions](./tutorial.level.expressions.md)

[Minimal Cube with level with smallInt boolan type](./tutorial.level.smallintasbooleantype.md)

[Minimal Cube Hidden Members with IfParentsName](./tutorial.level.ifparentsname.md)

[Minimal Cube with Hidden Members with IfBlankName with multiple levels](./tutorial.level.ifblanknamemultiple.md)

[Minimal Cube with Hidden Members with IfBlankName](./tutorial.level.ifblankname.md)

[Minimal Virtual Cubes With Measures](./tutorial.virtualcube.min.md)

[Cube with virtual cube with dimension references from other cubes](./tutorial.virtualcube.dimensions.md)

[Cube with virtual cube with calculatedMember](./tutorial.virtualcube.calculatedmember.md)

[Cube with virtual cube with un visible reference cubes](./tutorial.virtualcube.unvisiblereferencecubes.md)

[Cube with dimension with hierarchy with inner table](./tutorial.hierarchy.inlinetable.md)

[Cube with dimension with hierarchy with SQL view reference](./tutorial.hierarchy.view.md)

[Minimal Cube with hierarchy with functional dependency optimizations](./tutorial.hierarchy.uniquekeylevelname.md)

[Minimal Parent Child Hierarchy](./tutorial.parentchild.minimal.md)

[Minimal Cube with Parent Child Hierarchy with null parent value.](./tutorial.parentchild.nullparent.md)

[Minimal Cube with ParentChildHierarchy with ParentChildLink](./tutorial.parentchild.link.md)

[Minimal Cube with Parent Child Hierarchy with parentAsLeafEnable.](./tutorial.parentchild.parentasleaf.md)

[Measure - Basic Aggregators](./tutorial.cube.measure.aggregator.base.md)

[Measure - Multiple Measures](./tutorial.cube.measure.multiple.md)

[Measure - Datatypes](./tutorial.cube.measure.datatype.md)

[Measure - Formats](./tutorial.cube.measure.format.md)

[Measure - MeasureGroups](./tutorial.cube.measure.group.md)

[Measure - Bit Aggragators](./tutorial.cube.measure.aggregator.bit.md)

[Measure - Percentile Aggragator](./tutorial.cube.measure.aggregator.percentile.md)

[Measure - NTH value Aggragator](./tutorial.cube.measure.aggregator.nth.md)

[Measure - Text Aggregator](./tutorial.cube.measure.aggregator.textagg.md)

[Dimension - Introduction](./tutorial.cube.dimension.intro.md)

[Hierarchy - Query - seperate Tables, Fact and Dimension](./tutorial.cube.hierarchy.query.table.base.md)

[Hierarchy - Query - 1 Table, 2 Levels](./tutorial.cube.hierarchy.query.table.multilevel.multitable.md)

[Hierarchy - Query - all in 1 Table](./tutorial.cube.hierarchy.query.table.multilevel.singletable.md)

[Hierarchy - Query - 1 Join](./tutorial.cube.hierarchy.query.join.base.md)

[Hierarchy - Query - 2 Joins, 3 Levels](./tutorial.cube.hierarchy.query.join.multi.md)

[Hierarchy - HasAll-Level](./tutorial.cube.hierarchy.hasall.md)

[Level - MemberProperties Intro](./tutorial.cube.level.member.property.intro.md)

[Cube - logic functions](./tutorial.function.logic.md)

[Cube - CalculatedMembers Intro](./tutorial.cube.calculatedmember.intro.md)

[Cube - CalculatedMembers with different colors](./tutorial.cube.calculatedmember.color.md)

[Cube with roles access database schema](./tutorial.access.databaseschemagrand.md)

[Cube with roles access table](./tutorial.access.tablegrand.md)

[Cube with roles access column](./tutorial.access.columngrand.md)

[Cube with roles access catalog](./tutorial.access.cataloggrand.md)

[Cube with role CubeGrant](./tutorial.access.cubegrand.md)

[Cube with role access DimensionGrant](./tutorial.access.dimensiongrand.md)

[Cube with HierarchyGrant](./tutorial.access.hierarchygrand.md)

[Cube with access all dimension_cube1 access to A only](./tutorial.access.membergrand.md)

[Catalog with cube with different member identifiers](./tutorial.member.identifier.md)

[Kpi - Introduction](./tutorial.kpi.intro.md)

[Minimal Cube with KPI with all properties](./tutorial.kpi.all.md)

[Kpi - parent ring](./tutorial.kpi.parent.ring.md)

[Cube with virtual cube with kpi](./tutorial.kpi.virtualcube.md)

[Cube with NamedSets](./tutorial.namedset.md)

[Cube with table reference with AggExclude](./tutorial.aggregation.aggexclude.md)

[Cube with aggregate tables](./tutorial.aggregation.aggregatetables.md)

[Minimal Cube with Time_Dimension](./tutorial.dimension.timedimension.md)

[Minimal Cube with cube with two dimension connectors with level attribute](./tutorial.dimension.optimisationwithlevelattribute.md)

[Schulwesen](./complex.school.md)

[Writeback_without_dimension](./tutorial.writebackwithoutdimension.md)

[tutorial_for_writeback_with_fact_view](./tutorial.writebackview.md)

[tutorial_for_writeback](./tutorial.writebacktable.md)

[tutorial_for_writeback_with_fact_InlineTable](./tutorial.writebackinlinetable.md)
