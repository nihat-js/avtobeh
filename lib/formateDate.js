function formatDate(createdAt) {
  const now = new Date();
  const date = new Date(createdAt);

  // Helper function to get the month name in Azerbaijani
  const getMonthName = (monthIndex) => {
    const months = [
      'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 
      'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
    ];
    return months[monthIndex];
  };

  // Check if the date is today
  const isToday = now.toDateString() === date.toDateString();
  // Check if the date is yesterday
  const isYesterday = (now.getDate() - date.getDate()) === 1 && now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear();
  // Check if the date is from the same year
  const isSameYear = now.getFullYear() === date.getFullYear();
  // Check if it's from the previous year or earlier
  const isEarlierThanThisYear = now.getFullYear() > date.getFullYear();

  if (isToday) {
    return `Bugün ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  }

  if (isYesterday) {
    return `Dünən ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  }

  // For other days in the same year
  if (isSameYear) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = getMonthName(date.getMonth());
    return `${day} ${month}`;
  }

  // For dates earlier than this year
  if (isEarlierThanThisYear) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = getMonthName(date.getMonth());
    const year = date.getFullYear();
    return `${year} ${day} ${month}`;
  }
}

export default formatDate;

// const createdAt1 = "2024-12-13T10:00:00"; // Example: today
// const createdAt2 = "2024-12-12T23:09:00"; // Example: yesterday
// const createdAt3 = "2024-11-22T12:30:00"; // Example: other day this year
// const createdAt4 = "2023-10-13T14:45:00"; // Example: last year

// console.log(formatCreatedAt(createdAt1)); // Bugün 10:00
// console.log(formatCreatedAt(createdAt2)); // Dünən 23:09
// console.log(formatCreatedAt(createdAt3)); // 22 Noyabr
// console.log(formatCreatedAt(createdAt4)); // 2023 13 Oktyabr
