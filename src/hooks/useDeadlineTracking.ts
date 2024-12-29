import { useEffect, useCallback } from 'react';
import { isOverdue, isApproachingDeadline } from '../utils/dateTime';
import { NotificationManager } from '../utils/notifications';
import type { Task } from '../types';

export function useDeadlineTracking(tasks: Task[]) {
  const checkDeadlines = useCallback(() => {
    const notificationManager = NotificationManager.getInstance();
    
    tasks.forEach(task => {
      if (task.status === 'completed') return;

      if (isOverdue(task.dueDate)) {
        notificationManager.sendNotification(
          'overdue',
          'مهمة متأخرة',
          `المهمة "${task.title}" تجاوزت موعد التسليم`
        );
      } else if (isApproachingDeadline(task.dueDate)) {
        notificationManager.sendNotification(
          'approaching',
          'موعد تسليم قريب',
          `المهمة "${task.title}" يجب تسليمها خلال 48 ساعة`
        );
      }
    });
  }, [tasks]);

  // Check deadlines every hour
  useEffect(() => {
    checkDeadlines();
    const interval = setInterval(checkDeadlines, 3600000);
    return () => clearInterval(interval);
  }, [checkDeadlines]);

  // Send daily summary at 9 AM
  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      if (now.getHours() === 9 && now.getMinutes() === 0) {
        const notificationManager = NotificationManager.getInstance();
        const overdueTasks = tasks.filter(task => 
          task.status !== 'completed' && isOverdue(task.dueDate)
        );
        const approachingTasks = tasks.filter(task =>
          task.status !== 'completed' && isApproachingDeadline(task.dueDate)
        );

        notificationManager.sendNotification(
          'daily-summary',
          'ملخص المهام اليومي',
          `لديك ${overdueTasks.length} مهام متأخرة و ${approachingTasks.length} مهام تقترب من موعد التسليم`
        );
      }
    };

    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, [tasks]);
}