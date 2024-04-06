import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
    const apiKey="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";
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
   const anotherApiKey="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";
  const fetchChatGPTResponse = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: inputText,
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${anotherApiKey}`,
          },
        }
      );

      setResponseText(response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error fetching ChatGPT response:', error);
      setResponseText('Error fetching response. Please try again later.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchChatGPTResponse();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your message..."
          rows={5}
          cols={50}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <strong>ChatGPT Response:</strong>
        <p>{responseText}</p>
      </div>
    </div>
  );
};

export default ChatGPT;
