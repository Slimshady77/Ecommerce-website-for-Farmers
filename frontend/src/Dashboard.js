import Lefty from "./Lefty";

function Dashboard() {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-4 border border-danger">{<Lefty />}</div>
          <div class="col-lg-8 border border-danger">
            <h1>Welcome to Admin Panel</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
