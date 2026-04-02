# Hero Component — Setup Guide

## 1. Drop the file into your project
```
your-project/
└── components/
    └── Hero.tsx   ← place here
```

## 2. Set up fonts in layout.tsx
```tsx
// app/layout.tsx
import { Instrument_Sans, Figtree } from 'next/font/google'
import localFont from 'next/font/local'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-instrument-sans',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-figtree',
})

// Geist is available as a local font in Next.js 15+
// Or install: npm install geist
import { GeistSans } from 'geist/font/sans'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${figtree.variable} ${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

## 3. Use it in your page
```tsx
// app/page.tsx
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  )
}
```

## 4. Replace the background image
The Figma asset URL expires in 7 days. Before then:
1. Download the campus image from the Figma asset URL
2. Place it in `/public/images/isi-campus.jpg`
3. In Hero.tsx, change:
   ```ts
   const CAMPUS_IMAGE = 'https://www.figma.com/api/mcp/asset/...'
   ```
   to:
   ```ts
   const CAMPUS_IMAGE = '/images/isi-campus.jpg'
   ```

## 5. Tailwind config — add your brand colors
```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          navy:   '#2a2179',
          orange: '#f96804',
        },
      },
    },
  },
}
```
