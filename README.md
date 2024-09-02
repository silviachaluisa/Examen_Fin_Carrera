NOTION: https://byronloarte.notion.site/API-RESTFul-Veterinary-management-96cdc88fd24f406786ce9771f582cfa6#abd020be5788455d8426ab13f338b32d

## BACKEND
1) Ejecutar dentro del Backend npm init --y, para que se instale package.json y ahi dentro insertar el "type": "module" debajo de version
2) Instalar las dependencias: npm i express bcryptjs mongoose dotenv nodemailer jsonwebtoken cors
3) Crear los directorios con mdkdir src, luego cd src,"config","controllers",”helpers”,”middlewares”,”models”,”routers” | %{New-Item -Name “$_” -ItemType “Directory”}
4) Fuera del directorio src, crear New-Item -ItemType File database.js, index.js, server.js, .env, .env.example, .gitignore
   ![image](https://github.com/user-attachments/assets/61ccf1f7-6489-42e4-86fa-9d5dd768c018)



## EXTRAS:
silviaveronica141998
5WniPDE2JuVqEL7o

191.99.41.147

mongodb+srv://silviaveronica141998:5WniPDE2JuVqEL7o@cluster0.ektll.mongodb.net/

mongodb+srv://silviaveronica141998:5WniPDE2JuVqEL7o@cluster0.ektll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


Sprint 1 Módulo-Usuario
Tareas:
* Endpoint para registro
Para cumplir está tarea se debe realizar las siguientes actividades:
- Creación del modelo
- Creación de rutas
- Métodos del controlador
- Registros y envío de email


* Endpoint para inicio de sesión


TOKEN:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Y2QwMWM5ZWY5YjNmMTg3NzBlNDJiMSIsInJvbCI6InVzdWFyaW8iLCJpYXQiOjE3MjQ3MTY3MjIsImV4cCI6MTcyNDgwMzEyMn0.SBTz7px0lE4PU6BVzb0ylS5pN_z1q-Sm3vSwfr68u3A


USUARIO:
ID:66d00b5f5f737fb9dc286aa0
{
  "email":"silvia@gmail.com",
  "password":"123"
}
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDAwYjVmNWY3MzdmYjlkYzI4NmFhMCIsInJvbCI6IlVzdWFyaW8iLCJpYXQiOjE3MjQ5MTA1MzQsImV4cCI6MTcyNDk5NjkzNH0.eFXM02vFLWqNIfeYFmMJ2nLhnZt50luUZlQ7lqXdL4Q
------------------------------------------------------------

CLIENTE
66cd3959752cfca055996c0c

{
  "cedula":"2745386",
  "nombre":"Lizeth",
  "apellido":"Lopez",
  "ciudad":"Loja",
  "email":"lizeth@gmail.com",
  "direccion":"Quito",
  "telefono":"8935748",
  "fecha_nacimiento":"1998-05-13"
}

___________________________
RESERVA
ID: 66cfe4dc2267d39709fc6e46"
{
  "codigo": 12345,
  "descripcion": "Reserva para el cliente Juan Pérez",
  "cliente": "66cfe36f2267d39709fc6e39", 
  "vehiculo": "66cfe4862267d39709fc6e3f" 
}

____________________-
VEHICULOS:

ID:66d00c3b5f4b49989c091c18

{
  "marca":"Toyota",
  "modelo":"Prado",
  "aniofabricacion":"2006",
  "placa":"PC469",
  "color":"gris",
  "tipo_vehiculo":"familiar",
  "kilometraje":"487567",
  "descripcion":"Cambio de aceite"
}

## PARA PRUEBAS UNITARIAS
![image](https://github.com/user-attachments/assets/94c02aff-d1ca-4a0d-84e3-a3c6226b0b74)

![image](https://github.com/user-attachments/assets/92557e67-9ac9-463f-9ee6-7066a84ae856)


