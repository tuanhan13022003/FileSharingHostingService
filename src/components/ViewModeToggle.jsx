import { List, Grid } from "lucide-react";

const ViewModeToggle = ({ viewMode, setViewMode }) => {
    
console.log("ViewModeToggle - viewMode:", viewMode);
  return (
    <button
      onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
      className="p-2 rounded-md hover:bg-gray-100"
    >
      {viewMode === "grid" ? (
        <List className="text-gray-500 cursor-pointer w-5 h-5" />
      ) : (
        <Grid className="text-gray-500 cursor-pointer w-5 h-5" />
      )}
    </button>
  );
};

export default ViewModeToggle;
