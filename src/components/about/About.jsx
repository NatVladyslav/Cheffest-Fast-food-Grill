import aboutCss from './About.module.css'
const About = () => {
  return (
    <div className={`container ${aboutCss.about}`}>
          <h2 className={aboutCss.title}>Why We are Best Food Maker</h2>
          <p className={aboutCss.main_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit impedit ad nesciunt beatae voluptatum natus quas! Similique labore cumque, delectus beatae aliquid praesentium! Nesciunt suscipit quia adipisci architecto mollitia!</p>
          <div className={aboutCss.text_video_div}>
              <p className={aboutCss.next_text}>It is a long established fact that a reader will be distracted layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The normal distribution of letters, as opposed to using Content  Many desktop publishing packages and web page editors search for lorem ipsum will uncover many web sites still in  humour and the like. Read More</p>
              <video className={aboutCss.video} src="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab asperiores, vitae cupiditate tempora aperiam minima. Laboriosam nostrum nisi, a beatae consequuntur, eius soluta illum earum autem quo pariatur vitae deserunt!</video>
          </div>
    </div>
  )
}
export default About
