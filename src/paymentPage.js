const billingInfoForm = document.getElementById("billing_info_div_form");
const paymentInfoDiv = document.getElementById("payment_info_div_credit_card_form");
const proceedBtn = document.getElementById("next_confirm_button");

let fName, lName, mail, add, pNumb, zip;
let ccNum, ccName, ccDate, ccCode;

let dataArr = [];

proceedBtn.addEventListener("click", ev=>{

    fName = billingInfoForm.firstName.value;
    lName = billingInfoForm.lastName.value;
    mail = billingInfoForm.email.value;
    add = billingInfoForm.address.value;
    pNumb = billingInfoForm.phoneNumber.value;
    zip = billingInfoForm.zipCode.value;

    ccNum = paymentInfoDiv.ccNumber.value;
    ccName = paymentInfoDiv.nameCard.value;
    ccDate = paymentInfoDiv.expDate.value;
    ccCode = paymentInfoDiv.ccv.value;

    dataArr = [fName, lName, mail, add, pNumb, zip, ccNum, ccName, ccDate, ccCode];

        if(dataArr.includes("")){

            alert("Please fill in all the fields to proceed");

        }
        else{

            alert("Payment performed successfully!");
            console.log(dataArr);
        }

});