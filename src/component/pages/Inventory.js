import React,{Component} from 'react';
import HeaderTwo from "../include/HeaderTwo";
import InventorySection from "../section/InventorySection";
import SocialMedia from "../section/SocialMedia";
import Testimonial from "../section/Testimonial";
import Contact from "../section/Contact";
import Footer from "../include/Footer";
import $ from "jquery";

class Inventory extends Component{
    componentDidMount() {
        var s = $("#sticker");
        var pos = s.position();
        $(window).on('scroll', function() {
            var windowpos = $(window).scrollTop() > 300;
            if (windowpos > pos.top) {
                s.addClass("stick");
            } else {
                s.removeClass("stick");
            }
        });
    }
    render(){
        return(
            <div>
                <HeaderTwo/>
                <InventorySection/>
                <br/>
                <SocialMedia/>
                <Testimonial/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Inventory;