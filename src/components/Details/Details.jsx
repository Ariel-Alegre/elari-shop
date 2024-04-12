import { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Details.css'
import { Image } from 'antd';
import { products } from '../zapas/shoes';
import { useParams } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BsWhatsapp } from 'react-icons/bs';

export default function Details() {
  const { idShoes } = useParams();

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    const product = products.find(product => product.id === idShoes);
    if (product) {
      setSelectedProduct(product);
    }
  }, [idShoes]);

  if (!selectedProduct) {
    return <div>Producto no encontrado</div>;
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div>
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100vh' }}
        role="presentation"
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDrawer(anchor, false)}>
              X
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
        <div className='img-drawer'>
          <div>
            <img
              src={selectedProduct.imagen[0]}
              alt={selectedProduct.imagen[0]}
            />
          </div>
          <div>
            <div>
              <img
                src={selectedProduct.imagen[1]}
                alt={selectedProduct.imagen[1]}
              />
            </div>
            <div>
              <img
                src={selectedProduct.imagen[2]}
                alt={selectedProduct.imagen[2]}
              />
            </div>
          </div>
      {/*     <div>
            <img
              src={selectedProduct.imagen[3]}
              alt={selectedProduct.imagen[3]}
            />
          </div> */}
        </div>
      </Box>
    </div>
  );

  return (
    <div className='details-container'>
      <div className="bg-white">
        <div className="pt-6">
          <div className="mt-18">
            <h2 className="text-sm font-medium text-black-900 text-title">{selectedProduct.name}</h2>
          </div>
          <div>
            {['top'].map((anchor) => (
              <div className='image-detail'>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <div>
                    <img
                      src={selectedProduct.imagen[0]}
                      alt='No funciona'
                    />
                  </div>
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </div>
            ))}
          </div>




          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{selectedProduct.name}</h1>
              <h2 className="text-sm font-medium text-black-900">{selectedProduct.genero}</h2>
              <p className="text-3xl tracking-tight text-gray-900">${selectedProduct.precio}</p>
              {/* Agrega las opciones de color y tamaño aquí */}
              <a href="https://wa.me/+5491134604120"  target="__blank">

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white  btn-compras"
                >
               <i><BsWhatsapp/></i> Contactar para realizar la compra
              </button>
                </a>
            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{selectedProduct.descripcion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
