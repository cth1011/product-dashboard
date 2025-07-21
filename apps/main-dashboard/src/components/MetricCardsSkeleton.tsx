import { MetricCardSkeleton } from './MetricCardSkeleton';

export function MetricCardsSkeleton() {
  return (
    <section className="flex gap-4">
      <MetricCardSkeleton />
      <MetricCardSkeleton />
      <MetricCardSkeleton />
    </section>
  );
}
