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
  let carouselData = await FetchSanity(queryCarousel) as any[];
  const announcements = await FetchSanity(GetAnnouncements);
  const programs = await FetchSanity(queryPrograms);

  carouselData?.sort((a,b) => a._createdAt > b._createdAt ? -1 : 1);

  return (
    <HomeComponent
      {...{ galleryData, eventData, carouselData, announcements, programs }}
    />
  );
}
