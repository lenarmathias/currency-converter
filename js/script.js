{
    const welcome = () => {
        console.log("Hello World!");
    };

    const outputResult = (inputValue, outputValue, currencySelector) => {
        const ratePlnEur = 4.52;
        const ratePlnUsd = 4.11;
        let convertedValue;
        let currency;

        switch (currencySelector.value) {
            case ("plnToEur"):
                convertedValue = inputValue.value / ratePlnEur;
                currency = "EUR";
                break;
            case ("eurToPln"):
                convertedValue = inputValue.value * ratePlnEur;
                currency = "PLN";
                break;
            case ("plnToUsd"):
                convertedValue = inputValue.value / ratePlnUsd;
                currency = "USD";
                break;
            case ("usdToPln"):
                convertedValue = inputValue.value * ratePlnUsd;
                currency = "PLN";
                break;
        };

        outputValue.innerText = `Kwota po przeliczeniu: ${(convertedValue).toFixed(2)} ${currency}`;
    };

    const selectorReset = (inputValue, outputValue) => {
        inputValue.value = "";
        outputValue.innerText = "";
    };

    const init = () => {
        const inputValue = document.querySelector(".js-inputValue");
        const outputValue = document.querySelector(".js-outputValue");
        const currencySelector = document.querySelector(".js-currencySelector");

        welcome();
        inputValue.addEventListener("input", () => outputResult(inputValue, outputValue, currencySelector));
        currencySelector.addEventListener("change", () => selectorReset(inputValue, outputValue));
    };

    init();
}