# API para uso de ChatGPT 🤖 como Chef 🧑‍🍳

### Instalación del Server Express JS
- Clona este repositorio: `git clone <URL del repositorio>`
- Instala las dependencias: `npm install`

### Configuración del entorno
Crea un archivo .env en la raíz del proyecto y agrega tu clave de API de OpenAI:
`OPENAI_API_KEY=TU_CLAVE_DE_API`

### Uso de la API
- Inicia el servidor: `npm start`
- Envía una solicitud POST a `http://localhost:3000/getRecipe` con un array JSON de ingredientes.

### Ejemplo de los datos mandados Array JSON
```
[
  {
    "ingredient": "Huevo"
  },
  {
    "ingredient": "Leche"
  },
  {
    "ingredient": "Jamon"
  }
]
```
### Respuesta esperada
```
{
  "mensaje": "Datos recibidos correctamente",
  "datos": [
    {
      "ingredient": "Huevo"
    },
    {
      "ingredient": "Leche"
    },
    {
      "ingredient": "Jamon"
    }
  ],
  "Response_OpenAI": {
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "Tortilla de jamón y queso con leche\n\nIngredientes:\n- 4 huevos\n- 1/4 de taza de leche\n- 100 gramos de jamón picado\n- Sal y pimienta al gusto\n- Aceite para freír\n\nInstrucciones:\n1. En un tazón, batir los huevos junto con la leche hasta que estén bien mezclados. Agregar sal y pimienta al gusto.\n2. Calentar una sartén a fuego medio y agregar un poco de aceite.\n3. Verter la mezcla de huevos en la sartén caliente y cocinar durante unos minutos hasta que los bordes estén cuajados.\n4. Espolvorear el jamón picado sobre la mitad de la tortilla y doblarla por la mitad, de manera que el jamón quede en el interior.\n5. Cocinar la tortilla por unos minutos más, volteándola con cuidado, hasta que esté dorada por ambos lados y el interior esté cocido.\n6. Retirar del fuego y dejar reposar durante unos minutos antes de servir.\n7. Cortar la tortilla en porciones y disfrutar caliente.\n\n¡Bon appetit!"
    },
    "finish_reason": "stop"
  }
}
```
