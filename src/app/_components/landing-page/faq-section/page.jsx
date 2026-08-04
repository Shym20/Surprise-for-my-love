"use client";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const faqData = [
  {
    tab: "All",
    questions: [
      {
        q: "Is Clipverse free to join?",
        a: "Absolutely! Joining Clipverse is completely free for both creators and viewers.",
      },
      {
        q: "How do creators earn money on Clipverse?",
        a: "Creators earn money through ad revenue sharing, tips from fans, and exclusive content monetization features.",
      },
      {
        q: "Are there any limits on video length or size?",
        a: "While we encourage high-quality content, there are soft limits to ensure performance. Currently, videos up to 2GB and 20 minutes are supported.",
      },
      {
        q: "Can I upload videos in 4K or 8K quality?",
        a: "Yes! Clipverse supports ultra-high definition uploads including 4K and even 8K, depending on your plan and encoding settings.",
      },
      {
        q: "Do we need a large following to start earning?",
        a: "Nope! Even small creators can start earning from day one through ads and support from their audience.",
      },
      {
        q: "Will I get real-time analytics and insights?",
        a: "You bet! Clipverse provides real-time insights into views, engagement, earnings, and more through your Creator Dashboard.",
      },
      {
        q: "What type of content is allowed on Clipverse?",
        a: "Clipverse promotes creative freedom, but we strictly prohibit hateful, harmful, or illegal content. Please review our Community Guidelines.",
      },
      {
        q: "When is Clipverse officially launching?",
        a: "Clipverse is set to launch officially in late 2025. Join our beta to get early access and perks!",
      },
    ],
  },
  {
    tab: "Account",
    questions: [
      {
        q: "How do I reset my password?",
        a: "Head to the login page and click on 'Forgot Password' to receive a reset link.",
      },
      {
        q: "Can I change my username after signing up?",
        a: "Yes, usernames can be changed from your account settings once every 30 days.",
      },
      {
        q: "How do I update my email address?",
        a: "Navigate to your profile settings and select 'Update Email'. You’ll need to verify the new address.",
      },
      {
        q: "Can I delete my Clipverse account?",
        a: "Yes, but we’ll miss you 😢 — go to 'Account Settings' and choose 'Delete Account'. This action is permanent.",
      },
      {
        q: "Is two-factor authentication (2FA) available?",
        a: "Absolutely! You can enable 2FA in your security settings to keep your account extra safe.",
      },
      {
        q: "What should I do if I suspect someone accessed my account?",
        a: "Immediately change your password and contact Clipverse support. We’ll help secure your account.",
      },
      {
        q: "Can I link multiple social accounts to my Clipverse profile?",
        a: "Yes, you can link accounts like Google or Twitter for faster logins and better visibility.",
      },
      {
        q: "How do I manage my notification preferences?",
        a: "Visit your notification settings to customize alerts for comments, earnings, and updates.",
      },
    ],
  },
  {
    tab: "Earning",
    questions: [
      {
        q: "How do creators earn money on Clipverse?",
        a: "Creators earn through ad revenue, brand partnerships, and fan support via tips or subscriptions.",
      },
      {
        q: "When do I get paid?",
        a: "Payouts are processed monthly once your earnings cross the minimum threshold set in your account.",
      },
      {
        q: "Is there a minimum payout threshold?",
        a: "Yes, the current minimum payout is ₹1,000. You can view or update this in your earnings settings.",
      },
      {
        q: "How do I link my bank or UPI for payouts?",
        a: "Go to your wallet settings and securely add your UPI ID or bank details to receive payments.",
      },
      {
        q: "Can international creators also earn?",
        a: "Absolutely! Creators across the globe can monetize, though payout options may vary by region.",
      },
      {
        q: "Do I need a large following to start earning?",
        a: "Not at all — Clipverse supports micro-creators too. High engagement matters more than follower count.",
      },
      {
        q: "How are ad revenues calculated?",
        a: "Ad revenue is based on views, watch time, and audience geography. More engagement = more earnings.",
      },
      {
        q: "Are there any fees deducted from my earnings?",
        a: "A small platform fee may apply to cover transaction and hosting costs. Full breakdowns are in your dashboard.",
      },
    ],
  },
];

export default function FaqSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* <Tabs variant="unstyled" colorScheme="purple" isLazy px={{base: 6, md: 12, xl: 4}}>
      <TabList>
        {faqData.map((section, idx) => (
          <Tab
            key={idx}
            _selected={{
              bg: "purple.300",
              color: "white",
              borderRadius: "md",
              fontWeight: "medium",
            }}
            _hover={{
              bg: "purple.300",
              color: "white",
              borderRadius: "md",
            }}
            px={4}
            py={2}
            mr={2}
            transition="all 0.2s ease"
          >
            {section.tab}
          </Tab>
        ))}
      </TabList>
      <Divider my={4} />
      <TabPanels>
        {faqData.map((section, idx) => (
          <TabPanel key={idx}>
            <Accordion allowMultiple allowToggle>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {section.questions.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    borderRadius="md"
                    border="1px solid #e2e8f0"
                  >
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "purple.100", color: "purple.800" }}
                      >
                        <Box flex="1" textAlign="left" fontWeight="medium">
                          {faq.q}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign={"left"}>{faq.a}</AccordionPanel>
                  </AccordionItem>
                ))}
              </SimpleGrid>
            </Accordion>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs> */}
      <Tabs
        variant="unstyled"
        colorScheme="purple"
        isLazy
        px={{ base: 6, md: 12, xl: 4 }}
      >
        <TabList>
          {faqData.map((section, idx) => (
            <Tab
              key={idx}
              _selected={{
                bg: "purple.300",
                color: "white",
                borderRadius: "md",
                fontWeight: "medium",
              }}
              _hover={{
                bg: "purple.300",
                color: "white",
                borderRadius: "md",
              }}
              px={4}
              py={2}
              mr={2}
              transition="all 0.2s ease"
            >
              {section.tab}
            </Tab>
          ))}
        </TabList>

        <Divider my={4} />

        <TabPanels>
          {faqData.map((section, idx) => {
            // Split questions into 2 arrays for 2 columns
            const leftCol = section.questions.filter((_, i) => i % 2 === 0);
            const rightCol = section.questions.filter((_, i) => i % 2 !== 0);

            return (
              <TabPanel key={idx}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  {[leftCol, rightCol].map((columnFaqs, colIdx) => (
                    <Accordion allowToggle key={colIdx}>
                      {columnFaqs.map((faq, i) => (
                        <AccordionItem
                          key={i}
                          borderRadius="md"
                          border="1px solid #e2e8f0"
                          mb={i !== columnFaqs.length - 1 ? 6 : 0} // gap between items, but not after the last one
                        >
                          <h2>
                            <AccordionButton
                              _expanded={{
                                bg: "purple.100",
                                color: "purple.800",
                              }}
                            >
                              <Box
                                flex="1"
                                textAlign="left"
                                fontWeight="medium"
                              >
                                {faq.q}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4} textAlign={"left"}>
                            {faq.a}
                          </AccordionPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ))}
                </SimpleGrid>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </motion.div>
  );
}
