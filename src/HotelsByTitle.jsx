import useFetch from "../src/useFetch";

const HotelsByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(`https://hotels-backend-vert.vercel.app/hotels/${title}`);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  return data ? (
    <div>
      <h2>{data.name}</h2>
      <p><strong>Location: </strong> {data.location}</p>
      <p><strong>Rating: </strong> {data.rating}</p>
      <p><strong>Price Ranges: </strong>{data.priceRange}</p>
    </div>
  ) : (
    <p>Hotel not found.</p>
  );
};

export default HotelsByTitle;
