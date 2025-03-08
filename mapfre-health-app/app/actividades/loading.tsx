import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-gray-50 p-4">
      <div className="h-8 mb-4">
        <Skeleton className="h-8 w-40" />
      </div>

      {/* Mapa skeleton */}
      <Skeleton className="h-64 w-full mb-4" />

      {/* Búsqueda y filtros skeleton */}
      <Skeleton className="h-10 w-full mb-3" />
      <Skeleton className="h-10 w-full mb-6" />

      {/* Tabs skeleton */}
      <Skeleton className="h-10 w-full mb-6" />

      {/* Actividades skeleton */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="mb-4">
          <Skeleton className="h-40 w-full rounded-lg" />
        </div>
      ))}
    </div>
  )
}

