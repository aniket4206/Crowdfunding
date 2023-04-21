import { setGlobalState } from '../store'
import { BsPlusLg,BsFillChatRightDotsFill } from 'react-icons/bs'
// import { TbMessageChatbot } from 'react-icons/tb'


const AddButton = () => {
  return (
    <div className="fixed right-10 bottom-10 flex space-x-2 justify-center">
      <button
        type="button"
        className="flex justify-center items-center w-9 h-9 bg-teal-700
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-teal-800"
        onClick={() => setGlobalState('createModal', 'scale-100')}
      >
        <BsPlusLg className='font-bold' size={20} />
      </button>
      <button
        type="button"
        className="flex justify-center items-center w-20 h-9 bg-teal-700
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-teal-800"
        onClick={() => setGlobalState('chatModal', 'scale-100')}
      >
        <BsFillChatRightDotsFill className='font-bold' size={20} /><h1 className="text-white font-medium text-ms p-1.5">CHAT</h1>
      </button>
    </div>
  )
}

export default AddButton
