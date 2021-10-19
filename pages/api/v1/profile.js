import Librus from "librus-api";
import getUser from "../../../utils/backend/getUser";
import Response from "../../../utils/backend/Response";
import StudentController from "../../../utils/backend/controllers/StudentController";
const studentController = new StudentController();

const profile = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const user = await getUser(req);
        if (user === null) {
          throw new Error("You are not logged in.");
        }
        const student = await studentController.getStudent(user.id);
        const response = new Response(false, null, { student });
        response.send(res);
      } catch (error) {
        const response = new Response(true, error.message);
        response.send(res);
      }
      break;
    case "PUT":
      try {
        const user = await getUser(req);
        if (user === null) {
          throw new Error("You are not logged in.");
        }
        const { displaySemester, number, librusLogin, librusPassword } =
          req.body;

        const student = await studentController.updateStudent({
          id: user.id,
          displaySemester: parseInt(displaySemester),
          number: parseInt(number),
          librusLogin,
          librusPassword,
        });

        const response = new Response(false, null, {
          id: user.id,
          displaySemester: student.displaySemester,
          number: student.number,
          librusLogin: student.librusLogin,
        });
        response.send(res);
      } catch (error) {
        console.log(error);
        const response = new Response(true, error.message);
        response.send(res);
      }
      break;
    default:
      const response = new Response(true, "Bad request.");
      response.send(res);
  }
};

export default profile;
