import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import LinkButton from "../../share/UIElements/LinkButton/LinkButton";
import MenuButtom from "../../share/UIElements/MenuButton/MenuButtom";
import RightTooltip from "./RightTooltip/RightTooltip";
import SearchBar from "./SearchBar/SearchBar";
import CartTooltip from "./CartTooltip/CartTooltip";
import Categories from "./Categories/Categories";
const udemyBusinessMessage =
  "Get your team access to over 6,000 top Udemy courses, anytime, anywhere.";
const techOnUdemy =
  "Turn what you know into an opportunity and reach millions around the world.";
const Navigation = () => {
  const RightTooltipWithStyle = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      // minWidth: 250,
      color: theme.palette.grey[900],
      borderRadius: 0,
      padding: 0,
    },
  }));
  const LeftTooltipWithStyle = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      minWidth: 830,
      color: theme.palette.grey[900],
      borderRadius: 0,
      padding: 0,
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "background.paper",
          height: "7.2rem",
          px: "2.4rem",
          boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
        }}
      >
        <Toolbar disableGutters sx={{ my: "auto", gap: 1 }}>
          <Box>
            <img
              src="/images/header/logo-udemy.svg"
              alt="Udemy"
              width="91"
              height="34"
            />
          </Box>
          <MenuButtom>
            <LeftTooltipWithStyle
              title={<Categories />}
              placement="bottom-start"
            >
              <span>Categories</span>
            </LeftTooltipWithStyle>
          </MenuButtom>
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar />
          </Box>

          <MenuButtom>
            <RightTooltipWithStyle
              title={
                <RightTooltip
                  text={udemyBusinessMessage}
                  buttonMessage="Try Udemy Business"
                />
              }
              placement="bottom-end"
            >
              <span>Udemy Business</span>
            </RightTooltipWithStyle>
          </MenuButtom>

          <MenuButtom>
            <RightTooltipWithStyle
              title={
                <RightTooltip text={techOnUdemy} buttonMessage="Learn more" />
              }
              placement="bottom-end"
            >
              <span>Teach on Udemy</span>
            </RightTooltipWithStyle>
          </MenuButtom>
          <MenuButtom>
            <RightTooltipWithStyle
              title={<CartTooltip />}
              placement="bottom-end"
            >
              <a href="/"><ShoppingCartOutlinedIcon sx={{ fontSize: 24 }} /></a>
              
            </RightTooltipWithStyle>
          </MenuButtom>
          <LinkButton
            fontSize="1.4rem"
            color="white"
            height="4rem"
            width="8rem"
          >
            <a
              href="https://www.udemy.com/join/login-popup/?locale=en_US&response_type=html&next=https%3A%2F%2Fwww.udemy.com%2F%3FranMID%3D39197%26ranEAID%3DyNfEamYSgXk%26ranSiteID%3DyNfEamYSgXk-Q716xy3YHMHwt8IcQqpOnA%26LSNPUBID%3DyNfEamYSgXk%26utm_source%3Daff-campaign%26utm_medium%3Dudemyads%26gclid%3DCj0KCQjwiIOmBhDjARIsAP6YhSX7iEOIo5AnUbr0plv_jm8Ks0ysZ4X5s5OlWUj3FxRFG9ZcgoLEkSIaAqXeEALw_wcB"
              style={{ color: "black", textDecoration: "none" }}
            >
              Log in
            </a>
          </LinkButton>
          <LinkButton fontSize="1.4rem" height="4rem" width="8rem">
            <a
              href="https://www.udemy.com/join/signup-popup/?locale=en_US&response_type=html&next=https%3A%2F%2Fwww.udemy.com%2Fjoin%2Flogin-popup%2F%3Flocale%3Den_US%26response_type%3Dhtml%26next%3Dhttps%253A%252F%252Fwww.udemy.com%252F%253FranMID%253D39197%2526ranEAID%253DyNfEamYSgXk%2526ranSiteID%253DyNfEamYSgXk-Q716xy3YHMHwt8IcQqpOnA%2526LSNPUBID%253DyNfEamYSgXk%2526utm_source%253Daff-campaign%2526utm_medium%253Dudemyads%2526gclid%253DCj0KCQjwiIOmBhDjARIsAP6YhSX7iEOIo5AnUbr0plv_jm8Ks0ysZ4X5s5OlWUj3FxRFG9ZcgoLEkSIaAqXeEALw_wcB"
              style={{ color: "white", textDecoration: "none" }}
            >
              Sign up
            </a>
          </LinkButton>
          <LinkButton color="white" height="4rem" width="4rem">
            <LanguageIcon sx={{ fontSize: "2rem" }} />
          </LinkButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navigation;
