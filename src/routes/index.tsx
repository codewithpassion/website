
import { createElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BaseLayout, MainLayout, RootError } from '../components';

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */
export const router = createBrowserRouter([
  {
    path: '',
    element: <BaseLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, lazy: () => import('./start') },
      // { path: 'start', lazy: () => import('./start') },

      // { path: 'login', lazy: () => import('./login') },
      // { path: 'privacy', lazy: () => import('./privacy') },
      // { path: 'terms', lazy: () => import('./terms') },
    ],
  },
  {
    path: '',
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      // { index: true, element: <Navigate to="/start" replace /> },
      { path: 'coding', lazy: () => import('./coding') },
      // { path: 'tasks', lazy: () => import('./tasks') },
      // { path: 'messages', lazy: () => import('./messages') },
    ],
  },
]);

export function Router(): JSX.Element {
  return createElement(RouterProvider, { router });
}

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
