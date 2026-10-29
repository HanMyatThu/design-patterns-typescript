/**
 * Factory Design pattern is a creational design pattern that provides an interface for creating objects in a superclass, 
 * but allows subclasses to alter the type of objects that will be created.
 */
interface CustomNotification {
  send(message: string): void;
}

class EmailNotification implements CustomNotification {
  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SmsNotification implements CustomNotification {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

abstract class NotificationFactory {
  abstract createNotification(): CustomNotification;

  notify(message: string): void {
    this.createNotification().send(message);
  }
}

class EmailNotificationFactory extends NotificationFactory {
  createNotification(): CustomNotification {
    return new EmailNotification();
  }
}

class SmsNotificationFactory extends NotificationFactory {
  createNotification(): CustomNotification {
    return new SmsNotification();
  }
}

const emailFactory = new EmailNotificationFactory();
const smsFactory = new SmsNotificationFactory();

emailFactory.notify("Your order has shipped.");
smsFactory.notify("Your verification code is 123456.");