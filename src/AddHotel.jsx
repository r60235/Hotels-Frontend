import React, { useState } from 'react';

const AddHotelForm = () => {
  const [hotelData, setHotelData] = useState({
    name: '',
    category: '',
    location: '',
    rating: 0,
    website: '',
    phoneNumber: '',
    checkInTime: '',
    checkOutTime: '',
    amenities: '',
    priceRange: '',
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: ''
  });

  const [hotels, setHotels] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') { 
      setHotelData({
        ...hotelData,
        [name]: checked
      });
    } else {
      setHotelData({
        ...hotelData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newHotel = {
      ...hotelData,
      category: hotelData.category ? [hotelData.category] : [], 
      amenities: hotelData.amenities ? hotelData.amenities.split(',') : [], 
      photos: hotelData.photos ? hotelData.photos.split(',') : [] 
    };

    try {
      const response = await fetch('https://hotels-backend-vert.vercel.app/hotels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHotel),
      });

      if (!response.ok) {
        throw 'Failed to add hotel';
      }

      const data = await response.json();
      setHotels((prevHotels) => [...prevHotels, data]);
      window.location.reload();

    
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add New Hotel</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={hotelData.name}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Category:
          <br />
          <select
            name="category"
            value={hotelData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Budget">Budget</option>
            <option value="Mid-Range">Mid-Range</option>
            <option value="Luxury">Luxury</option>
            <option value="Boutique">Boutique</option>
            <option value="Resort">Resort</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <br />
        </label>

        <label>
          Location:
          <br />
          <input
            type="text"
            name="location"
            value={hotelData.location}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Rating (0-5):
          <br />
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            value={hotelData.rating}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Website:
          <br />
          <input
            type="text"
            name="website"
            value={hotelData.website}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>

        <label>
          Phone Number:
          <br />
          <input
            type="text"
            name="phoneNumber"
            value={hotelData.phoneNumber}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Check-in Time:
          <br />
          <input
            type="text"
            name="checkInTime"
            value={hotelData.checkInTime}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Check-out Time:
          <br />
          <input
            type="text"
            name="checkOutTime"
            value={hotelData.checkOutTime}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Amenities:
          <br />
          <input
            type="text"
            name="amenities"
            value={hotelData.amenities}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </label>

        <label>
          Price Range:
          <br />
          <select
            name="priceRange"
            value={hotelData.priceRange}
            onChange={handleChange}
            required
          >
            <option value="">Select Price Range</option>
            <option value="$$ (11-30)">$$ (11-30)</option>
            <option value="$$$ (31-60)">$$$ (31-60)</option>
            <option value="$$$$ (61+)">$$$$ (61+)</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <br />
        </label>

        <label>
          Reservations Needed:
          <input
            type="checkbox"
            name="reservationsNeeded"
            checked={hotelData.reservationsNeeded}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>

        <label>
          Parking Available:
          <input
            type="checkbox"
            name="isParkingAvailable"
            checked={hotelData.isParkingAvailable}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>

        <label>
          Wifi Available:
          <input
            type="checkbox"
            name="isWifiAvailable"
            checked={hotelData.isWifiAvailable}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>

        <label>
          Pool Available:
          <input
            type="checkbox"
            name="isPoolAvailable"
            checked={hotelData.isPoolAvailable}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>

        <label>
          Spa Available:
          <input
            type="checkbox"
            name="isSpaAvailable"
            checked={hotelData.isSpaAvailable}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>

        <label>
          Restaurant Available:
          <input
            type="checkbox"
            name="isRestaurantAvailable"
            checked={hotelData.isRestaurantAvailable}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>

        <label>
          Photos:
          <br />
          <input
            type="text"
            name="photos"
            value={hotelData.photos}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>

        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
};

export default AddHotelForm;
