import react from '@vitejs/plugin-react';
import { join } from 'path';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import type { InlineConfig } from 'vitest';
import { dependencies } from './package.json';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

function renderChunks(deps: Record<string, string>) {
  const chunks = {};

  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) {
      return;
    }

    chunks[key] = [key];
  });

  return chunks;
}

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Pokédex',
        short_name: 'Pokédex',
        start_url: '.',
        display: 'standalone',
        theme_color: '#0000ff',
        background_color: '#0000ff',
        prefer_related_applications: false,
        icons: [
          {
            src: 'favicon.ico',
            sizes: '144x144 96x96 64x64 48x48 32x32 24x24',
            type: 'image/x-icon',
          },
          {
            src: 'logo144.png',
            type: 'image/png',
            sizes: '144x144',
            purpose: 'maskable any',
          },
          {
            src: 'logo192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'maskable any',
          },
          {
            src: 'logo512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable any',
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      '@components': join(__dirname, 'src/components'),
      '@constants': join(__dirname, 'src/types/constants.ts'),
      '@hooks': join(__dirname, 'src/hooks'),
      '@tests': join(__dirname, 'src/tests/helpers.ts'),
      '@views': join(__dirname, 'src/views'),
    },
  },

  root: __dirname,

  base: './',

  server: {
    port: 3000,

    host: true,
  },

  build: {
    target: 'esnext',

    emptyOutDir: true,

    outDir: './build',

    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },

  test: {
    globals: true,

    environment: 'jsdom',

    setupFiles: './setupTests.ts',
  },
} as VitestConfigExport);
