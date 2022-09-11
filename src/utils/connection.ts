export const transformIntoMap = (data: string): string[][] => {
  const dataWithoutColon = data.slice(data.indexOf(':') + 1).trim()
  const transformIntoArray = dataWithoutColon
    .split('\n')
    .map((row) => row.split(''))

  return transformIntoArray
}
