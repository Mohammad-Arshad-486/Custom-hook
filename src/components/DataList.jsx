const DataList = ({ data, onEdit, onDelete }) => (
  <table className="mx-auto mb-5 w-auto min-w-100  border-collapse border border-gray-400">
    <thead>
      <tr>
        <th colSpan="3" className="text-white border border-gray-300 p-2 text-lg font-semibold">
          Student Details
        </th>
      </tr>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 p-2">Name</th>
        <th className="border border-gray-300 p-2">Place</th>
        <th className="border border-gray-300 p-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.length > 0 ? (
        data.map((item) => (
          <tr key={item.id}>
            <td className="text-white border border-gray-300 p-2">{item.name}</td>
            <td className="text-white border border-gray-300 p-2">{item.place}</td>
            <td className="text-white border border-gray-300 p-2">
              <button
                onClick={() => onEdit(item)}
                className="px-3 py-1 bg-blue-500 text-white rounded-md ml-4 mr-3"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="px-3 py-1 bg-red-500 text-white mr-4 rounded-md"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4" className="border border-gray-300 p-2 text-gray-500">
            No data found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default DataList;
