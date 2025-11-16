const fs = require('fs').promises; 
const readline = require('readline'); 

// Creates an interface to read input from the console.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const askQuestion = (query) => {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
};


const isCamelCase = (varName) => {
  // This regex checks for a lowercase start, followed by zero or more alphanumeric characters
  const camelCaseRegex = /^[a-z]+([A-Z][a-z0-9]*)*$/;
  return camelCaseRegex.test(varName);
};


const findNonCamelCaseVars = (fileContent) => {
  // This Set will store unique variable names that violate the rule
  const nonCamelCaseVars = new Set();

  // This regex finds variable declarations (const, let, var) and captures the declared variable names
  const declarationRegex = /\b(?:const|let|var)\s+((?:[a-zA-Z0-9_]+)(?:\s*,\s*[a-zA-Z0-9_]+)*)/g;

  let match;
  while ((match = declarationRegex.exec(fileContent)) !== null) {
    // Get the captured variable names
    const varList = match[1];

    // Split comma-separated variables and check each one
    const variables = varList.split(',').map(name => name.trim());

    for (const varName of variables) {
      if (varName && !isCamelCase(varName)) {
        nonCamelCaseVars.add(varName);
      }
    }
  }

  return Array.from(nonCamelCaseVars);
};


const main = async () => {
  let filePath;
  try {
    // 1. Get file path from user
    filePath = await askQuestion('Please enter the path to the JavaScript file: ');

    // 2. Read the file content
    const fileContent = await fs.readFile(filePath, 'utf8');

    // 3. Analyze the file content
    const nonCamelCase = findNonCamelCaseVars(fileContent);

    // 4. Report the results
    if (nonCamelCase.length === 0) {
      console.log('\n All variable declarations appear to use camelCase. Great job!');
    } else {
      console.log('\n Found variable declarations that are not in camelCase:');
      nonCamelCase.forEach(varName => {
        console.log(`  - ${varName}`);
      });
    }

  } catch (error) {
    // Handle errors
    if (error.code === 'ENOENT') {
      console.error(`\n Error: File not found at path: ${filePath}`);
    } else {
      console.error('\n An error occurred:', error.message);
    }
  } finally {
    // 5. Always close the readline interface
    rl.close();
  }
};

// Run the main function
main();