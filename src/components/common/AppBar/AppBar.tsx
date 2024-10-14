"use client";

import { logoutAction } from "@/app/actions";
import { LogoIcon } from "@/constants/images.routes";
import { navbarPages } from "@/constants/navbar";
import {
  HOME,
  LOGIN,
  MY_BIDS,
  MY_INFO,
  MY_OFFERS,
  MY_PROPERTY,
} from "@/constants/page.routes";
import { ClickAwayListener, Stack, SxProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import TextMd from "../../common/Text/TextMd";
import MUILink from "../MUILink/MUILink";
import TextSm from "../Text/TextSm";

interface MenuProps {
  children?: ReactNode;
  user: any;
  menu: {
    title: string;
    link: string;
    authReq?: boolean;
  }[];
  sx?: SxProps;
}

const CustomMenu = ({ user, menu, children, sx }: MenuProps) => {
  return (
    <Stack
      sx={{
        transition: "ease-out 0.3s",
        position: "absolute",
        top: "3.38rem",
        width: "8.75rem",
        backgroundColor: "white",
        gap: "0.625rem",
        padding: "0.625rem",
        zIndex: 1,
        ...sx,
      }}
    >
      {" "}
      {menu.map(({ title, link, authReq }) => (
        <MUILink
          key={title}
          href={authReq && !user ? `${LOGIN}?redirect=${link}` : link}
        >
          <TextSm
            text={title}
            sx={{
              color: "var(--text-secondary)",
              fontWeight: "600",
            }}
          />
        </MUILink>
      ))}
      {children}
    </Stack>
  );
};

interface Props {
  user: any;
}
function ResponsiveAppBar({ user }: Props) {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  const profilePages = [
    {
      title: "My Bids",
      link: MY_BIDS,
    },
    {
      title: "My Info",
      link: MY_INFO,
    },
    {
      title: "My Property",
      link: MY_PROPERTY,
    },
    {
      title: "My Offers",
      link: MY_OFFERS,
    },
  ];

  const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false);

  const handleOpenNavMenu = () => {
    setOpenDrawer(true);
  };

  const handleProfileMenu = (value: boolean) => {
    setOpenProfileMenu(value);
  };

  const handleClickAction = async (action: any) => {
    // switch (action) {
    //   case EPROFILE:
    //     navigate(PROFILE);
    //     break;
    //   case LOGOUT:
    //     await logout();
    //     setUser(null);
    //     navigate(SIGN_IN);
    //     break;
    //   default:
    //     break;
    // }
    // handleProfileMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && openDrawer) {
        setOpenDrawer(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openDrawer]);

  const Logo = () => {
    return <Image src={LogoIcon} priority alt="Logo" width={257} height={85} />;
  };

  if (pathname === LOGIN) {
    return <></>;
  }

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid var(--border-color)",
        boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: "6.4375rem",
          minHeight: "6.4375rem",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "3rem",
          paddingRight: "4.31rem",
          // ".smallScreen": { display: { xs: "flex", md: "none" } },
          // ".largeScreen": { display: { xs: "none", md: "flex" } },
        }}
      >
        {/* SMALL SCREEN */}
        {/* <Box className="smallScreen">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>

          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <Stack spacing={1} sx={{ width: "250px", padding: "1rem" }}>
              {navbarPages.map(({ title, link }, idx) => (
                <Link
                  key={title}
                  href={link}
                  onClick={() => {
                    setOpenDrawer(false);
                  }}
                  component={NextLink}
                >
                  <TextMd
                    text={title}
                    sx={{
                      color:
                        pathname === link
                          ? "var(--primary)"
                          : "var(--text-secondary)",
                    }}
                  />
                </Link>
              ))}
            </Stack>
          </Drawer>
        </Box>

        <NextLink className="smallScreen" href={HOME}>
          <Logo />
        </NextLink> */}

        {/* LARGE SCREEN */}
        <Stack
          direction={"row"}
          className="largeScreen"
          sx={{ alignItems: "center", gap: "3rem" }}
        >
          <NextLink href={HOME}>
            <Logo />
          </NextLink>

          <ClickAwayListener onClickAway={() => setOpenMenu("")}>
            <Stack direction={"row"} sx={{ gap: "4.25rem" }}>
              {navbarPages.map(({ title, link, menu }) => (
                <Box
                  key={link}
                  sx={{
                    position: "relative",
                    padding: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenMenu(openMenu === title ? "" : title)}
                >
                  <MUILink href={link}>
                    <TextMd
                      text={title}
                      sx={{
                        color: "var(--text-secondary)",
                      }}
                    />
                  </MUILink>

                  {openMenu === title && (
                    <CustomMenu
                      menu={menu}
                      sx={{ width: "12rem" }}
                      user={user}
                    />
                  )}
                </Box>
              ))}
            </Stack>
          </ClickAwayListener>
        </Stack>

        <ClickAwayListener onClickAway={() => handleProfileMenu(false)}>
          <Box sx={{ position: "relative" }}>
            {user ? (
              <TextMd
                onClick={() => handleProfileMenu(!openProfileMenu)}
                text={"My Profile"}
                sx={{
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  paddingY: "1rem",
                }}
              />
            ) : (
              <MUILink href={LOGIN}>
                <TextMd
                  text={"Login"}
                  sx={{
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    paddingY: "1rem",
                  }}
                />
              </MUILink>
            )}

            {openProfileMenu && (
              <CustomMenu menu={profilePages} user={user}>
                <TextSm
                  onClick={() => {
                    logoutAction();
                    handleProfileMenu(false);
                  }}
                  text={"Logout"}
                  sx={{
                    cursor: "pointer",
                    color: "var(--text-secondary)",
                    fontWeight: "600",
                  }}
                />
              </CustomMenu>
            )}
          </Box>
        </ClickAwayListener>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
