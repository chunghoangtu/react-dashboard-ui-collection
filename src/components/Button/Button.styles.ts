export const base = `px-4 py-2 rounded text-white font-medium
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-offset-2`;

export const variants = {
  primary: `${base} bg-blue-600 hover:bg-bue-700 focus:ring-blue-500`,
  secondary: `${base} bg-gray-600 hover:bg-gray-700 focus:ring-gray-500`,
  danger: `${base} bg-red-600 hover:bg-red-700 focus:ring-red-500`,
  disabled: `${base} bg-gray-400 text-gray-200 cursor-not-allowed`,
}