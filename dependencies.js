//require
const { exec } = require('child_process');
//path is needed to do correct installation of --prefix
const path = require("path");
console.log("===Instalando dependencias===");
// Use the space inside execute to add the necessary dependencies.
// The example dependency is the mocha testing framework, which will be installed when running this program. If not, just configure your exec by installig or uninstalling the necessary dependencies.
exec(`npm init -y && npm install -save-dev mocha --prefix ${path.resolve(process.cwd())}`, (error, stdout, stderr) => {
  if(error) {
    console.log(`error: ${error.message}`);
    return
  } 
  if (stderr) {
    console.log(`stderr: ${stderr}`);
  } 
  console.log("===Tudo pronto para começar==="); 
});