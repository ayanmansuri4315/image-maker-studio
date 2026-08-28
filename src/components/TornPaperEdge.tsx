import React from 'react';
import { motion } from 'motion/react';

interface TornPaperEdgeProps {
  position?: 'top' | 'bottom';
  fillColor?: string; // Color of the paper fill (e.g., #F2EDE4 for cream, #FFFFFF for white torn paper)
  className?: string;
  flip?: boolean;
}

export const TornPaperEdge: React.FC<TornPaperEdgeProps> = ({
  position = 'bottom',
  fillColor = '#F2EDE4',
  className = '',
  flip = false,
}) => {
  // Ultra-detailed realistic hand-torn paper path with natural micro-ripples, irregular fibrous rips, and authentic jagged deckle edges
  const mainTornPath =
    'M 0 52 ' +
    'Q 20 48, 40 51 T 80 44 T 120 49 T 160 41 T 200 46 T 240 38 T 280 44 T 320 36 T 360 42 T 400 47 T 440 39 T 480 45 T 520 35 T 560 41 T 600 46 T 640 37 T 680 43 T 720 34 T 760 42 T 800 48 T 840 39 T 880 44 T 920 35 T 960 43 T 1000 47 T 1040 38 T 1080 45 T 1120 36 T 1160 43 T 1200 49 T 1240 40 T 1280 46 T 1320 37 T 1360 44 T 1400 50 T 1440 42 ' +
    'L 1440 80 L 0 80 Z';

  // Frayed raw paper fibers (slightly protruding with micro serrations)
  const frayedFiberPath =
    'M 0 49 ' +
    'L 15 47 L 30 52 L 45 46 L 60 50 L 75 42 L 90 48 L 110 43 L 130 51 L 150 39 L 170 47 L 190 41 L 210 48 L 235 36 L 255 44 L 275 39 L 300 46 L 320 34 L 340 43 L 365 48 L 385 37 L 410 45 L 430 40 L 455 49 L 475 35 L 500 43 L 525 33 L 550 42 L 575 48 L 600 36 L 625 44 L 650 38 L 675 46 L 700 32 L 725 41 L 750 47 L 775 37 L 800 45 L 825 40 L 850 49 L 875 35 L 900 44 L 925 33 L 950 42 L 975 48 L 1000 36 L 1025 45 L 1050 39 L 1075 47 L 1100 34 L 1125 43 L 1150 49 L 1175 38 L 1200 46 L 1225 41 L 1250 48 L 1275 36 L 1300 45 L 1325 35 L 1350 44 L 1375 49 L 1400 39 L 1420 46 L 1440 40 ' +
    'L 1440 80 L 0 80 Z';

  // Deep shadow layer for genuine paper thickness and elevation above the photograph
  const shadowPath =
    'M 0 54 ' +
    'Q 30 50, 70 47 T 150 44 T 230 40 T 310 38 T 390 45 T 470 41 T 550 37 T 630 43 T 710 36 T 790 44 T 870 41 T 950 38 T 1030 45 T 1110 39 T 1190 46 T 1270 42 T 1350 45 T 1440 44 ' +
    'L 1440 80 L 0 80 Z';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`w-full overflow-hidden leading-none z-30 pointer-events-none relative ${
        position === 'top' ? '-mt-1' : '-mb-1'
      } ${className}`}
      style={{
        transform: `${position === 'top' ? 'rotate(180deg)' : ''} ${
          flip ? 'scaleX(-1)' : ''
        }`,
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)]"
      >
        {/* Layer 1: Ambient Drop Shadow beneath torn paper edge */}
        <path
          d={shadowPath}
          fill="rgba(37, 25, 18, 0.45)"
          className="transform translate-y-1.5"
        />

        {/* Layer 2: Secondary Soft Contact Shadow */}
        <path
          d={frayedFiberPath}
          fill="rgba(0, 0, 0, 0.25)"
          className="transform translate-y-0.5"
        />

        {/* Layer 3: Exposed White Raw Paper Pulp / Frayed Deckle Fiber Edge */}
        <path
          d={frayedFiberPath}
          fill="#FFFFFF"
          opacity="0.96"
        />

        {/* Layer 4: Main Solid Paper Body filling into the next section */}
        <path d={mainTornPath} fill={fillColor} />
      </svg>
    </motion.div>
  );
};

