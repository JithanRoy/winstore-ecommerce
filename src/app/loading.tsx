export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1220px] px-4 py-8 sm:px-6">
        <div className="h-48 rounded-[30px] bg-white/70 animate-pulse" />
        <div className="-mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-52 rounded-[26px] bg-white/80 animate-pulse"
            />
          ))}
        </div>
        <div className="mt-16">
          <div className="h-12 w-80 rounded-full bg-white/80 animate-pulse" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="h-80 rounded-[24px] bg-white/80 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
