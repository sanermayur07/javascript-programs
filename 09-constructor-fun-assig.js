
console.log(`==============Constructor function Bank=============`);
  function Bank(bankName, location, ifscCode, branchCode) {  
       this.bankName = bankName;
       this.location = location;
       this.ifscCode = ifscCode ;
       this.branchCode = branchCode;
       
       
    }

    console.log("=======================Bank Details====================");
    
    let bank1 = new Bank("YES Bank","Pune","YES07721648",558046);
    console.log(`Bank Details-> Bank Name: ${bank1.bankName}, Location: ${bank1.location}, IFSC Code: ${bank1.ifscCode}, Branch Code: ${bank1.branchCode}`);

    let bank2 = new Bank("SBI Bank","Hyderabad","SBI04821658",014569);
    console.log(`Bank Details-> Bank Name: ${bank2.bankName}, Location: ${bank2.location}, IFSC Code: ${bank2.ifscCode}, Branch Code: ${bank2.branchCode}`);

    let bank3 = new Bank("MAH Bank","Chh.Sambhajinagar","MAH01235885",112356);
    console.log(`Bank Details-> Bank Name: ${bank3.bankName}, Location: ${bank3.location}, IFSC Code: ${bank3.ifscCode}, Branch Code: ${bank3.branchCode}`);

    let bank4 = new Bank("AXIS Bank","Pune","AXIS01278984",778925);
    console.log(`Bank Details-> Bank Name: ${bank4.bankName}, Location: ${bank4.location}, IFSC Code: ${bank4.ifscCode}, Branch Code: ${bank4.branchCode}`);

    Bank.openTime = "9 AM IST";
    Bank.closeTime = "6 PM IST";

    console.log("==============Log the openTime and closeTime of object SBI Bank===============");
    console.log(`SBI Bank Open Time : ${Bank.openTime}, Close Time: ${Bank.closeTime}`);

    console.log("==============Log the bankName and closeTime of Object Axis Bank===============");
    console.log(`Bank Name is: ${bank4.bankName}, Close Time: ${Bank.closeTime}`);

    console.log("==============Log bankName,openTime, branchCode of Object Yes Bank===============");
    console.log(`Bank Name is: ${bank1.bankName}, Open Time is: ${Bank.openTime}, Branch Code is: ${bank1.branchCode}`);
    
    
    



    


    
     

