"use server"

import { client } from "@/sanity/lib/client"

export async function cartFetchSanity(){
  return await client.fetch(`*[_type == 'cart']{
  'user': user._ref,
  'products': products[]{
    'product': product._ref,
    quantity
  }
}`)

  
  
}