---
title: DrillThroughAction
group: Class
---

# DrillThroughAction<a name="class-drillthroughaction"></a>


## Extends
- Action [🔗](./class-Action)
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
      <td><strong>default</strong></td>
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
      <td><strong>drillThroughAttribute</strong></td>
      <td>DrillThroughAttribute<a href="./class-DrillThroughAttribute">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>true</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
    <tr>
      <td><strong>drillThroughMeasure</strong></td>
      <td>BaseMeasure<a href="./class-BaseMeasure">🔗</a></td>
      <td>0</td>
      <td>&infin;</td>
      <td>false</td>
    </tr>
    <tr>
      <td colspan="5"><em> here you will see the description.</em></td>
    </tr>
  </tbody>
</table>



## Used by


## ClassDiagramm

```mermaid
classDiagram
  class DrillThroughAction {
    + default : Boolean
  }

  Action <|-- DrillThroughAction
  DrillThroughAction --> DrillThroughAttribute : drillThroughAttribute
  DrillThroughAction --> BaseMeasure : drillThroughMeasure

```
