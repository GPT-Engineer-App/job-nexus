import { useState } from "react";
import { Box, Container, Flex, Heading, Input, VStack, Text, HStack, Button, Spacer, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaSearch, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const JobCard = ({ title, company, location, onApply }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} w="100%">
    <Heading size="md" mb={2}>{title}</Heading>
    <Text fontSize="sm" color="gray.500"><FaBriefcase /> {company}</Text>
    <Text fontSize="sm" color="gray.500"><FaMapMarkerAlt /> {location}</Text>
    <Button colorScheme="blue" onClick={() => onApply({ title, company, location })}>Apply Now</Button>
  </Box>
);

const Index = ({ jobs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setApplicantName("");
    setApplicantEmail("");
    setApplicantPhone("");
    setCoverLetter("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const applicationDetails = {
      job: selectedJob,
      name: applicantName,
      email: applicantEmail,
      phone: applicantPhone,
      coverLetter: coverLetter,
    };
    console.log(applicationDetails);
    closeModal();
  };

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
          <Button as={Link} to="/post-job" variant="ghost" color="white">Post a Job</Button>
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
        {jobs.map((job, index) => (
          <JobCard key={index} title={job.title} company={job.company} location={job.location} onApply={openModal} />
        ))}
      </VStack>

      <Flex as="footer" bg="gray.700" color="white" p={4} mt={8} borderRadius="md" justifyContent="center">
        <Text>&copy; 2023 JobFinder. All rights reserved.</Text>
      </Flex>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Apply for {selectedJob?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input value={applicantPhone} onChange={(e) => setApplicantPhone(e.target.value)} />
              </FormControl>
              <FormControl id="coverLetter" isRequired>
                <FormLabel>Cover Letter</FormLabel>
                <Textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
              </FormControl>
              <ModalFooter>
                <Button colorScheme="blue" type="submit">Submit Application</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;