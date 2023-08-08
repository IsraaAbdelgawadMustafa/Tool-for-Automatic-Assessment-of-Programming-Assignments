const CodeModel = require('../models/Code');
const fs = require('fs');
const path = require('path');
const { ESLint } = require("eslint");
const plato = require('plato');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const Mocha = require('mocha');

module.exports.postCodeService = async (codeInfo) =>
{
try{
    const modelInstance = new CodeModel({
        sourceCode: codeInfo.sourceCode,
   
    });
   const createdCode = await modelInstance.save();
    return createdCode;
} catch(err) {
    console.log(err);
    //  throw new Error('Cant get to code');
}
};


module.exports.find = async()=>
{
    try{
        const code = await CodeModel.find();
        return code;

    } catch(err)
    {
        throw new Error('Can not retrieve code');
    }
};

// let fileCounter = 0;
// module.exports.covertCodeService = async (codeInfo) => {
//   try {
//     const filename = `temp.js`;
//     const sourceCode = codeInfo.sourceCode;

//     fs.writeFile(path.join(__dirname, filename), sourceCode, (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(`Data saved to ${filename}`);

//         // Analyze the code using Plato
//         const outputDir = path.join(__dirname, 'plato-output');
//         const files = [path.join(__dirname, filename)];
//         const options = {
//           title: 'My Plato Report',
//           recurse: true
//         };
//         plato.inspect(files, outputDir, options, function(err, report) {
//           if (err) throw err;
//           console.log(err);
//           console.log('Plato report generated:', report);
//         });
//       }
//     });
       
//   } catch (err) {
//     console.log(err);
//     // throw new Error('Can't save code');
//   }
// };

module.exports.covertCodeService = async (codeInfo) => {
  try {
    const filename = `temp.js`;
    const sourceCode = codeInfo.sourceCode;

    await writeFileAsync(path.join('public', filename), sourceCode);

    console.log(`Data saved to ${filename} plato`);

    
    const outputDir = path.join('public', 'plato-output');
    const files = [path.join('public', filename)];
    const options = {
      title: 'Code Analysis Report',
      recurse: true
    };
    const report = await new Promise((resolve, reject) => {
      plato.inspect(files, outputDir, options, function(report) {
        
          resolve(report);
        
      });
    });

    console.log('Plato report generated:', report);
    return report;
  } catch (err) {
    console.error(err);
  }
};


//ESLint
// module.exports.EsLinterService = async (codeInfo) =>
// {
// try {
//     const eslint = new ESLint();
//     // const sourceCode = codeInfo.sourceCode.toString();

//     const results = await eslint.lintFiles("public/temp.js");

//     const formatter = await eslint.loadFormatter("json");
//     const resultText = formatter.format(results);
//     const fileContent = resultText;
    
// fs.writeFile('public/lintingResults.json', fileContent, (err) => {
//   if (err) throw err;
//   console.log('linting results saved to file');
// });
//     const jsonData = fs.readFileSync('public/lintingResults.json', 'utf8');
//     const LintingData = JSON.parse(jsonData);
//     const messages = LintingData[0].messages;
//     console.log(messages);
//     return(messages);
//     // console.log(resultText);
//     // return(resultText);

// } catch (err) {
//     console.log(err);
  
//   }
// };

module.exports.EsLinterService = async (codeInfo) =>
{
try {
    const eslint = new ESLint();
    const sourceCode = codeInfo.sourceCode.toString();

    const results = await eslint.lintText(sourceCode);

    const formatter = await eslint.loadFormatter("html");
    const resultText = formatter.format(results);
    const fileContent = resultText.replace(/ESLint Report/g, 'Code Style Feedback');

fs.writeFile('public/lintingResults.html', fileContent, (err) => {
  if (err) throw err;
  console.log('linting results saved to file');
});
    // console.log(resultText);
    return(resultText);

} catch (err) {
    console.log(err);
  
  }
};

module.exports.testCodeService = async (codeInfo) => {
  try {
    const filename = `temp.js`;
    const sourceCode = codeInfo.sourceCode;
    

    await writeFileAsync(filename, sourceCode);

    console.log(`Data saved to ${filename} test1`);

    const mocha = new Mocha();
    mocha.addFile('test/temp.test.js');

    return new Promise((resolve) => { //resolve -> return value, reject -> throw error 
      mocha.run( (failures) => {   //mocha.run msh by-run fe sa3tha 3shan bakhod call back function byt3mlha run lma el test ykhlas. El failures parameters lel call back function
        if (failures > 0) {
          console.log('Tests failed');
          resolve(false);
        } else {
          console.log('All tests passed');
          resolve(true);
        }
      });
    })
  }
  catch (err) {
    console.log(err);
  }
};

module.exports.testCodeService2 = async (codeInfo) => {
  try {
    const filename = `temp.js`;
    const sourceCode = codeInfo.sourceCode;
    await writeFileAsync(filename, sourceCode);

    console.log(`Data saved to ${filename}`);

    const mocha = new Mocha();
    mocha.addFile('test/temp2.test.js');

    return new Promise((resolve) => { //resolve -> return value, reject -> throw error 
      mocha.run( (failures) => {   //mocha.run msh by-run fe sa3tha 3shan bakhod call back function byt3mlha run lma el test ykhlas. El failures parameters lel call back function
        if (failures > 0) {
          console.log('Tests failed');
          resolve(false);
        } else {
          console.log('All tests passed');
          resolve(true);
        }
      });
    })
  }
  catch (err) {
    console.log(err);
  }
};

module.exports.testCodeService3 = async (codeInfo) => {
  try {
    const filename = `temp.js`;
    const sourceCode = codeInfo.sourceCode;
    await writeFileAsync(filename, sourceCode);

    console.log(`Data saved to ${filename}`);

    const mocha = new Mocha();
    mocha.addFile('test/temp3.test.js');

    return new Promise((resolve) => { //resolve -> return value, reject -> throw error 
      mocha.run( (failures) => {   //mocha.run msh by-run fe sa3tha 3shan bakhod call back function byt3mlha run lma el test ykhlas. El failures parameters lel call back function
        if (failures > 0) {
          console.log('Tests failed');
          resolve(false);
        } else {
          console.log('All tests passed');
          resolve(true);
        }
      });
    })
  }
  catch (err) {
    console.log(err);
  }
};