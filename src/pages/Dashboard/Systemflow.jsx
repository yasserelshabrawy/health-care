import flowIcon from "../../assets/icon/flowchart.png";
export default function Systemflow({stats}) {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <div className="flex items-center mb-4">
        <img src={flowIcon} alt="System Flow Icon" className="w-8 h-8 mr-2" />
        <h2 className="text-xl font-semibold ">System FLow Funnel</h2>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-6 my-3 gap-4">
      {stats.map((item) => (
        <div key={item.title} className="p-1 border-right pe-2">
          <h3 className="text-sm font-medium text-gray-300">{item.title}</h3>
          <p className="text-2xl font-bold text-gray-600">{item.value}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
