function printTable () {

    let input = +document.querySelector("#numberInput").value;
    document.querySelector("#result").innerHTML = ""

    for (let i = 0 ; i < 10 ; i++) {
        document.querySelector("#result")
        .innerHTML += (`${input} x ${i + 1}= ${input * (i + 1)} <br>`);
    }
}
/////////////////////////////     OR   ////////////////////
                // document.querySelector("#result")
                // .innerHTML += (` <h3> ${input} x ${i+1}= ${input * (i+1)} </h3>`);