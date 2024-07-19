document.getElementById('calculateBtn').addEventListener('click', function() {
    const sumOfOddTwoDigitNumbers = calculateSumOfOddTwoDigitNumbers();
    document.getElementById('result').innerText = `İkirəqəmli Tək Ədədlərin Toplamı: ${sumOfOddTwoDigitNumbers}`;
});

function calculateSumOfOddTwoDigitNumbers() {
    let sum = 0;
    for (let i = 10; i < 100; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}