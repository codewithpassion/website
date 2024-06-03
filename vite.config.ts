import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { imagetools } from 'vite-imagetools'
import sizeOf from 'image-size';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.pathname.includes('photos')) {
          const dimensions = sizeOf(url.pathname);
          let w = 800;
          let h = Math.round(dimensions.height * (w / dimensions.width));
          if (dimensions.height > dimensions.width) {
            h = 800;
            w = Math.round(dimensions.width * (h / dimensions.height));
          }

          return new URLSearchParams({
            format: 'webp',
            quality: '85',
            width: w,
            height: h,
          })
        }
        return new URLSearchParams()
      }
    }),
    ViteImageOptimizer({}),
  ],
})
