import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Icons from "../components/icons/Icons";
import Footer from "../components/footer/Footer.jsx";
import Details from "../components/Details/Details";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function AllProducts() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false); // Cambiar el estado a "false" después de cierto tiempo
      }, 2000);
    }, []);
  
    return (
        <>
        {isLoading ? (
           <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '45vh' }}>
      <CircularProgress />
    </Box>
      ) : (
        <div>
            <Navbar />
            <div>
             <Details/>
            </div>
       <div>

                <Icons />
       </div>
        </div>
      )}
        </>
    );
}
