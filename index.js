const fs = require("fs");
const csv = require("csv-parser");

fs.createReadStream("input_countries.csv")
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });

readStream.setEncoding('UTF8');

console.log("Deleting canada.txt if it exists...")
fs.unlink('canada.txt', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("canada.txt deleted successfully!");
});