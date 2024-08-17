import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>Welcome to My App</h2>
        <p>Let start building something amazing!</p>
      </main>
    </div>
  );
}
