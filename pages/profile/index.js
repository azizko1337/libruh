import { useState, useEffect } from "react";
import Link from "next/link";
import WithAuthentication from "../../utils/frontend/auth/WithAuthentication";
import Form from "../../components/Form/Form";
import Label from "../../components/Form/Label";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Highlight from "../../components/Text/Highlight";
import { useRouter } from "next/router";

const Profile = (props) => {
  const { student } = props;
  const router = useRouter();
  useEffect(() => {
    if (student === null) {
      router.push("/");
    }
  }, [student, router]);

  const [studentDataForm, setStudentDataForm] = useState({
    feedback: "",
    displaySemester: student?.displaySemester,
    number: student?.number,
    librusLogin: student?.librusLogin,
    librusPassword: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setStudentDataForm({ ...studentDataForm, [name]: value });
  };

  const areChangesInserted = () => {
    if (
      student?.displaySemester !== studentDataForm.displaySemester ||
      student?.number !== studentDataForm.number ||
      student?.librusLogin !== studentDataForm.librusLogin ||
      studentDataForm.librusPassword !== ""
    ) {
      return true;
    }
    return false;
  };

  if (student === null) {
    router.push("/");
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("/api/v1/profile", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displaySemester: studentDataForm.displaySemester,
          number: studentDataForm.number,
          librusLogin: studentDataForm.librusLogin,
          librusPassword: studentDataForm.librusPassword,
        }),
      });
      res = await res.json();
      if (res.error === true) {
        throw new Error(res.emsg);
      }
      router.reload();
    } catch (error) {
      setStudentDataForm({ ...studentDataForm, feedback: error.message });
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Highlight color="accent">{studentDataForm.feedback}</Highlight>
      <Label htmlFor="displaySemester">Display semester:</Label>
      <Input
        onChange={handleInputChange}
        name="displaySemester"
        type="number"
        value={studentDataForm.displaySemester}
      />
      <Label htmlFor="number">Number:</Label>
      <Input
        onChange={handleInputChange}
        name="number"
        type="number"
        value={studentDataForm.number}
      />
      <Label htmlFor="librusLogin">Librus login:</Label>
      <Input
        onChange={handleInputChange}
        name="librusLogin"
        type="text"
        value={studentDataForm.librusLogin}
      />
      <Label htmlFor="librusPassword">Librus password:</Label>
      <Input
        onChange={handleInputChange}
        name="librusPassword"
        type="password"
        value={studentDataForm.librusPassword}
      />
      {areChangesInserted() ? (
        <Button onClick={handleFormSubmit}>SAVE CHANGES</Button>
      ) : null}
      <Link href={`${process.env.AUTH_SERVER}/profile`}>
        <Button>ACCOUNT MANAGEMENT</Button>
      </Link>
    </Form>
  );
};

export default WithAuthentication(Profile);
