import React, { useState } from 'react';
import useFetch from "../src/useFetch";

const Hotels = () => {
  const { data, loading, error } = useFetch("https://hotels-backend-vert.vercel.app/hotels");
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(`https://hotels-backend-vert.vercel.app/hotels/${hotelId}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (response.ok) {
        setDeleteMessage(result.message);  
        window.location.reload();

      } else {
        setDeleteMessage('Failed to delete the hotel.');
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
            <button onClick={() => handleDelete(hotel._id)}>   Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
