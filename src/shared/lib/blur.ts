import { encode } from 'blurhash';

export async function getBlurhashFromUrl(imageUrl: string): Promise<string | null> {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = imageUrl;

  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });

  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return null;
  }

  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  return encode(imageData.data, imageData.width, imageData.height, 4, 3);
}
