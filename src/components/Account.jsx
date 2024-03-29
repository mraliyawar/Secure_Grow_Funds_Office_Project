import React, { useContext, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import img1 from "../images/logo.png";
import img2 from "../images/lang.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Account = ({
  account,
  maticBalance,
  partnersCount,
  directBusiness,
  totalReward,
  usdtBalance,
}) => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-around items-center w-[100%] h-20 bg-[#222222] text-white ">
        <div className="w-[60%] flex  items-center  p-4">
          <div
            className=" flex justify-end items-center mr-4 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <IoReorderThreeOutline className="login_btn mx-5 p-1 mt-2" />
          </div>

          <img src={img1} alt="" className="w-24" />
        </div>

        <div className="flex justify-around  lg:w-[40%] mr-2">
          {show && (
            <ul className="flex bg-black border-b-[1px] border-b-[#3fd8d6] text-[#3fd8d6] p-2 rounded-xl justify-between w-full cursor-pointer">
              <Link to="/russ">
                <li>Russian</li>
              </Link>
              <Link to="/account">
                <li>English</li>
              </Link>
              <Link to="/spanish">
                <li>Spanish</li>
              </Link>
              <li>Korean</li>
              <li>Nepal</li>
              <li>Bengali</li>
            </ul>
          )}
        </div>

        <div className="w-[13%]  flex cursor-pointer p-1">
          <span className="login_btn inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start cursor-pointer p-1 ">
            <div className=" rounded-full w-[100%] flex justify-center items-center text-[30px] ">
              <FaTelegramPlane className="p-1 text-black bg-[#f1a330] rounded-full" />
            </div>
          </span>
          <img
            src={img2}
            alt=""
            className="w-10  mx-5"
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
      {open && (
        <SideBar className="fixed z-[99]" open={open} setOpen={setOpen} />
      )}

      {/* header ends */}
      <div className="min-h-[60vh] absolute top-20 bg-[#222222] bg-cover flex text-white flex-wrap ">
        <div className="card  md:mx-3 w-full md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4 ">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              My Deposit
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">
              {maticBalance}
            </h6>
          </div>
        </div>
        <div className="card w-full md:mx-2 md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Direct Business
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">
              {directBusiness}
            </h6>
          </div>
        </div>

        <div className="card w-full md:mx-2 md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              My Team
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">
              {partnersCount}
            </h6>
          </div>
        </div>

        <div className="card w-full md:mx-2 md:w-[22%] h-[25vh] lg:mx-5 lg:mt-4">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Total Reward
            </h5>
          </div>
          <div>
            <h6 className="ml-4 mt-4 text-[1rem] font-medium">{totalReward}</h6>
          </div>
        </div>

        <div className="card border border-[#eb9d37] w-full md:min-w-[22%] lg:min-w-[22%]  h-[25vh] mx-5 box-border text-pretty ">
          <div className=" border border-[#eb9d37] h-[45%] flex items-center justify-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Sponsor's Address
            </h5>
          </div>
          <div
            className="relative   break-words h-[55%] flex justify-center items-center p-5 rounded-lg "
            style={{ overflowWrap: "anywhere" }}
          >
            <h6 className=" text-[1rem] font-medium  ">{account}</h6>
          </div>
        </div>
        <div className="card  w-full md:w-[44%]  lg:w-[47%] h-[25vh] mx-5 lg:mt-4">
          <div className=" border  border-[#eb9d37] h-[45%] flex items-center justify-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Your Referral Link
            </h5>
          </div>
          <div className="flex justify-around items-center h-[55%] ">
            <h6 className=" text-[1.2rem] font-medium">need to register</h6>
            <FaRegCopy className="cursor-pointer" />
          </div>
        </div>
        {/* md:w-[22%] */}
        <div className="card  w-full md:w-[44%]  lg:w-[47%] h-[25vh] mx-5 lg:mt-4">
          <div className=" border  border-[#eb9d37] h-[45%] flex items-center justify-center rounded-lg ">
            <h5 className="text-[#eb9d37] text-[1.25rem] ml-4 font-medium">
              Withdraw
            </h5>
          </div>
          <div className="flex justify-center items-center  h-[55%]">
            {/* <h6 className="ml-4 mt-4 text-[1rem] font-medium">0 USDT</h6> */}
            <button className="w-[240px] bg-[#bd771c] text-white rounded p-2 text-[1rem] ">
              Withdraw
            </button>
          </div>
        </div>

        <div className=" px-4 flex flex-col w-full justify-center items-center bg-[#222222] lg:p-0 ">
          <div className=" w-full md:w-2/3 h-[50vh] bg-black border border-[#eb9d37] rounded-xl ">
            <div className=" border  border-[#eb9d37] h-[30%] flex items-center justify-center rounded-xl ">
              <h5 className="text-[#eb9d37] text-[1.5rem] ml-4 font-medium ">
                DEPOSIT
              </h5>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[70%]  ">
              <div className="flex flex-col mt-8 p-5 w-full  justify-around text-white font-medium">
                <p className="">Wallet Balance</p>
                <p className="">
                  Matic Balance : {maticBalance} || USDT Balance : {usdtBalance}{" "}
                  USDT
                </p>
                <div className="w-[100%] mt-4 ">
                  <input
                    type="text"
                    className="w-full h-10 rounded p-2"
                    placeholder="amount"
                  />
                </div>
                <div className="w-full flex justify-center items-center mt-4">
                  <button className="w-[240px] bg-[#bd771c] text-white border border-[#e79d2f] text-[1rem] p-2 font-normal rounded">
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 flex w-full justify-center items-center bg-[#222222] lg:p-0 ">
          <div className="w-full md:w-2/3 h-[50vh] bg-black border border-[#eb9d37] rounded-xl mt-6">
            <div className=" border  border-[#eb9d37] h-[30%] flex items-center justify-center rounded-xl ">
              <h5 className="text-[#eb9d37] text-[1.5rem] ml-4 font-medium ">
                REWARD WALLET DEPOSIT
              </h5>
            </div>
            <div className="flex  flex-col justify-center items-center w-full h-[70%]  ">
              <div className="flex flex-col mt-8 p-5 w-full h-36 justify-around text-white font-medium">
                <p className="">Reward Wallet Balance:0</p>
                {/* <p className="">Matic Balance : 0 MATIC USDT Balance : 0 USDT</p> */}
                <div className="w-[100%] mt-4 ">
                  <input
                    type="text"
                    className="w-full h-10 rounded p-2"
                    placeholder="amount"
                  />
                </div>
                <div className="w-full flex justify-center items-center mt-4">
                  <button className="w-[240px] bg-[#bd771c] text-white border border-[#e79d2f] text-[1rem] p-2 font-normal rounded">
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" px-4 lg:p-0 flex w-full justify-center items-center bg-[#222222]  ">
          <div className="w-full md:w-2/3 h-[60vh] bg-black border border-[#eb9d37] rounded-xl mt-6 ">
            <div className=" border  border-[#eb9d37] h-[20%] flex items-center justify-center rounded-xl ">
              <h5 className="text-[#eb9d37] text-[1.5rem] ml-4 font-medium ">
                REWARD WALLET TRANSFER
              </h5>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[80%]  ">
              <div className="flex flex-col mt-8 p-5 w-full h-36 justify-around text-white font-medium">
                <p className="">Reward Wallet Balance:0</p>
                {/* <p className="">Matic Balance : 0 MATIC USDT Balance : 0 USDT</p> */}
                <div className="w-[100%] mt-4 ">
                  <input
                    type="text"
                    className="w-full h-10 rounded p-2"
                    placeholder="amount"
                  />
                </div>
                <p className="mt-6">Receiver address</p>
                {/* <p className="">Matic Balance : 0 MATIC USDT Balance : 0 USDT</p> */}
                <div className="w-[100%] mt-4 ">
                  <input
                    type="text"
                    className="w-full h-10 rounded p-2"
                    placeholder="amount"
                  />
                </div>
                <div className="w-full flex justify-center items-center mt-4">
                  <button className="w-[240px] bg-[#bd771c] text-white border border-[#e79d2f] text-[1rem] p-2 font-normal rounded">
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
