# Reconocimiento de emociones con AWS Rekognition y Node
Respositorio con el código utilizado para la publicación *Reconocimiento de emociones con AWS Rekognition y Node*

![Imagen del artículo](http://nicoavila.s3.amazonaws.com/articulos/03_01reconocimiento-emociones-aws-rekognition-node.jpg)

## Instalación

1. Clonar el proyecto
```git clone https://github.com/nicoavila/tutorial-rekognition-node.git```

2. Ejecutar
```cd tutorial-rekognition-node && npm install```

3. Crear un nuevo archivo 
```touch .env```

4. Editar el archivo ```.env``` y agregar el valor correspondiente a las variables presentes en el archivo ```.env.default``` (los pasos para obtener esta información se encuentran presentes en el artículo)
* AWS_ACCESS_KEY
* AWS_SECRET_ACCESS_KEY
* AWS_REGION

5. Iniciar el servidor
```node app.js```

## Sobre el programa

Se ha desarrollado una CLI que utiliza el [SDK de Amazon Web Services para Node](https://aws.amazon.com/es/sdk-for-node-js/) para detectar las emociones presentes en una serie de imágenes presentes en el directorio **input**.
[AWS Rekognition](https://aws.amazon.com/es/rekognition/?nc1=h_ls) permite detectar las siguientes emociones:

* Alegría
* Pena
* Enojo
* Confusión
* Disgusto
* Sorpresa
* Calma

A cada reconocimiento se le asigna una **Puntuación de Confianza**

> La puntuación de confianza es un valor entero que oscila entre 0 y 100 que indica con qué probabilidad una característica ha sido detectada.
