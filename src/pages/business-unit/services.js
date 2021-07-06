import {FetchService} from "../../services";

const Fetch = new FetchService()

export const GetBizList = async (params = {provinceId: 1}) => {
  try {
    const data = await Fetch.get("/search/deals", params);

    //  do something

    return data;
  } catch (err) {
    throw err
  }
}
