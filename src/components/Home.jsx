import { useState } from "react";
import useFetch from "./useFetch";
import AddData from "./AddData";
import EditData from "./EditData";
import DataList from "./DataList";

function Home() {
  const { data, error, addData, updateData, deleteData } = useFetch();
  const [editingItem, setEditingItem] = useState(null);

  return (
    <div className="text-center">
      <h1 className="text-4xl text-white mt-5 mb-6">
        Student Manager{" "}
        <img
          className="inline w-12 h-24"
          src="/student-svgrepo-com.svg"
          alt="home"
        />
      </h1>

      {error && <p className="text-red-500">Error: {error}</p>}
<div className="flex mx-auto justify-center ">
      <AddData onAdd={addData} />
      <DataList
        data={data}
        onEdit={(item) => setEditingItem(item)}
        onDelete={deleteData}
      />
      </div>

      {editingItem && (
        <EditData
          item={editingItem}
          onSave={(updated) => {
            updateData(updated.id, updated);
            setEditingItem(null);
          }}
          onCancel={() => setEditingItem(null)}
        />
      )}
    </div>
  );
}

export default Home;
