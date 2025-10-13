import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)

export function formatDate(date: Date | string): string {
    return dayjs(date).format('LL')
}