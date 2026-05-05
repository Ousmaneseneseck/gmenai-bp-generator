// app/dashboard/page.tsx
'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [businessPlans, setBusinessPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/connexion");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.id) {
      loadBusinessPlans();
    }
  }, [session]);

  const loadBusinessPlans = async () => {
    const { data } = await supabase
      .from("business_plans")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) setBusinessPlans(data);
    setLoading(false);
  };

  if (status === "loading") {
    return <div className="text-center py-20">Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Mon tableau de bord</h1>
          <div className="flex gap-3">
            <button
              onClick={() => router.push("/")}
              className="bg-primary text-white px-4 py-2 rounded-lg"
            >
              + Nouveau business plan
            </button>
            <button
              onClick={() => signOut()}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg"
            >
              Déconnexion
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Mes business plans</h2>
          
          {loading ? (
            <p>Chargement...</p>
          ) : businessPlans.length === 0 ? (
            <p className="text-gray-500">Aucun business plan généré pour le moment.</p>
          ) : (
            <div className="space-y-3">
              {businessPlans.map((bp: any) => (
                <div key={bp.id} className="border rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{bp.company_name}</p>
                    <p className="text-sm text-gray-500">
                      Créé le {new Date(bp.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-primary text-sm">Voir</button>
                    <button className="text-blue-600 text-sm">Exporter</button>
                    <button className="text-red-600 text-sm">Supprimer</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
