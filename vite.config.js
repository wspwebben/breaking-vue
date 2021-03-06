import path from 'path';
import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  alias: {
    '/@': path.resolve(__dirname, 'src')
  },
}
