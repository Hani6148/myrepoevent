import axios from "axios";

export default {
 
  getUsers:function(){
    return axios.get("/api/users/all");
  },

  createEvent:function(eventData){
    return axios.post("/api/event/create",eventData);
  },
  InviteFriends:function(Invite){
    return axios.post("/api/Invite/",Invite);
  },

}
 