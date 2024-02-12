import { inject } from "app_jobs/injector";
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { appJobsBasename } from "../constants/prefix";

export default function AppJobs() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    const appJobsNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${appJobsBasename}${pathname}`;
      if (newPathname === location.pathname) return;

      navigate(newPathname);
    };

    window.addEventListener(
      "[app-jobs] navigated",
      appJobsNavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        "[app-jobs] navigated",
        appJobsNavigationEventHandler
      );
    };
  }, [location]);

  useEffect(() => {
    if (location.pathname.startsWith(appJobsBasename)) {
      window.dispatchEvent(
        new CustomEvent("[app-shell] navigated", {
          detail: location.pathname.replace(appJobsBasename, ""),
        })
      );
    }
  }, [location]);

  useEffect(() => {
    if (!isFirstRunRef) return;
    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appJobsBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => {
    return () => {
      unmountRef.current();
    };
  }, []);

  return <div ref={wrapperRef} id="app-jobs"></div>;
}
