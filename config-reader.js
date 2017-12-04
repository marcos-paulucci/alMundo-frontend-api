/**
 * recibe la ruta del archivo de configuración
 */
module.exports = function(configFileName){
    const fs = require('fs');

    //levanto el archivo de configuración
    try
    {
        const configFile = fs.readFileSync(configFileName);
        config = JSON.parse(configFile.toString());
    }
    catch (err)
    {
        console.log(err, "no se pudo abrir el archivo de conifguración\n");
        process.exit();
    }
    return config;
}