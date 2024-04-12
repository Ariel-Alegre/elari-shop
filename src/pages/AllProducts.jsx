import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Product/Products";
import Icons from "../components/icons/Icons";
import Footer from "../components/footer/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <div>
                    {isLoading ? (
           <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '45vh' }}>
      <CircularProgress />
    </Box>
      ) : (
<div>

          <Navbar />
          <div>
                <Products />
            </div>
            <div>

           
                <Icons />
            </div>
            <Footer/>
            </div>
            )}
            </div>
    );
}
