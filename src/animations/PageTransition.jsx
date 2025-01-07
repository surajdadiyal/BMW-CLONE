// import { motion } from 'framer-motion';

// function PageTransition({ children }) {
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             {children}
//         </motion.div>
//     );
// }

// export default PageTransition;


//BOUNCE

// import { motion } from 'framer-motion';

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100 }}            // Start below the screen with 0 opacity
//       animate={{ opacity: 1, y: 0 }}              // Animate to full opacity and center
//       exit={{ opacity: 0, y: -100 }}              // Exit above the screen with 0 opacity
//       transition={{ type: 'spring', stiffness: 300, damping: 30 }}  // Spring-like transition
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;

//FLIP

// import { motion } from 'framer-motion';

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ rotateY: 90 }}              // Start with the page rotated (flipped)
//       animate={{ rotateY: 0 }}               // Animate to normal position
//       exit={{ rotateY: -90 }}                // Exit with a flipped effect
//       transition={{ duration: 0.6 }}         // Duration of the transition
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;

//ROTATE

// import { motion } from 'framer-motion';

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, rotate: 180 }}      // Start with a rotated (invisible) state
//       animate={{ opacity: 1, rotate: 0 }}        // Animate to full opacity and no rotation
//       exit={{ opacity: 0, rotate: -180 }}        // Exit with a rotation effect
//       transition={{ duration: 0.6 }}             // Duration of the transition
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;

//FADE

// import { motion } from 'framer-motion';

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: '100%', y: '100%' }} // Start from bottom-right corner, invisible
//       animate={{ opacity: 1, x: 0, y: 0 }}           // Animate to center with full opacity
//       exit={{ opacity: 0, x: '-100%', y: '-100%' }}   // Exit to top-left corner, invisible
//       transition={{ duration: 0.8 }}                  // Duration of the transition
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;


//SCALE ZOOM

// import { motion } from 'framer-motion';

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ scale: 0.8 }}          // Start smaller (zoomed out)
//       animate={{ scale: 1 }}            // Animate to full size
//       exit={{ scale: 0.8 }}             // Exit with a zoom-out effect
//       transition={{ duration: 0.5 }}    // Duration of the transition
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;


//POP UP

// import { motion } from 'framer-motion';

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ scale: 0 }}          // Start from 0 (invisible)
//       animate={{ scale: 1 }}          // Animate to normal size
//       exit={{ scale: 0 }}             // Exit back to 0
//       transition={{ duration: 0.5 }}  // Duration of the transition
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;

//PULSE BOUNCE

// import { motion } from 'framer-motion';

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}          // Start with a small size and low opacity
//       animate={{ opacity: 1, scale: 1 }}            // Animate to full size and opacity
//       exit={{ opacity: 0, scale: 0.8 }}             // Exit with small size and low opacity
//       transition={{ type: 'spring', stiffness: 300, damping: 20 }}  // Spring effect for bounce
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;

//CURTAINS

// import { motion } from 'framer-motion';

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ y: '-100%' }}         // Start from above (off-screen)
//       animate={{ y: 0 }}               // Slide to center
//       exit={{ y: '100%' }}             // Exit to below (off-screen)
//       transition={{ type: 'spring', stiffness: 300, damping: 30 }}  // Spring effect for smoothness
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;

//SLIDE BLUR

// import { motion } from 'framer-motion';

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ x: '-100%', filter: 'blur(10px)' }}  // Start offscreen with a blur effect
//       animate={{ x: 0, filter: 'blur(0)' }}           // Slide to center with no blur
//       exit={{ x: '100%', filter: 'blur(10px)' }}       // Exit offscreen with blur
//       transition={{ duration: 0.6 }}                    // Duration of the transition
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;

import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}  // Start completely invisible
      animate={{
        opacity: 1, 
        transition: {
          delay: 0.3,          // Delay before the opacity starts changing
          duration: 1,         // Duration of the fade-in
          ease: 'easeInOut'    // Ease-in-out for smoother transitions
        }
      }}
      exit={{
        opacity: 0,           // Fade out as it exits
        transition: {
          duration: 0.6,      // Duration for fade-out
          ease: 'easeInOut'   // Smooth fade-out
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;








