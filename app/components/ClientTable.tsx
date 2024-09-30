"use client";
import React, { useState } from "react";
import ClientStrategy from "./ClientStrategy";

// Define the structure of a client object
type Client = {
  name: string;
  business: string;
  industry: string; // Add industry field
  status: string;
  lastUpdate: string;
  strategyStatus: string;
  details: ClientDetails;
};

export interface ClientDetails {
  name: string;
  businessName: string;
  status: string;
  lastUpdate: string;
  strategyStatus: string;
  identity: string;
  goals: string;
  currentStrategy: string;
  progressCompleted: number;
}

// Sample clients data
const clients: Client[] = [
  {
    name: "Client 1",
    business: "B1",
    industry: "Tech",
    status: "Active",
    lastUpdate: "2024-09-28",
    strategyStatus: "In progress",
    details: {
      name: "Client 1",
      businessName: "B1",
      status: "Active",
      lastUpdate: "2 days ago",
      strategyStatus: "In Progress",
      identity: "Who we are: Company A, focused on sustainability.",
      goals: "To expand market reach by 25% in 3 years.",
      currentStrategy: "Strategy 1: Increase digital marketing efforts.",
      progressCompleted: 45,
    },
  },
  {
    name: "Client 2",
    business: "B2",
    industry: "Finance",
    status: "Inactive",
    lastUpdate: "2024-09-25",
    strategyStatus: "In progress",
    details: {
      name: "Client 2",
      businessName: "B2",
      status: "Active",
      lastUpdate: "1 hour ago",
      strategyStatus: "In Progress",
      identity: "Who we are: Company B, focused on innovation.",
      goals: "Launch new product line by next quarter.",
      currentStrategy: "Strategy 2: Build strategic partnerships.",
      progressCompleted: 85,
    },
  },
  {
    name: "Client 3",
    business: "B3",
    industry: "Healthcare",
    status: "Active",
    lastUpdate: "2024-09-29",
    strategyStatus: "Completed",
    details: {
      name: "Client 3",
      businessName: "B2",
      status: "Active",
      lastUpdate: "1 hour ago",
      strategyStatus: "In Progress",
      identity: "Who we are: Company B, focused on innovation.",
      goals: "Launch new product line by next quarter.",
      currentStrategy: "Strategy 2: Build strategic partnerships.",
      progressCompleted: 100,
    },
  },
  // Add more clients as needed
];

const ClientTable: React.FC = () => {
  const [filterText, setFilterText] = useState(""); // For name filter
  const [filterIndustry, setFilterIndustry] = useState(""); // For industry filter
  const [filterStatus, setFilterStatus] = useState(""); // For status filter
  const [sortField, setSortField] = useState<string | null>(null); // Which field to sort by
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // Ascending or descending
  const [industriesList, setIndustriesList] = useState<string[]>(
    ["All Industries"].concat(clients.map((client) => client.industry))
  );

  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  // Filter clients based on the selected filters
  const filteredClients = clients.filter((client) => {
    return (
      client.name.toLowerCase().includes(filterText.toLowerCase()) &&
      (filterIndustry === "" || client.industry === filterIndustry) &&
      (filterStatus === "" || client.status === filterStatus)
    );
  });

  // Sort the filtered clients based on selected field and order
  const sortedClients = [...filteredClients].sort((a, b) => {
    if (sortField) {
      const fieldA = (a as any)[sortField];
      const fieldB = (b as any)[sortField];

      if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Toggle sort order between ascending and descending
  const handleSort = (field: string) => {
    setExpandedIndex(-1);
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleSearch = (value: string) => {
    setExpandedIndex(-1);
    setFilterText(value);
  };

  const handleIndustyFilter = (value: string) => {
    setExpandedIndex(-1);
    setFilterIndustry(value);
  };

  const handleStatusFilter = (value: string) => {
    setExpandedIndex(-1);
    setFilterStatus(value);
  };

  return (
    <div className="p-6 flex-1 mx-36">
      <h1 className="text-xl font-bold mb-4">Client Management Dashboard</h1>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
        <input
          type="text"
          placeholder="Filter by Name"
          className="p-2 border border-gray-300 rounded"
          value={filterText}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <div>
          <select
            className="p-2 border border-gray-300 rounded mr-4"
            value={filterIndustry}
            onChange={(e) => handleIndustyFilter(e.target.value)}
          >
            {industriesList.map((industry, index) => {
              return (
                <option key={index} value={index === 0 ? "" : industry}>
                  {industry}
                </option>
              );
            })}
            {/* Add more industries as needed */}
          </select>

          <select
            className="p-2 border border-gray-300 rounded"
            value={filterStatus}
            onChange={(e) => handleStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Client Table */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="">
          <tr>
            <th
              className="px-4 py-3 border cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Client Name{" "}
              {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-4 py-3 border">Business Name</th>
            <th
              className="px-4 py-3 border cursor-pointer"
              onClick={() => handleSort("industry")}
            >
              Industry{" "}
              {sortField === "industry" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-4 py-3 border cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Status{" "}
              {sortField === "status" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-4 py-3 border cursor-pointer"
              onClick={() => handleSort("lastUpdate")}
            >
              Last Update{" "}
              {sortField === "lastUpdate" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-4 py-3 border">Strategy Status</th>
          </tr>
        </thead>
        {sortedClients.length > 0 ? (
          sortedClients.map((client, index) => (
            <tbody key={index}>
              <tr
                className="text-center cursor-pointer"
                onClick={() => {
                  if (index === expandedIndex) {
                    setExpandedIndex(-1);
                  } else {
                    setExpandedIndex(index);
                  }
                }}
              >
                <td className="px-4 py-3 border">{client.name}</td>
                <td className="px-4 py-3 border">{client.business}</td>
                <td className="px-4 py-3 border">{client.industry}</td>
                <td className="px-4 py-3 border">{client.status}</td>
                <td className="px-4 py-3 border">{client.lastUpdate}</td>
                <td className="px-4 py-3 border">{client.strategyStatus}</td>
              </tr>
              {index === expandedIndex ? (
                <tr>
                  <td colSpan={6} className="collaps-viewer">
                    <ClientStrategy details={client.details} />
                  </td>
                </tr>
              ) : undefined}
            </tbody>
          ))
        ) : (
          <tr>
            <td className="px-4 py-2 border text-center" colSpan={6}>
              No clients found
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default ClientTable;
