const Brands = () => {
  return (
    <div className='h-[100vh] bg-black text-white pt-36 '>
      <div className='flex flex-col items-center justify-center'>
        <div>
          <h2 className='text-6xl md:text-9xl font-bold'>
            <span className='text-red-700'>.</span>Brands
          </h2>
        </div>

        <p className='indent-[23vw] font-semibold'>
          <span className='text-red-700 text-3xl'>.</span>we work with
        </p>
      </div>
      <div className='flex mt-24 font-bold text-4xl md:text-6xl justify-evenly '>
        <div className='flex flex-col brands'>
          <p>
            <span className='text-red-700'>.</span>Gucci
          </p>
          <p className='bg-white text-black'>
            <span className='text-red-700'>.</span>Adidas
          </p>
          <p>
            <span className='text-red-700'>.</span>Zara
          </p>
          <p className='bg-white text-black'>
            <span className='text-red-700 '>.</span>Gucci
          </p>
        </div>
        <div className='flex flex-col brands'>
          <p>
            <span className='text-red-700'>.</span>Nike
          </p>
          <p className='bg-white text-black'>
            <span className='text-red-700'>.</span>Chanel
          </p>
          <p>
            <span className='text-red-700'>.</span>Prada
          </p>
          <p className='bg-white text-black'>
            <span className='text-red-700'>.</span>Dior
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
