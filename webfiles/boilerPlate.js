const fs = require('fs');
// console.log(fs);

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('IN THE CALLBACK!!'); // this is the callback
//     if (err) throw err;
//     console.log('I COME AFTER MKDIR IN THE FILE!!');
// }, 
// );

// fs.mkdirSync('Cats');
// console.log('I COME AFTER MKDIR SYNC IN THE FILE!!');

const folderName = process.argv[2] || 'Projects';
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/README.md`)
    fs.writeFileSync(`${folderName}/app.css`)
    fs.writeFileSync(`${folderName}/style.js`)
} catch {
    console.log(" Something went wrong");
    console.log(e);
}