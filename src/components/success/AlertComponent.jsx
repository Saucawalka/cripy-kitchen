
const AlertComponent = ({icon, message}) => {
  return (
    <>
      <div className="succ w-75 bg-white">
        <div className=" mx-auto border border-1border-success  text-center rounded-2 p-3 mt-5 flex-row">
          <img src={icon} alt="" width={30} />
          <p className="justify-content-center text-success fw-bold fs-5 mt-3">
            {message}
          </p>
        </div>
      </div>
    </>
  );
};

export default AlertComponent;
