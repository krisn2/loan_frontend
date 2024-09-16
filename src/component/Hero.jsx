import business_loan from '../assets/business_loa.jpg'
// import LRD_loan from '../assets/LRD_loan.jpg'
// import mortgage_loan from '../assets/mortgage_loan.jpg'

const Hero = () => {
  return (
    <div className="">
      <div className=" flex justify-center items-center">
      <h1 className="text-3xl font-bold text-purple-400 "> Welcome to Ofin Finance</h1>
      </div>
        <div className="">
         <div className="">
          <img src={business_loan} alt="business_loan" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis, debitis aliquid blanditiis optio </p>
         </div>
        </div>
    </div>
  )
}

export default Hero