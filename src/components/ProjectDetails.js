import React from 'react';
import { useLocation } from 'react-router-dom';


function Ipro() {
  return(
    <div>
      <h1>Ipro: Product Authorization Management</h1>
      <p>Ipro's Product Authorization Management Application &#40;PAM&#41; is an internal tool that allows users to authorize software for clients. The tool also allows its users to set expiration dates and send email notifications. As a sales assistant who uses the tool daily, I became interested in improving the applications interface because I often found it confusing to use. The information that PAM displays is extremely valuable but it definitely needs UI improvements.</p>
      <hr />
      <h1>Content Audit</h1>
      <p>Before I began this project, I knew it was very important to have a clear picture of the products current structure. I conducted a full content inventory to assess what changes would be necessary to improve the information architecture and enhance the products functionality.</p>
      <img src="/images/projects/pam/PAMContentAudit.png" alt="Content Audit Chart" />
      <h1>Personas</h1>
      <p>I knew the things I dislikes about the application but I also wanted to hear what the rest of my team thought. I asked other sales assistants how they felt about PAM. Based on their resonses, I created personas based on the average product user.</p>
      <img src="/images/projects/pam/persona-olga.jpg" alt="Persona - Product User - Olga" />
      <img src="/images/projects/pam/persona-tania.jpg" alt="Persona - Product User - Tania" />
      <h1>Low Fidelity Wireframes</h1>
      <img src="/images/projects/pam/all-wireframes.jpg" alt="Wireframes of landing, recent accounts, advanced search and client details view" />
      <p>After their feedback was collected, I created low-fidelity wireframes to map the new applications structure and layout. I knew I didn’t want to change the functionality, my main goal was to improve the way information was displayed while still offering users familiarity with the old design. I was focused on making account searching easier, so I incorporated a new advanced search option that allows users to customize their searching criteria.</p>
      <h1>User Feedback & Final Prototype</h1>
      <p>After my wireframes were created, I went back to my team and collected their feedback. They all agreed the Advanced Search option was a good idea but they disliked the client details page. This section felt way too similar to the old PAM and didn't offer new functionality. I went back to my wireframes and rearranged my design based on their feedback. Once I felt confident in my design, I worked on the final prototype. This time, I tried to address some of the concerns surrounding the Client Details page.</p>
      <h1>Sign In Page</h1>
      <p>The new PAM sign-in interface looks fairly similar to the old design but the user experience has dramatically improved. Now, the user will know exactly what they’re signing in to when visiting the application.</p>
      <img src="/images/projects/pam/signin.jpg" alt="PAM - Signing view" />
      <h1>Searching</h1>
      <p>In my initial wireframe, I created two pages. One for advanced searching the other for recent accounts. Based on our user feedback, I decided to combine both as one page. This gives users the ability to see their recent accounts and search on their desired criteria. Active licenses are still represented with a number under the last column. If the user wants to view more details about the account, they are able to do so by clicking on the company name. This action will take them to the client details page.</p>
      <img src="/images/projects/pam/dashboard.jpg" alt="PAM - dashboard view" />
      <h1>Client Details Page</h1>
      <img src="/images/projects/pam/details.jpg" alt="PAM - Client Details view" />
      <p>The client details page will now show three different sections on top displaying an accounts address, email and notes. All of this information is editable if the Edit Information link is clicked. Below that, we will see a complete list of serial numbers with names and types.</p>
      <h1>Serial Numbers</h1>
      <p>In the past, only one product could be displayed at a time. This made gathering information from multiple licenses very time consuming for the users. Now, license information can be expanded by clicking on the right caret. The expansion will show license count, expiration dates and other details.</p>
      <img src="/images/projects/pam/serialNumbers.jpg" alt="PAM - Serial Number Details view" />
      <h1>Conclusion</h1>
      <p>My approach to this project was to keep things simple and easy to read. I didn’t want a drastic change that would cause confusion to our long term users. I took into consideration my teams input and their pain-points with every change I made. The improvements might’ve been subtle but definitely meaningful.</p>
    </div>
  )
}


function Shop()  {
  return(
    <div>
      <h1>Kawaii Shop &#40;Coming Soon!&#41;</h1>
    </div>
  )
}

function Pirates()  {
  return(
    <div>
      <h1>Pirates Booty: Unlock Your Treasure Sweepstakes</h1>
      <p>For this promotion, the user registers for a chance to win entries for the sweepstakes. The user can win entries by entering key codes found in products, or by clicking the characters on the map. Each week, a new activity opens. The user is able to collect entries and also download various different craft activities. This project was a huge team collaboration. We tackled many visual requests for animations while also ensuring it passed WCAG Level AA compliance. This enabled the site to be accessible to all users. You can visit the promotion <a href="https://unlockyourtreasure.com/" target="_blank" rel="noreferrer" alt="Pirates Booty - Unlock Your Treasure Promotion">here </a>&#40;closes on 8/31/2022&#41;. Below you will find various screenshots and a video that depicts the site features.</p>
      <hr />
      <h1>Age Gate</h1>
      <img src="/images/projects/pirates/ageGate.jpg" alt="Screen shot of Pirtates Booty promotion age gate page" />
      <h1>Landing</h1>
      <img src="/images/projects/pirates/landing.jpg" alt="Screen shot of Pirtates Booty promotion landing page" />
      <h1>Registration</h1>
      <img src="/images/projects/pirates/register.jpg" alt="Screen shot of Pirtates Booty promotion registration page" />
      <h1>Dashboard</h1>
      <img src="/images/projects/pirates/dashboard.jpg" alt="Screen shot of Pirtates Booty promotion dashboard page" />
      <h1>Live Site</h1>

    </div>
  )
}

function Starbucks()  {
  return(
    <div>
      <h1>Starbucks: Baya Energy</h1>
      <p>On this instant win promotion, the user is to register for a chance to win prizes. After their information has been entered, they are directed to click on a wheel to spin. On click, the user will see the wheel spin and land on either a win or lose box. After this is revealed, the user will see a confirmation page and they will also be given the option to share a link to the promotion via Facebook or Twitter. We used both CSS and Javascript for the spinning animation. If you are early, you might be able to see this site live <a href='https://starbucksbayaenergysweeps.com/' target="_blank" rel="noreferrer" alt="Starbucks - BAYA Energy Promotion site">here</a> &#40;closes on 10/14/22&#41;. Otherwise, the site is reflected on the screenshots below.</p>
      <hr />
      <h1>Landing</h1>
      <img src="/images/projects/starbucks/landing.jpg" alt="Screen shot of Starbucks Baya Energy promotion landing page" />
      <h1>Register</h1>
      <img src="/images/projects/starbucks/register.jpg" alt="Screen shot of Starbucks Baya Energy promotion register page" />
      <h1>Spin to Win</h1>
      <img src="/images/projects/starbucks/play.jpg" alt="Screen shot of Starbucks Baya Energy promotion spin to win page" />
      <h1>Animation</h1>

    </div>
  )
  }
  function Pepsi()  {
    return(
      <div>
        <h1>Pepsi Pure Leaf: No Stress Summer</h1>
        <p>On this loyalty program, the user is directed to a dashboard where they can complete different activities to earn more opportunities to win prizes. Some activities include uploading a receipt of their purchase, an on-click instant win reveal, videos, and social share entries. We worked with the Shoppable API for the online store portion of this promotion. This seasonal promotion is no longer live. Below you will find screen shots of the site.</p>
        <hr />
        <h1>Landing</h1>
        <img src="/images/projects/pepsi/landing.jpg" alt="Screen shot of Pure Leaf - No stress summer promotion landing page" />
        <h1>Register</h1>
        <img src="/images/projects/pepsi/register.jpg" alt="Screen shot of Pure Leaf - No stress summer promotion registration page" />
        <h1>Dashboard</h1>
        <img src="/images/projects/pepsi/dashboard.jpg" alt="Screen shot of Pure Leaf - No stress summer promotion landing page" />
      </div>
    )
}

const ProjectIntros = ({ slug }) => {
  switch(slug) {
      case 'ipro':
          return <Ipro />;
      case 'shop':
          return <Shop />;
      case 'pirates':
          return <Pirates />;
      case 'starbucks':
          return <Starbucks />;
      case 'pepsi':
           return <Pepsi />;     
      default:
          return null;
  }
}

<shop/>

const ProjectIntro = () => {
    const projectPath = useLocation();

    return (
      <React.Fragment>
        <div className='project-intro'>
            <ProjectIntros slug={projectPath.pathname.split("/")[2]} />
        </div>
        </React.Fragment>
    );

}; export default ProjectIntro;




