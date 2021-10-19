import addStudentIfDoesntExists from "./addStudentIfDoesntExists";
import prisma from "../prisma";

class StudentController {
  async getStudent(userId) {
    const student = await addStudentIfDoesntExists(userId);
    return student;
  }

  async updateStudent(newStudentData) {
    let student = null;
    if (newStudentData.librusPassword === "") {
      student = await prisma.student.update({
        where: {
          id: newStudentData.id,
        },
        data: {
          displaySemester: newStudentData.displaySemester,
          number: newStudentData.number,
          librusLogin: newStudentData.librusLogin,
        },
      });
    } else {
      student = await prisma.student.update({
        where: {
          id: newStudentData.id,
        },
        data: {
          displaySemester: newStudentData.displaySemester,
          number: newStudentData.number,
          librusLogin: newStudentData.librusLogin,
          librusPassword: newStudentData.librusPassword,
        },
      });
    }

    return student;
  }
}

export default StudentController;
