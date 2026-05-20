import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function societyCompletedYears(establishedYear: number = 1958): number {
  const currentYear = new Date().getFullYear();
  return currentYear - establishedYear;
}