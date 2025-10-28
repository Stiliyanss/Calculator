import trashIcon from '../assets/trash.png'

export default function Keys({ label, className, onButtonClick }) {
  return (
    <button
      className={`
        bg-gray-600 text-white rounded-xl py-4 text-xl font-medium
        hover:bg-gray-500 active:bg-gray-400 transition-colors
        flex items-center justify-center
        ${className || ""}
      `}
      onClick={()=>onButtonClick(label)}
    >
       {label === "C" ? (
        <img
          src={trashIcon}
          alt="delete"
          className="w-6 h-6"
        />
      ) : (
        label
      )}
    </button>
  );
}
