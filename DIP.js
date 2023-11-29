/*
Consider an application with a notification system. 
Initially, it's designed to send email notifications, but in the future, it might need to support other types of notifications like SMS.
*/

// Violating DIP
class EmailService {
    sendEmail(message) {
        // Send email logic
    }
}

class NotificationService {
    constructor() {
        this.emailService = new EmailService();
    }

    sendNotification(message) {
        this.emailService.sendEmail(message);
    }
}

// Refactored to adhere to DIP
class NotificationService {
    constructor(notificationSender) {
        this.notificationSender = notificationSender;
    }

    sendNotification(message) {
        this.notificationSender.send(message);
    }
}

class EmailService {
    send(message) {
        // Send email logic
    }
}

class SMSService {
    send(message) {
        // Send SMS logic
    }
}


/*
In the refactored version, NotificationService depends on an abstraction (notificationSender) rather than a concrete class (EmailService). 
This design adheres to DIP, making it easy to introduce new notification methods like SMS without changing the NotificationService.
*/