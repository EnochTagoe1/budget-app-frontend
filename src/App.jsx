import { useState, useEffect } from "react";
import Items from "./Items";
// Import ItemDetails from ".ItemsDetails";
import ItemForm from "./ItemForm";


const App = () => {
 const [items, setItems] = useState([]);
//this will toggle the item details component and send id
const {toggleDetails, setToggleDetails} = useState({ show: false, id: null });
const [toggleForm, setToggleForm] = useState(false);
const [edit, setEdit] = useState({ show: false, id: null });

useEffect(() => {
  fetch("http:localhost3777/api/items")
  .then((res) => res.json())
  .then((data) => setItems(data.items));
}, []);


  return <div>
    <h1>Budgtr App</h1>
    {!toggleForm && (
        <button onClick={() => setToggleForm(true)}>Create Item</button>
      )}
      <Items
        setToggleDetails={setToggleDetails}
        items={items}
        setItems={setItems}
        edit={edit}
        setEdit={setEdit}
      />
      {toggleDetails.show && <ItemDetails toggleDetails={toggleDetails} />}
      {(edit.show || toggleForm) && (
        <ItemForm
          edit={edit}
          setEdit={setEdit}
          setItems={setItems}
          setToggleForm={setToggleForm}
        />
      )}

    </div>;
};

export default App;
