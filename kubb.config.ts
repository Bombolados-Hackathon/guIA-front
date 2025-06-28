import { defineConfig, type UserConfig } from '@kubb/core'
import { pluginClient } from '@kubb/plugin-client'
import { pluginReactQuery } from '@kubb/plugin-react-query'
import { pluginTs } from '@kubb/plugin-ts'
import { pluginOas } from '@kubb/plugin-oas'

export const config: UserConfig = {
  root: '.',
  input: {
    path: './src/openapi.json',
  },
  output: {
    path: './src/http/generated',
    clean: true,
  },
  hooks: { done: [] },
  plugins: [
    pluginClient({
      baseURL: 'http://192.168.1.106:8000',
      output: { path: '.' },
    }),
    pluginReactQuery({
      output: { path: '../../hooks/generated' },
      paramsType: 'inline',
      pathParamsType: 'inline',
      client: {
        baseURL: 'http://192.168.1.106:8000',
      },
    }),
    pluginTs({
      output: {
        path: 'models',
      },
    }),
    pluginOas({ generators: [], validate: false }),
  ],
}

export default defineConfig(config)
