import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'skjulet2026',

  projectId: 'uwxkrui6',
  dataset: 'skjulet2026',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
