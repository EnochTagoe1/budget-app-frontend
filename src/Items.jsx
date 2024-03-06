import { Link, useNavigate } from "react-router-dom";


const Items = ({
    items,
    setItems,
    setToggleDetails,
    edit,
    setEdit,
  }) => {
    // if (items.length === 0) return null;
    const navigate = useNavigate();
    function handleDelete(id) {
      const options = {
        method: "DELETE",
      };
  
      fetch(`http://localhost:3999/api/items/${id}`, options)
        .then((res) => res.json())
        .then((data) => setItems(data.items));
    }
  
    return (
      <div>
        {/* <Link to="/new">Add Transaction Item</Link> */}
        <h2>Items</h2>
        {items.map(({ id, name, amount, date, from, category }) => (
          <div key={id}>
            <h3>Name: {name}</h3>
            <p>Amount: {amount}</p>
            <p>Date: {date}</p>
            <p>From: {from}</p>
            <p>Category: {category}</p>
            <button onClick={() => navigate(`/${id}`)}>
              Details
            </button>
            <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <hr />
          </div>
        ))}
      </div>
    );
  };

  
  export default Items;