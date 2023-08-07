import React ,{ useState, useEffect }from "react";
import axios from "axios";

const ShowInfo = ({ show, onClose }) => {

  const [showInfo, setShowInfo] = useState(null);
  let imgsrc =
    "https://image.shutterstock.com/image-vector/no-image-vector-isolated-on-260nw-1481369594.jpg";

    useEffect(() => {
      const fetchShowInfo = async () => {
        if (show) {
          try {
            const response = await axios.get(
              `https://api.tvmaze.com/shows/${show.id}`
            );
            const showData = response.data;
            setShowInfo(showData);
          } catch (error) {
            console.error("Error fetching shows:", error);
          }
        } else {
          setShowInfo([]);
        }
      };
  
     
  
      // Set a new timeout for 500ms after the user stops typing
      
      fetchShowInfo();
    
  
      
  
      // Cleanup function to clear the timeout on unmount or when the query changes
      
    }, []);



  const handleCCC = (event) => {
    console.log(showInfo)
  };

if(showInfo){
  if (showInfo.image) {
    imgsrc = show.image.medium;
  }
}
  

  return (

<div >
    {showInfo && (
      <div >
        <img
         
          src={imgsrc}
          
        />

        
        

          <p>{showInfo.name}</p>
          <button  onClick={handleCCC}>
          console log
        </button>
     
        <button  onClick={onClose}>
          X
        </button>
      </div>
    )}

</div>
    
      
    
  );
};

export default ShowInfo;