import React from "react";

const SortButtons = ({ handleSort }) => {
  return (
    <div
      style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        gap: "10px", 
        margin:"5PX"
      }}
    >
      <button
        onClick={() => handleSort("rating")}
        style={{
          backgroundColor: "lightblue",
          border: "none",
          borderRadius: "5px",
          width: "auto",
          height: "40px",
          textAlign: "center",
        }}
      >
        Trier par note
      </button>
      <button
        onClick={() => handleSort("releaseYear")}
        style={{
          backgroundColor: "gray",
          border: "none",
          borderRadius: "5px",
          width: "auto",
          height: "40px",
          textAlign: "center",
        }}
      >
        Trier par année
      </button>
    </div>
  );
};

export default SortButtons;
