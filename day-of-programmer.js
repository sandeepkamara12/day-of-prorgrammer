function dayOfProgrammer(year) {
    let total = 0;
    let difference = 0;
    let day = 256;

    if (year !== 1918 && year > 1918) {
        if (year % 400 === 0) {
            for (let i = 1; i <= 8; i++) {
                total = (i % 2 != 0) ? total + 31 : i === 8 ? total + 31 : (i === 2) ? total + 29 : total + 30;
            }
            difference = day - total;
            return (difference + '.09.' + year)
        }
        else if (year % 4 == 0 && year % 100 != 0) {
            for (let i = 1; i <= 8; i++) {
                total = (i % 2 != 0) ? total + 31 : i === 8 ? total + 31 : (i === 2) ? total + 29 : total + 30;
            }
            difference = day - total;
            return (difference + '.09.' + year)
        }
        else {
            for (let i = 1; i <= 8; i++) {
                total = (i % 2 != 0) ? total + 31 : i === 8 ? total + 31 : (i === 2) ? total + 28 : total + 30;
            }
            difference = day - total;
            return (difference + '.09.' + year)
        }
    }
    else {
        if (year % 4 === 0) {
            for (let i = 1; i <= 8; i++) {
                total = (i % 2 != 0) ? total + 31 : i === 8 ? total + 31 : (i === 2) ? total + 29 : total + 30;
            }
            if (year === 1918) {
                difference = (day - total + 13);
            }
            else {
                difference = day - total;
            }
            return (difference + '.09.' + year)
        }
        else {
            for (let i = 1; i <= 8; i++) {
                total = (i % 2 != 0) ? total + 31 : i === 8 ? total + 31 : (i === 2) ? total + 28 : total + 30;
            }
            if (year === 1918) {
                difference = (day - total + 13);
            }
            else {
                difference = day - total;
            }
            return (difference + '.09.' + year)
        }
    }
}
let date = dayOfProgrammer(1918);
console.log(date);