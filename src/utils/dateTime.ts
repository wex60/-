import { formatDistanceToNow, format, isAfter, isBefore, addHours } from 'date-fns';
import { ar } from 'date-fns/locale';

export const DATE_FORMAT = 'dd/MM/yyyy HH:mm';

export function formatDateTime(date: string | Date): string {
  return format(new Date(date), DATE_FORMAT, { locale: ar });
}

export function getRemainingTime(deadline: string): string {
  const now = new Date();
  const deadlineDate = new Date(deadline);
  
  if (isAfter(now, deadlineDate)) {
    const overdueDuration = formatDistanceToNow(deadlineDate, { locale: ar });
    return `متأخر بـ ${overdueDuration}`;
  }
  
  return `متبقي ${formatDistanceToNow(deadlineDate, { locale: ar })}`;
}

export function isOverdue(deadline: string): boolean {
  return isAfter(new Date(), new Date(deadline));
}

export function isApproachingDeadline(deadline: string): boolean {
  const now = new Date();
  const deadlineDate = new Date(deadline);
  const hours48 = addHours(now, 48);
  
  return isBefore(now, deadlineDate) && isAfter(hours48, deadlineDate);
}