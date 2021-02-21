const csv = require('csv-parser');
const fs = require('fs');

var results = [];

var stats = fs.statSync("Dataset3.csv")
var fSize = stats.size;
console.log('File size in Byte', fSize);

fs.readFile('Dataset3.csv', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //if delimitor is ; it needs to change to , before parse it
  var result = data.replace(/;/g, ',');

  fs.writeFile('Dataset3.csv', result, 'utf8', function (err) {
    
    if (err) 
    {
      return console.log(err);
    } else {
      //if file read successfull
    fs.createReadStream('Dataset3.csv') //Dataset3
		.pipe(csv())
		.on('data', data => results.push(data))
		.on('end',() => {
      console.log('\nTOTAL ROWS : ', results.length)
			console.log("\nCOLUMN NAME : \n======================================");
      var obj = results[0]; 
  
      var x;
      for (x in obj) {
        console.log(x);
      }




		});
    
    }
	 
  });
});



