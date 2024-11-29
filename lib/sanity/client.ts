import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: "3hussc2p",
    dataset: "production",
    apiVersion: "2024-11-28",
    useCdn: false,
})
