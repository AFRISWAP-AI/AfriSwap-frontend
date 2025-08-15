// // src/hooks/useRouter.js
// import { useState, useEffect } from 'react';

// export const useRouter = () => {
//   const [currentRoute, setCurrentRoute] = useState(() => {
//     // Check URL for initial route
//     const path = window.location.pathname;
//     const params = new URLSearchParams(window.location.search);
//     return {
//       path: path === '/' ? 'home' : path.substring(1),
//       params: Object.fromEntries(params)
//     };
//   });

//   const navigate = (path, params = {}) => {
//     const route = path === '/' ? 'home' : path;
//     setCurrentRoute({ path: route, params });
    
//     // Update URL
//     const searchParams = new URLSearchParams(params);
//     const url = path === '/' ? '/' : `/${route}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
//     window.history.pushState(null, '', url);
//   };

//   useEffect(() => {
//     const handlePopState = () => {
//       const path = window.location.pathname;
//       const params = new URLSearchParams(window.location.search);
//       setCurrentRoute({
//         path: path === '/' ? 'home' : path.substring(1),
//         params: Object.fromEntries(params)
//       });
//     };

//     window.addEventListener('popstate', handlePopState);
//     return () => window.removeEventListener('popstate', handlePopState);
//   }, []);

//   return { currentRoute, navigate };
// };