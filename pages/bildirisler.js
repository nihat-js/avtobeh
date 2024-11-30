// pages/notifications.tsx
import Layout from '@/components/Layout';
import { useState, useEffect } from 'react';

// interface Notification {
//   id: number;
//   message: string;
//   type: 'info' | 'success' | 'warning' | 'error';
//   timestamp: string;
// }

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // This would normally fetch notifications from an API.
    // For now, let's use some hardcoded data.
    setNotifications([
      {
        id: 1,
        message: 'Your listing for the 2020 Toyota Camry has been viewed by 10 users!',
        type: 'info',
        timestamp: '2024-11-30 10:15',
      },
      {
        id: 2,
        message: 'A buyer has messaged you about your 2018 Honda Accord.',
        type: 'success',
        timestamp: '2024-11-29 17:45',
      },
      {
        id: 3,
        message: 'There is a new listing matching your search preferences: 2019 Ford Mustang.',
        type: 'info',
        timestamp: '2024-11-29 12:30',
      },
      {
        id: 4,
        message: 'The price of the car you are interested in has been reduced to $23,000.',
        type: 'warning',
        timestamp: '2024-11-28 09:00',
      },
      {
        id: 5,
        message: 'Your 2020 Toyota Camry listing is about to expire in 2 days.',
        type: 'error',
        timestamp: '2024-11-27 14:00',
      },
    ]);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Notifications
        </h1>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border-l-4 ${notification.type === 'info'
                  ? 'bg-blue-50 border-blue-500'
                  : notification.type === 'success'
                    ? 'bg-green-50 border-green-500'
                    : notification.type === 'warning'
                      ? 'bg-yellow-50 border-yellow-500'
                      : 'bg-red-50 border-red-500'
                }`}
            >
              <p className="text-sm text-gray-600">{notification.timestamp}</p>
              <p className="mt-2 text-lg font-medium text-gray-800">{notification.message}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
