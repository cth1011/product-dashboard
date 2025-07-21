import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MetricCards } from "./components/MetricCards";
import { ItemModuleSkeleton } from "./components/ItemModuleSkeleton";
import { ModuleErrorFallback } from "./components/ModuleErrorFallback";

const ItemModule = React.lazy(() => import("item_module/ItemModule"));

export default function App() {
  return (
    <main className="bg-background container mx-auto flex min-h-screen flex-col items-center pt-6 text-base">
      <MetricCards />
      <ErrorBoundary
        FallbackComponent={ModuleErrorFallback}
        onReset={() => window.location.reload()}
      >
        <Suspense fallback={<ItemModuleSkeleton />}>
          <ItemModule />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
