/*global console*/
/*jshint esversion:6*/

(function () {
    const validRouting = [122100024, 322271627, 102001017, 021100361, 267084131, 061092387, 123271978,
        071000013, 074000010, 083000237, 065400137, 072000326, 322271627, 021202337,
        021000021, 022300173, 044000037, 103000648, 325070760, 111000614, 124001545,
        325070760, 051900366, 075000019];
    var userInput = 32507060;
    var check = false;

    for (var i = 0, cnt = validRouting.length; i < cnt; i++) {
        if (userInput === validRouting[i]) {
            check = true;
        }
    }

    if (check) {
        console.log("Valid Routing Number!");
    } else {
        console.log("Invalid Routing Number...");
    }
})();
