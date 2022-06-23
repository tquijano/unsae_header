import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch"


export const getObservationDocente = (id_docente, setDataObservations) => {
    console.log(id_docente)
    return async(dispatch) => {
        const resp = await fetchSinToken(`observaciones?documento=${id_docente}`);
        console.log(resp);
        const body = await resp.json();
        console.log(body);
        if (body) {
            setDataObservations(datas => [...datas, body])
        } else {
            console.log('Algo ta mal')
        }
    }
}

export const getObservations= (setDataObservations) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`observaciones/all`);
      console.log(resp);
      const body = await resp.json();
      if (body) {
          setDataObservations(datas => [...datas, body])
      } else {
          console.log('Algo ta mal')
      }
  }

}

export const createObservation = (documento_estudiante, documento_docente, codigo_plan, observacion) => {
  return async(dispatch) => {
      console.log(documento_estudiante, documento_docente, codigo_plan, observacion)
      const resp = await fetchSinToken('observaciones', { documento_docente, documento_estudiante, codigo_plan, observacion }, 'POST');

      console.log(resp);
      const body = await resp.json();
      console.log('create obervation',body);
      if (body.status) {
      Swal.fire("Observacion exitosamente creada");

    } else {
        console.log('Algo ta mal')
    }

  }
}
