import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PostJob = ({ addJob }) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { title, company, location, description, salary };
    addJob(newJob);
    navigate("/");
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} mb={8}>
        <Heading>Post a New Job</Heading>
      </VStack>
      <Box as="form" onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="title" isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl id="company" isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input value={company} onChange={(e) => setCompany(e.target.value)} />
          </FormControl>
          <FormControl id="location" isRequired>
            <FormLabel>Location</FormLabel>
            <Input value={location} onChange={(e) => setLocation(e.target.value)} />
          </FormControl>
          <FormControl id="description" isRequired>
            <FormLabel>Job Description</FormLabel>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>
          <FormControl id="salary">
            <FormLabel>Salary (optional)</FormLabel>
            <Input value={salary} onChange={(e) => setSalary(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">Post Job</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default PostJob;