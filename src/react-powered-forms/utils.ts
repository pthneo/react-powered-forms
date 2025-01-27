/**
 * @file Utility functions
 */


export function getToday() {
  const today = new Date();
  const yyyyMMdd = today.toISOString().split('T')[0];
  return yyyyMMdd;
}