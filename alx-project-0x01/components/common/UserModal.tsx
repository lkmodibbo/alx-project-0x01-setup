import React from "react";
import { UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-xl font-semibold mb-4">
          {user ? "User Details" : "Add New User"}
        </h2>

        {user ? (
          <div className="space-y-2">
            <p><span className="font-semibold">Name:</span> {user.name}</p>
            <p><span className="font-semibold">Username:</span> {user.username}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Phone:</span> {user.phone}</p>
            <p><span className="font-semibold">Website:</span> {user.website}</p>

            <div className="mt-4">
              <h3 className="font-semibold">Address</h3>
              <p>{user.address.street}, {user.address.city}</p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">Company</h3>
              <p>{user.company.name}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">You can add a form here later.</p>
        )}

        <button
          onClick={onClose}
          className="mt-6 bg-red-600 text-white w-full py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
