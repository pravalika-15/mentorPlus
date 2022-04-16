import React, { useState, useEffect } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Drawer } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { FaBars } from "react-icons/fa";
import useWindowDimensions from "./Dimensions";



function NavDrawer() {
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  // console.log(width)

  useEffect(() => {
    if (width > 1400) {
      setOpen(true)
    }
  });
  
  


  return (
    <div className="text-white">
      <ButtonToolbar>
        <Button onClick={() => setOpen(true)}>
          <FaBars className="text-3xl text-black float-right" />
        </Button>
      </ButtonToolbar>
      <Drawer
        backdrop={true}
        placement={"left"}
        open={open}
        onClose={() => setOpen(false)}
        size="xs"
      >
        <Drawer.Header>
          <Drawer.Title>
            <div className="grid justify-items-center">
              <h3 className="text-blue-900">Mentor <span className="text-red-500">Plus</span></h3>
            </div>
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
                <div className="grid justify-items-center justify-items-stretch px-5 mx-5 pt-5 mt-5">
                    <button class="bg-blue-300 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded text-black">
                        Home
                    </button>
                </div>

                <div className="grid justify-items-center justify-items-stretch px-5 mx-5 pt-5">
                    <button class="bg-blue-300 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded text-black">
                        Profile
                    </button>
                </div>

                <div className="grid justify-items-center justify-items-stretch px-5 mx-5 pt-5">
                    <button class="bg-blue-300 hover:bg-blue-500 text-white font-bold py-5 px-4 rounded text-black">
                        
                    </button>
                </div>

                <div className="grid justify-items-center justify-items-stretch px-5 mx-5 pt-5">
                    <button class="bg-blue-300 hover:bg-blue-500 text-white font-bold py-5 px-4 rounded text-black">
                        
                    </button>
                </div>

                <div className="grid justify-items-center justify-items-stretch px-5 mx-5 pt-5">
                    <button class="bg-blue-300 hover:bg-blue-500 text-white font-bold py-5 px-4 rounded text-black">
                        
                    </button>
                </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
