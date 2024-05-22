const Address = () => {
  return (
    <div className="flex flex-wrap justify-center gap-16 p-8">
      {/* Card 1 */}
      <div className="w-72 h-80 perspective">
        <div className="relative w-full h-full bg-[#f5f8fa] from-teal-400 to-green-500 rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl ">
          <div className="absolute inset-2 bg-gradient-to-t rounded-br-[5rem] rounded-tl-[5rem] from-white to-transparent backdrop-blur-md border border-white rounded-3xl"></div>
          <div className="relative z-10 p-8">
            <h3 className="text-xl font-bold text-center mb-24">Merkez Ofisimiz</h3>
            <p className="text-gray-600 text-center">Mustafa Kemal Mah. 2131. Sk. No: 28/2 Çankaya/Ankara</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-72 h-80 perspective">
        <div className="relative w-full h-full bg-[#f5f8fa] from-teal-400 to-green-500 rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl ">
          <div className="absolute inset-2 bg-gradient-to-t rounded-br-[5rem] rounded-tl-[5rem] from-white to-transparent backdrop-blur-md border border-white rounded-3xl"></div>
          <div className="relative z-10 p-8">
            <h3 className="text-xl font-bold text-center mb-24">İngiltere / Londra</h3>
            <p className="text-gray-600 text-center">284 Chase Road A Block 2nd Floor London ENGLAND N14 6HF</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-72 h-80 perspective">
        <div className="relative w-full h-full bg-[#f5f8fa] from-teal-400 to-green-500 rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl ">
          <div className="absolute inset-2 bg-gradient-to-t rounded-br-[5rem] rounded-tl-[5rem] from-white to-transparent backdrop-blur-md border border-white rounded-3xl"></div>
          <div className="relative z-10 p-8">
            <h3 className="text-xl font-bold text-center mb-24">Kanada / Toronto</h3>
            <p className="text-gray-600 text-center">Çok Yakında</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
