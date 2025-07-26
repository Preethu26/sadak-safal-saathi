import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">SS</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sadak Safal Saathi
          </h1>
        </div>
        
        <nav className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/marketplace")}
            className="text-foreground hover:text-primary"
          >
            Marketplace
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => navigate("/about")}
            className="text-foreground hover:text-primary"
          >
            About
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate("/vendor-login")}
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Vendor Login
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate("/supplier-login")}
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Supplier Login
          </Button>
          <Button 
            variant="vendor"
            onClick={() => navigate("/vendor-portal")}
          >
            Vendor Portal
          </Button>
          <Button 
            variant="supplier"
            onClick={() => navigate("/supplier-portal")}
          >
            Supplier Portal
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;