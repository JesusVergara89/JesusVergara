import jesus from './images/jesus.jpeg'
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

function App() {

  return (
    <div className="portafolio">

      <header>
        <h1>Jesus Manuel Vergara</h1>
        <p>Bienvenido a mi portafolio. Aquí puedes encontrar algunos de mis proyectos y aprender más sobre mí.</p>
      </header>

      <main>
        <section>
          <img className='profile-img' src={jesus} alt="" />
          <h2>Sobre Mí</h2>
          <p>Soy ingeniero mecatrónico apasionado por la programación y la creación de diseños en forma de sitios web. Disfruto explorar distintos lenguajes de programación y descubrir las posibilidades que ofrecen. Mi objetivo es combinar mis habilidades técnicas y creativas para desarrollar soluciones innovadoras y funcionales en el diseño web.</p>
          <h2>Tecnologías en donde me especializo</h2>
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
          </div>
        </section>

        <section>
          <h2>Proyectos</h2>
          <ul>
            <li>
              <h3>Diseño y construcción de la red social - Social</h3>
              <p>"Social" es una red social diseñada y construida para ofrecer a los usuarios una plataforma interactiva y dinámica para conectarse, compartir contenido y comunicarse en línea. Con un enfoque en la usabilidad y la experiencia del usuario, esta red social proporciona una amplia gama de características y funcionalidades para satisfacer las necesidades de sus usuarios.</p>
              <p><span>Características:</span></p>
              <ul>
                <li><span>Registro de cuenta:</span> Los usuarios pueden crear fácilmente una cuenta en "Social" proporcionando información básica y una dirección de correo electrónico válida.</li>
                <li><span>Perfil de usuario:</span> Cada usuario tiene un perfil personalizado donde pueden agregar detalles sobre sí mismos, incluyendo una foto de perfil y una breve biografía.</li>
                <li><span>Publicación de contenido multimedia:</span> Los usuarios pueden compartir fotos y videos con sus seguidores, lo que les permite expresarse y compartir momentos importantes de sus vidas.</li>
                <li><span>Interacción social:</span> Los usuarios pueden hacer publicaciones en su feed de noticias, comentar las publicaciones de otros usuarios y dar "me gusta" a contenido que encuentren interesante.</li>
                <li><span>Conexión y búsqueda de amigos:</span> "Social" permite a los usuarios buscar y conectarse con amigos, colegas y familiares, así como enviar y recibir solicitudes de amistad.</li>
                <li><span>Mensajería instantánea:</span> La plataforma ofrece mensajería instantánea en tiempo real, lo que permite a los usuarios comunicarse de forma privada con amigos y seguidores.</li>
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
              <a href="enlace_al_proyecto_1" target="_blank" rel="noopener noreferrer">Ver proyecto: Social</a>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </li>
            <li>
              <h3>Diseño y construcción del periodico universitario Unibarranquillanewspaper</h3>
              <p>El proyecto "Unibarranquillanewspaper" es un periódico universitario digital diseñado y construido para la comunidad universitaria y el público en general. Este periódico está integrado por usuarios, cada uno con sus propias credenciales de acceso, y cada usuario es responsable de una sección específica del periódico.</p>
              <p><span>Características:</span></p>
              <ul>
                <li><span>Gestión de usuarios:</span> El periódico permite la creación de cuentas de usuario para los colaboradores, quienes tienen acceso individualizado a su sección asignada. Cada usuario puede eliminar y editar solo sus propios artículos, lo que garantiza la autonomía y responsabilidad editorial.</li>
                <li><span>Secciones temáticas:</span> Cada sección del periódico está dedicada a noticias, artículos y temas relevantes relacionados con la ciencia, la tecnología, la sociedad y la vida universitaria. Esto garantiza una cobertura amplia y diversa de temas de interés para la comunidad universitaria y el público en general.</li>
                <li><span>Publicación de contenido:</span> Los colaboradores pueden publicar noticias, artículos y contenido multimedia en sus respectivas secciones, lo que permite una actualización regular del periódico con información relevante y oportuna.</li>
                <li><span>Interacción y participación:</span> Los lectores tienen la capacidad de interactuar con el contenido del periódico a través de comentarios, compartiendo en redes sociales y participando en encuestas y debates, fomentando así la participación activa de la comunidad en el periódico.</li>
                <li><span>Soporte de LaTeX:</span> El periódico es compatible con el formato LaTeX, lo que permite a los colaboradores incluir ecuaciones matemáticas de alto grado en sus artículos y publicaciones. Esto facilita la presentación precisa y profesional de contenido científico y técnico.</li>
                <li><span>Blog comunitario:</span> Además de las secciones temáticas, el proyecto cuenta con un blog donde la comunidad puede opinar, comentar y expresarse libremente sobre diversos temas de interés. Esto promueve el intercambio de ideas y la participación activa de la comunidad universitaria.</li>
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
              <a href="enlace_al_proyecto_1" target="_blank" rel="noopener noreferrer">Ver proyecto: Unibarranquillanews</a>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </li>
            <li>
              <h3>Proyecto 3</h3>
              <p>Descripción del proyecto 3. Aquí puedes escribir algunas características clave del proyecto 3.</p>
              <p>Características:</p>
              <ul>
                <li>Característica 1 del Proyecto 3</li>
                <li>Característica 2 del Proyecto 3</li>
                <li>Característica 3 del Proyecto 3</li>
              </ul>
              <a href="enlace_al_proyecto_3">Ver proyecto 3</a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>Contáctame: correo@example.com</p>
        <p>Sígueme en redes sociales: <a href="https://twitter.com/tucuenta">Twitter</a>, <a href="https://linkedin.com/tuperfil">LinkedIn</a></p>
      </footer>
    </div>
  )
}

export default App
