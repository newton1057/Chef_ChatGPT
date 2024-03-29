import express from "express";
import OpenAI from "openai";
import dotenv from 'dotenv';
import { default as twilio } from 'twilio';
dotenv.config();

const app = express();
const PORT = 3000;


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Replace with your OpenAI API key
});

app.use(express.json());


app.post('/getRecipe', async (req, res) => {
    const datos = req.body; // Accede a los datos JSON enviados en la solicitud
    
    if (datos.length == undefined) {
        console.log("No se ha recibido ningun ingrediente para la receta ❌");
        res.status(400).json({ mensaje: 'No se ha recibido ningun ingrediente para la receta' });
        return;
    }
    else{

        // Haz algo con los datos, por ejemplo, responde con una confirmación
        var ingredients = "ingredientes: ";

        for (let i = 0; i < datos.length; i++) {
            const ingredient = datos[i].ingredient;
            //console.log(ingredient);
            if (i == 0) {
                ingredients = ingredients + ingredient;
                continue;
            }else if (i == datos.length-1) {
                ingredients = ingredients + " y " + ingredient;
                continue;
            } else {
                ingredients = ingredients + ", " + ingredient;
                continue;
            }
        }

        var Recipe = "Realiza una receta solo con los siguientes ";
        Recipe = Recipe + ingredients;

        const messages = [{ role: "system", content: Recipe}];

        const openaiResponse = await openai.chat.completions.create({
            messages,
            model: 'gpt-3.5-turbo',
        });


        

        const Response_OpenAI = openaiResponse.choices[0];
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

        const message = await client.messages.create({
            body: Response_OpenAI.message.content,
            from: "whatsapp:+14155238886",
            to: 'whatsapp:+5219983868530'
        });
        console.log("Receta recibida y enviada ✅");
        res.json({ mensaje: 'Datos recibidos correctamente', datos , Response_OpenAI});
    }
    
  });

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en http://localhost:${PORT}`);
});
