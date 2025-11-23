/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import path from 'path';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/mfe2',
  resolve: {
    alias: {
      '@libs': path.resolve(__dirname, '../../libs'),
    },
  },
  server: {
    port: 4202,
    host: 'localhost',
    cors: true,
  },
  preview: {
    port: 4202,
    host: 'localhost',
  },
  plugins: [
    federation({
      name: 'mfe2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/app/app.tsx',
      },
      shared: {
        react: { singleton: true, requiredVersion: '0.0.0' },
        'react-dom': { singleton: true, requiredVersion: '0.0.0' },
        'react-router-dom': { singleton: true, requiredVersion: '0.0.0' },
      },
    }),
    react(),
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
