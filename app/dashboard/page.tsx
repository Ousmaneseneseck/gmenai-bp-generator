// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Mon tableau de bord</h1>
          <div className="flex gap-3">
            <Link href="/" className="bg-primary text-white px-4 py-2 rounded-lg">
              + Nouveau business plan
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/";
              }}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg"
            >
              Déconnexion
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Bienvenue {user?.name || "utilisateur"} !</h2>
          <p className="text-gray-600">Vos business plans apparaîtront ici.</p>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              💡 Cette version de démonstration utilise le stockage local.
              Prochainement : authentification complète et base de données.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
