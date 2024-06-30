import Link from 'next/link';
import PageContainerMotion from '@/motions/PageContainer';


const LoginPage = () => {
    return (
        <PageContainerMotion
            className="bg-gray-300 p-5 "
        >
            <h1>Login Page</h1>
            <p>LoginPage, FramerMotion...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ipsam? Doloribus, ex laboriosam modi ea, voluptatum ipsam quibusdam maxime explicabo reiciendis asperiores exercitationem. Ea quaerat exercitationem accusantium, consequuntur harum repellendus!
                Dolore aperiam libero maxime, suscipit iste animi repudiandae? Voluptas beatae consequatur expedita, harum porro odit numquam possimus ipsum corrupti. Soluta corporis incidunt dolore veniam illum iusto ipsa maiores! Adipisci, molestias.
                Sapiente numquam deserunt quas cum architecto placeat, molestiae veniam adipisci neque rerum sit dolorum harum doloribus illum delectus laboriosam ipsum totam iure in, inventore minus. Facilis aperiam hic non inventore?
                Minus et quisquam est rem minima animi vero, accusantium alias nihil autem sint earum aut excepturi aliquam nostrum nisi quod nam dicta eveniet nemo? Ut delectus explicabo autem quis consectetur.</p>
            <Link href="/" className='font-blod'>to home</Link>
        </PageContainerMotion>
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
