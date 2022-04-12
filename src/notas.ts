// PARA INSTALAR TYPESCRIPT
//=====================================================
// Con npm install typescript --save-dev
// Instalas typescript de manera para solo el proyecto
// Y no global, queriendo decir que es como que lo alquilas
//==


//PARA SABER QUE VERSION TENEMOS
//=====================================================
// npx tsc --version
// es para saber que version de typescript descargamos

// BANDERA PARA ANALIZAR Y DAR FEEDBACK TEMPRANO CON TYPESCRIPT
//=====================================================
// @ts-check
//==


// PARA COMPILAR UN ARCHIVO A UNA VERSION ESPECIFICA DE JAVASCRIPT
//=====================================================
// npx tsc ruta/delArchivo --target es6
// hace que el compilador de typescript (tsc)
// convierta el codigo a la version es6 o a la que queramos
//==

// PARA MANDAR NUESTRO CODIGO COMPILADO A UNA CARPETA DIFERENTE
//=====================================================
// npx tsc (ruta de archivos =>)src/*.ts --target (version js =>)es6 --outDir (carpeta =>) dist
//==

// COMO CREAR UN TSConfig.json
//=====================================================
// npx tsc --init
// Tiraria un mensaje asi:

// ...

// Created a new tsconfig.json with:
// module: commonjs
// strict: true
// esModuleInterop: true
// skipLibCheck: true
// forceConsistentCasingInFileNames: true


// You can learn more at https://aka.ms/tsconfig.json

// npx tsc haria que todos los archivos *.ts se compilen
// y
// npx tsc --watch
// hace que mire los cambios en cada archivo de typescript
// y los actualize, es tipo scss

//==
