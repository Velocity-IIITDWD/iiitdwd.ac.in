import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ 
    projectId: "3hussc2p",
    dataset: "production", 
})

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
