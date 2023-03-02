const calcTip = function (bill) {
    if (bill > 50 && bill < 300) {
        return 0.15 * bill;
    } else {
        return 0.2 * bill;
    }
}

const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[bills.length - 1])
];
console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);