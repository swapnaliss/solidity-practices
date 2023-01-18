import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import { BrowserRouter, useNavigate } from "react-router-dom";

export default function HomePage() {
  const [auth, setAuth] = React.useState(false);

  // const navigate = useNavigate();

  // const redirectHandle = () => {
  //   navigate('/register');
  // };

  const handleChange = async (event) => {
    setAuth(event.target.checked);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <FormGroup>
            </FormGroup>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              LAND MARKETPLACE
            </Typography>
            {auth && (
              <div className="Register">
                <Typography variant="h5" component="div" sx={{ paddingTop: 1 }}>
                  Register New Land
                </Typography>
                <IconButton size="large" color="inherit">
                  {/* <AddBoxIcon onClick={redirectHandle} /> */}
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      
      </Box>
    </div>
  );
}
