import { useState } from "react";

const EditData = ({ item, onSave, onCancel }) => {
  const [editName, setEditName] = useState(item.name);
  const [editPlace, setEditPlace] = useState(item.place);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...item, name: editName.trim(), place: editPlace.trim() });
  };

  return (
    // Overlay
    <div
className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={onCancel}
    >
      {/* Modal box */}
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-96 shadow-2xl transition-transform transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
          Edit Student
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-left font-medium text-gray-700 dark:text-gray-300">
              Place
            </label>
            <input
              type="text"
              value={editPlace}
              onChange={(e) => setEditPlace(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditData;
