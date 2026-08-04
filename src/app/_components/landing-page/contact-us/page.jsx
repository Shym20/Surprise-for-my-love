"use client";
import {
  Input,
  Textarea,
  Select,
  FormControl,
  FormLabel,
  VStack,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      comment: formData.get("comment") || "", // safe fallback
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyqgH_Zdi2rhNNoenYxOwJOi0wa7zP1jZQtBCTjZWlN31UWsc-Of52PzEGp5F8QHVa7/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // important
          },
          mode: "no-cors",
          body: JSON.stringify(data),
        }
      );
      setMessage("Thanks! We got your response.");
    } catch (error) {
      setMessage("Oops. Something went wrong.");
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-0 place-items-center">
      <Box mt={8} px={{ base: 6, md: 12, xl: 4 }}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            <div className="flex flex-col mb-4 text-left">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#E04A6A] via-[#772C6A] to-[#713AA9] font-semibold text-2xl md:text-3xl md:max-w-[45%]">
                Contact Us
              </h2>
              <p className="mt-4 text-[#596066] text-md md:text-lg leading-relaxed max-w-3xl">
                Our friendly team would love to hear from you.
              </p>
            </div>

            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" placeholder="Enter your name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input name="email" type="email" placeholder="Enter your email" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Contact Number</FormLabel>
              <div className="flex">
                <Select
                  placeholder="+91"
                  maxW="20"
                  borderRightRadius="none"
                  borderEnd="none"
                  borderColor="gray.300"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </Select>
                <Input
                  name="contact"
                  type="tel"
                  placeholder="Enter your number"
                  borderLeftRadius="none"
                />
              </div>
            </FormControl>

            <FormControl>
              <FormLabel>Comment</FormLabel>
              <Textarea
                name="comment"
                placeholder="Your message here..."
                rows={5}
              />
            </FormControl>

            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white px-6 py-2 rounded-[20px] hover:bg-purple-700"
            >
              {loading ? "Sending..." : "Connect"}
            </button>

            {message && <p className="text-sm text-green-600">{message}</p>}
          </VStack>
        </form>
      </Box>

      <div className="hidden lg:block relative w-full h-[100vh] lg:h-auto">
        <Image
          src="/images/landing-page/contact-us.png"
          alt="Contact Illustration"
          height={1000}
          width={500}
          className="object-cover rounded-xl shadow-md"
        />
      </div>
    </div>
  );
}
