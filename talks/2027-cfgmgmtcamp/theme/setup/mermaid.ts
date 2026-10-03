import { defineMermaidSetup } from '@slidev/types'

// Mermaid diagrams in the OpenVox palette: ink on white, orange accents.
export default defineMermaidSetup(() => ({
  theme: 'base',
  // Allow HTML in labels (e.g. <code>) -- every diagram here is our own content.
  securityLevel: 'loose',
  // Styles inside the SVG, so they apply when Mermaid measures labels too.
  themeCSS: `
    /*
     * Breathing room between edge lines and their labels. Mermaid caps edge
     * labels at 200px whatever wrappingWidth says, so lift that cap too or the
     * padding makes longer labels wrap.
     */
    .edgeLabel p,
    span.edgeLabel {
      padding: 0 0.4em;
    }
    .labelBkg {
      max-width: none !important;
    }
    code {
      font-family: 'Fira Code', monospace;
      font-size: 0.9em;
      background: #f4f0ea;
      color: #1d1d1b;
      padding: 0.1em 0.3em;
      border-radius: 0.25em;
    }
  `,
  // Wider than the default 200px, so short labels don't wrap word by word.
  // Mermaid 12 lays out with ELK by default, which ignores dagre-only options
  // such as rankSpacing and curve.
  flowchart: { wrappingWidth: 400 },
  themeVariables: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '18px',
    primaryColor: '#ffffff',
    primaryTextColor: '#1d1d1b',
    primaryBorderColor: '#1d1d1b',
    secondaryColor: '#f4f0ea',
    tertiaryColor: '#f4f0ea',
    lineColor: '#1d1d1b',
    clusterBkg: '#f4f0ea',
    clusterBorder: '#5c5c57',
    edgeLabelBackground: '#ffffff',
  },
}))
