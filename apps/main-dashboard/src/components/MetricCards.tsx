import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@repo/ui/card';
import { MetricCardsSkeleton } from './MetricCardsSkeleton';
import { Item } from 'item_module/store';

type UseProductStoreType = (selector: (state: any) => any) => any;

function RenderMetrics({ useProductStore }: { useProductStore: UseProductStoreType }) {
  const products = useProductStore((state) => state.items);

  const totalItems = products.length;
  const activeItems = products.filter((p: Item) => p.status === 'Active').length;
  const inactiveItems = totalItems - activeItems;

  return (
    <section className="flex flex-wrap gap-4 pb-4 md:flex-row">
      <Card className="min-w-[200px]">
        <CardHeader>
          <CardDescription>Total Items</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">{totalItems}</CardTitle>
        </CardHeader>
      </Card>
      <Card className="min-w-[200px]">
        <CardHeader>
          <CardDescription>Active Items</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">{activeItems}</CardTitle>
        </CardHeader>
      </Card>
      <Card className="min-w-[200px]">
        <CardHeader>
          <CardDescription>Inactive Items</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">{inactiveItems}</CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
}

export function MetricCards() {
  const [useProductStore, setUseProductStore] = useState<UseProductStoreType | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    import('item_module/store')
      .then((storeModule) => {
        setUseProductStore(() => storeModule.useProductStore);
      })
      .catch((err) => {
        console.error('Failed to load metrics store:', err);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <section className="flex flex-wrap gap-4 pb-4 md:flex-row">
        <Card className="border-destructive min-w-[200px]">
          <CardHeader>
            <CardDescription className="text-destructive">Error</CardDescription>
            <CardTitle>Metrics Unavailable</CardTitle>
          </CardHeader>
        </Card>
      </section>
    );
  }

  if (useProductStore) {
    return <RenderMetrics useProductStore={useProductStore} />;
  }

  return <MetricCardsSkeleton />;
}
