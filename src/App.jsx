// Main App component that sets up the layout and home page
import MainLayout from "./components/ui/MainLayout/MainLayout";
import Home from "./components/pages/Home/Home";

// App function returns the main layout with the Home page
export default function App(){
  return(<>
    <MainLayout>
      <Home />
    </MainLayout>
  </>);
}
