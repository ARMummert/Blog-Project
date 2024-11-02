"use client";

import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

console.log('Sanity Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log('Sanity Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log('Sanity API Token:', process.env.SANITY_API_TOKEN);

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2021-03-25',
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
});