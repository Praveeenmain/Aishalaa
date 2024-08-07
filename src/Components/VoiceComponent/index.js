import './index.css'
import { FaChevronRight } from "react-icons/fa";
const VoiceBox=()=>{
    return(
         <div className="Voice-box-container">
            <h1 className="Voice-header"> AI Assistant for Teachers and Students</h1>
            <p className='Voice-paragraph'> Experience the future of education with Aishaala Conversational AI, <br/>a personalized assistant designed to enhance learning for teachers and students.

</p>
            <div class="mic">
            <i class="mic-icon"></i>
            <div class="mic-shadow"></div>
            <button className='give-me-try'> Click to Talk</button>
            </div>
           
              <div className='try-get-buttons'>
                <button className='try-button'> Try For Free</button>
             
                <button className='Get-in-button'> Get in Touch <FaChevronRight className='arrow' /> </button>
              </div>


         </div>
    )
}
export default VoiceBox