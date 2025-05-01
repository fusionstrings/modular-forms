import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig(() => {
  return {
    build: {
      target: 'esnext',
      outDir: 'dist',
      lib: {
        entry: './src/index.ts',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
      minify: false,
      rollupOptions: {
        external: [
          'preact',
          'preact/hooks',
          'preact/jsx-runtime',
          '@preact/signals',
          'valibot',
          'zod',
        ],
      },
    },
    plugins: [preact()],
  };
});
