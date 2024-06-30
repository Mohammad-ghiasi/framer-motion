import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';


const LoginPage = () => {
    return (
        <Box
            className="bg-gray-300 p-5 "
        >
            <Text>Login Page</Text>
            <Text>LoginPage, FramerMotion...</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ipsam? Doloribus, ex laboriosam modi ea, voluptatum ipsam quibusdam maxime explicabo reiciendis asperiores exercitationem. Ea quaerat exercitationem accusantium, consequuntur harum repellendus!
                Dolore aperiam libero maxime, suscipit iste animi repudiandae? Voluptas beatae consequatur expedita, harum porro odit numquam possimus ipsum corrupti. Soluta corporis incidunt dolore veniam illum iusto ipsa maiores! Adipisci, molestias.
                Sapiente numquam deserunt quas cum architecto placeat, molestiae veniam adipisci neque rerum sit dolorum harum doloribus illum delectus laboriosam ipsum totam iure in, inventore minus. Facilis aperiam hic non inventore?
                Minus et quisquam est rem minima animi vero, accusantium alias nihil autem sint earum aut excepturi aliquam nostrum nisi quod nam dicta eveniet nemo? Ut delectus explicabo autem quis consectetur.</Text>
            <Link href="/" className='font-blod'>to home</Link>
        </Box>
    );
};

export default LoginPage;






// import React from 'react'
// import { AnimatePresence, motion } from "framer-motion"
// import { Text } from '@chakra-ui/react'
// import Link from 'next/link'
// export default function LoginPage() {
//     return (
//         <>
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{
//                     type: 'spring',
//                     delay: .5
//                   }}
//                 className='mx-5 mt-5'
//             >
//              <Text>LoginPage, FramerMotion...</Text>
//              <Link href='/'>to home</Link>
//             </motion.div>
//         </>
//     )
// }
