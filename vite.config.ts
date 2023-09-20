import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 40000,
    hookTimeout: 40000,
    //TODO: Investigate coverage options later for output files
    // coverage: {
    //   provider: 'istanbul',
    //   enabled: true,
    //   reporter: 'html'
    // },
    browser: {
      name: 'chrome',
      enabled: true,
      headless: true
    }
  }
})