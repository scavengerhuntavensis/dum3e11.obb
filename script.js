window.onload = () => {

    let correct = document.getElementById("correct");
    let mainContent = document.getElementById("mainContainer");


    document.getElementById("math").addEventListener("input", (event) => {
        let input = event.target.value;
        checkAns(correct, mainContent, input);
    });
}


const checkAns = (correct, mainContent, input) => {
    if(md5(input) == "0a840ef45467fb3932dbf2c2896c5cbf" || md5(input) == "2ff4ab1d379832d3edee28194fb4e7b2" || md5(input) == "a63e2adb56a8019132fbe12acda3b7d6"){
        mainContent.style.visibility = "hidden";
        correct.innerHTML = "Yes you guessed it right!";
        const fiveSeconds = setTimeout(() => {
            mainContent.style.height = 0;
            correct.innerHTML = "Now proceed to where the color of Hufflepuff lies, near the entry, it resides, Underneath the big tree, the key to the end lies.";
        }, 2000);
    }
}   