import React from 'react';
import { ReactNavbar } from 'overlay-navbar';
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import logo from '../../../images/juicemart-logo.png';

const options = {
    burgerColorHover: "#eb4034",
    burgerColor: "#44aaaa",
    logo,
    logoWidth: "20vmax",
    navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#9FD4D4",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "My Cart",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "https://www.linkedin.com/in/raunak-kumar-gupta-075121226/",
    link4Url: "/cart",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    profileIcon: true,
    ProfileIconElement: MdAccountCircle,
    profileIconUrl: "/login",
    profileIconColor: "rgba(35, 35, 35,0.8)",
    profileIconMargin: "1vmax",
    searchIcon: true,
    SearchIconElement: MdSearch,
    searchIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
};

const Header = () => {
    return (
        <ReactNavbar
            {...options}
        />
    )
}

export default Header
