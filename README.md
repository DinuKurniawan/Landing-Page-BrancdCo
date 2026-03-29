# BrandCo landing page

## Development

Run both the Vite frontend and the Express API together:

```bash
npm run dev
```

If you only want the frontend, use:

```bash
npm run dev:web
```

If you only want the API, use:

```bash
npm run dev:server
```

The frontend proxies `/api/*` requests to `http://localhost:3001`, so the contact form needs the API server running during local development.
