import { motion } from "framer-motion";

function About (props){
  return (
    <div className='top'>
      <header>
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.9,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
      }}
       >
        <img className="hero-img" src="images/hero-image.jpg" alt="Jessica Casillas in Papago Park on a cloudy day" />
          <h1>My name is Jessica,<br />
              a UI/UX Designer & Web Developer
          </h1>
      </motion.div>
          
      </header>
      <div className='about'>
        <h1>About Me</h1>
        <p>
          I'm a UI/UX Designer and Frontend Web Developer living in Phoenix, AZ. I come from a diverse background but I've always been interested in design and technology. I've been involved in the arts from an early age and I enjoy expressing myself through digital photography and graphic design. As a Web Developer, I've built websites for full-service digital promotions, rebates and loyalty programs. Some of the brands I've worked with include Miller Coors, McDonalds, Pepsi, General Mills, Lowe's, Starbucks, Amex, Hershey's and Amazon to name a few.
          When it comes to work, I want to be involved in projects I find challenging with people that inspire me.
        </p>
      </div>
    </div>
  );
}
export default About;