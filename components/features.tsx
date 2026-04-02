// "use client";

// import { useRef } from 'react';
// import  svgPaths from '@/public/Features-3/svg-8lwo4f6bze';
// import { imgVector } from '@/public/Features-3/svg-pt24z';
// import imgFrame2147225234 from '@/public/Features-3/4ccd2100efc9b68efb6beacfb9659dc2b80a291c.png';

// // Enhanced wrapper that adds scroll functionality
// export default function FeaturesSection() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: -600,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: 600,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="bg-white content-stretch flex flex-col gap-[54px] items-start py-[140px] relative w-full" data-name="Features">
        
//       {/* Header with scrolling controls */}
//       <div className="content-stretch flex items-end justify-between relative shrink-0 w-full px-[80px]" data-name="Texts and Scroll buttons">
//         <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-h-px min-w-px relative">
//           <div className="flex flex-col font-['Instrument_Sans:SemiBold','Noto_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3e3e3e] text-[48.551px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
//             <p className="leading-none">Empowering the Nigerian Alumni Network</p>
//           </div>
//           <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
//             <div className="flex flex-col font-['Figtree:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[21.008px] w-full">
//               <p className="leading-[31.512px]">Supporting your alma mater shouldn&apos;t be a logistical hurdle. Whether you are in Ibadan or the Diaspora, Alumnigiving.ng removes the barriers to institutional support.</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Scrolling arrow buttons with functionality */}
//         <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Scrolling arrow buttons">
//           <button 
//             onClick={scrollLeft}
//             className="content-stretch flex flex-col items-start pb-[4px] pt-px px-[6px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
//             aria-label="Scroll left"
//           >
//             <div className="relative shrink-0 size-[74px]">
//               <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
//                 <g clipPath="url(#clip0_1_786)">
//                   <path d={svgPaths.p2cbe3000} fill="white" />
//                   <path clipRule="evenodd" d={svgPaths.p30c7da80} fill="#3E588E" fillRule="evenodd" />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_1_786">
//                     <rect fill="white" height="74" width="74" />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </div>
//           </button>
          
//           <button 
//             onClick={scrollRight}
//             className="content-stretch flex flex-col items-start pb-[4px] pt-px px-[6px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
//             aria-label="Scroll right"
//           >
//             <div className="relative shrink-0 size-[74px]">
//               <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
//                 <g clipPath="url(#clip0_1_769)">
//                   <path d={svgPaths.p2cbe3000} fill="white" />
//                   <path clipRule="evenodd" d={svgPaths.p390d8280} fill="#3E588E" fillRule="evenodd" />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_1_769">
//                     <rect fill="white" height="74" width="74" />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Scrollable features container */}
//       <div 
//         ref={scrollContainerRef}
//         className="content-stretch flex gap-[22px] items-start overflow-x-auto scroll-smooth relative shrink-0 w-full pl-[80px] pr-20"
//         style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//       >
//         <FeatureCard1 />
//         <FeatureCard2 />
//         <FeatureCard3 />
//       </div>
      
//       <style>{`
//         .overflow-x-auto::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Feature Card 1: Volunteer Your Brilliance
// function FeatureCard1() {
//   return (
//     <div className="bg-[#f6f6f6] content-stretch flex flex-col gap-[20px] items-start pb-[20px] pt-[34px] px-[30px] relative rounded-[20px] shrink-0 w-[589px]">
//       <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
//         <div className="flex flex-[1_0_0] flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[30.1px] text-black tracking-[-0.602px]">
//           <p className="leading-[40px]">Volunteer Your Brilliance</p>
//         </div>
//         <div className="bg-[#f96804] content-stretch flex flex-col items-center justify-center px-[20px] py-[13.193px] relative rounded-[41.228px] shrink-0 cursor-pointer hover:bg-[#e05d03] transition-colors">
//           <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13.368px] text-center text-white whitespace-nowrap">
//             <p className="leading-[19.789px]">Apply for Cohort</p>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[20.8px] tracking-[-0.32px] w-[456px]">
//         <p className="leading-[36.2px]">Join our network of experts to mentor, consult, and build.</p>
//       </div>
//       <div className="bg-white content-stretch flex flex-col h-[527px] items-start justify-center relative rounded-[20px] shrink-0 w-full">
//         <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[20px] w-full">
//           <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
//             <img
//               alt="Professional mentor"
//               className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
//               src={imgFrame2147225234.src}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Feature Card 2: Fuel the Movement
// function FeatureCard2() {
//   return (
//     <div className="bg-[#f6f6f6] content-stretch flex flex-col gap-[20px] items-start pb-[20px] pt-[34px] px-[30px] relative rounded-[20px] shrink-0 w-[589px]">
//       <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
//         <div className="flex flex-[1_0_0] flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[30.1px] text-black tracking-[-0.602px]">
//           <p className="leading-[40px]">Fuel the Movement</p>
//         </div>
//         <div className="bg-[#f96804] content-stretch flex flex-col items-center justify-center px-[20px] py-[13.193px] relative rounded-[41.228px] shrink-0 cursor-pointer hover:bg-[#e05d03] transition-colors">
//           <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13.368px] text-center text-white whitespace-nowrap">
//             <p className="leading-[19.789px]">Contribute Now</p>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[20.8px] tracking-[-0.32px] w-full">
//         <p className="leading-[36.2px]">Commit to a monthly donation that directly powers our five pillars</p>
//       </div>
//       <DonationIllustration />
//     </div>
//   );
// }

// // Feature Card 3: Fuel the Movement (duplicate with same design)
// function FeatureCard3() {
//   return (
//     <div className="bg-[#f6f6f6] content-stretch flex flex-col gap-[20px] items-start pb-[20px] pt-[34px] px-[30px] relative rounded-[20px] shrink-0 w-[589px]">
//       <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
//         <div className="flex flex-[1_0_0] flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[30.1px] text-black tracking-[-0.602px]">
//           <p className="leading-[40px]">Fuel the Movement</p>
//         </div>
//         <div className="bg-[#f96804] content-stretch flex flex-col items-center justify-center px-[20px] py-[13.193px] relative rounded-[41.228px] shrink-0 cursor-pointer hover:bg-[#e05d03] transition-colors">
//           <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13.368px] text-center text-white whitespace-nowrap">
//             <p className="leading-[19.789px]">Contribute Now</p>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[20.8px] tracking-[-0.32px] w-full">
//         <p className="leading-[36.2px]">Commit to a monthly donation that directly powers our five pillars</p>
//       </div>
//       <DonationIllustration />
//     </div>
//   );
// }

// // Shared donation illustration component
// function DonationIllustration() {
//   return (
//     <div className="bg-white content-stretch flex flex-col h-[527px] items-start justify-center relative rounded-[20px] shrink-0 w-full">
//       <div className="bg-white flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[20px] w-full">
//         {/* Orange header illustration */}
//         <div className="absolute inset-[4.8%_3.97%_59.28%_3.97%]">
//           <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 487 189.326">
//             <g>
//               <path d={svgPaths.p693cd80} fill="#F96804" />
//               <path d={svgPaths.p14dcb100} fill="white" />
//               <path d={svgPaths.p35f070f0} fill="white" />
//             </g>
//           </svg>
//         </div>
        
//         {/* Main illustration container */}
//         <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[369px] left-[calc(50%-0.5px)] overflow-clip top-[calc(50%+99.89px)] w-[494.273px]">
//           <div className="absolute contents inset-[0_5.22%_4.9%_5.22%]">
//             <div className="absolute contents inset-[-43.36%_5.22%_4.9%_-28.2%]">
//               {/* White background shape */}
//               <div className="absolute inset-[0_5.22%_4.9%_5.22%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[442.651px_350.937px]" style={{ maskImage: `url('${imgVector}')` }}>
//                 <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 442.651 350.937">
//                   <path d={svgPaths.p2a7c9d00} fill="white" />
//                 </svg>
//               </div>
              
//               {/* Success icon */}
//               <div className="absolute inset-[6.99%_78.07%_76.22%_9.4%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20.648px_-25.804px] mask-size-[442.651px_350.937px]" style={{ maskImage: `url('${imgVector}')` }}>
//                 <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9454 61.9301">
//                   <path d={svgPaths.p287dbd80} fill="#DCFAE6" />
//                 </svg>
//               </div>
              
//               {/* Checkmark */}
//               <div className="absolute inset-[11.89%_81.72%_81.12%_13.05%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-38.716px_-43.867px] mask-size-[442.651px_350.937px]" style={{ maskImage: `url('${imgVector}')` }}>
//                 <div className="absolute inset-[-3.04%]">
//                   <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3776 27.3712">
//                     <path d={svgPaths.p9c5de00} stroke="#079455" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.56701" />
//                   </svg>
//                 </div>
//               </div>
              
//               {/* Text: Your Donation is being processed */}
//               <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[45.14px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-19.326px_-103px] mask-size-[442.651px_350.937px] text-[25.1px] text-black top-[123px] tracking-[-1.004px] w-[379px]" style={{ maskImage: `url('${imgVector}')` }}>
//                 <p className="leading-[40px]">Your Donation is being processed</p>
//               </div>
              
//               {/* Subtext */}
//               <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[45.14px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-19.326px_-137px] mask-size-[442.651px_350.937px] text-[#475467] text-[18.1px] top-[157px] w-[379px]" style={{ maskImage: `url('${imgVector}')` }}>
//                 <p className="leading-[40px]">Your funds are on its way to the foundation</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/Features.tsx
// Together.ng — "Empowering the Nigerian Alumni Network" features section
// Horizontally scrollable cards with left/right arrow navigation
//
// Fonts required (same as Hero — already in layout.tsx):
//   Instrument Sans, Figtree, Public Sans
//   Add Public Sans to your Google Fonts import:
//   'Public+Sans:wght@400;600'

'use client'

import Image from 'next/image'
import { useRef } from 'react'

// ─── Asset URLs ───────────────────────────────────────────────────────────────
// ⚠️ Figma asset URLs expire in 7 days.
// Download and place in /public/images/ before deploying.
const ASSETS = {
  volunteerPhoto: '/images/volunteer-photo.png',
  donationUI:     '/images/donation-ui.svg',
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface FeatureCard {
  title:       string
  ctaLabel:    string
  ctaHref:     string
  description: string
  image:       string
  imageAlt:    string
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const FEATURES: FeatureCard[] = [
  {
    title:       'Volunteer Your Brilliance',
    ctaLabel:    'Apply for Cohort',
    ctaHref:     '#volunteer',
    description: 'Join our network of experts to mentor, consult, and build.',
    image:       ASSETS.volunteerPhoto,
    imageAlt:    'Alumni volunteer mentoring',
  },
  {
    title:       'Fuel the Movement',
    ctaLabel:    'Contribute Now',
    ctaHref:     '#donate',
    description: 'Commit to a monthly donation that directly powers our five pillars.',
    image:       ASSETS.donationUI,
    imageAlt:    'Donation campaign dashboard',
  },
  {
    title:       'Shape the Future',
    ctaLabel:    'Get Involved',
    ctaHref:     '#projects',
    description: 'Partner with us on infrastructure, scholarships, and special projects.',
    image:       ASSETS.donationUI,
    imageAlt:    'Alumni giving projects',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: 'left' | 'right') {
    if (!scrollRef.current) return
    // Scroll by one card width + gap
    const amount = 589 + 22
    scrollRef.current.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-white w-full py-[140px] flex flex-col gap-[54px] overflow-hidden">

      {/* ── Header row: title + subtext left, arrows right ── */}
      <div className="flex items-end justify-between px-[80px]">

        {/* Left: heading + subtext */}
        <div className="flex flex-col gap-[22px] max-w-[860px]">
          <h2
            className="
              font-[family-name:var(--font-instrument-sans)]
              font-semibold text-[#303030]
              text-[clamp(32px,3.37vw,48.5px)]
              leading-none tracking-tight
            "
          >
            Empowering the Nigerian Alumni Network
          </h2>
          <p
            className="
              font-[family-name:var(--font-figtree)]
              font-light text-[#1a1a1a]
              text-[clamp(16px,1.46vw,21px)]
              leading-[1.5]
            "
          >
            Supporting your alma mater shouldn&apos;t be a logistical hurdle. Whether
            you are in Ibadan or the Diaspora, Alumnigiving.ng removes the barriers
            to institutional support.
          </p>
        </div>

        {/* Right: scroll arrows */}
        <div className="flex items-center gap-[10px] flex-shrink-0 ml-8">
          <ArrowButton direction="left"  onClick={() => scroll('left')}  />
          <ArrowButton direction="right" onClick={() => scroll('right')} />
        </div>

      </div>

      {/* ── Horizontally scrollable cards ── */}
      <div
        ref={scrollRef}
        className="
          flex gap-[22px] items-start
          pl-[80px] pr-[40px]
          overflow-x-auto
          scroll-smooth
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {FEATURES.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>

    </section>
  )
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ title, ctaLabel, ctaHref, description, image, imageAlt }: FeatureCard) {
  return (
    <article
      className="
        bg-[#f6f6f6] rounded-[20px]
        flex flex-col gap-[20px]
        pt-[34px] pb-[20px] px-[30px]
        flex-shrink-0 w-[589px]
      "
    >
      {/* Card header: title + CTA pill */}
      <div className="flex items-center gap-[8px] w-full">
        <h3
          className="
            flex-1 min-w-0
            font-[family-name:var(--font-public-sans)]
            font-semibold text-black
            text-[30px] leading-[40px] tracking-[-0.6px]
          "
        >
          {title}
        </h3>
        <a
          href={ctaHref}
          className="
            flex-shrink-0
            bg-[#f96804] text-white
            font-[family-name:var(--font-figtree)] font-semibold
            text-[13.4px] leading-[1.48]
            px-[20px] py-[13px]
            rounded-full
            whitespace-nowrap
            transition-all duration-200
            hover:bg-[#e05a00] hover:shadow-[0_4px_16px_rgba(249,104,4,0.35)]
            hover:-translate-y-0.5
            active:translate-y-0
          "
        >
          {ctaLabel}
        </a>
      </div>

      {/* Description */}
      <p
        className="
          font-[family-name:var(--font-figtree)]
          font-light text-[#232323]
          text-[20.8px] leading-[36px] tracking-[-0.32px]
        "
      >
        {description}
      </p>

      {/* Image */}
      <div className="relative w-full h-[527px] bg-white rounded-[20px] overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-center"
        />
      </div>
    </article>
  )
}

// ─── Arrow Button ─────────────────────────────────────────────────────────────
function ArrowButton({
  direction,
  onClick,
}: {
  direction: 'left' | 'right'
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
      className="
        w-[74px] h-[74px]
        rounded-full border border-[#303030]
        flex items-center justify-center
        flex-shrink-0
        transition-all duration-200
        hover:bg-[#303030] hover:text-white
        active:scale-95
        group
      "
    >
      {direction === 'left' ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:stroke-white transition-colors duration-200">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#303030" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:stroke-white transition-colors duration-200">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#303030" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
        </svg>
      )}
    </button>
  )
}