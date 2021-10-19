import Link from "next/link";
import LinkButton from "../components/Form/LinkButton";
import WithAuthentication from "../utils/frontend/auth/WithAuthentication";
import Paragraph from "../components/Text/Paragraph";

const Index = (props) => {
  const { student } = props;

  if (student !== null) {
    return (
      <>
        <Link href="/profile" passHref>
          <LinkButton>My profile - {student.librusLogin}</LinkButton>
        </Link>
        <Link href="/profile/timetable" passHref>
          <LinkButton>Timetable</LinkButton>
        </Link>
        <Link href="/profile/grades" passHref>
          <LinkButton>Grades</LinkButton>
        </Link>
      </>
    );
  }
  return (
    <>
      <Paragraph>
        To use Libruh log in to the website antonizalupka.tk. Then come back
        here.
      </Paragraph>
      <Link href={`${process.env.AUTH_SERVER}`} passHref>
        <LinkButton>CREATE ACCOUNT OR LOGIN</LinkButton>
      </Link>
    </>
  );
};

export default WithAuthentication(Index);
