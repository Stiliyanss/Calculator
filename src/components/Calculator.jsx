import Keys from "./Keys";

export default function Calculator() {

  const keys = [
    'AC','C','%','/',
    '7','8','9','*',
    '4','5','6','-',
    '1','2','3','+',
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-700 rounded-3xl shadow-2xl p-6 w-80">
        
        {/* Display */}
        <div className="bg-gray-900 text-white text-right text-5xl px-4 py-8 rounded-xl mb-6">
          0
        </div>

       {/* Keypad */}
<div className="grid grid-cols-4 gap-4">
  {keys.map((item, index) => {
    const isLastColumn = (index + 1) % 4 === 0; // 4th, 8th, 12th, 16th...

    return (
      <Keys
        key={index}
        label={item}
        className={`
          ${isLastColumn ? "bg-orange-500 hover:bg-orange-400 active:bg-orange-300" : ""}
        `}
      />
    );
  })}

  {/* Last row */}
  <Keys label="." />
  <Keys label="0" />
  <Keys
    label="="
    className="col-span-2 bg-orange-500 hover:bg-orange-400 active:bg-orange-300"
  />
</div>


      </div>
    </div>
  );
}
