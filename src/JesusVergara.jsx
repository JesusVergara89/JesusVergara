import jesus from './images/jesus.jpg'
import sn1 from './images/1.jpeg'
import sn2 from './images/2.jpeg'
import sn3 from './images/3.jpeg'
import sn4 from './images/4.jpeg'
import sn5 from './images/5.jpeg'
import sn6 from './images/6.jpeg'

import sn1p from './images/1p.jpeg'
import sn2p from './images/2p.jpeg'
import sn3p from './images/3p.jpeg'
import sn4p from './images/4p.jpeg'
import sn5p from './images/5p.jpeg'
import sn6p from './images/6p.jpeg'
import sn7p from './images/7p.jpeg'
import sn8p from './images/8p.jpeg'

import ss1p from './images/1s.jpeg'
import ss2p from './images/2s.jpeg'
import ss3p from './images/3s.jpeg'
import ss4p from './images/4s.jpeg'


function App() {

  return (
    <div className="portafolio">

      <header>
        <br />
        <br />
        <h1>Jesus Manuel Vergara</h1>
        <br />
        <br />
        <br />
        <br />
        <p>Welcome to my portfolio. Here you can find some of my projects and learn more about me.</p>
        <br />
        <br />

      </header>

      <main>
        <section>
          <h2>About Me</h2>
          <p>I am a mechatronics engineer passionate about programming and creating designs in the form of websites. I enjoy exploring different programming languages and discovering the possibilities they offer. My goal is to combine my technical and creative skills to develop innovative and functional solutions in web design.</p>
          <h2>Technologies I specialize in</h2>
          <div className='technologies'>
            <div className="technologies-item">
              <h5>React</h5>
              <i className='bx bxl-react'></i>
            </div>
            <div className="technologies-item">
              <h5>Javascript</h5>
              <i className='bx bxl-javascript' ></i>
            </div>
            <div className="technologies-item">
              <h5>HTML</h5>
              <i className='bx bxl-html5' ></i>
            </div>
            <div className="technologies-item">
              <h5>CSS</h5>
              <i className='bx bxl-css3' ></i>
            </div>
            <div className="technologies-item">
              <h5>Typescript</h5>
              <i className='bx bxl-typescript' ></i>
            </div>
            <div className="technologies-item">
              <h5>WordPress</h5>
              <i className='bx bxl-wordpress' ></i>
            </div>
            <div className="technologies-item">
              <h5>Shopify</h5>
              <i className='bx bxl-shopify' ></i>
            </div>
            <div className="technologies-item">
              <h5>Firebase</h5>
              <i className='bx bxl-firebase' ></i>
            </div>
            <div className="technologies-item">
              <h5>Git</h5>
              <i className='bx bxl-git'></i>
            </div>
            <div className="technologies-item">
              <h5>Github</h5>
              <i className='bx bxl-github' ></i>
            </div>
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Design and construction of the social network - Social</h3>
              <p>"Social" is a social network designed and built to offer users an interactive and dynamic platform to connect, share content, and communicate online. With a focus on usability and user experience, this social network provides a wide range of features and functionalities to meet the needs of its users.</p>
              <p><span>Features:</span></p>
              <ul>
                <li><span>Account registration:</span> Users can easily create an account on "Social" by providing basic information and a valid email address.</li>
                <li><span>User profile:</span> Each user has a personalized profile where they can add details about themselves, including a profile picture and a brief biography.</li>
                <li><span>Posting multimedia content:</span> Users can share photos and videos with their followers, allowing them to express themselves and share important moments from their lives.</li>
                <li><span>Social interaction:</span> Users can make posts on their news feed, comment on other users' posts, and like content they find interesting.</li>
                <li><span>Connection and friend search:</span> "Social" allows users to search for and connect with friends, colleagues, and family members, as well as send and receive friend requests.</li>
                <li><span>Instant messaging:</span> The platform offers real-time instant messaging, allowing users to privately communicate with friends and followers.</li>
              </ul>
              <div className="container-media-project">
                <img src={sn1} alt="" />
                <img src={sn2} alt="" />
                <img src={sn3} alt="" />
                <img src={sn4} alt="" />
                <img src={sn5} alt="" />
                <img src={sn6} alt="" />
              </div>
              <br />
              <br />
              <br />
              <a href="https://socialv01.netlify.app/" target="_blank" rel="noopener noreferrer">View project: Social</a>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </li>
            <li>
              <h3>Design and construction of the university newspaper Unibarranquillanewspaper</h3>
              <p>The "Unibarranquillanewspaper" project is a digital university newspaper designed and built for the university community and the general public. This newspaper is composed of users, each with their own access credentials, and each user is responsible for a specific section of the newspaper.</p>
              <p><span>Features:</span></p>
              <ul>
                <li><span>User management:</span> The newspaper allows the creation of user accounts for collaborators, who have individualized access to their assigned section. Each user can delete and edit only their own articles, ensuring editorial autonomy and responsibility.</li>
                <li><span>Thematic sections:</span> Each section of the newspaper is dedicated to news, articles, and relevant topics related to science, technology, society, and university life. This ensures broad and diverse coverage of topics of interest to the university community and the general public.</li>
                <li><span>Content publication:</span> Collaborators can publish news, articles, and multimedia content in their respective sections, allowing for regular updates to the newspaper with relevant and timely information.</li>
                <li><span>Interaction and participation:</span> Readers have the ability to interact with the newspaper's content through comments, sharing on social networks, and participating in surveys and debates, thus fostering active participation from the community in the newspaper.</li>
                <li><span>LaTeX support:</span> The newspaper is compatible with the LaTeX format, allowing collaborators to include high-degree mathematical equations in their articles and publications. This facilitates the precise and professional presentation of scientific and technical content.</li>
                <li><span>Community blog:</span> In addition to thematic sections, the project features a blog where the community can express opinions, comment, and express themselves freely on various topics of interest. This promotes the exchange of ideas and active participation from the university community.</li>
              </ul>
              <div className="container-media-project-unibarranquilla">
                <img src={sn1p} alt="" />
                <img src={sn2p} alt="" />
                <img src={sn3p} alt="" />
                <img src={sn4p} alt="" />
                <img src={sn5p} alt="" />
                <img src={sn6p} alt="" />
                <img src={sn7p} alt="" />
                <img src={sn8p} alt="" />
              </div>
              <br />
              <br />
              <br />
              <a href="https://unibarranquilla-newspaper.netlify.app/" target="_blank" rel="noopener noreferrer">View project: Unibarranquillanews</a>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </li>

            <li>
              <h3>Design and construction of a web application for calculating budgets for photovoltaic installations.</h3>
              <p>The BarmexApp project, a web application designed to generate budgets for photovoltaic installations using only the monthly electricity bill. Our platform simplifies the process of calculating the cost, allowing users to make informed decisions about the implementation of photovoltaic systems.</p>
              <p><span>Features:</span></p>
              <ul>
                <li><span>Invoice Analysis:</span> Enter simple data from your monthly electricity bill into our platform to start the analysis.</li>
                <li><span>Budget Generation:</span> Get a detailed budget for the installation of a photovoltaic system based on your monthly electricity consumption.</li>
                <li><span>Customization of Configurations:</span> Customize the characteristics of the photovoltaic system, such as capacity and location, to obtain accurate estimates.</li>
              </ul>
              <div className="container-media-project-solarapp">
                <img src={ss1p} alt="" />
                <img src={ss2p} alt="" />
                <img src={ss3p} alt="" />
                <img src={ss4p} alt="" />
              </div>
              <br />
              <br />
              <br />
              <a href="https://barmexapp.netlify.app/" target="_blank" rel="noopener noreferrer">View project: BarmexApp</a>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </li>

          </ul>
        </section>
      </main>

      <div class="experience">
        <h2>Work experience</h2>
        <div class="job">
          <h3>Front End developer</h3>
          <p><strong>Company:</strong> Digitraffic</p>
          <p><strong>Dates:</strong> Jan/2022 - Nov/2023</p>
          <p><strong>Description:</strong> As a Frontend Developer, my main responsibility was to develop custom web pages, adhering to designs provided and using technologies like React. Additionally, I managed code versions using tools like Git, and performed CRUD (Create, Read, Update, Delete) operations to ensure application functionality. I worked efficiently under pressure to meet deadlines and deliver high-quality products in a dynamic and demanding environment.</p>
        </div>
        <div class="job">
          <h3>Front End developer</h3>
          <p><strong>Company:</strong> Barmex Energy</p>
          <p><strong>Dates:</strong> Jun/2020 - Dec/2021</p>
          <p><strong>Description:</strong> As a Frontend Developer, my main responsibility was to develop custom web pages, adhering to designs provided and using technologies like React. Additionally, I worked collaboratively within a team environment on various projects, including BarmexApp. I managed code versions using tools like Git to ensure efficient collaboration and application stability. Excelling under pressure, I consistently met deadlines and delivered high-quality products in a dynamic and demanding environment.</p>
        </div>
      </div>
      <img className='profile-img' src={jesus} alt="" />
      <footer>
        <p>Contact me: jesusmanuelv1989@gmail.com</p>
        <p>Follow me on social media: <a href="https://github.com/JesusVergara89" target="_blank" rel="noopener noreferrer">github</a>, <a href="https://www.linkedin.com/in/jesus-manuel-vergara-975799216/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </footer>
    </div>
  )
}

export default App
