import { isUnpicCompatible, unpicOptimizer, astroAsseetsOptimizer } from './images-optimization';
import type { ImageMetadata } from 'astro';
import type { OpenGraph } from '@astrolib/seo';

const load = async function () {
  let images: Record<string, () => Promise<unknown>> | undefined = undefined;
  try {
    images = import.meta.glob('~/assets/images/**/*.{jpeg,jpg,png,tiff,webp,gif,svg,JPEG,JPG,PNG,TIFF,WEBP,GIF,SVG}');
  } catch (error) {
    // continue regardless of error
  }
  return images;
};

let _images: Record<string, () => Promise<unknown>> | undefined = undefined;

export const fetchLocalImages = async () => {
  _images = _images || (await load());
  return _images;
};

export const findImage = async (
  imagePath?: string | ImageMetadata | null
): Promise<string | ImageMetadata | undefined | null> => {
  if (typeof imagePath !== 'string') {
    return imagePath;
  }

  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('/')) {
    return imagePath;
  }

  if (!imagePath.startsWith('~/assets/images')) {
    return imagePath;
  }

  const images = await fetchLocalImages();
  const key = imagePath.replace('~/', '/src/');

  return images && typeof images[key] === 'function'
    ? ((await images[key]()) as { default: ImageMetadata })['default']
    : null;
};

// ✅ Helper to build a valid ImageMetadata object
const toImageMetadata = (img: { src: string; width: number }, height: number, format: string): ImageMetadata => ({
  src: img.src,
  width: img.width,
  height,
  format,
});

export const adaptOpenGraphImages = async (
  openGraph: OpenGraph = {},
  astroSite: URL | undefined = new URL('')
): Promise<OpenGraph> => {
  if (!openGraph?.images?.length) {
    return openGraph;
  }

  const images = openGraph.images;
  const defaultWidth = 1200;
  const defaultHeight = 626;

  const adaptedImages = await Promise.all(
    images.map(async (image) => {
      if (image?.url) {
        const resolvedImage = (await findImage(image.url)) as ImageMetadata | string | undefined;
        if (!resolvedImage) {
          return { url: '' };
        }

        let _image: ImageMetadata | string | undefined = resolvedImage;

        if (
          typeof resolvedImage === 'string' &&
          (resolvedImage.startsWith('http://') || resolvedImage.startsWith('https://')) &&
          isUnpicCompatible(resolvedImage)
        ) {
          const optimized = (await unpicOptimizer(resolvedImage, [defaultWidth], defaultWidth, defaultHeight, 'jpg'))[0];
          _image = toImageMetadata(optimized, defaultHeight, 'jpg');
        } else if (resolvedImage && typeof resolvedImage !== 'string') {
          const dimensions =
            resolvedImage?.width <= defaultWidth
              ? [resolvedImage?.width, resolvedImage?.height]
              : [defaultWidth, defaultHeight];
          const optimized = (await astroAsseetsOptimizer(resolvedImage, [dimensions[0]], dimensions[0], dimensions[1], 'jpg'))[0];
          _image = toImageMetadata(optimized, dimensions[1], 'jpg');
        }

        if (typeof _image === 'object') {
          return {
            url: 'src' in _image && typeof _image.src === 'string' ? String(new URL(_image.src, astroSite)) : '',
            width: _image.width,
            height: _image.height,
          };
        }

        return { url: '' };
      }

      return { url: '' };
    })
  );

  return { ...openGraph, ...(adaptedImages ? { images: adaptedImages } : {}) };
};
