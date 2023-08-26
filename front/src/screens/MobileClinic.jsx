import React from "react";
import "../styles/Health.css";

function MobileClinic() {
  return (
    <div>
      <div class="embed-container">
        <iframe
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          title="Capstone Philanthropy Map"
          src="//www.arcgis.com/apps/Embed/index.html?webmap=17fb17501cfe46fa8359e7e9d6184422&extent=-138.6174,15.1492,-51.8254,55.673&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&details=true&legend=true&active_panel=details&basemap_gallery=true&disable_scroll=true&theme=dark"
        ></iframe>
      </div>
    </div>
  );
}

export default MobileClinic;
