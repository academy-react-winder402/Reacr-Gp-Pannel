import { Mail, Home, Airplay, Circle } from "react-feather";
import UsersList from "../../pages/Users/UsersList/UsersList";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "secondPage",
    title: " کاربران",
    icon: <Mail size={20} />,
    children: [
      {
        id: "UsersList",
        title: "لیست کاربران",
        icon: <Circle size={12} />,
        navLink: "/UsersList",
      },
      {
        id: "CreateUser",
        title: "ایجاد کاربران",
        icon: <Circle size={12} />,
        navLink: "/CreateUser",
      },      
    ],
  },

{
  id:'cours',
  title:' دوره ها',
  icon:<Circle size={12} />,
  children: [
    {
      id: "CoursesList",
      title: "لیست دوره ها",
      icon: <Circle size={12} />,
      navLink: "/CoursesList",
    },
    {
      id: "CreateCourse",
      title: "ایجاد دوره",
      icon: <Circle size={12} />,
      navLink: "/CreateCourse",
    },      
  ],

}


];
