const Contact = () => {
  return (
    <div className="bg-pink-50 sm:bg-yellow-50 md:bg-blue-50 lg:bg-green-50 w-full min-h-[85vh] h-full">
      <h1 className="font-bold text-3xl p-4 m-4">Contact US Page</h1>
      <form>
        <input
          placeholder="name"
          type="text"
          className="border border-black p-2 m-2"
        />
        <input
          placeholder="message"
          type="text"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
