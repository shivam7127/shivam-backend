import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;
import cors from 'cors';

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
        id:1,
        title:"A  joke about programming",
        content:"Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
        id : 2,
        titlee:"A joke about JavaScript",
        content:"Why did the JavaScript developer go broke? Because he kept using 'var' and couldn't 'let' his money grow!"
    },
    {
        id : 3,
        title:"A joke about React",
        content:"Why did the React developer break up with his girlfriend? Because she had too many 'props' and not enough 'state'!"
    },
    {
        id : 4,
        title:"A joke about Node.js",
        content:"Why did the Node.js developer go to therapy? Because he had too many 'callback' issues!"
    },
    {
        id : 5,
        title:"A joke about CSS",
        content:"Why did the CSS developer go to the doctor? Because he had too many 'class' issues!"
    }
  ]
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});