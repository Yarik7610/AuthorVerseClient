export interface IParsedDate {
  year: string
  month: string
  day: string
  monthFull: string
  dateParsed: Date
}
export const parseDate = (date: string) => {
  let year = date.slice(0, 4)
  let month = date.slice(5, 7)
  let day = date.slice(8, 10)
  let dateParsed = new Date(Number(year), Number(month) - 1, Number(day))
  const monthFull = dateParsed.toLocaleString('default', { month: 'long' })
  return { year, month, day, monthFull, dateParsed } as IParsedDate
}
