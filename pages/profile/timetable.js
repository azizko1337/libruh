import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WithAuthentication from "../../utils/frontend/auth/WithAuthentication";
import DayList from "../../components/Timetable/DayList";
import Day from "../../components/Timetable/Day";
import getDayName from "../../utils/frontend/getDayName";

const Timetable = (props) => {
  const { student } = props;
  const router = useRouter();
  useEffect(() => {
    if (student === null) {
      router.push("/");
    }
  }, [student, router]);

  const [timetable, setTimetable] = useState([]);
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("/api/v1/librus/timetable", {
          method: "GET",
          credentials: "include",
        });
        res = await res.json();
        console.log(res);
        if (res.error === true) {
          throw new Error(res.emsg);
        }
        setTimetable(res.data.timetable);
        setCalendar(res.data.calendar);
      } catch (error) {
        router.push("/");
      }
    };
    fetchData();
  }, [setTimetable, setCalendar, router]);

  let today = new Date();
  let i = 1;
  while (!(today.getDay() > 0 && today.getDay() < 6)) {
    today = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
    i++;
  }
  const tommorow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const dayAfterTommorow = new Date(tommorow.getTime() + 24 * 60 * 60 * 1000);

  if (timetable.length < 1 || calendar.length < 1) return null;

  return (
    <DayList>
      <Day
        name={getDayName(today)}
        hours={timetable.hours}
        lessons={timetable.table[getDayName(today)]}
        events={calendar[today.getDate()]}
      />
      <Day
        name={getDayName(tommorow)}
        hours={timetable.hours}
        lessons={timetable.table[getDayName(tommorow)]}
        events={calendar[tommorow.getDate()]}
      />
      <Day
        name={getDayName(dayAfterTommorow)}
        hours={timetable.hours}
        lessons={timetable.table[getDayName(dayAfterTommorow)]}
        events={calendar[dayAfterTommorow.getDate()]}
      />
    </DayList>
  );
};

export default WithAuthentication(Timetable);
