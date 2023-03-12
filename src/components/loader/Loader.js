

const Loader = ({LoadingValue}) => {


    
    return (
        <div className='w-screen h-screen fixed bg-[#292929] text-white z-10' >


            <h1 className='heading text-[150px] absolute top-0 right-0 mr-12'>{LoadingValue}%</h1>

        </div>
    )
}

export default Loader
