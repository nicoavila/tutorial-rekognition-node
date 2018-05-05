const AWS = require('aws-sdk');
const dotenv = require('dotenv').config();
const fs = require('fs');

//Creación y configuración de instancia de AWS Rekognition
const rekognition = new AWS.Rekognition({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: '2016-06-27'
});

//Lee la imagen, la convierte a Buffer y prepara el objeto
const file_name = 'imagen1.jpg';
const bitmap = fs.readFileSync(`./input/${file_name}`);
let image = {
  Image: {
    Bytes: new Buffer(bitmap)
  },
  Attributes: ['ALL']
}

//Llama al método detectFaces
rekognition.detectFaces(image, (error, data) => {
  if (error) {
    throw new Error(error);
  }
  data.FaceDetails.forEach((response) => {
    let maxConfidence = response.Emotions.reduce((a, b) => b.Confidence > b.Confidence ? b : a);
    let emotionName = '';
    switch (maxConfidence.Type) {
      case 'HAPPY':
        emotionName = 'ALEGRÍA';
      break;

      case 'SAD':
        emotionName = 'PENA';
      break;
      
      case 'ANGRY':
        emotionName = 'ENOJO';
      break;
      
      case 'CONFUSED':
        emotionName = 'CONFUSIÓN';
      break;
      
      case 'DISGUSTED':
        emotionName = 'DISGUSTO';
      break;
      
      case 'SURPRISED':
        emotionName = 'SORPRESA';
      break;
      
      case 'CALM':
        emotionName = 'CALMA';
      break;

      case 'UNKNOWN':
        emotionName = 'DESCONOCIDA';
      break;

      default:
        emotionName = 'DESCONOCIDA';
      break;
    }
    console.log(`La emoción predominante en la imágen es ${emotionName} con un grado de seguridad de ${maxConfidence.Confidence}`);
  });
});
