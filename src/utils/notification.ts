// Function to send a notification request to the main process
interface NotificationOptions {
    title: string;
    body?: string;
  }
  
  // Function to trigger notification
  export default function showNotification(title: string, body: string) {
    const options: NotificationOptions = {
      title: title,
      body: body,
    };
  
    const notification = new Notification(options.title, options);
  
    notification.onshow = () => {
      console.log('Notification shown: ', options.title, options.body);
    };
  }