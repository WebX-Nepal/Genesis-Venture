"use client";

import { createContext, useContext, useMemo, useState } from "react";

type HeroVideoLoadContextValue = {
  isHeroVideoReady: boolean;
  setHeroVideoReady: (ready: boolean) => void;
};

const HeroVideoLoadContext = createContext<HeroVideoLoadContextValue>({
  isHeroVideoReady: true,
  setHeroVideoReady: () => {},
});

export function HeroVideoLoadProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHeroVideoReady, setHeroVideoReady] = useState(true);

  const value = useMemo(
    () => ({ isHeroVideoReady, setHeroVideoReady }),
    [isHeroVideoReady],
  );

  return (
    <HeroVideoLoadContext.Provider value={value}>
      {children}
    </HeroVideoLoadContext.Provider>
  );
}

export const useHeroVideoLoad = () => useContext(HeroVideoLoadContext);
