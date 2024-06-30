import PageContainerMotion from '@/motions/PageContainer';
import Link from 'next/link';

const HomePage = () => {
  return (
    <PageContainerMotion
      className="p-10"
    >
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla quas maxime quam consectetur tenetur in quibusdam, voluptatibus excepturi iure aliquam hic quasi, sapiente quae est praesentium nemo at et.
        Debitis expedita inventore consequatur aut ipsam, commodi suscipit ipsum, similique, amet dolorum eius vero cupiditate molestias. Exercitationem eius est beatae! Saepe culpa adipisci porro tempore possimus! Saepe, odio. Tempore, dolorem!
        Unde repellat porro voluptate. Maxime consectetur, at atque distinctio iste eveniet sapiente fugiat, perferendis earum aspernatur vero voluptate adipisci, voluptatum vel! Voluptate et qui assumenda sit, architecto obcaecati ipsam blanditiis.
        Repudiandae reiciendis illo ratione architecto iste. Vitae, pariatur eaque? Molestiae hic aspernatur possimus maiores nostrum similique amet deleniti animi praesentium earum quia molestias quae ex, saepe repudiandae obcaecati officiis tenetur?
        Facilis error corrupti unde totam distinctio aliquid minima voluptatem assumenda, expedita molestias earum explicabo. Quae natus sit numquam reiciendis. Fuga tempora necessitatibus non quos soluta qui eligendi iure suscipit ducimus.</p>
      <Link href="/login" className='font-blod'>to login</Link>
    </PageContainerMotion>
  );
};

export default HomePage;




// "use client"
// import Xmotion from "@/motions/Xmotion";
// import { Box, Button, Text } from "@chakra-ui/react";
// import { AnimatePresence, motion } from "framer-motion"
// import Link from "next/link";
// import { useState } from "react";

// const varinatMotion = {
//   hidden: {
//     x: '-100vh'
//   },
//   visible: {
//     x: '0',
//     transition: { type: 'spring', stiffness: 150 }
//   }
// }

// export default function Home() {
//   const [show, setShow] = useState<boolean>(false)
//   return (
//     <>

//       <motion.div
//         className="bg-gray-300"
//         initial={{ x: '-4000px' }}
//         animate={{ x: '0' }}
//       >
//         <Link href='/login' className="px-10">to login</Link>
//         <h2
//           className="text-center font-bold mt-10"
//         >
//           Welcome to my personal website.
//         </h2>
//         <Text
//           className="text-center text-[30px] font-bold mt-10"
//         >
//           mohammad ghiasi
//         </Text>
//       </motion.div>

//       <motion.div
//         className="flex flex-col justify-center items-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 3 }}
//       >
//         <h2
//           className=" font-bold mt-10"
//         >
//           Welcome to my personal website.
//         </h2>
//         <Text
//           className=" text-[30px] font-bold mt-10"
//         >
//           mohammad ghiasi
//         </Text>
//         <Text
//           className=" text-[20px] mt-10"
//         >
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, et amet ipsa aperiam minima nam omnis quasi facere ab neque placeat libero quos illum, mollitia debitis? Eius culpa modi repellendus.
//         </Text>
//         <Button colorScheme="blue" onClick={(): void => setShow(!show)}>click</Button>
//         <AnimatePresence>
//           {show && (
//             <Xmotion
//               className=" text-[20px] mt-10"
//               variants={varinatMotion}
//               initial='hidden'
//               animate='visible'
//               exit={{ opacity: 0 }}
//             >
//               Mohammad ghiasi is here :)
//             </Xmotion>
//           )}
//         </AnimatePresence>
//       </ motion.div >
//     </>
//   );
// }
