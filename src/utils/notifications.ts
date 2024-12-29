type NotificationType = 'overdue' | 'approaching' | 'daily-summary';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
}

class NotificationManager {
  private static instance: NotificationManager;
  private notifications: Notification[] = [];

  private constructor() {
    this.requestPermission();
  }

  static getInstance(): NotificationManager {
    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager();
    }
    return NotificationManager.instance;
  }

  private async requestPermission(): Promise<void> {
    if ('Notification' in window) {
      await Notification.requestPermission();
    }
  }

  sendNotification(type: NotificationType, title: string, message: string): void {
    const notification: Notification = {
      id: Date.now().toString(),
      type,
      title,
      message,
      timestamp: new Date().toISOString()
    };

    this.notifications.push(notification);

    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, { body: message });
    }
  }

  getNotifications(): Notification[] {
    return this.notifications;
  }
}