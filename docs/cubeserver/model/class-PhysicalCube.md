---
title: PhysicalCube
group: Class
---

# PhysicalCube<a name="class-physicalcube"></a>


## Extends
- Cube [🔗](./class-Cube)
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
      <td><strong>cache</strong></td>
      <td>false</td>
      <td><em>Boolean</em></td>
      <td>0</td>
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
      <td><strong>dimensionConnectors</strong></td>
      <td>DimensionConnector<a href="./class-DimensionConnector">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>query</strong></td>
      <td>Query<a href="./class-Query">🔗</a></td>
      <td>1</td>
      <td>1</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>writebackTable</strong></td>
      <td>WritebackTable<a href="./class-WritebackTable">🔗</a></td>
      <td>0</td>
      <td>1</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>action</strong></td>
      <td>Action<a href="./class-Action">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>measureGroups</strong></td>
      <td>MeasureGroup<a href="./class-MeasureGroup">🔗</a></td>
      <td>1</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
  </tbody>
</table>



## Used by

- MeasureGroup[🔗](./class-MeasureGroup) → physicalCube
- DimensionConnector[🔗](./class-DimensionConnector) → physicalCube
- CalculatedMember[🔗](./class-CalculatedMember) → physicalCube

## ClassDiagramm

```mermaid
classDiagram
  class PhysicalCube {
    + cache : Boolean
  }

  Cube <|-- PhysicalCube
  PhysicalCube --> DimensionConnector : dimensionConnectors
  PhysicalCube --> Query : query
  PhysicalCube --> WritebackTable : writebackTable
  PhysicalCube --> Action : action
  PhysicalCube --> MeasureGroup : measureGroups

```
