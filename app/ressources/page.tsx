// app/ressources/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RessourcesPage() {
  return (
    <>
      <Header onSignupClick={() => {}} />
      
      <main className="pt-32 pb-12 px-4 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ressources GMENAI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Guides, tutos et templates pour réussir votre business plan
            </p>
          </div>

          {/* Grille des ressources */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Carte 1 - Guide */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📘</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Guide du business plan
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Apprenez à créer un business plan qui convainc banques et investisseurs
              </p>
              <div className="text-sm text-primary font-medium">📖 15 min de lecture →</div>
            </div>

            {/* Carte 2 - Template Excel */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Template Excel financier
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Tableau de bord pour suivre vos KPIs et projections FCFA
              </p>
              <div className="text-sm text-primary font-medium">📎 Télécharger →</div>
            </div>

            {/* Carte 3 - Vidéo tutoriel */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Tutoriel vidéo
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Découvrez comment utiliser GMENAI en 5 minutes
              </p>
              <div className="text-sm text-primary font-medium">🎥 5:23 →</div>
            </div>

            {/* Carte 4 - Pitch Deck */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📽️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Template Pitch Deck
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Présentation professionnelle pour convaincre les investisseurs
              </p>
              <div className="text-sm text-primary font-medium">📎 Télécharger →</div>
            </div>

            {/* Carte 5 - Mobile Money */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Guide Mobile Money
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Comment intégrer Orange Money, Wave et M-Pesa
              </p>
              <div className="text-sm text-primary font-medium">📖 12 min →</div>
            </div>

            {/* Carte 6 - Webinaire */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Webinaire replay
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Les erreurs à éviter dans son business plan
              </p>
              <div className="text-sm text-primary font-medium">🎥 45 min →</div>
            </div>
          </div>

          {/* Section newsletter */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Recevez nos conseils
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Inscrivez-vous pour recevoir guides et templates gratuitement
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer onSignupClick={() => {}} isSignupOpen={false} setIsSignupOpen={() => {}} />
    </>
  );
}
