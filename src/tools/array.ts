// This file contains utility functions for working with arrays.

/**
 * Returns a copy of the given array with the item at the given index removed
 */
export function removeAt<T>(array: T[], removeIndex: number) {
  return array.slice(0, removeIndex).concat(array.slice(removeIndex + 1));
}
