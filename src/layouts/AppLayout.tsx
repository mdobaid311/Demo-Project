import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { AppSidebar } from "@/components/common/sidebar/app-sidebar";
import Topbar from "@/components/common/topbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const pathname = window.location.pathname;
  //   useEffect(() => {
  //     // get user data from local storage
  //     const userName = localStorage.getItem("userName");
  //     const userType = localStorage.getItem("userType");
  //     const userID = localStorage.getItem("userID");
  //     const clientID = localStorage.getItem("clientID");
  //     const email = localStorage.getItem("email");
  //     const accessToken = localStorage.getItem("access_token");
  //     if (!userName || !userType || !userID || !accessToken) {
  //       navigate("/auth/login?redirect=" + pathname);
  //       return;
  //     }
  //     dispatch(
  //       login({
  //         email: email || "",
  //         userName: userName || "",
  //         userType: userType || "",
  //         userID: userID || "",
  //         clientID: clientID || "",
  //       })
  //     );
  //   }, []);

  return (
    <div className="flex flex-col" style={{ minHeight: "100vh" }}>
      <Header />
      <SidebarProvider defaultOpen={false} className="flex-1">
        <AppSidebar />
        <div className="flex-1 p-2 flex flex-col gap-2">
          <Topbar />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
      <Footer />
    </div>
  );
};

export default AppLayout;
