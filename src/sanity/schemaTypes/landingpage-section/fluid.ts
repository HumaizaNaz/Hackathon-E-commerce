/* eslint-disable @typescript-eslint/no-explicit-any */
// hero.ts

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'fluidSection',
    title: 'Fluid Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(80),
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        validation: (Rule: { max: (arg0: number) => any; }) => Rule.max(120),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(10).max(500),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Describe the image for accessibility and SEO',
            validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(100),
          },
        ],
      },
    ],
  };
