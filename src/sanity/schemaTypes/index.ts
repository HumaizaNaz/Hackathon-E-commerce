import { type SchemaTypeDefinition } from 'sanity'

import hero from './landingpage-section/hero'
import vitaSection from './landingpage-section/vitaSection'
import fluid from './landingpage-section/fluid'
import { comment } from './landingpage-section/comment'
import { blog } from './landingpage-section/blog'
import editor from './landingpage-section/editor'
import productsList from './landingpage-section/productsList'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero,vitaSection,fluid,blog,comment,editor,productsList],
}
