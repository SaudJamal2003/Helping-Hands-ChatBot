import './App.css';
import { useState } from 'react';
import ChatComp from './ChatComp.js'
// import ReplyComp from './ReplyComp.js'
// import axios from 'axios'

function App() {
  const[query, setQuery] = useState([{
    message:'',
    reply: ''
  }]);

  //using Axios
  // const handleApi = async () => {
  //   console.log("Loading...")
  //    const response = await axios({
  //     url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCrdMXrhyxQVrPKrPkbcM_0qtN_8dw25hc",
  //     method: "post",
  //     data: {
  //       contents: [
  //         { parts: [{ text: "Write a story about a magic backpack" }] },
  //       ],
  //     },
  //    });
  //    console.log(response)
  //   } 

  //   const data = {
  //     contents: [
  //       { parts: [{ text: query }] },
  //     ]
  //   }
  const handleMessage = () =>{
    setQuery([...query, { message: input, reply:''}]);
  }

    // const handleApiFetch = async () => {
    //   console.log("Loading...")

    //   fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCrdMXrhyxQVrPKrPkbcM_0qtN_8dw25hc", {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       contents: [
    //         { parts: [{ text: input }] },
    //       ]
    //     })
    //   })
    //   .then((response)=>response.json())
    //   .then((data)=>{
    //     console.log(data.candidates[0].content.parts[0].text)
    //     setQuery([...query, { message: input, reply: data.candidates[0].content.parts[0].text }]);
    //     setInput('')
    //   })
    //   .catch((error) => {
    //     console.log('Error: ', error)
    //   })
    // }

    // const handleSend = () => {
    //   handleMessage();
      
    //   setTimeout(()=>{
    //     handleApiFetch();
    //   },0)
    // }

    const[input, setInput] = useState('');

    const InputHandler = (e) => {
      setInput(e.target.value)
    }

    const BotResponse = async () => {
      console.log("BotResponse")
      console.log(input)
      fetch('http://localhost:3002/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({input}),
      })
      .then((response)=>response.json())
      .then((data => {
        console.log(data)
        console.log(data.messageResponse)
        setQuery([...query, { message: input, reply: data.messageResponse}]);
        setInput("")
      }))
      .catch((error)=>{
        console.log("Error", error)
      }) 
    }

     const handleSend = () => {
      handleMessage();
      BotResponse();
    }


  return (
    <>
    <div className='full'>
      <div className='textDiv'>
        <h2>Meet Sam, Your Helping Hands Chatbot!</h2>
        <p>Welcome to Helping Hands! I’m Sam, your virtual assistant here to guide you through our donation website. Whether you have questions about how to make a donation, navigate our site, or learn more about the organizations we support, I’m here to help. Simply type your question, and I’ll provide the information you need to make your experience smooth and fulfilling. Let’s work together to make a difference!</p>
        <p>Here’s what I can help you with:</p>
          <ul> Making Donations: Need help with donating money, food, or clothes? Just ask, and I’ll walk you through the process.</ul>
          <ul>Navigating the Website: Unsure where to find information or how to complete a task? I can direct you to the right place.</ul>
          <ul>Understanding Our Services: Curious about how Helping Hands works or the impact of your contributions? I can provide you with all the details.</ul>
        <p>My goal is to make your experience as smooth and fulfilling as possible. Feel free to ask me anything or let me know if you need assistance. Together, we can make a difference in our community!
        </p>
      </div>

      <div className='mainChat'>
        <div className='form'>
          <input type='text' name='message' placeholder='Enter your question here...' value={input} onChange={InputHandler}/>
          <button onClick={handleSend}>🕊️</button>
        </div>

        <div className='chatBox'>
          <div>
            {query.map((item, index) => (
              <div>
                <ChatComp key={index} msg={item.message} rply={item.reply}/>
              </div>
            ))}
          </div>
        </div>

        <h2>Ask your Queries here</h2>
      </div>

      <div className='boxIcons'>
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', borderColor: 'white'}}><path d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z"></path></svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" ><path d="m12.223 11.641-.223.22-.224-.22a2.224 2.224 0 0 0-3.125 0 2.13 2.13 0 0 0 0 3.07L12 18l3.349-3.289a2.13 2.13 0 0 0 0-3.07 2.225 2.225 0 0 0-3.126 0z"></path><path d="m21.707 11.293-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707zM18.001 20H6v-9.585l6-6 6 6V15l.001 5z"></path></svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path d="M20 3H4a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.72V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.72A2 2 0 0 0 22 7V5a2 2 0 0 0-2-2zM4 5h16v2H4zm1 14V9h14v10z"></path><path d="M8 11h8v2H8z"></path></svg>
      </div>
    </div>
    </>
  );
}

export default App;
