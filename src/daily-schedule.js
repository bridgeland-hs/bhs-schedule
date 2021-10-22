const data = require('../data/schedule.json');

module.exports = () => {
  const todaySchedule = data[new Date().getDate() === 3 ? 'advisory' : 'regular'];

  const schedule = {};

  Object.entries(todaySchedule).forEach(([key, value]) => {
    const parts = [];
    value.forEach((item) => {
      const { name, start, end } = item;

      const [startHour, startMinute] = start.split(':');
      const [endHour, endMinute] = end.split(':');

      const startDate = new Date();
      startDate.setHours(startHour, startMinute, 0, 0);

      const endDate = new Date();
      endDate.setHours(endHour, endMinute, 0, 0);

      parts.push({
        name,
        start: startDate.toISOString(),
        end: endDate.toISOString(),
      });
    });
    schedule[key] = parts;
  });

  return schedule;
};
