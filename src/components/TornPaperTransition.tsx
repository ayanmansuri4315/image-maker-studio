import React from 'react';
import { motion } from 'motion/react';

interface TornPaperTransitionProps {
  fillColor?: string; // Color of the paper body (default #F2EDE4 matching cream page background)
  className?: string;
  overlap?: boolean;
}

export const TornPaperTransition: React.FC<TornPaperTransitionProps> = ({
  fillColor = '#F2EDE4',
  className = '',
  overlap = true,
}) => {
  // Realistic, organically hand-torn paper path with natural micro-serrations, ripped paper fibers, and authentic deckle contours
  const tornPaperPath =
    'M 0 45 ' +
    'C 25 43, 45 52, 70 47 ' +
    'C 95 42, 115 35, 140 40 ' +
    'C 165 45, 185 53, 210 48 ' +
    'C 235 43, 255 34, 280 39 ' +
    'C 305 44, 325 50, 350 46 ' +
    'C 375 42, 395 32, 420 37 ' +
    'C 445 42, 465 54, 490 49 ' +
    'C 515 44, 535 36, 560 41 ' +
    'C 585 46, 605 52, 630 47 ' +
    'C 655 42, 675 33, 700 38 ' +
    'C 725 43, 745 55, 770 50 ' +
    'C 795 45, 815 35, 840 40 ' +
    'C 865 45, 885 51, 910 46 ' +
    'C 935 41, 955 31, 980 37 ' +
    'C 1005 43, 1025 53, 1050 48 ' +
    'C 1075 43, 1095 36, 1120 41 ' +
    'C 1145 46, 1165 54, 1190 49 ' +
    'C 1215 44, 1235 34, 1260 39 ' +
    'C 1285 44, 1305 52, 1330 47 ' +
    'C 1355 42, 1375 33, 1400 39 ' +
    'C 1420 44, 1435 48, 1440 46 ' +
    'L 1440 85 L 0 85 Z';

  // Frayed raw cellulose fibers (fine, micro-serrated ripped edges protruding along the tear line)
  const frayedFiberPath =
    'M 0 41 ' +
    'L 12 39 L 24 45 L 38 41 L 52 48 L 68 44 L 82 37 L 96 42 L 112 33 L 128 40 L 144 35 L 160 44 L 176 38 L 192 49 L 208 43 L 224 35 L 240 41 L 256 32 L 272 39 L 288 34 L 304 43 L 320 48 L 336 41 L 352 45 L 368 38 L 384 31 L 400 38 L 416 33 L 432 42 L 448 49 L 464 42 L 480 47 L 496 40 L 512 33 L 528 40 L 544 35 L 560 43 L 576 49 L 592 42 L 608 47 L 624 39 L 640 32 L 656 39 L 672 34 L 688 42 L 704 48 L 720 41 L 736 46 L 752 38 L 768 31 L 784 39 L 800 47 L 816 41 L 832 35 L 848 42 L 864 48 L 880 41 L 896 46 L 912 39 L 928 32 L 944 39 L 960 34 L 976 43 L 992 49 L 1008 42 L 1024 47 L 1040 40 L 1056 33 L 1072 40 L 1088 35 L 1104 43 L 1120 49 L 1136 42 L 1152 47 L 1168 39 L 1184 32 L 1200 40 L 1216 35 L 1232 43 L 1248 49 L 1264 42 L 1280 47 L 1296 39 L 1312 32 L 1328 39 L 1344 34 L 1360 42 L 1376 48 L 1392 41 L 1408 46 L 1424 39 L 1440 43 ' +
    'L 1440 85 L 0 85 Z';

  // Deep ambient contact shadow simulating the 3D elevation of torn handmade paper over the photographic film
  const shadowPath =
    'M 0 46 ' +
    'C 30 44, 50 54, 80 49 ' +
    'C 110 44, 130 37, 160 42 ' +
    'C 190 47, 210 55, 240 50 ' +
    'C 270 45, 290 36, 320 41 ' +
    'C 350 46, 370 52, 400 48 ' +
    'C 430 44, 450 34, 480 39 ' +
    'C 510 44, 530 56, 560 51 ' +
    'C 590 46, 610 38, 640 43 ' +
    'C 670 48, 690 54, 720 49 ' +
    'C 750 44, 770 35, 800 40 ' +
    'C 830 45, 850 57, 880 52 ' +
    'C 910 47, 930 37, 960 42 ' +
    'C 990 47, 1010 53, 1040 48 ' +
    'C 1070 43, 1090 33, 1120 39 ' +
    'C 1150 45, 1170 55, 1200 50 ' +
    'C 1230 45, 1250 38, 1280 43 ' +
    'C 1310 48, 1330 56, 1360 51 ' +
    'C 1390 46, 1410 36, 1440 41 ' +
    'L 1440 85 L 0 85 Z';

  return (
    <div
      id="torn-paper-transition"
      className={`w-full relative z-30 pointer-events-none select-none overflow-hidden leading-none ${
        overlap ? '-mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20' : ''
      } ${className}`}
    >
      <motion.div
        initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', opacity: 0 }}
        animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative will-change-transform"
      >
        <svg
          viewBox="0 0 1440 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 block filter drop-shadow-[0_8px_16px_rgba(37,25,18,0.35)]"
        >
          {/* Layer 1: Ambient Drop Shadow beneath the torn edge onto the hero photograph */}
          <path
            d={shadowPath}
            fill="rgba(37, 25, 18, 0.45)"
            className="transform translate-y-1.5"
          />

          {/* Layer 2: Secondary Soft Contact Shadow for natural paper depth */}
          <path
            d={frayedFiberPath}
            fill="rgba(20, 12, 8, 0.25)"
            className="transform translate-y-0.5"
          />

          {/* Layer 3: Exposed Pure White Deckle Pulp & Raw Paper Fibers */}
          <path
            d={frayedFiberPath}
            fill="#FFFFFF"
            opacity="0.98"
          />

          {/* Layer 4: Secondary Light Deckle Fiber Shadow Accent */}
          <path
            d={tornPaperPath}
            fill="#F8F4EE"
            opacity="0.8"
            className="transform -translate-y-0.5"
          />

          {/* Layer 5: Main Cream/White Paper Body seamlessly transitioning into the page */}
          <path d={tornPaperPath} fill={fillColor} />
        </svg>
      </motion.div>
    </div>
  );
};
