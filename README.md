##BACKEND
1) Ejecutar dentro del Backend npm init --y, para que se instale package.json y ahi dentro insertar el "type": "module" debajo de version
2) Instalar las dependencias: npm i express bycriptjs mongoose dotenv nodemailer jsonwebtoken cors
3) Crear los directorios con mdkdir src, luego cd src,"config","controllers",”helpers”,”middlewares”,”models”,”routers” | %{New-Item -Name “$_” -ItemType “Directory”}
4) Fuera del directorio src, crear New-Item -ItemType File database.js, index.js, server.js, .env, .env.example, .gitignore
5) 
