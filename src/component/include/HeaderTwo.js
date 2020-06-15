import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Image, Nav, Navbar , NavDropdown} from "react-bootstrap";
import logo from "../../assets/img/logo/setcolbd.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

class HeaderTwo extends Component{
    render(){
        return(
            <div>
                <header>
                    <div id="sticker" className="header-area">
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <Navbar bg="light" expand="lg">
                                        <Navbar.Brand href="#home"><Image src={logo} className="d-inline-block align-top"/></Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav style={{marginLeft:'7%'}}>
                                                <Link to="/" className="logo_icon">Home</Link>
                                                <NavDropdown title="Services" className={'drop_down_nav_bar'} id="basic-nav-dropdown">
                                                    <NavDropdown.Item><Link to="/web_application" className={'drop_down_item_color'}>Web Application</Link></NavDropdown.Item>
                                                    <NavDropdown.Item><Link to="/mobile_application" className={'drop_down_item_color'}>Mobile Application</Link></NavDropdown.Item>
                                                    <NavDropdown.Item><Link to="/qa_&_testing" className={'drop_down_item_color'}>QA & Testing</Link></NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item><Link to="/graphics_solution" className={'drop_down_item_color'}>Graphics Solution</Link></NavDropdown.Item>
                                                    <NavDropdown.Item><Link to="/seo_&_digital_marketing" className={'drop_down_item_color'}>Seo & Digital Marketing</Link></NavDropdown.Item>
                                                    <NavDropdown.Item><Link to="/online_data_security" className={'drop_down_item_color'}>Online Data Security</Link></NavDropdown.Item>
                                                </NavDropdown>
                                                <NavDropdown title="Products" className={'drop_down_nav_bar'} id="basic-nav-dropdown">
                                                    <NavDropdown.Item className={'drop_down_item_color'}>ERP</NavDropdown.Item>
                                                    <NavDropdown.Item className={'drop_down_item_color'}>Accounts</NavDropdown.Item>
                                                    <NavDropdown.Item className={'drop_down_item_color'}>Inventory</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item className={'drop_down_item_color'}>Sales & Distribution</NavDropdown.Item>
                                                    <NavDropdown.Item className={'drop_down_item_color'}>CRM</NavDropdown.Item>
                                                    <NavDropdown.Item className={'drop_down_item_color'}>HR & Payroll</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item className={'drop_down_item_color'}>E-Commerce</NavDropdown.Item>
                                                    <NavDropdown.Item className={'drop_down_item_color'}>Booking & Reservation</NavDropdown.Item>
                                                    <NavDropdown.Item className={'drop_down_item_color'}>Virtual Classroom</NavDropdown.Item>
                                                </NavDropdown>
                                                <AnchorLink offset='100' href="#contact" className="logo_icon">Contact</AnchorLink>
                                                <AnchorLink offset='100' href="#career" className="logo_icon">Career</AnchorLink>
                                            </Nav>
                                            <div style={{marginLeft:'7%',color:'#2BACE2'}}>
                                                <span><i className="fa fa-phone"></i> : +88-0255112226</span>
                                                <br/>
                                                <span><i className="fa fa-phone"></i> : +88-01401157050</span>
                                            </div>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}


export default HeaderTwo;