import { client } from '@/lib/sanity/client';
import HomeComponent from './HomeComponent';

const queryCarousal = '*[_type == "mainCarouselImage"]';
const queryevent = '*[_type == "eventInf"]';
const querygallery = '*[_type == "gallery"]';

async function getEventData() {
  const data = (await client.fetch(queryevent)) as any[];
  return data;
}

async function getGalleryData() {
  const data = (await client.fetch(querygallery)) as any[];
  return data;
}

async function getMainCarouselData() {
  const data = (await client.fetch(queryCarousal)) as any[];
  return data;
}

export default async function Page() {
  const galleryData = await getGalleryData();
  const eventData = await getEventData();
  const carouselData = await getMainCarouselData();
   
  return(
    <HomeComponent eventData={eventData} galleryData={galleryData} carouselData={carouselData} />
  );
}