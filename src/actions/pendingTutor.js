import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch";

export const getPendingTutor = ( type_user, documento, setDataTutorialPending ) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`tutoriasPenYAce?id_tipo_usuario=${type_user}&documento=${documento}`);
      console.log(resp);
      const body = await resp.json();
      // console.log(body);
      if (body) {
        setDataTutorialPending(data => [...data, body])
        console.log(`salio bien ${type_user === 1 ? ' estudiante': ' docente'} tutorias pendientes`, body)
      } else {
          console.log('Algo ta mal')
      }
  }
}

export const tutoringProvided = (id_tipo_usuario, documento_docente, documento_estudiante, fecha_de_la_tutoria) => {
  console.log('Create remision',id_tipo_usuario, documento_docente, documento_estudiante, fecha_de_la_tutoria )
  return async(dispatch) => {
      console.log(id_tipo_usuario, documento_docente, documento_estudiante, fecha_de_la_tutoria);
      const resp = await fetchSinToken('tutoriasPenYAce', { id_tipo_usuario, documento_docente, documento_estudiante, fecha_de_la_tutoria }, 'POST');

      console.log(resp);
      const body = await resp.json();
      console.log('tutoria realizada',body);
      if (body.status == 'ok' ) {
      Swal.fire("Se ha marcado la tutoria como Realizada", "", "success");

    } else {
        console.log('Algo ta mal')
    }

  }
}