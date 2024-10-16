"use client";

import { logoutAction } from "@/app/actions";
import {
  ChevronDownGreyIcon,
  CloseGreyIcon,
  LogoIcon,
} from "@/constants/images.routes";
import { navbarPages } from "@/constants/navbar";
import {
  HOME,
  LOGIN,
  MY_BIDS,
  MY_INFO,
  MY_OFFERS,
  MY_PROPERTY,
} from "@/constants/page.routes";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ClickAwayListener,
  Collapse,
  Drawer,
  IconButton,
  Stack,
  SxProps,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
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
  handleProfileMenu?: (value: boolean) => void;
}

const CustomMenu = ({
  user,
  menu,
  children,
  sx,
  handleProfileMenu,
}: MenuProps) => {
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
          onClick={() => {
            if (handleProfileMenu) {
              handleProfileMenu(false);
            }
          }}
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
  const [expandMenu, setExpandMenu] = useState<string[]>([]);

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
      elevation={0}
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid var(--border-color)",
        boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.25)",
        position: { xs: "static", md: "absolute" },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: { md: "6.4375rem" },
          minHeight: { md: "6.4375rem" },
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: { lg: "2rem", xl: "3rem" },
          paddingRight: { lg: "2rem", xl: "4.31rem" },
          ".smallScreen": { display: { xs: "flex", lg: "none" } },
          ".largeScreen": { display: { xs: "none", lg: "flex" } },
        }}
      >
        {/* SMALL SCREEN */}
        <Box className="smallScreen">
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
            <Stack
              spacing={1}
              sx={{
                width: "280px",
                p: "1rem",
                ".closeIcon": { alignSelf: "end" },
              }}
            >
              <Image
                onClick={() => setOpenDrawer(false)}
                className="closeIcon"
                src={CloseGreyIcon}
                alt="close"
                width={30}
                height={30}
              />
              {navbarPages.map(({ title, link, menu }, idx) => (
                <Stack
                  onClick={() => {
                    if (expandMenu.includes(title)) {
                      setExpandMenu(expandMenu.filter((val) => val != title));
                    } else {
                      let tempMenus = [...expandMenu];
                      tempMenus.push(title);
                      setExpandMenu(tempMenus);
                    }
                    // setOpenMenu(openMenu === title ? "" : title);
                  }}
                  sx={{
                    backgroundColor: expandMenu.includes(title)
                      ? "var(--alice-blue)"
                      : "transparent",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  <MUILink
                    href={link}
                    onClick={() => {
                      if (link) {
                        setOpenDrawer(false);
                      }
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                        img: {
                          transform: expandMenu.includes(title)
                            ? "rotate(-180deg)"
                            : "rotate(0deg)",
                          transition: "ease 0.3s",
                        },
                      }}
                    >
                      <TextMd text={title} />
                      {menu.length > 0 && (
                        <Image
                          src={ChevronDownGreyIcon}
                          alt="chevron"
                          width={20}
                          height={20}
                        />
                      )}
                    </Stack>
                  </MUILink>

                  <Collapse in={expandMenu.includes(title)}>
                    {menu.map(({ title, link }) => (
                      <MUILink
                        key={title}
                        href={link}
                        onClick={() => {
                          setOpenDrawer(false);
                        }}
                      >
                        <TextMd
                          text={title}
                          sx={{ ml: "1rem", mt: "0.25rem" }}
                        />
                      </MUILink>
                    ))}
                  </Collapse>
                </Stack>
              ))}

              <Stack
                sx={{
                  backgroundColor: openProfileMenu
                    ? "var(--alice-blue)"
                    : "transparent",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                }}
              >
                {user ? (
                  <Stack
                    onClick={() => handleProfileMenu(!openProfileMenu)}
                    direction={"row"}
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextMd text={"My Profile"} />

                    <Image
                      src={ChevronDownGreyIcon}
                      alt="chevron"
                      width={20}
                      height={20}
                    />
                  </Stack>
                ) : (
                  <MUILink href={LOGIN} onClick={() => setOpenDrawer(false)}>
                    <TextMd text={"Login"} />
                  </MUILink>
                )}

                <Collapse in={openProfileMenu}>
                  {profilePages.map(({ title, link }) => (
                    <MUILink
                      onClick={() => setOpenDrawer(false)}
                      key={title}
                      href={!user ? `${LOGIN}?redirect=${link}` : link}
                    >
                      <TextMd
                        text={title}
                        sx={{
                          fontWeight: "600",
                          ml: "1rem",
                          mt: "0.25rem",
                        }}
                      />
                    </MUILink>
                  ))}
                  <TextMd
                    onClick={() => {
                      logoutAction();
                      handleProfileMenu(false);
                    }}
                    text={"Logout"}
                    sx={{
                      fontWeight: "600",
                      ml: "1rem",
                      mt: "0.25rem",
                    }}
                  />
                </Collapse>
              </Stack>
            </Stack>
          </Drawer>
        </Box>

        <MUILink
          className="smallScreen"
          href={HOME}
          sx={{ mr: "3rem", img: { width: "200px", height: "100%" } }}
        >
          <Logo />
        </MUILink>

        <Box className="smallScreen" />

        {/* LARGE SCREEN */}
        <Stack
          direction={"row"}
          className="largeScreen"
          sx={{ alignItems: "center", gap: { lg: "2rem", xl: "3rem" } }}
        >
          <MUILink href={HOME} className="largeScreen">
            <Logo />
          </MUILink>

          <ClickAwayListener
            onClickAway={() => {
              if (!openDrawer) {
                setOpenMenu("");
              }
            }}
          >
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

        <ClickAwayListener
          onClickAway={() => {
            if (!openDrawer) {
              handleProfileMenu(false);
            }
          }}
        >
          <Box className="largeScreen" sx={{ position: "relative" }}>
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
              <CustomMenu
                menu={profilePages}
                user={user}
                sx={{ width: "7.75rem" }}
                handleProfileMenu={handleProfileMenu}
              >
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
