import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    base: '/hangman/',
    build: {
        outDir: './../dist',
        rollupOptions: {
            input: {
                main: './src/index.html',
            },
        },
    },
});
