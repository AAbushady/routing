/*
St. Petersburg College allows its employee to set up automatic deposit from their
job. As such, the employee needs to specify the routing number for their bank. In
order to make sure the money gets routed correctly, SPC wants to validate that
the employee enters a valid routing number. The list of valid routing numbers is
below.

Region                  Routing/Transit Number
Arizona                 122100024
California              322271627
Colorado                102001017
Connecticut             021100361
Florida                 267084131
Georgia                 061092387
Idaho                   123271978
Illinois                071000013
Indiana                 074000010
Kentucky                083000237
Louisiana               065400137
Michigan                072000326
Nevada                  322271627
New Jersey              021202337
New York - Downstate    021000021
New York - Upstate      022300173
Ohio                    044000037
Oklahoma                103000648
Oregon                  325070760
Texas                   111000614
Utah                    124001545
Washington              325070760
West Virginia           051900366
Wisconsin               075000019

These numbers should be stored in an array. Iterate over the array and
determine if the entered routing number is in the array. If the number is in the
array, display "valid". If the routing number is not an array, indicate that it is
invalid.

Use 32507060 as the input routing number.
*/

// Pseudocode
/*
--Variables and Constants--
Declare a Constant Array validRouting.
Declare a Numeric Variable userInput.
Declare a Boolean Variable check as false.

--Calculation--
Loop through the Array:
    If userInput matches validRouting:
        Change check to true.
        
--Display Values--
If check is true:
    Display "Valid Routing Number!"
else:
    Display "Invalid Routing Number..."
*/

const validRouting = [122100024, 322271627, 102001017, 021100361, 267084131, 061092387, 123271978,
                      071000013, 074000010, 083000237, 065400137, 072000326, 322271627, 021202337,
                      021000021, 022300173, 044000037, 103000648, 325070760, 111000614, 124001545,
                      325070760, 051900366, 075000019];
var userInput = 32507060;
var check = false;

for (var i = 0, cnt = validRouting.length; i < cnt; i++) {
    if (userInput == validRouting[i]) {
        check = true;
    }
}

if (check) {
    console.log("Valid Routing Number!");
} else {
    console.log("Invalid Routing Number...");
}
