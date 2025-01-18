/* eslint-disable import/no-anonymous-default-export */
// schemas/product.js

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Product Description',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Dresses', value: 'dresses' },
          { title: 'Bags', value: 'bags' },
          { title: 'Shoes', value: 'shoes' },
          { title: 'Accessories', value: 'accessories' },
          { title: 'Jewelry', value: 'jewelry' },
          { title: 'Tops', value: 'tops' },
          { title: 'Bottoms', value: 'bottoms' },
          { title: 'Outerwear', value: 'outerwear' },
          { title: 'Kids', value: 'kids' },
          { title: 'Fashion', value: 'fashion' },
        ],
      },
    },
    {
      name: 'subCategory',
      title: 'Subcategory',
      type: 'string',
      options: {
        list: [
          // Subcategories for Dresses
          { title: 'Kurta (Men)', value: 'kurtaMen' },
          { title: 'Blazer (Men)', value: 'blazerMen' },
          { title: 'Kurta (Women)', value: 'kurtaWomen' },
          { title: 'Couple Dresses', value: 'coupleDresses' },
          { title: 'Shalwar Kameez', value: 'shalwarKameez' },
          { title: 'Kids (Boys)', value: 'kidsBoys' },
          { title: 'Kids (Girls)', value: 'kidsGirls' },
          { title: 'Eid Dresses', value: 'eidDresses' },
          { title: 'Lehengas', value: 'lehengas' },
          { title: 'Sarees', value: 'sarees' },
          { title: 'Necklaces', value: 'necklaces' },
          { title: 'Chokers', value: 'chokers' },
          { title: 'Necklace Sets', value: 'necklaceSets' },
          { title: 'Men Jewelry', value: 'menJewelry' },
          { title: 'Bangles', value: 'Bangles' },
          { title: 'Bracelets', value: 'Bracelets' },
          
          // Subcategories for Bags

          { title: 'Handbags', value: 'handbags' },
          { title: 'Backpacks', value: 'backpacks' },
          { title: 'Clutches', value: 'clutches' },
          { title: 'Tote Bags', value: 'toteBags' },
          // Subcategories for Shoes
          { title: 'Casual Shoes', value: 'casualShoes' },
          { title: 'Formal Shoes', value: 'formalShoes' },
          { title: 'Sandals', value: 'sandals' },
          { title: 'Sneakers', value: 'sneakers' },
          { title: 'Heels', value: 'heels' },
          // Subcategories for Fashion
          { title: 'Bottom Apparel', value: 'bottomApparel' },
          { title: 'Mens Sherwanis', value: 'mensSherwanis' },
          { title: 'Paint Shirt', value: 'paintShirt' },
          { title: 'T-Shirts', value: 'tShirts' },
          { title: 'Suits', value: 'suits' },
          { title: 'Girls Frocks', value: 'girlsFrocks' },
          // Subcategories for Kids
          { title: 'Toys', value: 'toys' },
          { title: 'Games', value: 'games' },
          { title: 'Clothing', value: 'kidsClothing' },
        ],
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'oldPrice',
      title: 'Old Price',
      type: 'number',
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'inStock' },
          { title: 'Out of Stock', value: 'outOfStock' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
    },
    {
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'colors',
      title: 'Colors Available',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sizeAvailability',
      title: 'Size Availability',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string',
    },
  ],
};
