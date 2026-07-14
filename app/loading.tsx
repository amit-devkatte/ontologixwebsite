export default function Loading() {
  return (
    <div className="container-enterprise grid min-h-[50vh] place-items-center py-24" role="status">
      <div className="h-1 w-48 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-primary" />
      </div>
      <span className="sr-only">Loading</span>
    </div>
  );
}
