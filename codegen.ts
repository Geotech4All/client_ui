
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://v2graphqlserver-production.up.railway.app/graphql",
  generates: {
    "src/lib/graphql/generated.ts": {
      plugins: ["typescript", "typescript-document-nodes"]
    }
  }
};

export default config;
