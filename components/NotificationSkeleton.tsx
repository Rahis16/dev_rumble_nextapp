'use client';

export default function NotificationSkeleton() {
  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold mb-6 text-blue-700 animate-pulse bg-[var(--gray-200)] rounded w-48 h-8"></h1>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-4 rounded-lg shadow bg-[var(--bg-icon)] animate-pulse"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--gray-300)] "></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-[var(--gray-300)] rounded w-1/3"></div>
              <div className="h-3 bg-[var(--gray-300)] rounded w-4/5"></div>
              <div className="h-3 bg-[var(--gray-300)] rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
