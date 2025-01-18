// editorSection.ts
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'editorSection',
  title: 'Editor Section',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'imageSet',
          title: 'Image Set',
          type: 'object',
          fields: [
            {
              name: 'defaultImage',
              title: 'Default Image',
              type: 'image',
              options: {
                hotspot: true,  // Allows for focused area of the image
              },
            },
            {
              name: 'hoveredImage',
              title: 'Hovered Image',
              type: 'image',
              options: {
                hotspot: true,  // Allows for focused area of the image
              },
            },
          ],
        },
      ],
    },
  ],
};
