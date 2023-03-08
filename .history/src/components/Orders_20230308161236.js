import { EyeIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import useTable from "./useTable";

export default function Orders() {
  const [search, setSearch] = useState({ status: "" });
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(data);
    setTableRange([...range]);

    const slice = sliceData(data, page);
    setSlice([...slice]);
  }, [data, setTableRange, page, setSlice]);

  let orders = [
    {
      id: "0001",
      name: "José",
      profilePhoto:
        "https://fd230791b4.cbaul-cdnwnd.com/6573da65277e34d2c8f10c32c9f32cbf/200000001-4c1aa4d753/1246700716628_f.jpg",
      status: "Canceled",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0002",
      name: "Maria",
      status: "Refunded",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0003",
      name: "Pedro",
      profilePhoto:
        "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg",
      status: "PendingPayment",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0004",
      name: "Ana",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Aseel%20Profile%20Pic.jpg?h=96281f56&itok=_XvylDKQ",
      status: "Assembling",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0005",
      name: "Joana",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/YutianAn0919_0004.jpg?h=6bb51d0e&itok=D-1_EYgw",
      status: "Scheduling",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0006",
      name: "Rui",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
      status: "Scheduled",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0007",
      name: "Sofia",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Elizabeth-Bachman_092721_0003.jpg?h=102c6dce&itok=uL0Sbls1",
      status: "Canceled",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0008",
      name: "Miguel",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/GordonArsenoff_072721_0014-edit%20%281%29.jpg?h=39a78a6d&itok=hgDXBQsE",
      status: "Refunded",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0009",
      name: "Inês",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-4.jpeg?h=6d5fbd74&itok=UAzUQXdO",
      status: "PendingPayment",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0010",
      name: "Rita",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Al-Shami.jpeg?h=227444a7&itok=hmE_Lctk",
      status: "Assembling",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0011",
      name: "Luís",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Alkhawaldeh_Headshot.jpg?h=6a43611b&itok=RFd3qC78",
      status: "Scheduling",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
    {
      id: "0012",
      name: "João",
      profilePhoto:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/Greg%20Amusu%20Department%20Photo%20%28002%29%202.jpeg?itok=lqtdmKJB",
      status: "Scheduled",
      phone: "912345678",
      email: "jose@cuzinhas.pt",
    },
  ];

  const filteredOrders = orders.filter((order) => {
    if (search.status === "") {
      return order;
    } else if (order.status === search.status) {
      return order;
    }
  });

  const calculateRange = (data) => {
    const range = [];
    const num = Math.ceil(data.length / 10);
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  const sliceData = (data, page) => {
    return data.slice((page - 1) * 10, page * 10);
  };
  return (
    <UseTable(orders) />
  );
}
