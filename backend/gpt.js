import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "user",
      "content": "hi"
    },
    {
      "role": "assistant"
    }
  ],
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

console.log(res)