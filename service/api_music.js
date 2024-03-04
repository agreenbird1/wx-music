import request from "../utils/request"

export function getBanners() {
  return request.get("/banner", {
    type: 2
  })
}

export function getPlaylist(id) {
  return request.get("/playlist/detail", { id })
}