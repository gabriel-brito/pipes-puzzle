export const saveMaxLevel = (maxLevel: number) => {
  localStorage.setItem('maxLevel', maxLevel.toString())
}

export const getMaxLevel = () => {
  const maxLevel = localStorage.getItem('maxLevel')

  if (maxLevel) return Number(maxLevel)

  return 1
}
