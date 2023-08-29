import React, { useRef, useState } from "react";
import "./create.css";
import { PiSmileyStickerFill } from "react-icons/pi";
import axios from "axios";
const Create = () => {
  const [pizzaDetails, setPizzaDetails] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    img: "",
  });

  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.log("file is not true");
      return;
    } else {
      const newData = new FormData();
      newData.append("file", file);
      newData.append("upload_preset", "uploads");
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dnokvmwmd/image/upload",
        newData
      );
      const { url } = uploadRes.data;

      const response = await fetch("http://localhost:4000/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...pizzaDetails, img: url }),
      });
      const data = await response.json();
      setData(data);
    }
  };
  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="all-container">
      <div className="create-container">
        <h1 className="create-header">Create Your Pizza</h1>
        <form className="pizza-form" onSubmit={(e) => handleSubmit(e)}>
          <h3>Enter your pizza details</h3>
          <input
            type="text"
            placeholder="Pizza Name"
            value={pizzaDetails.name}
            onChange={(e) =>
              setPizzaDetails({ ...pizzaDetails, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Price"
            value={pizzaDetails.price}
            onChange={(e) =>
              setPizzaDetails({ ...pizzaDetails, price: +e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Category"
            value={pizzaDetails.category}
            onChange={(e) =>
              setPizzaDetails({ ...pizzaDetails, category: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={pizzaDetails.description}
            onChange={(e) =>
              setPizzaDetails({ ...pizzaDetails, description: e.target.value })
            }
          />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            placeholder="img"
            value={pizzaDetails.img}
            className="img-uploader"
            ref={fileInputRef}
            style={{ display: "none" }}
            
          />
          <button className="upload-img" onClick={() => handleClick()}>
            {file ? (
              <div className="upload-container">
                <p>Image Uploaded</p>
                <PiSmileyStickerFill className="tick" />
              </div>
            ) : (
              "Upload Image"
            )}
          </button>

          <button className="create">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
