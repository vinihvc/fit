/**
 * Format a value to a number with one decimal place
 *
 * @example
 * ```tsx
 * formatValue(10.51231231) // '10.5'
 * formatValue('TF') // '0'
 * ```
 */
export const formatValue = (value: number | string) => {
  const formatted = Number(value)

  if (isNaN(formatted)) {
    return 0
  }

  return formatted.toFixed(1)
}

export const formatTime = (value: number) => {
  return `${value} min`
}
