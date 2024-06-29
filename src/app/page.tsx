"use client"


import Xmotion from "@/motions/Xmotion";
import { Box, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <>

      <motion.div
        className="bg-gray-300"
        initial={{ x: '-4000px' }}
        animate={{ x: '0' }}
      >
        <h2
          className="text-center font-bold mt-10"
        >
          Welcome to my personal website.
        </h2>
        <Text
          className="text-center text-[30px] font-bold mt-10"
        >
          mohammad ghiasi
        </Text>
      </motion.div>

      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2
          className=" font-bold mt-10"
        >
          Welcome to my personal website.
        </h2>
        <Text
          className=" text-[30px] font-bold mt-10"
        >
          mohammad ghiasi
        </Text>
        <Text
          className=" text-[20px] mt-10"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, et amet ipsa aperiam minima nam omnis quasi facere ab neque placeat libero quos illum, mollitia debitis? Eius culpa modi repellendus.
        </Text>
        <Button colorScheme="blue" onClick={(): void => setShow(!show)}>click</Button>
        {show && (
          <Xmotion
            className=" text-[20px] mt-10"
            initial={{ x: '-100vh' }}
            animate={{ x: '0' }}
          >
            Mohammad ghiasi is here :)
          </Xmotion>
        )}
      </ motion.div>
    </>
  );
}
