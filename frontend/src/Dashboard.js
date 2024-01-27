import Lefty from "./Lefty";

function Dashboard() {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-4 border ">{<Lefty />}</div>
          <div class="col-lg-8 border ">
            <h1>Welcome to Admin Panel</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
