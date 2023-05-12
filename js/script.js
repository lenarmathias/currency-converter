{
    const inputValue = document.querySelector(".js-inputValue");
    const outputValue = document.querySelector(".js-outputValue");
    const currencySelector = document.querySelector(".js-currencySelector");

    const welcome = () => {
        console.log("Hello World!");
    };

    const outputResult = () => {
        inputValue.addEventListener("input", () => {
            switch (true) {
                case (currencySelector.value === "plnToEur"):
                    outputValue.innerText = `Kwota po przeliczeniu: ${(inputValue.value / 4.52).toFixed(2)} EUR`;
                    break;
                case (currencySelector.value === "eurToPln"):
                    outputValue.innerText = `Kwota po przeliczeniu: ${(inputValue.value * 4.52).toFixed(2)} PLN`;
                    break;
                case (currencySelector.value === "plnToUsd"):
                    outputValue.innerText = `Kwota po przeliczeniu: ${(inputValue.value / 4.11).toFixed(2)} USD`;
                    break;
                case (currencySelector.value === "usdToPln"):
                    outputValue.innerText = `Kwota po przeliczeniu: ${(inputValue.value * 4.11).toFixed(2)} PLN`;
                    break;
            }
        });
    };

    const selectorReset = () => {
        currencySelector.addEventListener("change", () => {
            inputValue.value = "";
            outputValue.innerText = "";
        });
    };

    function init() {
        welcome();
        outputResult();
        selectorReset();
    };

    init();
}