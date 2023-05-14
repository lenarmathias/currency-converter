{
    const welcome = () => {
        console.log("Hello World!");
    };

    const outputResult = (inputValue, outputValue, currencySelector) => {
        inputValue.addEventListener("input", () => {
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
        });
    };

    const selectorReset = (inputValue, outputValue, currencySelector) => {
        currencySelector.addEventListener("change", () => {
            inputValue.value = "";
            outputValue.innerText = "";
        });
    };

    function init() {
        const inputValue = document.querySelector(".js-inputValue");
        const outputValue = document.querySelector(".js-outputValue");
        const currencySelector = document.querySelector(".js-currencySelector");

        welcome();
        outputResult(inputValue, outputValue, currencySelector);
        selectorReset(inputValue, outputValue, currencySelector);
    };

    init();
}