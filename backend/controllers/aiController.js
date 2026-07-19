const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateDescription = async (req, res) => {
  try {
    const { productName, material, category } = req.body;

    if (!productName || !material || !category) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: `
Write a professional e-commerce product description.

Product Name: ${productName}
Material: ${material}
Category: ${category}

Requirements:
- Around 100 words
- Attractive
- SEO friendly
- Mention craftsmanship
- End with a call to action.
          `,
        },
      ],
    });

    return res.status(200).json({
      success: true,
      description: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { generateDescription };