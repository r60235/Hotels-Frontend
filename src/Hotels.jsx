import React, { useState, useEffect } from 'react';
import useFetch from "../src/useFetch";

const Hotels = () => {
  const { data, loading, error } = useFetch("https://hotels-backend-vert.vercel.app/hotels");
  const [deleteMessage, setDeleteMessage] = useState('');


  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(`https://hotels-backend-vert.vercel.app/hotels/${hotelId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw "Failed to delete hotel";

      } 

      const deletedHotel=    await response.json();
      if(deletedHotel){
        setDeleteMessage("Hotel Deleted Successfully");
      }   
    } catch (error) {
      setDeleteMessage('Error deleting hotel.');
    }
  };

  if (loading) return <p>Loading hotels...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>All Hotels</h2>
      {deleteMessage && <p>{deleteMessage}</p>}
      <ul>
        {data?.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}
            <button onClick={() => handleDelete(hotel._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
