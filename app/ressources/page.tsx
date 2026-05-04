// app/ressources/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RessourcesPage() {
  return (
    <>
      <Header onSignupClick={() => {}} />
      
      <main className="pt-32 pb-12 px-4 min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ressources GMENAI
            </h1>
            <p className="text-xl text-gray-600">
              Guides, templates et outils pour réussir votre business plan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Carte 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-4">📘</div>
              <h2 className="text-xl font-semibold mb-2">Guide du business plan</h2>
              <p className="text-gray-600 mb-4">Créez un business plan bancable</p>
              <span className="text-primary text-sm font-medium">À venir →</span>
            </div>

            {/* Carte 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-4">📊</div>
              <h2 className="text-xl font-semibold mb-2">Template Excel</h2>
              <p className="text-gray-600 mb-4">Prévisions financières en FCFA</p>
              <span className="text-primary text-sm font-medium">À venir →</span>
            </div>

            {/* Carte 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-4">🎬</div>
              <h2 className="text-xl font-semibold mb-2">Tutoriels vidéo</h2>
              <p className="text-gray-600 mb-4">Tutos pas à pas</p>
              <span className="text-primary text-sm font-medium">À venir →</span>
            </div>

            {/* Carte 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-4">📋</div>
              <h2 className="text-xl font-semibold mb-2">Checklist financement</h2>
              <p className="text-gray-600 mb-4">Préparez votre dossier</p>
              <span className="text-primary text-sm font-medium">À venir →</span>
            </div>

            {/* Carte 5 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-4">📈</div>
              <h2 className="text-xl font-semibold mb-2">Exemple business plan</h2>
              <p className="text-gray-600 mb-4">Business plan type secteur Tech</p>
              <span className="text-primary text-sm font-medium">À venir →</span>
            </div>

            {/* Carte 6 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-xl font-semibold mb-2">Conseils investisseurs</h2>
              <p className="text-gray-600 mb-4">Comment convaincre</p>
              <span className="text-primary text-sm font-medium">À venir →</span>
            </div>
          </div>
        </div>
      </main>
      
      <Footer onSignupClick={() => {}} isSignupOpen={false} setIsSignupOpen={() => {}} />
    </>
  );
}
