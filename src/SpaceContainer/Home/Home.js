import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { secretAPI } from "../../secret";

export default function Home() {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=4HKjDzdrpgxGpmLGXxnbxWaVjggCrTnKLUnC44o0`;

  const [astroEvents, setastroEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  // ------------ UseEffect ---------------
  useEffect(() => {
    axios.get(url).then((response) => {
      setastroEvents(response.data.photos);
    });
  }, [url]);
  // ------------ END OF UseEffect ---------------

  console.log("Here is Astro:", astroEvents);
  console.log(liked);
  const btnClick = (i) => {
    const btn = document.getElementById(i);
    if (btn.classList.contains("fa-heart-o")) {
      astroEvents[i].liked = true;
      btn.classList.remove("fa-heart-o");
      btn.classList.add("fa-heart");
    }
    // if (!astroEvents[i].liked) {
    //   astroEvents[i].liked = true;
    // }
    // astroEvents[i].liked = false;
    console.log(astroEvents[i].liked);
  };
  /*   ------------ ASTRO MINI ITEMS COMPONENT --------------------- */
  const astroItems = () => {
    return astroEvents.map((astro, i) => (
      <div className="astro-item" key={i}>
        <div className="astro-blob">
          <h2>
            <strong>{astro.camera.name}</strong>
          </h2>
          <img width="400" src={astro.img_src} alt="some astro" />
          <p className="full-name">{astro.camera.full_name}</p>
          <p>Somewhere on Mars, there is this thing.</p>
          <span>Earth Date: {astro.earth_date}</span>
          <br />
          <div className="like-btn">
            <i id={i} className="fa fa-heart-o">
              {" "}
              LIKE
            </i>
          </div>
        </div>
      </div>
    ));
  };

  /* ------------ END ASTRO MINI ITEMS COMPONENT --------------------- */

  if (astroEvents) {
    return (
      <div className="space-container">
        <div className="space-parent">
          <h1>Spacetagram</h1>
          <p>Brought to youby NASA's Mars Rover Photos API</p>
          <div className="items-container">{astroItems()}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="space-container">
      <div className="space-parent">
        <h1>Spacetagram</h1>
        <p>Brought to youby NASA's Mars Rover Photos API</p>
        <div className="items-container">
          <h1>LOADING . . .</h1>
        </div>
      </div>
    </div>
  );
}
