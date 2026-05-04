// app/components/LoadingSpinner.tsx
export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-700 dark:text-gray-300">Chargement...</p>
      </div>
    </div>
  );
}
