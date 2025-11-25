import React from "react";


export default function Analytics() {
  return (
    <main className="admin-main">
      <div className="container-fluid p-4 p-lg-5">
        {/* Page Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-5">
          <div>
            <h1 className="h3 mb-0">Analytics Dashboard</h1>
            <p className="text-muted mb-0">
              Comprehensive insights and performance metrics
            </p>
          </div>
          <div className="d-flex gap-2">
            <div className="btn-group" role="group">
              <input
                type="radio"
                className="btn-check"
                name="dateRange"
                id="today"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn btn-outline-secondary btn-sm" htmlFor="today">
                Today
              </label>
              <input
                type="radio"
                className="btn-check"
                name="dateRange"
                id="week"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary btn-sm" htmlFor="week">
                7D
              </label>
              <input
                type="radio"
                className="btn-check"
                name="dateRange"
                id="month"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary btn-sm" htmlFor="month">
                30D
              </label>
              <input
                type="radio"
                className="btn-check"
                name="dateRange"
                id="quarter"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-secondary btn-sm"
                htmlFor="quarter"
              >
                90D
              </label>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => console.log("Export report")}
            >
              <i className="bi bi-download me-2"></i>Export Report
            </button>
          </div>
        </div>

        {/* Analytics Dashboard Container */}
        <div data-component="analyticsComponent">
          {/* Key Metrics Row */}
          <div className="row g-4 g-lg-5 g-xl-6 mb-5 mb-lg-5 mb-xl-6">
            {/* Revenue */}
            <div className="col-xl-3 col-lg-6">
              <div className="card metric-card revenue">
                <div className="card-body p-3 p-lg-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="text-muted mb-1">Total Revenue</h6>
                      <h3 className="mb-0">$124,592</h3>
                      <small className="trend-up">
                        <i className="bi bi-arrow-up"></i> +12.5% from last month
                      </small>
                    </div>
                    <div className="stats-icon bg-success bg-opacity-10 text-success">
                      <i className="bi bi-currency-dollar"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visitors */}
            <div className="col-xl-3 col-lg-6">
              <div className="card metric-card visitors">
                <div className="card-body p-3 p-lg-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="text-muted mb-1">Total Visitors</h6>
                      <h3 className="mb-0">45,672</h3>
                      <small className="trend-up">
                        <i className="bi bi-arrow-up"></i> +8.2% from last month
                      </small>
                    </div>
                    <div className="stats-icon bg-primary bg-opacity-10 text-primary">
                      <i className="bi bi-people"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion */}
            <div className="col-xl-3 col-lg-6">
              <div className="card metric-card conversion">
                <div className="card-body p-3 p-lg-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="text-muted mb-1">Conversion Rate</h6>
                      <h3 className="mb-0">3.45%</h3>
                      <small className="trend-up">
                        <i className="bi bi-arrow-up"></i> +2.1% from last month
                      </small>
                    </div>
                    <div className="stats-icon bg-warning bg-opacity-10 text-warning">
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bounce Rate */}
            <div className="col-xl-3 col-lg-6">
              <div className="card metric-card bounce">
                <div className="card-body p-3 p-lg-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="text-muted mb-1">Bounce Rate</h6>
                      <h3 className="mb-0">24.8%</h3>
                      <small className="trend-down">
                        <i className="bi bi-arrow-down"></i> -1.8% from last month
                      </small>
                    </div>
                    <div className="stats-icon bg-danger bg-opacity-10 text-danger">
                      <i className="bi bi-arrow-counterclockwise"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row 1 */}
          <div className="row g-4 g-lg-5 g-xl-6 mb-5 mb-lg-5 mb-xl-6">
            {/* Revenue Chart */}
            <div className="col-lg-8">
              <div className="card h-100">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Revenue Analytics</h5>
                  <div className="btn-group btn-group-sm" role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name="revenueView"
                      id="revenue-daily"
                      autoComplete="off"
                      defaultChecked
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="revenue-daily"
                    >
                      Daily
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="revenueView"
                      id="revenue-weekly"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="revenue-weekly"
                    >
                      Weekly
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="revenueView"
                      id="revenue-monthly"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor="revenue-monthly"
                    >
                      Monthly
                    </label>
                  </div>
                </div>
                <div className="card-body p-3 p-lg-4">
                  <div className="chart-container" style={{ position: "relative", overflow: "hidden" }}>
                    <div id="revenueChart"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-header">
                  <h5 className="card-title mb-0">Traffic Sources</h5>
                </div>
                <div className="card-body p-3 p-lg-4">
                  <div id="trafficSourcesChart" style={{ height: "200px" }} className="mb-4"></div>
                  {/* Liste des sources */}
                  <div className="traffic-sources-list">
                    {[
                      { color: "#007bff", name: "Organic Search", percent: "42.3%", value: "19,314" },
                      { color: "#28a745", name: "Direct", percent: "31.8%", value: "14,519" },
                      { color: "#fd7e14", name: "Social Media", percent: "16.4%", value: "7,490" },
                      { color: "#e74c3c", name: "Referral", percent: "9.5%", value: "4,349" },
                    ].map((src, i) => (
                      <div key={i} className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div
                            className="me-2"
                            style={{
                              width: "12px",
                              height: "12px",
                              backgroundColor: src.color,
                              borderRadius: "50%",
                            }}
                          ></div>
                          <span className="text-muted">{src.name}</span>
                        </div>
                        <div className="text-end">
                          <div className="fw-medium">{src.percent}</div>
                          <small className="text-muted">{src.value}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

           
        </div>
      </div>
    </main>
  );
}
