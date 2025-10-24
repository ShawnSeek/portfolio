"use client";
import { createContext, useRef } from "react";

// 创建 Context
export const GlobalContext = createContext<any>(null);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return <GlobalContext.Provider value={{ scrollContainerRef }}>{children}</GlobalContext.Provider>;
};
