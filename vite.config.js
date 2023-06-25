import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    // We set this because Github Pages will host this project in a subpath.
    base: '/hangman/',

    root: 'src',
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
