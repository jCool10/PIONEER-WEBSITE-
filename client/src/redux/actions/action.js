import { MEMBER_DETAIL_TYPE } from "../types/MemberType";
import { listMember } from "../../assets/data";

export const MemberDetailAction = (id) => ({
  type: MEMBER_DETAIL_TYPE,
  payload: id,
});

// export const MemberDetailAction = (id) => {
//   return async (dispatch) => {
//     try {
//       const result = listMember.filter((item) => item.id === id);
//       console.log(result);

//       dispatch({
//         type: MEMBER_DETAIL_TYPE,
//         payload: result,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
