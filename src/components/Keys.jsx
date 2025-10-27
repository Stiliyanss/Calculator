export default function Keys({ label, className }) {
  return (
    <button
      className={`
        bg-gray-600 text-white rounded-xl py-4 text-xl font-medium
        hover:bg-gray-500 active:bg-gray-400 transition-colors
        ${className || ""}
      `}
    >
      {label}
    </button>
  );
}
