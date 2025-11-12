import { useState } from "react";

const AddData = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (!name.trim() || !place.trim()) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    onAdd({ name, place });
    setName("");
    setPlace("");
  };

  return (
    <div className="mx-auto my-50 add-box text-white border-2 w-100 h-50 rounded-md p-2 ">
      <h3 className="text-white p-2 font-bold">Add Student</h3><hr/>
      
      Name: <input
        type="text"
        placeholder="Enter name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-white p-1"
      /><br/>
       Place: <input
        type="text"
        placeholder="Enter place..."
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        className="text-white p-1"
      /><br></br>
      <button className="pl-2 pr-2 pt-1 pb-1  text-white bg-blue-500 m-2 ml-70 border rounded-md" onClick={handleAdd}>Add</button>
      {error && <p className="text-red-500">Please fill all fields.</p>}
    </div>
  );
};

export default AddData;
