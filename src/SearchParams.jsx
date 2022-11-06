import { useState } from 'react';
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];



const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <div className = "search-params">
      <form>
        <label htmlFor = "location">
          Location
          <input 
          onChange = {e => setLocation (e.target.value)}
          id = "location" 
          value = {location} 
          placeholder = "location" 
          />
        </label>

        <label htmlFor = "animal">
          Animal
          <select id ="animal"
          value = {animal}
          onChange = {e => setAnimal (e.target.value)}
          >

          </select>
        </label>
        <button>Submit</button>
      </form>

    </div>
  );
};

export default SearchParams;