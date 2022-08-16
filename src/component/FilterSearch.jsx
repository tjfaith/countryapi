import { useState } from "react";
export default function FilterSearch() {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => { 
    setSearch(value);
    const Country_Name = document.querySelectorAll(".country_name");
    Country_Name.forEach((name) => {
      if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
        name.parentElement.parentElement.style.display = "block";
      } else {
        name.parentElement.parentElement.style.display = "none";
      }
    }
    );  
  }


  return (
    <div className="bg-primary px-16">
      <div className="flex pt-9 flex-wrap justify-between">
        {/* Search */}
        <form className="flex items-center p-3 mb-2 bg-white w-80 shadow-lg rounded">
          <div>
            <img
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              src="/src/assets/icon/search.svg"
              alt=""
            />
          </div>
          <input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            className="ml-5 p-1 w-full block focus:outline-0"
            placeholder="Search for a country..."
          />
        </form>

        {/* Filter */}
        <div className=" bg-white px-4 rounded flex mb-2">
          <select className="bg-white w-72 focus:outline-0 text-sm  p-4 ">
            <option>Africa</option>
          </select>
        </div>
      </div>
    </div>
  );
}
