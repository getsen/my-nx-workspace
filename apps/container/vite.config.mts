/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import path from 'path';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/container',
  resolve: {
    alias: {
      '@libs': path.resolve(__dirname, '../../libs'),
    },
  },
  server: {
    port: 4200,
    host: 'localhost',
    cors: true,
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    federation({
      name: 'container',
      remotes: {
        mfe1: 'http://localhost:4201/remoteEntry.js',
        mfe2: 'http://localhost:4202/remoteEntry.js',
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
