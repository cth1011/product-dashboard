# Main Dashboard (Host Application)

This is the host application for the Microfrontend Product Dashboard. It is responsible for loading the `item-module` microfrontend and displaying aggregated metrics based on the data provided by the remote module.

## Features

- Loads the `item-module` dynamically using Module Federation.
- Displays live metric cards: Total items, Active items, and Inactive items.
- Metrics update automatically as changes occur in the `item-module`.
- Implements skeleton loading states for a better user experience.
- Includes error boundaries to gracefully handle cases where the `item-module` fails to load.

## Setup and Run Instructions

This application is part of a larger monorepo. To set up and run it, please refer to the [root README.md](../../README.md) for comprehensive instructions.

### Development

To run only the `main-dashboard` in development mode (requires `item-module` to be running separately):

```bash
pnpm run dev --filter=main-dashboard
```

This application typically runs on `http://localhost:5000`.

### Build

To build the `main-dashboard` for production:

```bash
pnpm run build --filter=main-dashboard
```

## Technical Decisions

- **Microfrontend Integration:** Configured as the host application using `@module-federation/vite` to consume the `item-module`.
- **State Consumption:** It directly imports and uses the `useProductStore` from the `item-module` to access and react to the product data, ensuring real-time metric updates.
- **Loading States:** Utilizes React `Suspense` with custom skeleton components (`MetricCardsSkeleton`, `ItemModuleSkeleton`) to provide granular loading feedback.
- **Error Handling:** Employs `react-error-boundary` with a `ModuleErrorFallback` component to catch and display errors if the `item-module` fails to load, preventing a full application crash.
