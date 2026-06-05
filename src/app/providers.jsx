"use client";
import { ReadingProvider } from '../context/ReadingContext';

export function Providers({ children }) {
  return <ReadingProvider>{children}</ReadingProvider>;
}
