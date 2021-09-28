/**
 * Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/underscore/index.d.ts.
 *
 * addendum: reference to `.cancel`.
 */

/**
 * Creates and returns a new debounced version of the passed function that will postpone its execution
 * until after wait milliseconds have elapsed since the last time it was invoked. Useful for implementing
 * behavior that should only happen after the input has stopped arriving. For example: rendering a preview
 * of a Markdown comment, recalculating a layout after the window has stopped being resized, and so on.
 *
 * Pass true for the immediate parameter to cause debounce to trigger the function on the leading instead
 * of the trailing edge of the wait interval. Useful in circumstances like preventing accidental double
 *-clicks on a "submit" button from firing a second time.
 * @param fn Function to debounce `waitMS` ms.
 * @param {number} wait The number of milliseconds to wait before `fn` can be invoked again.
 * @param {boolean} [immediate=false] True if `fn` should be invoked on the leading edge of `waitMS` instead of the trailing edge.
 * @return {Function} Debounced version of `fn` that waits `wait` ms when invoked.
 * Scheduled execution can be canceled using `debouncedFunc.cancel()`.
 **/
export default function debounce<T extends Function>(
  fn: T,
  wait: number,
  immediate?: boolean
): T & { cancel(): void };
