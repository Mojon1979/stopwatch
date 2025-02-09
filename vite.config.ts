import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Stopwatch': path.resolve(__dirname, 'src/Stopwatch'),
      '@StopwatchButton': path.resolve(__dirname, 'src/StopwatchButton'),
      '@TimerDisplay': path.resolve(__dirname, 'src/TimerDisplay'),
      '@LapTable': path.resolve(__dirname, 'src/LapTable'),
      '@LapRow': path.resolve(__dirname, 'src/LapRow'),
      '@Summary': path.resolve(__dirname, 'src/Summary'),
      '@Container': path.resolve(__dirname, 'src/Container'),
    },
  },
})
