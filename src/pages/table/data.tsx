interface IKeys {
  key: string;
  label: string;
}

export interface ParamObject {
  [key: string]: any;
}

export const dataListCollumn2 = [
  {
    key: "fundName",
    label: "Quỹ",
    type: "text",
    size: 240,
    minSize: 240,
    maxSize: 500,
    align: "left",
    copy: false,
    typeFilter: "text",
  },
  {
    key: "fundCode",
    label: "Mã quỹ",
    type: "text",
    size: 110,
    minSize: 110,
    maxSize: 500,
    align: "left",
    copy: false,
    typeFilter: "text",
  },
  {
    key: "memberAccount",
    label: "STK thành viên lưu ký",
    type: "text",
    minSize: 200,
    size: 200,
    maxSize: 500,
    align: "left",
    copy: false,
    typeFilter: "text",
  },
  {
    key: "fundType",
    label: "Loại quỹ",
    type: "text",
    minSize: 120,
    size: 120,
    maxSize: 500,
    align: "left",
    copy: false,
    typeFilter: "text",
  },
  {
    key: "company",
    label: "Công ty quản lý quỹ",
    type: "text",
    minSize: 230,
    size: 230,
    maxSize: 500,
    align: "left",
    copy: false,
    typeFilter: "text",
  },
  {
    key: "price",
    label: "Mệnh giá ",
    type: "number",
    minSize: 120,
    size: 120,
    maxSize: 500,
    align: "right",
    copy: false,
    typeFilter: "minmaxNumber",
  },
  {
    key: "volumn",
    label: "KL phát hành",
    type: "number",
    minSize: 160,
    size: 160,
    maxSize: 500,
    align: "right",
    copy: false,
    typeFilter: "minmaxNumber",
  },
  {
    key: "code",
    label: "Tham chiếu ",
    type: "text",
    minSize: 0,
    maxSize: 500,
    size: 100,
    align: "left",
    copy: false,
    typeFilter: "text",
  },
  {
    key: "status",
    label: "TT",
    type: "status",
    minSize: 0,
    maxSize: 500,
    size: 80,
    align: "center",
    copy: false,
    typeFilter: "select",
    listSelectOption: [
      { value: "", label: "- Tất cả -" },
      { value: 1, label: "Duyệt" },
      { value: 2, label: "Chờ duyệt" },
      { value: 3, label: "Từ chối" },
    ],
  },
  {
    key: "setting",
    label: "",
    type: "setting",
    minSize: 0,
    maxSize: 500,
    size: 60,
    align: "center",
    copy: false,
    typeFilter: "",
  },
];

export type Item2 = {
  id: number;
  fundName: string;
  fundCode: string;
  memberAccount: string;
  fundType: string;
  company: string;
  price: string;
  volumn: string;
  code: string;
  status: 1 | 2 | 3;
};

export const data2: Item2[] = [
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "6.000.000",
    code: "VN30",
    status: 1,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "55.000.000",
    code: "VN30",
    status: 3,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "6.0040.000",
    code: "VN30",
    status: 2,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "42.000.000",
    code: "VN30",
    status: 1,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "6.000.000",
    code: "VN30",
    status: 1,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "55.000.000",
    code: "VN30",
    status: 3,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "6.0040.000",
    code: "VN30",
    status: 2,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "42.000.000",
    code: "VN30",
    status: 1,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "6.000.000",
    code: "VN30",
    status: 1,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "55.000.000",
    code: "VN30",
    status: 3,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "6.0040.000",
    code: "VN30",
    status: 2,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "42.000.000",
    code: "VN30",
    status: 1,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "6.000.000",
    code: "VN30",
    status: 1,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "55.000.000",
    code: "VN30",
    status: 3,
  },
  {
    id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
    fundName:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    fundCode: "VBAAVNVX",
    memberAccount: "32198742387",
    fundType: "ETF",
    company:
      "VietcomBank - Joint Stock Commercial Bank for Foreign Trade of Vietnam",
    price: "20.900",
    volumn: "6.0040.000",
    code: "VN30",
    status: 2,
  },
];
