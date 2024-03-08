// Import router from app1.js
import { router } from './app1.js';

// Define maximum range for isolines
const isolineMaxRange = {
   time: 32400, // 9 hours in seconds
   distance: 80000 // 80 kilometers in meters
}

// Function to request isoline shape
const requestIsolineShape = options => {
   // Define parameters for isoline request
   const params = {
      'mode': `fastest;${options.mode};traffic:enabled`,
      'start': `geo!${options.center.lat},${options.center.lng}`,
      'range': options.range,
      'rangetype': options.rangeType,
      'departure': `${options.date}T${options.time}:00`,
   };

   // Return a promise for isoline shape request
   return new Promise((resolve, reject) => {
      // Call router's calculateIsoline method
      router.calculateIsoline(
         params,
         // Resolve promise with isoline shape on success
         res => {
            const shape = res.response.isoline[0].component[0].shape.map(z => z.split(','));
            resolve(shape);
         },
         // Reject promise with error on failure
         err => reject(err)
      );
   });
}  

// Exporting functions and constants
export { requestIsolineShape, isolineMaxRange }
