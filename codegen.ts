import { CodegenConfig } from '@graphql-codegen/cli';
import { ENV } from './src/config';

const config: CodegenConfig = {
  schema: ENV.endpoint,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
  watch: true,
};

export default config;
