import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { getTeacherTutorship, tutorshipAssignment } from "../../actions/tutors";
import { format } from "date-fns";
import es from 'date-fns/locale/es';

const TutorshipStudent = () => {
    const dispatch = useDispatch();
    const [dataTeacherTutorship, setDataTeacherTutorship] = useState([]);
    const { user, id } = useSelector((state) => state.auth);

    // console.log(id);
    // console.log(user);

    const handleSelectTeacherChange = (e) => {
        setTeacherValue(e.target.value);
    };

    const [teacherValue, setTeacherValue] = useState("");
    console.log(teacherValue);

    useEffect(() => {
        dispatch(getTeacherTutorship(id, setDataTeacherTutorship));
    }, [dispatch, setDataTeacherTutorship]);

    const [dateSelected, setDateSelect] = useState("");

    const handleRequest = (e) => {
        e.preventDefault();
        dispatch(
            tutorshipAssignment(
                teacherValue,
                id,
                `${dateSelected.getFullYear()}-${dateSelected.getMonth() + 1
                }-${dateSelected.getDate()}`,
                "estudiante"
            )
        );
    }

    const footer = dateSelected ? (
        <p>{format(dateSelected, 'PPP', {locale: es})}</p>
    ) : (
        <p>Selecciona una fecha</p>
    );

    // console.log(dataTeacherTutorship[0]);
    return (
        <div>
            {dataTeacherTutorship[0] ? (
                <>
                    <select
                        name="select"
                        value={teacherValue}
                        onChange={handleSelectTeacherChange}
                    >
                        <option>Seleccione un tutor</option>
                        {dataTeacherTutorship[0].map((teacher) => (
                            <option
                                value={teacher.documento_docente}
                                key={teacher.documento_docente}
                            >
                                {teacher.apellidos} {teacher.nombres}
                            </option>
                        ))}
                    </select>
                    <DayPicker
                        mode="single"
                        required
                        locale={es}
                        selected={dateSelected}
                        onSelect={setDateSelect}
                        footer={footer}
                    />
                    <button onClick={handleRequest}>
                        Solicitar Tutoría
                    </button>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default TutorshipStudent;
