import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: 'layout',
    filename: 'remoteEntry.js',
    remotes: {
      "react_mf": {
        external: 'http://localhost:3001/remoteEntry.js',
        from: 'webpack',
        format: 'var'
      },
      angular_mf: {
        external: 'http://localhost:3002/remoteEntry.js',
        from: 'webpack',
        format: 'var'
      }
    },
    exposes: {
    },
    shared: ['react', 'react-dom']
  })
  ],
})
