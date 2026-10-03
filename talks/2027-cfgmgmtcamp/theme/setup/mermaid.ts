import { defineMermaidSetup } from '@slidev/types'

// Mermaid diagrams in the OpenVox palette: ink on white, orange accents.
export default defineMermaidSetup(() => ({
  theme: 'base',
  // Allow HTML in labels (e.g. <code>) -- every diagram here is our own content.
  securityLevel: 'loose',
  // Styles inside the SVG, so they apply when Mermaid measures labels too.
  themeCSS: `
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
