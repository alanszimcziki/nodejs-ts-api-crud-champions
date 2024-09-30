import * as HttpResponse from "../utils/http-helper";
import * as repositoriesClubs from "../repositories/clubs-repository"


export const getClubsService = async() => {
  const data = await repositoriesClubs.findAllClubs();
  const response = HttpResponse.ok(data);
  return response;
}