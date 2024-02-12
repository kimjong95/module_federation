import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router";

export type RouterType = "browser" | "memory";

type InjectProps = {
  rootElement: HTMLElement;
  basePath?: string;
  routerType: RouterType;
};

const inject = ({ rootElement, basePath, routerType }: InjectProps) => {
  const router = createRouter({
    type: routerType,
    basePath,
  });

  const root = createRoot(rootElement);
  root.render(<RouterProvider router={router} />);

  return () => queueMicrotask(() => root.unmount());
};

export { inject };
