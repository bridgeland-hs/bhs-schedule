# Express API Starter

Includes API Server utilities:

## Routes

- `GET /bhs/schedules` - The list of all schedule names
- `GET /bhs/schedule/<name>` - The schedule for the given name (or 404, if not found) - Names can be found with `GET /bhs/schedules`
- `GET /bhs/schedule/<name>/today` - The schedule for the given name with times set for the day
- `GET /bhs/schedule/today` - The schedule for today (start/end times in ISO 8601 standard for the current day at the correct time)
- `GET /bhs/schedule/all` - All of the possible schedules and their times

## Setup

```
npm install
```

### Dev

```
npm run dev
```
