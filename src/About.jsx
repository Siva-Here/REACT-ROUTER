import { useNavigate } from "react-router-dom"
const About = () => {
  const navigate=useNavigate()
  const gotoContact=()=>{
    navigate('/contact')
  }
  const goBack=()=>{
    navigate(-1)
  }
  return (
    <>
    {/* <Header/> */}
    <section>
      <h1>About Page</h1>
    </section>
    <button onClick={()=>gotoContact()}>go to Contact</button>
    <button onClick={()=>goBack()}>goBack</button>
    </>
  )
}

export default About