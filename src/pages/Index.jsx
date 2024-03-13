import React from "react";
import { Box, Container, Heading, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { FaRegClock } from "react-icons/fa";

const Index = () => {
  // Sample exam data
  const exams = [
    { subject: "Mathematics", date: "April 10, 2023", time: "10:00 AM" },
    { subject: "History", date: "April 11, 2023", time: "1:00 PM" },
    { subject: "Science", date: "April 12, 2023", time: "10:00 AM" },
    { subject: "Literature", date: "April 13, 2023", time: "1:00 PM" },
    { subject: "Art", date: "April 14, 2023", time: "10:00 AM" },
  ];

  return (
    <Container maxW="container.xl" p={5}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
        <Heading as="h2" size="xl" mb={6}>
          Exam Timetable
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Subject</Th>
                <Th>Date</Th>
                <Th>Time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {exams.map((exam, index) => (
                <Tr key={index}>
                  <Td>{exam.subject}</Td>
                  <Td>{exam.date}</Td>
                  <Td>
                    <Box as="span" mr={2} verticalAlign="middle">
                      <FaRegClock />
                    </Box>
                    {exam.time}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Index;
