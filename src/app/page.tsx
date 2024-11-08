// "use client"
// import { Box, Text } from '@chakra-ui/react';
// import { motion } from 'framer-motion'
// import Link from 'next/link';

// const HomePage = () => {
//   return (
//     <Box
//       className="p-10"
//     >
//       <motion.p
//         drag
//         dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
//         dragElastic={.6}
//         className='m-10 text-center cursor-pointer'
//       >mohammad ghiasi</motion.p>
//       <Text>Home Page</Text>
//       <Text>Welcome to the Home Page</Text>
//       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla quas maxime quam consectetur tenetur in quibusdam, voluptatibus excepturi iure aliquam hic quasi, sapiente quae est praesentium nemo at et.
//         Debitis expedita inventore consequatur aut ipsam, commodi suscipit ipsum, similique, amet dolorum eius vero cupiditate molestias. Exercitationem eius est beatae! Saepe culpa adipisci porro tempore possimus! Saepe, odio. Tempore, dolorem!
//         Unde repellat porro voluptate. Maxime consectetur, at atque distinctio iste eveniet sapiente fugiat, perferendis earum aspernatur vero voluptate adipisci, voluptatum vel! Voluptate et qui assumenda sit, architecto obcaecati ipsam blanditiis.
//         Repudiandae reiciendis illo ratione architecto iste. Vitae, pariatur eaque? Molestiae hic aspernatur possimus maiores nostrum similique amet deleniti animi praesentium earum quia molestias quae ex, saepe repudiandae obcaecati officiis tenetur?
//         Facilis error corrupti unde totam distinctio aliquid minima voluptatem assumenda, expedita molestias earum explicabo. Quae natus sit numquam reiciendis. Fuga tempora necessitatibus non quos soluta qui eligendi iure suscipit ducimus.</Text>
//       <Link href="/login" className='font-blod'>to login</Link>
//     </Box>
//   );
// };

// export default HomePage;




// // "use client"
// // import Xmotion from "@/motions/Xmotion";
// // import { Box, Button, Text } from "@chakra-ui/react";
// // import { AnimatePresence, motion } from "framer-motion"
// // import Link from "next/link";
// // import { useState } from "react";

// // const varinatMotion = {
// //   hidden: {
// //     x: '-100vh'
// //   },
// //   visible: {
// //     x: '0',
// //     transition: { type: 'spring', stiffness: 150 }
// //   }
// // }

// // export default function Home() {
// //   const [show, setShow] = useState<boolean>(false)
// //   return (
// //     <>

// //       <motion.div
// //         className="bg-gray-300"
// //         initial={{ x: '-4000px' }}
// //         animate={{ x: '0' }}
// //       >
// //         <Link href='/login' className="px-10">to login</Link>
// //         <h2
// //           className="text-center font-bold mt-10"
// //         >
// //           Welcome to my personal website.
// //         </h2>
// //         <Text
// //           className="text-center text-[30px] font-bold mt-10"
// //         >
// //           mohammad ghiasi
// //         </Text>
// //       </motion.div>

// //       <motion.div
// //         className="flex flex-col justify-center items-center"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 3 }}
// //       >
// //         <h2
// //           className=" font-bold mt-10"
// //         >
// //           Welcome to my personal website.
// //         </h2>
// //         <Text
// //           className=" text-[30px] font-bold mt-10"
// //         >
// //           mohammad ghiasi
// //         </Text>
// //         <Text
// //           className=" text-[20px] mt-10"
// //         >
// //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, et amet ipsa aperiam minima nam omnis quasi facere ab neque placeat libero quos illum, mollitia debitis? Eius culpa modi repellendus.
// //         </Text>
// //         <Button colorScheme="blue" onClick={(): void => setShow(!show)}>click</Button>
// //         <AnimatePresence>
// //           {show && (
// //             <Xmotion
// //               className=" text-[20px] mt-10"
// //               variants={varinatMotion}
// //               initial='hidden'
// //               animate='visible'
// //               exit={{ opacity: 0 }}
// //             >
// //               Mohammad ghiasi is here :)
// //             </Xmotion>
// //           )}
// //         </AnimatePresence>
// //       </ motion.div >
// //     </>
// //   );
// // }
'use client';
import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import {
  Box,
  Input,
  Button,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Container,
  useToast,
  VStack,
  FormErrorMessage,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

type FormValues = {
  formula: string;
  xValue: string;
};

function FormulaCalculator() {
  const [result, setResult] = useState<number | null>(null);
  const [displayedFormula, setDisplayedFormula] = useState<string>('');
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  // تنظیمات React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    try {
      // تبدیل "x" به مقدار xValue و تغییر ^ به ** برای ارزیابی در جاوا اسکریپت
      const formulaForEvaluation = data.formula.replace(/\^/g, '**').replace(/x/g, `(${data.xValue})`);
      const latexFormula = data.formula.replace(/\*\*/g, '^') .replace(/\*/g, '×');;
      const calculatedResult = eval(formulaForEvaluation);
      setResult(calculatedResult);
      setDisplayedFormula(latexFormula); // نمایش فرمول ورودی در حالت LaTeX
    } catch (error) {
      toast({
        title: 'خطا',
        description: 'فرمول نادرست است. لطفاً مجدداً بررسی کنید.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container
      maxW="lg"
      mt="10"
      p="8"
      borderRadius="lg"
      borderWidth="1px"
      boxShadow="md"
    >
      <Heading mb="6" color={colorMode === 'light' ? 'teal.700' : 'teal.100'}>
        محاسبه‌گر فرمول
      </Heading>
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        position="absolute"
        top="10px"
        right="10px"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="4" align="stretch">
          <FormControl isInvalid={!!errors.formula}>
            <FormLabel color={colorMode === 'light' ? 'teal.700' : 'teal.100'}>
              فرمول را وارد کنید
            </FormLabel>
            <Input
              type="text"
              {...register('formula', {
                required: 'فرمول الزامی است',
                pattern: {
                  value: /^[0-9x\+\-\*\/\.\(\)\s\^]+$/,
                  message: 'فرمول نامعتبر است',
                },
              })}
              bg={colorMode === 'light' ? 'white' : 'teal.700'}
              color={colorMode === 'light' ? 'black' : 'white'}
              borderColor={colorMode === 'light' ? 'teal.200' : 'teal.500'}
            />
            {errors.formula && (
              <FormErrorMessage color={colorMode === 'light' ? 'red.500' : 'red.300'}>
                {errors.formula.message}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.xValue}>
            <FormLabel color={colorMode === 'light' ? 'teal.700' : 'teal.100'}>
              مقدار متقیر را وارد کنید
            </FormLabel>
            <Input
              type="number"
              {...register('xValue', {
                required: 'مقدار x الزامی است',
                validate: (value) =>
                  !isNaN(Number(value)) || 'عدد معتبر وارد کنید',
              })}
              bg={colorMode === 'light' ? 'white' : 'teal.700'}
              color={colorMode === 'light' ? 'black' : 'white'}
              borderColor={colorMode === 'light' ? 'teal.200' : 'teal.500'}
            />
            {errors.xValue && (
              <FormErrorMessage color={colorMode === 'light' ? 'red.500' : 'red.300'}>
                {errors.xValue.message}
              </FormErrorMessage>
            )}
          </FormControl>

          <Button type="submit" colorScheme="teal" mt={5}>
            محاسبه
          </Button>
        </VStack>
      </form>

      {displayedFormula && (
        <Box mt="8" p="4" borderRadius="md" bg={colorMode === 'light' ? 'gray.100' : 'teal.900'}>
          <Heading size="md" color={colorMode === 'light' ? 'teal.700' : 'teal.100'}>
            فرمول وارد شده:
          </Heading>
          <BlockMath math={displayedFormula}/>
        </Box>
      )}

      {result !== null && (
        <Box mt="8" p="4" borderRadius="md" bg={colorMode === 'light' ? 'teal.100' : 'teal.700'}>
          <Heading size="md" color={colorMode === 'light' ? 'teal.700' : 'teal.100'}>
            نتیجه:
          </Heading>
          <Text fontSize="xl" color={colorMode === 'light' ? 'teal.800' : 'white'}>
            {result}
          </Text>
        </Box>
      )}
    </Container>
  );
}

export default FormulaCalculator;








// 3*x**5+4*x**3+2*x+5