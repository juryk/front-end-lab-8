export default function(result) {

    let output = document.querySelector(".output");
    if(output !== null){
        output.remove();
    }
    output = document.createElement("div");
    output.classList.add("output");
    output.innerHTML = result;
    document.querySelector(".container").append(output);

}
