import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from "@astrojs/preact";
import NetlifyCMS from 'astro-netlify-cms';
import { string } from 'astro/zod';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          // define a blog post collection
          {
            name: 'posts',
            label: 'Blog Posts',
            folder: 'src/pages/posts',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post title'},
              { name: 'body', widget: 'markdown', label: 'Post Body'},
            ]
          },
          {
            name: 'pages',
            label: 'Pages',
            files: [
              {
                file: 'src/pages/index.md',
                label: 'Homepage',
                name: 'index',
                create: true,
                delete: true,
                fields: [
                  { name: 'title', widget: 'string', label: 'Homepage title'},
                  { name: 'heroTitle', widget: 'string', label: 'Hero title' },
                  { name: 'heroImage', widget: 'image', label: 'Hero image' },
                  { name: 'introTitle', widget: 'string', label: 'Introduction title'},
                  { name: 'introText', widget: 'markdown', label: 'Introduction text' },
                  { name: 'gettingStartedTitle', widget: 'string', label: 'Getting Started - title'},
                  { name: 'gettingStartedText', widget: 'markdown', label: 'Getting Started - text' },
                ]
              }
            ]
          }
        ]
      }
    })
  ]
});