export default function Systemflow({stats}) {
  return (
    <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold ">System FLow Funnl</h2>
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
