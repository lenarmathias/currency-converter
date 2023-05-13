{
    const welcome = () => {
        console.log("Hello World!");
    };

    const outputResult = (inputValue, outputValue, currencySelector) => {
        inputValue.addEventListener("input", () => {
            const ratePlnEur = 4.52;
            const ratePlnUsd = 4.11;
            let convertedValue;

            switch (true) {
                case (currencySelector.value === "plnToEur"):
                    convertedValue = `${(inputValue.value / ratePlnEur).toFixed(2)} EUR`;
                    break;
                case (currencySelector.value === "eurToPln"):
                    convertedValue = `${(inputValue.value * ratePlnEur).toFixed(2)} PLN`;
                    break;
                case (currencySelector.value === "plnToUsd"):
                    convertedValue = `${(inputValue.value / ratePlnUsd).toFixed(2)} USD`;
                    break;
                case (currencySelector.value === "usdToPln"):
                    convertedValue = `${(inputValue.value * ratePlnUsd).toFixed(2)} PLN`;
                    break;
            };

            outputValue.innerText = `Kwota po przeliczeniu: ${convertedValue}`;
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