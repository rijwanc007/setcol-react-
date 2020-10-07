import React,{Component} from 'react';
import sales_and_distribution_banner from "../../assets/img/products/sales-and-distribution_banner.png";
import account_panel from "../../assets/img/icon/account-panel.PNG";
import admin_profile from "../../assets/img/icon/admin-profile.png";
import approved_sale from "../../assets/img/icon/approved-sale-panel.PNG";
import cancel_sale from "../../assets/img/icon/cancel-sale-panel.PNG";
import challan_panel from "../../assets/img/icon/challan-panel.PNG";
import collection_create from "../../assets/img/icon/collection-create.png";
import dealer_account from "../../assets/img/icon/dealer-account.PNG";
import dealer_profile from "../../assets/img/icon/dealer-profile.png";
import distributor_panel from "../../assets/img/icon/distributor-panel.png";
import employee_profile from "../../assets/img/icon/employee-profile.png";
import invoice_panel from "../../assets/img/icon/invoice-panel.png";
import manager_panel from "../../assets/img/icon/manager-panel.PNG";
import offer_setup from "../../assets/img/icon/offer-setup.png";
import rm_panel from "../../assets/img/icon/rm-panel.PNG";
import sales_admin_panel from "../../assets/img/icon/sale-admin-panel(monitoring-rm,manager,account).png";
import single_or_mulitple_product from "../../assets/img/icon/single-or-mulitple-product-and-its-sub-category.png";
import single_or_multiple_brand from "../../assets/img/icon/single-or-multiple-brand.png";
import undelivery_party from "../../assets/img/icon/undelivery-party-list.png";
import user_create from "../../assets/img/icon/user-create.png";
import warehouse from "../../assets/img/icon/warehouse-panel.png";

class SalesAndDistributionSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {sales_and_distribution_banner} alt={sales_and_distribution_banner}/>
                    </div>
                </div>
                <div className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'sales_and_distribution_details_design'}>
                                    SETCOL Sales &amp; Distribution management system comes with its necessary features that helps
                                    you keep tracking of sales information, inventory information, accounting information, purchase
                                    information, vendor payment, employ salary, customer information, barcode and credit card
                                    scanner, tracking the invoice &amp; ledger. This software comes with some special features like loss
                                    prevention tracking, track hourly sales, sales commission tracking, clients demanding products
                                    list etc. The application comes with strong server, 24 hours customers support service. So you
                                    can manage your shop from anywhere. As a manufacturer and distribution company have to
                                    produce multiple products as like brands. That’s are sold in different region via a multiple
                                    distributor/ dealer/ branch. According to this channel/ distribution process you have to gather a
                                    lot of transactional credit information from distributor/ dealer/ branch. Most of the
                                    manufacturing and distribution company collect this information traditionally. For this reason
                                    hence there a lot of scattered data. This makes data compilation, tax deduction at source and
                                    time consuming to make it works but this information is never on time. Multiple follow ups are
                                    required, leading you information more. In such case, manufacturer and distribution company
                                    can utilize a customize SDMS (Sales &amp; Distribution Management System), where distributor/
                                    dealer/ branch can also share their sales information
                                    SETCOL Ecommerce
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className = "col-md-12 col-sm-12 col-xl-12">
                            <div className="section-headline text-center">
                                <h2>Feature <span className="text-info">'s</span></h2>
                            </div>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {account_panel} alt={account_panel}/>
                            <span>&nbsp;Account-Panel</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {admin_profile} alt={admin_profile}/>
                            <span>&nbsp;Admin-Profile</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {approved_sale} alt={approved_sale}/>
                            <span>&nbsp;Approved-Sale-Panel</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {cancel_sale} alt={cancel_sale}/>
                            <span>&nbsp;Cancel-Sale-Panel</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {challan_panel} alt={challan_panel}/>
                            <span>&nbsp;Challan-Panel</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {collection_create} alt={collection_create}/>
                            <span>&nbsp;Collection-Create</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {dealer_account} alt={dealer_account}/>
                            <span>&nbsp;Dealer-Account</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {dealer_profile} alt={dealer_profile}/>
                            <span>&nbsp;Dealer-Profile</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {distributor_panel} alt={distributor_panel}/>
                            <span>&nbsp;Distributor-Panel</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {employee_profile} alt={employee_profile}/>
                            <span>&nbsp;Employee-Profile</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {invoice_panel} alt={invoice_panel}/>
                            <span>&nbsp;Invoice-Panel</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {manager_panel} alt={manager_panel}/>
                            <span>&nbsp;Manager-Panel</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {offer_setup} alt={offer_setup}/>
                            <span>&nbsp;Offer-Setup</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {rm_panel} alt={rm_panel}/>
                            <span>&nbsp;RM-Panel</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {sales_admin_panel} alt={sales_admin_panel}/>
                            <span>&nbsp;Sale-Admin-Panel(monitoring-rm,manager,account)</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {single_or_mulitple_product} alt={single_or_mulitple_product}/>
                            <span>&nbsp;Single-Or-Multiple-Product-And-Its-Sub-Category</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {single_or_multiple_brand} alt={single_or_multiple_brand}/>
                            <span>&nbsp;Single-Or-Multiple-Brand</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {undelivery_party} alt={undelivery_party}/>
                            <span>&nbsp;Undelivery-Party-List</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {user_create} alt={user_create}/>
                            <span>&nbsp;User-Create</span>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <img className={'icon_feature'} src = {warehouse} alt={warehouse}/>
                            <span>&nbsp;Warehouse-Panel</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SalesAndDistributionSection;