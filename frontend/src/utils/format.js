export const formatHours = (value, fallback = '0') => {
  if (value === null || value === undefined || value === '') return fallback

  const num = Number(value)
  if (!Number.isFinite(num)) return String(value)

  // Whole number hours can be shown without decimals
  if (Number.isInteger(num)) return num.toString()

  // For the 2 decimal places and remove trailing zeros
  return parseFloat(num.toFixed(2)).toString()
}