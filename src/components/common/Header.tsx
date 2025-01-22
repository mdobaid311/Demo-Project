import { IoMdLogOut } from "react-icons/io";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const Header = () => {
  return (
    <Card className="m-2">
      <CardContent className="p-2">
        <div className="flex items-center justify-between">
          <div className="h-10 flex items-center gap-4">
            <img
              src={logo}
              alt="demo app logo"
              className="object-cover h-full"
            />
            <div className="uppercase font-semibold text-xl">Demo App </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={user} className="object-cover" />
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h3 className="font-semibold">Mohammed Obaid</h3>
                <p className="text-xs">Admin</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <Button variant="destructive">
                <IoMdLogOut />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
