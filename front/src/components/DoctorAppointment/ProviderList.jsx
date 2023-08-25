import React from "react";
import ProviderCard from "./ProviderCard";
import "../../styles/Health.css";

function ProviderList({ providers }) {
  const imageUrls = [
    require("../../images/doctors/images (1).jpeg"),
    require("../../images/doctors/images (2).jpeg"),
    require("../../images/doctors/images (3).jpeg"),
    require("../../images/doctors/images (20).jpeg"),
    require("../../images/doctors/images (4).jpeg"),
    require("../../images/doctors/images (5).jpeg"),
    require("../../images/doctors/images (6).jpeg"),
    require("../../images/doctors/images (25).jpeg"),
    require("../../images/doctors/images (24).jpeg"),
    require("../../images/doctors/images (7).jpeg"),
    require("../../images/doctors/images (8).jpeg"),
    require("../../images/doctors/images (9).jpeg"),
    require("../../images/doctors/images (23).jpeg"),
    require("../../images/doctors/images (18).jpeg"),
    require("../../images/doctors/images (10).jpeg"),
    require("../../images/doctors/images (22).jpeg"),
    require("../../images/doctors/images (11).jpeg"),
    require("../../images/doctors/images (12).jpeg"),
    require("../../images/doctors/images (13).jpeg"),
    require("../../images/doctors/images (21).jpeg"),
    require("../../images/doctors/images (14).jpeg"),
    require("../../images/doctors/images (20).jpeg"),
    require("../../images/doctors/images (15).jpeg"),
    require("../../images/doctors/images (16).jpeg"),
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
