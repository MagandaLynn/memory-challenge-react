import { useEffect, useState } from "react";
import { useSpring } from "react-spring";
import LoginForm from "../users/LoginForm";
import Register from "../users/Register";
import { animated } from "react-spring";
import LearnMore from "../components/LearnMore";

const LoginPage = () => {
    const [toggle,setToggle] = useState(false);
    const animatedStyle = useSpring({
      opacity: toggle ? 1:0,
      transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
      config: {duration: 500}
    })
    useEffect(()=>{
      setToggle(true);
    },[])
    return (
      <animated.div style={animatedStyle} className='text-center'>
        <h1 className='mx-auto'>Memory Techniques</h1>
        <p className="mx-auto" style={{width: '80%'}}>This site is designed to help you learn techniques to enhance your memory. You can use it to keep your memory sharp, impress your friends, or even begin training for a memory championship. <LearnMore />
        </p>
        <LoginForm />
        <Register />
                      
      </animated.div>
    )
  }

export default LoginPage