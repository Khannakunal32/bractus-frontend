import React, { Component } from 'react'
import axios from 'axios'
const Paytm = require('paytm-pg-node-sdk');
class Payment extends Component {
  state = {
  
  }

componentDidMount=()=>{
    // For Staging 
//var environment = Paytm.LibraryConstants.STAGING_ENVIRONMENT;

// For Production 
var environment = Paytm.LibraryConstants.PRODUCTION_ENVIRONMENT;

// Find your mid, key, website in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
var mid = "inWgeS86853871902876";
var key = "Wj_Bu0y&JAL!Kn5T";
var website = "BRACTUS";
var client_id = "WEB";

var callbackUrl = "https://bractus.com/payResponse";
Paytm.MerchantProperties.setCallbackUrl(callbackUrl);

Paytm.MerchantProperties.initialize(environment, mid, key, client_id, website);
// If you want to add log file to your project, use below code
Paytm.Config.logName = "[PAYTM]";
Paytm.Config.logLevel = Paytm.LoggingUtil.LogLevel.INFO;
Paytm.Config.logfile = "/path/log/file.log";




}
initiatepay=()=>{
    var channelId = Paytm.EChannelId.WEB;
    var orderId = "9897120391";
    var txnAmount = Paytm.Money.constructWithCurrencyAndValue(Paytm.EnumCurrency.INR, "1.00");
    var userInfo = new Paytm.UserInfo("9897120391"); 
    userInfo.setAddress("CUSTOMER_ADDRESS");
    userInfo.setEmail("CUSTOMER_EMAIL_ID");
    userInfo.setFirstName("CUSTOMER_FIRST_NAME");
    userInfo.setLastName("CUSTOMER_LAST_NAME");
    userInfo.setMobile("CUSTOMER_MOBILE_NO");
    userInfo.setPincode("CUSTOMER_PINCODE");
    var paymentDetailBuilder = new Paytm.PaymentDetailBuilder(channelId, orderId, txnAmount, userInfo);
    var paymentDetail = paymentDetailBuilder.build();
    var response = Paytm.Payment.createTxnToken(paymentDetail);
}

  render() {
    return (
      <div><button className="primary" onClick={()=>{this.initiatepay()}}>Start pay</button></div>
    )
  }
}
export default Payment