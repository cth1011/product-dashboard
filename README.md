# Microfrontend Product Dashboard

This project is a monorepo containing a microfrontend-based product dashboard, built using React and Vite. It demonstrates a host application (`main-dashboard`) loading a remote microfrontend (`item-module`) dynamically.

## Project Structure

This monorepo is managed with pnpm and TurboRepo, providing an efficient way to manage dependencies and build processes across multiple applications and packages.

- `apps/main-dashboard`: The host application that loads the `item-module` and displays aggregated metrics.
- `apps/item-module`: The remote microfrontend that provides product creation and listing functionalities.
- `packages/ui`: A shared UI component library used across the applications.
- `packages/eslint-config`: Shared ESLint configuration.
- `packages/tailwind-config`: Shared Tailwind CSS configuration.
- `packages/typescript-config`: Shared TypeScript configurations.

## Getting Started

To set up and run the project locally, follow these steps:

### 1. Install pnpm

If you don't have pnpm installed, you can install it globally:

```bash
npm install -g pnpm
```

### 2. Install Dependencies

Navigate to the root of the monorepo and install all dependencies:

```bash
pnpm install
```

### 3. Run the Applications

To run both the `main-dashboard` (host) and `item-module` (remote) applications concurrently in development mode:

```bash
pnpm run dev
```

- The `main-dashboard` will typically run on `http://localhost:5000`.
- The `item-module` will typically run on `http://localhost:5001`.

Ensure both servers are running for the `main-dashboard` to correctly load the `item-module`.

### 4. Build the Applications

To build both applications for production:

```bash
pnpm run build
```

## Technical Decisions

- **Monorepo Management:** pnpm and TurboRepo are used for efficient dependency management, caching, and parallel task execution.
- **Code Formatting:** Prettier is configured to enforce consistent code style across the entire monorepo.
- **Microfrontend Integration:** Module Federation (via `@module-federation/vite`) is used for dynamic loading and sharing of modules between the host and remote applications.
- **State Sharing:** Zustand is utilized for state management within the `item-module`, and its store is exposed and consumed by the `main-dashboard` to provide real-time metric updates.
- **UI Components:** `shadcn/ui` components are integrated through a shared `@repo/ui` package, ensuring consistent styling and functionality.
- **Styling:** Tailwind CSS v4 is used for utility-first styling across the entire project.
- **Error Handling:** React `Suspense` and `react-error-boundary` are implemented to provide graceful loading and error handling for the remote microfrontend, ensuring a robust user experience even if the remote module fails to load.
