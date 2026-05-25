import { ImageResponse } from 'next/og'
  // Tell Next.js the size of the image
  export const size = {
width: 1200,
height: 630,
}
  // Tell Next.js the file type
  export const contentType = 'image/png'
  // This function returns the actual image
  export default async function Image() {
    return new ImageResponse(
(
// Write JSX here — it becomes a PNG image
<div
style={{
    display: 'flex',          // IMPORTANT: must be flex
    width: '100%',
    height: '100%',
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
}}
>
    <h1 style={{ color: '#3B82F6', fontSize: 64 }}>
FSD Batch 1
</h1>
<p style={{ color: '#94A3B8', fontSize: 30 }}>
  Learn Next.js 15 with Adfar Sir
</p>
</div>
),
{ ...size }
)
}