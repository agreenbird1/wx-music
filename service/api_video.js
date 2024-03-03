import request from "../utils/request"

export function getTopMvs(offset, limit = 10) {
  return request.get("/top/mv", { offset, limit })
}

export function getMvUrl(id) {
  return request.get("/mv/url", {
    id
  })
}

export function getMvDetail(mvid) {
  return request.get("/mv/detail", {
    mvid
  })
}

export function getRelevantMv(mvid) {
  return request.get("/simi/mv", {
    mvid
  })
}