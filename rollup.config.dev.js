import svelte from 'rollup-plugin-svelte-hot';
import hot from 'rollup-plugin-hot';
import sveltePreprocess from 'svelte-preprocess';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './index.js',
    output: {
        dir: './public',
        sourcemap: true,
        format: 'iife'
    },
    plugins: [
        svelte({
            preprocess: sveltePreprocess({
                postcss: {
                    plugins: [
                       require('postcss-import')
                    ]
                }
            }),
            emitCss: false,
            dev: true
        }),

        resolve({
            mainFields: ['browser', 'main']
        }),

        hot()
    ]
};
