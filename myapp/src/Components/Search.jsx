import React from "react";
import "./Search.css";
import { HiOutlineSearch } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

const Search = () => {
    return (
    <div className="frist-box">
        <div className="main-box">
            <div className="olx-title"></div>
            <img src="https://static.vecteezy.com/system/resources/previews/050/816/830/non_2x/olx-transparent-icon-free-png.png"/>
            <div className="india-search">
                <div className="search-icon"><HiOutlineSearch /></div>
                <div className="india-title">
                    <div className="india">India</div>
                    <div className="dropdown"><RiArrowDropDownLine /></div>
                </div>
            </div>
            <div className="search-box">
                <div className="search">
                    <a className="properties">Search"Properties"</a>
                    <div className="search-icons">
                        {/* <a className="searchicon1"><HiOutlineSearch /></a> */}
                        <img src="https://img.icons8.com/?size=30&id=59878&format=png&color=FFFFFF"/>
                    </div>
                </div>
            </div>
            <div className="english">ENGLISH</div>
            <a className="dropdowns"><RiArrowDropDownLine /></a>
            <a className="iconss1"><FaRegHeart /></a>
            <a className="iconss2"><FiMessageCircle /></a>
            <a className="iconss3"><FaRegBell /></a>
            <div className="img"><img src="https://static.vecteezy.com/system/resources/previews/025/869/666/non_2x/round-profile-image-of-woman-avatar-for-social-networks-fashion-beauty-blue-and-black-bright-illustration-in-trendy-style-free-vector.jpg"></img></div>
            <div className="dropdown1"><RiArrowDropDownLine /></div>
            <div className="sell-box">
                <div className="sell"> + SELL</div>
            </div>
            
        </div>
        <div className="second-box">
            <div className="all-categories">
                <div className="all">ALL CATEGORIES</div>
                <div className="dropdownn"><RiArrowDropDownLine /></div>
                <div className="car">Cars</div>
                <div className="motor">Motorcycles</div>
                <div className="motor">Mobile Phones</div>
                <div className="motor">For Sale:Houses & Apartments</div>
                <div className="motor">Scooters</div>
                <div className="motor">Commercial & Other Vechicles</div>
                <div className="motor">For Rent:Houses & Apartments</div>
            </div>
        </div>
        </div>
        

);
};

export default Search;
    