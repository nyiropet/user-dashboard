export function Error({ errorMessage }: { errorMessage: string }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-lg mb-6">Please try again later.</p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to home
        </a>
      </div>
    </div>
  );
}
