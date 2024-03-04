import { useState, useEffect } from "react";
import Items from "./Items";
import ItemDetails from "./ItemDetails";
import ItemForm from "./ItemForm";
import { Routes, Route, Link } from "react-router-dom"
import "./App.css";

const App = () => {
 const [items, setItems] = useState([]);
//this will toggle the item details component and send id
//const [toggleDetails, setToggleDetails] = useState({ show: false, id: null });
//const [toggleForm, setToggleForm] = useState(false);
//const [edit, setEdit] = useState({ show: false, id: null });

useEffect(() => {
  fetch("http://localhost:3999/api/items")
  .then((res) => res.json())
  .then((data) => setItems(data.items));
}, []);

//console.log(data)
  return <div>
    <header className="header">
      <Link to={"/"}>
    <h1> "BudgtR" App</h1>
      </Link>
    </header>
    <Routes>
    <Route path="/" element={<Items
        //setToggleDetails={setToggleDetails}
        items={items}
        setItems={setItems}
        //edit={edit}
        //setEdit={setEdit}
      />} />
      <Route path="/new" element={<ItemForm
          // edit={edit}
          // setEdit={setEdit}
          setItems={setItems}
          // setToggleForm={setToggleForm}
        />}/>

      <Route path="/edit/:id" element={<ItemForm
          // edit={edit}
          // setEdit={setEdit}
          setItems={setItems}
          // setToggleForm={setToggleForm}
        />}/>

      <Route path="/:id" element={<ItemDetails />}/>
        
      
      </Routes>
    {/* <br container=""></br>
    {!toggleForm && (
        <button onClick={() => setToggleForm(true)}>Create Item</button>
      )} */}
      
      
      {/* {(edit.show || toggleForm) && (
        <ItemForm
          edit={edit}
          setEdit={setEdit}
          setItems={setItems}
          setToggleForm={setToggleForm}
        />
      )} */}

    </div>;
};

export default App;
