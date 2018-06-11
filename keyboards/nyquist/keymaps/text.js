var fs = require('fs')

if(process.argv[2] == 'deposit'){
  var deposit = process.argv[3] + ','
  fs.appendFile('text.txt', deposit, (err) => {
    if (err) throw err
    console.log('data appended!')
  })
} else if (process.argv[2] == 'withdraw'){
  var negative = -parseInt(process.argv[3])+','
  fs.appendFile('text.txt', negative, (err) => {
    if (err) throw err
    console.log('data appended!')
  })
}else if(process.argv[2] == 'total'){
  fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) throw err
    var bankAcct = data
    var bankAcctArray = bankAcct.split(",");
    console.log(bankAcctArray)
  })
}else if(process.argv[2] == 'lotto'){
  // code for lotto function here
}


