// orval.config.ts
import { defineConfig } from 'orval'

export default defineConfig({
  travllerStore: {
    input: './src/openapi.json',
    output: {
      namingConvention: 'camelCase',
      target: './src/http/generated/endpoints',
      schemas: './src/http/generated/modelTypes',
      client: 'react-query',
      mode: 'split',
      override: {
        mutator: {
          path: './src/http/client.ts', // 👈 caminho relativo ao arquivo que será gerado
          name: 'customFetcher',
        },
      },
    },
  },
})
