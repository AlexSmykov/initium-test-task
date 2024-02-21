export function sortArrayBuProperty(
  array: any[],
  property: string,
  isAscending: boolean
): any[] {
  const sortedArray = array.sort((a, b) => {
    const aField = a[property]
    const bField = b[property]
    if (aField < bField) {
      return -1
    }
    if (aField > bField) {
      return 1
    }
    return 0
  })
  return isAscending ? sortedArray : sortedArray.reverse()
}
