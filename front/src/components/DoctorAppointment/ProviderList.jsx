import React from "react";
import ProviderCard from "./ProviderCard";
import "../../styles/Health.css";

function ProviderList({ providers }) {
  const imageUrls = [
    // require("../fact1.png"),
    // ... other image URLs
  ];

  return (
    <div className="providerlist-ctnr">
      <div className="provider-list">
        {providers.map((provider, index) => (
          <ProviderCard
            key={provider.id}
            name={provider.name}
            specialty={provider.specialty}
            gender={provider.gender}
            availability={provider.availability}
            imageUrl={imageUrls[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default ProviderList;
