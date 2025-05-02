---
title: AccessDatabaseSchemaGrant
group: Class
---

# AccessDatabaseSchemaGrant<a name="class-accessdatabaseschemagrant"></a>


## Extends

## Attributes

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Id</th>
      <th>Typ</th>
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
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
  </tbody>
</table>

## References

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Typ</th>
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
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>databaseSchema</strong></td>
      <td>DatabaseSchema<a href="./class-DatabaseSchema">🔗</a></td>
      <td>1</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
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
