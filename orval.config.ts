import { defineConfig } from 'orval'

export default defineConfig({
  travllerStore: {
    input: './src/openapi.json',
    output: {
      namingConvention: 'camelCase',
      target: './src/http/generated/endpoints',
      schemas: './src/http/generated/modelTypes',
      client: 'react-query',
      httpClient: 'axios',
      mode: 'split',
      override: {
        mutator: {
          path: './src/http/axios.ts',
          name: 'customMutator',
        },
      },
    },
  },
})
