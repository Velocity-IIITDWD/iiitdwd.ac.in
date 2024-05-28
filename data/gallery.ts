import MBlock from '@/assets/gallery/M_Block.jpg';
import EBlock from '@/assets/gallery/E_Block.jpg';
import GBlock from '@/assets/gallery/G_Block.jpg';
import BBlock from '@/assets/gallery/B_Block.jpg';
import Library from '@/assets/gallery/Library.jpg';
import PiBlock from '@/assets/gallery/PiBlock.jpg';
import HBlock from '@/assets/gallery/H_Block.jpg';
import { StaticImageData } from 'next/image';

export interface gallery {
  url: StaticImageData;
  caption: string;
}

export const GalleryImages: gallery[] = [
  {
    url: MBlock,
    caption: 'M Block',
  },
  {
    url: PiBlock,
    caption: 'Pi Block',
  },
  {
    url: EBlock,
    caption: 'E Block',
  },
  {
    url: Library,
    caption: 'Library',
  },
  {
    url: BBlock,
    caption: 'B Block',
  },
  {
    url: GBlock,
    caption: 'G Block',
  },
  {
    url: HBlock,
    caption: 'H Block',
  },
];
