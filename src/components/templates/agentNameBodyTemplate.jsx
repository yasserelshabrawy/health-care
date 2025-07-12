import arrowUP from "../../assets/icon/arrow-up.jpg";
import arrowDOWN from "../../assets/icon/arrow-down.jpg";
export default function agentNameBodyTemplate(rowData) {
   const isHigh = rowData.callsRouted > 100;
  const arrowIcon = isHigh ? arrowUP : arrowDOWN;

  return (
    <div className="flex items-center gap-2">
      <div
        className={`border rounded-full p-01 ${
          isHigh ? "bg-blue-500" : "bg-red-500"
        }`}
      >
        <img src={arrowIcon} alt="trend" className="w-4 h-4 rounded-full" />
      </div>
      <span>{rowData.agentName}</span>
    </div>
  );
}
