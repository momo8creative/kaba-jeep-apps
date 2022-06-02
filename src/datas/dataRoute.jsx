import Layout from "../components/layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import AddPemakaianPage from "../pages/pemakaian/AddPemakaianPage";
import DetailPemakaianPage from "../pages/pemakaian/DetailPemakaianPage";
import EditPemakaianPage from "../pages/pemakaian/EditPemakaianPage";
import ViewPemakaianPage from "../pages/pemakaian/ViewPemakaianPage";

const dataRoute = () => {
  return [
    {
      path: "/",
      component: <Layout />,
      lists: [{ path: "", component: <Dashboard /> }],
    },

    {
      path: "/pemakaian",
      component: <Layout />,
      lists: [
        { path: "", component: <ViewPemakaianPage /> },
        { path: "add", component: <AddPemakaianPage /> },
        { path: "edit/:_id", component: <EditPemakaianPage /> },
        { path: ":_id", component: <DetailPemakaianPage /> },
      ],
    },
  ];
};

export default dataRoute;
