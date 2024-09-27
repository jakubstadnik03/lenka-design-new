import { defineType, defineArrayMember } from 'sanity';

export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'position',
          title: 'Image Position',
          type: 'string',
          options: {
            list: [
              { title: 'Full width', value: 'full' },
              { title: 'Left aligned', value: 'left' },
              { title: 'Right aligned', value: 'right' },
            ],
          },
        },
        {
          name: 'imageSource',
          type: 'string',
          title: 'Image Source',
          description: 'Credit or source of the image',
        },
      ],
    },
  ],
});
