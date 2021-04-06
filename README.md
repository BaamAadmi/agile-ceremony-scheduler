# agile-ceremony-scheduler

Who will run the Agile Ceremonies starting every Monday? Well, This program can automate that.

We used to spend lot of time to keep track of who will host Agile Sprint ceremonies, this small NodeJS program solved those issues. You just have to enter names of your teammates separated by Spaces and it will output the week starting dates along with Resource name. You can then paste the result in Microsoft Teams files section of your team chat or a Team leader can track it.
You can also use it within your friends or family for other stuff like: Who will do the dishes this week? Who will bring the groceries?

### Requirements:

This is mainly useful for Agile teams, whether you are a developer, product manager or a tester it does not matter. All you need is [NodeJS](https://nodejs.org/) installed!

#### How to run

```
node app.js
```

```
Please enter team members names separated by space:
```

It provides tabular output for readability.

```
Results generated for upcoming 39 weeks this year
┌─────────┬──────────────┬──────────────┐
│ (index) │     date     │    person    │
├─────────┼──────────────┼──────────────┤
│    0    │  '5-4-2021'  │    'Leno'    │
│    1    │ '12-4-2021'  │  'Tierney'   │
│    2    │ '19-4-2021'  │  'Gabriel'   │
│    3    │ '26-4-2021'  │  'Holding'   │
│    4    │  '3-5-2021'  │  'Bellerin'  │
│    5    │ '10-5-2021'  │   'Xhaka'    │
│    6    │ '17-5-2021'  │   'Partey'   │
│    7    │ '24-5-2021'  │  'Ødegaard'  │
│    8    │ '31-5-2021'  │ 'Aubameyang' │
│    9    │  '7-6-2021'  │ 'Lacazette'  │
│   10    │ '14-6-2021'  │    'Saka'    │
│   11    │ '21-6-2021'  │    'Leno'    │
│   12    │ '28-6-2021'  │  'Tierney'   │
│   13    │  '5-7-2021'  │  'Gabriel'   │
│   14    │ '12-7-2021'  │  'Holding'   │
│   15    │ '19-7-2021'  │  'Bellerin'  │
│   16    │ '26-7-2021'  │   'Xhaka'    │
│   17    │  '2-8-2021'  │   'Partey'   │
│   18    │  '9-8-2021'  │  'Ødegaard'  │
│   19    │ '16-8-2021'  │ 'Aubameyang' │
│   20    │ '23-8-2021'  │ 'Lacazette'  │
│   21    │ '30-8-2021'  │    'Saka'    │
│   22    │  '6-9-2021'  │    'Leno'    │
│   23    │ '13-9-2021'  │  'Tierney'   │
│   24    │ '20-9-2021'  │  'Gabriel'   │
│   25    │ '27-9-2021'  │  'Holding'   │
│   26    │ '4-10-2021'  │  'Bellerin'  │
│   27    │ '11-10-2021' │   'Xhaka'    │
│   28    │ '18-10-2021' │   'Partey'   │
│   29    │ '25-10-2021' │  'Ødegaard'  │
│   30    │ '1-11-2021'  │ 'Aubameyang' │
│   31    │ '8-11-2021'  │ 'Lacazette'  │
│   32    │ '15-11-2021' │    'Saka'    │
│   33    │ '22-11-2021' │    'Leno'    │
│   34    │ '29-11-2021' │  'Tierney'   │
│   35    │ '6-12-2021'  │  'Gabriel'   │
│   36    │ '13-12-2021' │  'Holding'   │
│   37    │ '20-12-2021' │  'Bellerin'  │
│   38    │ '27-12-2021' │   'Xhaka'    │
└─────────┴──────────────┴──────────────┘

```

#### Upcoming Features:

1. Allow to enter start date.
2. Export to Excel.
3. Microsoft Team integration
4. Account for 2 week Sprint where one person to Host Standups, one person to do Sprint Review.
5. Track Bank holidays falling on Monday.

