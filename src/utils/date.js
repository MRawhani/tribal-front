import dayjs from 'dayjs'

export const formatDate = (date) => dayjs(date).format('DD/MM/YYYY')
