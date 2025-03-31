import { WalletDashboard } from "@/components/wallet-dashboard"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-4 md:p-8">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Solana Wallet App</h1>
        <WalletDashboard />
      </div>
    </main>
  )
}
