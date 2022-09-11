export const transformIntoMap = (data: string): string[][] => {
  const stringWithoutColon = data.slice(data.indexOf(':') + 1).trim()
  const transformIntoArray = stringWithoutColon
    .split('\n')
    .map((row) => row.split(''))

  return transformIntoArray
}

export const verifyMessage = (data: string) => {
  const stringWithoutColon = data.slice(data.indexOf(':') + 1).trim()
  let nextLevelAllowed = false

  if (stringWithoutColon.includes('Password')) {
    nextLevelAllowed = true
  }

  return {
    message: stringWithoutColon,
    nextLevelAllowed
  }
}
