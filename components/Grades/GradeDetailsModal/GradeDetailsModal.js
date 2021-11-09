import styled from "styled-components";
import Wrapper from "./Wrapper";
import GradeBox from "../GradeBox";
import Title from "../../Text/Title";
import Highlight from "../../Text/Highlight";
import GradeDetailsList from "./GradeDetailsList";
import GradeDetailsListElement from "./GradeDetailsListElement";

const GradeDetailsModal = (props) => {
  const { grade, onClick } = props;
  return (
    <Wrapper onClick={onClick}>
      <Title>
        <GradeBox inline>{grade.grade}</GradeBox> - {grade.lesson}
      </Title>
      <GradeDetailsList>
        <GradeDetailsListElement>
          Kategoria: <Highlight>{grade.category}</Highlight>
        </GradeDetailsListElement>
        {grade.multiplier ? (
          <GradeDetailsListElement>
            Waga: <Highlight>{grade.multiplier}</Highlight>
          </GradeDetailsListElement>
        ) : null}
        <GradeDetailsListElement>
          Data: <Highlight>{grade.date}</Highlight>
        </GradeDetailsListElement>
        <GradeDetailsListElement>
          Nauczyciel: <Highlight>{grade.teacher}</Highlight>
        </GradeDetailsListElement>
        {grade.comment ? (
          <GradeDetailsListElement>
            Komentarz: <Highlight>{grade.comment}</Highlight>
          </GradeDetailsListElement>
        ) : null}
        <GradeDetailsListElement>
          Do średniej:{" "}
          <Highlight>{grade.inAverage === true ? "TAK" : "NIE"}</Highlight>
        </GradeDetailsListElement>
      </GradeDetailsList>
    </Wrapper>
  );
};

export default GradeDetailsModal;
