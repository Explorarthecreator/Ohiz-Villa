import { FaCheckCircle, FaBuilding, FaPaypal, FaMoneyBillWave, FaReceipt, FaPen } from "react-icons/fa"
function AboutPage() {
  return (
    <div className="text-black">
      <h1 className=" text-5xl font-bold">
        About Ohiz Villa
      </h1>
      <p className=" my-5 text-xl">
        Ohiz Villa is a prject that was built to handle students payment in an off campus student accomodation. The process is very simple to walk through. This eases the whole process and eliminates every form of stress and anomalities that might arise.
      </p>

      <h1 className="text-3xl text-center font-medium capitalize my-8">
        Steps to carry out payment
      </h1>

      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3 my-5 lg:w-5/6 xl:w-3/4  m-auto">
        <div className="card shadow-2xl card-compact w-11/12 md:w-80 lg:w-64 xl:w-72 m-auto bg-slate-300">
          <figure className="px-5 pt-5">
            <FaBuilding color='black' size={'2em'}/>    
          </figure>
          <div className="card-body items-center text-center">
            <h1 className=" card-title">
              Pick a lodge
            </h1>
          </div>
        </div>

        <div className="card shadow-2xl card-compact w-11/12 md:w-80 lg:w-64 xl:w-72 m-auto bg-slate-300">
          <figure className="px-5 pt-5">
            <FaCheckCircle color='black' size={'2em'}/>    
          </figure>
          <div className="card-body items-center text-center">
            <h1 className=" card-title">
              Select an available room
            </h1>
          </div>
        </div>

        <div className="card shadow-2xl card-compact w-11/12 md:w-80 lg:w-64 xl:w-72 m-auto bg-slate-300">
          <figure className="px-5 pt-5">
            <FaPen color='black' size={'2em'}/>    
          </figure>
          <div className="card-body items-center text-center">
            <h1 className=" card-title">
              Fill in personal details
            </h1>
          </div>
        </div>

        <div className="card shadow-2xl card-compact w-11/12 md:w-80 lg:w-64 xl:w-72 m-auto bg-slate-300">
          <figure className="px-5 pt-5">
            <FaPaypal color='black' size={'2em'}/>    
          </figure>
          <div className="card-body items-center text-center">
            <h1 className=" card-title">
              Select a payment gateway
            </h1>
          </div>
        </div>

        <div className="card shadow-2xl card-compact w-11/12 md:w-80 lg:w-64 xl:w-72 m-auto bg-slate-300">
          <figure className="px-5 pt-5">
            <FaMoneyBillWave color='black' size={'2em'}/>    
          </figure>
          <div className="card-body items-center text-center">
            <h1 className=" card-title">
              Make Payment
            </h1>
          </div>
        </div>

        <div className="card shadow-2xl card-compact w-11/12 md:w-80 lg:w-64 xl:w-72 m-auto bg-slate-300">
          <figure className="px-5 pt-5">
            <FaReceipt color='black' size={'2em'}/>    
          </figure>
          <div className="card-body items-center text-center">
            <h1 className=" card-title">
              Save Receipt
            </h1>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AboutPage