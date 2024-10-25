// schemas/blogType.ts

import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(80),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'The main content of the blog post',
      validation: (Rule) => Rule.required().min(50),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'Publication date of the post',
      validation: (Rule) => Rule.required(),
    },
  ],
});
