import { Card, CardHeader, CardTitle, CardDescription } from '@repo/ui/card';
import { Button } from '@repo/ui/button';

interface ModuleErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ModuleErrorFallback({ error, resetErrorBoundary }: ModuleErrorFallbackProps) {
  return (
    <Card role="alert" className="w-full max-w-4xl">
      <CardHeader className="flex flex-col items-center justify-center text-center">
        <CardTitle className="mb-2">Something went wrong</CardTitle>
        <CardDescription className="mb-4">
          The item module could not be loaded. This may be a temporary issue.
        </CardDescription>
        <Button onClick={resetErrorBoundary}>Try again</Button>
        <details className="text-muted-foreground mt-4 text-xs">
          <summary>Error Details</summary>
          <pre className="bg-secondary mt-2 rounded p-2">{error.message}</pre>
        </details>
      </CardHeader>
    </Card>
  );
}
