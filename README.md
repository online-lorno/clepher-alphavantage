# Alphavantage app

## Vite + React + TypeScript + TailwindCSS

### Running application

#### Update files

- Change API Key in `src/lib/apis.ts` file by updating the `demo` string if needed, though it still works.
- Update the file `src/routes/home.page.tsx` if you want to load data from a mock data.

Use node version 18+

```bash
cd clepher-alphavantage
npm i
npm run dev
```

Then open [http://localhost:5173/](http://localhost:5173/).

### Used APIs

- GLOBAL_QUOTE - [https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo](https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo)
- TIME_SERIES_DAILY - [https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo](https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo)
