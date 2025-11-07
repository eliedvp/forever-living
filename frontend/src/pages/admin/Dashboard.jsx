
import React from "react";
 
const Dashboard = () => {
  return (
    
      <main className="admin-main">
  <div className="container-fluid p-4 p-lg-5">
    {/* Page Header */}
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h1 className="h3 mb-0">Dashboard</h1>
        <p className="text-muted mb-0">
          Welcome back! Here's what's happening.
        </p>
      </div>
      <div className="d-flex gap-2">
        <button type="button" className="btn btn-primary">
          <i className="bi bi-plus-lg me-2" />
          New Item
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-toggle="tooltip"
          title="Refresh data"
        >
          <i className="bi bi-arrow-clockwise icon-hover" />
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-toggle="tooltip"
          title="Export data"
        >
          <i className="bi bi-download icon-hover" />
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-toggle="tooltip"
          title="Settings"
        >
          <i className="bi bi-gear icon-hover" />
        </button>
      </div>
    </div>
    {/* Stats Cards with Alpine.js */}
    <div className="row g-4 mb-4">
      <div className="col-xl-3 col-lg-6" x-data="statsCounter(12426, 5)">
        <div className="card stats-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="stats-icon bg-primary bg-opacity-10 text-primary">
                  <i className="bi bi-people" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="mb-0 text-muted">Total Users</h6>
                <h3
                  className="mb-0"
                  x-text="value.toLocaleString()"
                  data-stat-value=""
                >
                  12,426
                </h3>
                <small className="text-success">
                  <i className="bi bi-arrow-up" /> +12.5%
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6">
        <div className="card stats-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="stats-icon bg-success bg-opacity-10 text-success">
                  <i className="bi bi-graph-up" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="mb-0 text-muted">Revenue</h6>
                <h3 className="mb-0">$54,320</h3>
                <small className="text-success">
                  <i className="bi bi-arrow-up" /> +8.2%
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6">
        <div className="card stats-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="stats-icon bg-warning bg-opacity-10 text-warning">
                  <i className="bi bi-bag-check" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="mb-0 text-muted">Orders</h6>
                <h3 className="mb-0">1,852</h3>
                <small className="text-danger">
                  <i className="bi bi-arrow-down" /> -2.1%
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6">
        <div className="card stats-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="stats-icon bg-info bg-opacity-10 text-info">
                  <i className="bi bi-clock-history" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="mb-0 text-muted">Avg. Response</h6>
                <h3 className="mb-0">2.3s</h3>
                <small className="text-success">
                  <i className="bi bi-arrow-up" /> +5.4%
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Chart Section */}
    <div className="row g-4 mb-4">
      <div className="col-lg-8">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Revenue Overview</h5>
            <div className="btn-group btn-group-sm" role="group">
              <button
                type="button"
                className="btn btn-outline-primary active"
                data-chart-period="7d"
              >
                7D
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                data-chart-period="30d"
              >
                30D
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                data-chart-period="90d"
              >
                90D
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                data-chart-period="1y"
              >
                1Y
              </button>
            </div>
          </div>
          <div className="card-body">
            <canvas id="revenueChart" height={250} />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Recent Activity</h5>
          </div>
          <div className="card-body">
            <div className="activity-feed">
              <div className="activity-item">
                <div className="activity-icon bg-primary bg-opacity-10 text-primary">
                  <i className="bi bi-person-plus" />
                </div>
                <div className="activity-content">
                  <p className="mb-1">New user registered</p>
                  <small className="text-muted">2 minutes ago</small>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon bg-success bg-opacity-10 text-success">
                  <i className="bi bi-bag-check" />
                </div>
                <div className="activity-content">
                  <p className="mb-1">Order #1234 completed</p>
                  <small className="text-muted">5 minutes ago</small>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon bg-warning bg-opacity-10 text-warning">
                  <i className="bi bi-exclamation-triangle" />
                </div>
                <div className="activity-content">
                  <p className="mb-1">Server maintenance scheduled</p>
                  <small className="text-muted">1 hour ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Additional Charts Row */}
    <div className="row g-4 mb-4">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">User Growth (Last 7 Days)</h5>
          </div>
          <div className="card-body">
            <canvas id="userGrowthChart" height={200} />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Order Status Distribution</h5>
          </div>
          <div className="card-body">
            <canvas id="orderStatusChart" height={200} />
          </div>
        </div>
      </div>
    </div>
    {/* New Widgets Row */}
    <div className="row g-4 mb-4">
      {/* Recent Orders */}
      <div className="col-lg-8">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Recent Orders</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody id="recent-orders-table">
                  {/* Orders will be injected here by dashboard.js */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Storage Status */}
      <div className="col-lg-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Storage Status</h5>
          </div>
          <div className="card-body">
            <div id="storageStatusChart" />
          </div>
        </div>
      </div>
    </div>
    {/* Sales by Location */}
    <div className="row g-4">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Sales by Location</h5>
          </div>
          <div className="card-body">
            <div
              id="salesByLocationChart"
              style={{ minHeight: 400, width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

     
  );
};

export default Dashboard;
