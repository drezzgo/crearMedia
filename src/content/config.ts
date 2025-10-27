import { defineCollection, z } from 'astro:content';

const blogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const eventosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    time: z.string(),
    type: z.enum(['workshop', 'meetup', 'webinar', 'conference']),
    image: z.string().optional(),
  }),
});

export const collections = {
  blogs: blogsCollection,
  eventos: eventosCollection,
};
