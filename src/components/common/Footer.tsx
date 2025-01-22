import { Card, CardContent } from "../ui/card";

const Footer = () => {
  return (
    <Card className="m-2">
      <CardContent className="flex items-center justify-center p-4">
        <div className="">
          &copy; {new Date().getFullYear()} Demo Project. All rights reserved.
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;
