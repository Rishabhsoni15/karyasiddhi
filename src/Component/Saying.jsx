// import React from "react";
// import { motion } from "framer-motion";
// import { FaPlay } from "react-icons/fa";

// function Saying() {
//   return (
//     <div
//       className="relative w-full h-[80vh] min-h-[600px] flex justify-start text-white transition-all duration-300"
//       style={{
//         backgroundImage: `url(/Images/WorkIn.jpg)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//         opacity: "0.9",
//       }}
//     >
//       {/* Overlay with brightness */}
//       <div className="absolute inset-0 bg-[#342d2cb3] opacity-70 z-0"></div>

//       {/* Content */}
//       <div className="relative flex flex-col md:flex-row md:items-start text-start mt-20 md:mt-28 gap-10 md:gap-32 lg:gap-96 z-10 px-4 w-full transition-all duration-300">
//         <h1 className="font-extrabold text-[28px] sm:text-[40px] md:text-[62px] text-center md:text-left max-w-[90%] sm:max-w-xl md:max-w-2xl leading-tight ml-0 md:ml-36 transition-all duration-300">
//           Karyasiddhi - A<br /> Place You’ll Love to Work In.
//         </h1>

//         <button
//           whileHover={{
//             backgroundColor: "#ffffff",
//             color: "#ff0000",
//           }}
//           transition={{ duration: 0.4 }}
//           className="mt-6 md:mt-0 bg-red-600 text-white h-16 w-16 sm:h-20 sm:w-20 md:h-36 md:w-40 border-l-2 border-white flex items-center justify-center p-2 font-semibold text-base sm:text-lg md:text-xl transition-all duration-300"
//         >
//           <FaPlay />
//         </button>
//       </div>

//       {/* Bottom Banner */}
//       <div className="absolute bottom-0 left-0 w-full flex justify-center items-center h-20 sm:h-28 md:h-32 lg:h-40 bg-saying px-4 transition-all duration-300">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center transition-all duration-300">
//           What they are saying.
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default Saying;
import React from "react";
import { FaPlay } from "react-icons/fa";

function Saying() {
  return (
    <div
      className="relative w-full h-[45vh] min-h-[300px] flex items-start text-white transition-all duration-300"
      style={{
        backgroundImage: `url(/Images/WorkIn.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: "0.9",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#342d2cb3]  z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 mt-20 md:mt-28 flex flex-col  md:flex-row gap-6 md:gap-52">
        <h1 className="font-extrabold text-[28px] sm:text-[40px] md:text-[62px] leading-tight text-left max-w-full sm:max-w-xl md:max-w-3xl">
          Karyasiddhi - A <br />
          Place You’ll Love to Work In.
        </h1>

        <button
          whileHover={{
            backgroundColor: "#ffffff",
            color: "#ff0000",
          }}
          transition={{ duration: 0.4 }}
          className=" md:mt-0 bg-red-600 text-white h-24 w-28 mt-10  sm:h-20 sm:w-20 md:h-36 md:w-40 border-l-2 border-white flex items-center justify-center p-2 font-semibold text-base sm:text-lg md:text-xl transition-all duration-300"
        >
          <FaPlay />
        </button>
      </div>
    </div>
  );
}

export default Saying;
