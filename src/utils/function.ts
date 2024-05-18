/**
 * Slices a text to a specified length and appends ellipsis if it exceeds the length.
 *
 * @param {string} txt - The input text to be sliced.
 * @param {number} [num=50] - The maximum length of the sliced text. Default is 50.
 * @returns {string} The sliced text with ellipsis if applicable.
 */
export function textSlicer(txt: string, num: number = 100) {
  if (txt.length > num) return `${txt.slice(0, num)}...`;
  else return txt;
}
