import rabbit from "../assets/rabbitrun.gif"
const Loader = () => {
  return (
      <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full opacity-[0.9] transition-all duration-300 ease-linear'>
        <img src={rabbit} alt="loading..." />
      </div>
  )
}

export default Loader