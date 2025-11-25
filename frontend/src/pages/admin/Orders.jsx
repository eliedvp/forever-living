import React, { useState, useEffect } from "react";
import { BsDownload, BsArrowRepeat, BsPlusLg, BsBagCheck, BsClock, BsTruck, BsCurrencyDollar, BsArrowUp, BsExclamationCircle, BsArrowRight, BsThreeDots, BsEye, BsPrinter, BsXCircle } from "react-icons/bs";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, shipped: 0, revenue: 0 });
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Simule les données
  useEffect(() => {
    const sampleOrders = Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      orderNumber: `#ORD-${1000 + i}`,
      customer: {
        name: `Customer ${i + 1}`,
        email: `customer${i + 1}@example.com`,
        avatar: `https://i.pravatar.cc/40?img=${i + 1}`,
      },
      itemCount: Math.floor(Math.random() * 5) + 1,
      items: [{ name: "Product " + (i + 1) }],
      total: (Math.random() * 500).toFixed(2),
      status: ["pending", "processing", "shipped", "delivered", "cancelled"][i % 5],
      orderDate: new Date().toISOString().split("T")[0],
    }));

    setOrders(sampleOrders);
    setFilteredOrders(sampleOrders);
    setStats({
      total: sampleOrders.length,
      pending: sampleOrders.filter(o => o.status === "pending").length,
      shipped: sampleOrders.filter(o => o.status === "shipped").length,
      revenue: sampleOrders.reduce((sum, o) => sum + parseFloat(o.total), 0),
    });
  }, []);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const filterOrders = () => {
    let filtered = [...orders];
    if (searchQuery)
      filtered = filtered.filter(o =>
        o.customer.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    if (statusFilter)
      filtered = filtered.filter(o => o.status === statusFilter);
    setFilteredOrders(filtered);
    setCurrentPage(1);
  };

  const toggleAll = (checked) => {
    setSelectedOrders(checked ? filteredOrders.map(o => o.id) : []);
  };

  const bulkAction = (action) => {
    alert(`Applied "${action}" to ${selectedOrders.length} order(s)`);
    setSelectedOrders([]);
  };

  const sortBy = (field) => {
    const sorted = [...filteredOrders].sort((a, b) =>
      a[field] > b[field] ? 1 : -1
    );
    setFilteredOrders(sorted);
  };

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const exportOrders = () => alert("Exporting orders...");
  const viewOrder = (order) => alert("Viewing " + order.orderNumber);
  const trackOrder = (order) => alert("Tracking " + order.orderNumber);
  const printInvoice = (order) => alert("Printing invoice for " + order.orderNumber);
  const cancelOrder = (order) => alert("Cancelling " + order.orderNumber);

  const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <main className="admin-main">
      <div className="container-fluid p-4 p-lg-5">
        
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h1 className="h3 mb-0">Order Management</h1>
            <p className="text-muted mb-0">Track orders, manage fulfillment, and analyze sales</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary" onClick={exportOrders}>
              <BsDownload className="me-2" /> Export
            </button>
            <button className="btn btn-outline-secondary">
              <BsArrowRepeat className="me-2" /> Bulk Update
            </button>
            <button className="btn btn-primary">
              <BsPlusLg className="me-2" /> New Order
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-5">
          <div className="col-xl-3 col-lg-6">
            <div className="card stats-card p-3">
              <div className="d-flex align-items-center">
                <div className="stats-icon bg-primary bg-opacity-10 text-primary me-3">
                  <BsBagCheck />
                </div>
                <div>
                  <h6 className="mb-0 text-muted">Total Orders</h6>
                  <h3>{stats.total}</h3>
                  <small className="text-success"><BsArrowUp /> +12% from last month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="card stats-card p-3">
              <div className="d-flex align-items-center">
                <div className="stats-icon bg-warning bg-opacity-10 text-warning me-3">
                  <BsClock />
                </div>
                <div>
                  <h6 className="mb-0 text-muted">Pending</h6>
                  <h3>{stats.pending}</h3>
                  <small className="text-warning"><BsExclamationCircle /> Needs attention</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="card stats-card p-3">
              <div className="d-flex align-items-center">
                <div className="stats-icon bg-info bg-opacity-10 text-info me-3">
                  <BsTruck />
                </div>
                <div>
                  <h6 className="mb-0 text-muted">Shipped</h6>
                  <h3>{stats.shipped}</h3>
                  <small className="text-info"><BsArrowRight /> In transit</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="card stats-card p-3">
              <div className="d-flex align-items-center">
                <div className="stats-icon bg-success bg-opacity-10 text-success me-3">
                  <BsCurrencyDollar />
                </div>
                <div>
                  <h6 className="mb-0 text-muted">Revenue</h6>
                  <h3>${stats.revenue.toLocaleString()}</h3>
                  <small className="text-success"><BsArrowUp /> +8% from last week</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Orders</h5>
            <div className="d-flex gap-2">
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  filterOrders();
                }}
                style={{ width: 200 }}
              />
              <select
                className="form-select form-select-sm"
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  filterOrders();
                }}
                style={{ width: 150 }}
              >
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={(e) => toggleAll(e.target.checked)}
                      checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                    />
                  </th>
                  <th onClick={() => sortBy("orderNumber")} className="sortable">Order #</th>
                  <th>Customer</th>
                  <th>Items</th>
                  <th onClick={() => sortBy("total")} className="sortable">Total</th>
                  <th>Status</th>
                  <th onClick={() => sortBy("orderDate")} className="sortable">Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedOrders.map(order => (
                  <tr key={order.id}>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={selectedOrders.includes(order.id)}
                        onChange={(e) =>
                          setSelectedOrders(e.target.checked
                            ? [...selectedOrders, order.id]
                            : selectedOrders.filter(id => id !== order.id)
                          )
                        }
                      />
                    </td>
                    <td>{order.orderNumber}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={order.customer.avatar} alt={order.customer.name} className="rounded-circle me-2" width="40" />
                        <div>
                          <div>{order.customer.name}</div>
                          <small className="text-muted">{order.customer.email}</small>
                        </div>
                      </div>
                    </td>
                    <td>{order.itemCount} item(s)</td>
                    <td>${order.total}</td>
                    <td>
                      <span className={`badge bg-${order.status === "delivered" ? "success" : order.status === "shipped" ? "info" : order.status === "pending" ? "warning" : "secondary"}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{order.orderDate}</td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                          <BsThreeDots />
                        </button>
                        <ul className="dropdown-menu">
                          <li><button className="dropdown-item" onClick={() => viewOrder(order)}><BsEye className="me-2" />View</button></li>
                          <li><button className="dropdown-item" onClick={() => trackOrder(order)}><BsTruck className="me-2" />Track</button></li>
                          <li><button className="dropdown-item" onClick={() => printInvoice(order)}><BsPrinter className="me-2" />Print</button></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><button className="dropdown-item text-danger" onClick={() => cancelOrder(order)}><BsXCircle className="me-2" />Cancel</button></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center p-3">
            <div className="text-muted">
              Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredOrders.length)} of {filteredOrders.length} results
            </div>
            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => goToPage(currentPage - 1)}>Previous</button>
              </li>
              {visiblePages.map(page => (
                <li key={page} className={`page-item ${page === currentPage ? "active" : ""}`}>
                  <button className="page-link" onClick={() => goToPage(page)}>{page}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => goToPage(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
