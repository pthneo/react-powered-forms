/**
 * @file Utility functions
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getToday() {
  const today = new Date();
  const yyyyMMdd = today.toISOString().split('T')[0];
  return yyyyMMdd;
}