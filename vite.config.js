// import { defineConfig } from 'vite';
// import viteImagemin from 'vite-plugin-imagemin';

// export default defineConfig({
//   plugins: [
//     viteImagemin({
//       // Options for image optimization
//     }),
//   ],
//   assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.png'],
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.png'],
  plugins: [react()],
})

