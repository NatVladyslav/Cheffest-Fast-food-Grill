import heroCss from './Hero.module.css'
const Hero = () => {
    return (
<div className={`container ${heroCss.background_image}`}>
            
    <div className={heroCss.hero_wrapper}>
          <h1 className={heroCss.title}><span>Welcome!</span> <span>We Made Delicious</span> <span> Food for You</span>
</h1>
          <p className={heroCss.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <button className={heroCss.hero_btn}>Order Online</button>
    </div> 
</div>
  )
}
export default Hero
