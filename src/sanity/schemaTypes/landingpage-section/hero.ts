// hero.ts
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'heroSection',
    title: 'Hero Section', // Display title in Sanity Studio
    type: 'document',        // The type of this schema is an object
    fields: [
      {
        name: 'title',      // The title of the hero section
        title: 'Title',     // Label shown in Sanity Studio
        type: 'string'      // The field type is string (for text input)
      },
      {
        name: 'subtitle',   // The subtitle under the title
        title: 'Subtitle',
        type: 'string'
      },
      {
        name: 'description',  // A longer description for the hero section
        title: 'Description',
        type: 'text'          // Type is text to allow longer input
      },
      {
        name: 'image',       // Image for the hero section
        title: 'Image',
        type: 'image',       // Type is image
        options: {
          hotspot: true      // Allows for a focused area of the image
        }
      }
    ]
  };
  