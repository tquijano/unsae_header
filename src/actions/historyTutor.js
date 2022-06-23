import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch";

export const getHistoryTutorStudent = ( documento_estudiante, setDataTutorialHistory ) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`estudiante/tutorias/historial?documentoEstudiante=${documento_estudiante}`);
      console.log(resp);
      const body = await resp.json();
      // console.log(body);
      if (body) {
        setDataTutorialHistory(data => [...data, body])
        console.log('salio bien', body)
      } else {
          console.log('Algo ta mal')
      }
  }

}

export const getHistoryTutorTeacher = ( documento_docente, setDataTutorialHistory ) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`docente/tutorias/historial?documentoDocente=${documento_docente}`);
      console.log(resp);
      const body = await resp.json();
      // console.log(body);
      if (body) {
        setDataTutorialHistory(data => [...data, body])
        console.log('salio bien docentes', body)
      } else {
          console.log('Algo ta mal')
      }
  }

}

export const getHistoryTutor = ( setDataTutorialHistory) => {
  return async(dispatch) => {
      const resp = await fetchSinToken('bienestar/tutorias/historial');
      console.log(resp);
      const body = await resp.json();
      // console.log(body);
      if (body) {
        setDataTutorialHistory(data => [...data, body])
        console.log('salio bien bienestar', body)
      } else {
          console.log('Algo ta mal')
      }
  }

}