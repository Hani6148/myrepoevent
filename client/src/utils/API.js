import axios from "axios";

export default {
 
  getUsers:function(){
    return axios.get("/api/users/all");
  },

  createEvent:eventData=>{
    return axios.post("/api/event/create",eventData);
  },
  InviteFriends:function(Invite){
    return axios.post("/api/Invite/",Invite);
  },

}
 