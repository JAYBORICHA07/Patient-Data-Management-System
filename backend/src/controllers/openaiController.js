// import openai from "../config/openaiConfig.js"

// const generateDescription = async (req, res) => {

//     const { Symptoms }= req.body 

//     const chatCompletion = await openai.chat.completions.create({
//         messages: [{ role: "user", content: Symptoms }],
//         model: "gpt-3.5-turbo",
//     });
//     res.json({ suggestion: chatCompletion.choices[0].message.content})
//     console.log(chatCompletion.choices[0].message)
// }
// export default generateDescription;