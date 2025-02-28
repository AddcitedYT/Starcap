const readline = require('readline');
const figlet = require('figlet');

function generateCaptcha(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
    }
    
    return captcha;
}

function checkCaptcha(input, captchaCode) {
    if (input === captchaCode) {
        console.log("Captcha verification successful!");
    } else {
        console.log("Captcha verification failed. Please try again.");
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const captchaCode = generateCaptcha(6);


figlet(captchaCode, function(err, data) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
    console.log('Starcap | V1.0.0')


    rl.question("Enter the captcha code shown above: ", function(userInput) {
        checkCaptcha(userInput, captchaCode);
        rl.close();
    });
});

