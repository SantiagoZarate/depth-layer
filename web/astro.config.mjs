import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import AutoImport from 'astro-auto-import'
import mdx from '@astrojs/mdx'

import MDXCodeBlocks, { mdxCodeBlockAutoImport } from 'astro-mdx-code-blocks'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), AutoImport({
    imports: [
      mdxCodeBlockAutoImport('src/components/CodeSnippet.astro')
    ]
  }),
  MDXCodeBlocks(),
  mdx()],
});