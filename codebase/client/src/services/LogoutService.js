import history from '../helper/history';
import checkSession from '../helper/checkSession';
export default function Logout() {
  if(localStorage.getItem("token")){
    localStorage.removeItem("username")
  }
  localStorage.removeItem("username")
  {window.location.reload()}
  
}