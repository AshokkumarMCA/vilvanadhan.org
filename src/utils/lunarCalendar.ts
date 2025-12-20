/**
 * Lunar Calendar Utilities for calculating Hindu festival dates
 * Pradosha: 13th day of lunar fortnight (Trayodashi)
 * Pournami: Full moon day (15th day of lunar fortnight)
 *
 * This uses astronomical calculations to work for ANY year indefinitely
 */

/**
 * Calculate moon phase for a given date
 * Returns a value between 0 (new moon) and 1 (full moon)
 * Based on astronomical formula
 */
const getMoonPhase = (date: Date): number => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Julian date calculation
  let jd =
    367 * year -
    Math.floor((7 * (year + Math.floor((month + 9) / 12))) / 4) +
    Math.floor((275 * month) / 9) +
    day +
    1721013.5;

  // Days since known new moon (Jan 6, 2000)
  const daysSinceNew = jd - 2451549.5;

  // Lunar month is 29.53058867 days
  const lunarMonth = 29.53058867;

  // Calculate phase (0 to 1, where 0.5 is full moon)
  const phase = (daysSinceNew / lunarMonth) % 1;

  return phase;
};

/**
 * Check if a date is close to full moon (Pournami)
 * Returns true if within 0.5 days of full moon
 */
const isFullMoon = (date: Date): boolean => {
  const phase = getMoonPhase(date);
  // Full moon is at phase 0.5, with some tolerance
  return Math.abs(phase - 0.5) < 0.017 || Math.abs(phase - 0.5) > 0.983;
};

/**
 * Find the next full moon date starting from a given date
 */
const findNextFullMoon = (startDate: Date): Date => {
  let currentDate = new Date(startDate);
  currentDate.setHours(0, 0, 0, 0);

  // Check next 45 days (covers at least one full lunar cycle)
  for (let i = 0; i < 45; i++) {
    if (isFullMoon(currentDate)) {
      return currentDate;
    }
    currentDate = new Date(currentDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Fallback: add lunar cycle to start date
  const fallback = new Date(startDate);
  fallback.setDate(fallback.getDate() + 29);
  return fallback;
};

/**
 * Calculate the next Pournami (Full Moon) date
 * Works dynamically for ANY year
 */
export const getNextPournami = (): Date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Find next full moon
  const nextFullMoon = findNextFullMoon(today);

  // If it's today, find the one after
  if (nextFullMoon.getTime() === today.getTime()) {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return findNextFullMoon(tomorrow);
  }

  return nextFullMoon;
};

/**
 * Calculate the next Pradosha date (2 days before Pournami)
 * Trayodashi occurs 2 days before full moon
 * Works dynamically for ANY year
 */
export const getNextPradosha = (): Date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Get next Pournami
  const nextPournami = getNextPournami();

  // Pradosha is 2 days before Pournami
  const pradosha = new Date(nextPournami);
  pradosha.setDate(nextPournami.getDate() - 2);

  // If Pradosha is today or in the past, get the next one
  if (pradosha <= today) {
    // Find Pournami after the next one
    const dayAfterNextPournami = new Date(nextPournami);
    dayAfterNextPournami.setDate(nextPournami.getDate() + 1);
    const pournamiAfterThat = findNextFullMoon(dayAfterNextPournami);

    // Calculate Pradosha for that Pournami
    const nextPradosha = new Date(pournamiAfterThat);
    nextPradosha.setDate(pournamiAfterThat.getDate() - 2);
    return nextPradosha;
  }

  return pradosha;
};

/**
 * Format date as DD/MM/YYYY
 */
export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * Get upcoming temple events with dynamic dates
 */
export const getUpcomingEvents = () => {
  const nextPradosha = getNextPradosha();
  const nextPournami = getNextPournami();

  return [
    {
      name: 'Pradosha Pooja',
      nameTamil: 'பிரதோஷ பூஜை',
      date: formatDate(nextPradosha),
      rawDate: nextPradosha,
    },
    {
      name: 'Pournami Pooja',
      nameTamil: 'பௌர்ணமி பூஜை',
      date: formatDate(nextPournami),
      rawDate: nextPournami,
    },
  ].sort((a, b) => a.rawDate.getTime() - b.rawDate.getTime());
};

/**
 * Get relative time string with natural language
 * Examples: "Today", "Tomorrow", "in 2 days", "in 1 week", "in 2 weeks"
 * Rule: Days only up to 6, then switch to weeks
 */
export const getRelativeTime = (date: Date): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);

  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  // Same day
  if (diffDays === 0) return 'Today';

  // Tomorrow
  if (diffDays === 1) return 'Tomorrow';

  // 2-6 days (show days)
  if (diffDays >= 2 && diffDays <= 6) {
    return `in ${diffDays} days`;
  }

  // 7+ days (show weeks)
  if (diffDays >= 7 && diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    const remainingDays = diffDays % 7;

    // Exact weeks (7, 14, 21, 28)
    if (remainingDays === 0) {
      if (weeks === 1) return 'in 1 week';
      return `in ${weeks} weeks`;
    }

    // Weeks with remaining days
    if (weeks === 1) {
      // 1 week + X days
      return `in 1 week ${remainingDays} ${remainingDays === 1 ? 'day' : 'days'}`;
    }

    // 2+ weeks + X days
    return `in ${weeks} weeks ${remainingDays} ${remainingDays === 1 ? 'day' : 'days'}`;
  }

  // 30+ days (show months)
  if (diffDays >= 30) {
    const months = Math.floor(diffDays / 30);
    if (months === 1) return 'in 1 month';
    return `in ${months} months`;
  }

  // Fallback (shouldn't reach here)
  return `in ${diffDays} days`;
};

/**
 * Format date for blog posts - shows how long ago
 * Examples: "2 days ago", "1 week ago", "2 months ago"
 */
export const getRelativeTimeAgo = (date: Date): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - targetDate.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  // Same day
  if (diffDays === 0) return 'Today';

  // Yesterday
  if (diffDays === 1) return 'Yesterday';

  // 2-6 days
  if (diffDays >= 2 && diffDays <= 6) {
    return `${diffDays} days ago`;
  }

  // 7-29 days (show weeks)
  if (diffDays >= 7 && diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    if (weeks === 1) return '1 week ago';
    return `${weeks} weeks ago`;
  }

  // 30+ days (show months)
  if (diffDays >= 30 && diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    if (months === 1) return '1 month ago';
    return `${months} months ago`;
  }

  // 365+ days (show years)
  if (diffDays >= 365) {
    const years = Math.floor(diffDays / 365);
    if (years === 1) return '1 year ago';
    return `${years} years ago`;
  }

  return `${diffDays} days ago`;
};

/**
 * Format date in readable format with month name
 * Example: "December 20, 2025"
 */
export const formatLongDate = (date: Date): string => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};
