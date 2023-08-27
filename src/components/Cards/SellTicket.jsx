const SellTicket = ({ isDrawerOpen, handleDrawerClose, children }) => {

  return (
    <div className={`${isDrawerOpen ? "block" : "hidden"}`}>
      <div className="fixed inset-0 bg-gray-900 opacity-50" onClick={handleDrawerClose}></div>
      <div className="bg-white p-6 rounded shadow-md z-10">
        {children}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleDrawerClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SellTicket