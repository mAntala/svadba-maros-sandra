import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] }),
        svgr({
            svgrOptions: {
                svgo: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: { currentColor: true },
                        },
                    ],
                },
            },
        }),
    ],
});
