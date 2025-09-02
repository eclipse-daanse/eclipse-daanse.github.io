import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import './styles.css'
import VueZoomable from 'vue-zoomable'
import 'vue-zoomable/dist/style.css'
import MermaidZoom from "./components/MermaidZoom.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Komponente global registrieren
    app.component('VueZoomable', VueZoomable)
    app.component('MermaidZoom', MermaidZoom)
  },
  setup() {
    onMounted(() => {
      // Wait for Mermaid diagrams to be rendered
      setTimeout(() => {
        const mermaidElements = document.querySelectorAll('.mermaid svg')
        mermaidElements.forEach(svg => {
          // Check if panzoom is available globally
          if (typeof window !== 'undefined' && (window as any).panzoom) {
            // Initialize panzoom for each Mermaid SVG
            (window as any).panzoom(svg, {
              maxZoom: 5,
              minZoom: 0.1,
              zoomDoubleClickSpeed: 1.5,
              bounds: true,
              boundsPadding: 0.1
            })
          }
        })
      }, 2000) // Give Mermaid time to render
    })
  }
}
