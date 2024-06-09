import { Box, Container, Flex, Heading, Input, VStack, Text, HStack, Button, Spacer } from "@chakra-ui/react";
import { FaSearch, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const JobCard = ({ title, company, location }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} w="100%">
    <Heading size="md" mb={2}>{title}</Heading>
    <Text fontSize="sm" color="gray.500"><FaBriefcase /> {company}</Text>
    <Text fontSize="sm" color="gray.500"><FaMapMarkerAlt /> {location}</Text>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={8} borderRadius="md">
        <Heading size="lg">JobFinder</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Button variant="ghost" color="white">Home</Button>
          <Button variant="ghost" color="white">Jobs</Button>
          <Button variant="ghost" color="white">About</Button>
          <Button variant="ghost" color="white">Contact</Button>
        </HStack>
      </Flex>

      <VStack spacing={4} mb={8}>
        <Heading>Find Your Dream Job</Heading>
        <Flex w="100%" maxW="600px">
          <Input placeholder="Search for jobs" />
          <Button leftIcon={<FaSearch />} colorScheme="blue" ml={2}>Search</Button>
        </Flex>
      </VStack>

      <VStack spacing={4} align="stretch">
        <JobCard title="Software Engineer" company="Tech Corp" location="San Francisco, CA" />
        <JobCard title="Product Manager" company="Business Inc." location="New York, NY" />
        <JobCard title="UX Designer" company="Design Studio" location="Remote" />
      </VStack>

      <Flex as="footer" bg="gray.700" color="white" p={4} mt={8} borderRadius="md" justifyContent="center">
        <Text>&copy; 2023 JobFinder. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;