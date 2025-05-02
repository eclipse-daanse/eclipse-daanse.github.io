# 🚀 Setup Guide

This setup guide explains how to deploy and run the **Daanse Dashboard Client** in various environments. The client is **fully standalone** and requires **no server-side components**. All data access, logic, and rendering happen entirely in the browser or client runtime.

You can run the client in the following ways:

- ✅ **Static Hosting (e.g. GitHub Pages)**  
  The application can be deployed as static files to any static web host. GitHub Pages is a great starting point for publishing dashboards without backend infrastructure.

- ✅ **Simple Web Server (e.g. Nginx)**  
  A minimal container or local web server is enough to serve the client files. No special configuration is needed — just drop the build output into your server’s web root.

- ✅ **Docker Deployment**  
  The client can be run as a Docker container, based on an Nginx image that does **not require root privileges**. This is ideal for lightweight and secure deployments in containerized environments.

- ✅ **Embed into Other Applications**  
  You can also embed the client or selected scripts directly into your own web applications. This enables seamless integration with existing web platforms or admin interfaces.

- ✅ **Deploy Individual Components**  
  It's possible to deploy only selected modules — such as **data connections**, specific **widgets**, or **UI components** — without using the full dashboard shell. This supports highly modular use cases and micro-integration strategies.

- ✅ **Desktop App via Electron**  
  A full-featured **Electron version** is available for:
  - **Windows**
  - **Linux** (DEB and RPM packages)
  - **macOS**  
  This makes it easy to run the dashboard as a native application, even offline.

With this flexible setup architecture, Daanse adapts to a wide range of deployment needs — from simple demos to fully integrated Smart City solutions.

