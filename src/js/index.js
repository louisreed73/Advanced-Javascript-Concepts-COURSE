

// console.log("Holassssss!!!!!!");



function primera0() {
    var a="A";
    function primera1() {
        var b = "B";
        // console.log(a);
        function primera2() {
            var c="C";
            console.log(b)
        }
        // return b
        primera2();
    };

    primera1()
    // console.log(a)
}

primera0();
