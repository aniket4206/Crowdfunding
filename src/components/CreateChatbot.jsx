import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { toast } from 'react-toastify'
// import { createChatbot } from '../services/blockchain'
import { useGlobalState, setGlobalState } from '../store'
import { createChatbot } from '../services/blockchain'
import ChatBot from "react-simple-chatbot"
import { ThemeProvider } from "styled-components";

const CreateChatbot = () => {
    const theme = {
        background: "#f5f8fb",
        fontFamily: "Ubuntu",
        // headerBgColor: "#329aba",
        // headerFontColor: "#fff",
        // headerFontSize: "16px",
        botBubbleColor: "#377b7d",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#504f60",

      };      
  const [chatModal] = useGlobalState('chatModal')
//   const [title, setTitle] = useState('')
//   const [description, setDescription] = useState('')
//   const [cost, setCost] = useState('')
//   const [date, setDate] = useState('')
//   const [imageURL, setImageURL] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if (!title || !description || !cost || !date || !imageURL) return

    // const params = {
    //   title,
    //   description,
    //   cost,
    //   expiresAt: toTimestamp(date),
    //   imageURL,
    // }

    await createChatbot(params)
    toast.success('Project created successfully, will reflect in 30sec.')
    onClose()
    window.location.reload()
  }

  const onClose = () => {
    setGlobalState('chatModal', 'scale-0')
    reset()
  }

  const steps = [
      {
        id: "BetterFund Chat",
        message: "Hello, I am BetterFund Bot. Your virtual assistant.",
        trigger: "Ask name",
      },
      {
        id: "Ask name",
        message: "Please enter your name before we proceed...",
        trigger: "waiting1",
      },
      {
        id: "waiting1",
        user: true,
        trigger: "Name",
      },
      {
        id: "Name",
        message: "Hi {previousValue}, please select what your doubt:",
        trigger: "issues",
      },
      {
        id: "issues",
        options: [
          {
            value: "BetterFund",
            label: "What is BetterFund",
            trigger: "BetterFund",
          },
          { value: "Benefit", label: "Benefits.", trigger: "Benefit" },
          { value: "transparency", label: "transparency and accountability in crowdfunding", trigger: "transparency" },
          { value: "campaign", label: "Examples", trigger: "campaign" },
          { value: "security", label: "security measures", trigger: "security" },
          { value: "fraud", label: "How can blockchain technology prevent fraud and mitigate risks in crowdfunding campaigns?", trigger: "fraud" },
        ],
      },
      {
        id: "BetterFund",
        message:
          "A decentralized donation platform is a platform that utilizes blockchain technology to enable peer-to-peer transactions without the need for a centralized intermediary. This means that donors can send funds directly to recipients, without the involvement of a third-party such as a bank or a payment processor.",
        trigger: "issues",
      },
      {
        id: "Benefit",
        message:
          "Using blockchain technology for crowdfunding offers several benefits, such as increased transparency, improved security, reduced intermediary fees, enhanced traceability of funds, and increased accessibility for global participants. Blockchain also enables the use of smart contracts, which can automate crowdfunding campaigns and ensure that funds are released only when predefined conditions are met.",
        trigger: "issues",
      },
      {
        id: "transparency",
        message:
          "Blockchain technology provides transparency in crowdfunding by recording all transactions on a decentralized and immutable ledger that can be audited and verified by all participants. This ensures that the flow of funds and rewards can be traced and verified, promoting accountability among fundraisers and backers. Smart contracts on the blockchain can also define the rules and conditions for fund release, ensuring transparency and accountability in the crowdfunding process.",
        trigger: "issues",
      },
      {
        id: "campaign",
        message:"There are several successful crowdfunding campaigns that have utilized blockchain technology. One example is the crowdfunding campaign for the blockchain-based virtual reality platform, Decentraland, which raised over $26 million. Another example is the crowdfunding campaign for the blockchain-based social media platform, Steemit, which raised over $1.3 million.",
        trigger: "issues",
      },
      {
        id: "fraud",
        message:"Blockchain technology can prevent fraud and mitigate risks in crowdfunding campaigns through its transparent and immutable nature. All transactions on the blockchain are recorded and verified, making it difficult to manipulate or alter the data. Additionally, smart contracts can be used to define the rules and conditions.",
        trigger: "issues",
      },
      {
        id: "security",
        message:"Blockchain technology can prevent fraud and mitigate risks in crowdfunding campaigns through its transparent and immutable nature. All transactions on the blockchain are recorded and verified, making it difficult to manipulate or alter the data. Additionally, smart contracts can be used to define the rules and conditions.",
        trigger: "issues",
      },
    ];
  

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex
    items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 ${chatModal}`}
    >
      <div
        className="bg-white shadow-xl shadow-black
        rounded-xl w-12/12 md:w-2/6 h-7/12 p-9"
      >
          <div className="flex justify-between items-center">
          <p className="font-semibold text-sky-600">BetterFund ChatBot</p>
            <button
              onClick={onClose}
              type="button"
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          
            {/* <p className="font-semibold text-lg text-sky-900"></p> */}
          </div>
          <div className="flex justify-center items-center mt-5">
          <ThemeProvider theme={theme} >
          <ChatBot
            headerTitle=""
            speechSynthesis={{ enable: false, lang: "en" }}
            steps={steps} /> 
            </ThemeProvider>
          </div>
          </div>

      </div>
  )
}

export default CreateChatbot
