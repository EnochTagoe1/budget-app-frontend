import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//         <div class="input-group mb-3">
//   <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
//   <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
// </div>


const ItemForm = ({ setItems}) => {
  const {id} = useParams();
  const navigate = useNavigate()
  const [item, setItem] = useState({
    name: "",
    amount: "",
    date: "",
    from: "",
    category: ""
  });

  function handleChange(e) {
    setItem({ ...item, [e.target.id]: e.target.value });
  }

 

  function handleSubmit(e) {
    e.preventDefault();

    if (id) {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      };

      fetch(`http://localhost:3999/api/items/${id}`, options)
        .then((res) => res.json())
        .then((data) => setItems(data.items)).then(() => navigate("/"));
        // .then(() => setToggleForm(false))
        // .then(() => setEdit({ show: false, id: null }));
    } else {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      };
      console.log("post")
      fetch("http://localhost:3999/api/items", options).then((res) => res.json()).then((data) => setItems(data.items)).then(() => navigate("/"));
        // .then(() => setToggleForm(false))
        // .then(() => setEdit({ show: false, id: null }));
    }
  }


    const handleCancel=() =>{
      navigate('/');
    }
    
    // setEdit({ show: false, id: null });
    // setToggleForm(false);
  
  

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3999/api/items/${id}`)
        .then((res) => res.json())
        .then((data) => setItem(data.item));
    }
  }, [id]);

  return (
    <div>
      <h2>Item Form:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            value={item.name}
          />
        </label>
        <label htmlFor="amount">
          Amount:
          <input
            onChange={handleChange}
            type="number"
            id="amount"
            name="amount"
            value={item.amount}
          />
        </label>

        <label htmlFor="date">
          Date:
          <input
            onChange={handleChange}
            type="date"
            id="date"
            name="date"
            value={item.date}
          />
        </label>

        <label htmlFor="from">
          From:
          <input
            onChange={handleChange}
            type="text"
            id="from"
            name="from"
            value={item.from}
          />
        </label>

        <label htmlFor="category">
          Category:
          <input
            onChange={handleChange}
            type="text"
            id="category"
            name="category"
            value={item.category}
          />
        </label>
        <input type="submit"/>
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default ItemForm;