import request from "../utils/request"

export function getTopMvs(offset, limit = 10) {
  return request.get("/top/mv", { offset, limit })
}