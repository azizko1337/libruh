import styled from "styled-components";
import Title from "../Text/Title";
import LessonList from "./LessonList";
import Lesson from "./Lesson";
import EventList from "./EventList";
import Event from "./Event";
import Highlight from "../Text/Highlight";

const DayWrapper = styled.li`
  border-bottom: 5px solid ${({ theme }) => theme.color.secondary};
  padding: 10px 0;
  margin: 10px 0;
  width: 100%;
`;

const Day = (props) => {
  const { name, hours, lessons, events } = props;

  return (
    <DayWrapper>
      <Title>{name}</Title>
      <EventList>
        {events.map((event, index) => (
          <Event key={`e${index}`}>{event.title}</Event>
        ))}
      </EventList>
      <LessonList>
        {lessons.map((lesson, index) =>
          lesson !== null ? (
            <Lesson key={index}>
              {lesson !== null ? (
                <Highlight color="secondary">{index}.</Highlight>
              ) : null}{" "}
              {lesson !== null ? <Highlight>[{hours[index]}]</Highlight> : null}
              {<br />}
              {lesson?.title.replace(/(\r\n|\n|\r)/gm, "")}
            </Lesson>
          ) : null
        )}
      </LessonList>
    </DayWrapper>
  );
};

export default Day;
