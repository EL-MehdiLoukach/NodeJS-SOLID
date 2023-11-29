/*
Consider a simple application that handles user information and sends notifications. 
In a design that violates SRP, you might see a class that manages user data and handles email notifications. 
Let's refactor it to adhere to SRP.
*/

// Violating SRP
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }

    sendEmail(message) {
        // logic to send email
        console.log(`Sending email to ${this.email}: ${message}`);
    }
}

// Refactored to adhere to SRP
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

class EmailService {
    static sendEmail(user, message) {
        // logic to send email
        console.log(`Sending email to ${user.email}: ${message}`);
    }
}

