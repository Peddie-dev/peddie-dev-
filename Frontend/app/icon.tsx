import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

async function profileDataUrl() {
  const file = await readFile(join(process.cwd(), 'public/nav-profile.jpg'));
  return `data:image/jpeg;base64,${file.toString('base64')}`;
}

export default async function Icon() {
  const src = await profileDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0b1220'
        }}
      >
        <img
          src={src}
          alt=""
          width={32}
          height={32}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '22%'
          }}
        />
      </div>
    ),
    { ...size }
  );
}
