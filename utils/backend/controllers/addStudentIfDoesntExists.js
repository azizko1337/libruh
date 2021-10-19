import prisma from "../prisma";

const addStudentIfDoesntExists = async (userId) => {
  let student = await prisma.student.findUnique({
    where: {
      id: userId,
    },
  });
  if (student === null) {
    student = await prisma.student.create({
      data: {
        id: userId,
      },
    });
  }
  return {
    id: student.id,
    displaySemester: student.displaySemester,
    number: student.number,
    librusLogin: student.librusLogin,
  };
};

export default addStudentIfDoesntExists;
