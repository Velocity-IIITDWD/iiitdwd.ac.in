import { FetchSanity } from '@/lib/sanity/client';
import HomeComponent from './HomeComponent';
import {
  GetAnnouncements,
  queryCarousel,
  queryEvents,
  queryGallery,
  queryPrograms,
} from '@/lib/sanity/Queries';

export default async function Page() {
  const galleryData = await FetchSanity(queryGallery);
  const eventData = await FetchSanity(queryEvents);
  const carouselData = await FetchSanity(queryCarousel);
  const announcements = await FetchSanity(GetAnnouncements);
  const programs = await FetchSanity(queryPrograms);

  return (
    <HomeComponent
      {...{ galleryData, eventData, carouselData, announcements, programs }}
    />
  );
}
