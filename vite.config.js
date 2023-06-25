import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    root: 'src',
    base: '/hangman/',
    build: {
        minify: true,
        outDir: './../dist',
        rollupOptions: {
            input: {
                main: './src/index.html',
            },
        },
    },
    plugins: [
        createHtmlPlugin({
            minify: true,
        }),
    ],
});
