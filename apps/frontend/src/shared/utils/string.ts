/**
 * Function to add ellipsis if the string contains more than a certain number of characters.
 * @param value String
 * @param maxLength Maximum length
 * @returns Value with ellipsis if it's longer than `maxLength`
 */
function getTruncatedStringWithEllipsis(value: string, maxLength = 100) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength)}...`;
}

export { getTruncatedStringWithEllipsis };
