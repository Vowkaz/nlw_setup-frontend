import dayjs from 'dayjs'

function generateRangeDatesFromYearStart() {
  const startDate = dayjs().startOf('year')
  const today = new Date()

  let dateRange = []
  let compareDate = startDate

  while (compareDate.isBefore(today)) {
    dateRange.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dateRange
}

export default generateRangeDatesFromYearStart