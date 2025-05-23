const readline = require('readline');

function getCardFlag(cardNumber) {
    const numStr = cardNumber.toString();

    // Visa: Starts with 4
    const visaRegex = /^4/;
    if (visaRegex.test(numStr)) {
        return 'Visa';
    }

    // Mastercard: Starts with 51-55 or 2221-2720
    const mastercardRegex = /^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/;
    if (mastercardRegex.test(numStr)) {
        return 'Mastercard';
    }

    // American Express: Starts with 34 or 37
    const amexRegex = /^(34|37)/;
    if (amexRegex.test(numStr)) {
        return 'American Express';
    }

    // Elo: Starts with 5 or 6, or 4011, 4312, 4389
    const eloRegex = /^(5|6|4011|4312|4389)/;
    if (eloRegex.test(numStr)) {
        return 'Elo';
    }

    return 'Unknown flag';
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your card number: ', (input) => {
    const cardNumber = input.replace(/\D/g, ''); // Remove non-digit characters
    if (!cardNumber) {
        console.log('Invalid input. Please enter only numbers.');
    } else {
        const flag = getCardFlag(cardNumber);
        console.log(`Card flag: ${flag}`);
    }
    rl.close();
});