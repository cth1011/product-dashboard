import { Card, CardHeader } from '@repo/ui/card';
import { Skeleton } from '@repo/ui/skeleton';

export function MetricCardSkeleton() {
  return (
    <Card className="min-w-[200px]">
      <CardHeader>
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-8 w-1/2" />
      </CardHeader>
    </Card>
  );
}
