"use client"

import React, { createContext, useContext, useState } from "react"

interface PreLoaderContextType {
  hasLoaded: boolean
  setHasLoaded: (val: boolean) => void
}

const PreLoaderContext = createContext<PreLoaderContextType>({
  hasLoaded: false,
  setHasLoaded: () => {},
})

export function PreLoaderProvider({ children }: { children: React.ReactNode }) {
  const [hasLoaded, setHasLoaded] = useState(false)

  return (
    <PreLoaderContext.Provider value={{ hasLoaded, setHasLoaded }}>
      {children}
    </PreLoaderContext.Provider>
  )
}

export const usePreLoader = () => useContext(PreLoaderContext)