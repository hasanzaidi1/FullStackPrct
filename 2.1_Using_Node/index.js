const fs = require("fs")


fs.writeFileSync("/Users/hz/PycharmProjects/FullStackPrct/2.1_Using_Node/hello.txt","gvygbhbygv\nkwdjncjdsn\tfscs")


const fileData = fs.readFileSync("/Users/hz/PycharmProjects/FullStackPrct/2.1_Using_Node/hello.txt","utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
console.log(fileData)
