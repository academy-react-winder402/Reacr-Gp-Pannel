import { Mail, Home, Airplay, Circle } from "react-feather";
import UsersList from "../../pages/Users/UsersList/UsersList";
import NewsList from "../../pages/newsC/newsList/NewsList";
import CreateNews from "../../pages/newsC/createNews/CreateNews";
// import chat from "../../@fake-db"

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

},

{
  id:'news',
  title:'اخبار',
  icon:<Circle size={12} />,
  children: [
    {
      id: "NewsList",
      title: 'لیست اخبار',
      icon: <Circle size={12} />,
      navLink: "/NewsList",
    },
    {
      id: "CreateNews",
      title: 'ایجاد اخبار',
      icon: <Circle size={12} />,
      navLink: "/CreateNews",
    },      
  ],

},

// {
//   id:'Chat',
//   title:'Chat',
//   icon:<Circle size={20} />,
//   navLink: "/Chat",
// }

];
