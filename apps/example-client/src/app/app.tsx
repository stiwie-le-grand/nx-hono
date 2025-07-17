import { use, Suspense } from 'react';

interface Color {
  id: number;
  name: string;
  hexValue: string;
  rgbValue: string;
  category: string;
  usage?: string;
}

interface ColorsResponse {
  items: Color[];
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const colorsPromise = fetch(`${BACKEND_URL}/api/colors`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data: ColorsResponse) => data.items);

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading colors...</p>
      </div>
    </div>
  );
}

function ColorsGrid() {
  const colors = use(colorsPromise) as Color[];

  const handleCopyToClipboard = async (hexValue: string) => {
    try {
      await navigator.clipboard.writeText(hexValue);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Design System Colors
          </h1>
          <p className="text-lg text-gray-600">
            Professional color palettes since 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((color) => (
            <div
              key={color.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div
                className="h-32 w-full"
                style={{ backgroundColor: color.hexValue }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {color.name}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {color.category}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Hex:</span>
                    <code className="text-gray-900 bg-gray-100 px-2 py-1 rounded">
                      {color.hexValue}
                    </code>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500">RGB:</span>
                    <code className="text-gray-900 bg-gray-100 px-2 py-1 rounded">
                      {color.rgbValue}
                    </code>
                  </div>
                </div>

                {color.usage && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Usage: </span>
                      {color.usage}
                    </p>
                  </div>
                )}
                <button
                  onClick={() => handleCopyToClipboard(color.hexValue)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Copy Hex Value
                </button>
              </div>
            </div>
          ))}
        </div>

        {colors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No colors found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ColorsGrid />
    </Suspense>
  );
}

export default App;
