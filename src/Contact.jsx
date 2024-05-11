import { useNavigate } from "react-router-dom"
const Contact = () => {
  const navigate=useNavigate()
  const gotoHome=()=>{
    navigate("/")
  }
  return (
    <>
    {/* <Header/> */}
    <section>
      <h1>Contact Page</h1>
      <button onClick={()=>gotoHome()}>go to Home</button>
    </section>
    </>
  )
}

export default Contact