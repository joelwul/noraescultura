import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// TanStack Start requiere que exportes 'router' directamente.
// Usamos una función en 'context' para crear un QueryClient nuevo en cada request 
// (esto es crucial para SSR y evita que se mezclen datos entre usuarios).
export const router = createRouter({
  routeTree,
  context: () => ({ queryClient: new QueryClient() }),
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}