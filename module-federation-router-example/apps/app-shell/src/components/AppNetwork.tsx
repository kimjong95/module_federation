import { inject } from "app_network/injector";
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { appNetworkBasename } from "../constants/prefix";

export default function AppJobs() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    const appJobsNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${appNetworkBasename}${pathname}`;
      if (newPathname === location.pathname) return;

      navigate(newPathname);
    };

    window.addEventListener(
      "[app-network] navigated",
      appJobsNavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        "[app-network] navigated",
        appJobsNavigationEventHandler
      );
    };
  }, [location]);

  useEffect(() => {
    if (location.pathname.startsWith(appNetworkBasename)) {
      window.dispatchEvent(
        new CustomEvent("[app-shell] navigated", {
          detail: location.pathname.replace(appNetworkBasename, ""),
        })
      );
    }
  }, [location]);

  useEffect(() => {
    if (!isFirstRunRef) return;
    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appNetworkBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => {
    return () => {
      unmountRef.current();
    };
  }, []);

  return <div ref={wrapperRef} id="app-network"></div>;
}
