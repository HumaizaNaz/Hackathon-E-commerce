import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

// Ensure projectId and dataset are valid
if (!projectId || !dataset) {
  throw new Error('Sanity projectId and dataset must be defined in the env file.');
}

const builder = createImageUrlBuilder({ projectId, dataset });

// Function to generate image URLs
export const urlFor = (source: SanityImageSource) => {
  if (!source) {
    console.warn('Image source is undefined or null.');
    return ''; // Return an empty string or fallback URL
  }
  return builder.image(source);
};
