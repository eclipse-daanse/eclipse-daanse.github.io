---
title: AccessDatabaseSchemaGrant
group: Class
---

# AccessDatabaseSchemaGrant<a name="class-accessdatabaseschemagrant"></a>

Extends the OLAP security model to the database level by controlling access to database schemas, tables, and columns that underlie the OLAP analytical structures, providing comprehensive data governance that enforces security policies regardless of how data is accessed.

## Attributes

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Id</th>
      <th>Type</th>
      <th>Lower</th>
      <th>Upper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>databaseSchemaAccess</strong></td>
      <td>false</td>
      <td><em>DatabaseSchemaAccess<a href="./enum-DatabaseSchemaAccess">🔗</a></em></td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td colspan="5"><em>Defines the access level for the database schema using DatabaseSchemaAccess enumeration values, controlling whether role members can interact with schema structures.</em></td>
    </tr>
  </tbody>
</table>

## References

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Lower</th>
      <th>Upper</th>
      <th>Containment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>tableGrants</strong></td>
      <td>AccessTableGrant<a href="./class-AccessTableGrant">🔗</a></td>
      <td>1</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em>Collection of table-level access grants that provide granular security control over specific tables within the database schema.</em></td>
    </tr>
    <tr>
      <td><strong>databaseSchema</strong></td>
      <td>DatabaseSchema<a href="./class-DatabaseSchema">🔗</a></td>
      <td>1</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em>References the specific database schema to which this access grant applies, establishing the security boundary at the database level.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- AccessCatalogGrant[🔗](./class-AccessCatalogGrant) → databaseSchemaGrants

## ClassDiagramm

```mermaid
classDiagram
  class AccessDatabaseSchemaGrant {
    + databaseSchemaAccess : DatabaseSchemaAccess
  }


  AccessDatabaseSchemaGrant --> AccessTableGrant : tableGrants
  AccessDatabaseSchemaGrant --> DatabaseSchema : databaseSchema

```
