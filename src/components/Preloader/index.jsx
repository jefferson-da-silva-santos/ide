import preloader_img from '../../assets/image/preloader_img.png';

const Preloader = () => {
  return (
    <div className="preloader">
      <img className="preloader__img" src={preloader_img} alt="" />
    </div>
  )
}

export default Preloader