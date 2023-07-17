import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name }) {
  const navigate = useNavigate();

  const handleClick = () => {
    switch (name) {
      case "A Portable, Wearable SMART Medicine Pouch":
        navigate("/project_1");
        break;
      case "Li-Fi":
        navigate("/project_2");
        break;
      case "Tableau Viz_Challenge":
        navigate("/project_3");
        break;
      case "Braille Language_Converter":
        navigate("/project_4");
        break;
      case "Object Counter Using IR":
        navigate("/project_5");
        break;
      case "Lay_off_Trend":
        navigate("/project_6");
        break;
      case "Netflix_Dashboard":
        navigate("/project_7");
        break;
      case "Amazon_Dashboard":
        navigate("/project_8");
        break;

      case "HR_ANALYTICS":
        navigate("/project_9");
        break;

      case "Data_Breach":
          navigate("/project_10");
          break;

      
      default:
           break;
    }
  };


  return (
    <div className="projectItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;