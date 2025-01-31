import { FetchSanity } from '@/lib/sanity/client';
import HomeComponent from './HomeComponent';
import { queryCarousel, queryEvents, queryGallery } from '@/lib/sanity/Queries';

export default async function Page() {
  const galleryData = await FetchSanity(queryGallery);
  const eventData = await FetchSanity(queryEvents);
  const carouselData = await FetchSanity(queryCarousel);

  return (
    <HomeComponent
      eventData={eventData}
      galleryData={galleryData}
      carouselData={carouselData}
    />
  );
}
