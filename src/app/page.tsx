export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-background">
      <h1 className="text-4xl font-bold text-blue-500">
        Welcome to Next Starter Kit
      </h1>
      <p className="text-secondary mt-2">
        A minimal Next.js setup with Tailwind & ShadCN
      </p>
      <button className="mt-4 bg-primary text-white px-4 py-2 rounded">
        Get Started
      </button>
    </main>
  );
}
