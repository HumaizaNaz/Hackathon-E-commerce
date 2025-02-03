import { type SchemaTypeDefinition } from 'sanity'

import hero from './landingpage-section/hero'
import vitaSection from './landingpage-section/vitaSection'
import fluid from './landingpage-section/fluid'
import { comment } from './landingpage-section/comment'
import { blog } from './landingpage-section/blog'
import editor from './landingpage-section/editor'
import productsList from './landingpage-section/productsList'
import faq from './faq'
import subOrder from './cards/subOrder'
import { subscription } from './cards/subscription'
import feedBack from './cards/feedBack'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero,vitaSection,fluid,blog,comment,editor,feedBack,productsList,faq,subOrder,subscription],
}
