import request from "../utils/request"

export function getBanners() {
  return request.get("/banner", { type: 2 })
}