import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetails = () => {
const {id} = useParams();
const navigate = useNavigate()
const handleCancel=() =>{
      navigate('/');
    }
  const [itemDetail, setItemDetail] = useState({name:"", amount:0, date:"", from:"", category:""});

  useEffect(() => {
    fetch(`http://localhost:3999/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItemDetail(data.item));
  }, [id]);

  // if (!itemDetail) return null;
  return (
    <div>
      <h1>ItemDetails</h1>
      <p >Name: {itemDetail.name}</p>
      <p>Amount: {itemDetail.amount}</p>
      <p>Date: {itemDetail.date}</p>
      <p>From: {itemDetail.from}</p>
      <p>Category: {itemDetail.category}</p>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default ItemDetails;