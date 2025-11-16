import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, address, company }) => {
  return (
    <div className="border shadow-md rounded-lg p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700">@{company?.name}</p>

      <div className="mt-2 text-sm text-gray-600">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>City:</strong> {address?.city}</p>
      </div>

      <button className="mt-3 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;
