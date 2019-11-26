function generatePascalTriangle(rows) {
    let cal = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0 || i === 0) {
                cal = 1;
            } else {
                cal = cal * (i - j + 1) / j;
            }
            console.log(cal);
        }
    }
}

generatePascalTriangle(5);