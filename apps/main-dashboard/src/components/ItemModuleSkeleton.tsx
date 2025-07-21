import { Skeleton } from "@repo/ui/skeleton";

export function ItemModuleSkeleton() {
  return (
    <section className="w-full max-w-4xl">
      <Skeleton className="h-[400px] w-full" />
    </section>
  );
}
