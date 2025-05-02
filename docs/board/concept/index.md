# Concept Analysis Dashboard

## 🔍 Key Features

### 📊 Data Visualisation
Data can be complex and numbers alone are sometimes not enough to convey information.  
Data Analysis Services uses visualisation tools to present data in the form of charts, graphs and interactive dashboards.  
This simplifies the communication of results and insights.

## 🧑‍💻 Clients

Eclipse Daanse enables access to analytical data sources from various client applications.

In addition to the possibility of integrating your own applications using the client libraries (in several languages like **Java** and **TypeScript**), Eclipse Daanse includes:

- Its own **web client** for tables, charts and maps as well as dashboards
- The ability to connect further reporting tools via **adapters and templates**

## 🧩 Available Widgets

### Basic Widgets
- Borders, rounding, shadows, and background/font transparency can be customized. Colors and shadow gradients can also be dynamically controlled via variables – for example, depending on the time of day. This allows the alignment and length of a shadow or the brightness of a widget to automatically adjust to the sun's position.
- *Colors, shadows, and transparency can be dynamically adjusted based on time and variables.*

### Chart Widgets
- Bar charts  
- Line charts  
- Pie charts  

### Data Tables
- Sorting and filtering per column  
- Pagination  
- Column and row formatting  
- Highlighting  
- Export functions (e.g., CSV)

### PivotTable (Excel-like)
- Selection of an OLAP cube  
- Freely configurable dimensions (columns, rows, filters)  
- Measures can be used dynamically  
- Export of generated aggregations  
- Ideal for interactive BI analysis.

### Icons
- Selection from predefined icon catalogs  
- Customization of foreground and background colors  
- Use icons for semantic encoding of states.

### Image
- Display of images  
- Application of image filters like contrast, brightness, blur, etc.  
- Free choice of scaling and framing.

### Progress Bars & Gauges
- Visualization of simple measurements  
- Display as speedometer, progress bar, or numeric value  
- Ideal for KPIs like speed, temperature, utilization.

### SVG
- Embedding and displaying SVG graphics  
- Color manipulation via variables  
- Perfect for stylized icons and vector shapes.

### Repeatable SVG
- Repeated rendering of SVGs based on numeric values  
- Example: 10 people as a counter symbol  
- Any SVG can be used, not just icons  
- Simple way to represent quantities or scales (e.g., 3 out of 5 stars)

### RichText
- Formatted text with variable embedding  
- Free placement within the dashboard  
- Useful for headings, explanatory text, or interactive labels.

### Text
- Plain text without formatting  
- Integration of variables (e.g., dynamic measurements)  
- Useful for simple labels

### Video
- Display of videos with or without control buttons  
- Embedding of livestreams is supported

### Maps
- Display of georeferenced data  
- Integration of:
  - OGC Maps (rendered map images)  
  - OGC Features (geo-objects with attributes)  
  - SensorThings locations  
  - CSV and CML data sources  
  - XMLA  
- Individual styling for all layers (coloring, transparency, icons, lines, areas, sensor values)  
- All layers can be displayed together

### SampleWidget
- Placeholder for future experimental widgets  
- Natively displays raw data from the connection

### Example Infographics
![Screenshot from 2025-04-09 23-31-41](https://github.com/user-attachments/assets/5240f9ee-306a-413d-8b8d-5072377eb626)

---

## 🔌 Data Connections

### OGC Maps
- Integration of rendered maps (e.g., WMS services)  
- Display in map widgets

### OGC Features
- Display of geo-objects such as bus stops, manholes, trees, etc.  
- JSON-based  
- Includes geometry, name, and metadata

### SensorThings API
- Historical time series (e.g., temperature trends)  
- Sensor metadata (type, location, unit)  
- Live data via REST or MQTT/WebSocket  
- Perfect for smart city applications.

### XMLA for Data Cubes
- Access to data cubes via XMLA interface  
- Supports Microsoft Analysis Services, Daanse OLAP Server, etc.  
- Compatible with Power BI and Excel Pivot.

### SQL via XMLA
- Execution of SQL statements via XMLA protocol  
- Role-based access management  
- Security features to prevent misuse

### REST CSV
- REST interface for importing CSV files  
- Selection of delimiter  
- Partial loading of large files possible (segments)

### REST JSON & XML
- Simple REST integration for common APIs  
- Supports JSON and XML  
- Compatible with open government APIs, e.g., issue reporters, traffic data.

### Semantic Web / SPARQL / RDF
- Access to Wikidata, DCAT, GovData, Open Energy Platform, etc.  
- Use of semantic queries via SPARQL  
- Linking with Linked Open Data.

### MQTT (plain)
- Direct connection to MQTT brokers  
- Receives messages on value changes  
- Supports last-will messages

### WebSocket (plain)
- Direct reception of messages via WebSocket protocol  
- Connection to web servers possible, e.g., for custom events.

### RSS
- Integration of structured RSS feeds  
- Display of date, summary, full text, and link  
- Ideal for event calendars, schedule changes, etc.

### GraphQL
- Modern, web-based query language  
- Selective field queries and filtering  
- Subscriptions (live data)

---

## 🔁 Variables

- **Constants** (e.g., a sensor ID)  
- **Calculated variables** (formulas based on other variables)  
- **Time-based variables** (e.g., sun position, current time)  
- **Query results** (e.g., current temperature)

All properties of widgets and dashboards can be controlled by variables.

Example: A button switches between different objects by updating a variable. All data sources automatically adapt to the new context.

---

## ✨ Highlights

### 💻 Client-Only – No Server Installation Required

The software runs entirely in the web browser – without any additional server components or backend.  
Only a simple web server is needed to serve the application. All logic, rendering, and data binding is handled directly in the client.

### 🖥️ Also Usable as a Desktop App

Because no server infrastructure is required, Daanse can run not only as a web application in the browser but also as a:

- **Progressive Web App (PWA)**  
- **Desktop client** for macOS, Windows, and Linux (e.g., via DEB and RPM packages)

Initial package formats are already available.  
Further options like **Flatpak** and **AppImage** are in development.

### 🛡️ Data Protection and Permissions – A Key Benefit of the Client-Based Architecture

With Eclipse Daanse, all data processing occurs directly in the browser – without any intermediate server.  
Data is retrieved through open interfaces and visualized directly on the user's device.

Especially in **open data or urban data platforms**, where data is provided via clearly defined public APIs, this is a major advantage:  
There's no need to store or proxy the data – and thus no risk of duplicating permission logic.

In contrast, server-based systems like **Grafana** or **Apache Superset** often require a central user with broad access rights to connect to the data interfaces.  
This technical “superuser” may inadvertently see more than intended – especially if the dashboard application builds its own permissions system that doesn’t align with the API's original authorization.

This poses a significant security risk: a dashboard user may gain access to data they should never have seen via the original API.

**Daanse fully avoids this problem** – by enabling direct, authorized access from the browser without its own server infrastructure.

### 🌍 Direct Access to Open Data from DCAT Catalogs

In open data platforms like [data.europa.eu](https://data.europa.eu) or [GovData.de](https://www.govdata.de), all datasets and services are described using the **DCAT schema**.

The Daanse Board Client can directly query these public **DCAT registries** – e.g., for terms like *“fire department operations”*.  
Found datasets or services can be immediately integrated and visualized – with no complex configuration required.

While creating a dashboard, a list of suitable widgets is automatically suggested for each selected data source.  
You simply pick the one you want – and instantly get a working visualization.

➡️ **Fast, intuitive, and direct access to the entire world of open data.**

### 🔗 Combining Multiple Data Sources – Across Dashboards and Widgets

#### 📊 Integration of Various Data Sources Within a Dashboard

A single dashboard can combine any number of data connections – even from different types and cities. For example, the following information can be shown together:

- **Geodata** via OGC Maps and OGC Features (e.g., city maps, bus stops)  
- **Real-time sensor data**, such as tram door states via SensorThings, WebSocket, or MQTT  
- **Metadata** for stops, lines, and vehicles via REST, GraphQL, SPARQL, or SQL  
- **Punctuality and delay statistics** via data cubes (XMLA/BI) or SQL  
- **Historical vehicle movement data** via SensorThings (time-based queries)

This combination enables a comprehensive understanding of urban processes – live, historical, and analytical.

#### 🧩 Combining Multiple Data Sources Within a Single Widget

Even **within a single widget**, multiple data sources from different cities or systems can be combined. Examples:

- An **interactive map** that:
  - Displays geodata from state-level services (OGC Maps),  
  - Live data from a city (SensorThings), and  
  - Statistical data from a federal agency (XMLA)  
  all at once.

- A **table** that:
  - Includes CSV data via REST,  
  - JSON data from APIs,  
  - SQL query results, and  
  - Data cube outputs  
  from different providers (e.g., multiple cities) side-by-side.

This functionality makes Daanse especially powerful for **intermunicipal collaboration** and **merging heterogeneous data landscapes** in a single view.

### Git Integration
- Dashboards are version-controlled and traceable  
- Multiple variants possible (e.g., per political party in a city council)  
- All changes are documented and auditable

All data can be transparently presented, while dashboards on the same topic and with the same data sources can be customized individually.  
This allows, for example, each party in a city council to create their own dashboard with their own narrative framing – without altering the underlying data. Users can always see what the original data is and how the representations differ.

Dashboard changes are fully traceable and auditable: it's always clear who changed what and when. Changes can also be justified and documented.


***This section will be updated soon.***
