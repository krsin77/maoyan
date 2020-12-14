// 封装接口
import http from "./http";

// 首页的最受欢迎列表接口
export const getRatedListApi = params => {
  return http.get("/rated/list", params);
};

// 首页的电影列表
export const getMovieListApi = params => {
  return http.get("/movies/list", params);
};

// 首页加载更多
export const getMovieListMoreApi = params =>{
  return http.post("/movies/more", params);
} 

export const getMovieDetailApi = params =>{
  return http.post("/movies/detail",params);
}

export const getCitiesListApi = params =>{
  return http.get("/area/list",params);
}
