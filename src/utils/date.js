import dayjs from 'dayjs'

export const formatDate = (date) => dayjs(date).format('DD MMM YYYY')
