import Librus from "librus-api";
import Response from "../../../../utils/backend/Response";
import getUser from "../../../../utils/backend/getUser";
import prisma from "../../../../utils/backend/prisma";

const timetable = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const user = await getUser(req);
        if (user === null) {
          throw new Error("You are not logged in.");
        }
        const student = await prisma.student.findUnique({
          where: {
            id: user.id,
          },
        });
        const client = new Librus();
        await client.authorize(student.librusLogin, student.librusPassword);
        const timetable = await client.calendar.getTimetable();
        const calendar = await client.calendar.getCalendar();

        const response = new Response(false, null, { timetable, calendar });
        response.send(res);
      } catch (error) {
        const response = new Response(true, error.message);
        response.send(res);
      }
      break;
    default:
      const response = new Response(true, "Bad request.");
      response.send(res);
  }
};

export default timetable;
