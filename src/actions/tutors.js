import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch"


export const getDocentes = (setDataTutor) => {
    return async(dispatch) => {
        console.log('---------------Docente')
        const resp = await fetchSinToken('bienestar/docentes');
        console.log(resp);
        const body = await resp.json();
        if (body) {
            setDataTutor(datas => [...datas, body])
        } else {
            console.log('Algo ta mal')
        }
    }

}

export const getDataStudent = (id_estudiante, setDataPlanValue) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`bienestar/planes?documentoEstudiante=${id_estudiante}`);
        console.log(resp);
        const body = await resp.json();
        console.log('body', body);
        if (body) {
            setDataPlanValue(datasP => [...datasP, body])
        }
    }
}

export const tutorAssignment = (documentoEstudiante, documentoDocente, codigoPlan) => {
    return async(dispatch) => {
        console.log(documentoEstudiante, documentoDocente, codigoPlan)
        const resp = await fetchSinToken('ingresoTutor', { documentoEstudiante, documentoDocente, codigoPlan }, 'POST');

        console.log(resp);
        const body = await resp.json();
        console.log(body);

    }
}

export const searchStudent = (teacher, setDataStudent) => {
    return async(dispatch) => {
        console.log(teacher)
        const resp = await fetchSinToken(`ingresoTutor?documentoDocente=${teacher}`);

        console.log(resp);
        const body = await resp.json();
        console.log(body);
        if (body) {
            setDataStudent(datas => [...datas, body])
        } else {
            console.log('Algo ta mal')
        }
    }
}

export const searchTeacher = (student, setDataTeacher) => {
    return async(dispatch) => {
        console.log(student)
        const resp = await fetchSinToken(`ingresoTutor?documentoEstudiante=${student}`);

        console.log(resp);
        const body = await resp.json();
        console.log(body);
        if (body) {
            setDataTeacher(datas => [...datas, body])
        } else {
            console.log('Algo ta mal')
        }

    }
}

export const getStudentTutorship = (teacher, setDataStudentTutorship) => {
    return async(dispatch) => {
        console.log('---------------------------Tutorship')
        const resp = await fetchSinToken(`manipularTutoria?documento_docente=${teacher}`)
        console.log(resp);
        const body = await resp.json();
        console.log(body)
        if (body) {
            setDataStudentTutorship(datas => [...datas, body])
        } else {
            console.log('Algo tamal')
        }
    }
}

export const tutorshipAssignment = (documento_docente, documento_estudiante, fecha_tutoria, tipo_usuario, id_estado_tutoria) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`manipularTutoria`, { documento_docente, documento_estudiante, fecha_tutoria, tipo_usuario, id_estado_tutoria }, 'POST');
        console.log('tutorAsingment', resp)
        const body = await resp.json();
        if (body.status){
            Swal.fire({
                title:
                  "Tutoria agendada",
                icon: "success",
                confirmButtonColor: "#005068",
              })
        }
        console.log('tutorAsingment', body)
    }
}

export const getTeacherTutorship = (student, setDataTeacherTutorship) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`manipularTutoria?documento_estudiante=${student}`)
        console.log(resp);
        const body = await resp.json();
        console.log('elbody')
        console.log(body)
        if (body) {
            setDataTeacherTutorship(datas => [...datas, body])
        } else {
            console.log('Algo tamal')
        }
    }
}